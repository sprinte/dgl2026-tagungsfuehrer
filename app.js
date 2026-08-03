(function(){

  var I18N = {
    de: {
      navProgramm: 'Programm', navLunch: 'Mittagessen', navExk: 'Exkursionen', navVenue: 'Info', navPlan: 'Mein Plan',
      titleProgramm: 'Programm', titleLunch: 'Mittagessen in der Nähe', titleExk: 'Exkursionen', titleVenue: 'Info', titlePlan: 'Mein Plan',
      mod: 'Mod.:', noAbstract: 'Kein Abstract verfügbar.',
      planEmpty: 'Noch nichts geplant.<br>Tippe im Programm auf das + Symbol, um Sessions oder Beiträge hinzuzufügen.',
      planNote: 'Dein Plan wird lokal in diesem Browser gespeichert. Auf einem anderen Gerät oder in einem anderen Browser ist er nicht sichtbar. Tipp: Nutze "Teilen" oder den Kalender-Export, um deinen Plan zu sichern oder auf einem anderen Gerät zu öffnen.',
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
      planConflict: 'Zeitliche Überschneidung mit:',
      aboutSpeaker: 'Zur Person',
      nextUp: 'Nächster Termin',
      shareBtnLabel: 'Teilen',
      linkCopied: 'Link kopiert!',
      copyManually: 'Diesen Link kopieren:',
      sharedPlanConfirmPrefix: 'Geteilten Plan mit ',
      sharedPlanConfirmSuffix: ' Einträgen laden? Das ersetzt deinen aktuellen Plan.',
      lunchViewList: 'Liste',
      lunchViewMap: 'Auf Karte anzeigen',
      catAll: 'Alle', catSessions: 'Sessions', catPlenary: 'Plenar & Preise', catWorkshop: 'Workshops', catSocial: 'Social',
      noItemsInCategory: 'Keine Programmpunkte in dieser Kategorie.',
      followUs: 'Social Media',
      posterListLabel: 'Poster',
      posterBoard: 'Stellwand',
      organizersLabel: 'Veranstalter',
      floorplanTitle: 'Gebäudeplan',
      venueCardTitle: 'Tagungsort',
      planViewList: 'Liste',
      planViewTimeline: 'Zeitplan'
    },
    en: {
      navProgramm: 'Programme', navLunch: 'Lunch', navExk: 'Excursions', navVenue: 'Info', navPlan: 'My Plan',
      titleProgramm: 'Programme', titleLunch: 'Lunch nearby', titleExk: 'Excursions', titleVenue: 'Info', titlePlan: 'My Plan',
      mod: 'Chairs:', noAbstract: 'No abstract available.',
      planEmpty: 'Nothing planned yet.<br>Tap the + icon in the programme to add sessions or talks.',
      planNote: 'Your plan is stored locally in this browser. It is not visible on another device or in another browser. Tip: use "Share" or the calendar export to back up your plan or open it on another device.',
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
      planConflict: 'Overlaps with:',
      aboutSpeaker: 'About the speaker',
      nextUp: 'Next up',
      shareBtnLabel: 'Share',
      linkCopied: 'Link copied!',
      copyManually: 'Copy this link:',
      sharedPlanConfirmPrefix: 'Load shared plan with ',
      sharedPlanConfirmSuffix: ' items? This will replace your current plan.',
      lunchViewList: 'List',
      lunchViewMap: 'Show on map',
      catAll: 'All', catSessions: 'Sessions', catPlenary: 'Plenary & Awards', catWorkshop: 'Workshops', catSocial: 'Social',
      noItemsInCategory: 'No programme items in this category.',
      followUs: 'Social Media',
      posterListLabel: 'Posters',
      posterBoard: 'Board',
      organizersLabel: 'Organizers',
      floorplanTitle: 'Building plan',
      venueCardTitle: 'Venue',
      planViewList: 'List',
      planViewTimeline: 'Timeline'
    }
  };
  var LANG_KEY = 'dgl2026_lang_v1';
  var lang = 'de';
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
    document.getElementById('titleFloorplan').textContent = t('floorplanTitle');
    document.getElementById('titlePlan').textContent = t('titlePlan');
    document.getElementById('exportPlanBtnText').textContent = t('exportBtn');
    document.getElementById('planNote').textContent = t('planNote');
    document.getElementById('sharePlanBtnText').textContent = t('shareBtnLabel');
    document.getElementById('planViewListText').textContent = t('planViewList');
    document.getElementById('planViewTimelineText').textContent = t('planViewTimeline');
    document.getElementById('lunchViewListText').textContent = t('lunchViewList');
    document.getElementById('lunchViewMapText').textContent = t('lunchViewMap');
    document.getElementById('programmSearch').placeholder = t('searchPlaceholder');
    var fpDe = document.getElementById('floorplanSvg');
    var fpEn = document.getElementById('floorplanSvgEn');
    if(fpDe) fpDe.style.display = lang === 'en' ? 'none' : '';
    if(fpEn) fpEn.style.display = lang === 'en' ? '' : 'none';
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

  // ---------- Dark mode ----------
  var THEME_KEY = 'dgl2026_theme_v1';
  var theme = (function(){
    try{ return localStorage.getItem(THEME_KEY) || 'light'; }catch(e){ return 'light'; }
  })();
  function applyTheme(){
    document.body.classList.toggle('dark', theme === 'dark');
    document.getElementById('themeToggleIcon').innerHTML = theme === 'dark' ? '&#9728;' : '&#127769;';
  }
  document.getElementById('themeToggleBtn').addEventListener('click', function(){
    theme = theme === 'dark' ? 'light' : 'dark';
    try{ localStorage.setItem(THEME_KEY, theme); }catch(e){}
    applyTheme();
  });
  applyTheme();

  // ---------- Font size ----------
  var FONT_KEY = 'dgl2026_fontscale_v1';
  var fontScale = (function(){
    try{ return parseInt(localStorage.getItem(FONT_KEY), 10) || 115; }catch(e){ return 115; }
  })();
  function applyFontScale(){
    document.body.style.zoom = fontScale + '%';
  }
  function setFontScale(delta){
    fontScale = Math.max(85, Math.min(145, fontScale + delta));
    try{ localStorage.setItem(FONT_KEY, fontScale); }catch(e){}
    applyFontScale();
  }
  document.getElementById('fontDecBtn').addEventListener('click', function(){ setFontScale(-15); });
  document.getElementById('fontIncBtn').addEventListener('click', function(){ setFontScale(15); });
  applyFontScale();

  // ---------- Back to top ----------
  var backToTopBtn = document.getElementById('backToTopBtn');
  window.addEventListener('scroll', function(){
    backToTopBtn.style.display = window.scrollY > 400 ? 'block' : 'none';
  });
  backToTopBtn.addEventListener('click', function(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

  // ---------- Import shared plan from URL hash ----------
  (function importSharedPlanFromHash(){
    if(location.hash.indexOf('#plan=') !== 0) return;
    try{
      var encoded = location.hash.slice(6);
      var decoded = JSON.parse(decodeURIComponent(escape(atob(decodeURIComponent(encoded)))));
      if(Array.isArray(decoded) && decoded.length){
        var msg = t('sharedPlanConfirmPrefix') + decoded.length + t('sharedPlanConfirmSuffix');
        if(confirm(msg)){
          plan = decoded;
          savePlan(plan);
        }
      }
    }catch(e){
      console.warn('Could not parse shared plan from link:', e);
    }
    history.replaceState(null, '', location.pathname + location.search);
  })();

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
  function minutesToHHMM(min){
    var h = Math.floor(min/60), m = min%60;
    return (h<10?'0':'')+h+':'+(m<10?'0':'')+m;
  }
  function computeTalkTimeRange(sTalks, idx, blockTimeStr){
    var startRange = parseTimeRangeMinutes(sTalks[idx].time);
    if(!startRange) return sTalks[idx].time;
    var start = startRange.start;
    var end;
    if(idx+1 < sTalks.length){
      var nextRange = parseTimeRangeMinutes(sTalks[idx+1].time);
      end = nextRange ? nextRange.start : start+15;
    } else {
      end = start + 15;
    }
    return sTalks[idx].time + ' – ' + minutesToHHMM(end);
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
  function ordinalSuffix(n){
    var j = n % 10, k = n % 100;
    if(j === 1 && k !== 11) return 'st';
    if(j === 2 && k !== 12) return 'nd';
    if(j === 3 && k !== 13) return 'rd';
    return 'th';
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
  function switchToView(target){
    views.forEach(function(v){
      document.getElementById('view-'+v).classList.toggle('active', v === target);
    });
    document.querySelectorAll('nav.bottom-nav button').forEach(function(b){
      b.classList.toggle('active', b.getAttribute('data-view') === target);
    });
    if(target === 'plan') renderPlan();
    window.scrollTo(0,0);
  }
  document.querySelectorAll('nav.bottom-nav button').forEach(function(btn){
    btn.addEventListener('click', function(){
      var backBtn = document.getElementById('searchBackBtn');
      if(backBtn) backBtn.style.display = 'none';
      searchBackState = null;
      switchToView(btn.getAttribute('data-view'));
    });
  });

  // ---------- Floor plan room highlighting + zoomable lightbox ----------
  var FLOORPLAN_ROOM_MAP = {
    'HS 0/110': ['0-110'],
    'HS 0/115': ['0-115'],
    'HS 0/307': ['0-307'],
    'HS 0/310': ['0-310'],
    'HS 0/311': ['0-311'],
    'HS 0/313': ['0-313'],
    'SR 1/305+306': ['1-305', '1-306']
  };

  var fpZoomState = { scale: 1, tx: 0, ty: 0, pointers: {} };
  var fpGesture = null;
  function fpApplyTransform(){
    var content = document.getElementById('floorplanZoomContent');
    content.style.transform = 'translate(' + fpZoomState.tx + 'px,' + fpZoomState.ty + 'px) scale(' + fpZoomState.scale + ')';
  }
  function fpResetZoom(){
    fpZoomState.scale = 1; fpZoomState.tx = 0; fpZoomState.ty = 0;
    fpGesture = null;
    fpApplyTransform();
  }
  function fpStartGesture(midX, midY, dist){
    var content = document.getElementById('floorplanZoomContent');
    var rect = content.getBoundingClientRect();
    fpGesture = {
      flexLeft: rect.left - fpZoomState.tx,
      flexTop: rect.top - fpZoomState.ty,
      anchorLx: (midX - rect.left) / fpZoomState.scale,
      anchorLy: (midY - rect.top) / fpZoomState.scale,
      startScale: fpZoomState.scale,
      startDist: dist
    };
  }
  function fpUpdateGesture(midX, midY, dist){
    if(!fpGesture) return;
    var newScale = Math.min(6, Math.max(1, fpGesture.startScale * (dist / fpGesture.startDist)));
    fpZoomState.scale = newScale;
    fpZoomState.tx = midX - fpGesture.flexLeft - newScale * fpGesture.anchorLx;
    fpZoomState.ty = midY - fpGesture.flexTop - newScale * fpGesture.anchorLy;
    fpApplyTransform();
  }
  function fpZoomAt(clientX, clientY, newScale){
    newScale = Math.min(6, Math.max(1, newScale));
    var content = document.getElementById('floorplanZoomContent');
    var rect = content.getBoundingClientRect();
    var flexLeft = rect.left - fpZoomState.tx;
    var flexTop = rect.top - fpZoomState.ty;
    var anchorLx = (clientX - rect.left) / fpZoomState.scale;
    var anchorLy = (clientY - rect.top) / fpZoomState.scale;
    fpZoomState.scale = newScale;
    fpZoomState.tx = clientX - flexLeft - newScale * anchorLx;
    fpZoomState.ty = clientY - flexTop - newScale * anchorLy;
    fpApplyTransform();
  }
  (function initFloorplanZoom(){
    var container = document.getElementById('floorplanZoomContainer');
    container.style.touchAction = 'none';
    container.addEventListener('pointerdown', function(e){
      e.preventDefault();
      container.setPointerCapture(e.pointerId);
      fpZoomState.pointers[e.pointerId] = { x: e.clientX, y: e.clientY };
      if(Object.keys(fpZoomState.pointers).length === 2){
        fpGesture = null;
      }
    });
    container.addEventListener('pointermove', function(e){
      if(!fpZoomState.pointers[e.pointerId]) return;
      e.preventDefault();
      var prev = fpZoomState.pointers[e.pointerId];
      fpZoomState.pointers[e.pointerId] = { x: e.clientX, y: e.clientY };
      var ids = Object.keys(fpZoomState.pointers);
      if(ids.length === 1){
        fpZoomState.tx += e.clientX - prev.x;
        fpZoomState.ty += e.clientY - prev.y;
        fpApplyTransform();
      } else if(ids.length === 2){
        var p1 = fpZoomState.pointers[ids[0]], p2 = fpZoomState.pointers[ids[1]];
        var dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
        var mid = { x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2 };
        if(!fpGesture){
          fpStartGesture(mid.x, mid.y, dist);
        } else {
          fpUpdateGesture(mid.x, mid.y, dist);
        }
      }
    });
    function releasePointer(e){
      delete fpZoomState.pointers[e.pointerId];
      fpGesture = null;
    }
    container.addEventListener('pointerup', releasePointer);
    container.addEventListener('pointercancel', releasePointer);
    container.addEventListener('wheel', function(e){
      e.preventDefault();
      fpZoomAt(e.clientX, e.clientY, fpZoomState.scale - e.deltaY * 0.0015 * fpZoomState.scale);
    }, { passive: false });
  })();

  function openFloorplanLightbox(highlightIds){
    var master = document.getElementById(lang === 'en' ? 'floorplanSvgEn' : 'floorplanSvg');
    if(!master){ console.warn('Floor plan not loaded yet'); return; }
    var clone = master.cloneNode(true);
    clone.removeAttribute('id');
    clone.style.display = '';
    clone.querySelectorAll('.fp-room').forEach(function(el){
      el.classList.remove('fp-highlight');
      var oldRing = el.querySelector('.fp-pulse-ring');
      if(oldRing) oldRing.remove();
    });
    (highlightIds || []).forEach(function(id){
      var el = clone.querySelector('#fp-' + id);
      if(el){
        el.classList.add('fp-highlight');
        var baseRect = el.querySelector('rect');
        if(baseRect){
          var ring = baseRect.cloneNode(false);
          ring.setAttribute('class', 'fp-pulse-ring');
          var rx = parseFloat(baseRect.getAttribute('x')) || 0;
          var ry = parseFloat(baseRect.getAttribute('y')) || 0;
          var rw = parseFloat(baseRect.getAttribute('width')) || 0;
          var rh = parseFloat(baseRect.getAttribute('height')) || 0;
          ring.style.transformOrigin = (rx + rw/2) + 'px ' + (ry + rh/2) + 'px';
          el.appendChild(ring);
        }
      }
    });
    var content = document.getElementById('floorplanZoomContent');
    content.innerHTML = '';
    content.appendChild(clone);
    fpResetZoom();
    document.getElementById('floorplanOverlay').style.display = 'block';
  }
  document.getElementById('floorplanTrigger').addEventListener('click', function(){
    openFloorplanLightbox([]);
  });
  document.getElementById('floorplanTrigger').addEventListener('keydown', function(e){
    if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); this.click(); }
  });
  document.getElementById('floorplanOverlayCloseBtn').addEventListener('click', function(){
    document.getElementById('floorplanOverlay').style.display = 'none';
  });

  function showFloorplanRoom(roomStr){
    var ids = FLOORPLAN_ROOM_MAP[roomStr];
    if(!ids) return;
    openFloorplanLightbox(ids);
  }

  // ---------- Programm ----------
  var currentDay = DATA.programm[0].id;
  var currentCategoryFilter = 'alle';

  var SOCIAL_TITLES = ['Gesellschaftsabend', 'Get Together'];
  var PLENARY_TITLES = ['Plenarvortrag', 'Plenarvortrag (WSA)', 'Eröffnung / Opening', 'Abschlussplenum, Posterpreisvergabe', 'DGL-Mitgliederversammlung', 'Poster Speed Talks', 'Postersession', 'DGL Praxispreis', "Schwoerbel-Benndorf-Nachwuchspreis der DGL", 'Award Ceremony / WSA General Assembly'];
  var WORKSHOP_TITLES = ['Arbeitskreise'];
  var SESSION_CATEGORY_OVERRIDE = { 'S19': 'plenary', 'S20': 'workshop', 'S21': 'workshop', 'S13': 'workshop', 'Preisvortrag': 'plenary' };

  function blockCategory(block){
    if(block.type === 'parallel') return 'sessions';
    if(block.isPlenary) return 'plenary';
    if(SOCIAL_TITLES.indexOf(block.title) !== -1) return 'social';
    if(WORKSHOP_TITLES.indexOf(block.title) !== -1) return 'workshop';
    if(PLENARY_TITLES.indexOf(block.title) !== -1) return 'plenary';
    return 'other';
  }

  function sessionCategory(session){
    if(session.category) return session.category;
    if(SESSION_CATEGORY_OVERRIDE[session.code]) return SESSION_CATEGORY_OVERRIDE[session.code];
    if(/Workshop/i.test(session.title || '')) return 'workshop';
    return 'sessions';
  }

  function renderCategoryFilter(){
    var wrap = document.getElementById('categoryFilter');
    var cats = [
      { key: 'alle', label: t('catAll') },
      { key: 'sessions', label: t('catSessions') },
      { key: 'plenary', label: t('catPlenary') },
      { key: 'workshop', label: t('catWorkshop') },
      { key: 'social', label: t('catSocial') }
    ];
    wrap.innerHTML = '';
    cats.forEach(function(c){
      var chip = document.createElement('div');
      chip.className = 'category-chip' + (currentCategoryFilter === c.key ? ' active' : '');
      chip.textContent = c.label;
      chip.addEventListener('click', function(){
        currentCategoryFilter = c.key;
        expandedSessions = {};
        expandedTalks = {};
        renderDayTabs();
        renderCategoryFilter();
        renderProgrammList();
      });
      wrap.appendChild(chip);
    });
  }

  function renderDayTabs(){
    var wrap = document.getElementById('dayTabs');
    wrap.innerHTML = '';
    DATA.programm.forEach(function(day){
      var b = document.createElement('div');
      b.className = 'day-tab' + (currentCategoryFilter === 'alle' && day.id === currentDay ? ' active' : '');
      var dayLabel = lang === 'en' ? day.label_en : day.label;
      var dayNum = day.date.split('.')[0];
      var dateLabel = lang === 'en' ? (dayNum + ordinalSuffix(parseInt(dayNum,10))) : (dayNum + '.');
      b.innerHTML = esc(dayLabel + ' ' + dateLabel) + (isToday(day.id) ? '<span class="day-tab-dot"></span>' : '');
      b.addEventListener('click', function(){
        currentDay = day.id;
        currentCategoryFilter = 'alle';
        expandedSessions = {};
        expandedTalks = {};
        renderDayTabs();
        renderCategoryFilter();
        renderProgrammList();
      });
      wrap.appendChild(b);
    });
  }

  function planIdForBlock(dayId, block){
    return 'b_' + dayId + '_' + block.time;
  }
  function slug(str){
    return (str || '').replace(/[^a-zA-Z0-9]+/g, '').slice(0, 24);
  }
  function planIdForSession(dayId, block, s){
    return 's_' + dayId + '_' + block.time + '_' + s.room + '_' + s.code + '_' + slug(s.title);
  }
  function planIdForTalk(dayId, block, s, talk, idx){
    return 't_' + dayId + '_' + block.time + '_' + s.room + '_' + s.code + '_' + slug(s.title) + '_' + idx;
  }

  var expandedSessions = {};
  var expandedTalks = {};
  var expandedPlanItems = {};

  function renderAuthorsHtml(authorsStr){
    if(!authorsStr) return '';
    var parts = authorsStr.split(' — ');
    var namesPart = parts[0];
    var affPart = parts.length > 1 ? parts.slice(1).join(' — ') : '';
    var names = namesPart.split(/,\s*/).filter(Boolean);
    var namesHtml = names.map(function(n){
      var clean = n.trim();
      return '<span class="author-link" data-author="' + esc(clean) + '">' + esc(clean) + '</span>';
    }).join(', ');
    return namesHtml + (affPart ? ' — ' + esc(affPart) : '');
  }

  var searchBackState = null;
  function saveNavBackState(originView, extra){
    searchBackState = {
      originView: originView || 'programm',
      day: currentDay,
      categoryFilter: currentCategoryFilter,
      expandedSessions: expandedSessions,
      expandedTalks: expandedTalks,
      planViewMode: currentPlanViewMode,
      scrollY: window.scrollY
    };
    if(extra){ for(var k in extra){ searchBackState[k] = extra[k]; } }
    document.getElementById('searchBackBtn').style.display = 'block';
  }
  function searchForAuthor(name, originView){
    saveNavBackState(originView);
    var input = document.getElementById('programmSearch');
    input.value = name;
    document.getElementById('searchClearBtn').style.display = 'block';
    renderSearchResults(name);
    switchToView('programm');
  }
  document.getElementById('searchBackBtn').addEventListener('click', function(){
    if(!searchBackState) return;
    if(searchBackState.originView === 'plan'){
      document.getElementById('programmSearch').value = '';
      document.getElementById('searchClearBtn').style.display = 'none';
      renderSearchResults('');
      switchToView('plan');
      setPlanView(searchBackState.planViewMode || 'list');
    } else if(searchBackState.originView === 'search'){
      switchToView('programm');
      var restoredQuery = searchBackState.query || '';
      document.getElementById('programmSearch').value = restoredQuery;
      document.getElementById('searchClearBtn').style.display = restoredQuery ? 'block' : 'none';
      renderSearchResults(restoredQuery);
    } else {
      document.getElementById('programmSearch').value = '';
      document.getElementById('searchClearBtn').style.display = 'none';
      renderSearchResults('');
      switchToView('programm');
      currentDay = searchBackState.day;
      currentCategoryFilter = searchBackState.categoryFilter;
      expandedSessions = searchBackState.expandedSessions;
      expandedTalks = searchBackState.expandedTalks;
      renderDayTabs();
      renderCategoryFilter();
      renderProgrammList();
    }
    window.scrollTo(0, searchBackState.scrollY);
    searchBackState = null;
    this.style.display = 'none';
  });

  function rerenderPreservingScroll(anchorId){
    var el = document.getElementById(anchorId);
    var beforeTop = el ? el.getBoundingClientRect().top : null;
    renderProgrammList();
    if(beforeTop !== null){
      var newEl = document.getElementById(anchorId);
      if(newEl){
        var afterTop = newEl.getBoundingClientRect().top;
        window.scrollBy(0, afterTop - beforeTop);
      }
    }
  }

  function computeInfoBlockDisplayTime(day, block){
    if(block.time.indexOf('–') !== -1) return block.time;
    var idx = day.blocks.indexOf(block);
    var ownStart = parseTimeRangeMinutes(block.time);
    if(idx !== -1 && ownStart){
      for(var j = idx+1; j < day.blocks.length; j++){
        var nextRange = parseTimeRangeMinutes(day.blocks[j].time);
        if(nextRange && nextRange.start > ownStart.start){
          return block.time + ' – ' + minutesToHHMM(nextRange.start);
        }
      }
    }
    return block.time;
  }

  var FLAG_DE_SVG = '<svg class="mini-flag" viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="20" y="0" fill="#000"/><rect width="30" height="13.33" y="6.67" fill="#DD0000"/><rect width="30" height="6.67" y="13.33" fill="#FFCE00"/></svg>';
  var FLAG_EN_SVG = '<svg class="mini-flag" viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="20" fill="#00247d"/><path d="M0,0 L30,20 M30,0 L0,20" stroke="#fff" stroke-width="4"/><path d="M0,0 L30,20 M30,0 L0,20" stroke="#cf142b" stroke-width="1.5"/><path d="M15,0 V20 M0,10 H30" stroke="#fff" stroke-width="6"/><path d="M15,0 V20 M0,10 H30" stroke="#cf142b" stroke-width="3"/></svg>';
  function sessionLangFlags(sessLang){
    if(sessLang === 'bilingual') return '<span class="session-lang-flags" title="DE/EN">' + FLAG_DE_SVG + FLAG_EN_SVG + '</span>';
    if(sessLang === 'de') return '<span class="session-lang-flags" title="DE">' + FLAG_DE_SVG + '</span>';
    if(sessLang === 'en') return '<span class="session-lang-flags" title="EN">' + FLAG_EN_SVG + '</span>';
    return '';
  }

  function appendAbstractWithKeynote(container, text){
    var m = /^(Keynote:[^\n]*)\n\n([\s\S]*)$/.exec(text);
    if(m){
      var kBox = document.createElement('div');
      kBox.className = 'keynote-box';
      kBox.textContent = m[1];
      container.appendChild(kBox);
      if(m[2]){
        var abBox = document.createElement('div');
        abBox.className = 'abstract-box';
        abBox.textContent = m[2];
        container.appendChild(abBox);
      }
    } else {
      var abBox2 = document.createElement('div');
      abBox2.className = 'abstract-box';
      abBox2.textContent = text;
      container.appendChild(abBox2);
    }
  }

  function renderProgrammList(){
    var list = document.getElementById('programmList');
    list.innerHTML = '';

    var pairs = [];
    if(currentCategoryFilter === 'alle'){
      var singleDay = DATA.programm.find(function(d){ return d.id === currentDay; });
      singleDay.blocks.forEach(function(b){ pairs.push({ day: singleDay, block: b }); });
    } else {
      DATA.programm.forEach(function(d){
        d.blocks.forEach(function(b){
          if(b.type === 'parallel'){
            var matchingSessions = b.sessions.filter(function(s){ return sessionCategory(s) === currentCategoryFilter; });
            if(matchingSessions.length){
              var clonedBlock = {};
              for(var k in b){ clonedBlock[k] = b[k]; }
              clonedBlock.sessions = matchingSessions;
              pairs.push({ day: d, block: clonedBlock });
            }
          } else if(blockCategory(b) === currentCategoryFilter){
            pairs.push({ day: d, block: b });
          }
        });
      });
    }

    if(pairs.length === 0){
      list.innerHTML = '<div class="empty-state">' + t('noItemsInCategory') + '</div>';
      return;
    }

    var lastHeadingDayId = null;
    pairs.forEach(function(pair){
      var day = pair.day, block = pair.block;
      if(currentCategoryFilter !== 'alle' && day.id !== lastHeadingDayId){
        lastHeadingDayId = day.id;
        var heading = document.createElement('div');
        heading.className = 'plan-day-heading';
        var headingDayLabel = lang === 'en' ? day.label_en : day.label;
        heading.textContent = headingDayLabel + ', ' + day.date;
        list.appendChild(heading);
      }
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
        var hasInfoDetails = !!(block.abstract || block.bio_de || block.bio_en || (block.posters && block.posters.length));
        var isClickable = hasInfoDetails || !!block.linkView || !!block.linkExk || !!block.linkFloorplan;
        var infoOpen = !!expandedSessions[id];
        if(blockIsNow){
          var liveBadgeInfoEl = document.createElement('div');
          liveBadgeInfoEl.className = 'live-badge';
          liveBadgeInfoEl.innerHTML = '<span class="dot"></span>' + t('liveNow');
          card.appendChild(liveBadgeInfoEl);
        }
        var headerDiv = document.createElement('div');
        headerDiv.style.display = 'flex';
        headerDiv.style.justifyContent = 'space-between';
        headerDiv.style.alignItems = 'flex-start';
        headerDiv.style.gap = '10px';
        if(isClickable) headerDiv.style.cursor = 'pointer';
        headerDiv.innerHTML =
            '<div style="flex:1;min-width:0;">' +
              '<div class="block-time">' + esc(computeInfoBlockDisplayTime(day, block)) + '</div>' +
              '<div class="block-title">' + (block.tag ? '<span class="session-tag' + (block.isWSA ? ' session-tag-wsa' : '') + '">' + esc(lang === 'en' ? (block.tag_en || block.tag) : block.tag) + '</span> ' : '') + esc(blockTitle) + '</div>' +
              (blockSubtitle ? '<div class="block-subtitle">' + esc(blockSubtitle) + '</div>' : '') +
              (block.room ? '<div class="block-room' + (FLOORPLAN_ROOM_MAP[block.room] ? ' room-link' : '') + '" data-room="' + esc(block.room) + '">' + esc(block.room) + '</div>' : '') +
            '</div>' +
            '<div class="session-btns">' +
              (showAddBtn ? '<button class="add-btn' + (added ? ' added' : '') + '" data-role="info-add">' + (added ? '&#10003;' : '+') + '</button>' : '') +
              (hasInfoDetails ? '<div class="chevron' + (infoOpen ? ' open' : '') + '">&#9656;</div>' : '') +
              (block.linkView || block.linkExk || block.linkFloorplan ? '<div class="chevron link-arrow">&#8594;</div>' : '') +
            '</div>';
        card.appendChild(headerDiv);
        if(block.linkUrl || block.linkMapsUrl){
          var linksDiv = document.createElement('div');
          linksDiv.className = 'lunch-links';
          linksDiv.style.marginTop = '8px';
          linksDiv.innerHTML =
            (block.linkMapsUrl ? '<a class="pill-link" href="' + esc(block.linkMapsUrl) + '" target="_blank" rel="noopener">' + t('openMaps') + '</a>' : '') +
            (block.linkUrl ? '<a class="pill-link" href="' + esc(block.linkUrl) + '" target="_blank" rel="noopener">' + t('website') + '</a>' : '');
          card.appendChild(linksDiv);
        }
        if(block.route){
          var routeDiv = document.createElement('div');
          routeDiv.className = 'lunch-meta';
          routeDiv.style.marginTop = '6px';
          routeDiv.textContent = (lang === 'en' && block.route_en) ? block.route_en : block.route;
          card.appendChild(routeDiv);
        }
        if(headerDiv.querySelector('.room-link')){
          headerDiv.querySelector('.room-link').addEventListener('click', function(ev){
            ev.stopPropagation();
            showFloorplanRoom(this.getAttribute('data-room'));
          });
        }
        if(showAddBtn){
          headerDiv.querySelector('[data-role="info-add"]').addEventListener('click', function(ev){
            ev.stopPropagation();
            var bioText = lang === 'en' ? block.bio_en : block.bio_de;
            togglePlan({
              id: id, dayId: day.id, dayLabel: day.label, date: day.date,
              time: block.time, title: blockTitle, subtitle: blockSubtitle || '', room: block.room || '',
              abstract: block.abstract || '', bio: bioText || ''
            });
          });
        }
        if(hasInfoDetails){
          headerDiv.addEventListener('click', function(ev){
            if(ev.target.closest('[data-role="info-add"]') || ev.target.closest('.room-link')) return;
            var wasOpen = !!expandedSessions[id];
            expandedSessions = {};
            if(!wasOpen){ expandedSessions[id] = true; }
            rerenderPreservingScroll('row-' + id);
          });
        } else if(block.linkView){
          headerDiv.addEventListener('click', function(ev){
            if(ev.target.closest('[data-role="info-add"]') || ev.target.closest('.room-link')) return;
            saveNavBackState('programm');
            switchToView(block.linkView);
          });
        } else if(block.linkExk){
          headerDiv.addEventListener('click', function(ev){
            if(ev.target.closest('[data-role="info-add"]') || ev.target.closest('.room-link')) return;
            saveNavBackState('programm');
            switchToView('exkursionen');
            expandedExk = {};
            expandedExk[block.linkExk] = true;
            renderExkursionen();
            setTimeout(function(){
              var el = document.getElementById('exk-' + block.linkExk);
              if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
            }, 50);
          });
        } else if(block.linkFloorplan){
          headerDiv.addEventListener('click', function(ev){
            if(ev.target.closest('[data-role="info-add"]') || ev.target.closest('.room-link')) return;
            openFloorplanLightbox([block.linkFloorplan]);
          });
        }
        if(hasInfoDetails && infoOpen){
          var infoBox = document.createElement('div');
          if(block.abstract){
            var abP = document.createElement('div');
            abP.className = 'abstract-box';
            abP.textContent = block.abstract;
            infoBox.appendChild(abP);
          }
          var bioText = lang === 'en' ? block.bio_en : block.bio_de;
          if(bioText){
            var bioHeading = document.createElement('div');
            bioHeading.className = 'bio-heading';
            bioHeading.textContent = t('aboutSpeaker');
            infoBox.appendChild(bioHeading);
            var bioP = document.createElement('div');
            bioP.className = 'abstract-box';
            bioP.textContent = bioText;
            infoBox.appendChild(bioP);
          }
          card.appendChild(infoBox);
        }
        if(hasInfoDetails && infoOpen && block.posters && block.posters.length){
          var posterList = document.createElement('div');
          posterList.className = 'talk-list';
          var posterHeading = document.createElement('div');
          posterHeading.className = 'bio-heading';
          posterHeading.textContent = t('posterListLabel') + ' (' + block.posters.length + ')';
          posterList.appendChild(posterHeading);
          block.posters.forEach(function(p, pidx){
            var posterId = 'poster_' + id + '_' + pidx;
            var padded = isInPlan(posterId);
            var prow = document.createElement('div');
            prow.className = 'talk-row';
            prow.innerHTML =
              '<div class="talk-main" style="cursor:default;">' +
                '<div class="talk-time">' + esc(p.code) + (p.board ? ' · ' + t('posterBoard') + ' ' + esc(p.board) : '') + '</div>' +
                '<div class="talk-title">' + esc(p.title) + '</div>' +
                '<div class="talk-authors">' + renderAuthorsHtml(p.authorsDisplay) + '</div>' +
              '</div>' +
              '<button class="add-btn small' + (padded ? ' added' : '') + '" data-role="poster-add">' + (padded ? '&#10003;' : '+') + '</button>';
            posterList.appendChild(prow);
            prow.querySelectorAll('.author-link').forEach(function(el){
              el.addEventListener('click', function(ev){
                ev.stopPropagation();
                searchForAuthor(el.getAttribute('data-author'));
              });
            });
            prow.querySelector('[data-role="poster-add"]').addEventListener('click', function(ev){
              ev.stopPropagation();
              var boardText = p.board ? (' · ' + t('posterBoard') + ' ' + p.board) : '';
              togglePlan({
                id: posterId, dayId: day.id, dayLabel: day.label, date: day.date,
                time: block.time, title: p.title, subtitle: p.authorsDisplay + ' · ' + p.code + boardText,
                room: '', authors: p.authorsDisplay, isPoster: true
              });
              renderProgrammList();
            });
          });
          card.appendChild(posterList);
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
          var hasTalks = s.talks && s.talks.length > 0;
          var sessionAbstractText = lang === 'en' ? s.abstract_en : s.abstract_de;
          var hasExpandableContent = hasTalks || !!sessionAbstractText;
          var sadded = hasTalks
            ? s.talks.every(function(talk, idx){ return isInPlan(planIdForTalk(day.id, block, s, talk, idx)); })
            : isInPlan(sid);
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
              '<span class="session-tag' + (s.isWSA ? ' session-tag-wsa' : '') + '">' + esc(s.code) + '</span>' + sessionLangFlags(s.lang) + '<span class="session-room' + (FLOORPLAN_ROOM_MAP[s.room] ? ' room-link' : '') + '" data-room="' + esc(s.room) + '">' + esc(s.room) + '</span>' +
              '<div class="session-title">' + esc(lang === 'en' && s.title_en ? s.title_en : s.title) + contSuffix + '</div>' +
              (s.mod ? '<div class="session-mod">' + t('mod') + ' ' + esc(s.mod) + '</div>' : '') +
            '</div>' +
            '<div class="session-btns">' +
              '<button class="add-btn' + (sadded ? ' added' : '') + '" data-role="session-add">' + (sadded ? '&#10003;' : '+') + '</button>' +
              (hasExpandableContent ? '<div class="chevron' + (isOpen ? ' open' : '') + '">&#9656;</div>' : '') +
            '</div>';
          row.appendChild(header);

          header.querySelector('[data-role="session-add"]').addEventListener('click', function(ev){
            ev.stopPropagation();
            if(hasTalks){
              var allAdded = s.talks.every(function(talk, idx){ return isInPlan(planIdForTalk(day.id, block, s, talk, idx)); });
              s.talks.forEach(function(talk, idx){
                var tid = planIdForTalk(day.id, block, s, talk, idx);
                var currentlyIn = isInPlan(tid);
                if(allAdded && currentlyIn){
                  var pidx = plan.findIndex(function(p){ return p.id === tid; });
                  if(pidx >= 0) plan.splice(pidx, 1);
                } else if(!allAdded && !currentlyIn){
                  plan.push({
                    id: tid, dayId: day.id, dayLabel: day.label, date: day.date,
                    time: computeTalkTimeRange(s.talks, idx, block.time), title: talk.title, subtitle: talk.authors + ' · ' + s.code, room: s.room,
                    abstract: talk.abstract || '', code: s.code, authors: talk.authors
                  });
                }
              });
              savePlan(plan);
              render();
            } else {
              togglePlan({
                id: sid, dayId: day.id, dayLabel: day.label, date: day.date,
                time: block.time, title: s.code + ' · ' + (lang === 'en' && s.title_en ? s.title_en : s.title) + contSuffix, subtitle: s.mod ? t('mod') + ' ' + s.mod : '', room: s.room,
                abstract: sessionAbstractText || '', code: s.code
              });
            }
          });

          if(header.querySelector('.room-link')){
            header.querySelector('.room-link').addEventListener('click', function(ev){
              ev.stopPropagation();
              showFloorplanRoom(this.getAttribute('data-room'));
            });
          }

          if(hasExpandableContent){
            header.style.cursor = 'pointer';
            header.addEventListener('click', function(ev){
              if(ev.target.closest('[data-role="session-add"]') || ev.target.closest('.room-link')) return;
              var wasOpen = !!expandedSessions[expandKey];
              expandedSessions = {};
              if(!wasOpen){ expandedSessions[expandKey] = true; }
              rerenderPreservingScroll('row-' + sid);
            });
          }

          if(hasExpandableContent && isOpen){
            var talkList = document.createElement('div');
            talkList.className = 'talk-list';

            if(sessionAbstractText){
              appendAbstractWithKeynote(talkList, sessionAbstractText);
            }

            if(hasTalks){
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
                  '<div class="talk-authors">' + renderAuthorsHtml(talk.authors) + '</div>' +
                '</div>' +
                '<button class="add-btn small' + (tadded ? ' added' : '') + '" data-id="' + tid + '">' + (tadded ? '&#10003;' : '+') + '</button>';
              trow.querySelector('.talk-main').addEventListener('click', function(ev){
                if(ev.target.closest('.author-link')) return;
                var wasOpen = !!expandedTalks[tid];
                expandedTalks = {};
                if(!wasOpen){ expandedTalks[tid] = true; }
                rerenderPreservingScroll('row-' + tid);
              });
              trow.querySelectorAll('.author-link').forEach(function(el){
                el.addEventListener('click', function(ev){
                  ev.stopPropagation();
                  searchForAuthor(el.getAttribute('data-author'));
                });
              });
              trow.querySelector('.add-btn').addEventListener('click', function(ev){
                ev.stopPropagation();
                togglePlan({
                  id: tid, dayId: day.id, dayLabel: day.label, date: day.date,
                  time: computeTalkTimeRange(s.talks, idx, block.time), title: talk.title, subtitle: talk.authors + ' · ' + s.code, room: s.room,
                  abstract: talk.abstract || '', code: s.code, authors: talk.authors
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
            }
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
            text: [block.title, block.title_en, block.subtitle, block.subtitle_en, block.abstract, block.bio_de, block.bio_en].filter(Boolean).join(' '),
            title: block.title, title_en: block.title_en,
            isPlenary: !!block.isPlenary, tag: block.tag, tag_en: block.tag_en
          });
          if(block.title !== 'Poster Speed Talks'){
            (block.posters || []).forEach(function(p, pidx){
              searchIndex.push({
                kind: 'poster', dayId: day.id, jumpId: 'poster_' + id + '_' + pidx, blockId: id, timeLabel: block.time,
                text: [p.title, p.authorsDisplay, p.code].filter(Boolean).join(' '),
                title: p.title, authors: p.authorsDisplay, board: p.board, code: p.code,
                dayLabel: day.label, date: day.date
              });
            });
          }
        } else {
          block.sessions.forEach(function(s){
            var sid = planIdForSession(day.id, block, s);
            searchIndex.push({
              kind: 'session', dayId: day.id, jumpId: sid, sid: sid, timeLabel: block.time,
              text: [s.code, s.title, s.title_en, s.mod].filter(Boolean).join(' '),
              title: s.code + ' · ' + s.title, title_en: s.title_en ? (s.code + ' · ' + s.title_en) : null, sub: s.mod ? ('Mod.: ' + s.mod) : '',
              hasTalks: !!(s.talks && s.talks.length),
              code: s.code, isContinuation: !!s.isContinuation
            });
            (s.talks || []).forEach(function(talk, idx){
              var tid = planIdForTalk(day.id, block, s, talk, idx);
              searchIndex.push({
                kind: 'talk', dayId: day.id, jumpId: tid, sid: sid, timeLabel: talk.time,
                text: [talk.title, talk.authors, s.code].filter(Boolean).join(' '),
                title: talk.title, sub: talk.authors,
                authors: talk.authors, abstract: talk.abstract || '', room: s.room, code: s.code,
                dayLabel: day.label, date: day.date,
                planTime: computeTalkTimeRange(s.talks, idx, block.time)
              });
            });
          });
        }
      });
    });
  })();

  var dayLabelMap = {};
  DATA.programm.forEach(function(d){ dayLabelMap[d.id] = { de: d.label, en: d.label_en }; });

  function jumpToEntry(m){
    currentDay = m.dayId;
    currentCategoryFilter = 'alle';
    expandedSessions = {};
    expandedTalks = {};
    if(m.kind === 'session'){ expandedSessions[m.sid] = true; }
    if(m.kind === 'talk'){ expandedSessions[m.sid] = true; expandedTalks[m.jumpId] = true; }
    if(m.kind === 'info'){ expandedSessions[m.jumpId] = true; }
    document.getElementById('programmSearch').value = '';
    document.getElementById('searchClearBtn').style.display = 'none';
    document.getElementById('searchResults').style.display = 'none';
    document.getElementById('categoryFilter').style.display = '';
    document.getElementById('programmList').style.display = '';
    document.getElementById('topicJump').value = '';
    renderDayTabs();
    renderCategoryFilter();
    renderProgrammList();
    setTimeout(function(){
      var el = document.getElementById('row-' + m.jumpId);
      if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
    }, 50);
  }

  function renderSearchResults(query){
    var wrap = document.getElementById('searchResults');
    var q = query.trim().toLowerCase();
    if(!q){
      wrap.style.display = 'none';
      document.getElementById('dayTabs').style.display = '';
      document.getElementById('categoryFilter').style.display = '';
      document.getElementById('programmList').style.display = '';
      return;
    }
    document.getElementById('dayTabs').style.display = 'none';
    document.getElementById('categoryFilter').style.display = 'none';
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
      var title = (lang === 'en' && m.title_en) ? m.title_en : m.title;
      var roomClickable = m.room && FLOORPLAN_ROOM_MAP[m.room];
      var isOpen = m.kind === 'talk' && !!expandedTalks[m.jumpId];

      if(m.kind === 'talk'){
        var padded = isInPlan(m.jumpId);
        item.innerHTML =
          '<div class="search-result-day">' + esc(dayLabel) + ' · ' + esc(m.timeLabel) + (m.room ? ' · <span class="' + (roomClickable ? 'room-link' : '') + '" data-room="' + esc(m.room) + '">' + esc(m.room) + '</span>' : '') + '</div>' +
          '<div class="search-result-title">' + esc(title) + '</div>' +
          '<div class="search-result-sub">' + renderAuthorsHtml(m.authors) + '</div>' +
          '<button class="add-btn small' + (padded ? ' added' : '') + '" data-role="search-add" style="position:absolute;top:12px;right:12px;">' + (padded ? '&#10003;' : '+') + '</button>';
        item.style.cursor = 'pointer';
        item.style.position = 'relative';
        if(roomClickable){
          item.querySelector('.room-link').addEventListener('click', function(ev){
            ev.stopPropagation();
            showFloorplanRoom(m.room);
          });
        }
        item.querySelectorAll('.author-link').forEach(function(el){
          el.addEventListener('click', function(ev){
            ev.stopPropagation();
            searchForAuthor(el.getAttribute('data-author'));
          });
        });
        item.querySelector('[data-role="search-add"]').addEventListener('click', function(ev){
          ev.stopPropagation();
          togglePlan({
            id: m.jumpId, dayId: m.dayId, dayLabel: m.dayLabel, date: m.date,
            time: m.planTime, title: m.title, subtitle: m.authors + ' · ' + m.code, room: m.room,
            abstract: m.abstract || '', code: m.code, authors: m.authors
          });
          renderSearchResults(query);
        });
        if(isOpen){
          var abBox = document.createElement('div');
          if(m.abstract){
            abBox.className = 'abstract-box';
            abBox.textContent = m.abstract;
          } else {
            abBox.className = 'abstract-empty';
            abBox.textContent = t('noAbstract');
          }
          item.appendChild(abBox);
        }
        item.addEventListener('click', function(ev){
          if(ev.target.closest('.room-link') || ev.target.closest('.author-link') || ev.target.closest('[data-role="search-add"]')) return;
          var wasOpen = !!expandedTalks[m.jumpId];
          expandedTalks[m.jumpId] = !wasOpen;
          renderSearchResults(query);
        });
      } else if(m.kind === 'poster'){
        var posterPadded = isInPlan(m.jumpId);
        item.innerHTML =
          '<div class="search-result-day">' + esc(dayLabel) + ' · ' + esc(m.timeLabel) + (m.board ? ' · ' + t('posterBoard') + ' ' + esc(m.board) : '') + '</div>' +
          '<div class="search-result-title"><span class="session-tag">' + t('posterListLabel') + '</span> ' + esc(title) + '</div>' +
          '<div class="search-result-sub">' + renderAuthorsHtml(m.authors) + '</div>' +
          '<button class="add-btn small' + (posterPadded ? ' added' : '') + '" data-role="search-add" style="position:absolute;top:12px;right:12px;">' + (posterPadded ? '&#10003;' : '+') + '</button>';
        item.style.position = 'relative';
        item.querySelectorAll('.author-link').forEach(function(el){
          el.addEventListener('click', function(ev){
            ev.stopPropagation();
            searchForAuthor(el.getAttribute('data-author'));
          });
        });
        item.querySelector('[data-role="search-add"]').addEventListener('click', function(ev){
          ev.stopPropagation();
          var boardText = m.board ? (' · ' + t('posterBoard') + ' ' + m.board) : '';
          togglePlan({
            id: m.jumpId, dayId: m.dayId, dayLabel: m.dayLabel, date: m.date,
            time: m.timeLabel, title: m.title, subtitle: m.authors + ' · ' + m.code + boardText,
            room: '', authors: m.authors, isPoster: true
          });
          renderSearchResults(query);
        });
      } else {
        item.innerHTML =
          '<div class="search-result-day">' + esc(dayLabel) + ' · ' + esc(m.timeLabel) + '</div>' +
          '<div class="search-result-title">' + esc(title) + '</div>' +
          (m.sub ? '<div class="search-result-sub">' + esc(m.sub) + '</div>' : '');
        item.addEventListener('click', function(){
          saveNavBackState('search', { query: query });
          jumpToEntry(m);
        });
      }
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

  // ---------- Topic jump dropdown ----------
  var topicList = [];
  (function buildTopicList(){
    var seen = {};
    searchIndex.forEach(function(entry){
      var dedupKey = entry.code + '|' + entry.title;
      if(entry.kind === 'session' && !entry.isContinuation && entry.code && entry.title.indexOf('Closing Remarks') === -1 && !seen[dedupKey]){
        seen[dedupKey] = true;
        var group;
        if(entry.code === 'WRHC') group = 2;
        else if(entry.code === 'Preisvortrag') group = 4;
        else if(/^A/.test(entry.code)) group = 0;
        else group = 1;
        entry._group = group;
        topicList.push(entry);
      }
      if(entry.kind === 'info' && entry.isPlenary){
        var plenaryDedupKey = 'plenary|' + entry.jumpId;
        if(!seen[plenaryDedupKey]){
          seen[plenaryDedupKey] = true;
          var isAward = entry.tag === 'Preisvortrag';
          topicList.push({
            kind: 'info', dayId: entry.dayId, jumpId: entry.jumpId, code: '',
            title: (entry.tag || '') + ' ' + entry.title,
            title_en: (entry.tag_en || entry.tag || '') + ' ' + (entry.title_en || entry.title),
            _isPlenaryTopic: true,
            _group: isAward ? 4 : 3
          });
        }
      }
    });
    function codeSortKey(code){
      var m = code.match(/^([A-Za-z]+)0*(\d+)/);
      if(m) return [m[1], parseInt(m[2], 10)];
      return [code, 0];
    }
    function wrhcSortKey(title){
      var m = title.match(/Session (\d+)/);
      return m ? parseInt(m[1], 10) : 99;
    }
    topicList.sort(function(a, b){
      if(a._group !== b._group) return a._group - b._group;
      if(a._group === 2){
        return wrhcSortKey(a.title) - wrhcSortKey(b.title);
      }
      if(a._group === 3 || a._group === 4){
        return a.title < b.title ? -1 : (a.title > b.title ? 1 : 0);
      }
      var ka = codeSortKey(a.code), kb = codeSortKey(b.code);
      if(ka[0] !== kb[0]) return ka[0] < kb[0] ? -1 : 1;
      return ka[1] - kb[1];
    });
  })();

  function renderTopicJump(){
    var sel = document.getElementById('topicJump');
    var placeholder = lang === 'en' ? 'Jump to topic/session…' : 'Zu Thema/Session springen…';
    sel.innerHTML = '<option value="">' + esc(placeholder) + '</option>';
    topicList.forEach(function(entry, idx){
      var opt = document.createElement('option');
      opt.value = idx;
      var entryTitle = (lang === 'en' && entry.title_en) ? entry.title_en : entry.title;
      var label = entryTitle.length > 70 ? entryTitle.slice(0, 67) + '…' : entryTitle;
      opt.textContent = label;
      sel.appendChild(opt);
    });
  }
  document.getElementById('topicJump').addEventListener('change', function(){
    var idx = this.value;
    if(idx === '') return;
    jumpToEntry(topicList[idx]);
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
      var isCafe = l.name === "Gerdan's Café";
      card.innerHTML =
        '<div class="lunch-card">' +
          '<div style="flex:1;min-width:0;">' +
            '<div class="lunch-name' + (isCafe ? ' room-link' : '') + '"' + (isCafe ? ' data-fp-room="cafe"' : '') + '>' + esc(l.name) + '</div>' +
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
      if(isCafe){
        card.querySelector('.lunch-name').addEventListener('click', function(){
          openFloorplanLightbox(['cafe']);
        });
      }
    });
  }

  // ---------- Lunch map view ----------
  var lunchMapInstance = null;
  var lunchMapLoaded = false;

  function initLunchMap(){
    if(lunchMapLoaded || typeof L === 'undefined') return;
    lunchMapLoaded = true;
    var venue = DATA.venue;
    lunchMapInstance = L.map('lunchMap').setView([venue.lat, venue.lng], 16);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 19
    }).addTo(lunchMapInstance);

    var venueIcon = L.divIcon({
      className: '', html:
        '<div style="position:relative;width:36px;height:36px;">' +
          '<div class="venue-pulse"></div>' +
          '<div style="position:relative;background:#003d73;color:#fff;border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;border:3px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,.45);">&#127963;</div>' +
        '</div>',
      iconSize: [36,36], iconAnchor: [18,18]
    });
    L.marker([venue.lat, venue.lng], { icon: venueIcon, zIndexOffset: 1000 }).addTo(lunchMapInstance)
      .bindPopup('<strong>' + esc(venue.name) + '</strong>')
      .bindTooltip(venue.name, { permanent: true, direction: 'top', offset: [0, -18], className: 'venue-tooltip' });

    var lunchIcon = L.divIcon({
      className: '', html: '<div style="background:#1d6f5c;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-size:12px;border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,.4);">&#127869;</div>',
      iconSize: [24,24], iconAnchor: [12,12]
    });

    DATA.lunch.forEach(function(l){
      if(l.lat == null || l.lng == null) return;
      var typDisplay = lang === 'en' ? l.typ_en : l.typ;
      var popupHtml = '<strong>' + esc(l.name) + '</strong><br>' + esc(typDisplay) + (l.hours ? ' · ' + esc(l.hours) : '') + '<br>' + l.distMin + ' ' + t('min') + ' · ' + l.distM + ' m';
      L.marker([l.lat, l.lng], { icon: lunchIcon }).addTo(lunchMapInstance).bindPopup(popupHtml);
    });

    if(venue.socialVenue){
      var sv = venue.socialVenue;
      var socialIcon = L.divIcon({
        className: '', html:
          '<div style="position:relative;width:34px;height:34px;">' +
            '<div class="venue-pulse" style="background:rgba(155,89,20,.35);"></div>' +
            '<div style="position:relative;background:#9b5914;color:#fff;border-radius:50%;width:34px;height:34px;display:flex;align-items:center;justify-content:center;font-size:16px;border:3px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,.45);">&#127925;</div>' +
          '</div>',
        iconSize: [34,34], iconAnchor: [17,17]
      });
      L.marker([sv.lat, sv.lng], { icon: socialIcon, zIndexOffset: 900 }).addTo(lunchMapInstance)
        .bindPopup('<strong>' + esc(sv.name) + '</strong><br>' + esc(sv.address) + '<br>' + (lang === 'en' ? 'Conference Dinner' : 'Gesellschaftsabend'))
        .bindTooltip(sv.name + (lang === 'en' ? ' (Conference Dinner)' : ' (Gesellschaftsabend)'), { direction: 'top', offset: [0, -17], className: 'venue-tooltip social-tooltip' });
    }
  }

  function setLunchView(mode){
    var listBtn = document.getElementById('lunchViewListBtn');
    var mapBtn = document.getElementById('lunchViewMapBtn');
    var listEl = document.getElementById('lunchList');
    var mapEl = document.getElementById('lunchMap');
    var filtersEl = document.getElementById('lunchFilters');
    listBtn.classList.toggle('active', mode === 'list');
    mapBtn.classList.toggle('active', mode === 'map');
    listEl.style.display = mode === 'list' ? '' : 'none';
    filtersEl.style.display = mode === 'list' ? '' : 'none';
    mapEl.style.display = mode === 'map' ? 'block' : 'none';
    if(mode === 'map'){
      initLunchMap();
      setTimeout(function(){ if(lunchMapInstance) lunchMapInstance.invalidateSize(); }, 100);
    }
  }
  document.getElementById('lunchViewListBtn').addEventListener('click', function(){ setLunchView('list'); });
  document.getElementById('lunchViewMapBtn').addEventListener('click', function(){ setLunchView('map'); });

  // ---------- Exkursionen ----------
  var expandedExk = {};

  function renderExkursionen(){
    var list = document.getElementById('exkList');
    list.innerHTML = '';
    var leitungLabel = lang === 'en' ? 'Lead:' : 'Leitung:';
    DATA.exkursionen.forEach(function(e){
      var card = document.createElement('div');
      card.className = 'card';
      card.id = 'exk-' + e.id;
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
  function renderVenue(){
    var v = DATA.venue;
    var box = document.getElementById('venueBox');
    var oepnv = lang === 'en' ? v.oepnv_en : v.oepnv;
    box.innerHTML =
      '<div class="card">' +
        '<div class="card-section-heading">' + t('venueCardTitle') + '</div>' +
        '<div class="lunch-name">' + esc(v.name) + '</div>' +
        '<div class="lunch-meta" style="margin-top:6px;">' + esc(v.address) + '</div>' +
        '<a class="venue-map-link" href="' + esc(v.maps) + '" target="_blank" rel="noopener">' + t('openMaps') + '</a>' +
        '<div class="lunch-meta"><strong style="color:var(--text)">' + t('oepnvLabel') + '</strong> ' + esc(oepnv) + '</div>' +
      '</div>' +
      '<div class="card social-card">' +
        '<div class="card-section-heading">' + t('followUs') + '</div>' +
        '<div class="social-links">' +
          '<a class="social-link" href="https://www.instagram.com/dgl_ev/" target="_blank" rel="noopener">' +
            '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>' +
            '<span>Instagram</span>' +
          '</a>' +
          '<a class="social-link" href="https://www.linkedin.com/company/deutsche-gesellschaft-f-r-limnologie/" target="_blank" rel="noopener">' +
            '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>' +
            '<span>LinkedIn</span>' +
          '</a>' +
          '<a class="social-link" href="https://bsky.app/profile/dgl-ev.bsky.social" target="_blank" rel="noopener">' +
            '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 10.8C10.6 8 6.4 4.9 3.8 4c-.5 0-1 .2-1 1v10.4c0 .8.5 1.3 1.2 1.4 3.5.5 6.6 1.9 8 4.2 1.4-2.3 4.5-3.7 8-4.2.7-.1 1.2-.6 1.2-1.4V5c0-.8-.5-1-1-1-2.6.9-6.8 4-8.2 6.8z"/></svg>' +
            '<span>BlueSky</span>' +
          '</a>' +
        '</div>' +
      '</div>' +
      '<div class="card">' +
        '<div class="card-section-heading">' + t('organizersLabel') + '</div>' +
        '<div class="org-links">' +
          '<a class="org-link" href="https://dgl-jahrestagungen.de/" target="_blank" rel="noopener">' +
            '<img src="logo_dgl.png" alt="DGL">' +
          '</a>' +
          '<a class="org-link" href="https://watersciencealliance.org/wrch" target="_blank" rel="noopener">' +
            '<div class="org-logo-placeholder">WSA</div>' +
          '</a>' +
          '<a class="org-link" href="https://www.igb-berlin.de/" target="_blank" rel="noopener">' +
            '<img src="logo_igb.png" alt="IGB">' +
          '</a>' +
          '<a class="org-link" href="https://www.hu-berlin.de/" target="_blank" rel="noopener">' +
            '<img src="logo_hu_berlin.png" alt="HU Berlin">' +
          '</a>' +
        '</div>' +
      '</div>';
  }

  // ---------- Mein Plan ----------
  function computeNextUp(){
    var now = nowDate();
    var candidates = [];
    plan.forEach(function(item){
      var r = blockDateRange(item.dayId, item.time);
      if(r && r.start > now){ candidates.push({ item: item, start: r.start }); }
    });
    candidates.sort(function(a,b){ return a.start - b.start; });
    return candidates[0];
  }

  function renderNextUp(){
    var box = document.getElementById('nextUpBox');
    var next = computeNextUp();
    if(!next){ box.innerHTML = ''; return; }
    var now = nowDate();
    var diffMin = Math.round((next.start - now) / 60000);
    if(diffMin > 15){ box.innerHTML = ''; return; }
    var whenText = lang === 'en' ? ('in ' + diffMin + ' min') : ('in ' + diffMin + ' Min');
    box.innerHTML =
      '<div class="next-up-card">' +
        '<div class="next-up-label">' + t('nextUp') + '</div>' +
        '<div class="next-up-title">' + esc(next.item.title) + '</div>' +
        '<div class="next-up-meta">' + esc(whenText) + (next.item.room ? ' · ' + esc(next.item.room) : '') + '</div>' +
      '</div>';
  }

  function conflictLabel(item){
    var baseTitle = item.title;
    if(item.code && baseTitle.indexOf(item.code + ' · ') === 0){
      baseTitle = baseTitle.slice((item.code + ' · ').length);
    }
    return item.code ? (baseTitle + ' (' + item.code + ')') : baseTitle;
  }

  var currentPlanDay = (function(){
    var todayDay = DATA.programm.find(function(d){ return isToday(d.id); });
    return (todayDay || DATA.programm[0]).id;
  })();
  function renderPlanListDayTabs(){
    var wrap = document.getElementById('planListDayTabs');
    wrap.innerHTML = '';
    DATA.programm.forEach(function(dayObj){
      var b = document.createElement('div');
      b.className = 'day-tab' + (currentPlanDay === dayObj.id ? ' active' : '');
      var dayLabel = lang === 'en' ? dayObj.label_en : dayObj.label;
      var dayNum = dayObj.date.split('.')[0];
      var dateLabel = lang === 'en' ? (dayNum + ordinalSuffix(parseInt(dayNum,10))) : (dayNum + '.');
      b.textContent = dayLabel + ' ' + dateLabel;
      b.addEventListener('click', function(){
        currentPlanDay = dayObj.id;
        renderPlanListDayTabs();
        renderPlanTimelineDayTabs();
        renderPlan();
      });
      wrap.appendChild(b);
    });
  }

  function renderPlan(){
    renderNextUp();
    renderPlanListDayTabs();
    var box = document.getElementById('planList');
    box.innerHTML = '';
    var visiblePlan = plan.filter(function(p){ return p.dayId === currentPlanDay; });
    if(plan.length === 0){
      box.innerHTML = '<div class="empty-state">' + t('planEmpty') + '</div>';
      renderPlanTimelineDayTabs();
      renderPlanTimeline();
      return;
    }
    if(visiblePlan.length === 0){
      box.innerHTML = '<div class="empty-state">' + t('planEmpty') + '</div>';
    }
    var byDay = {};
    visiblePlan.forEach(function(p){
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
        if(group.items[i].isPoster) continue;
        for(var j = 0; j < group.items.length; j++){
          if(i === j || group.items[j].isPoster) continue;
          var ra = ranges[i], rb = ranges[j];
          if(ra && rb && ra.start < rb.end && rb.start < ra.end){
            conflicts[i].push(conflictLabel(group.items[j]));
          }
        }
      }

      group.items.forEach(function(item, idx){
       try {
        var card = document.createElement('div');
        card.className = 'card' + (item.authors ? '' : ' plan-card-block');
        var hasDetails = !!(item.abstract || item.bio);
        var isOpen = !!expandedPlanItems[item.id];
        var roomClickable = item.room && FLOORPLAN_ROOM_MAP[item.room];
        var mainDiv = document.createElement('div');
        mainDiv.style.display = 'flex';
        mainDiv.style.justifyContent = 'space-between';
        mainDiv.style.alignItems = 'flex-start';
        mainDiv.style.gap = '10px';
        if(hasDetails) mainDiv.style.cursor = 'pointer';
        mainDiv.innerHTML =
            '<div style="flex:1;min-width:0;">' +
              '<div class="block-time">' + esc(item.time) + (item.room ? ' · <span class="' + (roomClickable ? 'room-link' : '') + '" data-room="' + esc(item.room) + '">' + esc(item.room) + '</span>' : '') + '</div>' +
              '<div class="block-title">' + (item.isPoster ? '<span class="session-tag">' + t('posterListLabel') + '</span> ' : '') + esc(item.title) + '</div>' +
              (item.subtitle ? '<div class="block-subtitle">' + (item.authors ? renderAuthorsHtml(item.authors) + esc(item.subtitle.slice(item.authors.length)) : esc(item.subtitle)) + '</div>' : '') +
            '</div>' +
            '<div class="session-btns">' +
              '<button class="remove-btn" data-id="' + item.id + '">&times;</button>' +
              (hasDetails ? '<div class="chevron' + (isOpen ? ' open' : '') + '">&#9656;</div>' : '') +
            '</div>';
        card.appendChild(mainDiv);
        if(conflicts[idx].length){
          var confDiv = document.createElement('div');
          confDiv.className = 'plan-conflict';
          confDiv.textContent = '⚠ ' + t('planConflict') + ' ' + conflicts[idx].join(', ');
          card.appendChild(confDiv);
        }
        if(roomClickable){
          mainDiv.querySelector('.room-link').addEventListener('click', function(ev){
            ev.stopPropagation();
            showFloorplanRoom(item.room);
          });
        }
        mainDiv.querySelectorAll('.author-link').forEach(function(el){
          el.addEventListener('click', function(ev){
            ev.stopPropagation();
            searchForAuthor(el.getAttribute('data-author'), 'plan');
          });
        });
        mainDiv.querySelector('.remove-btn').addEventListener('click', function(ev){
          ev.stopPropagation();
          togglePlan(item);
          renderPlan();
        });
        if(hasDetails){
          mainDiv.addEventListener('click', function(ev){
            if(ev.target.closest('.remove-btn') || ev.target.closest('.room-link') || ev.target.closest('.author-link')) return;
            var wasOpen = !!expandedPlanItems[item.id];
            expandedPlanItems = {};
            if(!wasOpen){ expandedPlanItems[item.id] = true; }
            renderPlan();
          });
          if(isOpen){
            if(item.abstract){
              appendAbstractWithKeynote(card, item.abstract);
            }
            if(item.bio){
              var bioHeading = document.createElement('div');
              bioHeading.className = 'bio-heading';
              bioHeading.textContent = t('aboutSpeaker');
              card.appendChild(bioHeading);
              var bioP = document.createElement('div');
              bioP.className = 'abstract-box';
              bioP.textContent = item.bio;
              card.appendChild(bioP);
            }
          }
        }
        box.appendChild(card);
       } catch(e){
        console.warn('Skipped rendering a broken plan item:', item, e);
       }
      });
    });
    renderPlanTimelineDayTabs();
    renderPlanTimeline();
  }

  // ---------- Plan timeline view ----------
  var PT_START_HOUR = 9;
  var PT_END_HOUR = 20;
  var PT_PX_PER_MIN = 2.6;

  var currentPlanViewMode = 'list';
  function setPlanView(mode){
    currentPlanViewMode = mode;
    document.getElementById('planViewListBtn').classList.toggle('active', mode === 'list');
    document.getElementById('planViewTimelineBtn').classList.toggle('active', mode === 'timeline');
    document.getElementById('planList').style.display = mode === 'list' ? '' : 'none';
    document.getElementById('planListDayTabs').style.display = mode === 'list' ? '' : 'none';
    document.getElementById('planTimelineWrap').style.display = mode === 'timeline' ? '' : 'none';
    if(mode === 'timeline'){ renderPlanTimelineDayTabs(); renderPlanTimeline(); }
  }
  document.getElementById('planViewListBtn').addEventListener('click', function(){ setPlanView('list'); });
  document.getElementById('planViewTimelineBtn').addEventListener('click', function(){ setPlanView('timeline'); });

  function planDaysWithItems(){
    var order = DATA.programm.map(function(d){ return d.id; });
    var present = {};
    plan.forEach(function(p){ present[p.dayId] = true; });
    return order.filter(function(id){ return present[id]; });
  }

  function renderPlanTimelineDayTabs(){
    var wrap = document.getElementById('planTimelineDayTabs');
    wrap.innerHTML = '';
    var days = DATA.programm.map(function(d){ return d.id; });
    days.forEach(function(dayId){
      var dayObj = DATA.programm.find(function(d){ return d.id === dayId; });
      var b = document.createElement('div');
      b.className = 'day-tab' + (dayId === currentPlanDay ? ' active' : '');
      var dayLabel = lang === 'en' ? dayObj.label_en : dayObj.label;
      var dayNum = dayObj.date.split('.')[0];
      var dateLabel = lang === 'en' ? (dayNum + ordinalSuffix(parseInt(dayNum,10))) : (dayNum + '.');
      b.textContent = dayLabel + ' ' + dateLabel;
      b.addEventListener('click', function(){
        currentPlanDay = dayId;
        renderPlanListDayTabs();
        renderPlanTimelineDayTabs();
        renderPlanTimeline();
      });
      wrap.appendChild(b);
    });
  }

  function computeOverlapLayout(items){
    var sorted = items.slice().sort(function(a,b){ return a._start - b._start; });
    var result = [];
    var clusterItems = [];
    var clusterEnd = -1;

    function flushCluster(){
      if(!clusterItems.length) return;
      var columns = [];
      clusterItems.forEach(function(it){
        var placed = false;
        for(var c=0;c<columns.length;c++){
          if(columns[c] <= it._start){
            columns[c] = it._end;
            it._col = c;
            placed = true;
            break;
          }
        }
        if(!placed){
          columns.push(it._end);
          it._col = columns.length-1;
        }
      });
      clusterItems.forEach(function(it){ it._totalCols = columns.length; });
      clusterItems = [];
    }

    sorted.forEach(function(it){
      if(clusterItems.length && it._start >= clusterEnd){
        flushCluster();
        clusterEnd = -1;
      }
      clusterItems.push(it);
      clusterEnd = Math.max(clusterEnd, it._end);
    });
    flushCluster();
    return sorted;
  }

  function formatAuthorsCompact(authorsStr){
    if(!authorsStr) return '';
    var namesPart = authorsStr.split(' — ')[0];
    var names = namesPart.split(/,\s*/).filter(Boolean);
    if(!names.length) return '';
    return names[0];
  }

  function abbreviateAuthorName(authorsStr){
    if(!authorsStr) return '';
    var namesPart = authorsStr.split(' — ')[0];
    var firstAuthor = (namesPart.split(/,\s*/)[0] || '').trim();
    var words = firstAuthor.split(/\s+/).filter(Boolean);
    if(words.length < 2) return firstAuthor;
    var last = words[words.length - 1];
    var first = words[0];
    return first.charAt(0) + '. ' + last;
  }

  function renderPlanTimeline(){
    var container = document.getElementById('planTimeline');
    container.innerHTML = '';
    var PT_TOP_OFFSET = 12;
    var totalMin = (PT_END_HOUR - PT_START_HOUR) * 60;
    container.style.height = (totalMin * PT_PX_PER_MIN + PT_TOP_OFFSET + 10) + 'px';

    var totalQuarters = (PT_END_HOUR - PT_START_HOUR) * 4;
    for(var q = 0; q <= totalQuarters; q++){
      var minFromStart = q * 15;
      var y = minFromStart * PT_PX_PER_MIN + PT_TOP_OFFSET;
      var isHour = (minFromStart % 60) === 0;
      var line = document.createElement('div');
      line.className = 'pt-hour-line' + (isHour ? ' pt-hour-line-full' : ' pt-hour-line-quarter');
      line.style.top = y + 'px';
      container.appendChild(line);
      if(isHour){
        var h = PT_START_HOUR + minFromStart/60;
        var label = document.createElement('div');
        label.className = 'pt-hour-label';
        label.style.top = y + 'px';
        label.textContent = (h < 10 ? '0'+h : h) + ':00';
        container.appendChild(label);
      }
    }

    if(!currentPlanDay) return;
    var dayItemsRaw = plan.filter(function(p){ return p.dayId === currentPlanDay; });
    var posterGroups = {};
    var dayItems = [];
    dayItemsRaw.forEach(function(p){
      if(p.isPoster){
        (posterGroups[p.time] = posterGroups[p.time] || []).push(p);
      } else {
        dayItems.push(p);
      }
    });
    Object.keys(posterGroups).forEach(function(time){
      dayItems.push({
        id: 'postergroup_' + time,
        time: time,
        title: (lang === 'en' ? 'Poster session' : 'Postersession'),
        _isPosterGroup: true,
        _posters: posterGroups[time]
      });
    });

    var dayObj = DATA.programm.find(function(d){ return d.id === currentPlanDay; });
    if(dayObj){
      dayObj.blocks.forEach(function(block, blockIdx){
        if(block.type === 'info' && block.noPlan){
          var fixedTitle = (lang === 'en' && block.title_en) ? block.title_en : block.title;
          var displayTime = block.time;
          if(block.time.indexOf('–') === -1){
            var ownStart = parseTimeRangeMinutes(block.time);
            if(ownStart){
              for(var nj = blockIdx+1; nj < dayObj.blocks.length; nj++){
                var nextRange = parseTimeRangeMinutes(dayObj.blocks[nj].time);
                if(nextRange && nextRange.start > ownStart.start){
                  displayTime = block.time + ' – ' + minutesToHHMM(nextRange.start);
                  break;
                }
              }
            }
          }
          var breakIcon = '';
          if(block.title === 'Kaffeepause') breakIcon = '☕ ';
          else if(block.title === 'Mittagspause') breakIcon = '🍽 ';
          else if(block.title === 'Registrierung') breakIcon = '📋 ';
          dayItems.push({
            id: 'fixed_' + block.time + '_' + block.title,
            time: displayTime, title: breakIcon + fixedTitle, subtitle: '', room: '',
            _fixed: true,
            _linkView: block.linkView || null,
            _linkExk: block.linkExk || null,
            _linkFloorplan: block.linkFloorplan || null
          });
        }
      });
    }

    var laidOut = dayItems.map(function(p){
      var range = parseTimeRangeMinutes(p.time);
      var start = range ? range.start : PT_START_HOUR*60;
      var end = range ? range.end : start+45;
      return { item: p, _start: start, _end: end };
    });
    laidOut = computeOverlapLayout(laidOut);

    // conflict flags (reuse simple pairwise overlap check, ignore fixed break blocks)
    var conflictIds = {};
    for(var i=0;i<laidOut.length;i++){
      if(laidOut[i].item._fixed || laidOut[i].item._isPosterGroup) continue;
      for(var j=0;j<laidOut.length;j++){
        if(i===j || laidOut[j].item._fixed || laidOut[j].item._isPosterGroup) continue;
        if(laidOut[i]._start < laidOut[j]._end && laidOut[j]._start < laidOut[i]._end){
          conflictIds[laidOut[i].item.id] = true;
        }
      }
    }

    laidOut.forEach(function(entry){
      var p = entry.item;
      var top = Math.max(0, (entry._start - PT_START_HOUR*60)) * PT_PX_PER_MIN + PT_TOP_OFFSET;
      var colFrac = entry._col / entry._totalCols;
      var widthFrac = 1 / entry._totalCols;
      var el = document.createElement('div');

      if(p._isPosterGroup){
        var lineHeight = 15;
        var groupHeight = Math.max(38, 20 + p._posters.length * lineHeight);
        el.className = 'pt-item pt-item-block';
        el.style.top = top + 'px';
        el.style.height = groupHeight + 'px';
        el.style.left = 'calc(44px + (100% - 44px) * ' + colFrac + ')';
        el.style.width = 'calc((100% - 44px) * ' + widthFrac + ' - 4px)';
        var posterLines = p._posters.map(function(poster, pidx){
          var boardText = poster.subtitle ? poster.subtitle.split(' · ').slice(2).join(' · ') : '';
          return '<div class="pt-poster-line" data-poster-idx="' + pidx + '">' + esc(abbreviateAuthorName(poster.authors)) + (boardText ? ' <span class="pt-item-room">' + esc(boardText) + '</span>' : '') + '</div>';
        }).join('');
        el.innerHTML =
          '<div class="pt-item-time">' + esc(p.time) + ' · ' + esc(p.title) + '</div>' +
          posterLines;
        el.querySelectorAll('.pt-poster-line').forEach(function(lineEl, pidx){
          lineEl.style.cursor = 'pointer';
          lineEl.addEventListener('click', function(ev){
            ev.stopPropagation();
            openPlanItemDetail(p._posters[pidx]);
          });
        });
        container.appendChild(el);
        return;
      }

      var height = Math.max(38, (entry._end - entry._start) * PT_PX_PER_MIN - 2);
      el.className = 'pt-item' + (conflictIds[p.id] ? ' pt-conflict' : '') + (p._fixed ? ' pt-fixed' : (!p.authors ? ' pt-item-block' : ''));
      el.style.top = top + 'px';
      el.style.height = height + 'px';
      el.style.left = 'calc(44px + (100% - 44px) * ' + colFrac + ')';
      el.style.width = 'calc((100% - 44px) * ' + widthFrac + ' - 4px)';
      var displayPtTime = (p.authors && !p._fixed) ? p.time.split(' – ')[0] : p.time;
      var secondLine;
      if(p._fixed){
        secondLine = esc(p.title);
      } else if(p.authors){
        secondLine = esc(formatAuthorsCompact(p.authors));
      } else {
        secondLine = esc(p.title);
      }
      el.innerHTML =
        '<div class="pt-item-time">' + esc(displayPtTime) + (p.room ? ' <span class="pt-item-room">· ' + esc(p.room) + '</span>' : '') + '</div>' +
        '<div class="pt-item-title">' + secondLine + '</div>';
      if(!p._fixed){
        el.addEventListener('click', function(){
          openPlanItemDetail(p);
        });
      } else if(p._linkView || p._linkExk || p._linkFloorplan){
        el.style.cursor = 'pointer';
        el.addEventListener('click', function(){
          if(p._linkFloorplan){
            openFloorplanLightbox([p._linkFloorplan]);
          } else if(p._linkView){
            saveNavBackState('plan');
            switchToView(p._linkView);
          } else if(p._linkExk){
            saveNavBackState('plan');
            switchToView('exkursionen');
            expandedExk = {};
            expandedExk[p._linkExk] = true;
            renderExkursionen();
            setTimeout(function(){
              var exkEl = document.getElementById('exk-' + p._linkExk);
              if(exkEl) exkEl.scrollIntoView({behavior:'smooth', block:'start'});
            }, 50);
          }
        });
      }
      container.appendChild(el);
    });
  }

  function abstractHtmlWithKeynote(text){
    if(!text) return '';
    var m = /^(Keynote:[^\n]*)\n\n([\s\S]*)$/.exec(text);
    if(m){
      return '<div class="keynote-box">' + esc(m[1]) + '</div>' + (m[2] ? '<div class="abstract-box" style="margin-top:10px;">' + esc(m[2]) + '</div>' : '');
    }
    return '<div class="abstract-box" style="margin-top:10px;">' + esc(text) + '</div>';
  }

  function openPlanItemDetail(item){
    var roomClickable = item.room && FLOORPLAN_ROOM_MAP[item.room];
    var content = document.getElementById('planItemOverlayContent');
    content.innerHTML =
      '<div class="block-time">' + esc(item.time) + (item.room ? ' · <span' + (roomClickable ? ' class="room-link" id="ptDetailRoom"' : '') + '>' + esc(item.room) + '</span>' : '') + '</div>' +
      '<div class="block-title" style="margin-top:4px;">' + esc(item.title) + '</div>' +
      (item.subtitle ? '<div class="block-subtitle">' + (item.authors ? renderAuthorsHtml(item.authors) + esc(item.subtitle.slice(item.authors.length)) : esc(item.subtitle)) + '</div>' : '') +
      abstractHtmlWithKeynote(item.abstract) +
      (item.bio ? '<div class="bio-heading">' + t('aboutSpeaker') + '</div><div class="abstract-box">' + esc(item.bio) + '</div>' : '');
    if(roomClickable){
      document.getElementById('ptDetailRoom').addEventListener('click', function(){
        showFloorplanRoom(item.room);
      });
    }
    content.querySelectorAll('.author-link').forEach(function(el){
      el.addEventListener('click', function(){
        document.getElementById('planItemOverlay').style.display = 'none';
        searchForAuthor(el.getAttribute('data-author'), 'plan');
      });
    });
    document.getElementById('planItemOverlay').style.display = 'flex';
  }
  document.getElementById('planItemOverlayCloseBtn').addEventListener('click', function(){
    document.getElementById('planItemOverlay').style.display = 'none';
  });

  function showToast(msg){
    var el = document.createElement('div');
    el.className = 'toast';
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(function(){ el.remove(); }, 2500);
  }

  document.getElementById('sharePlanBtn').addEventListener('click', function(){
    if(plan.length === 0){ alert(t('exportEmptyAlert')); return; }
    var encoded = encodeURIComponent(btoa(unescape(encodeURIComponent(JSON.stringify(plan)))));
    var shareUrl = location.origin + location.pathname + '#plan=' + encoded;
    var shareTitle = lang === 'en' ? 'My DGL 2026 Plan' : 'Mein DGL-2026-Plan';
    if(navigator.share){
      navigator.share({ title: shareTitle, url: shareUrl }).catch(function(){});
    } else if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(shareUrl).then(function(){
        showToast(t('linkCopied'));
      }).catch(function(){
        prompt(t('copyManually'), shareUrl);
      });
    } else {
      prompt(t('copyManually'), shareUrl);
    }
  });

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

  function safeRun(fn, label){
    try { fn(); } catch(e){ console.error('Render error in ' + label + ':', e); }
  }

  function renderAll(){
    safeRun(renderDayTabs, 'renderDayTabs');
    safeRun(renderCategoryFilter, 'renderCategoryFilter');
    safeRun(renderProgrammList, 'renderProgrammList');
    safeRun(renderTopicJump, 'renderTopicJump');
    safeRun(renderLunchFilters, 'renderLunchFilters');
    safeRun(renderLunchList, 'renderLunchList');
    safeRun(renderExkursionen, 'renderExkursionen');
    safeRun(renderVenue, 'renderVenue');
    safeRun(renderPlan, 'renderPlan');
  }

  function loadFloorplanSVGs(){
    Promise.all([
      fetch('floorplan_de.svg').then(function(r){ return r.text(); }),
      fetch('floorplan_en.svg').then(function(r){ return r.text(); })
    ]).then(function(results){
      document.getElementById('floorplanSlotDe').innerHTML = results[0];
      document.getElementById('floorplanSlotEn').innerHTML = results[1];
      var fpDe = document.getElementById('floorplanSvg');
      var fpEn = document.getElementById('floorplanSvgEn');
      if(fpDe) fpDe.style.display = lang === 'en' ? 'none' : '';
      if(fpEn) fpEn.style.display = lang === 'en' ? '' : 'none';
    }).catch(function(e){
      console.error('Failed to load floor plan:', e);
    });
  }
  loadFloorplanSVGs();

  safeRun(applyStaticI18n, 'applyStaticI18n');
  renderAll();
  setInterval(function(){
    safeRun(renderDayTabs, 'renderDayTabs');
    safeRun(renderProgrammList, 'renderProgrammList');
    safeRun(renderPlan, 'renderPlan');
  }, 60000);

  // ---------- Announcement popup ----------
  var ANNOUNCEMENT_DISMISS_KEY = 'dgl2026_announcement_dismissed_id';
  function loadAnnouncement(){
    fetch('announcement.json', { cache: 'no-store' }).then(function(res){
      if(!res.ok) throw new Error('no announcement file');
      return res.json();
    }).then(function(a){
      if(!a || !a.enabled) return;
      if(a.begins && new Date(a.begins) > new Date()) return;
      if(a.expires && new Date(a.expires) < new Date()) return;
      var dismissedId = null;
      try{ dismissedId = localStorage.getItem(ANNOUNCEMENT_DISMISS_KEY); }catch(e){}
      if(dismissedId === a.id) return;
      var title = lang === 'en' ? (a.title_en || a.title_de) : (a.title_de || a.title_en);
      var message = lang === 'en' ? (a.message_en || a.message_de) : (a.message_de || a.message_en);
      document.getElementById('announcementTitle').textContent = title || '';
      document.getElementById('announcementMessage').textContent = message || '';
      document.getElementById('announcementOverlay').style.display = 'flex';
      document.getElementById('announcementCloseBtn').onclick = function(){
        document.getElementById('announcementOverlay').style.display = 'none';
        try{ localStorage.setItem(ANNOUNCEMENT_DISMISS_KEY, a.id); }catch(e){}
      };
    }).catch(function(){ /* no announcement file or not reachable — silently ignore */ });
  }
  loadAnnouncement();

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
    }
  };

})();
