const pet_exp = [
6903000, 7591500, 8532000, 8991000, 9639000, 10318500, 11061000, 11790000, 12582000,
13410000, 14751000, 16227000, 17851500, 19638000, 21600000, 23760000,
26136000, 28750500, 31626000, 34789500, 38268000, 42093000, 46305000,
50940000, 54450000, 61650000, 67815000, 74565000, 106645500, 117292500,
129051000, 141921000, 156136500, 171756000, 188896500, 207792000, 228618000,
251433000, 276588000, 304258500, 334408500, 468549900, 515404890, 566945379,
623639916, 686003908, 754604299, 830064729, 913071202, 922500000, 967500000,
994500000, 1012500000, 1026000000, 1039500000, 1048500000,
];
const pet_cl_exp = [
173360, 520081, 1040165, 1733611, 2600421, 3640596, 4854125, 6241041, 7801313, 9534953,
11441962, 13522340, 15776087, 18203205, 20803695, 23577558, 26524793, 29645403, 32939388,
36406748, 40047484, 43861598, 47849089, 52009960, 56344210, 60851840, 65532852, 70387246, 75415022, 80616182
];
const pet_itemexp = [
767000,843500,948000,999000,1071000,1146500,1229000,1310000,1398000,1490000,
1639000,1803000,1983500,2182000,2400000,2640000,2904000,3194500,3514000,3865500,
4252000,4677000,5145000,5660000,6050000,6850000,7535000,8285000,11849500,13032500,
14339000,15769000,17348500,19084000,20988500,23088000,25402000,27937000,30732000,
33806500,37156500,52061100,57267210,62993931,69293324,76222656,83844922,92229414,
101452355,102500000,107500000,110500000,112500000,114000000,115500000,116500000
];
const pet_cl_itemexp = [
37186500, 52061100, 57267210, 62993931, 69293324, 76222656, 83844922, 92229414, 101452355, 102500000,
107500000, 110500000, 112500000, 114000000, 115500000, 116500000, 117500000, 118500000, 119500000, 120000000,
120500000, 121000000, 121500000, 122000000, 122500000, 123000000, 123500000, 124000000, 124500000, 124500000
];
const WEAPON_EXP       = 720000;
const KK_TO_WON        = 0.01;
const SNACK_PER_LEVEL  = 20;
const DELICIOUS_SNACK_EXP = 200000;
const DELICIOUS_SNACK_CL_EXP = 1200;
const DELICIOUS_PER_STACK = 200;
function formatLevelDisplay(level) {
return level <= 105 ? level.toString() : `CL${level - 105}`;
}
function getExpForLevel(level, expType = 'item') {
if (level <= 105) {
const index = level - 50;
const value = expType === 'item' ? pet_itemexp[index] : pet_exp[index];
return value !== undefined ? value : 0;
} else {
const clIndex = level - 106;
const value = expType === 'item' ? pet_cl_itemexp[clIndex] : pet_cl_exp[clIndex];
return value !== undefined ? value : 0;
}
}
function getLang(){ const l=(localStorage.getItem('lang')||'').toLowerCase(); return VALID_LANGS.includes(l)?l:'de'; }
function setLang(l){
localStorage.setItem('lang', l);
applyLang(l);
if (window.M2Helper && window.M2Helper.lang && window.M2Helper.lang.updateButton) {
window.M2Helper.lang.updateButton(l);
}
}
let lastCalc = null;
document.addEventListener('DOMContentLoaded', ()=>{
document.getElementById('year').textContent = new Date().getFullYear();
fillLevelSelects();
const initLang = getLang();
applyLang(initLang);
document.getElementById('petLevel').addEventListener('change', updateTargetLevelOptions);
updateTargetLevelOptions();
document.getElementById('computeBtn').addEventListener('click', e=>{
e.preventDefault();
compute();
});
document.addEventListener('languageChanged', function(e) {
setLang(e.detail.language);
});
window.addEventListener('storage', e=>{
if(e.key==='lang' && e.newValue){
applyLang(getLang());
}
});
});
function applyLang(l){
const L = t[l];
document.documentElement.lang = l;
document.getElementById('page-title').textContent       = L.title;
document.getElementById('res-head').textContent        = L.results;
document.getElementById('lbl-petLevel').textContent    = L.petLevel;
document.getElementById('lbl-targetLevel').textContent = L.targetLevel;
document.getElementById('lbl-priceWeapon').textContent = L.priceWeapon;
document.getElementById('lbl-priceSnack').textContent  = L.priceSnack;
document.getElementById('lbl-priceDelicious').textContent = L.priceDelicious;
document.getElementById('note-under').textContent      = L.note_under;
document.getElementById('pet-section-desc').textContent = L.sectionDesc;
const btnSpan = document.getElementById('btn-text');
if(btnSpan) btnSpan.textContent = L.btn;
else document.getElementById('computeBtn').textContent = L.btn;
renderResults();
}
function fillLevelSelects(){
const petSel    = document.getElementById('petLevel');
const targetSel = document.getElementById('targetLevel');
petSel.innerHTML=''; targetSel.innerHTML='';
for(let lv=50; lv<=105; lv++) {
petSel.insertAdjacentHTML('beforeend', `<option value="${lv}">${lv}</option>`);
}
petSel.insertAdjacentHTML('beforeend', `<option disabled class="level-separator">─────────────</option>`);
for(let cl=1; cl<=29; cl++) {
const value = 105 + cl;
petSel.insertAdjacentHTML('beforeend', `<option value="${value}" class="cl-level">CL${cl}</option>`);
}
for(let lv=51; lv<=105; lv++) {
targetSel.insertAdjacentHTML('beforeend', `<option value="${lv}">${lv}</option>`);
}
targetSel.insertAdjacentHTML('beforeend', `<option disabled class="level-separator">─────────────</option>`);
for(let cl=1; cl<=30; cl++) {
const value = 105 + cl;
targetSel.insertAdjacentHTML('beforeend', `<option value="${value}" class="cl-level">CL${cl}</option>`);
}
petSel.value = 50;
targetSel.value = 105;
}
function updateTargetLevelOptions() {
const startLevel = parseInt(document.getElementById('petLevel').value);
const targetSel = document.getElementById('targetLevel');
targetSel.innerHTML = '';
let separatorAdded = false;
for (let level = startLevel + 1; level <= 135; level++) {
if (level === 106 && !separatorAdded) {
targetSel.insertAdjacentHTML('beforeend', `<option disabled class="level-separator">─────────────</option>`);
separatorAdded = true;
}
const display = formatLevelDisplay(level);
const cssClass = level > 105 ? ' class="cl-level"' : '';
targetSel.insertAdjacentHTML('beforeend', `<option value="${level}"${cssClass}>${display}</option>`);
}
if (targetSel.options.length > 0) {
for (let i = 0; i < targetSel.options.length; i++) {
if (!targetSel.options[i].disabled) {
targetSel.value = targetSel.options[i].value;
break;
}
}
}
}
function formatKKorWon(kkValue){
if (kkValue < 100) return kkValue.toLocaleString('de-DE') + ' kk';
const won = kkValue * KK_TO_WON;
return won.toLocaleString('de-DE', {maximumFractionDigits:2}) + ' won';
}
function formatWon(w){ return w.toLocaleString('de-DE', {maximumFractionDigits:2}) + ' won'; }
function fillTable(id, rows){
const tb = document.getElementById(id);
tb.innerHTML='';
rows.forEach(([k,v])=>{
const tr=document.createElement('tr');
if(k === '---' && v === '---') {
tr.innerHTML = '<td colspan="2" class="text-center py-1"><hr class="border-[#5D0505]/40"></td>';
} else if(k === '' && v === '') {
tr.innerHTML = '<td colspan="2" class="py-1">&nbsp;</td>';
} else {
const th=document.createElement('th');
const td=document.createElement('td');
th.className='text-left font-semibold text-[#5D0505] pb-1';
td.className='text-right font-bold';
th.textContent=k;
td.textContent=v;
tr.append(th,td);
}
tb.appendChild(tr);
});
}
function compute(){
const L = t[getLang()];
const start  = parseInt(document.getElementById('petLevel').value,10);
const target = parseInt(document.getElementById('targetLevel').value,10);
if(target <= start){ alert(L.errorTarget); return; }
const priceWkk = parseFloat(document.getElementById('priceWeapon').value||0);
const priceSkk = parseFloat(document.getElementById('priceSnack').value||0);
const priceDeliciousKk = parseFloat(document.getElementById('priceDelicious').value||0);
let totalExpNeed = 0;
for(let lv=start; lv<target; lv++) {
totalExpNeed += getExpForLevel(lv, 'regular');
}
let itemExpNeed = 0;
for(let lv=start; lv<target; lv++) {
itemExpNeed += getExpForLevel(lv, 'item');
}
const weaponsNeeded = Math.ceil(itemExpNeed / WEAPON_EXP);
const snacksNeeded  = (target - start) * SNACK_PER_LEVEL;
let deliciousSnacksNeeded = 0;
for(let lv=start; lv<target; lv++) {
const expForThisLevel = getExpForLevel(lv, 'regular');
if (lv >= 106) {
deliciousSnacksNeeded += Math.ceil(expForThisLevel / DELICIOUS_SNACK_CL_EXP);
} else {
deliciousSnacksNeeded += Math.ceil(expForThisLevel / DELICIOUS_SNACK_EXP);
}
}
const deliciousStacksNeeded = deliciousSnacksNeeded / DELICIOUS_PER_STACK;
const weaponCostKK = weaponsNeeded * priceWkk;
const snackCostKK  = snacksNeeded  * priceSkk;
const deliciousCostKK = deliciousStacksNeeded * priceDeliciousKk;
const segments = calcOptimal(start, target, priceWkk, priceSkk);
lastCalc = {
totalExpNeed, itemExpNeed, weaponsNeeded, snacksNeeded, deliciousStacksNeeded,
weaponCostKK, snackCostKK, deliciousCostKK, segments, start, target, priceWkk, priceSkk
};
renderResults();
}
function renderResults(){
if(!lastCalc) return;
const L = t[getLang()];
const d = lastCalc;
const box = document.getElementById('optimal-content');
if (!box) return;
box.innerHTML = buildOptimalHTML(L, d.segments);
const weaponsBox = document.getElementById('weapons-only-content');
if (weaponsBox) {
weaponsBox.innerHTML = buildWeaponsOnlyHTML(L, d);
}
const snacksBox = document.getElementById('snacks-only-content');
if (snacksBox) {
snacksBox.innerHTML = buildSnacksOnlyHTML(L, d);
}
document.getElementById('results').classList.remove('hidden');
document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
}
function buildOptimalHTML(L, segments){
if (!segments || segments.length === 0) return '';
let linesHTML = '';
let totalWeaponsCost = 0;
let totalSnacksCost = 0;
const allSameMethod = segments.every(s => s.method === segments[0].method);
if (allSameMethod && segments.length === 1) {
const seg = segments[0];
const item = seg.method === 'weapons' ? L.optimal.itemWeapon : L.optimal.itemSnack;
const count = seg.method === 'weapons' ? seg.weapons : seg.snacks;
const cost = seg.method === 'weapons' ? seg.weaponsCost : seg.snacksCost;
linesHTML = `<li>${L.optimal.lineUse
.replace('{level}', formatLevelDisplay(lastCalc.target))
.replace('{item}', item)
.replace('{count}', count.toLocaleString('de-DE'))
.replace('{price}', formatKKorWon(cost))}</li>`;
const infoLine = seg.method === 'weapons' ? L.optimal.alwaysWeapons : L.optimal.alwaysSnacks;
const totalWon = cost * KK_TO_WON;
const deliciousWon = lastCalc.deliciousCostKK * KK_TO_WON;
return wrapOptimalBlock(L, `<p class="mb-3 text-sm md:text-base">${infoLine}</p>`, linesHTML, totalWon, deliciousWon);
}
const infoLine = `<p class="mb-3 text-sm md:text-base">${L.optimal.multiSegmentIntro}</p>`;
segments.forEach(seg => {
const endDisplay = formatLevelDisplay(seg.end);
const item = seg.method === 'weapons' ? L.optimal.itemWeapon : L.optimal.itemSnack;
const count = seg.method === 'weapons' ? seg.weapons : seg.snacks;
const cost = seg.method === 'weapons' ? seg.weaponsCost : seg.snacksCost;
linesHTML += `<li>${L.optimal.lineUse
.replace('{level}', endDisplay)
.replace('{item}', item)
.replace('{count}', count.toLocaleString('de-DE'))
.replace('{price}', formatKKorWon(cost))}</li>`;
totalWeaponsCost += seg.weaponsCost;
totalSnacksCost += seg.snacksCost;
});
const totalWon = (totalWeaponsCost + totalSnacksCost) * KK_TO_WON;
const deliciousWon = lastCalc.deliciousCostKK * KK_TO_WON;
return wrapOptimalBlock(L, infoLine, linesHTML, totalWon, deliciousWon);
}
function wrapOptimalBlock(L, infoHTML, linesHTML, totalWon, deliciousCostWon = 0){
const combinedCostWon = totalWon + deliciousCostWon;
const deliciousStacks = lastCalc.deliciousStacksNeeded;
const deliciousCostFormatted = formatKKorWon(deliciousCostWon / KK_TO_WON);
return `
<h4 class="text-[#5D0505] font-bold text-base md:text-lg mb-2">${L.optimal.title}</h4>
${infoHTML}
<ul class="list-disc list-inside space-y-1 text-sm md:text-base">
${linesHTML}
</ul>
<div class="mt-4 text-sm md:text-base font-semibold">
${L.optimal.totalCost.replace('{cost}', formatWon(totalWon))}
</div>
<div class="mt-4 pt-4 border-t border-[#5D0505]/20">
<div class="flex items-center gap-2">
<img src="resources/pet/kost_leckerli.png" alt="Delicious Snack" class="w-6 h-6" />
<span class="text-sm md:text-base font-semibold text-[#5D0505]">
${L.basicRows.deliciousNeed}: <strong>${deliciousStacks.toLocaleString('de-DE', {minimumFractionDigits: 1, maximumFractionDigits: 1})} Stacks (${deliciousCostFormatted})</strong>
</span>
</div>
</div>
<div class="mt-4 pt-4 border-t border-[#5D0505]/20">
<div class="text-sm md:text-base font-bold text-[#5D0505]">
${L.optimal.totalCostCombined.replace('{cost}', formatWon(combinedCostWon))}
</div>
</div>
`;
}
function buildWeaponsOnlyHTML(L, d){
const weaponCostKK = d.weaponsNeeded * d.priceWkk;
const totalWithDeliciousWon = (weaponCostKK + d.deliciousCostKK) * KK_TO_WON;
return `
<div class="flex items-center gap-2 mb-3">
<img src="resources/pet/weapon+7.png" alt="Weapon" class="w-6 h-6" />
<h4 class="text-[#5D0505] font-bold text-base md:text-lg">${L.optimal.weaponsOnlyTitle}</h4>
</div>
<div class="space-y-2 text-sm md:text-base">
<div>
<span class="font-semibold text-[#5D0505]">${L.optimal.needed}: </span>
<strong>${d.weaponsNeeded.toLocaleString('de-DE')}</strong>
</div>
<div>
<span class="font-semibold text-[#5D0505]">${L.optimal.itemExpCost}: </span>
<strong>${formatKKorWon(weaponCostKK)}</strong>
</div>
<hr class="border-[#5D0505]/20 my-2">
<div>
<span class="font-semibold text-[#5D0505]">${L.optimal.totalWithDelicious}: </span>
<strong>${formatWon(totalWithDeliciousWon)}</strong>
</div>
</div>
`;
}
function buildSnacksOnlyHTML(L, d){
const snackCostKK = d.snacksNeeded * d.priceSkk;
const totalWithDeliciousWon = (snackCostKK + d.deliciousCostKK) * KK_TO_WON;
return `
<div class="flex items-center gap-2 mb-3">
<img src="resources/pet/Leckerli+.png" alt="Snack" class="w-6 h-6" />
<h4 class="text-[#5D0505] font-bold text-base md:text-lg">${L.optimal.snacksOnlyTitle}</h4>
</div>
<div class="space-y-2 text-sm md:text-base">
<div>
<span class="font-semibold text-[#5D0505]">${L.optimal.needed}: </span>
<strong>${d.snacksNeeded.toLocaleString('de-DE')}</strong>
</div>
<div>
<span class="font-semibold text-[#5D0505]">${L.optimal.itemExpCost}: </span>
<strong>${formatKKorWon(snackCostKK)}</strong>
</div>
<hr class="border-[#5D0505]/20 my-2">
<div>
<span class="font-semibold text-[#5D0505]">${L.optimal.totalWithDelicious}: </span>
<strong>${formatWon(totalWithDeliciousWon)}</strong>
</div>
</div>
`;
}
function calcOptimal(start, target, priceWkk, priceSkk){
const snackCostPerLevel_kk = SNACK_PER_LEVEL * priceSkk;
let methodPerLevel = [];
for (let lv = start; lv < target; lv++) {
const itemExpLv = getExpForLevel(lv, 'item');
const weaponsNeededLv = Math.ceil(itemExpLv / WEAPON_EXP);
const weaponCostLvKk = weaponsNeededLv * priceWkk;
const bestMethodLv = (snackCostPerLevel_kk < weaponCostLvKk) ? 'snacks' : 'weapons';
methodPerLevel.push(bestMethodLv);
}
let segments = [];
let currentMethod = methodPerLevel[0];
let segmentStart = start;
let segmentItemExp = 0;
let segmentSnacks = 0;
for (let i = 0; i < methodPerLevel.length; i++) {
const lv = start + i;
const method = methodPerLevel[i];
const itemExpLv = getExpForLevel(lv, 'item');
if (method !== currentMethod) {
const segmentWeapons = Math.ceil(segmentItemExp / WEAPON_EXP);
const segmentWeaponsCost = segmentWeapons * priceWkk;
const segmentSnacksCost = segmentSnacks * priceSkk;
segments.push({
start: segmentStart,
end: lv,
method: currentMethod,
weapons: currentMethod === 'weapons' ? segmentWeapons : 0,
snacks: currentMethod === 'snacks' ? segmentSnacks : 0,
weaponsCost: currentMethod === 'weapons' ? segmentWeaponsCost : 0,
snacksCost: currentMethod === 'snacks' ? segmentSnacksCost : 0
});
segmentStart = lv;
currentMethod = method;
segmentItemExp = 0;
segmentSnacks = 0;
}
if (method === 'weapons') {
segmentItemExp += itemExpLv;
} else {
segmentSnacks += SNACK_PER_LEVEL;
}
}
const segmentWeapons = Math.ceil(segmentItemExp / WEAPON_EXP);
const segmentWeaponsCost = segmentWeapons * priceWkk;
const segmentSnacksCost = segmentSnacks * priceSkk;
segments.push({
start: segmentStart,
end: target,
method: currentMethod,
weapons: currentMethod === 'weapons' ? segmentWeapons : 0,
snacks: currentMethod === 'snacks' ? segmentSnacks : 0,
weaponsCost: currentMethod === 'weapons' ? segmentWeaponsCost : 0,
snacksCost: currentMethod === 'snacks' ? segmentSnacksCost : 0
});
return segments;
}