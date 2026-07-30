(function(){

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
      b.textContent = day.label + ' ' + day.date.split('.')[0] + '.';
      b.addEventListener('click', function(){
        currentDay = day.id;
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
  function planIdForTalk(dayId, block, s, t, idx){
    return 't_' + dayId + '_' + block.time + '_' + s.room + '_' + idx;
  }

  var expandedSessions = {};

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
        card.innerHTML =
          '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px;">' +
            '<div style="flex:1;min-width:0;">' +
              '<div class="block-time">' + esc(block.time) + (day.label + ', ' + day.date ? ' · ' + day.label : '') + '</div>' +
              '<div class="block-title">' + esc(block.title) + '</div>' +
              (block.subtitle ? '<div class="block-subtitle">' + esc(block.subtitle) + '</div>' : '') +
              (block.room ? '<div class="block-room">' + esc(block.room) + '</div>' : '') +
            '</div>' +
            '<button class="add-btn' + (added ? ' added' : '') + '" data-id="' + id + '">' + (added ? '&#10003;' : '+') + '</button>' +
          '</div>';
        card.querySelector('.add-btn').addEventListener('click', function(){
          togglePlan({
            id: id, dayId: day.id, dayLabel: day.label, date: day.date,
            time: block.time, title: block.title, subtitle: block.subtitle || '', room: block.room || ''
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
              (s.mod ? '<div class="session-mod">Mod.: ' + esc(s.mod) + '</div>' : '') +
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
              time: block.time, title: s.code + ' · ' + s.title, subtitle: s.mod ? 'Mod.: ' + s.mod : '', room: s.room
            });
          });

          if(hasTalks){
            header.style.cursor = 'pointer';
            header.addEventListener('click', function(ev){
              if(ev.target.closest('[data-role="session-add"]')) return;
              expandedSessions[expandKey] = !expandedSessions[expandKey];
              renderProgrammList();
            });
          }

          if(hasTalks && isOpen){
            var talkList = document.createElement('div');
            talkList.className = 'talk-list';
            s.talks.forEach(function(t, idx){
              var tid = planIdForTalk(day.id, block, s, t, idx);
              var tadded = isInPlan(tid);
              var trow = document.createElement('div');
              trow.className = 'talk-row';
              trow.innerHTML =
                '<div style="flex:1;min-width:0;">' +
                  '<div class="talk-time">' + esc(t.time) + '</div>' +
                  '<div class="talk-title">' + esc(t.title) + '</div>' +
                  '<div class="talk-authors">' + esc(t.authors) + '</div>' +
                '</div>' +
                '<button class="add-btn small' + (tadded ? ' added' : '') + '" data-id="' + tid + '">' + (tadded ? '&#10003;' : '+') + '</button>';
              trow.querySelector('.add-btn').addEventListener('click', function(){
                togglePlan({
                  id: tid, dayId: day.id, dayLabel: day.label, date: day.date,
                  time: t.time, title: t.title, subtitle: t.authors + ' · ' + s.code + ' (' + s.room + ')', room: s.room
                });
              });
              talkList.appendChild(trow);
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

  function renderLunchFilters(){
    var wrap = document.getElementById('lunchFilters');
    wrap.innerHTML = '';
    lunchTypes.forEach(function(t){
      var chip = document.createElement('div');
      chip.className = 'filter-chip' + (t === currentLunchFilter ? ' active' : '');
      chip.textContent = t;
      chip.addEventListener('click', function(){
        currentLunchFilter = t;
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
      var mapsUrl = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(l.name + ', ' + (l.address||''));
      card.innerHTML =
        '<div class="lunch-card">' +
          '<div style="flex:1;min-width:0;">' +
            '<div class="lunch-name">' + esc(l.name) + '</div>' +
            '<div class="lunch-meta">' + esc(l.typ) + (l.hours ? ' · ' + esc(l.hours) : '') + '</div>' +
            '<div class="lunch-meta">' + esc(l.address || '') + '</div>' +
            (l.note ? '<div class="lunch-note">' + esc(l.note) + '</div>' : '') +
          '</div>' +
          '<div class="lunch-dist">' + l.distMin + ' Min<br>' + l.distM + ' m</div>' +
        '</div>' +
        '<div class="lunch-links">' +
          '<a class="pill-link" href="' + mapsUrl + '" target="_blank" rel="noopener">Route</a>' +
          (l.link ? '<a class="pill-link" href="' + esc(l.link) + '" target="_blank" rel="noopener">Website</a>' : '') +
          (l.phone ? '<a class="pill-link" href="tel:' + esc(l.phone.replace(/\s+/g,'')) + '">' + esc(l.phone) + '</a>' : '') +
        '</div>';
      list.appendChild(card);
    });
  }

  // ---------- Exkursionen ----------
  function renderExkursionen(){
    var list = document.getElementById('exkList');
    list.innerHTML = '';
    DATA.exkursionen.forEach(function(e){
      var card = document.createElement('div');
      card.className = 'card';
      card.innerHTML =
        '<div class="exk-title">' + esc(e.id) + ': ' + esc(e.title) + '</div>' +
        '<div class="exk-meta">' + esc(e.day) + ' · ' + esc(e.time) + '</div>' +
        '<div class="exk-meta">Leitung: ' + esc(e.leader) + '</div>' +
        '<span class="badge-cost">' + esc(e.cost) + '</span>' +
        '<div class="exk-info">' + esc(e.info) + '</div>';
      list.appendChild(card);
    });
  }

  // ---------- Tagungsort ----------
  function renderVenue(){
    var v = DATA.venue;
    var box = document.getElementById('venueBox');
    box.innerHTML =
      '<div class="card">' +
        '<div class="lunch-name">' + esc(v.name) + '</div>' +
        '<div class="lunch-meta" style="margin-top:6px;">' + esc(v.address) + '</div>' +
        '<a class="venue-map-link" href="' + esc(v.maps) + '" target="_blank" rel="noopener">In Google Maps öffnen</a>' +
        '<div class="lunch-meta"><strong style="color:var(--text)">ÖPNV:</strong> ' + esc(v.oepnv) + '</div>' +
      '</div>';
  }

  // ---------- Mein Plan ----------
  function renderPlan(){
    var box = document.getElementById('planList');
    box.innerHTML = '';
    if(plan.length === 0){
      box.innerHTML = '<div class="empty-state">Noch nichts geplant.<br>Tippe im Programm auf das + Symbol, um Sessions hinzuzufügen.</div>';
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
      group.items.sort(function(a,b){ return a.time.localeCompare(b.time); });
      var heading = document.createElement('div');
      heading.className = 'plan-day-heading';
      heading.textContent = group.label + ', ' + group.date;
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
    if(plan.length === 0){ alert('Dein Plan ist noch leer.'); return; }
    var lines = ['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//DGL 2026//Tagungsfuehrer//DE'];
    plan.forEach(function(item){
      var d = dateForDay(item.dayId);
      var t = parseStartTime(item.time);
      lines.push('BEGIN:VEVENT');
      lines.push('DTSTART:' + d + 'T' + t + '00');
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

  renderDayTabs();
  renderProgrammList();
  renderLunchFilters();
  renderLunchList();
  renderExkursionen();
  renderVenue();
  renderPlan();

})();
