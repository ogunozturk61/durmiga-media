// Lantern Caravan — SADE prototip motoru (tarayıcı + node ortak)
const COLORS = { R: { ad: 'Rüzgâr' }, A: { ad: 'Ateş' }, C: { ad: 'Çelik' } };
const LV = [1, 1.6, 2.5]; // Bronz, Gümüş, Altın
const LVAD = ['Bronz', 'Gümüş', 'Altın'];
const ADJ = 0.3; // aynı renk komşu başına +%30

// t: tip. cd: saniye. sayılar Bronz değer.
const CARDS = [
  { id: 'pasli', ad: 'Paslı Kılıç', renk: 'C', img: 'c01', cd: 2, dmg: 6 },
  { id: 'hancer', ad: 'İkiz Hançer', renk: 'C', img: 'c02', cd: 1, dmg: 3 },
  { id: 'pala', ad: 'Ağır Pala', renk: 'C', img: 'c03', cd: 4, dmg: 16 },
  { id: 'ejder', ad: 'Ejder Kılıcı', renk: 'C', img: 'c22', cd: 3, dmg: 8, grow: 3 },
  { id: 'kalkan', ad: 'Bambu Kalkan', renk: 'C', img: 'c12', cd: 3, shield: 10 },
  { id: 'bileği', ad: 'Bileği Taşı', renk: 'C', img: 'c21', pas: 'bile', val: 3 },
  { id: 'yay', ad: 'Bambu Yay', renk: 'R', img: 'c06', cd: 1.5, dmg: 4 },
  { id: 'seken', ad: 'Seken Ok', renk: 'R', img: 'c10', cd: 2, dmg: 3, hits: 2 },
  { id: 'buz', ad: 'Buz Oku', renk: 'R', img: 'c25', cd: 3, dmg: 6, slow: 1.5 },
  { id: 'kartal', ad: 'Kartal', renk: 'R', img: 'c09', pas: 'hiz', val: 0.25 },
  { id: 'yelpaze', ad: 'Rüzgâr Yelpazesi', renk: 'R', img: 'c23', cd: 4, trig: 1 },
  { id: 'sadak', ad: 'Sadak', renk: 'R', img: 'c24', pas: 'sadak', val: 2 },
  { id: 'tilsim', ad: 'Ateş Tılsımı', renk: 'A', img: 'c16', cd: 2, burn: 2 },
  { id: 'fener', ad: 'Kâğıt Fener', renk: 'A', img: 'c28', cd: 3, burn: 4 },
  { id: 'anka', ad: 'Anka Tüyü', renk: 'A', img: 'c29', cd: 4, heal: 8, burn: 2 },
  { id: 'yildirim', ad: 'Yıldırım', renk: 'A', img: 'c18', cd: 5, dmg: 22 },
  { id: 'yesim', ad: 'Yeşim Kolye', renk: 'A', img: 'c26', cd: 3, heal: 7 },
  { id: 'can', ad: 'Tapınak Çanı', renk: 'A', img: 'c27', pas: 'can', val: 0.5 },
];
const CARD = Object.fromEntries(CARDS.map(c => [c.id, c]));

// KOMBO: iki kart YAN YANA durunca
const COMBOS = [
  { a: 'yay', b: 'sadak', ad: 'Ok Yağmuru', txt: 'Bambu Yay iki ok atar.' },
  { a: 'fener', b: 'tilsim', ad: 'Fener Alayı', txt: 'İkisinin yanması iki katı.' },
  { a: 'pasli', b: 'bileği', ad: 'Keskin Ağız', txt: 'Paslı Kılıç iki kat hasar.' },
  { a: 'buz', b: 'kartal', ad: 'Kartal Gözü', txt: 'Buz Oku iki kat hasar, iki kat yavaşlatır.' },
  { a: 'ejder', b: 'yildirim', ad: 'Gök Ejderi', txt: 'Ejder Kılıcı iki kat hızlı güçlenir.' },
  { a: 'anka', b: 'yesim', ad: 'Yeniden Doğuş', txt: 'İkisinin can yenilemesi iki katı.' },
  { a: 'pala', b: 'can', ad: 'Çan Vuruşu', txt: 'Ağır Pala %60 daha hızlı.' },
  { a: 'hancer', b: 'seken', ad: 'Bin Bıçak', txt: 'İkiz Hançer iki kez vurur.' },
  { a: 'kalkan', b: 'yelpaze', ad: 'Rüzgâr Duvarı', txt: 'Bambu Kalkan iki kat kalkan.' },
];
// SET: tahtada aynı renkten 3 kart (yer fark etmez)
const SETS = {
  R: { ad: 'Rüzgâr Seti', txt: 'Tüm kartlar %20 daha hızlı.' },
  A: { ad: 'Ateş Seti', txt: 'Düşmanın yanması %50 daha çok yakar.' },
  C: { ad: 'Çelik Seti', txt: 'Her savaşa 30 kalkanla başla.' },
};
const partnerOf = id => { for (const c of COMBOS) { if (c.a === id) return [c.b, c]; if (c.b === id) return [c.a, c]; } return null; };

const POWERS = [
  { id: 'ates', ad: 'Ateş Ustası', txt: 'Tüm Ateş kartları %50 daha güçlü.' },
  { id: 'celik', ad: 'Çelik Ustası', txt: 'Tüm Çelik kartları %50 daha güçlü.' },
  { id: 'ruzgar', ad: 'Rüzgâr Ustası', txt: 'Tüm Rüzgâr kartları %50 daha güçlü.' },
  { id: 'bag', ad: 'Sıkı Bağ', txt: 'Yan yana aynı renk bonusu %30 yerine %60.' },
  { id: 'hiz', ad: 'Hafif Adım', txt: 'Tüm kartlar %20 daha hızlı.' },
  { id: 'kalkan', ad: 'Demir Deri', txt: 'Her savaşa 30 kalkanla başla.' },
  { id: 'can', ad: 'Güçlü Yürek', txt: 'Maksimum can +50.' },
  { id: 'ilk', ad: 'Hızlı Başlangıç', txt: 'Savaş başında tüm kartlar bir kez hemen çalışır.' },
];
const POWER = Object.fromEntries(POWERS.map(p => [p.id, p]));

// boss: true -> sonra güç seçimi
const FIGHTS = [
  { ad: 'Dağ Haydudu', img: 'm_haydut', hp: 60, atk: 5, cd: 2 },
  { ad: 'Kurt Sürüsü', img: 'm_kurt', hp: 95, atk: 3, cd: 1 },
  { ad: 'Taş Golem', img: 'm_golem', hp: 170, atk: 11, cd: 3, boss: 1, shieldEvery: 5, shieldAmt: 20 },
  { ad: 'Zehirli Kurbağa', img: 'm_kurbaga', hp: 190, atk: 5, cd: 1.5, burnHit: 1 },
  { ad: 'Ateş Keşişi', img: 'm_kesis', hp: 250, atk: 10, cd: 2 },
  { ad: 'Hayalet Gelin', img: 'm_gelin', hp: 360, atk: 14, cd: 2.5, boss: 1, healEvery: 5, healAmt: 25 },
  { ad: 'Kurt Sürüsü (Kızgın)', img: 'm_kurt', hp: 420, atk: 7, cd: 0.9 },
  { ad: 'Haydut Reisi', img: 'm_haydut', hp: 470, atk: 17, cd: 2 },
  { ad: 'Kara Lotus', img: 'm_lotus', hp: 620, atk: 14, cd: 1.6, boss: 1, burnHit: 2 },
  { ad: 'Kızıl Ejder', img: 'm_ejder', hp: 900, atk: 26, cd: 2.2, boss: 1, burnHit: 3, shieldEvery: 6, shieldAmt: 40 },
];

function cardText(c, lv = 0) {
  const m = LV[lv];
  const r = x => Math.round(x * m);
  if (c.pas === 'bile') return `Yanındaki kartlar vuruş başına +${r(c.val)} hasar.`;
  if (c.pas === 'hiz') return `Yanındaki kartlar %${Math.round(c.val * 100 * (1 + (m - 1) * 0.5))} daha hızlı.`;
  if (c.pas === 'sadak') return `Yanındaki Rüzgâr kartları vuruş başına +${r(c.val)} hasar.`;
  if (c.pas === 'can') return `Her 3 sn: tüm kartlar ${(c.val * m).toFixed(1).replace('.', ',')} sn ileri sarar.`;
  const p = [];
  if (c.dmg) p.push(`${r(c.dmg)} hasar${c.hits ? ' ×' + c.hits : ''}`);
  if (c.burn) p.push(`${r(c.burn)} yanma`);
  if (c.shield) p.push(`${r(c.shield)} kalkan`);
  if (c.heal) p.push(`${r(c.heal)} can`);
  if (c.trig) p.push('yanındaki kartları hemen çalıştırır');
  let s = `Her ${String(c.cd).replace('.', ',')} sn: ${p.join(' + ')}`;
  if (c.slow) s += `, düşmanı ${String(c.slow).replace('.', ',')} sn yavaşlatır`;
  if (c.grow) s += `. Her vuruşta +${r(c.grow)} güçlenir`;
  return s + '.';
}

// tahta: [{id, lv} | null] x5 ; powers: [id]
function computeBoard(board, powers) {
  const bagMul = powers.includes('bag') ? 0.6 : ADJ;
  const out = board.map((s, i) => {
    if (!s) return null;
    const c = CARD[s.id];
    let mul = LV[s.lv];
    let links = 0;
    for (const j of [i - 1, i + 1]) if (board[j] && CARD[board[j].id].renk === c.renk) links++;
    mul *= 1 + links * bagMul;
    if ((c.renk === 'A' && powers.includes('ates')) || (c.renk === 'C' && powers.includes('celik')) || (c.renk === 'R' && powers.includes('ruzgar'))) mul *= 1.5;
    let cd = c.cd || 0;
    if (powers.includes('hiz') && cd) cd *= 0.8;
    return { i, c, lv: s.lv, links, mul, cd, dmgAdd: 0 };
  });
  // pasifler
  out.forEach((o, i) => {
    if (!o || !o.c.pas) return;
    for (const j of [i - 1, i + 1]) {
      const n = out[j]; if (!n || !n.cd) continue;
      if (o.c.pas === 'bile' && n.c.dmg) n.dmgAdd += Math.round(o.c.val * o.mul);
      if (o.c.pas === 'sadak' && n.c.dmg && n.c.renk === 'R') n.dmgAdd += Math.round(o.c.val * o.mul);
      if (o.c.pas === 'hiz') n.cd *= 1 / (1 + o.c.val * (1 + (LV[o.lv] - 1) * 0.5) * (o.links ? 1 + o.links * bagMul : 1));
    }
  });
  // setler
  const cnt = { R: 0, A: 0, C: 0 }; board.forEach(x => x && cnt[CARD[x.id].renk]++);
  const sets = Object.keys(cnt).filter(k => cnt[k] >= 3);
  if (sets.includes('R')) out.forEach(o => { if (o && o.cd) o.cd *= 0.8; });
  // kombolar (komşu)
  const combos = [];
  out.forEach((o, i) => { if (!o) return; const n = out[i + 1]; if (!n) return;
    const cb = COMBOS.find(c => (c.a === o.c.id && c.b === n.c.id) || (c.b === o.c.id && c.a === n.c.id));
    if (cb) { combos.push({ ...cb, i }); o.combo = cb; n.combo = cb; } });
  out.forEach(o => {
    if (!o) return;
    const c = o.c, m = o.mul;
    o.dmg = c.dmg ? Math.round(c.dmg * m) + o.dmgAdd : 0;
    o.burn = c.burn ? Math.round(c.burn * m) : 0;
    o.shield = c.shield ? Math.round(c.shield * m) : 0;
    o.heal = c.heal ? Math.round(c.heal * m) : 0;
    o.grow = c.grow ? Math.round(c.grow * LV[o.lv]) : 0;
    o.hits = c.hits || 1;
    const cb = o.combo && o.combo.ad;
    if (cb === 'Ok Yağmuru' && c.id === 'yay') o.hits = 2;
    if (cb === 'Fener Alayı') o.burn *= 2;
    if (cb === 'Keskin Ağız' && c.id === 'pasli') o.dmg *= 2;
    if (cb === 'Kartal Gözü' && c.id === 'buz') { o.dmg *= 2; o.slowT = c.slow * 2; }
    if (cb === 'Gök Ejderi' && c.id === 'ejder') o.grow *= 2;
    if (cb === 'Yeniden Doğuş') o.heal *= 2;
    if (cb === 'Çan Vuruşu' && c.id === 'pala') o.cd /= 1.6;
    if (cb === 'Bin Bıçak' && c.id === 'hancer') o.hits = 2;
    if (cb === 'Rüzgâr Duvarı' && c.id === 'kalkan') o.shield *= 2;
    if (!o.slowT) o.slowT = c.slow || 0;
  });
  out.sets = sets; out.combos = combos;
  return out;
}

// saniye başı kaba güç (UI'de gösterilen "Güç")
function powerScore(board, powers) {
  const b = computeBoard(board, powers);
  let s = 0;
  for (const o of b) {
    if (!o || !o.cd) continue;
    s += (o.dmg * o.hits + o.burn * 2.5 + o.shield * 0.6 + o.heal * 0.6 + o.grow * 1.5 + (o.c.trig ? 6 : 0)) / o.cd;
  }
  if (b.some(o => o && o.c.pas === 'can')) s *= 1.12;
  if (b.sets.includes('A')) s *= 1.08;
  if (b.sets.includes('C')) s += 4;
  return Math.round(s);
}

function newFight(run) {
  const f = FIGHTS[run.fight];
  const maxHp = run.maxHp;
  const comp = computeBoard(run.board, run.powers);
  const cards = comp.map(o => o && Object.assign({}, o, { t: run.powers.includes('ilk') && o.cd ? o.cd - 0.01 : 0, fired: 0, total: 0 }));
  return {
    t: 0, f, cards,
    p: { hp: maxHp, max: maxHp, shield: (run.powers.includes('kalkan') ? 30 : 0) + (comp.sets.includes('C') ? 30 : 0), burn: 0 }, burnMul: comp.sets.includes('A') ? 1.5 : 1,
    e: { hp: f.hp, max: f.hp, shield: 0, burn: 0, t: 0, slow: 0, st: 0, ht: 0 },
    burnTick: 0, events: [], over: 0, dealt: 0,
  };
}

function hit(target, amt) {
  const a = Math.min(target.shield, amt); target.shield -= a; target.hp -= amt - a;
}

function fire(st, o, ev) {
  const e = st.e, p = st.p;
  if (o.dmg) {
    const n = o.hits || 1;
    for (let k = 0; k < n; k++) { hit(e, o.dmg); st.dealt += o.dmg; o.total += o.dmg; ev.push({ k: 'dmg', i: o.i, v: o.dmg }); }
    if (o.grow) o.dmg += o.grow;
  }
  if (o.burn) { e.burn += o.burn; o.total += o.burn; ev.push({ k: 'burn', i: o.i, v: o.burn }); }
  if (o.shield) { p.shield += o.shield; o.total += o.shield; ev.push({ k: 'shield', i: o.i, v: o.shield }); }
  if (o.heal) { const h = Math.min(o.heal, p.max - p.hp); p.hp += h; o.total += o.heal; ev.push({ k: 'heal', i: o.i, v: o.heal }); }
  if (o.slowT) { e.slow = Math.max(e.slow, o.slowT); ev.push({ k: 'slow', i: o.i }); }
  o.fired++;
}

const DT = 0.05;
function step(st) {
  if (st.over) return [];
  const ev = [];
  st.t += DT;
  const e = st.e, p = st.p, f = st.f;
  const canCard = st.cards.find(o => o && o.c.pas === 'can');
  for (const o of st.cards) {
    if (!o || !o.cd) continue;
    o.t += DT;
    if (o.t >= o.cd) {
      o.t -= o.cd; fire(st, o, ev);
      if (o.c.trig) for (const j of [o.i - 1, o.i + 1]) { const n = st.cards[j]; if (n && n.cd) { fire(st, n, ev); ev.push({ k: 'trig', i: j }); } }
    }
  }
  if (canCard) {
    canCard.ct = (canCard.ct || 0) + DT;
    if (canCard.ct >= 3) { canCard.ct -= 3; const adv = canCard.c.val * canCard.mul; for (const o of st.cards) if (o && o.cd) o.t = Math.min(o.cd - 0.001, o.t + adv); canCard.fired++; ev.push({ k: 'bell', i: canCard.i }); }
  }
  // yanma: her saniye yığın kadar hasar (kalkanı deler)
  st.burnTick += DT;
  if (st.burnTick >= 1) {
    st.burnTick -= 1;
    if (e.burn) { const bd = Math.round(e.burn * st.burnMul); e.hp -= bd; st.dealt += bd; ev.push({ k: 'eburn', v: bd }); }
    if (p.burn) { p.hp -= p.burn; ev.push({ k: 'pburn', v: p.burn }); }
  }
  // düşman
  const sp = e.slow > 0 ? 0.5 : 1; e.slow = Math.max(0, e.slow - DT);
  e.t += DT * sp;
  if (e.t >= f.cd) { e.t -= f.cd; hit(p, f.atk); if (f.burnHit) p.burn += f.burnHit; ev.push({ k: 'eatk', v: f.atk }); }
  if (f.shieldEvery) { e.st += DT; if (e.st >= f.shieldEvery) { e.st -= f.shieldEvery; e.shield += f.shieldAmt; ev.push({ k: 'eshield', v: f.shieldAmt }); } }
  if (f.healEvery) { e.ht += DT; if (e.ht >= f.healEvery) { e.ht -= f.healEvery; e.hp = Math.min(e.max, e.hp + f.healAmt); ev.push({ k: 'eheal', v: f.healAmt }); } }
  if (e.hp <= 0) st.over = 1; else if (p.hp <= 0) st.over = -1; else if (st.t > 60) st.over = e.hp / e.max < p.hp / p.max ? 1 : -1;
  return ev;
}

function newRun() {
  return { fight: 0, lives: 3, maxHp: 100, board: [{ id: 'pasli', lv: 0 }, { id: 'hancer', lv: 0 }, null, null, null], powers: [], history: [] };
}

function offers(run, rnd = Math.random) {
  const owned = run.board.filter(Boolean).filter(s => s.lv < 2).map(s => s.id);
  const pool = CARDS.map(c => c.id);
  const res = [];
  while (res.length < 3) {
    const partners = run.board.filter(Boolean).map(x => partnerOf(x.id)).filter(Boolean).map(p => p[0]).filter(id => !run.board.some(x => x && x.id === id));
    const r0 = rnd();
    let id = owned.length && r0 < 0.25 ? owned[Math.floor(rnd() * owned.length)] : partners.length && r0 < 0.45 ? partners[Math.floor(rnd() * partners.length)] : pool[Math.floor(rnd() * pool.length)];
    const s = run.board.find(x => x && x.id === id);
    if (s && s.lv >= 2) continue;
    if (!res.includes(id)) res.push(id);
  }
  return res;
}

function powerOffers(run, rnd = Math.random) {
  const pool = POWERS.map(p => p.id).filter(id => !run.powers.includes(id));
  const r = [];
  while (r.length < 3 && pool.length) r.push(pool.splice(Math.floor(rnd() * pool.length), 1)[0]);
  return r;
}

if (typeof module !== 'undefined') module.exports = { COMBOS, SETS, partnerOf, CARDS, CARD, POWERS, POWER, FIGHTS, LV, LVAD, COLORS, cardText, computeBoard, powerScore, newFight, step, newRun, offers, powerOffers };
