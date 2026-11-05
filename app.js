(() => {
  'use strict';

  /* ===== Данные ===== */

  const WORD = 'MYACUVUE';
  const PROMO = 'MYACUVUE';

  // Цвета плиток по позициям в слове: палитра Abiliti, соседние не повторяются
  const TILE = [
    { bg: '#FB5373', ink: '#FFFFFF', band: '#FFE4EA' }, // M
    { bg: '#FFB548', ink: '#3C3871', band: '#FFF0D8' }, // Y
    { bg: '#CBE880', ink: '#3C3871', band: '#EFF8D6' }, // A
    { bg: '#B9DBE5', ink: '#3C3871', band: '#E5F2F6' }, // C
    { bg: '#685BC7', ink: '#FFFFFF', band: '#ECE9FC' }, // U
    { bg: '#FB5373', ink: '#FFFFFF', band: '#FFE4EA' }, // V
    { bg: '#FFB548', ink: '#3C3871', band: '#FFF0D8' }, // U
    { bg: '#CBE880', ink: '#3C3871', band: '#EFF8D6' }  // E
  ];

  // Сноски — дословно из дока агентства «НЭН_карточки для спецпроекта» (согласовано с юристом)
  const NOTES = {
    '*': 'ACUVUE® Абилити однодневный. Рег.уд. № РЗН 2025/24483.',
    '1': 'Острота зрения измерена в единицах LogMAR, где 0,00 LogMAR эквивалентно зрению 20/20. Данные в файлах JJV, 2021 г. Характеристики и утверждения - Мягкие терапевтические линзы ACUVUE® Abiliti (абилити) 1-Day (однодневный) для контроля миопии',
    '2': 'Данные в файлах JJV, 2021. Оптический дизайн мягких контактных линз ACUVUE® Abiliti 1-Day для контроля миопии',
    '3': 'Использование контактных линз меньшего диаметра, разработанных с учетом анатомических особенностей детей (в возрасте от 7 до 12 лет). Данные в файлах JJV, 2021. Дизайн мягких терапевтических контактных линз ACUVUE® Abiliti 1-Day (однодневный) для контроля миопии: влияние на посадку и использование',
    '4': 'Дети в возрасте от 7 до 12 лет сообщили, что мягкие терапевтические контактные линзы ACUVUE Abiliti 1-Day для контроля миопии всегда или обычно были удобны для ношения в &gt;88,1% случаев в течение от 1 до 6 месяцев ношения (n=39-42). Данные в файлах JJV, 2021 г. Характеристики и утверждения - Мягкие терапевтические линзы ACUVUE® Abiliti (абилити) 1-Day (однодневный) для контроля миопии',
    '5': 'УФ-фильтр помогает защитить от вредного воздействия УФ-излучения на роговицу и ткани глаза. ВНИМАНИЕ! Контактные линзы с УФ-фильтром НЕ заменяют солнцезащитные очки, поскольку не полностью закрывают глаз и область вокруг глаза. Используйте солнцезащитные очки в соответствии с указаниями специалиста. ПРИМЕЧАНИЕ. Длительное воздействие УФ-излучения является одним из факторов риска, связанных с катарактой. Воздействие зависит от ряда факторов, таких как условия окружающей среды (высота над уровнем моря, географическое положение, облачный покров) и личные факторы (объем и характер занятий на открытом воздухе). Контактные линзы с защитой от УФ-излучения обеспечивают защиту от вредного УФ-излучения. Однако клинических исследований, подтверждающих, что ношение контактных линз с УФ-фильтром снижает риск развития катаракты или других заболеваний глаз, не проводилось. Проконсультируйтесь со своим офтальмологом для получения дополнительной информации',
    '6': 'Данные в файлах JJV, 2021. Эффективность мягких терапевтических контактных линз ACUVUE® Abiliti (абилити) 1-Day (однодневный) для контроля миопии',
    '7': 'Эффективность мягких терапевтических контактных линз ACUVUE® Abiliti 1-Day (однодневный) для контроля миопии: Сравнительные характеристики монофокальных и двухфокусных контактных линз'
  };

  const WARN = 'Имеются противопоказания. Необходимо проконсультироваться со специалистом.';

  const s = (n) => `<sup>${n}</sup>`;

  // Карточки — дословно из дока агентства. Порядок 1–8 как в доке.
  const CARDS = [
    {
      kicker: 'Что происходит со зрением',
      title: 'Как родителям понять, что у ребенка зрение становится хуже?',
      body: 'Он и правда может прекрасно видеть книгу или телефон. При миопии, которую также называют близорукостью, предметы вдали могут выглядеть размытыми. Но ребенок способен заметить это не сразу: к постепенным изменениям дети довольно быстро привыкают. Поэтому о зрении иногда могут говорить не только жалобы, но и другие детали: ребенок может щуриться, когда смотрит вдаль, подносить телефон близко к глазам или узнавать знакомого, только когда тот подходит поближе.',
      notes: [],
      pack: false
    },
    {
      kicker: 'Что происходит со зрением',
      title: 'Что делать, если зрение продолжает падать?',
      body: `При близорукости глаз становится длиннее, чем нужно для правильной фокусировки. Пока ребенок растет, зрение может продолжать меняться, поэтому родителю важно регулярно проверять его и отслеживать возможные изменения. Если близорукость прогрессирует, в профильной оптике или клинике могут подобрать подходящий способ коррекции и контроля миопии. Например, контактные линзы ACUVUE® Abiliti 1-Day* могут обеспечить четкое зрение${s(1)} и способствовать замедлению прогрессирования близорукости благодаря специальному оптическому дизайну RingBoost®${s(2)}.`,
      notes: ['*', '1', '2'],
      pack: false
    },
    {
      kicker: 'Контактные линзы в активном дне',
      title: 'Не рано ли ребенку носить контактные линзы?',
      body: `Контактные линзы могут быть одним из вариантов коррекции зрения не только для взрослых, но и для детей. Например, ACUVUE® Abiliti 1-Day* разработаны специально для детей, с учетом анатомических особенностей детского глаза${s(3)}. При этом решение о возможности использования контактных линз принимается родителями после осмотра ребенка в профильной оптике или клинике: там проверят зрение, оценят особенности строения глаза ребенка и помогут подобрать подходящий способ коррекции. На приеме также объяснят родителям и ребенку, как правильно пользоваться линзами и на что обращать внимание.`,
      notes: ['*', '3'],
      pack: true
    },
    {
      kicker: 'Контактные линзы в активном дне',
      title: 'Не будут ли контактные линзы мешать ребенку во время активностей?',
      body: `Контактные линзы ACUVUE® Abiliti 1-Day* могут обеспечить комфорт${s(1)} даже во время активных занятий спортом или игр на площадке${s(4)}. В них ребенок может хорошо видеть происходящее вокруг и двигаться без ограничений, не отвлекаясь на коррекцию зрения. Для активностей на улице у них есть дополнительное преимущество — встроенный УФ-фильтр 1 класса, который помогает защищать глаза от ультрафиолетового излучения${s(5)}. А если ребенок занимается плаванием, на время занятий линзы нужно снимать, поскольку контакт с водой может повысить риск инфекции.`,
      notes: ['*', '1', '4', '5'],
      pack: true
    },
    {
      kicker: 'Что тревожит родителей',
      title: 'Безопасно ли ребенку носить контактные линзы?',
      body: `Сегодня есть линзы, которые предназначены специально для детей! Например, ACUVUE® Abiliti 1-Day* разработаны с учетом анатомических особенностей детского глаза${s(3)}. Во время подбора в профильной оптике или клинике ребенку покажут, как правильно надевать и снимать линзы и как ими пользоваться. А распространенного страха, что линза может «потеряться» за глазом, можно не бояться: из-за строения глаза она не может оказаться за глазным яблоком.`,
      notes: ['*', '3'],
      pack: false
    },
    {
      kicker: 'Что тревожит родителей',
      title: 'А если ребенку будет сложно надевать контактные линзы самостоятельно?',
      body: `Родители могут переживать, что ребенку будет сложно пользоваться контактными линзами самостоятельно и каждый раз понадобится их помощь. Но дети могут довольно быстро освоить этот навык: например, 96% детей смогли самостоятельно надевать и снимать ACUVUE® Abiliti 1-Day* после одной обучающей сессии${s(6)}. Во время подбора в оптике или клинике ребенку также покажут, как правильно пользоваться линзами.`,
      notes: ['*', '6'],
      pack: true
    },
    {
      kicker: 'Что тревожит родителей',
      title: 'Сложно ли ухаживать за контактными линзами?',
      body: `Однодневный формат упрощает уход за контактными линзами: утром ребенок надевает новую стерильную пару, а вечером снимает и выбрасывает ее. Раствор и контейнер не нужны. При использовании ACUVUE® Abiliti 1-Day* для контроля миопии важно носить линзы регулярно: не менее восьми часов в день и пяти дней в неделю${s(7)}, если иной режим не рекомендовали во время приема в профильной оптике или клинике.`,
      notes: ['*', '7'],
      pack: true
    },
    {
      kicker: 'Что тревожит родителей',
      title: 'Где проверить зрение и подобрать контактные линзы?',
      body: 'Подбор контактных линз ACUVUE® Abiliti 1-Day* проводится после проверки зрения и консультации профильной в оптике или клинике. Записаться на подбор можно напрямую на сайте оптики или клиники или через приложение MyACUVUE®– там же легко хранить данные о параметрах контактных линз. В приложении родители также могут создать детский профиль, чтобы получить доступ к полезным материалам о здоровье глаз.',
      notes: ['*'],
      pack: true
    }
  ];

  // Буквы на картинках: центр и радиус в пикселях исходника
  const FIELDS = [
    {
      title: 'Спортивная площадка',
      img: 'assets/scene-playground.webp', w: 899, h: 2000,
      alt: 'Спортивная площадка: двое детей играют в баскетбол, папа сидит на скамейке, мальчик забрался на шведскую стенку',
      cards: [0, 1, 2, 3],
      letters: [
        { ch: 'M', slot: 0, x: 813, y: 622, r: 55 },
        { ch: 'A', slot: 2, x: 838, y: 920, r: 70 },
        { ch: 'U', slot: 6, x: 176, y: 1246, r: 58 },
        { ch: 'E', slot: 7, x: 52, y: 913, r: 50 }
      ]
    },
    {
      title: 'Детская комната',
      img: 'assets/scene-room.webp', w: 902, h: 2000,
      alt: 'Детская комната: мама и двое детей рисуют за круглым столом, вокруг игрушки, кошки и книги',
      cards: [4, 5, 6, 7],
      letters: [
        { ch: 'Y', slot: 1, x: 97, y: 922, r: 80 },
        { ch: 'U', slot: 4, x: 808, y: 633, r: 52 },
        { ch: 'C', slot: 3, x: 97, y: 1358, r: 62 },
        { ch: 'V', slot: 5, x: 790, y: 1322, r: 54 }
      ]
    }
  ];

  const COVER = { img: 'assets/cover.webp', alt: 'Родители и двое детей на площадке рассматривают божью коровку через лупу' };
  const FINAL = { img: 'assets/final.webp', alt: 'Пустая площадка в парке: плед для пикника, воздушные шары, горка' };

  /* ===== Элементы ===== */

  const $ = (id) => document.getElementById(id);
  const app = $('app');
  const stage = $('stage');
  const scene = $('scene');
  const sceneImg = $('sceneImg');
  const marks = $('marks');
  const word = $('word');
  const card = $('card');
  const backdrop = $('sheetBackdrop');
  const hintBtn = $('hintBtn');
  const toastEl = $('toast');
  const brand = $('brand');
  const gameFoot = $('gameFoot');

  const deskMQ = window.matchMedia('(min-width: 960px) and (min-height: 600px)');
  const reduceMQ = window.matchMedia('(prefers-reduced-motion: reduce)');
  const isDesk = () => deskMQ.matches;

  /* ===== Состояние ===== */

  const state = {
    view: 'start',
    field: 0,
    found: new Set(),       // занятые позиции в слове
    letterCard: new Map(),  // буква → индекс карточки
    openCard: null,
    hintTimer: null,
    idleTimer: null
  };

  const fieldFoundCount = (f) => FIELDS[f].letters.filter((l) => state.found.has(l.slot)).length;
  const fieldDone = (f) => fieldFoundCount(f) === FIELDS[f].letters.length;

  /* ===== Слово-промокод ===== */

  const slots = [...WORD].map((ch, i) => {
    const el = document.createElement('span');
    el.className = 'slot';
    el.textContent = ch;
    el.style.setProperty('--bg-tile', TILE[i].bg);
    el.style.setProperty('--ink-tile', TILE[i].ink);
    word.appendChild(el);
    return el;
  });

  // «Вы нашли 1 букву / 2 буквы / 5 букв из 8»
  function foundText(n) {
    const w = n === 1 ? 'букву' : (n >= 2 && n <= 4) ? 'буквы' : 'букв';
    return `Вы нашли ${n} ${w} из ${WORD.length}`;
  }

  function renderWord() {
    slots.forEach((el, i) => el.classList.toggle('is-on', state.found.has(i)));
    const n = state.found.size;
    $('counter').textContent = n === 0 ? 'Найдите 8 букв' : foundText(n);
  }

  /* ===== Картинка ===== */

  function setScene(src, alt) {
    if (sceneImg.getAttribute('src') === src) { sceneImg.alt = alt; return Promise.resolve(); }
    return new Promise((resolve) => {
      const swap = () => {
        sceneImg.onload = () => { scene.classList.remove('is-switching'); resolve(); };
        sceneImg.onerror = () => { scene.classList.remove('is-switching'); resolve(); };
        sceneImg.alt = alt;
        sceneImg.src = src;
      };
      if (reduceMQ.matches) { swap(); return; }
      scene.classList.add('is-switching');
      setTimeout(swap, 260);
    });
  }

  function pct(v, total) { return (v / total * 100) + '%'; }

  function renderMarks() {
    marks.innerHTML = '';
    if (state.view !== 'game') return;
    const f = FIELDS[state.field];
    f.letters.forEach((l) => { if (state.found.has(l.slot)) addMark(l, f, false); });
  }

  function addMark(l, f, animate = true) {
    const m = document.createElement('div');
    m.className = 'mark';
    const d = l.r * 2.15;
    m.style.left = pct(l.x, f.w);
    m.style.top = pct(l.y, f.h);
    m.style.width = pct(d, f.w);
    m.style.aspectRatio = '1';
    if (!animate) m.style.animation = 'none';
    m.innerHTML = '<i><svg><use href="#i-check"/></svg></i>';
    marks.appendChild(m);
  }

  /* ===== Раскладка на телефоне ===== */

  function measure() {
    if (isDesk()) return;
    app.style.setProperty('--bot-h', (gameFoot.offsetHeight + 20) + 'px');
  }

  // Ставим картинку так, чтобы полоса с буквами оказалась между плашками
  function centerLetters() {
    if (isDesk() || state.view !== 'game') return;
    const f = FIELDS[state.field];
    const imgH = scene.offsetHeight;
    const ys = f.letters.map((l) => l.y / f.h * imgH);
    const mid = (Math.min(...ys) + Math.max(...ys)) / 2;
    const top = brand.getBoundingClientRect().bottom;
    const bottom = stage.clientHeight - gameFoot.offsetHeight - 10;
    const target = mid - (top + bottom) / 2;
    stage.scrollTop = Math.max(0, Math.min(target, stage.scrollHeight - stage.clientHeight));
  }

  // Первый экран на телефоне: поднимаем картинку, чтобы лица семьи не уходили под карточку
  function coverShift() {
    if (isDesk() || state.view !== 'start') { app.style.removeProperty('--cover-shift'); return; }
    const cardTop = $('viewStart').getBoundingClientRect().top;
    const headBottom = brand.getBoundingClientRect().bottom;
    const imgH = scene.offsetWidth * 2000 / 899;
    const chin = imgH * 0.475;            // подбородки детей на обложке
    const hair = imgH * 0.225;            // макушка папы
    const want = (cardTop - 14) - chin;   // отрицательное — поднять
    const limit = Math.max(-imgH * 0.16, (headBottom + 6) - hair);
    const shift = Math.max(Math.min(0, want), Math.min(0, limit));
    app.style.setProperty('--cover-shift', shift + 'px');
  }

  /* ===== Тост ===== */

  let toastT;
  function toast(text, ms = 2600) {
    toastEl.textContent = text;
    toastEl.classList.add('is-on');
    clearTimeout(toastT);
    toastT = setTimeout(() => toastEl.classList.remove('is-on'), ms);
  }

  /* ===== Экраны ===== */

  function setView(v) {
    state.view = v;
    app.dataset.view = v;
    closeCard(true);
    clearHint();
    if (v === 'start') {
      marks.innerHTML = '';
      setScene(COVER.img, COVER.alt);
      requestAnimationFrame(coverShift);
    }
    if (v === 'final') {
      marks.innerHTML = '';
      buildFinal();
      setScene(FINAL.img, FINAL.alt);
      stage.scrollTop = 0;
      burst();
    }
  }

  function startGame() {
    state.found.clear();
    state.letterCard.clear();
    state.field = 0;
    renderWord();
    setView('game');
    setField(0, true);
  }

  function setField(i, first = false) {
    state.field = i;
    app.dataset.field = String(i);
    const f = FIELDS[i];
    marks.innerHTML = '';
    setScene(f.img, f.alt).then(() => {
      renderMarks();
      requestAnimationFrame(() => { measure(); centerLetters(); });
    });
    if (!first) toast('Еще 4 буквы спрятались в детской');
    resetIdle();
  }

  /* ===== Клик по картинке ===== */

  function onSceneClick(e) {
    if (state.view !== 'game') return;
    if (!isDesk() && state.openCard !== null) return;
    const f = FIELDS[state.field];
    const rect = sceneImg.getBoundingClientRect();
    const k = rect.width / f.w;
    const x = (e.clientX - rect.left) / k;
    const y = (e.clientY - rect.top) / k;
    const minR = 24 / k; // палец: не меньше 24 px экрана

    let best = null;
    let bestD = Infinity;
    f.letters.forEach((l) => {
      const d = Math.hypot(l.x - x, l.y - y) / Math.max(l.r, minR);
      if (d < bestD) { bestD = d; best = l; }
    });

    if (best && bestD <= 1) {
      if (state.found.has(best.slot)) {
        openCard(state.letterCard.get(best.slot), best);
      } else {
        found(best, e.clientX, e.clientY);
      }
      return;
    }
    if (best && bestD <= 2.3 && !state.found.has(best.slot)) {
      floatNear(x, y, f);
    } else {
      ripple(x, y, f);
    }
  }

  function ripple(x, y, f) {
    const r = document.createElement('div');
    r.className = 'ripple';
    r.style.left = pct(x, f.w);
    r.style.top = pct(y, f.h);
    marks.appendChild(r);
    setTimeout(() => r.remove(), 550);
  }

  function floatNear(x, y, f) {
    const n = document.createElement('div');
    n.className = 'near';
    n.textContent = 'Совсем рядом';
    n.style.left = pct(x, f.w);
    n.style.top = pct(y - 30, f.h);
    marks.appendChild(n);
    setTimeout(() => n.remove(), 1150);
  }

  function found(l, cx, cy) {
    const f = FIELDS[state.field];
    const cardIdx = f.cards[fieldFoundCount(state.field)];
    state.found.add(l.slot);
    state.letterCard.set(l.slot, cardIdx);
    clearHint();
    addMark(l, f);
    hintBtn.classList.remove('nudge');
    resetIdle();

    fly(l.ch, l.slot, cx, cy, () => {
      renderWord();
      openCard(cardIdx, l);
    });
  }

  function fly(ch, slotIdx, fromX, fromY, done) {
    const target = slots[slotIdx];
    const tr = target.getBoundingClientRect();
    if (reduceMQ.matches || !tr.width) { done(); return; }
    const el = document.createElement('div');
    el.className = 'fly';
    el.textContent = ch;
    el.style.background = TILE[slotIdx].bg;
    el.style.color = TILE[slotIdx].ink;
    document.body.appendChild(el);
    const W = 52;
    const sx = fromX - W / 2, sy = fromY - W / 2;
    const ex = tr.left + tr.width / 2 - W / 2, ey = tr.top + tr.height / 2 - W / 2;
    const mx = (sx + ex) / 2, my = Math.min(sy, ey) - 70;
    const endScale = tr.height / W;
    target.classList.add('is-target');
    const anim = el.animate([
      { transform: `translate(${sx}px, ${sy}px) scale(.4) rotate(-20deg)`, opacity: 0 },
      { transform: `translate(${sx}px, ${sy - 24}px) scale(1.35) rotate(-6deg)`, opacity: 1, offset: .22 },
      { transform: `translate(${mx}px, ${my}px) scale(1.15) rotate(8deg)`, offset: .6 },
      { transform: `translate(${ex}px, ${ey}px) scale(${endScale}) rotate(0deg)` }
    ], { duration: 820, easing: 'cubic-bezier(.45, 0, .3, 1)', fill: 'forwards' });
    anim.onfinish = () => { el.remove(); target.classList.remove('is-target'); done(); };
  }

  /* ===== Карточка ===== */

  function openCard(idx, letter) {
    const c = CARDS[idx];
    state.openCard = idx;

    $('cardFound').innerHTML = `Вы нашли букву <b>${letter.ch}</b>`;
    $('cardCount').textContent = foundText(state.found.size);
    $('cardTitle').textContent = c.title;
    $('cardBody').innerHTML = `<p>${c.body}</p>`;
    // Дисклеймеры бренда в каждой карточке: рег. удостоверение, сноски карточки, противопоказания.
    // В карточке 1 нет звездочки в тексте, поэтому рег. удостоверение — без нее (подпись к упаковке).
    const notes = c.notes.includes('*') ? c.notes : ['reg', ...c.notes];
    $('cardNotes').innerHTML = notes.map((n) => {
      if (n === 'reg') return `<p>${NOTES['*']}</p>`;
      return `<p><b>${n === '*' ? '*' : n + '.'}</b> ${NOTES[n]}</p>`;
    }).join('') + `<p class="warn">${WARN}</p>`;

    const done = fieldDone(state.field);
    $('cardBtnText').textContent = !done ? 'Искать дальше'
      : state.field === 0 ? 'В детскую комнату' : 'Забрать промокод';

    const wasOpen = !card.hidden;
    card.hidden = false;
    $('cardScroll').scrollTop = 0;
    app.classList.add('card-open');
    if (isDesk()) {
      card.classList.remove('is-open');
      void card.offsetWidth;
      card.classList.add('is-open');
    } else {
      backdrop.classList.add('is-on');
      if (!wasOpen) requestAnimationFrame(() => requestAnimationFrame(() => card.classList.add('is-open')));
      else card.classList.add('is-open');
      setTimeout(() => $('cardBtn').focus({ preventScroll: true }), 450);
    }
  }

  let closeT;
  function closeCard(instant = false) {
    state.openCard = null;
    app.classList.remove('card-open');
    backdrop.classList.remove('is-on');
    card.classList.remove('is-open');
    clearTimeout(closeT);
    if (instant || isDesk()) { card.hidden = true; return; }
    closeT = setTimeout(() => { if (state.openCard === null) card.hidden = true; }, 460);
  }

  function onCardBtn() {
    if (!fieldDone(state.field)) { closeCard(); resetIdle(); return; }
    if (state.field === 0) {
      closeCard();
      setField(1);
    } else {
      setView('final');
    }
  }

  /* ===== Подсказка ===== */

  function clearHint() {
    clearTimeout(state.hintTimer);
    marks.querySelectorAll('.hint-ring').forEach((h) => h.remove());
    hintBtn.disabled = false;
  }

  function showHint() {
    if (state.view !== 'game') return;
    const f = FIELDS[state.field];
    const left = f.letters.filter((l) => !state.found.has(l.slot));
    if (!left.length) return;
    clearHint();
    hintBtn.classList.remove('nudge');
    hintBtn.disabled = true;

    const l = left[Math.floor(Math.random() * left.length)];
    const R = Math.max(l.r * 2.6, 150);
    const ang = Math.random() * Math.PI * 2;
    const off = R * 0.35;
    const cx = Math.min(Math.max(l.x + Math.cos(ang) * off, R * .55), f.w - R * .55);
    const cy = l.y + Math.sin(ang) * off;

    const h = document.createElement('div');
    h.className = 'hint-ring';
    h.style.left = pct(cx, f.w);
    h.style.top = pct(cy, f.h);
    h.style.width = pct(R * 2, f.w);
    h.style.aspectRatio = '1';
    marks.appendChild(h);

    if (!isDesk()) {
      const imgH = scene.offsetHeight;
      const y = cy / f.h * imgH;
      const top = brand.getBoundingClientRect().bottom;
      const bottom = stage.clientHeight - gameFoot.offsetHeight - 10;
      stage.scrollTo({ top: y - (top + bottom) / 2, behavior: reduceMQ.matches ? 'auto' : 'smooth' });
    }

    state.hintTimer = setTimeout(() => {
      h.classList.add('is-out');
      setTimeout(() => { h.remove(); hintBtn.disabled = false; }, 380);
    }, 2600);
    resetIdle();
  }

  function resetIdle() {
    clearTimeout(state.idleTimer);
    state.idleTimer = setTimeout(() => {
      if (state.view === 'game' && state.openCard === null) hintBtn.classList.add('nudge');
    }, 30000);
  }

  /* ===== Финал ===== */

  function tileHTML(ch, i) {
    return `<span class="promo__tile" style="--i:${i};--bg-tile:${TILE[i].bg};--ink-tile:${TILE[i].ink}">${ch}</span>`;
  }

  function buildFinal() {
    $('promoTiles').innerHTML = [...WORD].map(tileHTML).join('');
    const fw = $('finalWord');
    fw.innerHTML = [...WORD].map((ch, i) =>
      `<span style="--i:${i};--bg-tile:${TILE[i].bg};--ink-tile:${TILE[i].ink}">${ch}</span>`).join('');
    const cb = $('copyBtn');
    cb.classList.remove('is-done');
    $('copyText').textContent = 'Скопировать промокод';
  }

  function burst() {
    if (reduceMQ.matches) return;
    const box = $('confetti');
    box.innerHTML = '';
    const colors = ['#FB5373', '#FFB548', '#CBE880', '#B9DBE5', '#685BC7', '#FFADBF'];
    const deskLeft = isDesk() ? box.clientWidth * 0.3 : 0;
    for (let i = 0; i < 70; i++) {
      const sp = document.createElement('span');
      const bar = Math.random() < 0.45;
      const size = 8 + Math.random() * 8;
      sp.style.left = (deskLeft + Math.random() * (box.clientWidth - deskLeft)) + 'px';
      sp.style.setProperty('--s', (bar ? size * 0.7 : size) + 'px');
      sp.style.setProperty('--h', (bar ? size * 2.4 : size) + 'px');
      sp.style.setProperty('--c', colors[i % colors.length]);
      sp.style.setProperty('--x', (Math.random() * 160 - 80) + 'px');
      sp.style.setProperty('--r', (Math.random() * 720 - 360) + 'deg');
      sp.style.setProperty('--d', (1.8 + Math.random() * 1.6) + 's');
      sp.style.setProperty('--delay', (Math.random() * 0.5) + 's');
      box.appendChild(sp);
    }
    setTimeout(() => { box.innerHTML = ''; }, 4200);
  }

  function copyPromo() {
    const ok = () => {
      $('copyBtn').classList.add('is-done');
      $('copyText').textContent = 'Скопировано';
    };
    const fallback = () => {
      const ta = document.createElement('textarea');
      ta.value = PROMO;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); ok(); } catch (err) { /* тихо */ }
      ta.remove();
    };
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(PROMO).then(ok, fallback);
    } else {
      fallback();
    }
  }

  /* ===== События ===== */

  $('startBtn').addEventListener('click', startGame);
  $('replayBtn').addEventListener('click', startGame);
  $('cardBtn').addEventListener('click', onCardBtn);
  $('copyBtn').addEventListener('click', copyPromo);
  hintBtn.addEventListener('click', showHint);
  scene.addEventListener('click', onSceneClick);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && state.openCard !== null && !fieldDone(state.field)) closeCard();
  });

  const onResize = () => { measure(); coverShift(); };
  window.addEventListener('resize', onResize);
  if (window.ResizeObserver) new ResizeObserver(onResize).observe(gameFoot);
  deskMQ.addEventListener?.('change', () => {
    if (state.openCard !== null) {
      const slot = [...state.letterCard.entries()].find(([, c]) => c === state.openCard)?.[0];
      const letter = FIELDS.flatMap((f) => f.letters).find((l) => l.slot === slot);
      if (letter) openCard(state.openCard, letter);
    }
    measure();
  });

  // Прогреваем картинки
  [FIELDS[0].img, FIELDS[1].img, FINAL.img, 'assets/packshot.webp'].forEach((src) => { const i = new Image(); i.src = src; });

  renderWord();
  coverShift();
  setTimeout(coverShift, 700); // после анимации карточки и загрузки шрифта
  document.fonts?.ready.then(coverShift);
})();
