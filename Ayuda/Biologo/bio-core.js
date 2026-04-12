const cooldowns = [
[1320,1188,1069.2,962.28,866.05,779.45,701.51,631.36,568.22,511.4,460.26,414.23,372.81,335.53,301.98,271.78,244.6,220.14,198.13,178.32,160.49,144.44,129.99,116.99,105.29,94.76,85.28,76.75,69.08,62.17,55.95,50.36,45.32,40.79,36.71,33.04,29.74,26.76,24.08,21.68,19.51,17.56,15.8,14.22,12.8,11.52,10.37,9.33,8.4,7.56,6.8,6.12,5.51,4.96,4.46,4.01,3.61,3.25,2.92,2.63,2.37,2.13,1.92,1.73,1.55,1.4,1.26,1.13,1.02,0.92],
[1320,1056,844.8,675.84,540.67,432.54,346.03,276.82,221.46,177.17,141.73,113.39,90.71,72.57,58.05,46.44,37.15,29.72,23.78,19.02,15.22,12.17,9.74,7.79,6.23,4.99,3.99,3.19,2.55,2.04,1.63,1.31,1.05,0.84],
[1320,924,646.8,452.76,317.93,222.55,155.78,109.05,76.33,53.43,37.4,26.18,18.33,12.83,8.98,6.29,4.4,3.08,2.16,1.51,1.06,0.74]
];
const cooldowns90 = [
[720,648,583.2,524.88,472.39,425.15,382.63,344.37,309.93,278.94,251.05,225.94,203.35,183.01,164.71,148.24,133.42,120.08,108.07,97.26,87.53,78.78,70.9,63.81,57.43,51.69,46.52,41.87,37.68,33.91,30.52,27.47,24.72,22.25,20.02,18.02,16.22,14.6,13.14,11.83,10.65,9.59,8.63,7.77,6.99,6.29,5.66,5.09,4.58],
[720,576,460.8,368.64,294.91,235.93,188.74,150.99,120.79,96.63,77.3,61.84,49.47,39.58,31.66,25.33,20.26,16.21,12.97,10.38,8.3,6.64,5.31,4.25],
[720,504,352.8,246.96,172.87,121.01,84.71,59.3,41.51,29.06,20.34,14.24,9.97,6.98,4.89]
];
const bio = {
Orkzahn:10,
Fluchsammlung:15,
Dämonenandenken:15,
Eiskugel:20,
Holzast:25,
Tafel:30,
Ast:40,
Notizen:50,
Missgunst:10,
Weisheit:20
};
const VALID_LANGS = ['de','en','tr'];
function getStoredLang(){
const l = (localStorage.getItem('lang') || '').toLowerCase();
return VALID_LANGS.includes(l) ? l : 'de';
}
function storeLang(l){ localStorage.setItem('lang', l); }
let currentLang;
function populateBioSelects() {
['startBio', 'endBio'].forEach(id => {
const sel = document.getElementById(id);
const current = sel.value;
const fragment = document.createDocumentFragment();
Object.keys(bio).forEach(key => {
const opt = document.createElement('option');
opt.value = key;
opt.textContent = translations[currentLang].options_bio[key];
fragment.appendChild(opt);
});
sel.innerHTML = '';
sel.appendChild(fragment);
if ([...sel.options].some(opt => opt.value === current)) sel.value = current;
});
updateBioIcon('startBio', 'startBioIcon');
updateBioIcon('endBio', 'endBioIcon');
}
function updateBioIcon(selectId, iconId) {
const key = document.getElementById(selectId).value;
const img = document.getElementById(iconId);
img.src = `resources/bio_icons/${key}.png`;
img.alt = translations[currentLang].options_bio[key] || key;
}
function renderResearch(t) {
const box = document.getElementById("bio-research");
if (!box) return;
const isTwoCols = window.innerWidth >= 1024;
const total = t.research.length;
const rows  = isTwoCols ? Math.ceil(total / 2) : total;
box.innerHTML = '';
const header = document.createElement('h2');
header.className = 'research-header';
header.textContent = t.researchTitle;
box.appendChild(header);
const grid = document.createElement('div');
grid.id = 'bio-quest-grid';
grid.className = `grid gap-6 sm:gap-8 ${isTwoCols ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`;
const rowStyle = isTwoCols ? `repeat(${rows}, minmax(0, 1fr))` : '';
grid.style.gridTemplateColumns = `repeat(${isTwoCols ? 2 : 1}, minmax(0, 1fr))`;
if (rowStyle) grid.style.gridTemplateRows = rowStyle;
t.research.forEach((r, i) => {
let col = 1, row = i + 1;
if (isTwoCols) {
const left = i < rows;
col = left ? 1 : 2;
row = left ? i + 1 : (i - rows) + 1;
}
const itemDiv = document.createElement('div');
itemDiv.className = 'quest-item flex gap-4 h-full';
itemDiv.style.gridColumn = col.toString();
itemDiv.style.gridRow = row.toString();
const img = document.createElement('img');
img.src = r.icon;
img.alt = r.name;
img.className = 'w-10 h-10 flex-shrink-0';
const contentDiv = document.createElement('div');
contentDiv.className = 'flex flex-col min-w-0';
const title = document.createElement('h3');
title.className = 'text-[#5D0505] font-bold';
const nameSpan = document.createElement('span');
nameSpan.textContent = r.name;
const countSpan = document.createElement('span');
countSpan.className = 'block text-xs font-bold text-[#341002]/70';
countSpan.textContent = `▸ ${r.count} ${t.turninsLabel}`;
title.appendChild(nameSpan);
title.appendChild(countSpan);
const rewardsList = document.createElement('ul');
rewardsList.className = 'list-disc list-inside text-sm text-[#341002]/90 mt-1';
r.rewards.forEach(reward => {
const li = document.createElement('li');
li.textContent = reward;
rewardsList.appendChild(li);
});
contentDiv.appendChild(title);
contentDiv.appendChild(rewardsList);
itemDiv.appendChild(img);
itemDiv.appendChild(contentDiv);
grid.appendChild(itemDiv);
});
box.appendChild(grid);
}
function lockHeightsOnce() {
const left  = document.getElementById('bio-left');
const right = document.getElementById('bio-research');
if (!left || !right) return;
if (window.innerWidth < 768) {
left.style.minHeight = '';
right.style.height   = '';
return;
}
left.style.minHeight = '';
right.style.height   = '';
const h = Math.max(left.offsetHeight, right.offsetHeight);
right.style.height   = h + 'px';
left.style.minHeight = h + 'px';
}
function applyLanguage(lang) {
currentLang = lang;
document.documentElement.lang = lang;
const keys = [
'title','note','footer',
'label_startBio','label_endBio','label_delivered',
'label_maxMinutes','label_deliveriesPerDay',
'button_compute','heading_basic','heading_skip',
'heading_total','heading_elixir'
];
keys.forEach(k=>{
const el = document.querySelector('[data-i18n="'+k+'"]');
if (el) el.textContent = translations[lang][k];
});
const footerText = document.getElementById('footer-text');
if (footerText) footerText.textContent = translations[lang].footer;
populateBioSelects();
const res = document.getElementById('results');
if (res) {
res.classList.add('hidden');
['basic-body','skip-body','total-body','elixir-body'].forEach(id=>{
const tb = document.getElementById(id);
if (tb) tb.innerHTML = '';
});
}
const logo = document.getElementById('site-logo');
if (logo) logo.alt = translations[lang].title;
renderResearch(translations[lang]);
requestAnimationFrame(lockHeightsOnce);
}
function formatNum(v){ return v.toLocaleString('de-DE'); }
function formatDec(v){ return v.toLocaleString('de-DE',{minimumFractionDigits:2,maximumFractionDigits:2}); }
function skipBioFromTo(delivered, start, end){
const keys = Object.keys(bio);
const si = keys.indexOf(start);
const ei = keys.indexOf(end);
if (si === -1 || ei === -1 || si > ei) return 0;
const need = keys.slice(si, ei+1).reduce((s,k)=>s+bio[k],0);
return Math.max(0, need - delivered);
}
function priceElixir(total){
const packs = Math.round(total/10);
return { packs, price: packs*119, flashPrice: packs*79 };
}
function calculateAcc(max, arr){
return arr.map(cds=>{
for(let i = 0; i < cds.length; i++) {
if(cds[i] <= max) {
return i;
}
}
return cds.length;
});
}
function calculatePrice(acc, list){
return acc.map((c,i)=>c*list[i]);
}
function fill(id, rows){
const body = document.getElementById(id); body.innerHTML='';
rows.forEach(([k,v])=>{
const tr=document.createElement('tr');
const th=document.createElement('th'); th.textContent=k;
const td=document.createElement('td'); td.textContent=v;
tr.append(th,td); body.appendChild(tr);
});
}
function parseTimeInput(value) {
const str = value.toString().toLowerCase().trim();
const match = str.match(/^(?:(\d+)h)?(?:(\d+)m)?$/);
if (match && (match[1] || match[2])) {
const hours = parseInt(match[1] || 0);
const minutes = parseInt(match[2] || 0);
return (hours * 60) + minutes;
}
const num = parseInt(str);
return isNaN(num) ? 60 : num;
}
function compute(){
const start = document.getElementById('startBio').value;
const end   = document.getElementById('endBio').value;
const keys  = Object.keys(bio);
if (!start || !end || !keys.includes(start) || !keys.includes(end)) {
alert('Bitte wählen Sie gültige Bio-Items aus!');
return;
}
if (keys.indexOf(start) > keys.indexOf(end)) {
alert('Start-Bio darf nicht nach End-Bio liegen!');
return;
}
const deliveredInput = document.getElementById('delivered');
const maxMinInput = document.getElementById('maxMinutes');
const perDayInput = document.getElementById('deliveriesPerDay');
let deliveredVal = parseInt(deliveredInput.value) || 0;
let maxMin = parseTimeInput(maxMinInput.value);
let perDay = parseInt(perDayInput.value) || 1;
deliveredVal = Math.max(0, deliveredVal);
deliveredInput.value = deliveredVal;
perDay = Math.max(1, perDay);
perDayInput.value = perDay;
if (maxMin < 1) {
maxMin = 1;
} else if (maxMin > 1320) {
maxMin = 1320;
}
const totalDel    = skipBioFromTo(deliveredVal,start,end);
const timeNeeded  = (totalDel * maxMin) / 60;
const daysNeeded  = totalDel / perDay;
const elix        = priceElixir(totalDel);
fill('basic-body',[
[translations[currentLang].row_total, formatNum(totalDel)],
[translations[currentLang].row_time,  formatNum(timeNeeded)],
[translations[currentLang].row_days,  formatDec(daysNeeded)]
]);
const accNorm   = calculateAcc(maxMin, cooldowns);
const priceNorm = calculatePrice(accNorm,[12,25,45]);
const skipBody = document.getElementById('skip-body'); skipBody.innerHTML='';
let tr = document.createElement('tr');
let th = document.createElement('th'); th.textContent=''; tr.appendChild(th);
['10%','20%','30%'].forEach(v=>{ const th2=document.createElement('th'); th2.textContent=v; tr.appendChild(th2); });
skipBody.appendChild(tr);
tr = document.createElement('tr'); th = document.createElement('th'); th.textContent=translations[currentLang].label_normal; tr.appendChild(th);
accNorm.forEach(v=>{ const td=document.createElement('td'); td.textContent=v; tr.appendChild(td); });
skipBody.appendChild(tr);
const need90 = ['Missgunst','Weisheit'].includes(end);
if (need90){
const acc90 = calculateAcc(maxMin, cooldowns90);
tr = document.createElement('tr'); th = document.createElement('th'); th.textContent=translations[currentLang].label_bio92_94; tr.appendChild(th);
acc90.forEach(v=>{ const td=document.createElement('td'); td.textContent=v; tr.appendChild(td); });
skipBody.appendChild(tr);
}
const totalBody = document.getElementById('total-body'); totalBody.innerHTML='';
tr = document.createElement('tr'); th = document.createElement('th'); th.textContent=''; tr.appendChild(th);
['10%','20%','30%'].forEach(v=>{ const th2=document.createElement('th'); th2.textContent=v; tr.appendChild(th2); });
totalBody.appendChild(tr);
const accTotal  = accNorm.map(c=>c*totalDel);
const drTotal   = priceNorm.map(p=>p*totalDel);
const saleTotal = calculatePrice(accNorm,[8,17,29]).map(p=>p*totalDel);
const flashSaleTotal = ['-', '-', formatNum(Math.round(drTotal[2] / 2))];
[
[translations[currentLang].label_accelerators, accTotal],
[translations[currentLang].label_dr,     drTotal],
[translations[currentLang].label_dr_sale,saleTotal],
[translations[currentLang].label_dr_flash_sale,flashSaleTotal]
].forEach(([name,data])=>{
tr = document.createElement('tr');
th = document.createElement('th'); th.textContent=name; tr.appendChild(th);
data.forEach(v=>{
const td=document.createElement('td');
td.textContent = (typeof v === 'string') ? v : formatNum(v);
tr.appendChild(td);
});
totalBody.appendChild(tr);
});
fill('elixir-body',[
[translations[currentLang].row_packs, formatNum(elix.packs)],
[translations[currentLang].row_price, formatNum(elix.price)],
[translations[currentLang].row_flash, formatNum(elix.flashPrice)]
]);
document.getElementById('results').classList.remove('hidden');
document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
updateBioIcon('startBio', 'startBioIcon');
updateBioIcon('endBio',   'endBioIcon');
}
document.addEventListener('DOMContentLoaded', () => {
const initLang = getStoredLang();
applyLanguage(initLang);
populateBioSelects();
document.getElementById('endBio').value = 'Weisheit';
updateBioIcon('startBio', 'startBioIcon');
updateBioIcon('endBio',   'endBioIcon');
document.getElementById('computeBtn').addEventListener('click', compute);
document.getElementById('startBio').addEventListener('change', function(){
const startIdx = Object.keys(bio).indexOf(this.value);
const endSel   = document.getElementById('endBio');
if (Object.keys(bio).indexOf(endSel.value) < startIdx) {
endSel.selectedIndex = startIdx;
updateBioIcon('endBio','endBioIcon');
}
updateBioIcon('startBio','startBioIcon');
updateBioIcon('endBio','endBioIcon');
});
document.getElementById('endBio').addEventListener('change', function(){
updateBioIcon('endBio','endBioIcon');
});
document.addEventListener('languageChanged', function(e) {
applyLanguage(e.detail.language);
});
window.addEventListener('storage', (e)=>{
if (e.key === 'lang' && e.newValue){
const newLang = getStoredLang();
applyLanguage(newLang);
}
});
let resizeTimer;
window.addEventListener('resize', () => {
clearTimeout(resizeTimer);
resizeTimer = setTimeout(() => {
renderResearch(translations[currentLang]);
lockHeightsOnce();
}, 150);
});
document.getElementById('year').textContent = new Date().getFullYear();
});