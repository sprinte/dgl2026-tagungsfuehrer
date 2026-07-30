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
      min: 'Min'
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
      min: 'min'
    }
  };
  var LANG_KEY = 'dgl2026_lang_v1';
  var lang = (function(){
    try{ return localStorage.getItem(LANG_KEY) || 'de'; }catch(e){ return 'de'; }
  })();
  function t(key){ return I18N[lang][key]; }

  function applyStaticI18n(){
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
      b.textContent = dayLabel + ' ' + day.date.split('.')[0] + '.';
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
      card.className = 'card';

      if(block.type === 'info'){
        var id = planIdForBlock(day.id, block);
        var added = isInPlan(id);
        var blockTitle = (lang === 'en' && block.title_en) ? block.title_en : block.title;
        var blockSubtitle = (lang === 'en' && block.subtitle_en) ? block.subtitle_en : block.subtitle;
        card.innerHTML =
          '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px;">' +
            '<div style="flex:1;min-width:0;">' +
              '<div class="block-time">' + esc(block.time) + '</div>' +
              '<div class="block-title">' + esc(blockTitle) + '</div>' +
              (blockSubtitle ? '<div class="block-subtitle">' + esc(blockSubtitle) + '</div>' : '') +
              (block.room ? '<div class="block-room">' + esc(block.room) + '</div>' : '') +
            '</div>' +
            '<button class="add-btn' + (added ? ' added' : '') + '" data-id="' + id + '">' + (added ? '&#10003;' : '+') + '</button>' +
          '</div>';
        card.querySelector('.add-btn').addEventListener('click', function(){
          togglePlan({
            id: id, dayId: day.id, dayLabel: day.label, date: day.date,
            time: block.time, title: blockTitle, subtitle: blockSubtitle || '', room: block.room || ''
          });
        });
      } else {
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

          var header = document.createElement('div');
          header.className = 'session-header';
          header.innerHTML =
            '<div class="session-main">' +
              '<span class="session-tag">' + esc(s.code) + '</span><span class="session-room">' + esc(s.room) + '</span>' +
              '<div class="session-title">' + esc(s.title) + '</div>' +
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
              time: block.time, title: s.code + ' · ' + s.title, subtitle: s.mod ? t('mod') + ' ' + s.mod : '', room: s.room
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
      var mapsUrl = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(l.name + ', ' + (l.address||''));
      card.innerHTML =
        '<div class="lunch-card">' +
          '<div style="flex:1;min-width:0;">' +
            '<div class="lunch-name">' + esc(l.name) + '</div>' +
            '<div class="lunch-meta">' + esc(typDisplay) + (l.hours ? ' · ' + esc(l.hours) : '') + '</div>' +
            '<div class="lunch-meta">' + esc(l.address || '') + '</div>' +
            (l.note ? '<div class="lunch-note">' + esc(l.note) + '</div>' : '') +
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
      var info = lang === 'en' ? e.info_en : e.info;
      card.innerHTML =
        '<div class="exk-title">' + esc(e.id) + ': ' + esc(title) + '</div>' +
        '<div class="exk-meta">' + esc(day) + ' · ' + esc(time) + '</div>' +
        '<div class="exk-meta">' + leitungLabel + ' ' + esc(e.leader) + '</div>' +
        '<span class="badge-cost">' + esc(cost) + '</span>' +
        '<div class="exk-info">' + esc(info) + '</div>';
      list.appendChild(card);
    });
  }

  // ---------- Tagungsort ----------
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
      var heading = document.createElement('div');
      heading.className = 'plan-day-heading';
      heading.textContent = dayLabel + ', ' + group.date;
      box.appendChild(heading);
      group.items.forEach(function(item){
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
          '</div>';
        card.querySelector('.remove-btn').addEventListener('click', function(){
          togglePlan(item);
          renderPlan();
        });
        box.appendChild(card);
      });
    });
  }

  function dateForDay(dayId){
    var map = { mo:'20260914', di:'20260915', mi:'20260916', do:'20260917', fr:'20260918' };
    return map[dayId] || '20260914';
  }
  function parseStartTime(timeStr){
    var m = timeStr.match(/(\d{1,2}):(\d{2})/);
    return m ? (m[1].padStart(2,'0') + m[2]) : '0900';
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
    renderPlan();
  }

  applyStaticI18n();
  renderAll();

})();
