(function(){

  var I18N = {
    de: {
      navProgramm: 'Programm', navLunch: 'Mittagessen', navExk: 'Exkursionen', navVenue: 'Tagungsort', navPlan: 'Mein Plan',
      titleProgramm: 'Programm', titleLunch: 'Mittagessen in der Nähe', titleExk: 'Exkursionen', titleVenue: 'Tagungsort', titlePlan: 'Mein Plan',
      mod: 'Mod.:', noAbstract: 'Kein Abstract verfügbar.',
      planEmpty: 'Noch nichts geplant.<br>Tippe im Programm auf das + Symbol, um Sessions oder Beiträge hinzuzufügen.',
      planNote: 'Dein Plan wird lokal in diesem Browser gespeichert. Auf einem anderen Gerät oder in einem anderen Browser ist er nicht sichtbar.',
      exportBtn: 'Als Kalender exportieren (.ics)',
      exportEmptyAlert: 'Dein Plan ist noch leer.',
      route: 'Route', website: 'Website',
      openMaps: 'In Google Maps öffnen',
      oepnvLabel: 'ÖPNV:',
      min: 'Min',
      headerTitle: '41. DGL-Jahrestagung & WRHC',
      headerDates: '14.–18. September 2026',
      searchPlaceholder: 'Suche nach Titel, Autor:in, Stichwort...',
      noResults: 'Keine Treffer.',
      liveNow: 'Läuft gerade',
      weatherTitle: 'Wetter während der Tagung',
      weatherUnavailable: 'Die Wetterprognose ist erst ca. 10 Tage vor der Tagung verfügbar.',
      weatherError: 'Wetterdaten konnten nicht geladen werden.',
      planConflict: 'Zeitliche Überschneidung mit:'
    },
    en: {
      navProgramm: 'Programme', navLunch: 'Lunch', navExk: 'Excursions', navVenue: 'Venue', navPlan: 'My Plan',
      titleProgramm: 'Programme', titleLunch: 'Lunch nearby', titleExk: 'Excursions', titleVenue: 'Venue', titlePlan: 'My Plan',
      mod: 'Chairs:', noAbstract: 'No abstract available.',
      planEmpty: 'Nothing planned yet.<br>Tap the + icon in the programme to add sessions or talks.',
      planNote: 'Your plan is stored locally in this browser. It is not visible on another device or in another browser.',
      exportBtn: 'Export to calendar (.ics)',
      exportEmptyAlert: 'Your plan is still empty.',
      route: 'Directions', website: 'Website',
      openMaps: 'Open in Google Maps',
      oepnvLabel: 'Public transport:',
      min: 'min',
      headerTitle: '41st DGL Annual Conference & WRHC',
      headerDates: '14–18 September 2026',
      searchPlaceholder: 'Search by title, author, keyword...',
      noResults: 'No results.',
      liveNow: 'Happening now',
      weatherTitle: 'Weather during the conference',
      weatherUnavailable: 'The forecast becomes available roughly 10 days before the conference.',
      weatherError: 'Could not load weather data.',
      planConflict: 'Overlaps with:'
    }
  };
  var LANG_KEY = 'dgl2026_lang_v1';
  var lang = (function(){
    try{ return localStorage.getItem(LANG_KEY) || 'de'; }catch(e){ return 'de'; }
  })();
  function t(key){ return I18N[lang][key]; }

  function applyStaticI18n(){
    document.getElementById('headerTitle').textContent = t('headerTitle');
    document.getElementById('headerDates').textContent = t('headerDates');
    document.getElementById('navProgramm').textContent = t('navProgramm');
    document.getElementById('navLunch').textContent = t('navLunch');
    document.getElementById('navExk').textContent = t('navExk');
    document.getElementById('navVenue').textContent = t('navVenue');
    document.getElementById('navPlan').textContent = t('navPlan');
    document.getElementById('titleProgramm').textContent = t('titleProgramm');
    document.getElementById('titleLunch').textContent = t('titleLunch');
    document.getElementById('titleExk').textContent = t('titleExk');
    document.getElementById('titleVenue').textContent = t('titleVenue');
    document.getElementById('titlePlan').textContent = t('titlePlan');
    document.getElementById('exportPlanBtnText').textContent = t('exportBtn');
    document.getElementById('planNote').textContent = t('planNote');
    document.getElementById('programmSearch').placeholder = t('searchPlaceholder');
    document.querySelectorAll('.lang-btn').forEach(function(b){
      b.classList.toggle('active', b.getAttribute('data-lang') === lang);
    });
  }

  document.querySelectorAll('.lang-btn').forEach(function(btn){
    btn.addEventListener('click', function(){
      lang = btn.getAttribute('data-lang');
      try{ localStorage.setItem(LANG_KEY, lang); }catch(e){}
      applyStaticI18n();
      renderAll();
      if(typeof searchInputEl !== 'undefined' && searchInputEl.value){
        renderSearchResults(searchInputEl.value);
      }
    });
  });


  var PLAN_KEY = 'dgl2026_plan_v1';

  function loadPlan(){
    try{
      var raw = localStorage.getItem(PLAN_KEY);
      return raw ? JSON.parse(raw) : [];
    }catch(e){ return []; }
  }
  function savePlan(plan){
    try{ localStorage.setItem(PLAN_KEY, JSON.stringify(plan)); }catch(e){}
  }
  var plan = loadPlan();

  function isInPlan(id){
    return plan.some(function(p){ return p.id === id; });
  }
  function togglePlan(item){
    var idx = plan.findIndex(function(p){ return p.id === item.id; });
    if(idx >= 0){ plan.splice(idx,1); }
    else{ plan.push(item); }
    savePlan(plan);
    render();
  }

  function esc(s){
    if(s === null || s === undefined) return '';
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  // ---------- Shared time helpers ----------
  var debugNowOverride = null;
  function nowDate(){
    return debugNowOverride ? new Date(debugNowOverride) : new Date();
  }
  function dateForDay(dayId){
    var map = { mo:'20260914', di:'20260915', mi:'20260916', do:'20260917', fr:'20260918' };
    return map[dayId] || '20260914';
  }
  function parseStartTime(timeStr){
    var m = timeStr.match(/(\d{1,2}):(\d{2})/);
    return m ? (m[1].padStart(2,'0') + m[2]) : '0900';
  }
  function parseTimeRangeMinutes(str){
    if(!str) return null;
    var parts = str.split('–');
    var m1 = parts[0].match(/(\d{1,2}):(\d{2})/);
    if(!m1) return null;
    var start = parseInt(m1[1],10)*60 + parseInt(m1[2],10);
    var end;
    if(parts.length > 1){
      var m2 = parts[1].match(/(\d{1,2}):(\d{2})/);
      end = m2 ? parseInt(m2[1],10)*60 + parseInt(m2[2],10) : start + 45;
    } else {
      end = start + 45;
    }
    return { start: start, end: end };
  }
  function blockDateRange(dayId, timeStr){
    var range = parseTimeRangeMinutes(timeStr);
    if(!range) return null;
    var ds = dateForDay(dayId);
    var y = parseInt(ds.substr(0,4),10), mo = parseInt(ds.substr(4,2),10)-1, da = parseInt(ds.substr(6,2),10);
    var start = new Date(y, mo, da, Math.floor(range.start/60), range.start%60);
    var end = new Date(y, mo, da, Math.floor(range.end/60), range.end%60);
    return { start: start, end: end };
  }
  function isBlockNow(dayId, timeStr){
    var r = blockDateRange(dayId, timeStr);
    if(!r) return false;
    var now = nowDate();
    return now >= r.start && now <= r.end;
  }
  function isToday(dayId){
    var ds = dateForDay(dayId);
    var now = nowDate();
    var pad = function(n){ return String(n).padStart(2,'0'); };
    var todayStr = '' + now.getFullYear() + pad(now.getMonth()+1) + pad(now.getDate());
    return ds === todayStr;
  }

  // ---------- Navigation ----------
  var views = ['programm','lunch','exkursionen','venue','plan'];
  document.querySelectorAll('nav.bottom-nav button').forEach(function(btn){
    btn.addEventListener('click', function(){
      var target = btn.getAttribute('data-view');
      views.forEach(function(v){
        document.getElementById('view-'+v).classList.toggle('active', v === target);
      });
      document.querySelectorAll('nav.bottom-nav button').forEach(function(b){
        b.classList.toggle('active', b === btn);
      });
      if(target === 'plan') renderPlan();
      window.scrollTo(0,0);
    });
  });

  // ---------- Programm ----------
  var currentDay = DATA.programm[0].id;

  function renderDayTabs(){
    var wrap = document.getElementById('dayTabs');
    wrap.innerHTML = '';
    DATA.programm.forEach(function(day){
      var b = document.createElement('div');
      b.className = 'day-tab' + (day.id === currentDay ? ' active' : '');
      var dayLabel = lang === 'en' ? day.label_en : day.label;
      b.innerHTML = esc(dayLabel + ' ' + day.date.split('.')[0] + '.') + (isToday(day.id) ? '<span class="day-tab-dot"></span>' : '');
      b.addEventListener('click', function(){
        currentDay = day.id;
        expandedSessions = {};
        expandedTalks = {};
        renderDayTabs();
        renderProgrammList();
      });
      wrap.appendChild(b);
    });
  }

  function planIdForBlock(dayId, block){
    return 'b_' + dayId + '_' + block.time;
  }
  function planIdForSession(dayId, block, s){
    return 's_' + dayId + '_' + block.time + '_' + s.room;
  }
  function planIdForTalk(dayId, block, s, talk, idx){
    return 't_' + dayId + '_' + block.time + '_' + s.room + '_' + idx;
  }

  var expandedSessions = {};
  var expandedTalks = {};

  function renderProgrammList(){
    var day = DATA.programm.find(function(d){ return d.id === currentDay; });
    var list = document.getElementById('programmList');
    list.innerHTML = '';
    day.blocks.forEach(function(block){
      var card = document.createElement('div');
      var blockIsNow = isToday(day.id) && isBlockNow(day.id, block.time);
      card.className = 'card' + (blockIsNow ? ' now-live' : '');
      var liveBadgeHtml = blockIsNow ? '<div class="live-badge"><span class="dot"></span>' + t('liveNow') + '</div>' : '';

      if(block.type === 'info'){
        var id = planIdForBlock(day.id, block);
        card.id = 'row-' + id;
        var added = isInPlan(id);
        var blockTitle = (lang === 'en' && block.title_en) ? block.title_en : block.title;
        var blockSubtitle = (lang === 'en' && block.subtitle_en) ? block.subtitle_en : block.subtitle;
        var showAddBtn = !block.noPlan;
        card.innerHTML =
          liveBadgeHtml +
          '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px;">' +
            '<div style="flex:1;min-width:0;">' +
              '<div class="block-time">' + esc(block.time) + '</div>' +
              '<div class="block-title">' + esc(blockTitle) + '</div>' +
              (blockSubtitle ? '<div class="block-subtitle">' + esc(blockSubtitle) + '</div>' : '') +
              (block.room ? '<div class="block-room">' + esc(block.room) + '</div>' : '') +
            '</div>' +
            (showAddBtn ? '<button class="add-btn' + (added ? ' added' : '') + '" data-id="' + id + '">' + (added ? '&#10003;' : '+') + '</button>' : '') +
          '</div>';
        if(showAddBtn){
          card.querySelector('.add-btn').addEventListener('click', function(){
            togglePlan({
              id: id, dayId: day.id, dayLabel: day.label, date: day.date,
              time: block.time, title: blockTitle, subtitle: blockSubtitle || '', room: block.room || ''
            });
          });
        }
      } else {
        if(blockIsNow){
          var liveBadgeEl = document.createElement('div');
          liveBadgeEl.className = 'live-badge';
          liveBadgeEl.innerHTML = '<span class="dot"></span>' + t('liveNow');
          card.appendChild(liveBadgeEl);
        }
        var head = document.createElement('div');
        head.className = 'block-time';
        head.textContent = block.time;
        card.appendChild(head);
        block.sessions.forEach(function(s){
          var sid = planIdForSession(day.id, block, s);
          var sadded = isInPlan(sid);
          var hasTalks = s.talks && s.talks.length > 0;
          var expandKey = sid;
          var isOpen = !!expandedSessions[expandKey];

          var row = document.createElement('div');
          row.className = 'session-row';
          row.id = 'row-' + sid;

          var header = document.createElement('div');
          header.className = 'session-header';
          var contSuffix = s.isContinuation ? (lang === 'en' ? " (cont'd)" : ' (Forts.)') : '';
          header.innerHTML =
            '<div class="session-main">' +
              '<span class="session-tag">' + esc(s.code) + '</span><span class="session-room">' + esc(s.room) + '</span>' +
              '<div class="session-title">' + esc(s.title) + contSuffix + '</div>' +
              (s.mod ? '<div class="session-mod">' + t('mod') + ' ' + esc(s.mod) + '</div>' : '') +
            '</div>' +
            '<div class="session-btns">' +
              '<button class="add-btn' + (sadded ? ' added' : '') + '" data-role="session-add">' + (sadded ? '&#10003;' : '+') + '</button>' +
              (hasTalks ? '<div class="chevron' + (isOpen ? ' open' : '') + '">&#9656;</div>' : '') +
            '</div>';
          row.appendChild(header);

          header.querySelector('[data-role="session-add"]').addEventListener('click', function(ev){
            ev.stopPropagation();
            togglePlan({
              id: sid, dayId: day.id, dayLabel: day.label, date: day.date,
              time: block.time, title: s.code + ' · ' + s.title + contSuffix, subtitle: s.mod ? t('mod') + ' ' + s.mod : '', room: s.room
            });
          });

          if(hasTalks){
            header.style.cursor = 'pointer';
            header.addEventListener('click', function(ev){
              if(ev.target.closest('[data-role="session-add"]')) return;
              var wasOpen = !!expandedSessions[expandKey];
              expandedSessions = {};
              if(!wasOpen){ expandedSessions[expandKey] = true; }
              renderProgrammList();
            });
          }

          if(hasTalks && isOpen){
            var talkList = document.createElement('div');
            talkList.className = 'talk-list';

            var sessionAbstract = lang === 'en' ? s.abstract_en : s.abstract_de;
            if(sessionAbstract){
              var sAbBox = document.createElement('div');
              sAbBox.className = 'abstract-box';
              sAbBox.textContent = sessionAbstract;
              talkList.appendChild(sAbBox);
            }

            s.talks.forEach(function(talk, idx){
              var tid = planIdForTalk(day.id, block, s, talk, idx);
              var tadded = isInPlan(tid);
              var talkOpen = !!expandedTalks[tid];
              var trow = document.createElement('div');
              trow.className = 'talk-row';
              trow.id = 'row-' + tid;
              trow.innerHTML =
                '<div class="talk-main">' +
                  '<div class="talk-time">' + esc(talk.time) + '</div>' +
                  '<div class="talk-title">' + esc(talk.title) + '</div>' +
                  '<div class="talk-authors">' + esc(talk.authors) + '</div>' +
                '</div>' +
                '<button class="add-btn small' + (tadded ? ' added' : '') + '" data-id="' + tid + '">' + (tadded ? '&#10003;' : '+') + '</button>';
              trow.querySelector('.talk-main').addEventListener('click', function(){
                var wasOpen = !!expandedTalks[tid];
                expandedTalks = {};
                if(!wasOpen){ expandedTalks[tid] = true; }
                renderProgrammList();
              });
              trow.querySelector('.add-btn').addEventListener('click', function(ev){
                ev.stopPropagation();
                togglePlan({
                  id: tid, dayId: day.id, dayLabel: day.label, date: day.date,
                  time: talk.time, title: talk.title, subtitle: talk.authors + ' · ' + s.code + ' (' + s.room + ')', room: s.room
                });
              });
              talkList.appendChild(trow);
              if(talkOpen){
                var abBox = document.createElement('div');
                if(talk.abstract){
                  abBox.className = 'abstract-box';
                  abBox.textContent = talk.abstract;
                } else {
                  abBox.className = 'abstract-empty';
                  abBox.textContent = t('noAbstract');
                }
                talkList.appendChild(abBox);
              }
            });
            row.appendChild(talkList);
          }

          card.appendChild(row);
        });
      }
      list.appendChild(card);
    });
  }

  // ---------- Search ----------
  var searchIndex = [];
  (function buildSearchIndex(){
    DATA.programm.forEach(function(day){
      day.blocks.forEach(function(block){
        if(block.type === 'info'){
          var id = planIdForBlock(day.id, block);
          searchIndex.push({
            kind: 'info', dayId: day.id, jumpId: id, timeLabel: block.time,
            text: [block.title, block.title_en, block.subtitle, block.subtitle_en].filter(Boolean).join(' '),
            title: block.title, title_en: block.title_en
          });
        } else {
          block.sessions.forEach(function(s){
            var sid = planIdForSession(day.id, block, s);
            searchIndex.push({
              kind: 'session', dayId: day.id, jumpId: sid, sid: sid, timeLabel: block.time,
              text: [s.code, s.title, s.mod].filter(Boolean).join(' '),
              title: s.code + ' · ' + s.title, sub: s.mod ? ('Mod.: ' + s.mod) : '',
              hasTalks: !!(s.talks && s.talks.length)
            });
            (s.talks || []).forEach(function(talk, idx){
              var tid = planIdForTalk(day.id, block, s, talk, idx);
              searchIndex.push({
                kind: 'talk', dayId: day.id, jumpId: tid, sid: sid, timeLabel: talk.time,
                text: [talk.title, talk.authors, s.code].filter(Boolean).join(' '),
                title: talk.title, sub: talk.authors
              });
            });
          });
        }
      });
    });
  })();

  var dayLabelMap = {};
  DATA.programm.forEach(function(d){ dayLabelMap[d.id] = { de: d.label, en: d.label_en }; });

  function renderSearchResults(query){
    var wrap = document.getElementById('searchResults');
    var q = query.trim().toLowerCase();
    if(!q){
      wrap.style.display = 'none';
      document.getElementById('dayTabs').style.display = '';
      document.getElementById('programmList').style.display = '';
      return;
    }
    document.getElementById('dayTabs').style.display = 'none';
    document.getElementById('programmList').style.display = 'none';
    wrap.style.display = 'block';
    wrap.innerHTML = '';

    var matches = searchIndex.filter(function(entry){
      return entry.text.toLowerCase().indexOf(q) !== -1;
    }).slice(0, 25);

    if(matches.length === 0){
      wrap.innerHTML = '<div class="search-no-results">' + t('noResults') + '</div>';
      return;
    }

    matches.forEach(function(m){
      var item = document.createElement('div');
      item.className = 'search-result-item';
      var dl = dayLabelMap[m.dayId];
      var dayLabel = dl ? (lang === 'en' ? dl.en : dl.de) : '';
      var title = (m.kind === 'info' && lang === 'en' && m.title_en) ? m.title_en : m.title;
      item.innerHTML =
        '<div class="search-result-day">' + esc(dayLabel) + ' · ' + esc(m.timeLabel) + '</div>' +
        '<div class="search-result-title">' + esc(title) + '</div>' +
        (m.sub ? '<div class="search-result-sub">' + esc(m.sub) + '</div>' : '');
      item.addEventListener('click', function(){
        currentDay = m.dayId;
        expandedSessions = {};
        expandedTalks = {};
        if(m.kind === 'session' && m.hasTalks){ expandedSessions[m.sid] = true; }
        if(m.kind === 'talk'){ expandedSessions[m.sid] = true; expandedTalks[m.jumpId] = true; }
        document.getElementById('programmSearch').value = '';
        document.getElementById('searchClearBtn').style.display = 'none';
        wrap.style.display = 'none';
        document.getElementById('dayTabs').style.display = '';
        document.getElementById('programmList').style.display = '';
        renderDayTabs();
        renderProgrammList();
        setTimeout(function(){
          var el = document.getElementById('row-' + m.jumpId);
          if(el) el.scrollIntoView({behavior:'smooth', block:'center'});
        }, 50);
      });
      wrap.appendChild(item);
    });
  }

  var searchInputEl = document.getElementById('programmSearch');
  var searchClearEl = document.getElementById('searchClearBtn');
  searchInputEl.addEventListener('input', function(){
    searchClearEl.style.display = searchInputEl.value ? 'block' : 'none';
    renderSearchResults(searchInputEl.value);
  });
  searchClearEl.addEventListener('click', function(){
    searchInputEl.value = '';
    searchClearEl.style.display = 'none';
    renderSearchResults('');
  });

  // ---------- Mittagessen ----------
  var lunchTypes = ['Alle'].concat(Array.from(new Set(DATA.lunch.map(function(l){ return l.typ; }))));
  var currentLunchFilter = 'Alle';
  var typeEnMap = {};
  DATA.lunch.forEach(function(l){ typeEnMap[l.typ] = l.typ_en; });

  function renderLunchFilters(){
    var wrap = document.getElementById('lunchFilters');
    wrap.innerHTML = '';
    var allLabel = lang === 'en' ? 'All' : 'Alle';
    lunchTypes.forEach(function(typ){
      var displayLabel = typ === 'Alle' ? allLabel : (lang === 'en' ? (typeEnMap[typ] || typ) : typ);
      var chip = document.createElement('div');
      chip.className = 'filter-chip' + (typ === currentLunchFilter ? ' active' : '');
      chip.textContent = displayLabel;
      chip.addEventListener('click', function(){
        currentLunchFilter = typ;
        renderLunchFilters();
        renderLunchList();
      });
      wrap.appendChild(chip);
    });
  }

  function renderLunchList(){
    var list = document.getElementById('lunchList');
    list.innerHTML = '';
    var items = DATA.lunch.filter(function(l){
      return currentLunchFilter === 'Alle' || l.typ === currentLunchFilter;
    }).slice().sort(function(a,b){ return a.distM - b.distM; });

    items.forEach(function(l){
      var card = document.createElement('div');
      card.className = 'card';
      var typDisplay = lang === 'en' ? l.typ_en : l.typ;
      var noteDisplay = lang === 'en' ? l.note_en : l.note;
      var mapsUrl = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(l.name + ', ' + (l.address||''));
      card.innerHTML =
        '<div class="lunch-card">' +
          '<div style="flex:1;min-width:0;">' +
            '<div class="lunch-name">' + esc(l.name) + '</div>' +
            '<div class="lunch-meta">' + esc(typDisplay) + (l.hours ? ' · ' + esc(l.hours) : '') + '</div>' +
            '<div class="lunch-meta">' + esc(l.address || '') + '</div>' +
            (noteDisplay ? '<div class="lunch-note">' + esc(noteDisplay) + '</div>' : '') +
          '</div>' +
          '<div class="lunch-dist">' + l.distMin + ' ' + t('min') + '<br>' + l.distM + ' m</div>' +
        '</div>' +
        '<div class="lunch-links">' +
          '<a class="pill-link" href="' + mapsUrl + '" target="_blank" rel="noopener">' + t('route') + '</a>' +
          (l.link ? '<a class="pill-link" href="' + esc(l.link) + '" target="_blank" rel="noopener">' + t('website') + '</a>' : '') +
          (l.phone ? '<a class="pill-link" href="tel:' + esc(l.phone.replace(/\s+/g,'')) + '">' + esc(l.phone) + '</a>' : '') +
        '</div>';
      list.appendChild(card);
    });
  }

  // ---------- Exkursionen ----------
  var expandedExk = {};

  function renderExkursionen(){
    var list = document.getElementById('exkList');
    list.innerHTML = '';
    var leitungLabel = lang === 'en' ? 'Lead:' : 'Leitung:';
    DATA.exkursionen.forEach(function(e){
      var card = document.createElement('div');
      card.className = 'card';
      var title = lang === 'en' ? e.title_en : e.title;
      var day = lang === 'en' ? e.day_en : e.day;
      var time = lang === 'en' ? e.time_en : e.time;
      var cost = lang === 'en' ? e.cost_en : e.cost;
      var hasDetails = !!e.details;
      var isOpen = !!expandedExk[e.id];

      var header = document.createElement('div');
      header.className = 'exk-header';
      header.innerHTML =
        '<div style="flex:1;min-width:0;">' +
          '<div class="exk-title">' + esc(e.id) + ': ' + esc(title) + '</div>' +
          '<div class="exk-meta">' + esc(day) + ' · ' + esc(time) + '</div>' +
          '<div class="exk-meta">' + leitungLabel + ' ' + esc(e.leader) + '</div>' +
          '<span class="badge-cost">' + esc(cost) + '</span>' +
        '</div>' +
        (hasDetails ? '<div class="chevron' + (isOpen ? ' open' : '') + '">&#9656;</div>' : '');
      card.appendChild(header);

      if(hasDetails){
        header.style.cursor = 'pointer';
        header.addEventListener('click', function(){
          var wasOpen = !!expandedExk[e.id];
          expandedExk = {};
          if(!wasOpen){ expandedExk[e.id] = true; }
          renderExkursionen();
        });
      }

      if(hasDetails && isOpen){
        var box = document.createElement('div');
        box.className = 'abstract-box';
        var detailsText = (lang === 'en' ? e.details_en : e.details) || '';
        var html = '';
        if(detailsText){
          html += detailsText.split('\n\n').map(function(p){ return '<p class="exk-detail-p">' + esc(p) + '</p>'; }).join('');
        }
        box.innerHTML = html;
        card.appendChild(box);
      }

      list.appendChild(card);
    });
  }

  // ---------- Tagungsort ----------
  var WEATHER_CODE_MAP = {
    0: '☀️', 1: '🌤️', 2: '⛅', 3: '☁️',
    45: '🌫️', 48: '🌫️',
    51: '🌦️', 53: '🌦️', 55: '🌦️',
    61: '🌧️', 63: '🌧️', 65: '🌧️',
    71: '🌨️', 73: '🌨️', 75: '🌨️',
    80: '🌦️', 81: '🌧️', 82: '🌧️',
    95: '⛈️', 96: '⛈️', 99: '⛈️'
  };
  var weatherCache = null;
  var weatherLoading = false;
  var CONFERENCE_DATES = ['2026-09-14','2026-09-15','2026-09-16','2026-09-17','2026-09-18'];

  function renderWeatherBox(){
    var box = document.getElementById('weatherBox');
    if(weatherCache === 'error'){
      box.innerHTML = '<div class="weather-card"><div class="weather-title">' + t('weatherTitle') + '</div><div class="weather-fallback">' + t('weatherError') + '</div></div>';
      return;
    }
    if(!weatherCache){
      box.innerHTML = '<div class="weather-card"><div class="weather-title">' + t('weatherTitle') + '</div><div class="weather-fallback">…</div></div>';
      return;
    }
    var days = weatherCache.filter(function(d){ return CONFERENCE_DATES.indexOf(d.date) !== -1; });
    if(days.length === 0){
      box.innerHTML = '<div class="weather-card"><div class="weather-title">' + t('weatherTitle') + '</div><div class="weather-fallback">' + t('weatherUnavailable') + '</div></div>';
      return;
    }
    var weekdaysDe = ['So','Mo','Di','Mi','Do','Fr','Sa'];
    var weekdaysEn = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    var html = '<div class="weather-card"><div class="weather-title">' + t('weatherTitle') + '</div><div class="weather-days">';
    days.forEach(function(d){
      var dt = new Date(d.date + 'T12:00:00');
      var label = (lang === 'en' ? weekdaysEn : weekdaysDe)[dt.getDay()] + ' ' + dt.getDate() + '.';
      var icon = WEATHER_CODE_MAP[d.code] || '🌡️';
      html += '<div class="weather-day"><div class="wd-label">' + label + '</div><div class="wd-icon">' + icon + '</div><div class="wd-temp">' + Math.round(d.tmax) + '° / ' + Math.round(d.tmin) + '°</div></div>';
    });
    html += '</div></div>';
    box.innerHTML = html;
  }

  function loadWeather(){
    if(weatherCache || weatherLoading) return;
    weatherLoading = true;
    var url = 'https://api.open-meteo.com/v1/forecast?latitude=52.4344&longitude=13.5375&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin';
    fetch(url).then(function(res){ return res.json(); }).then(function(data){
      var d = data.daily;
      weatherCache = d.time.map(function(date, i){
        return { date: date, code: d.weathercode[i], tmax: d.temperature_2m_max[i], tmin: d.temperature_2m_min[i] };
      });
      weatherLoading = false;
      renderWeatherBox();
    }).catch(function(){
      weatherCache = 'error';
      weatherLoading = false;
      renderWeatherBox();
    });
  }

  function renderVenue(){
    var v = DATA.venue;
    var box = document.getElementById('venueBox');
    var oepnv = lang === 'en' ? v.oepnv_en : v.oepnv;
    box.innerHTML =
      '<div class="card">' +
        '<div class="lunch-name">' + esc(v.name) + '</div>' +
        '<div class="lunch-meta" style="margin-top:6px;">' + esc(v.address) + '</div>' +
        '<a class="venue-map-link" href="' + esc(v.maps) + '" target="_blank" rel="noopener">' + t('openMaps') + '</a>' +
        '<div class="lunch-meta"><strong style="color:var(--text)">' + t('oepnvLabel') + '</strong> ' + esc(oepnv) + '</div>' +
      '</div>';
  }

  // ---------- Mein Plan ----------
  function renderPlan(){
    var box = document.getElementById('planList');
    box.innerHTML = '';
    if(plan.length === 0){
      box.innerHTML = '<div class="empty-state">' + t('planEmpty') + '</div>';
      return;
    }
    var byDay = {};
    plan.forEach(function(p){
      byDay[p.dayId] = byDay[p.dayId] || { label: p.dayLabel, date: p.date, items: [] };
      byDay[p.dayId].items.push(p);
    });
    var order = DATA.programm.map(function(d){ return d.id; });
    order.forEach(function(dayId){
      if(!byDay[dayId]) return;
      var group = byDay[dayId];
      var dayObj = DATA.programm.find(function(d){ return d.id === dayId; });
      var dayLabel = (lang === 'en' && dayObj) ? dayObj.label_en : (dayObj ? dayObj.label : group.label);
      group.items.sort(function(a,b){ return a.time.localeCompare(b.time); });

      // Detect time conflicts within this day
      var ranges = group.items.map(function(it){ return parseTimeRangeMinutes(it.time); });
      var conflicts = group.items.map(function(){ return []; });
      for(var i = 0; i < group.items.length; i++){
        for(var j = 0; j < group.items.length; j++){
          if(i === j) continue;
          var ra = ranges[i], rb = ranges[j];
          if(ra && rb && ra.start < rb.end && rb.start < ra.end){
            conflicts[i].push(group.items[j].title);
          }
        }
      }

      var heading = document.createElement('div');
      heading.className = 'plan-day-heading';
      heading.textContent = dayLabel + ', ' + group.date;
      box.appendChild(heading);
      group.items.forEach(function(item, idx){
        var card = document.createElement('div');
        card.className = 'card';
        card.innerHTML =
          '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px;">' +
            '<div style="flex:1;min-width:0;">' +
              '<div class="block-time">' + esc(item.time) + (item.room ? ' · ' + esc(item.room) : '') + '</div>' +
              '<div class="block-title">' + esc(item.title) + '</div>' +
              (item.subtitle ? '<div class="block-subtitle">' + esc(item.subtitle) + '</div>' : '') +
            '</div>' +
            '<button class="remove-btn" data-id="' + item.id + '">&times;</button>' +
          '</div>' +
          (conflicts[idx].length ? '<div class="plan-conflict">⚠ ' + t('planConflict') + ' ' + esc(conflicts[idx].join(', ')) + '</div>' : '');
        card.querySelector('.remove-btn').addEventListener('click', function(){
          togglePlan(item);
          renderPlan();
        });
        box.appendChild(card);
      });
    });
  }

  document.getElementById('exportPlanBtn').addEventListener('click', function(){
    if(plan.length === 0){ alert(t('exportEmptyAlert')); return; }
    var lines = ['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//DGL 2026//Tagungsfuehrer//DE'];
    plan.forEach(function(item){
      var d = dateForDay(item.dayId);
      var timeStr = parseStartTime(item.time);
      lines.push('BEGIN:VEVENT');
      lines.push('DTSTART:' + d + 'T' + timeStr + '00');
      lines.push('SUMMARY:' + item.title.replace(/,/g,'\\,'));
      lines.push('LOCATION:' + (item.room || '').replace(/,/g,'\\,'));
      lines.push('DESCRIPTION:' + (item.subtitle || '').replace(/,/g,'\\,'));
      lines.push('END:VEVENT');
    });
    lines.push('END:VCALENDAR');
    var blob = new Blob([lines.join('\r\n')], {type:'text/calendar'});
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'mein-dgl-2026-plan.ics';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });

  function render(){
    renderProgrammList();
    renderLunchList();
  }

  function renderAll(){
    renderDayTabs();
    renderProgrammList();
    renderLunchFilters();
    renderLunchList();
    renderExkursionen();
    renderVenue();
    renderWeatherBox();
    renderPlan();
  }

  applyStaticI18n();
  renderAll();
  loadWeather();
  setInterval(function(){
    renderDayTabs();
    renderProgrammList();
  }, 60000);

  // ---------- Debug/testing interface (safe to ignore, not shown to end users) ----------
  window.dglDebug = {
    setNow: function(dateTimeString){
      debugNowOverride = dateTimeString;
      renderDayTabs();
      renderProgrammList();
      console.log('[dglDebug] Simulierte Zeit gesetzt auf:', new Date(dateTimeString).toString());
    },
    clearNow: function(){
      debugNowOverride = null;
      renderDayTabs();
      renderProgrammList();
      console.log('[dglDebug] Simulierte Zeit zurückgesetzt, echte Uhrzeit wird wieder verwendet.');
    },
    testWeather: function(dateArray){
      CONFERENCE_DATES = dateArray;
      weatherCache = null;
      loadWeather();
      console.log('[dglDebug] Wetter-Widget testet jetzt mit Daten:', dateArray);
    }
  };

})();
