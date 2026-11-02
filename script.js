/* =====================================================================
   МАНАЙ УРГИЙН МОД — script.js
   Хэсгүүд:  1) Хүмүүсийн мэдээлэл   2) Аавын ах дүү   3) Ургийн мод
             4) Гишүүдийн карт         5) Дэлгэрэнгүй цонх 6) Он цаг
             7) Түүх, статистик        8) Товчнууд
   Мэдээллээ өөрчлөхдөө зөвхөн 1, 2-р хэсгийг засна.
   ===================================================================== */

/* ---------- 1. ХҮМҮҮСИЙН МЭДЭЭЛЭЛ ----------
   Хүн бүр: 'id': { n: нэр, rel: хэн болох, b: төрсөн он, d: нас барсан он,
                    g: 'm' эрэгтэй | 'f' эмэгтэй, sp: хань-ийн id,
                    place: нутаг, job: ажил, bio: намтар }
   d (нас барсан он) байхгүй бол амьд гэж үзнэ. */
var people = {
  surenkhuu: { n:'Сүрэнхүү', rel:'Өвөөгийн аав', b:1910, d:1978, g:'m', sp:'sosorbaram', place:'Хөвсгөл', job:'Малчин',
    bio:'Угсааны эх. Бичиг үсгийн багш, багийн дарга, сүү тосны каводын эрхлэгч, бригадын аж ахуйн зэрэг ажлыг хашаж байгаад тэтгэвэрт гарж, дөрвөн хүүхэд өсгөсөн.' },
  sosorbaram: { n:'Сосорбарам', rel:'Өвөөгийн ээж', b:1912, d:1980, g:'f', sp:'surenkhuu', place:'Хөвсгөл', job:'Гэрийн эзэгтэй',
    bio:'Олон хүүхдээ хатуу ч хайртай өсгөсөн, нутагтаа хүндлэгдсэн ээж.' },
  tsendee: { n:'Цэнд-Аюуш', rel:'Өвөөгийн эгч', b:1932, d:2018, g:'f', place:'Хөвсгөл', job:'Малчин, саальчин',
    bio:'Тухайн үеийн Бүрэн сумын Туяа бригадад малчин, саальчин, Үржил селекцийн станцад үйлчлэгч хийж байгаад тэтгэвэрт гарсан.' },
  chadraa: { n:'Чадраабал', rel:'Өвөөгийн ах', b:1933, d:2003, g:'m', sp:'dolgor', place:'Улаанбаатар', job:'Жолооч' },
  dolgor: { n:'Долгор', rel:'Өвөөгийн ахын эхнэр', b:1938, d:2023, g:'f', sp:'chadraa' },
  sereenee: { n:'Сэрээнэнпдорж', rel:'Өвөө', b:1943, d:2021, g:'m', sp:'oyuka', place:'Хөвсгөл', job:'Цэргийн дарга',
    bio:'1963 онд цэргийн албанд татагдаж 026-р ангид бага дарга нарыг бэлтгэх сургуульд ороод, мөн оны 8-р сард ЗХУ-ын Уссурийск хотын авто техникийн сургуульд сурч 1966 онд авто механик мэргэжилтэй төгссөн. 1966 оны 7-р сараас АА-ийн 107-р ангид салаан захирагч, ротын захирагчаар ажиллаж байгаад 1972-1976 онд ЗХУ-ын Москва хотын Фрунзийн нэрэмжит академид орж суралцан ерөнхий цэргийн команд штабын оператив тактикийн мэргэжлээр төгсөж, Дорноговь аймгийн Зүүнбаян хотод 169, 200-р ангийн захирагч, 1985 оноос 256-р ангид тагнуулын даргаар /Төв аймаг, Өвөрхангай аймгийн Их-Уул гарнизонд/ ажиллаж байгаад 1989 онд тэтгэвэрт гарсан. Дараа нь Хөвсгөл аймгийн захиргаанд харуулаар 2 жил ажиллаад хөдөө мал маллах болсон байна. Армид нийт 26 жил алба хаажээ. Энэ хугацаандаа улс армид нэр төртэй, сайн ажиллаж Монголын ардын армийн 50, 60 жилийн ой, Халхын голын 30, 40 жил, милитарист Японыг ялсны 30 жилийн ой, Ардын хувьсгалын 70, 80 жилийн ойн медаллууд, Алтан гадас одон, Монгол Улсын Засгийн газрын хүндэт жуух бичиг, БХЯ-ны жуух бичиг, хүндэт тэмдэгээр тус тус шагнуулж байлаа. Есөн хүүхэд өсгөж, хөдөлмөрийг сургасан.' },
  oyuka: { n:'Оюунцэцэг', rel:'Эмээ', b:1947, g:'f', sp:'sereenee', place:'Хөвсгөл', job:'Эмч',
    bio:'Тогоруутан овогтой Г.Оюунцэцэг 1947 онд төрсөн. Бүрэнтогтох суманд сургууль төгсөөд А.У.Ду.С-г 1966 онд рентген техник лаборант мэргэжлээр төгссөн. У.Б хотын 3-р эмнэлэгт, А.А-н 107-р ангид нам эвлэлийн ажилтан, 1972 оноос Мөрөн нэгдсэн эмнэлэгт рентген техникч, 1976 оноос Дорноговь Зүүнбаянд А.А-н 149, 204-р ангид нам, эвлэлийн ажилтан, тооцооны нягтлан, 1985 оноос А.А-н 272-ангид рентген техникч бага эмч, Ү.Хорооны дарга, 1989 оноос Мөрөнд хүүхдийн 1-р яслид бага эмч, сувилагчаар, Нэгдсэн эмнэлэгт бага эмчээр ажиллаж байгаад 1992 онд тэтгэвэрт гарсан. Алдарт эхийн 1, 2-р одонтой, Ардын хувьсгалын 60, 70, 80 жилийн ойн медаль, 5 жилийн гавшгайч тэмдэгтэй.' },
  baaska: { n:'Баасанжав', rel:'Өвөөгийн дүү', b:1944, d:2001, g:'m', sp:'solongo', place:'Улаанбаатар', job:'Инженер' },
  solongo: { n:'Солонго', rel:'Өвөөгийн дүүгийн эхнэр', b:1948, d:2020, g:'f', sp:'baaska' },
  burnee: { n:'Бүрэнтогтох', rel:'Аав', b:1977, g:'m', sp:'daashka', place:'Улаанбаатар', job:'IT',
    bio:'Есөн ах дүүгийн тав дахь нь. Бага насаа эцэг эхийнхээ асрамжинд өнгөрүүлсэн бөгөөд Зүүнбаян, Төв аймаг, Өвөрхангайн цэргийн ангиудад ерөнхий боловсролын сургуульд суралцаж 1995 онд Хөвсгөл аймгийн Мөрөн сумын Байгалийн ухааны гүнзийрүүлсэн сургалттай 10 жилийн сургууль төгссөн. 1995-1998 онд ШУТИС-ийн харьяа КТМС-ийг программ хангамжийн инженер мэргэжлээр, 1998-2000 онд мөн сургуулийн мэдээллийн технологийн менежмент мэргэжлээр бакалавр зэрэгтэй төгссөн. 1998-2000 онд G&M компани компьютерийн инженер, 2000-2002 онд Монголын Худалдаа Аж Үйлдвэрийн Танхимд мэргэжилтэн, 2002-2005 онд Солонгос улсад МХАҮТ-ын төлөөлөгчөөр, 2005-2007 онд БНХАУ дахь Монгол Улсын элчин сайдын яамны Худалдаа эдийн засгийн зөвлөхийн туслах, 2007-2012 онд БНСУ-ийн LG корпорацийн Монгол дахь төлөөлөгчийн газарт төслийн менежер, 2012 оны 10 сараас БНСУ-ийн Монгол дахь элчин сайдын яаманд эрчим хүч, уул уурхайн зөвлөхөөр ажиллаж байна. 2004 онд А.Дашдуламтай гэр бүл болсон. 3 хүүхэдтэй ам бүл 5-уулаа амьдарч байна.' },
  daashka: { n:'Дашдулам', rel:'Ээж', b:1977, g:'f', sp:'burnee', place:'Улаанбаатар', job:'Инженер',
    bio:'Өвөрхангай аймгийн Арвайхээр суманд айлын том охин болон төрсөн. 1985-1995 онд Арвайхээрийн 3-р 10 жилийн сургуулийг төгссөн. 1995-2000 онд ШУТИС-ийн Үйлдвэрлэл Технологи Дизайны Сургуулийг ээрмэлийн үйлдвэрийн технологич мэргэжлээр бакалавр, 2001 онд магистр зэрэгтэй төгссөн. 2000-2001 онд Нэхмэлийн хүрээлэнд лаборант, 2001-2002 онд Монголын Бизнес Хөгжлийн Агентлагт туслах, 2002-2005 онд Улаанбаатар хивс компанид, 2009 оноос хойш Говь ХХК-нд ажиллаж байна.' },
  me: { n:'Тэмүүлэл', rel:'Би', b:2005, g:'m', place:'Улаанбаатар', job:'Оюутан',
    bio:'Айлын том хүү болж Бүрэнтогтохын гэр бүлд мэндэлсэн, өдгөө Монгол Улсын Их Сургууль, Мэдээлэл Технологи Электроникийн Сургуулийн Мэдээллийн технологи мэргэжлээр суралцаж байгаа.' },
  soko: { n:'Солонго', rel:'Миний дүү', b:2007, g:'f', place:'Улаанбаатар', job:'Инженерийн оюутан' },
  khulan: { n:'Хулан', rel:'Миний дүү', b:2012, g:'f', place:'Улаанбаатар', job:'Сурагч' }
};

/* Өвөөгийн аав, ээж, өвөөгийн ах дүү — ургийн модны дээд хэсэг */
var treeTop = { id:'surenkhuu', kids:[
  { id:'tsendee' },
  { id:'chadraa' },
  { id:'sereenee', kids:[] },   // өвөөгийн хүүхдүүд (аавын ах дүү) доор автоматаар орно
  { id:'baaska' }
]};

/* ---------- 2. АВЫН 9 АХ ДҮҮ, ТЭДНИЙ ГЭР БҮЛ ----------
   Мөр бүр: [нэр, хүйс, төрсөн он, хань, [хүүхдүүд]]
   Хүүхэд:  'Нэр:хүйс:төрсөн он'   жишээ нь 'Тэмүүлэн:m:1990'
            Он бичихгүй бол ('Тэмүүлэн:m') эцгийн оноос +24 жилээр тооцно.
   Хань:    'Нэр:төрсөн он'        жишээ нь 'Болд:1968'
            Он бичихгүй бол ах дүүгийн оноос +2 жилээр тооцно.
   Аав (Бүрэнтогтох) 5-р мөрөнд байна, түүний хүүхдүүд дээрх people-д байгаа. */
var siblings = [
  ['Эрдэнэчимэг','f',1967,'Бат-Эрдэнэ',['Өлзийхутаг:m:1996','Өлзиймөнх:m:1998']],
  ['Хүрэлчулуун','m',1969,'Мягмарсүрэн',['Жавхлантөгөлдөр:m:2000','Хувьтөгөлдөр:m:2004']],
  ['Хүрэлбаатар','m',1971,'Оролмаа',['Алтайнямбуу:f:1999','Бадмаанямбуу:f:2001','Бадамгарав:m:2009']],
  ['Хүрэл-Эрдэнэ','m',1973,'Алтангэрэл',['Баярсайхан:m:2000','Дэлгэрмөрөн:m:2006']],
  ['Бүрэнтогтох','m',1977,'Дашдулам',['me','soko','khulan']],
  ['Хүрэлтогтох','m',1979,'Алтантуяа',['Итгэлт:f:2012','Саран:f:2015','Одгэв:f:2018']],
  ['Шинэтогтох','m',1981,'Цэгмэд',['Цэрэндагва:m:2005','Цэрэнбат:m:2008','Сувд:f:2010','Пүрэвдорж:m:2013','Түвшинжаргал:f:2016']],
  ['Отгончимэг','f',1983,'Дашдэмбэрэл',['Бат-Эрдэнэ:m:2007','Марал-Эрдэнэ:f:2009','Болор-Эрдэнэ:f:2012']],
  ['Отгонбаяр','m',1984,'Дөлгөөн',['Дөлбаяр:m:2006','Батбаяр:m:2012','Ангараг:m:2015','Эмүжин:f:2018','Энх-Үжин:f:2022','Мөнх-Үжин:f:2022']]
];
var jobList = ['Багш','Жолооч','Эмч','Инженер','Нягтлан','Бизнесмен','Хуульч','Малчин','Программист'];
/* Нутаг: ах дүү бүрийнх (эхний нь 1-р мөр). Бодит нутгаар нь солино. */
var placeList = ['Улаанбаатар','Улаанбаатар','Хөвсгөл','Улаанбаатар','Улаанбаатар','Улаанбаатар','Хөвсгөл','Улаанбаатар','Улаанбаатар'];
var genitive = { 'Аавын ах':'Аавын ахын', 'Аавын эгч':'Аавын эгчийн', 'Аавын дүү':'Аавын дүүгийн' };

var groups = [];       // "Гишүүд" хэсгийн бүлгүүд
var marriages = [];    // он цагийн хэлхээсийн гэр бүл болсон үйл явдлууд

/* Ах дүү бүрээр давтаж, хүн болон модны салааг үүсгэнэ */
for (var i = 0; i < siblings.length; i++) {
  var row = siblings[i];
  var name = row[0], gender = row[1], born = row[2], kidList = row[4];
  var spouseParts = row[3].split(':');                 // 'Нэр' эсвэл 'Нэр:төрсөн он'
  var spouseName = spouseParts[0];
  var spouseBorn = spouseParts[1] ? Number(spouseParts[1]) : born + 2;

  var isDad = (name === 'Бүрэнтогтох');
  var id = isDad ? 'burnee' : 'u' + i;
  var spouseId = isDad ? 'daashka' : id + 's';
  var kidIds = [];

  // хүүхдүүд
  for (var j = 0; j < kidList.length; j++) {
    if (isDad) { kidIds.push(kidList[j]); continue; }   // аавын хүүхдүүд дээр бичигдсэн
    var parts = kidList[j].split(':');
    var kidId = 'c' + i + '_' + j;
    var kidBorn = parts[2] ? Number(parts[2]) : Math.min(born + 24 + j * 3, 2015);   // он бичсэн бол түүнийг авна
    var kidRel = 'Үеэл дүү';
    if (kidBorn < 2005) { kidRel = (parts[1] === 'm') ? 'Үеэл ах' : 'Үеэл эгч'; }
    people[kidId] = { n: parts[0], rel: kidRel, b: kidBorn, g: parts[1], place: placeList[i],
                      job: kidBorn < 2000 ? jobList[(i + j) % 9] : 'Сурагч' };
    kidIds.push(kidId);
  }

  // ах дүү өөрөө ба ханийнх
  var node = { id: id, kids: [] };
  for (var k = 0; k < kidIds.length; k++) { node.kids.push({ id: kidIds[k] }); }
  treeTop.kids[2].kids.push(node);

  if (!isDad) {
    var rel = 'Аавын дүү';
    if (born < 1977) { rel = (gender === 'm') ? 'Аавын ах' : 'Аавын эгч'; }
    people[id] = { n: name, rel: rel, b: born, g: gender, sp: spouseId, place: placeList[i], job: jobList[i] };
    people[spouseId] = { n: spouseName, rel: genitive[rel] + (gender === 'm' ? ' эхнэр' : ' нөхөр'),
                         b: spouseBorn, g: (gender === 'm' ? 'f' : 'm'), sp: id, place: placeList[i] };
    groups.push({ title: rel + ' ' + name, text: spouseName + ' (хань), ' + kidIds.length + ' хүүхэдтэй',
                  ids: [id, spouseId].concat(kidIds), tab: 'fam' });
  }
  marriages.push({ y: people[kidIds[0]].b - 1, t: name + ', ' + spouseName + ' хоёр гэр бүл болсон', k: 'wed', ids: [id] });
}

/* "Гишүүд" хэсгийн бүлгүүдийн дараалал */
groups = [
  { title:'Өвөөгийн аав, ээж', text:'Угсааны эх сурвалж', ids:['surenkhuu','sosorbaram'], tab:'g0' },
  { title:'Өвөө, эмээ ба өвөөгийн ах дүү', text:'Сүрэнхүү, Сосорбарам нарын 4 хүүхэд (өвөөгийн хамт)',
    ids:['tsendee','chadraa','dolgor','sereenee','oyuka','baaska','solongo'], tab:'g1' },
  { title:'Аав, ээж', text:'Миний эцэг эх', ids:['burnee','daashka'], tab:'g2' }
].concat(groups).concat([
  { title:'Би ба дүү нар', text:'Аав, ээжийн 3 хүүхэд', ids:['me','soko','khulan'], tab:'g3' }
]);

var tabs = [['all','Бүгд'],['g0','Өвөөгийн аав ээж'],['g1','Өвөөгийн үе'],['g2','Аав, ээж'],['fam','Аавын ах дүүс'],['g3','Миний үе']];

/* ---------- Туслах функцууд ---------- */
function byId(x) { return document.getElementById(x); }
function yearsText(p) { return p.b ? p.b + ' – ' + (p.d || 'одоо') : ''; }
function ageOf(p) { return p.b ? (p.d || new Date().getFullYear()) - p.b : null; }
function avatar(p, extra) {
  return '<span class="av ' + (p.g === 'f' ? 'f' : '') + ' ' + (extra || '') + '">' + p.n.charAt(0) + '</span>';
}
var allIds = Object.keys(people);

/* ---------- 3. УРГИЙН МОД ---------- */
function nodeButton(id) {
  var p = people[id];
  return '<button class="node ' + (id === 'me' ? 'me' : '') + '" data-id="' + id + '">' + avatar(p) +
         '<span><strong>' + p.n + '</strong><small>' + p.rel + '</small></span></button>';
}
function treeHtml(node) {
  var p = people[node.id];
  var couple = '<div class="couple">' + nodeButton(node.id);
  if (p.sp) { couple += '<span class="heart">♥</span>' + nodeButton(p.sp); }
  couple += '</div>';
  var html = '<li>' + couple;
  if (node.kids && node.kids.length > 0) {
    html += '<ul>';
    for (var i = 0; i < node.kids.length; i++) { html += treeHtml(node.kids[i]); }
    html += '</ul>';
  }
  return html + '</li>';
}
byId('treeRoot').innerHTML = '<ul>' + treeHtml(treeTop) + '</ul>';

/* Нүүр хуудасны тоонууд */
var aliveCount = 0, firstYear = 3000;
for (var a = 0; a < allIds.length; a++) {
  if (!people[allIds[a]].d) { aliveCount++; }
  if (people[allIds[a]].b < firstYear) { firstYear = people[allIds[a]].b; }
}
var statList = [[allIds.length,'гишүүн'],[4,'үе'],[aliveCount,'амьд'],[firstYear,'он — эхлэл']];
var statHtml = '';
for (var s = 0; s < statList.length; s++) {
  statHtml += '<div><b>' + statList[s][0] + '</b><span>' + statList[s][1] + '</span></div>';
}
byId('stats').innerHTML = statHtml;

/* ---------- 4. ГИШҮҮДИЙН КАРТ (таб, хайлт) ---------- */
var currentTab = 'all';

function showCards() {
  var query = byId('q').value.trim().toLowerCase();
  var html = '';
  for (var g = 0; g < groups.length; g++) {
    var grp = groups[g];
    if (currentTab !== 'all' && grp.tab !== currentTab) { continue; }
    var cards = '';
    for (var i = 0; i < grp.ids.length; i++) {
      var p = people[grp.ids[i]];
      if (!p) { continue; }                                   // id буруу бол алгасна
      if ((p.n + ' ' + p.rel).toLowerCase().indexOf(query) === -1) { continue; }
      cards += '<button class="card" data-id="' + grp.ids[i] + '">' + avatar(p) + '<div><h4>' + p.n + '</h4>' +
               '<div class="rel">' + p.rel + '</div><div class="meta">' + yearsText(p) + (p.place ? ' · ' + p.place : '') + '</div>' +
               (p.sp ? '<div class="sp">♥ ' + people[p.sp].n + '</div>' : '') + '</div></button>';
    }
    if (cards !== '') {
      html += '<div class="group"><h3>' + grp.title + '</h3><p>' + grp.text + '</p><div class="grid">' + cards + '</div></div>';
    }
  }
  byId('groups').innerHTML = html;
  byId('empty').hidden = (html !== '');
}

function showTabs() {
  var html = '';
  for (var i = 0; i < tabs.length; i++) {
    html += '<button data-k="' + tabs[i][0] + '" aria-pressed="' + (tabs[i][0] === currentTab) + '">' + tabs[i][1] + '</button>';
  }
  byId('tabs').innerHTML = html;
}
byId('tabs').onclick = function (e) {
  var b = e.target.closest('button');
  if (!b) { return; }
  currentTab = b.dataset.k;
  showTabs();
  showCards();
};
byId('q').oninput = function () {
  currentTab = 'all';
  showTabs();
  showCards();
  if (byId('q').value) { byId('people').scrollIntoView(); }
};
showTabs();
showCards();

/* ---------- 5. ДЭЛГЭРЭНГҮЙ ЦОНХ ---------- */
// модноос id-ийн хүүхдүүдийг хайх
function findKids(node, id) {
  var children = node.kids || [];            // хүүхэдгүй хүнд kids байхгүй байж болно
  if (node.id === id) {
    var list = [];
    for (var i = 0; i < children.length; i++) { list.push(children[i].id); }
    return list;
  }
  for (var j = 0; j < children.length; j++) {
    var found = findKids(children[j], id);
    if (found) { return found; }
  }
  return null;
}
function infoRow(label, value) { return value ? '<dt>' + label + '</dt><dd>' + value + '</dd>' : ''; }

function openPerson(id) {
  var p = people[id];
  if (!p) { return; }
  var spouse = p.sp ? people[p.sp] : null;
  var kids = findKids(treeTop, id) || [];
  var age = ageOf(p);
  var html = '<div class="m-head">' + avatar(p, 'big') + '<div><h3>' + p.n + '</h3><div class="meta">' + p.rel + '</div></div></div>';
  if (p.bio) { html += '<p>' + p.bio + '</p>'; }
  html += '<dl>' + infoRow('Он', yearsText(p)) +
          infoRow('Нас', age === null ? '' : (p.d ? age + ' нас хүртлээ' : age + ' настай')) +
          infoRow('Нутаг', p.place) + infoRow('Ажил', p.job) +
          infoRow('Хань', spouse ? spouse.n + ' (' + spouse.rel + ')' : '') + '</dl>';
  if (kids.length > 0) {
    html += '<b>Үр хүүхэд</b><div class="chips">';
    for (var i = 0; i < kids.length; i++) { html += '<button data-id="' + kids[i] + '">' + people[kids[i]].n + '</button>'; }
    html += '</div>';
  }
  if (spouse) { html += '<div class="chips"><button data-id="' + p.sp + '">♥ ' + spouse.n + '</button></div>'; }
  byId('modalBody').innerHTML = html;
  if (!byId('modal').open) { byId('modal').showModal(); }
}
// data-id бүхий аль ч товч дээр дарахад тухайн хүнийг нээнэ
document.addEventListener('click', function (e) {
  var b = e.target.closest('[data-id]');
  if (b) { openPerson(b.dataset.id); }
  if (e.target === byId('modal')) { byId('modal').close(); }
});
byId('close').onclick = function () { byId('modal').close(); };

/* ---------- 6. ОН ЦАГИЙН ХЭЛХЭЭС ----------
   Өөрийн үйл явдлаа энд нэм: y: он, t: гарчиг, k: 'wed' | 'event', ids: [холбогдох хүн] */
var events = [
  { y:1930, t:'Сүрэнхүү, Сосорбарам хоёр гэр бүл болсон', k:'wed', ids:['surenkhuu'] },
  { y:1963, t:'Сэрээнэнпдорж цэргийн албанд татагдсан', k:'event', ids:['sereenee'] },
  { y:1972, t:'Өвөө Москвагийн Фрунзийн академид суралцаж эхэлсэн', k:'event', ids:['sereenee'] },
  { y:1989, t:'Өвөө 26 жилийн цэргийн албаа дүүргэж тэтгэвэрт гарсан', k:'event', ids:['sereenee'] },
  { y:1995, t:'Бүрэнтогтох Мөрөнгийн 10 жилийн сургууль төгссөн', k:'event', ids:['burnee'] }
];
events = events.concat(marriages);
for (var e1 = 0; e1 < allIds.length; e1++) {      // төрсөн, нас барсныг автоматаар нэмнэ
  var pp = people[allIds[e1]];
  if (pp.b) { events.push({ y: pp.b, t: pp.n + ' мэндэлсэн', s: pp.rel, k: 'birth', ids: [allIds[e1]] }); }
  if (pp.d) { events.push({ y: pp.d, t: pp.n + ' бурхан болсон', s: pp.rel, k: 'death', ids: [allIds[e1]] }); }
}
events.sort(function (x, y) { return x.y - y.y; });

var filters = [['all','Бүгд'],['birth','Төрсөн'],['wed','Гэр бүл'],['event','Үйл явдал'],['death','Дурсамж']];
var currentFilter = 'all';
function showTimeline() {
  var f = '', t = '';
  for (var i = 0; i < filters.length; i++) {
    f += '<button data-f="' + filters[i][0] + '" aria-pressed="' + (filters[i][0] === currentFilter) + '">' + filters[i][1] + '</button>';
  }
  for (var j = 0; j < events.length; j++) {
    var ev = events[j];
    if (currentFilter !== 'all' && ev.k !== currentFilter) { continue; }
    t += '<li class="' + ev.k + '"><div class="y">' + ev.y + '</div><button class="e" ' +
         (ev.ids[0] ? 'data-id="' + ev.ids[0] + '"' : '') + '>' + ev.t + (ev.s ? '<small>' + ev.s + '</small>' : '') + '</button></li>';
  }
  byId('tlf').innerHTML = f;
  byId('tl').innerHTML = t;
}
byId('tlf').onclick = function (e) {
  var b = e.target.closest('[data-f]');
  if (b) { currentFilter = b.dataset.f; showTimeline(); }
};
showTimeline();

/* ---------- 7. ТҮҮХ БА СТАТИСТИК ---------- */
var stories = [
  { t:'Хөвсгөлийн угсаа', x:'Угсаа маань Хөвсгөл нутгаас эхтэй. Өвөөгийн аав, ээж бичиг үсэг, мал аж ахуйгаар нутагтаа хүндлэгдэж дөрвөн хүүхдээ өсгөсөн.', q:'«Нутаг уснаа хайртай хүн угсаагаа мартдаггүй.»' },
  { t:'Цэргийн алба, хөдөлмөр', x:'Өвөө 26 жил армид нэр төртэй алба хааж, хүндэт одон, медалиар шагнагдсан. Эмээ Алдарт эхийн одонтой.', q:'«Хөдөлмөр бол хүний гоёл.»' },
  { t:'Мэдлэг, сургууль', x:'Аав, ээж хоёр ШУТИС-д суралцаж, мэдээллийн технологи, үйлдвэрлэлийн салбарт ажилласан. Мэдлэг эрдэм дараагийн үед үргэлжилж байна.', q:'«Эрдэм бол хэзээ ч дуусдаггүй баялаг.»' }
];
var storyHtml = '';
for (var st = 0; st < stories.length; st++) {
  storyHtml += '<article class="story"><h3>' + stories[st].t + '</h3><p>' + stories[st].x + '</p><blockquote>' + stories[st].q + '</blockquote></article>';
}
byId('st').innerHTML = storyHtml;

// Объектод тоолж, "нэр + тоо"-ны мөр болгох
function barsHtml(counts, colorClass) {
  var keys = Object.keys(counts), max = 0, html = '';
  for (var i = 0; i < keys.length; i++) { if (counts[keys[i]] > max) { max = counts[keys[i]]; } }
  keys.sort(function (a, b) { return counts[b] - counts[a]; });
  for (var j = 0; j < keys.length; j++) {
    html += '<div class="bar"><span>' + keys[j] + '</span><i class="' + (colorClass || '') + '" style="--w:' +
            (counts[keys[j]] / max * 100) + '%"></i><b>' + counts[keys[j]] + '</b></div>';
  }
  return html;
}
function generationOf(p) {
  if (p.b < 1925) { return 'Өвөөгийн аав ээж'; }
  if (p.b < 1952) { return 'Өвөөгийн үе'; }
  if (p.b < 1990) { return 'Аавын үе'; }
  return 'Миний үе';
}
var byGen = {}, byPlace = {}, byGender = {}, jobs = {};
var deadSum = 0, deadCount = 0, couples = 0, oldest = null, youngest = null;
for (var n = 0; n < allIds.length; n++) {
  var q = people[allIds[n]];
  var gname = generationOf(q);
  byGen[gname] = (byGen[gname] || 0) + 1;
  if (q.place) { byPlace[q.place] = (byPlace[q.place] || 0) + 1; }
  var sex = (q.g === 'm') ? 'Эрэгтэй' : 'Эмэгтэй';
  byGender[sex] = (byGender[sex] || 0) + 1;
  if (q.job) { jobs[q.job] = 1; }
  if (q.sp) { couples++; }
  if (q.d) { deadSum += q.d - q.b; deadCount++; }
  else {
    if (oldest === null || q.b < oldest.b) { oldest = q; }
    if (youngest === null || q.b > youngest.b) { youngest = q; }
  }
}
byId('panels').innerHTML =
  '<div class="panel"><h3>Үеээр</h3>' + barsHtml(byGen, 'g') + '</div>' +
  '<div class="panel"><h3>Нутаг, хотоор</h3>' + barsHtml(byPlace) + '</div>' +
  '<div class="panel"><h3>Хүйсээр</h3>' + barsHtml(byGender) + '</div>' +
  '<div class="panel"><h3>Онцлох үзүүлэлт</h3>' +
  '<div class="kv"><span>Дундаж наслалт</span><b>' + (deadCount ? Math.round(deadSum / deadCount) : '—') + ' нас</b></div>' +
  '<div class="kv"><span>Хамгийн ахмад (амьд)</span><b>' + oldest.n + ', ' + ageOf(oldest) + '</b></div>' +
  '<div class="kv"><span>Хамгийн бага</span><b>' + youngest.n + ', ' + ageOf(youngest) + '</b></div>' +
  '<div class="kv"><span>Гэр бүлийн тоо</span><b>' + (couples / 2) + '</b></div>' +
  '<div class="kv"><span>Мэргэжлийн төрөл</span><b>' + Object.keys(jobs).length + '</b></div></div>';

/* ---------- 8. ТОВЧНУУД ---------- */
// Харанхуй горим (сонголтыг browser санана)
try { var saved = localStorage.getItem('theme'); if (saved) { document.documentElement.dataset.theme = saved; } } catch (err) {}
byId('theme').onclick = function () {
  var next = (document.documentElement.dataset.theme === 'dark') ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch (err) {}
};
byId('print').onclick = function () { window.print(); };

// Модыг "Би"-гийн байрлал руу хөндлөн гүйлгэнэ
var scroller = document.querySelector('.tree-scroll'), meNode = document.querySelector('.node.me');
if (scroller && meNode) {
  var r1 = meNode.getBoundingClientRect(), r2 = scroller.getBoundingClientRect();
  scroller.scrollLeft += r1.left - r2.left - r2.width / 2 + r1.width / 2;
}