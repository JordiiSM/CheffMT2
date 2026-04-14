    let searchNames=[];
    let searchNamesLower=[];
    let searchBuckets={};

    function getLocaleForLanguage(lang) {
        const localeMap = {
            'tr': 'tr-TR',
            'en': 'en-US',
            'de': 'de-DE',
            'es': 'es-ES',
            'fr': 'fr-FR',
            'it': 'it-IT',
            'nl': 'nl-NL',
            'pl': 'pl-PL',
            'pt': 'pt-PT',
            'ro': 'ro-RO',
            'ru': 'ru-RU',
            'gr': 'el-GR',
            'cz': 'cs-CZ',
            'dk': 'da-DK',
            'hu': 'hu-HU',
            'ae': 'ar-SA'
        };
        return localeMap[lang] || 'en-US';
    }

    function rebuildSearchIndex(){
        const seen=new Set();
        searchNames=[];
        searchNamesLower=[];
        searchBuckets={};
        const lang = typeof currentLanguage !== 'undefined' ? currentLanguage : (localStorage.getItem('lang') || 'tr');
        const locale = getLocaleForLanguage(lang);
        const source = window.item_names || {};
        const values = Array.isArray(source) ? source : Object.values(source);
        for(let n of values){
            if(!n) continue;
            n=String(n).replace(/\+\d+$/,'').trim();
            const key=n.toLocaleLowerCase(locale);
            if(seen.has(key)) continue;
            seen.add(key);
            const idx=searchNamesLower.length;
            searchNames.push(n);
            searchNamesLower.push(key);
            const p=key.slice(0,2);
            if(!searchBuckets[p]) searchBuckets[p]=[];
            searchBuckets[p].push(idx);
        }
    }
    document.addEventListener('DOMContentLoaded', function() {
        const suggestionsBox = document.getElementById('search-suggestions');
        const searchInputEl = document.getElementById('item-search-input');
        
        if(suggestionsBox && searchInputEl) {
            suggestionsBox.addEventListener('click',e=>{
                const t=e.target;
                if(t && t.tagName==='DIV'){
                    searchInputEl.value=t.textContent;
                    suggestionsBox.classList.add('hidden');
                    filterAndPaginate();
                }
            });

            let searchDebounceTimer=null;
            searchInputEl.addEventListener('input',()=>{
                const locale = getLocaleForLanguage(currentLanguage);
                const term=searchInputEl.value.toLocaleLowerCase(locale);
                if(searchDebounceTimer) clearTimeout(searchDebounceTimer);
                searchDebounceTimer=setTimeout(()=>{
                    if(!term){
                        suggestionsBox.innerHTML='';
                        suggestionsBox.classList.add('hidden');
                        return;
                    }
                    const res=[];
                    const b1=searchBuckets[term.slice(0,2)]||[];
                    for(let j=0;j<b1.length && res.length<20;j++){
                        const i=b1[j];
                        if(searchNamesLower[i].includes(term)) res.push(searchNames[i]);
                    }
                    if(res.length===0 && term.length>2){
                        const b2=searchBuckets[term.slice(0,1)]||[];
                        for(let j=0;j<b2.length && res.length<20;j++){
                            const i=b2[j];
                            if(searchNamesLower[i].includes(term)) res.push(searchNames[i]);
                        }
                    }
                    if(res.length===0){
                        suggestionsBox.innerHTML='';
                        suggestionsBox.classList.add('hidden');
                        return;
                    }
                    suggestionsBox.innerHTML = res.map(name=>`<div class="px-3 py-2 hover:bg-gray-600 cursor-pointer">${name}</div>`).join('');
                    suggestionsBox.classList.remove('hidden');
                },120);
            });
            
            document.addEventListener('click', e => {
                if (!searchInputEl.contains(e.target) && !suggestionsBox.contains(e.target)) {
                    suggestionsBox.classList.add('hidden');
                }
            });
        }
    });
    const renkler = {
        99: 'sky-400',
        100: 'red-800',
        101: 'blue-700',
        102: 'green-600',
        103: 'yellow-700',
        104: 'purple-800'
    };
    const costumeCategoryCodes = [
        '0-9-1', '0-9-0', '1-9-0', '3-9-0', '4-9-0', '0-9-2'
    ];
    window.STAT_MAP = {};
    window.ITEM_ICON_MAP = {};
    window.ITEM_DESC_MAP = {};
    window.LANG = {};
    let priceFilter = {minYang:0, maxYang:1999999999, minWon:0, maxWon:3000};
    try {
        const saved = JSON.parse(localStorage.getItem('priceFilter') || '{}');
        priceFilter = {...priceFilter, ...saved};
    } catch(e){}
    let petFilter = { minHp: 0, minDef: 0, minSp: 0, minDays: 0, type: '' };
    let sashFilter = { minRate: 0, absorbedName: '', element: '' };
    let plusFilter = { min: 0, max: 200 };
    try {
        const pf = JSON.parse(localStorage.getItem('plusFilter') || '{}');
        plusFilter = { ...plusFilter, ...pf };
    } catch(e){}
    let levelFilter = { min: 0, max: 120 };
    try {
        const lf = JSON.parse(localStorage.getItem('levelFilter') || '{}');
        levelFilter = { ...levelFilter, ...lf };
    } catch(e){}
    levelFilter.min = Math.max(0, Number(levelFilter.min) || 0);
    levelFilter.max = Math.max(levelFilter.min, Math.min(120, Number(levelFilter.max) || 120));
    let daysFilter = { min: 0, max: 9999 };
    
    daysFilter.min = Math.max(0, Number(daysFilter.min) || 0);
    daysFilter.max = Math.max(daysFilter.min, Number(daysFilter.max) || 9999);
    let showNullLevel = true;
    try {
        const sn = localStorage.getItem('showNullLevel');
        if (sn !== null) showNullLevel = JSON.parse(sn) ? true : false;
    } catch(e){}
    let sellerFilter = '';
    try {
        sellerFilter = localStorage.getItem('sellerFilter') || '';
    } catch(e){}
    let currentLanguage = localStorage.getItem('lang') || 'tr';
    window.stat_map = {};
    window.proto_stat_map = {};
    window.item_proto = {};
    window.item_names = {};
    window.LANG = {};
    let allItemsData = [];
    let filteredItems = [];
    let selectedEnchantments = [];
    let enchantPresets = [];
    let currentPage = 1;
    const itemsPerPage = 10;
    let countFilter = null;
    let filterTimer = null;
    function scheduleFilter(delay = 300){
        if(filterTimer) clearTimeout(filterTimer);
        renderSkeleton();
        filterTimer = setTimeout(() => { try{ filterAndPaginate(); } catch(e){ console.error(e); } }, delay);
    }
    const CUSTOM_RARITY_THRESHOLDS = {
        1: 2000,
        2: 80,
        3: 12,
        4: 12,
        5: 12,
        6: 12,
        7: 8,
        8: 20,
        9: 20,
        10: 30,
        11: 30,
        12: 8,
        13: 8,
        14: 8,
        15: 10,
        16: 10,
        17: 10,
        18: 20,
        19: 20,
        20: 20,
        21: 20,
        22: 20,
        23: 10,
        24: 10,
        25: 10,
        27: 15,
        28: 15,
        29: 15,
        30: 15,
        31: 15,
        32: 15,
        33: 15,
        34: 15,
        35: 15,
        36: 15,
        37: 15,
        38: 15,
        39: 10,
        41: 5,
        42: 5,
        43: 20,
        44: 20,
        45: 20,
        47: 5,
        53: 50,
        54: 5,
        55: 50,
        65: 5,
        71: 10,
        72: 30,
        87:25,
        88:25,
        89:25,
        92:5,
        93:8,
        96: 15,
        105: 30,
        106: 30,
        107: 30,
        108: 5,
        109: 5,
        110: 5,
        111: 5,
        112: 5,
        113: 5,
        114: 5,
        115: 10,
        116: 20,
        119: 5,
        120: 5,
        121: 5,
        122: 5,
        123: 5,
        124: 5,
        125: 5,
        126: 5,
        127: 5,
        128: 5,
        129: 5,
        130: 5,
        131: 5,
        132: 5,
        133: 5,
        134: 5,
        135: 5,
        136: 5,
        137: 5,
        138: 5,
        139: 5,
        140: 5,
        141: 5,
        142: 5,
        143: 5,
        144: 5,
        145: 5,
        146: 5,
        147: 5,
        148: 5,
        149: 5,
        150: 5,
        151: 5,
        152: 5,
        153: 5,
        154: 5,
        155: 5,
        156: 5,
        157: 5,
        158: 5,
        159: 5,
        160: 5,
        161: 5,
        162: 5,
        163: 5,
        164: 5,
        165: 10,
        166: 10,
        167: 10,
        168: 10,
        169: 10,
        170: 10,
        171: 10,
        172: 10,
        173: 10,
        174: 10,
        175: 10,
        176: 10,
        177: 10,
        178: 10,
        179: 10,
        180: 10,
        181: 10,
        182: 10,
        183: 10,
        184: 10,
        185: 10,
        186: 5,
        187: 5,
        188: 5,
        189: 5,
        190: 5,
        191: 5,
        192: 5,
        193: 5,
        194: 5,
        195: 5,
        196: 5,
        197: 5,
        198: 5,
        201: 5,
        202: 5,
        203: 5,
        204: 5,
        205: 5,
        206: 5,
        207: 5,
        208: 5,
        209: 5,
        210: 5,
        211: 5,
        212: 5,
        213: 5,
        214: 8,
        215: 3,
        216: 3,
        218: 5,
        219: 5,
        220: 5,
        221: 5,
        222: 5,
        223: 25,
        224: 25,
        225: 25,
        226: 25,
        227: 25,
        228: 5,
        229: 5,
        230: 5,
        231: 5,
        232: 5,
        233: 5,
        234: 5,
        235: 5,
        236: 5,
        237: 5,
        238: 5,
        239: 10,
        240: 10,
        241: 10,
        242: 10,
        243: 12,
        245: 10,
        246: 15,
        247: 15,
        248: 15,
        249: 15,
        250: 15,
        251: 15,
        252: 15,
        253: 15,
        254: 15,
        255: 15,
        256: 15,
        257: 20,
        258: 20,
        259: 20,
        260: 12,
        261: 10,
        262: 10,
        263: 10,
        264: 10,
        265: 10,
        266: 10,
        267: 10,
        268: 15,
        269: 10,
        270: 10,
        271: 10,
        272: 10,
        273: 10,
        274: 5,
        275: 10,
        278: 15,
        311:10,
        92: 5,
        93: 8
    };
    function clearSearchInput(event) {
        if (event) {
            event.stopPropagation();
            event.preventDefault();
        }

        const itemSearchInput = document.getElementById('item-search-input');
        const clearSearchBtn = document.getElementById('clear-search-btn');

        itemSearchInput.value = '';
        clearSearchBtn.classList.add('hidden');
        itemSearchInput.focus();
        scheduleFilter(140);
    }
    function clearCategoryInput(event) {
        if (event) {
            event.stopPropagation();
            event.preventDefault();
        }
        const categorySearchInput = document.getElementById('category-search-input');
        const clearCategoryBtn = document.getElementById('clear-category-btn');
        const hiddenSelect = document.getElementById('category-filter-select');
        const optionsDiv = document.getElementById('category-options');

        categorySearchInput.value = '';
        hiddenSelect.value = '';
        clearCategoryBtn.classList.add('hidden');
        optionsDiv.classList.add('hidden');
        Array.from(optionsDiv.children).forEach(option => {
            option.style.display = 'block';
        });
        filterAndPaginate();
    }

    function clearSellerInput(event) {
        if (event) {
            event.stopPropagation();
            event.preventDefault();
        }

        const sellerSearchInput = document.getElementById('sellerSearchInput');
        const clearSellerBtn = document.getElementById('clear-seller-btn');

        sellerSearchInput.value = '';
        sellerFilter = '';
        localStorage.setItem('sellerFilter', sellerFilter);
        clearSellerBtn.classList.add('hidden');

        scheduleFilter(140);
    }

    function checkAutoLevelSelection(categoryValue) {
        const autoLevelCategories = [
            '0-1-1', '0-1-3', '0-5-1', '0-5-2', '0-5-3', '0-7-2', '0-7-3', '0-7-4',
            '0-8-0', '0-8-1', '0-8-2', '0-8-3', '0-8-4', '0-8-5', '0-8-6', '0-8-7',
            '0-9-0', '1-9-0', '3-9-0', '4-9-0', '0-9-1', '0-9-4', '0-9-2', '0-9-5',
            '0-12-0', '0-12-2', '0-12-3', '0-12-4', '0-12-7'
        ];

        const nullLvCheckbox = document.getElementById('showNullLvCheckbox');


        if (autoLevelCategories.includes(categoryValue) && nullLvCheckbox) {
            if (!nullLvCheckbox.checked) {
                nullLvCheckbox.checked = true;
                showNullLevel = true;
                localStorage.setItem('showNullLevel', JSON.stringify(showNullLevel));
            }

            const plusMinInput = document.getElementById('plusMinInput');
            if (plusMinInput && plusMinInput.value !== '0') {
                plusMinInput.value = '0';
                plusFilter.min = 0;
                localStorage.setItem('plusFilter', JSON.stringify(plusFilter));
            }

        } else {
            if (!autoLevelCategories.includes(categoryValue)) {
            }
            if (!nullLvCheckbox) {
            }
            if (nullLvCheckbox && nullLvCheckbox.checked) {
            }
        }
    }
    let downloadController = null;
    function showLoadingProgress() {
        const container = document.getElementById('loading-container');
        if (container) {
            container.classList.remove('hidden');
            updateProgress(0, 0, 0, 0);
        }
    }

    function hideLoadingProgress() {
        const container = document.getElementById('loading-container');
        container.classList.add('hidden');
    }

    window.addEventListener('beforeunload', function() {
        if (downloadController) {
            downloadController.abort();
        }
        hideLoadingProgress();
    });

    function updateProgress(loaded, total, speed = 0, percentage = 0) {
        const progressBar = document.getElementById('loading-progress');
        const percentageSpan = document.getElementById('loading-percentage');
        const speedSpan = document.getElementById('loading-speed');
        const sizeSpan = document.getElementById('loading-size');
        if (!progressBar || !percentageSpan || !speedSpan || !sizeSpan) {
            return;
        }
        const percent = total > 0 ? Math.round((loaded / total) * 100) : percentage;
        progressBar.style.width = percent + '%';
        percentageSpan.textContent = percent + '%';
        if (speed > 0) {
            const speedKB = (speed / 1024).toFixed(1);
            speedSpan.textContent = speedKB + ' KB/s';
        }
        if (total > 0) {
            const totalKB = (total / 1024).toFixed(1);
            const loadedKB = (loaded / 1024).toFixed(1);
            sizeSpan.textContent = `${loadedKB} / ${totalKB} KB`;
        }
    }

    async function fetchWithProgress(url, onProgress = null, abortController = null) {
        const fetchOptions = {};
        if (abortController) {
            fetchOptions.signal = abortController.signal;
        }

        const response = await fetch(url, fetchOptions);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const contentLength = response.headers.get('content-length');
        const total = contentLength ? parseInt(contentLength) : 0;
        const estimatedSize = !total && url.includes('.json') ? 5000000 : total;
        if (!total && !estimatedSize) {
            return response;
        }

        if (!onProgress) {
            return response;
        }

        const reader = response.body.getReader();
        let loaded = 0;
        let startTime = Date.now();
        const chunks = [];

        while (true) {
            const { done, value } = await reader.read();

            if (done) break;

            chunks.push(value);
            loaded += value.length;

            const currentTime = Date.now();
            const elapsed = (currentTime - startTime) / 1000;
            const speed = elapsed > 0 ? loaded / elapsed : 0;
            const actualTotal = total || Math.max(estimatedSize, loaded * 1.1);
            onProgress(loaded, actualTotal, speed);
        }

        const allChunks = new Uint8Array(loaded);
        let position = 0;
        for (const chunk of chunks) {
            allChunks.set(chunk, position);
            position += chunk.length;
        }

        const text = new TextDecoder().decode(allChunks);

        return {
            ok: response.ok,
            status: response.status,
            headers: response.headers,
            loadedBytes: loaded,
            json: async () => JSON.parse(text),
            text: async () => text
        };
    }

    async function loadInitialData(lang = currentLanguage) {
        const fetchJson = async (url) => {
            try {
                const res = await fetch(url);
                if (!res.ok) {
                    const text = await res.text();
                    throw new Error(`HTTP ${res.status} - ${url} - Content: ${text.substring(0, 50)}...`);
                }
                return res.json();
            } catch (err) {
                console.error(`Fetch error for ${url}:`, err);
                throw err;
            }
        };

        try {
            currentLanguage = lang;
            const ts = Date.now();
            const [
                statMap,
                protoStatMap,
                itemProto,
                itemNames,
                itemIconMap,
                itemDescMap,
                langFile,
                mobNames,
                petSkills
            ] = await Promise.all([
                fetchJson(`/m2_data/${lang}/stat_map.json?v=${ts}`),
                fetchJson(`/m2_data/proto_stat_map.json?v=${ts}`),
                fetchJson(`/m2_data/item_proto.json?v=${ts}`),
                fetchJson(`/m2_data/${lang}/item_names.json?v=${ts}`),
                fetchJson(`/m2_data/item_icon.json?v=${ts}`),
                fetchJson(`/m2_data/${lang}/itemdesc.json?v=${ts}`),
                fetchJson(`/m2_data/${lang}/site_lang.json?v=${ts}`),
                fetchJson(`/m2_data/${lang}/mob_names.json?v=${ts}`),
                fetchJson(`/m2_data/${lang}/pet_skills.json?v=${ts}`),
            ]);
            window.stat_map = statMap;
            window.proto_stat_map = protoStatMap;
            window.item_proto = itemProto;
            window.item_names = itemNames;
            window.mob_names = mobNames;
            window.pet_skills = petSkills;
            STAT_MAP = statMap;
            ITEM_ICON_MAP = itemIconMap;
            ITEM_DESC_MAP = itemDescMap;
            LANG = langFile;
            window.LANG = langFile;
            applyStaticTranslations();
            buildCategoryOptions();
            buildEnchantmentOptions();
            rebuildSearchIndex();
        } catch (error) {
            console.error('Data loading error:', error);
            if ('caches' in window) {
                const names = await caches.keys();
                await Promise.all(names.map(name => caches.delete(name)));
            }

            alert('An error occurred while loading the data files. The cache has been cleared and the page will now reload.');
            location.reload();
        }
    }

    function applyStaticTranslations() {
        if (!LANG || !LANG.ui) return;
        const titleEl = document.querySelector('[data-i18n="title"]');
        if (titleEl) {
            const text = LANG.ui.title || titleEl.textContent;
            if (text.includes("Beta")) {
                titleEl.innerHTML = text.replace("Beta", '<span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Beta</span> <span class="text-[10px] font-mono text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 px-1.5 py-0.5 rounded ml-2 align-middle">v1.7</span>');
            } else {
                titleEl.innerHTML = text + ' <span class="text-[10px] font-mono text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 px-1.5 py-0.5 rounded ml-2 align-middle">v1.7</span>';
            }
        }
        const subtitleEl = document.querySelector('[data-i18n="subtitle"]');
        if (subtitleEl) subtitleEl.textContent = LANG.ui.subtitle || subtitleEl.textContent;
        const itemSearch = document.getElementById('item-search-input');
        if (itemSearch && LANG.ui.placeholders?.itemSearch) itemSearch.placeholder = LANG.ui.placeholders.itemSearch;
        const categorySearch = document.getElementById('category-search-input');
        if (categorySearch && LANG.ui.placeholders?.categorySearch) categorySearch.placeholder = LANG.ui.placeholders.categorySearch;
        const enchantSearch = document.getElementById('enchantment-search-input');
        if (enchantSearch && LANG.ui && LANG.ui.placeholders && LANG.ui.placeholders.enchantSearch) {
             enchantSearch.placeholder = LANG.ui.placeholders.enchantSearch;
        }

        const sortSelect = document.getElementById('sort-by-select');
        if (sortSelect && LANG.ui && LANG.ui.sort) {
            const opt0 = sortSelect.querySelector('option[value="fiyat-azalan"]');
            if (opt0 && LANG.ui.sort.desc) opt0.textContent = LANG.ui.sort.desc;
            const opt1 = sortSelect.querySelector('option[value="fiyat-artan"]');
            if (opt1 && LANG.ui.sort.asc) opt1.textContent = LANG.ui.sort.asc;
            const getDir = (txt, fallback) => {
                if (!txt) return fallback;
                const m = String(txt).match(/\(([^)]+)\)\s*$/);
                return (m && m[1]) ? m[1] : fallback;
            };
            const dirDesc = getDir(LANG.ui.sort.desc, 'Azalan');
            const dirAsc  = getDir(LANG.ui.sort.asc,  'Artan');
            const opt4 = sortSelect.querySelector('option[value="miktar-azalan"]');
            if (opt4 && LANG.ui.table) opt4.textContent = `${(LANG.ui.table.thCount||'Miktar')} (${dirDesc})`;
            const opt5 = sortSelect.querySelector('option[value="miktar-artan"]');
            if (opt5 && LANG.ui.table) opt5.textContent = `${(LANG.ui.table.thCount||'Miktar')} (${dirAsc})`;
            
            const opt6 = sortSelect.querySelector('option[value="birim-fiyat-artan"]');
            if (opt6 && LANG.ui.sort && LANG.ui.sort.unitPriceAsc) {
                opt6.textContent = LANG.ui.sort.unitPriceAsc;
            }
        }
        const thMap = {
            'th-image': 'thImage',
            'th-name': 'thName',
            'th-count-label': 'thCount',
            'countFilterLabel': 'thCount',
            'th-yang': 'thYang',
            'th-won': 'thWon',
            'th-seller': 'thSeller',
            'th-category': 'thCategory'
        };
        Object.entries(thMap).forEach(([id, key]) => {
            const el = document.getElementById(id);
            if (el && LANG.ui.table && LANG.ui.table[key]) el.textContent = LANG.ui.table[key];
        });
        const syncLabel = document.querySelector('[data-i18n="lastSyncLabel"]');
        if (syncLabel && LANG.ui.lastSyncLabel) syncLabel.firstChild.textContent = LANG.ui.lastSyncLabel + ' ';
        const sellerInput = document.getElementById('sellerSearchInput');
        if (sellerInput && LANG.ui.table && LANG.ui.table.thSeller) {
            sellerInput.placeholder = `${LANG.ui.table.thSeller}`;
        }
        const sellerLabel = document.querySelector('label[data-i18n="thSeller"]');
        if (sellerLabel && LANG.ui.table && LANG.ui.table.thSeller) {
            sellerLabel.textContent = LANG.ui.table.thSeller;
        }
        document.querySelectorAll('option[data-i18n], label[data-i18n], span[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (key && LANG[key]) {
                if (key === 'TOOLTIP_APPLY_ACCEDRAIN_RATE') {
                    const val = String(LANG[key]);
                    el.textContent = val.includes(':') ? val.split(':')[0] : val;
                } else {
                    el.textContent = LANG[key];
                }
            }
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            const keys = key.split('.');
            let val = LANG;
            for (const k of keys) {
                val = val ? val[k] : undefined;
            }
            
            if (val) {
                el.placeholder = val;
            } else if (key && LANG[key]) {
                el.placeholder = LANG[key];
            }
        });
        
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (key === 'UI_NO_RECORD' && LANG.UI_NO_RECORD) {
                el.textContent = LANG.UI_NO_RECORD;
            }
        });
    }

    async function changeLanguage(lang) {
        if (!lang || lang === currentLanguage) return;
        localStorage.setItem('lang', lang);
        await loadInitialData(lang);
        await buildCategoryOptions(lang);
        await buildEnchantmentOptions();
        filterAndPaginate();
        const currentServerId = document.getElementById('server-select')?.value;
        if (currentServerId) {
            await loadItemsForServer(currentServerId);
        }
        if (typeof window.renderSelectedEnchantmentsBadges === 'function') {
            window.renderSelectedEnchantmentsBadges();
        }
        if (typeof window.rebuildSlotList === 'function') {
            window.rebuildSlotList();
        }
    }

    async function init() {
        await loadInitialData(currentLanguage);

        const lastServerId = localStorage.getItem('lastServerId') || '433';
        document.getElementById('server-select').value = lastServerId;
        await loadItemsForServer(lastServerId);

        document.getElementById('server-select').addEventListener('change', e => {
            if (downloadController) {
                downloadController.abort();
                hideLoadingProgress();
            }
            loadItemsForServer(e.target.value);
        });
        const itemSearchInput = document.getElementById('item-search-input');
        const clearSearchBtn = document.getElementById('clear-search-btn');

        if (itemSearchInput) {
            const clearItemSearch = (event) => {
                if (event) {
                    event.stopPropagation();
                    event.preventDefault();
                }
                itemSearchInput.value = '';
                clearSearchBtn.classList.add('hidden');
                itemSearchInput.focus();
                scheduleFilter(140);
            };

            if(clearSearchBtn) {
                clearSearchBtn.addEventListener('click', clearItemSearch);
            }

            itemSearchInput.addEventListener('input', (e) => {
                if (e.target.value.trim()) {
                    if(clearSearchBtn) clearSearchBtn.classList.remove('hidden');
                } else {
                    if(clearSearchBtn) clearSearchBtn.classList.add('hidden');
                }
                scheduleFilter(350);
            });
            if (itemSearchInput.value.trim()) {
                if(clearSearchBtn) clearSearchBtn.classList.remove('hidden');
            } else {
                if(clearSearchBtn) clearSearchBtn.classList.add('hidden');
            }
        }
        
        const catFilterSelect = document.getElementById('category-filter-select');
        if(catFilterSelect) {
            catFilterSelect.addEventListener('change', filterAndPaginate);
        }

        const sortBySel = document.getElementById('sort-by-select');
        if (sortBySel) {
            sortBySel.addEventListener('change', e => {
                localStorage.setItem('lastSortBy', e.target.value);
                filterAndPaginate();
            });
        }

        const lastSortBy = localStorage.getItem('lastSortBy');
        const sel = document.getElementById('sort-by-select');
        if (sel) {
            if (lastSortBy) {
                const removed = lastSortBy === 'fiyat-azalan-miktar' || lastSortBy === 'fiyat-artan-miktar';
                const valueToUse = removed ? 'fiyat-azalan' : lastSortBy;
                const changed = sel.value !== valueToUse;
                sel.value = valueToUse;
                if (removed) localStorage.setItem('lastSortBy', 'fiyat-azalan');
                if (changed) filterAndPaginate();
            } else {
                localStorage.setItem('lastSortBy', sel.value);
            }
        }
        const storedLang = localStorage.getItem('lang') || 'tr';
        if (storedLang !== currentLanguage) {
            await changeLanguage(storedLang);
        }

        setupEnchantmentSelector();
        setupPriceFilter();
        setupPetFilter();
        setupSashFilter();
        setupDaysFilter();
        setupPlusFilter();
        setupLevelFilter();
        setupSellerFilter();
        setupCountFilter();
        setupCategorySearchSelectAll();
        loadEnchantPresets();
        renderEnchantPresets();
        setupSlotButtons();
    }
    const resetPlusBtn = document.getElementById('resetPlusFilterBtn');
    if(resetPlusBtn){
        resetPlusBtn.addEventListener('click', resetPlusFilter);
    }
    const resetLevelBtn = document.getElementById('resetLevelFilterBtn');
    if(resetLevelBtn){
        resetLevelBtn.addEventListener('click', resetLevelFilter);
    }

    let slotCount = 0;
    function setupSlotButtons(){
        const toggleBtn = document.getElementById('toggleSlotsBtn');
        const dropdown = document.getElementById('slotDropdown');
        const slotList = document.getElementById('slotList');
        const saveBtn = document.getElementById('saveNewSlotBtn');
        const badge = document.getElementById('slotCountBadge');
        const container = document.getElementById('slotDropdownContainer');

        if(!toggleBtn || !dropdown || !slotList) return;

        window.rebuildSlotList = () => {
            slotList.innerHTML = '';
            const savedCount = Array.isArray(enchantPresets) ? enchantPresets.length : 0;
            
            if(badge) {
                badge.textContent = savedCount;
                badge.style.display = savedCount > 0 ? 'inline-block' : 'none';
            }

            if (savedCount === 0) {
                slotList.innerHTML = `<div class="text-xs text-gray-500 p-3 text-center italic">${LANG.UI_NO_RECORD || 'Kayıt yok'}</div>`;
                return;
            }
            const searchInput = document.getElementById('slotSearchInput');
            const locale = getLocaleForLanguage(currentLanguage);
            const searchTerm = searchInput ? searchInput.value.toLocaleLowerCase(locale).trim() : '';
            const filteredPresets = searchTerm 
                ? enchantPresets.filter((preset, i) => {
                    const presetName = (preset.name || `Set ${i+1}`).toLocaleLowerCase(locale);
                    return presetName.includes(searchTerm);
                })
                : enchantPresets;

            if (filteredPresets.length === 0 && searchTerm) {
                slotList.innerHTML = '<div class="text-xs text-gray-500 p-3 text-center italic">Arama sonucu bulunamadı</div>';
                return;
            }

            const fragment = document.createDocumentFragment();

            filteredPresets.forEach((preset, filteredIndex) => {
                const originalIndex = enchantPresets.indexOf(preset);
                const i = originalIndex;
                const item = document.createElement('div');
                item.className = 'flex items-center justify-between bg-slate-700/50 hover:bg-slate-700 rounded p-2 transition-colors group';
                const labelBtn = document.createElement('div');
                labelBtn.className = 'flex-1 flex flex-col cursor-pointer relative mr-2 min-w-0';
                if (preset.ench && preset.ench.length > 0) {
                    labelBtn.setAttribute('data-tooltip', JSON.stringify({
                        name: preset.name || `Set ${i+1}`,
                        enchantments: preset.ench
                    }));
                    labelBtn.classList.add('slot-tooltip-trigger');
                }

                labelBtn.onclick = (e) => {
                    if(e.target.tagName === 'INPUT') return;
                    
                    selectedEnchantments = (preset.ench || []).map(o=>({id:String(o.id), minValue:Number(o.minValue||0)}));
                    if(typeof window.renderSelectedEnchantmentsBadges === 'function'){
                        window.renderSelectedEnchantmentsBadges();
                    }
                    filterAndPaginate();
                    dropdown.classList.add('hidden');
                };

                const nameSpan = document.createElement('span');
                nameSpan.className = 'text-sm text-gray-200 font-medium truncate hover:text-indigo-300 flex items-center gap-2 group/edit';
                nameSpan.textContent = preset.name || `Set ${i+1}`;
                
                const editIcon = document.createElement('span');
                editIcon.className = 'text-indigo-400 text-xs opacity-70 group-hover/edit:opacity-100 transition-all hover:scale-110 cursor-pointer bg-slate-800/50 px-1.5 py-0.5 rounded border border-indigo-500/30';
                editIcon.innerHTML = '✎';
                editIcon.title = 'İsmi Değiştir';
                nameSpan.appendChild(editIcon);

                const startEditing = (e) => {
                    e.stopPropagation();
                    const currentName = preset.name || `Set ${i+1}`;
                    const input = document.createElement('input');
                    input.type = 'text';
                    input.value = currentName;
                    input.className = 'bg-slate-900 text-white text-sm px-2 py-1 rounded border border-indigo-500 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500/50 shadow-lg';
                    input.onclick = (ev) => ev.stopPropagation(); 
                    
                    const saveName = () => {
                        const newName = input.value.trim();
                        if(newName && newName !== currentName) {
                            enchantPresets[i].name = newName;
                            saveEnchantPresets();
                        }
                        window.rebuildSlotList();
                    };

                    input.addEventListener('blur', saveName);
                    input.addEventListener('keydown', (ev) => {
                        if(ev.key === 'Enter') {
                            saveName();
                        }
                    });

                    labelBtn.innerHTML = ''; 
                    labelBtn.appendChild(input);
                    input.focus();
                };
                editIcon.onclick = startEditing;

                const detailSpan = document.createElement('span');
                detailSpan.className = 'text-[10px] text-gray-400 truncate mt-0.5';
                const enchCount = preset.ench ? preset.ench.length : 0;
                const enchantText = (window.LANG && window.LANG.UI_ENCHANT ? window.LANG.UI_ENCHANT : 'efsun').toLowerCase();
                detailSpan.textContent = `${enchCount} ${enchantText}`;

                labelBtn.appendChild(nameSpan);
                labelBtn.appendChild(detailSpan);

                const delBtn = document.createElement('button');
                delBtn.className = 'w-6 h-6 flex items-center justify-center text-gray-400 hover:text-red-400 hover:bg-red-900/20 rounded transition-colors ml-2';
                delBtn.innerHTML = '✕';
                delBtn.onclick = (e) => {
                    e.stopPropagation();
                    enchantPresets.splice(i, 1);
                    saveEnchantPresets();
                    window.rebuildSlotList();
                };

                item.appendChild(labelBtn);
                item.appendChild(delBtn);
                fragment.appendChild(item);
            });
            slotList.appendChild(fragment);
        };

        let currentTooltip = null;
        if(slotList) {
            slotList.addEventListener('mouseover', (e) => {
                if (window.innerWidth < 1024) return;

                const trigger = e.target.closest('.slot-tooltip-trigger');
                if (!trigger) {
                    if (currentTooltip) {
                        currentTooltip.remove();
                        currentTooltip = null;
                    }
                    return;
                }
                
                if (currentTooltip && currentTooltip._triggerElement === trigger) return;
                
                if (currentTooltip) {
                    currentTooltip.remove();
                    currentTooltip = null;
                }

                try {
                    const tooltipData = JSON.parse(trigger.getAttribute('data-tooltip'));
                    const tooltip = document.createElement('div');
                    tooltip._triggerElement = trigger;
                    tooltip.className = 'fixed z-[9999] min-w-[200px] max-w-[280px] bg-slate-800/95 backdrop-blur-md text-xs text-gray-100 rounded-xl shadow-2xl border border-slate-600/50 pointer-events-none animate-fade-in';
                    
                    const content = document.createElement('div');
                    content.className = 'p-4';

                    const title = document.createElement('div');
                    title.className = 'text-indigo-400 font-semibold mb-3 text-sm border-b border-slate-700/50 pb-2';
                    title.textContent = tooltipData.name;
                    content.appendChild(title);

                    tooltipData.enchantments.forEach(ench => {
                        const enchDiv = document.createElement('div');
                        enchDiv.className = 'mb-2 last:mb-0 flex items-center justify-between py-1';
                        const statLabel = getStatLabel(ench.id);
                        const minVal = ench.minValue || 0;
                        enchDiv.innerHTML = `<span class="text-slate-300">${statLabel}</span> <span class="text-emerald-400 font-medium">≥ ${minVal}</span>`;
                        content.appendChild(enchDiv);
                    });

                    tooltip.appendChild(content);
                    document.body.appendChild(tooltip);
                    
                    const rect = trigger.getBoundingClientRect();
                    const tooltipRect = tooltip.getBoundingClientRect();
                    
                    let top = rect.top;
                    let left = rect.left - tooltipRect.width - 8; 
                    
                    if (left < 5) {
                        left = rect.right + 8;
                    }
                    
                    if (top + tooltipRect.height > window.innerHeight - 10) {
                        top = window.innerHeight - tooltipRect.height - 10;
                    }
                    
                    tooltip.style.top = top + 'px';
                    tooltip.style.left = left + 'px';

                    currentTooltip = tooltip;
                } catch (err) {
                    console.error('Tooltip parse error', err);
                }
            });

            slotList.addEventListener('mouseout', (e) => {
                const trigger = e.target.closest('.slot-tooltip-trigger');
                if (trigger && e.relatedTarget && trigger.contains(e.relatedTarget)) return;
                
                if (currentTooltip) {
                    currentTooltip.remove();
                    currentTooltip = null;
                }
            });
        }

        toggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();

            const pricePopup = document.getElementById('priceFilterPopup');
            if(pricePopup) {
                pricePopup.classList.add('hidden');
                pricePopup.style.display = '';
            }
            const petPopup = document.getElementById('petFilterPopup');
            if(petPopup) {
                petPopup.classList.add('hidden');
                petPopup.style.display = '';
            }
            const sashPopup = document.getElementById('sashFilterPopup');
            if(sashPopup) {
                sashPopup.classList.add('hidden');
                sashPopup.style.display = '';
            }

            const isHidden = dropdown.classList.toggle('hidden');
            
            if (!isHidden) {
                if (window.innerWidth < 640) {
                    setTimeout(() => {
                        const toggleRect = toggleBtn.getBoundingClientRect();
                        const popupWidth = dropdown.offsetWidth || 256;
                        const left = (window.innerWidth - popupWidth) / 2;
                        const top = toggleRect.bottom + 16;
                        
                        dropdown.style.position = 'fixed';
                        dropdown.style.left = `${left}px`;
                        dropdown.style.top = `${top}px`;
                        dropdown.style.transform = 'translateX(0)';
                        dropdown.style.marginTop = '0';
                        dropdown.style.zIndex = '9999';
                    }, 10);
                } else {
                    dropdown.style.position = '';
                    dropdown.style.left = '';
                    dropdown.style.top = '';
                    dropdown.style.transform = '';
                    dropdown.style.marginTop = '';
                    dropdown.style.zIndex = '';
                }
                
                setTimeout(() => {
                    const searchInput = document.getElementById('slotSearchInput');
                    if(searchInput) searchInput.focus();
                }, 100);
            }
        });

        const slotSearchInput = document.getElementById('slotSearchInput');
        if(slotSearchInput) {
            slotSearchInput.addEventListener('input', () => {
                window.rebuildSlotList();
            });
        }
        document.addEventListener('click', (e) => {
            if(container && !container.contains(e.target)){
                dropdown.classList.add('hidden');
            }
        });

        window.rebuildSlotList();
    }

    async function loadItemsForServer(serverId) {
        try {
            if (downloadController) {
                downloadController.abort();
            }
            downloadController = new AbortController();
            allItemsData = [];
            filteredItems = [];
            const paginationControls = document.getElementById('pagination-controls');
            if(paginationControls) paginationControls.innerHTML = '';

            showLoadingProgress();
            renderSkeleton();   
            const syncTimeResponse = await fetch(`getLastSyncTime.php?serverId=${serverId}`, {
                signal: downloadController.signal
            }).then(res => {
                if (!res.ok) throw new Error('Son eşitleme zamanı alınamadı');
                return res.json();
            });

            const onProgress = (loaded, total, speed) => {
                const actualTotal = syncTimeResponse.fileSize || total;
                updateProgress(loaded, actualTotal, speed);
            };
            const randomParam = Math.floor(Math.random() * 1000000);
            const itemsResponse = await fetchWithProgress(`public/data/${serverId}.json?v=${Date.now()}&r=${randomParam}`, onProgress, downloadController);
            const expectedSize = syncTimeResponse.fileSize;
            const actualSize = itemsResponse.loadedBytes || parseInt(itemsResponse.headers.get('content-length') || '0');
            allItemsData = (await itemsResponse.json()).map(prettifyItem);
            

            hideLoadingProgress();
            const serverNameMap = {
                51: 'Dandanakan',
                57: 'Barbaros',
                59: 'Ezel',
                409: 'Marmara',
                413: 'Arkadaşlar',
                418: 'Bagjanamu',
                426: '[RUBY] Charon',
                431: '[RUBY] Lucifer',
                433: '[ONYX] Bazalt',
                435: 'Zephyr',
                436: '[SAPPHIRE] Safir',
                437: '[SAPPHIRE] Star',
                438: 'Lodos',
                439: 'Fırtına',
                540: '[SAPPHIRE] Oceana',
                541: 'Nyx',
                // 537: '[ONYX] Obsidian',
                // 539: 'Eostre',
                502: 'Europe',
                503: 'Italia',
                506: 'Iberia',
                523: 'Azrael',
                524: 'Tigerghost',
                531: '[RUBY] Chimera',
                534: '[EMERALD] Aurora',
                70: 'Germania',
                71: 'Teutonia',
                599: 'România',
                54: 'Tara Româneascã',
                700: 'Magyarország',
                701: 'Česko',
                702: 'Polska',
                723: '[RUBY] Kirin',
                731: 'Willow',
                732: '[SAPPHIRE] Azure',
                733: 'Chione',
            };
            const optionElement = document.getElementById(`serverOption${serverId}`);
            if (optionElement) {
                const serverName = serverNameMap[serverId] || 'Sunucu';
                optionElement.textContent = `${serverName} (${allItemsData.length})`;
            }
            enrichItemsWithProto();
            filterAndPaginate();
            const lastSyncTimeElement = document.getElementById('lastSyncTime');
            if (syncTimeResponse.success && syncTimeResponse.lastSync) {
                lastSyncTimeElement.textContent = syncTimeResponse.lastSync;
            } else {
                lastSyncTimeElement.textContent = 'Bilinmiyor';
                console.error('Son eşitleme zamanı hatası:', syncTimeResponse.message || 'Bilinmeyen hata');
            }
            localStorage.setItem('lastServerId', serverId);
        } catch (error) {
            hideLoadingProgress();

            if (error.name === 'AbortError') {
                return;
            }

            console.error('Sunucu verisi veya eşitleme zamanı yükleme hatası:', error);

            let errorMessage = error.message;
            if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
                errorMessage = 'Ağ bağlantısı hatası. İnternet bağlantınızı kontrol edin.';
            }

            alert('Veriler yüklenirken bir hata oluştu: ' + errorMessage);
            document.getElementById('lastSyncTime').textContent = 'Hata';
        }
    }

    function getCategoryName(categoryId) {
        if (LANG && LANG.categories) {
            if (LANG.categories[categoryId] !== undefined) return LANG.categories[categoryId];
            return categoryId || '';
        }
        const categoryMap = {
            '0-1-0': 'Binekler', '0-1-1': 'Petler', '0-1-2': 'Seviye Atlayabilen Petler', '0-1-3': 'Pet Yumurtaları',
            '0-2-0': 'Savaşçı Kılıç', '0-2-3': 'Savaşçı Çiftel', '1-2-1': 'Ninja Hançer', '1-2-2': 'Ninja Yay',
            '2-2-0': 'Sura Kılıç', '3-2-4': 'Şaman Çan', '3-2-6': 'Şaman Yelpaze', '4-2-5': 'Lycan Pençe',
            '0-3-0': 'Savaşçı Zırh', '0-3-1': 'Savaşçı Miğfer', '1-3-0': 'Ninja Zırh', '1-3-1': 'Ninja Miğfer',
            '2-3-0': 'Sura Zırh', '2-3-1': 'Sura Miğfer', '3-3-0': 'Şaman Zırh', '3-3-1': 'Şaman Miğfer',
            '4-3-0': 'Lycan Zırh', '4-3-1': 'Lycan Miğfer', '0-3-2': 'Kalkan', '0-3-3': 'Eldiven',
            '0-4-0': 'Bilezik', '0-4-1': 'Ayakkabı', '0-4-2': 'Kolye', '0-4-3': 'Küpe', '0-4-4': 'Kemer',
            '0-4-5': 'Tılsım', '0-5-0': 'Malzeme', '0-5-1': 'Zihin Taşı', '0-5-2': 'Diğer Geliştirmeler',
            '0-5-3': 'Başarı Şansı', '0-6-0': 'Kullanım Malları', '0-6-1': 'Saç Rengi', '0-6-2': 'KullanimDigerleri',
            '0-7-0': 'Olta', '0-7-1': 'Kazma', '0-7-2': 'Balık', '0-7-3': 'Cevher', '0-7-4': 'Diğer',
            '0-8-0': 'Elmas', '0-8-1': 'Yakut', '0-8-2': 'Yeşim', '0-8-3': 'Safir', '0-8-4': 'Grena',
            '0-8-5': 'Oniks', '0-8-6': 'Ametist', '0-8-7': 'Diğer Taş', '0-9-0': 'Savaşçı Kostüm',
            '1-9-0': 'Ninja Kostüm', '3-9-0': 'Şaman Kostüm', '4-9-0': 'Lycan Kostüm', '0-9-1': 'Kostüm',
            '0-9-2': 'Saç Modeli', '0-9-3': 'Omuz Kuşağı', '0-9-4': 'Diğer Kostüm', '0-9-5': 'Aura Giysi',
            '0-10-0': 'Misilleme/Güçlendirme', '0-10-1': 'Savaşçı Beceri Kitabı', '1-10-1': 'Ninja Beceri Kitabı',
            '2-10-1': 'Sura Beceri Kitabı', '3-10-1': 'Şaman Beceri Kitabı', '4-10-1': 'Lycan Pençe',
            '0-10-2': 'Misilleme/Güçlendirme', '0-10-3': 'Unutkanlık Kitabı', '0-10-4': 'Diğer Beceri',
            '0-11-0': 'Tüketim Malı', '0-11-1': 'Diğer Özel', '0-12-0': 'Sandık/Kutu', '0-12-1': 'Düğün',
            '0-12-2': 'Etkinlik Eşyası', '0-12-3': 'Ruh Bağlama', '0-12-4': 'Savaş Beceri Kitabı',
            '0-12-5': 'Dönüşüm Küresi', '0-12-6': 'İksir Oluşturma', '0-12-7': 'Diğer'
        };
        return categoryMap[categoryId] || categoryId || '';
    }

    function buildCategoryOptions() {
        const optionsWrapper = document.getElementById('category-options');
        if (!optionsWrapper) return;
        optionsWrapper.innerHTML = '';
        const allLabel = (LANG && LANG.ui && LANG.ui.categoriesAll)
            ? LANG.ui.categoriesAll
            : (LANG && LANG.categories && LANG.categories[''])
                ? LANG.categories['']
                : 'Tüm Kategoriler';
        const allDiv = document.createElement('div');
        allDiv.className = 'px-3 py-2 hover:bg-gray-600 cursor-pointer text-sm';
        allDiv.dataset.value = '';
        allDiv.textContent = allLabel;
        optionsWrapper.appendChild(allDiv);
        if (LANG && LANG.categories) {
            Object.entries(LANG.categories).forEach(([key, val]) => {
                if (key === '') return;
                const div = document.createElement('div');
                div.className = 'px-3 py-2 hover:bg-gray-600 cursor-pointer text-sm';
                div.dataset.value = key;
                div.textContent = val;
                optionsWrapper.appendChild(div);
            });
        }
        Array.from(optionsWrapper.children).forEach(option => {
            option.addEventListener('click', () => {
                const searchInput = document.getElementById('category-search-input');
                const hiddenSelect = document.getElementById('category-filter-select');
                const clearCategoryBtn = document.getElementById('clear-category-btn');
                searchInput.value = option.textContent;
                hiddenSelect.value = option.dataset.value;
                optionsWrapper.classList.add('hidden');
                if (clearCategoryBtn && searchInput.value.trim()) {
                    clearCategoryBtn.classList.remove('hidden');
                }
                checkAutoLevelSelection(option.dataset.value);

                filterAndPaginate();
            });
        });
    }
    function setupCategorySearchSelectAll(){
        const catInput = document.getElementById('category-search-input');
        const hiddenSelect = document.getElementById('category-filter-select');
        const optionsWrapper = document.getElementById('category-options');
        if(!catInput) return;
        const selectAllIfChosen = () => {
            if(hiddenSelect && hiddenSelect.value){
                catInput.select();
                const onMouseUpOnce = (ev) => { ev.preventDefault(); catInput.removeEventListener('mouseup', onMouseUpOnce); };
                catInput.addEventListener('mouseup', onMouseUpOnce);
            }
        };
        const onInput = () => {
            const val = catInput.value.trim();
            if(val === ''){
                if(hiddenSelect) hiddenSelect.value = '';
                if(optionsWrapper){
                    Array.from(optionsWrapper.children).forEach(opt => opt.style.display = 'block');
                    optionsWrapper.classList.remove('hidden');
                }
                filterAndPaginate();
            }
        };

        catInput.addEventListener('focus', selectAllIfChosen);
        catInput.addEventListener('click', selectAllIfChosen);
        catInput.addEventListener('input', onInput);
    }

    function prettifyItem(item) {
        const locale = getLocaleForLanguage(currentLanguage);
        const enchantments = [];
        const isEpicAll = typeof item.vnum === 'number' && item.vnum >= 110000 && item.vnum <= 175460;
        item.name = window.item_names[String(item.vnum)];
        (item.attrs || []).forEach(([stat, val]) => {
            if (!stat) return;
            const tmpl = STAT_MAP[String(stat)];
            if (!tmpl) return;
            let rarity = '';
            if (stat == 217 || isEpicAll || (CUSTOM_RARITY_THRESHOLDS[stat] !== undefined && CUSTOM_RARITY_THRESHOLDS[stat] === 0)) {
                rarity = 'epic';
            } else if (val < 0) {
                rarity = '';
            } else if (CUSTOM_RARITY_THRESHOLDS[stat] !== undefined) {
                if (Math.abs(val) >= CUSTOM_RARITY_THRESHOLDS[stat]) {
                    rarity = 'epic';
                } else if (Math.abs(val) >= CUSTOM_RARITY_THRESHOLDS[stat] * 0.65) {
                    rarity = 'rare';
                }
            } else {
                rarity = Math.abs(val) >= 20 ? 'epic' : Math.abs(val) >= 10 ? 'rare' : '';
            }
            const txt = tmpl.replace(/%%/g, '%').replace('%d', val);
            enchantments.push({text: txt, rarity, statId: stat, value: Number(val), __textLower: txt.toLocaleLowerCase(locale)});
        });
        const randEnchantments = (item.rand || []).map(([stat, val]) => {
            if (!stat) return null;
            const tmpl = STAT_MAP[String(stat)];
            if (!tmpl) return null;
            const txt = tmpl.replace(/%%/g, '%').replace('%d', val);
            return {text: txt, rarity: '', statId: stat, value: Number(val)};
        }).filter(Boolean);
        item.randEnchantments = randEnchantments;
        item.petInfoTooltip = null;
        if (Array.isArray(item.petInfo) && item.petInfo.length >= 3) {
            const [petVnum, petType, getPet, petSkill, petPotential] = item.petInfo;
            const lines = [];
            if (Array.isArray(getPet)) {
                const baseLevel     = getPet[0];
                const evolvedLevel  = getPet[1];
                const petTypeNum    = petType;
                const createdTs     = getPet[3];     
                const ownerName     = getPet[4];    
                const statA         = getPet[5];    
                const statB         = getPet[6];    
                const statC         = getPet[7];      
            item.__petHp = Number(statA) || 0;
            item.__petDef = Number(statB) || 0;
            item.__petSp = Number(statC) || 0;

            const now = Date.now();
            let effectiveCreatedTs = createdTs;

            if (Array.isArray(item.sockets) && item.sockets.length > 1 && item.sockets[1]) {
                const socketTime = Number(item.sockets[1]);
                if (!isNaN(socketTime) && socketTime > 0) {
                    const nowSec = Math.floor(now / 1000);
                    const diffFromNow = socketTime - nowSec;
                    effectiveCreatedTs = createdTs - diffFromNow;
                }
            }

            const diffMs = now - (effectiveCreatedTs * 1000);
            const diffDays = Math.max(1, Math.floor(diffMs / (1000 * 60 * 60 * 24)));
                const dayUnit = (LANG && LANG.ui && LANG.ui.durationUnits && LANG.ui.durationUnits.day) ? LANG.ui.durationUnits.day : 'g';
                let shownLevel = '';
                let levelColor = '';
                if (evolvedLevel > 0) {
                    shownLevel = evolvedLevel;
                    levelColor = '#8acdff';
                } else {
                    shownLevel = baseLevel;
                    levelColor = '#86efac';
                }
                const typeKey = `PET_ATTR_DETERMINE_TYPE${petTypeNum}`;
                const typeText = (LANG && LANG[typeKey]) || `Tip ${petTypeNum}`;
                lines.push(`<div class="text-yellow-300 font-semibold text-center text-sm">${ownerName} (${typeText})</div>`);
                lines.push(`<div class="mt-1 text-green-300 font-semibold text-center text-xs" style="color:${levelColor}">Lv ${shownLevel} (${diffDays}${dayUnit})</div>`);
                lines.push(`<div class="mt-1 text-red-300 font-semibold text-center text-xs">${LANG.PET_TOOLTIP_HP || 'HP'}: +${statA}%</div>`);
                lines.push(`<div class="text-green-300 font-semibold text-center text-xs">${LANG.PET_TOOLTIP_DEF || 'Defans'}: +${statB}%</div>`);
                lines.push(`<div class="text-blue-300 font-semibold text-center text-xs">${LANG.PET_TOOLTIP_SP || 'SP'}: +${statC}%</div>`);
                item.__petType   = petTypeNum;
                item.__petLevel  = shownLevel;
                item.__petEvolved = evolvedLevel > 0;
                item.__petDays   = diffDays;
                item.__petDayUnit = dayUnit;
            }

            if (Array.isArray(petSkill) && petSkill.length > 0 && (petSkill[1] !== 0 || petSkill[4] !== 0 || petSkill[7] !== 0)) {
                lines.push(`<div class="mt-2 text-orange-300 font-semibold text-center text-xs">Beceriler</div>`);
                const champFSkills  = Number(getPet[9]  || 0);
                const champTSkills  = Number(getPet[10] || 0);
                const champThSkills = Number(getPet[11] || 0);
                const formatChampVal = (v) => {
                    const n = Number(v);
                    if (!Number.isFinite(n)) return v;
                    return Number.isInteger(n) ? String(n) : n.toFixed(1);
                };
                champFSkills  > 0 && lines.push(`<div class="mt-1 text-green-300 font-semibold text-center text-xs">Skill 1#(${formatChampVal(champFSkills)})</div>`);
                champTSkills  > 0 && lines.push(`<div class="mt-1 text-green-300 font-semibold text-center text-xs">Skill 2#(${formatChampVal(champTSkills)})</div>`);
                champThSkills > 0 && lines.push(`<div class="mt-1 text-green-300 font-semibold text-center text-xs">Skill 3#(${formatChampVal(champThSkills)})</div>`);
                for (let i = 0; i + 2 < petSkill.length; i += 3) {
                    const skillId = petSkill[i + 1];  
                    const skillLv = petSkill[i + 2];  
                    if (!skillId || !skillLv) continue;
                    const skillName = (window.pet_skills && window.pet_skills[String(skillId)]) || `Skill #${skillId}`;
                    lines.push(`<div class="mt-1 text-green-300 font-semibold text-center text-xs">${skillName} (${skillLv})</div>`);
                }
            }
            if (Array.isArray(petPotential) && petPotential.length > 0) {
                lines.push(`<div class="mt-2 text-orange-300 font-semibold text-center text-xs">Potansiyel Beceri</div>`);
                petPotential.forEach((row, idx) => {
                    if (!Array.isArray(row) || row.length < 2) return;
                    const skillVnum = row[1];
                    const skillLv   = row[2];
                    const skillName = (window.pet_skills && window.pet_skills[String(skillVnum)]) || `Skill item ${skillVnum}`;
                    lines.push(`<div class="mt-1 text-yellow-300 font-semibold text-center text-xs">${skillName} (${skillLv})</div>`);
                });
            }
            if (lines.length > 0) {
                item.petInfoTooltip = lines;
            }
        }
        let iconFileName;
        if (typeof item.vnum === 'number' && item.vnum >= 110000 && item.vnum <= 175460 && String(item.vnum).length === 6) {
            const roundedVnum = Math.floor(item.vnum / 100) * 100;
            iconFileName = ITEM_ICON_MAP[roundedVnum] || `${roundedVnum}.png`;
        } else {
            iconFileName = ITEM_ICON_MAP[item.vnum] || 'dummy.png';
        }
        item.imgSrc = `/m2_data/icons/${iconFileName}`;
        item.enchantments = enchantments;
        const jobId = item.job || 0;
        const rawCategoryCode = `${jobId}-${item.category}`;
        const categoryKey = rawCategoryCode;
        item.categoryId   = categoryKey;
        item.categoryCode = item.category;
        item.category = getCategoryName(categoryKey) || getCategoryName(item.category) || 'belirsiz';
        const elementMap = {
            99: 'Şimşek', 100: 'Ateş', 101: 'Buz', 102: 'Rüzgar', 103: 'Toprak', 104: 'Karanlık'
        };
        const renkler = {
            99: 'sky-400', 100: 'red-800', 101: 'blue-700', 102: 'green-600', 103: 'yellow-700', 104: 'purple-800'
        };
        const weaponCategoryCodes = [
            '0-2-0', '0-2-3', '1-2-1', '1-2-2', '2-2-0', '3-2-4', '3-2-6', '4-2-5'
        ];
        let elementName = '';
        let elementColor = '';
        if (weaponCategoryCodes.includes(rawCategoryCode)) {
            if (Array.isArray(item.elem) && item.elem.length > 1 && Array.isArray(item.elem[1]) && STAT_MAP[item.elem[0]]) {
                const elemId = item.elem[0];
                const firstArr = item.elem[1];
                const sum = firstArr.reduce((a, b) => a + b, 0);
                let fullName = STAT_MAP[elemId];
                fullName = fullName.replace(/\s*\+%d.*$/, '').replace(/\s*%d.*$/, '');
                elementName = `${fullName} ${sum} (${firstArr.join(',')})`;
                elementColor = renkler[elemId];
            } else {
                for (const [stat, val] of (item.attrs || [])) {
                    if ([99, 100, 101, 102, 103, 104].includes(stat) && STAT_MAP[stat]) {
                        let fullName = STAT_MAP[stat];
                        fullName = fullName.replace(/\s*\+%d.*$/, '').replace(/\s*%d.*$/, '');
                        elementName = fullName;
                        elementColor = renkler[stat] || '';
                        break;
                    }
                }
            }
        }
        const sets = (LANG && LANG.sets) ? LANG.sets : {
            1: 'Kutsal',
            2: 'Görkemli',
            3: 'Kahraman',
            4: 'Soylu',
            5: 'Heybetli'
        };
        if (item.set && item.set > 0 && sets[item.set]) {
            item.name = `${sets[item.set]} ${item.name}`;
        }
        item.yang = item.yangPrice || 0;
        item.won = item.wonPrice || 0;
        item.count = item.quantity || 1;
        item.name = item.name || 'Bilinmeyen Eşya';
        if (elementName && elementColor) {
            item.name += ` <span class='text-${elementColor} font-bold'>${elementName}</span>`;
        }
        item.seller = item.seller || 'Bilinmeyen Satıcı';
        item.elementName = elementName;
        if (item.vnum >= 110000 && item.vnum <= 175499) {
            const vnumStr = String(item.vnum).padStart(6, '0');
            item.name = window.item_names[String(Math.floor(item.vnum / 100) * 100)];
            const son3 = parseInt(vnumStr.slice(-3));
            let kalite = '';
            const q = (LANG && LANG.qualities) ? LANG.qualities : {};
            if (son3 >= 0 && son3 <= 99) kalite = q.Mat || 'Mat';
            else if (son3 >= 100 && son3 <= 199) kalite = q.Parlak || 'Parlak';
            else if (son3 >= 200 && son3 <= 299) kalite = q.Tertemiz || 'Tertemiz';
            else if (son3 >= 300 && son3 <= 399) kalite = q.Mukemmel || q.Mükemmel || 'Mükemmel';
            else if (son3 >= 400 && son3 <= 499) kalite = q.Kusursuz || 'Kusursuz';
            if (kalite) item.name = `${kalite} ${item.name}`;
        }
        if (item.vnum === 70104 &&  Array.isArray(item.sockets) &&  item.sockets[0] && window.mob_names?.[item.sockets[0]]) {
            item.name = `${window.mob_names[item.sockets[0]]} ${item.name}`;
        }
        item.__namePlain = String(item.name || '').replace(/<[^>]*>/g,'').trim();
        item.__nameLower = item.__namePlain.toLocaleLowerCase(locale);
        const plusMatches = [...item.__namePlain.matchAll(/\+(\d{1,3})/g)];
        item.__plus = plusMatches.length > 0 ? parseInt(plusMatches[plusMatches.length - 1][1], 10) : 0;
        item.__totalPrice = (item.won || 0) * 100000000 + (item.yang || 0);
        const attrsKey = Array.isArray(item.attrs) ? item.attrs.map(p => Array.isArray(p) ? (p[0]+':'+p[1]) : '').join(';') : '';
        const randKey  = Array.isArray(item.randEnchantments) ? item.randEnchantments.map(e => `${e.statId}:${e.value}`).join(';') : '';
        const sellerKey = String(item.seller||'').trim().toLowerCase();
        item.__dedupKey = `${item.vnum}|${item.won||0}|${item.yang||0}|${item.quantity||1}|${sellerKey}|${randKey}|${attrsKey}`;
        return item;
    }

    function getItemRequiredLevel(it){
        let lv = null;
        if(it && (it.LimitType0==='LEVEL' || it.LimitType0==='PC_LEVEL')){
            lv = Math.max(0, Number(it.LimitValue0) || 0);
        }
        if(it && (it.LimitType1==='LEVEL' || it.LimitType1==='PC_LEVEL')){
            lv = Math.max(lv ?? 0, Number(it.LimitValue1) || 0);
        }
        if(lv != null && !Number.isFinite(lv)) lv = 0;
        return lv;
    }

    function filterAndPaginate() {
        const searchInputEl = document.getElementById('item-search-input');
        const categoryFilterEl = document.getElementById('category-filter-select');
        const sortByEl = document.getElementById('sort-by-select');

        const locale = getLocaleForLanguage(currentLanguage);
        const searchTerm = searchInputEl ? searchInputEl.value.toLocaleLowerCase(locale) : '';
        const categoryFilter = categoryFilterEl ? categoryFilterEl.value : '';
        const sortBy = sortByEl ? sortByEl.value : 'fiyat-azalan';
        
        const minPlus = plusFilter.min;
        const maxPlus = plusFilter.max;
        filteredItems = allItemsData.filter(item => {
            const matchesSearch = !searchTerm ||
                (item.__nameLower || '').includes(searchTerm) ||
                item.enchantments.some(ench => (ench.__textLower || '').includes(searchTerm));
            const matchesCategory = !categoryFilter || item.categoryId === categoryFilter;
            const matchesEnchantments = selectedEnchantments.length === 0 ||
                selectedEnchantments.every(sel => {
                    const min = Number(sel.minValue || 0);
                    const okFixed = item.enchantments.some(ench => ench.statId == sel.id && Number(ench.value) >= min);
                    const okRand  = (item.randEnchantments || []).some(ench => ench.statId == sel.id && Number(ench.value) >= min);
                    return okFixed || okRand;
                });
            const matchesPrice =
                item.yang >= priceFilter.minYang && item.yang <= priceFilter.maxYang &&
                item.won  >= priceFilter.minWon  && item.won  <= priceFilter.maxWon;
            const plus = item.__plus || 0;
            const matchesPlus = plus >= minPlus && plus <= maxPlus;
            
            const itemCount = item.count || 1;
            const matchesCount = countFilter === null || itemCount === countFilter;
            
            let matchesDays = true;
            const allowedDaysCats = ['0-9-0', '1-9-0', '3-9-0', '4-9-0', '0-9-1','0-9-2'];
            const isDaysFilterActive = daysFilter.min > 0 || daysFilter.max < 9999;
            
            if (isDaysFilterActive) {
                if (allowedDaysCats.includes(item.categoryId)) {
                    let itemDays = 9999; 
                    const checkSocket = (limitType, socketVal) => {
                        if (limitType === 'REAL_TIME' && socketVal) {
                            let val = Number(socketVal);
                            let left = 0;
                            if (val > 1000000000) {
                                left = val - (Date.now()/1000);
                            } else {
                                left = val;
                            }
                            return Math.max(0, Math.floor(left / 86400));
                        }
                        return null;
                    };
                    let d0 = checkSocket(item.LimitType0, item.sockets?.[0]);
                    let d1 = checkSocket(item.LimitType1, item.sockets?.[1]);
                    if (d0 !== null) itemDays = d0;
                    else if (d1 !== null) itemDays = d1;
                    
                    matchesDays = itemDays >= daysFilter.min && itemDays <= daysFilter.max;
                } else {
                    matchesDays = false;
                }
            }

            const reqLevel = (item.__reqLevel !== undefined) ? item.__reqLevel : getItemRequiredLevel(item);
            const allowNullLv = (showNullLevel === true);
            const matchesLevel = (reqLevel == null ? allowNullLv : (reqLevel >= levelFilter.min && reqLevel <= levelFilter.max));
            const sellerValue   = (item.seller || '').trim().toLowerCase();
            const filterValue   = (sellerFilter || '').trim().toLowerCase();
            const matchesSeller = !filterValue || sellerValue === filterValue;
            
            let matchesPet = true;
            if (petFilter.minHp > 0 || petFilter.minDef > 0 || petFilter.minSp > 0 || petFilter.minDays > 0 || petFilter.type) {
                if (item.Type !== 'ITEM_PET' && !item.petInfo) {
                    matchesPet = false;
                } else {
                    let pHp = 0, pDef = 0, pSp = 0, pDays = 0, pType = '';
                    
                    if (item.__petHp !== undefined) {
                        pHp = Number(item.__petHp);
                        pDef = Number(item.__petDef);
                        pSp = Number(item.__petSp);
                        pType = String(item.__petType);
                        if (item.petInfo && item.petInfo[2]) {
                             const createdTs = item.petInfo[2][3];
                             const now = Math.floor(Date.now() / 1000);
                             pDays = Math.floor((now - createdTs) / 86400);
                        }
                    } else if (item.petInfo && item.petInfo[2]) {
                        const info = item.petInfo[2];
                        pHp = Number(info[5] || 0);
                        pDef = Number(info[6] || 0);
                        pSp = Number(info[7] || 0);
                        pType = String(item.petInfo[1] || '');
                        const createdTs = info[3];
                        const now = Math.floor(Date.now() / 1000);
                        pDays = Math.floor((now - createdTs) / 86400);
                    }
                    
                    if (petFilter.minHp > 0 && pHp < petFilter.minHp) matchesPet = false;
                    if (matchesPet && petFilter.minDef > 0 && pDef < petFilter.minDef) matchesPet = false;
                    if (matchesPet && petFilter.minSp > 0 && pSp < petFilter.minSp) matchesPet = false;
                    if (matchesPet && petFilter.minDays > 0 && pDays < petFilter.minDays) matchesPet = false;
                    if (matchesPet && petFilter.type && pType !== petFilter.type) matchesPet = false;
                }
            }

            let matchesSash = true;
            if (sashFilter.minRate > 0 || sashFilter.absorbedName) {
                const proto = window.item_proto && window.item_proto[item.vnum];
                const ITEM_TYPE = window.ITEM_TYPE;
                const isSash = proto && ITEM_TYPE && ITEM_TYPE[proto.Type] === ITEM_TYPE.ITEM_COSTUME && proto.SubType === "COSTUME_ACCE";
                
                if (!isSash) {
                    matchesSash = false;
                } else {
                    let rate = 0;
                    if (item.sockets && item.sockets.length > 1) {
                        rate = Number(item.sockets[1]);
                    }
                    
                    if (sashFilter.minRate > 0 && rate < sashFilter.minRate) matchesSash = false;
                    
                    if (matchesSash && sashFilter.absorbedName) {
                         const absorbedVnum = item.sockets ? item.sockets[0] : 0;
                         let absName = '';
                         if (absorbedVnum > 0 && window.item_names) {
                             absName = window.item_names[absorbedVnum] || '';
                         }
                         const filterName = sashFilter.absorbedName.trim().toLowerCase();
                         if (!absName.toLowerCase().includes(filterName)) {
                             matchesSash = false;
                         }
                    }

                    if (matchesSash && sashFilter.element) {
                        const targetElem = Number(sashFilter.element);
                        const hasElement = item.elem && Array.isArray(item.elem) && item.elem.length >= 2 && item.elem[0] === targetElem;
                        
                        if (!hasElement) {
                            matchesSash = false;
                        }
                    }
                }
            }

            return matchesSearch && matchesCategory && matchesEnchantments && matchesPrice && matchesPlus && matchesLevel && matchesSeller && matchesPet && matchesDays && matchesSash && matchesCount;
        });
        filteredItems.sort((a, b) => {
            const totalA = a.__totalPrice || 0;
            const totalB = b.__totalPrice || 0;
            let cmp = 0;
            switch (sortBy) {
                case 'fiyat-azalan':
                    cmp = totalB - totalA;
                    break;
                case 'fiyat-artan':
                    cmp = totalA - totalB;
                    break;
                case 'miktar-azalan':
                    cmp = (b.count || 1) - (a.count || 1);
                    if (cmp === 0) cmp = totalB - totalA;
                    break;
                case 'miktar-artan':
                    cmp = (a.count || 1) - (b.count || 1);
                    if (cmp === 0) cmp = totalA - totalB;
                    break;
                case 'birim-fiyat-artan':
                    const unitPriceA = totalA / (a.count || 1);
                    const unitPriceB = totalB / (b.count || 1);
                    cmp = unitPriceA - unitPriceB;
                    if (cmp === 0) cmp = totalA - totalB;
                    break;
                default:
                    cmp = totalB - totalA;
            }
            return cmp;
        });
        const uniqueMap = new Map();
        const result = [];
        filteredItems.forEach(item => {
            if (item.__petType != null) {
                item.rawCount = 1;
                item.duplicateCount = 1;
                result.push(item);
                return;
            }

            const key = item.__dedupKey || (() => {
                let baseKey = `${item.vnum}|${item.won}|${item.yang}|${item.seller}`;
                if ((window.item_proto[item.vnum]?.SubType === 'QUEST_GEM_BAG' || item.SubType === 'QUEST_GEM_BAG') && item.sockets && item.sockets[1] !== undefined) {
                    baseKey += `|gaya:${item.sockets[1]}`;
                }
                return baseKey;
            })();
            if (uniqueMap.has(key)) {
                const ref = uniqueMap.get(key);
                ref.rawCount = (ref.rawCount || 1) + 1;
            } else {
                item.rawCount = 1;
                uniqueMap.set(key, item);
                result.push(item);
            }
        });
        uniqueMap.forEach(it => {
            let adjusted = it.rawCount;
            if (it.vnum >= 12880 && it.vnum <= 12895) {
                adjusted = Math.floor(adjusted / 5);
            } else if ((it.vnum >= 10 && it.vnum <= 375) || (it.vnum >= 460 && it.vnum <= 469)) {
                adjusted = Math.floor(adjusted / 2);
            }
            it.duplicateCount = adjusted;
        });

        filteredItems = result;
        currentPage = 1;
        renderTable();
        setupPagination();
    }

    function renderSkeleton() {
        const tbody = document.getElementById('item-table-body');
        if (!tbody) return;
        
        const skeletonRow = `
            <tr class="animate-pulse border-b border-slate-700/30">
                <td class="px-4 py-2 text-center align-middle">
                    <div class="w-10 h-16 bg-slate-700/50 rounded mx-auto"></div>
                </td>
                <td class="px-4 py-2 align-middle">
                    <div class="h-4 bg-slate-700/50 rounded w-32 mb-2"></div>
                    <div class="flex gap-1">
                        <div class="h-3 bg-slate-700/30 rounded w-10"></div>
                        <div class="h-3 bg-slate-700/30 rounded w-10"></div>
                    </div>
                </td>
                <td class="px-4 py-2 align-middle">
                    <div class="h-4 bg-slate-700/50 rounded w-8 mx-auto"></div>
                </td>
                <td class="px-4 py-2 align-middle">
                    <div class="h-4 bg-slate-700/50 rounded w-20 mx-auto"></div>
                </td>
                <td class="px-4 py-2 align-middle">
                    <div class="h-4 bg-slate-700/50 rounded w-12 mx-auto"></div>
                </td>
                <td class="px-4 py-2 align-middle">
                    <div class="h-4 bg-slate-700/50 rounded w-24"></div>
                </td>
                <td class="px-4 py-2 align-middle">
                    <div class="h-4 bg-slate-700/50 rounded w-12 mx-auto"></div>
                </td>
            </tr>
        `;
        
        tbody.innerHTML = skeletonRow.repeat(12);
    }

    function formatCurrencyShort(val) {
        if (val >= 100000000) return (val / 100000000).toFixed(2).replace(/\.00$/, '') + 'w';
        if (val >= 1000000) return (val / 1000000).toFixed(2).replace(/\.00$/, '') + 'm';
        if (val >= 1000) return (val / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
        return val.toLocaleString('tr-TR');
    }

    function renderTable() {
        const isMobile = window.matchMedia && window.matchMedia('(max-width: 767px)').matches;
        const tbody = document.getElementById('item-table-body');
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const pageItems = filteredItems.slice(startIndex, endIndex);

        const sortByEl = document.getElementById('sort-by-select');
        const showUnitPrice = sortByEl && sortByEl.value === 'birim-fiyat-artan';

        tbody.innerHTML = pageItems.map((item, idx) => {
            let costumeDurationHtml = '';
            let transformTooltip = '';
            let emisOrani = 25;
            let transFormKontrol = 0;

            let countDisplay = item.count || 1;
            if (showUnitPrice) {
                const total = item.__totalPrice || 0;
                const unitPrice = total / (item.count || 1);
                countDisplay += `<span class="text-[10px] text-gray-400 block whitespace-nowrap">(1x = <span class="text-emerald-300 font-medium">${formatCurrencyShort(unitPrice)}</span>)</span>`;
            }

            try {
                if (String(item.vnum).length < 6) {
                    const det = itemDetails(window.item_proto[item.vnum]);
                    if (
                        (det && det.type === 'ITEM_COSTUME' && ['COSTUME_BODY', 'COSTUME_WEAPON', 'COSTUME_HAIR', 'COSTUME_MOUNT'].includes(det.SubType))
                        || (costumeCategoryCodes.includes(String(item.categoryId)) && Array.isArray(item.sockets) && item.sockets[0] != null)) {
                        let kalanSaniye = (det && det.SubType === 'COSTUME_MOUNT')
                            ? ((item.sockets?.[1] || item.sockets?.[0] || 0) * 60)
                            : getCostumeRemainingSeconds(item.sockets);
                        const textUnlimited = (LANG?.ui?.labels?.durationUnlimited) ?? 'Süresiz';
                        const textExpired   = (LANG?.ui?.labels?.durationExpired)   ?? 'Süresi dolmuş';
                        
                        const valStr = kalanSaniye === null
                            ? textUnlimited
                            : kalanSaniye <= 0
                                ? textExpired
                                : formatDuration(kalanSaniye);

                        const finalLabel = (LANG?.TITLE_SYSTEM_TOOLTIP_LEFT_TIME)
                            ? LANG.TITLE_SYSTEM_TOOLTIP_LEFT_TIME.replace('%s', valStr)
                            : `Kalan Süre: ${valStr}`;

                        costumeDurationHtml = `<div class='mt-1 inline-block px-2 py-1 rounded bg-yellow-600 text-yellow-100 text-xs font-semibold'>
                            ${finalLabel}
                        </div>`;
                    }
                    if (det && det.type === 'ITEM_COSTUME' && (det.SubType === 'COSTUME_ACCE' || det.SubType === 'COSTUME_AURA')) {
                        emisOrani = item.sockets?.[1]?.toString().length === 2 ? item.sockets[1] :
                            item.sockets?.[0]?.toString().length === 2 ? item.sockets[0] : 80;
                        emisOrani = item.vnum === 49006 ? 25 : emisOrani;
                        let transForm;
                        if (item.vnum === 49006) {
                            transForm = item.sockets?.[2] ? item.sockets[0] : null;
                        } else {
                            transForm = item.sockets?.[1] ? item.sockets[0] : null;
                        }

                        if (transForm != null) {
                            transFormKontrol = 1;
                            const transFormDetails = itemDetails(window.item_proto[transForm]);
                            const item_name = window.item_names[transForm] || `Item ${transForm}`;
                            let maxPower = transFormDetails ? Number(transFormDetails.maxApower) || 0 : 0;
                            let minApower = transFormDetails ? Number(transFormDetails.minApower) || 0 : 0;
                            let minMpower = transFormDetails ? Number(transFormDetails.minMpower) || 0 : 0;
                            let maxMpower = transFormDetails ? Number(transFormDetails.maxMpower) || 0 : 0;
                            const emisOraniFactor = Number(emisOrani) / 100;
                            const emisMinApower = Math.floor(minApower * emisOraniFactor) || 1;
                            const emisMaxPower = Math.floor(maxPower * emisOraniFactor) || 1;
                            const emisMinMpower = Math.floor(minMpower * emisOraniFactor) || 1;
                            const emisMaxMpower = Math.floor(maxMpower * emisOraniFactor) || 1;

                            let _randIndex = 0;
                            const validAtts = transFormDetails ? transFormDetails.itemAtts.filter(att => att).map(att => {
                                if (att === 'Rastgele') {
                                    if (!_randIndex) _randIndex = 0;
                                    const ench = item.randEnchantments?.[_randIndex];
                                    _randIndex++;
                                    if (!ench) return '';
                                    return `<div class="mb-1 text-red-300 text-center">${ench.rarity} ${ench.text}</div>`;
                                }

                                const ench = item.randEnchantments?.find(ench => ench.text === att);
                                if (ench) {
                                    return `<div class="mb-1 text-red-300 text-center">${ench.rarity} ${ench.text}</div>`;
                                }
                                const match = att.match(/([^0-9]*)([0-9]+)(.*)/);
                                if (match) {

                                    const prefix = match[1];
                                    const value = Number(match[2]);
                                    const suffix = match[3];
                                    const emisValue = Math.floor(value * emisOraniFactor) || 1;
                                    const matchEnch = item.randEnchantments?.find(e => e.text.includes(`${prefix}${value}${suffix}`));
                                    if (matchEnch) {
                                        const rarityClass = matchEnch.rarity ? `bg-${matchEnch.rarity}-900 text-${matchEnch.rarity}-200` : 'bg-gray-600 text-gray-300';
                                        return `<span class="block px-2 py-1 mb-1 rounded ${rarityClass}">${matchEnch.text}</span>`;
                                    }
                                    if (prefix.includes("-")) {
                                        return
                                    }
                                    return `<div class="mb-1 text-center" style="color: rgb(138, 185, 142);">${prefix}${value}${suffix} (${emisValue})</div>`;
                                }

                                return att;
                            }) : [];
                            const currentEnchantmentsWithEmis = item.enchantments?.map(ench => {
                                const match = ench.text.match(/([^0-9]*)([0-9]+)(.*)/);
                                if (match) {
                                    const prefix = match[1];
                                    const value = Number(match[2]);
                                    const suffix = match[3];
                                    const emisValue = Math.floor(value * emisOraniFactor) || 1;
                                    return `${prefix}${value}${suffix} (${emisValue})`;
                                }
                                return ench.text;
                            }) || [];
                            let elementName = '';
                            let elementColor = '';
                            if (Array.isArray(item.elem) && item.elem.length > 1 && Array.isArray(item.elem[1]) && STAT_MAP[item.elem[0]]) {
                                const elemId = item.elem[0];
                                const firstArr = item.elem[1];
                                const sum = firstArr.reduce((a, b) => a + b, 0);
                                let fullName = STAT_MAP[elemId];
                                fullName = fullName.replace(/\s*\+%d.*$/, '').replace(/\s*%d.*$/, '');
                                const sumA = Math.floor(sum * emisOraniFactor) || 1;
                                elementName = `${fullName} ${sum} (${sumA})`;
                                elementColor = renkler[elemId];
                            } else {
                                for (const [stat, val] of (item.attrs || [])) {
                                    if ([99, 100, 101, 102, 103, 104].includes(stat) && STAT_MAP[stat]) {
                                        let fullName = STAT_MAP[stat];
                                        fullName = fullName.replace(/\s*\+%d.*$/, '').replace(/\s*%d.*$/, '');
                                        elementName = fullName;
                                        elementColor = renkler[stat] || '';
                                        break;
                                    }
                                }
                            }
                            let transformIconFileName;
                            if (typeof transForm === 'number' && transForm >= 110000 && transForm <= 175460 && String(transForm).length === 6) {
                                const roundedVnum = Math.floor(transForm / 100) * 100;
                                transformIconFileName = ITEM_ICON_MAP[roundedVnum] || `${roundedVnum}.png`;
                            } else {
                                transformIconFileName = ITEM_ICON_MAP[transForm] || 'dummy.png';
                            }
                            const transformImgSrc = `public/icons/${transformIconFileName}`;
                            transformTooltip = createTooltipHtml(item);
                        }
                    }
                }

                return `
                <tr class="hover:bg-gray-700 transition-colors relative">
                    <td class="px-4 py-2 relative group overflow-visible text-center w-16">
                        <img src="${item.imgSrc}" alt="${item.name}" loading="lazy" class="w-10 h-[5.5rem] object-contain rounded focus:outline-none mx-auto"
                             onerror="this.src='public/icons/default.png'" tabindex="0">
                        ${transformTooltip}
                       ${(transFormKontrol === 0) ? createTooltipHtml(item) : ''}
                       ${(item.randEnchantments?.length > 0 && transFormKontrol === 0) ? (() => {
                            const itemDet = itemDetails(window.item_proto[item.vnum]);
                            const hasItemAtts = itemDet && itemDet.itemAtts && itemDet.itemAtts.filter(att => att).length > 0;
                            const hasEnchantments = item.enchantments?.length > 0;
                            if (hasItemAtts || hasEnchantments) return '';
                             return `
                            <div class="item-tooltip item-tooltip-right" style="max-width: 180px;">
                                <div class="p-4">
                                    <div class="mb-3 text-indigo-400 font-semibold text-sm border-b border-slate-700/50 pb-2">${(LANG && LANG.ui && LANG.ui.labels && LANG.ui.labels.randomEnchantments) ? LANG.ui.labels.randomEnchantments : 'Rastgele Efsunlar'}</div>
                                    ${item.randEnchantments.map(ench =>
                    `<span class="block px-2 py-1 mb-1 rounded ${ench.rarity ? 'bg-' + ench.rarity + '-900 text-' + ench.rarity + '-200' : 'bg-gray-600 text-gray-300'}">${ench.text}</span>`
                ).join('')}
                                </div>
                            </div>
                        `;
                        })() : ''}
                    </td>
                    <td class="px-4 py-2">
                        <div class="font-medium text-white text-sm">${item.name}${(item.__petType == null && item.duplicateCount > 1) ? ' <span class="rainbow-text">×' + item.duplicateCount + '</span>' : ''}${
                    ((window.item_proto[item.vnum]?.SubType === 'QUEST_GEM_BAG' || item.SubType === 'QUEST_GEM_BAG') && item.sockets && item.sockets[1] !== undefined) ?
                        ` <span class="text-sky-300">(${item.sockets[1]})</span>` : ''
                }${
                    itemDetails(window.item_proto[item.vnum])?.type === 'ITEM_COSTUME' &&
                    itemDetails(window.item_proto[item.vnum])?.SubType === 'COSTUME_ACCE' ?
                        ` <span class="text-yellow-400 text-xs">(${
                            (() => {
                                const raw = STAT_MAP['97'] || 'Emiş Oranı';
                                const cleaned = raw.replace(/[:：]?\s*%+%?d.*$/i, '').trim();
                                return cleaned || 'Emiş Oranı';
                            })()
                        }: %${emisOrani})</span>` : ''
                }${(item.__petType != null && item.__petLevel != null)
                        ? (() => {
                             if (item.__petEvolved && LANG.PET_TOOLTIP_CONQUEROR_LEVEL_AND_LIFETIME) {
                                 const txt = LANG.PET_TOOLTIP_CONQUEROR_LEVEL_AND_LIFETIME;
                                 const dayStr = `${item.__petDays}${item.__petDayUnit}`;
                                 const typeKey = `PET_ATTR_DETERMINE_TYPE${item.__petType}`;
                                 const typeText = (LANG && LANG[typeKey]) || `Tip ${item.__petType}`;
                                 const label = txt.replace('%d', item.__petLevel).replace('%s', dayStr);
                                 return ` <span class="${item.__petEvolved ? 'text-sky-300' : 'text-green-300'} font-bold">${label} (${typeText})</span>`;
                             } else {
                                 const typeKey = `PET_ATTR_DETERMINE_TYPE${item.__petType}`;
                                 const typeText = (LANG && LANG[typeKey]) || `Tip ${item.__petType}`;
                                 return ` <span class="${item.__petEvolved ? 'text-sky-300' : 'text-green-300'} font-bold">Lv ${item.__petLevel} (${typeText}) ${item.__petDays}${item.__petDayUnit}</span>`;
                             }
                        })()
                        : ''
                }
                </div>
                        <div class="text-xs text-gray-400">
                            ${item.enchantments.length > 0
                                ? item.enchantments.map(ench => {
                                    const highlight = selectedEnchantments.some(se => String(se.id) === String(ench.statId)) ? 'glow-efsun ring-2 ring-offset-1' : '';
                                    return `<span class="inline-block px-2 py-1 mr-1 mb-1 text-xs rounded ${ench.rarity ? 'bg-' + ench.rarity + '-900 text-' + ench.rarity + '-200' : 'bg-gray-600 text-gray-300'} ${highlight}">${ench.text}</span>`;
                                }).join('')
                                : (
                                    item.__petType != null
                                        ? ''
                                        : (ITEM_DESC_MAP[item.vnum] ? `<span class='italic text-gray-400'>${ITEM_DESC_MAP[item.vnum]}</span>` : '')
                                )
                            }
                            ${
                                (item.__petType != null)
                                    ? `
        <span class="inline-block px-2 py-1 mr-1 mb-1 text-xs rounded bg-rare-900 text-rare-200">${LANG.PET_TOOLTIP_HP || 'HP'} +${item.__petHp}%</span>
        <span class="inline-block px-2 py-1 mr-1 mb-1 text-xs rounded bg-rare-900 text-rare-200">${LANG.PET_TOOLTIP_DEF || 'Defans'} +${item.__petDef}%</span>
        <span class="inline-block px-2 py-1 mr-1 mb-1 text-xs rounded bg-rare-900 text-rare-200">${LANG.PET_TOOLTIP_SP || 'SP'} +${item.__petSp}%</span>
    `
                                    : ''
                            }
                            ${costumeDurationHtml}
                        </div>
                    </td>
                    <td class="count-cell px-4 py-2 text-white text-center w-20">${countDisplay}</td>
                    <td class="px-4 py-2 text-yellow-500 text-center w-32">${(item.yang || 0).toLocaleString('tr-TR')}</td>
                    <td class="px-4 py-2 text-white text-center w-20"><span class="bg-green-900 text-blue-200 px-2 py-1 rounded">${(item.won || 0).toLocaleString('tr-TR')}</span></td>
                    <td class="px-4 py-2 text-gray-300 w-40">${item.seller}</td>
                    <td class="px-4 py-2 text-center w-8"><span class="inline-block px-2 py-1 text-xs rounded bg-blue-900 text-blue-200">${item.category}</span></td>
                </tr>
            `;
            } catch (error) {
                console.error(`Hata oluştu (item vnum: ${item.vnum}):`, error);
                return '';
            }
        }).join('');
        setTimeout(setupTooltipPositions, 100);
    }

    function setupPagination() {
        const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
        const controls = document.getElementById('pagination-controls');
        controls.innerHTML = totalPages <= 1 ? '' : `
                ${currentPage > 1 ? `<button onclick="goToPage(${currentPage - 1})" class="px-3 py-2 mx-1 bg-gray-700 text-white rounded hover:bg-gray-600">${LANG.UI_PREVIOUS || 'Önceki'}</button>` : ''}
                ${Array.from({length: totalPages}, (_, i) => i + 1).map(i => {
            if (i === currentPage) return `<span class="px-3 py-2 mx-1 bg-blue-600 text-white rounded">${i}</span>`;
            if (i === 1 || i === totalPages || (i >= currentPage - 2 && i <= currentPage + 2)) {
                return `<button onclick="goToPage(${i})" class="px-3 py-2 mx-1 bg-gray-700 text-white rounded hover:bg-gray-600">${i}</button>`;
            }
            if (i === currentPage - 3 || i === currentPage + 3) return `<span class="px-3 py-2 mx-1 text-gray-400">...</span>`;
            return '';
        }).join('')}
                ${currentPage < totalPages ? `<button onclick="goToPage(${currentPage + 1})" class="px-3 py-2 mx-1 bg-gray-700 text-white rounded hover:bg-gray-600">${LANG.UI_NEXT || 'Sonraki'}</button>` : ''}
            `;
    }

    function goToPage(page) {
        currentPage = page;
        renderTable();
        setupPagination();
    }

    function filterEnchantmentsOptions(searchTerm) {
        const optionsDiv = document.getElementById('enchantment-options');
        if(!optionsDiv) return;
        
        const locale = getLocaleForLanguage(currentLanguage);
        const term = searchTerm.toLocaleLowerCase(locale);
        let hasVisible = false;
        Array.from(optionsDiv.children).forEach(option => {
            const visible = option.textContent.toLocaleLowerCase(locale).includes(term);
            option.style.display = visible ? 'block' : 'none';
            if(visible) hasVisible = true;
        });
        if(term.length > 0 && hasVisible) {
             optionsDiv.classList.remove('hidden');
        }
    }
    
    function buildEnchantmentOptions() {
        const optionsWrapper = document.getElementById('enchantment-options');
        if (!optionsWrapper) return;
        optionsWrapper.innerHTML = '';

        if (STAT_MAP) {
            Object.entries(STAT_MAP).forEach(([id, text]) => {
                const div = document.createElement('div');
                div.className = 'px-3 py-2 hover:bg-gray-600 cursor-pointer text-sm';   
                div.dataset.value = id;
                const cleanText = String(text).replace(/%%/g,'%').replace(/%d(?:%%)?/g,'…').replace(/\s{2,}/g,' ').replace(/^[\+\-:,]+/,'').trim();
                div.textContent = cleanText;
                optionsWrapper.appendChild(div);
            });
        }
        Array.from(optionsWrapper.children).forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                const value = option.dataset.value;
                const searchInput = document.getElementById('enchantment-search-input');
                const optionsDiv = document.getElementById('enchantment-options');
                const clearBtn = document.getElementById('clear-enchantment-btn');

                if (value) {
                    const idx = selectedEnchantments.findIndex(o => String(o.id) === String(value));
                    if (idx === -1) {
                         selectedEnchantments.push({ id: String(value), minValue: 0 });
                         window.renderSelectedEnchantmentsBadges();
                         
                         setTimeout(() => {
                            const container = document.getElementById('selected-enchantments-badges');
                            const inputs = container.querySelectorAll('input[type="number"]');
                            if (inputs.length > 0) {
                                const lastInput = inputs[inputs.length - 1];
                                lastInput.focus();
                                lastInput.select();
                            }
                        }, 50);
                    }
                } 

                if(searchInput) {
                    searchInput.value = '';
                }
                if(optionsDiv) {
                     optionsDiv.classList.add('hidden');
                     Array.from(optionsDiv.children).forEach(opt => opt.style.display = 'block');
                }
                if(clearBtn) clearBtn.classList.add('hidden');
                
                filterAndPaginate();
            });
        });
    }
    
    function clearEnchantmentInput(event) {
        if (event) {
            event.stopPropagation();
            event.preventDefault();
        }
        const searchInput = document.getElementById('enchantment-search-input');
        const clearBtn = document.getElementById('clear-enchantment-btn');
        const optionsDiv = document.getElementById('enchantment-options');

        if(searchInput) {
            searchInput.value = '';
            searchInput.focus();
        }
        if(clearBtn) clearBtn.classList.add('hidden');
        if(optionsDiv) {
            Array.from(optionsDiv.children).forEach(opt => opt.style.display = 'block');
            optionsDiv.classList.remove('hidden'); 
        }
    }

    function getStatLabel(id){
        let s = STAT_MAP && STAT_MAP[String(id)];
        if(!s){
             const opt = document.querySelector('#enchantment-options div[data-value="'+String(id)+'"]');
             if(opt) s = opt.textContent;
        }
        if(!s) return String(id);
        s = String(s);
        s = s.replace(/%%/g,'%');
        s = s.replace(/\+?\s*%d(?:%%)?/gi,'');
        s = s.replace(/\s{2,}/g,' ').trim();
        s = s.replace(/^[\+\-:,]+/,'').trim();
        return s || String(id);
    }

    function setupEnchantmentSelector() {
        const searchInput = document.getElementById('enchantment-search-input');
        const optionsDiv = document.getElementById('enchantment-options');
        const clearBtn = document.getElementById('clear-enchantment-btn');
        const selectedBadgesContainer = document.getElementById('selected-enchantments-badges');
        if(searchInput && optionsDiv) {
             const onInput = () => {
                const val = searchInput.value.trim();
                if(val) {
                    if(clearBtn) clearBtn.classList.remove('hidden');
                } else {
                    if(clearBtn) clearBtn.classList.add('hidden');
                }
                filterEnchantmentsOptions(searchInput.value);
                optionsDiv.classList.remove('hidden');
            };
            
            searchInput.addEventListener('input', onInput);
            searchInput.addEventListener('focus', () => {
                optionsDiv.classList.remove('hidden');
                if(!searchInput.value.trim()) {
                    Array.from(optionsDiv.children).forEach(opt => opt.style.display = 'block');
                }
            });
            if(clearBtn) {
                clearBtn.addEventListener('click', clearEnchantmentInput);
            }
            document.addEventListener('click', e => {
                if (!document.getElementById('custom-enchantment-select').contains(e.target)) {
                    optionsDiv.classList.add('hidden');
                }
            });
        }

        window.renderSelectedEnchantmentsBadges = function renderSelectedEnchantmentsBadges() {
            selectedBadgesContainer.innerHTML = '';
            selectedBadgesContainer.style.visibility = selectedEnchantments.length === 0 ? 'hidden' : 'visible';
            
            const fragment = document.createDocumentFragment();

            selectedEnchantments.forEach(obj => {
                const id = String(obj.id);
                const minVal = Number(obj.minValue || 0);
                const badge = document.createElement('span');
                badge.className = 'inline-flex items-center bg-blue-800 text-blue-100 text-xs rounded px-2 py-1 border border-blue-400';
                badge.textContent = getStatLabel(id) + ' ≥ ';
                const input = document.createElement('input');
                input.type = 'number';
                input.min = '0';
                input.step = '1';
                input.value = String(minVal);
                input.className = 'w-14 ml-1 px-1 py-0.5 bg-blue-900 text-blue-100 border border-blue-300 rounded text-right';
                input.addEventListener('input', () => {
                    obj.minValue = Number(input.value || 0);
                    scheduleFilter(140);
                });
                const closeBtn = document.createElement('button');
                closeBtn.className = 'ml-1 text-blue-200 hover:text-red-400 focus:outline-none';
                closeBtn.style.fontSize = '20px';
                closeBtn.innerHTML = '×';
                closeBtn.onclick = e => {
                    e.stopPropagation();
                    selectedEnchantments = selectedEnchantments.filter(o => String(o.id) !== id);
                    window.renderSelectedEnchantmentsBadges();
                    filterAndPaginate();
                };
                badge.appendChild(input);
                badge.appendChild(closeBtn);
                fragment.appendChild(badge);
            });
            if(selectedEnchantments.length > 0) {
                const saveBtn = document.createElement('button');
                saveBtn.id = 'saveEnchantmentSetBtn';
                saveBtn.className = 'inline-flex items-center bg-green-600 hover:bg-green-500 text-white text-xs rounded px-2 py-1 border border-green-400 ml-2 transition-colors shadow-sm animate-fade-in';
                saveBtn.innerHTML = '<span>💾</span>';
                saveBtn.title = 'Ayarları Kaydet';
                saveBtn.onclick = (e) => {
                    e.stopPropagation();
                    const name = `Set ${enchantPresets.length + 1}`;
                    
                    const newPreset = {
                        name: name,
                        ench: selectedEnchantments.map(o=>({id:String(o.id), minValue:Number(o.minValue||0)}))
                    };
                    enchantPresets.push(newPreset);
                    saveEnchantPresets();
                     if(typeof window.rebuildSlotList === 'function') {
                         window.rebuildSlotList();
                     } else if(typeof setupSlotButtons === 'function') {
                         setupSlotButtons(); 
                     }
                     const badge = document.getElementById('slotCountBadge');
                     if(badge) {
                         badge.textContent = enchantPresets.length;
                         badge.style.display = 'inline-block';
                     }
                };
                
                fragment.appendChild(saveBtn);
            }
            selectedBadgesContainer.appendChild(fragment);
        }

        window.renderSelectedEnchantmentsBadges();
    }
    function itemAtt(applyType, applyValue) {
        if (applyType === "APPLY_RANDOM") {
            return 'Rastgele';
        }
        const protoAtt = window.proto_stat_map?.[applyType];
        return protoAtt ? window.stat_map?.[protoAtt]?.replace(/%%/g, '%').replace('%d', applyValue) : null;
    }

    function itemDetails(detail) {
        if (!detail) return null;
        if (detail.Type === 'ITEM_WEAPON') {
            const itemD = {
                type: 'ITEM_WEAPON',
                SubType: detail.SubType,
                minApower: (Number(detail.Value3) + Number(detail.Value5)),
                maxApower: (Number(detail.Value4) + Number(detail.Value5)),
                itemAtts: [
                    itemAtt(detail.ApplyType0, detail.ApplyValue0),
                    itemAtt(detail.ApplyType1, detail.ApplyValue1),
                    itemAtt(detail.ApplyType2, detail.ApplyValue2),
                    itemAtt(detail.ApplyType3, detail.ApplyValue3),
                ],
                LimitType0: detail.LimitType0,
                LimitValue0: detail.LimitValue0,
                LimitType1: detail.LimitType1,
                LimitValue1: detail.LimitValue1,
                socket: detail.GainSocketPercent,
            };
            if (["WEAPON_SWORD", "WEAPON_BELL", "WEAPON_FAN", "WEAPON_WHIP"].includes(detail.SubType)) {
                itemD.minMpower = (Number(detail.Value1) + Number(detail.Value5));
                itemD.maxMpower = (Number(detail.Value2) + Number(detail.Value5));
            }
            return itemD;
        } else if (detail.Type === 'ITEM_ARMOR') {
            const itemD = {
                type: 'ITEM_ARMOR',
                SubType: detail.SubType,
                itemAtts: [
                    itemAtt(detail.ApplyType0, detail.ApplyValue0),
                    itemAtt(detail.ApplyType1, detail.ApplyValue1),
                    itemAtt(detail.ApplyType2, detail.ApplyValue2),
                    itemAtt(detail.ApplyType3, detail.ApplyValue3),
                ],
                LimitType0: detail.LimitType0,
                LimitValue0: detail.LimitValue0,
                LimitType1: detail.LimitType1,
                LimitValue1: detail.LimitValue1,
                socket: detail.GainSocketPercent,
            };
            if (["ARMOR_BODY", "ARMOR_HEAD", "ARMOR_FOOTS", "ARMOR_SHIELD"].includes(detail.SubType)) {
                itemD.defence = (Math.max(0, parseInt(detail.Value5) * 3 - detail.Value5)) + detail.Value1;
            }
            return itemD;
        } else if (detail.Type === 'ITEM_COSTUME') {
            return {
                type: 'ITEM_COSTUME',
                SubType: detail.SubType,
                itemAtts: [
                    itemAtt(detail.ApplyType0, detail.ApplyValue0),
                    itemAtt(detail.ApplyType1, detail.ApplyValue1),
                    itemAtt(detail.ApplyType2, detail.ApplyValue2),
                    itemAtt(detail.ApplyType3, detail.ApplyValue3),
                ],
                LimitType0: detail.LimitType0,
                LimitValue0: detail.LimitValue0,
                LimitType1: detail.LimitType1,
                LimitValue1: detail.LimitValue1,
                socket: detail.GainSocketPercent,
            };
        }
        return null;
    }


    function formatDuration(seconds) {
        if (!seconds || seconds <= 0) {
            return (LANG?.ui?.labels?.durationExpired) ?? 'Süresi dolmuş';
        }
        const d = Math.floor(seconds / 86400);
        const h = Math.floor((seconds % 86400) / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        const units = LANG?.ui?.durationUnits ?? {
            day   : 'g',
            hour  : 's',
            minute: 'd',
            second: 'sn'
        };
        const showSeconds = (d === 0 && h === 0 && m === 0);

        return `${
            d > 0 ? d + units.day   + ' ' : ''
        }${
            h > 0 ? h + units.hour  + ' ' : ''
        }${
            m > 0 ? m + units.minute+ ' ' : ''
        }${
            (showSeconds && s > 0) ? s + units.second : ''
        }`.trim();
    }

    function getCostumeRemainingSeconds(socketValue) {
        if (!socketValue) return null;
        const val = Number(socketValue[0] || socketValue[1]);
        if (isNaN(val)) return null;
        if (val > 1000000000) {
            const now = Math.floor(Date.now() / 1000);
            return val - now;
        }
        return val;
    }

    function enrichItemsWithProto() {
        allItemsData.forEach(item => {
            const proto = window.item_proto?.[item.vnum];
            if (proto) {
                Object.assign(item, {
                    Type: proto.Type,
                    SubType: proto.SubType,
                    ApplyType0: proto.ApplyType0,
                    ApplyValue0: proto.ApplyValue0,
                    ApplyType1: proto.ApplyType1,
                    ApplyValue1: proto.ApplyValue1,
                    ApplyType2: proto.ApplyType2,
                    ApplyValue2: proto.ApplyValue2,
                    ApplyType3: proto.ApplyType3,
                    ApplyValue3: proto.ApplyValue3,
                    LimitType0: proto.LimitType0,
                    LimitValue0: proto.LimitValue0,
                    LimitType1: proto.LimitType1,
                    LimitValue1: proto.LimitValue1,
                    GainSocketPercent: proto.GainSocketPercent,
                    Value1: proto.Value1,
                    Value2: proto.Value2,
                    Value3: proto.Value3,
                    Value4: proto.Value4,
                    Value5: proto.Value5,
                });
            }
            item.__reqLevel = getItemRequiredLevel(item);
        });

    }
    function loadEnchantPresets(){
        try{
            const raw = localStorage.getItem('enchantPresetsV1');
            enchantPresets = raw ? JSON.parse(raw) : [];
            if(!Array.isArray(enchantPresets)) enchantPresets = [];
        }catch(e){ enchantPresets = []; }
    }
    function saveEnchantPresets(){
        localStorage.setItem('enchantPresetsV1', JSON.stringify(enchantPresets));
    }
    function renderEnchantPresets(){
        const c = document.getElementById('enchantPresetsContainer');
        if(c){ c.innerHTML = ''; }
    }
    function setupPriceFilter(){
        const toggle=document.getElementById('priceFilterToggle');
        const popup =document.getElementById('priceFilterPopup');
        const reset=document.getElementById('resetPriceFilter');
        if(!toggle||!popup)return;

        const inputs = [
            document.getElementById('minYangInput'),
            document.getElementById('maxYangInput'),
            document.getElementById('minWonInput'),
            document.getElementById('maxWonInput')
        ];

        const inpMinYang = document.getElementById('minYangInput');
        const inpMaxYang = document.getElementById('maxYangInput');
        const inpMinWon = document.getElementById('minWonInput');
        const inpMaxWon = document.getElementById('maxWonInput');

        const formatNumber = (num) => {
            if (!num && num !== 0) return '';
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        };

        const unformatNumber = (str) => {
            if (!str) return 0;
            return parseInt(str.toString().replace(/\./g, ''), 10) || 0;
        };

        if(inpMinYang) inpMinYang.value = formatNumber(priceFilter.minYang);
        if(inpMaxYang) inpMaxYang.value = formatNumber(priceFilter.maxYang);
        if(inpMinWon) inpMinWon.value  = formatNumber(priceFilter.minWon);
        if(inpMaxWon) inpMaxWon.value  = formatNumber(priceFilter.maxWon);

        toggle.addEventListener('click',e=>{
            e.stopPropagation();
            const petPopup = document.getElementById('petFilterPopup');
            if(petPopup) {
                petPopup.classList.add('hidden');
                petPopup.style.display = '';
            }
            const sashPopup = document.getElementById('sashFilterPopup');
            if(sashPopup) {
                sashPopup.classList.add('hidden');
                sashPopup.style.display = '';
            }
            const slotDropdown = document.getElementById('slotDropdown');
            if(slotDropdown) {
                slotDropdown.classList.add('hidden');
            }
            popup.style.display = '';
            const isHidden = popup.classList.toggle('hidden');
            
            if (!isHidden && window.innerWidth < 640) {
                setTimeout(() => {
                    const toggleRect = toggle.getBoundingClientRect();
                    const popupWidth = popup.offsetWidth || 288;
                    const left = (window.innerWidth - popupWidth) / 2;
                    const top = toggleRect.bottom + 16;
                    
                    popup.style.position = 'fixed';
                    popup.style.left = `${left}px`;
                    popup.style.top = `${top}px`;
                    popup.style.transform = 'translateX(0)';
                    popup.style.marginTop = '0';
                    popup.style.zIndex = '9999';
                }, 10);
            } else if (!isHidden) {
                popup.style.position = '';
                popup.style.left = '';
                popup.style.top = '';
                popup.style.transform = '';
                popup.style.marginTop = '';
                popup.style.zIndex = '';
            }
        });

        const applyFilters = () => {
            priceFilter.minYang = inpMinYang ? unformatNumber(inpMinYang.value) : 0;
            priceFilter.maxYang = inpMaxYang ? (inpMaxYang.value ? unformatNumber(inpMaxYang.value) : 1999999999) : 1999999999;
            priceFilter.minWon = inpMinWon ? unformatNumber(inpMinWon.value) : 0;
            priceFilter.maxWon = inpMaxWon ? (inpMaxWon.value ? unformatNumber(inpMaxWon.value) : 3000) : 3000;
            
            scheduleFilter(400);
        };

        inputs.forEach(input => {
            if(input) {
                input.addEventListener('input', (e) => {
                    let val = e.target.value.replace(/[^0-9]/g, '');
                    e.target.value = formatNumber(val);
                    applyFilters();
                });
                
                input.addEventListener('focus', (e) => {
                    let val = unformatNumber(e.target.value);
                    e.target.value = val === 0 ? '' : val;
                });

                input.addEventListener('blur', (e) => {
                    let val = e.target.value.replace(/[^0-9]/g, '');
                    if(val === '') {
                        if(e.target.id === 'maxYangInput') val = '1999999999';
                        else if(e.target.id === 'maxWonInput') val = '3000';
                        else val = '0';
                    }
                    e.target.value = formatNumber(val);
                    applyFilters();
                });
            }
        });

        if(reset) {
            reset.addEventListener('click',()=>{
                priceFilter = {minYang:0, maxYang:1999999999, minWon:0, maxWon:3000};
                if(inpMinYang) inpMinYang.value = '0';
                if(inpMaxYang) inpMaxYang.value = '1.999.999.999';
                if(inpMinWon) inpMinWon.value  = '0';
                if(inpMaxWon) inpMaxWon.value  = '3.000';
                scheduleFilter(400);
            });
        }

        document.addEventListener('click',e=>{
            if(!popup.contains(e.target)&&!toggle.contains(e.target)){
                popup.classList.add('hidden');
                popup.style.display = '';
            }
        });
    }
    function setupPetFilter(){
        const toggle = document.getElementById('petFilterToggle');
        const popup = document.getElementById('petFilterPopup');
        const reset = document.getElementById('resetPetFilter');
        
        if (!toggle || !popup) return;
        
        const inputs = [
            document.getElementById('minPetHp'),
            document.getElementById('minPetDef'),
            document.getElementById('minPetSp'),
            document.getElementById('minPetDays'),
            document.getElementById('petTypeSelect')
        ];
        
        document.getElementById('minPetHp').value = petFilter.minHp || '';
        document.getElementById('minPetDef').value = petFilter.minDef || '';
        document.getElementById('minPetSp').value = petFilter.minSp || '';
        document.getElementById('minPetDays').value = petFilter.minDays || '';
        document.getElementById('petTypeSelect').value = petFilter.type || '';
        
        toggle.addEventListener('click', e => {
            e.stopPropagation();
            const pricePopup = document.getElementById('priceFilterPopup');
            if(pricePopup) {
                pricePopup.classList.add('hidden');
                pricePopup.style.display = '';
            }
            const sashPopup = document.getElementById('sashFilterPopup');
            if(sashPopup) {
                sashPopup.classList.add('hidden');
                sashPopup.style.display = '';
            }
            const slotDropdown = document.getElementById('slotDropdown');
            if(slotDropdown) {
                slotDropdown.classList.add('hidden');
            }
            popup.style.display = '';
            const isHidden = popup.classList.toggle('hidden');
            
            if (!isHidden && window.innerWidth < 640) {
                setTimeout(() => {
                    const toggleRect = toggle.getBoundingClientRect();
                    const popupWidth = popup.offsetWidth || 288;
                    const left = (window.innerWidth - popupWidth) / 2;
                    const top = toggleRect.bottom + 16;
                    
                    popup.style.position = 'fixed';
                    popup.style.left = `${left}px`;
                    popup.style.top = `${top}px`;
                    popup.style.transform = 'translateX(0)';
                    popup.style.marginTop = '0';
                    popup.style.zIndex = '9999';
                }, 10);
            } else if (!isHidden) {
                popup.style.position = '';
                popup.style.left = '';
                popup.style.top = '';
                popup.style.transform = '';
                popup.style.marginTop = '';
                popup.style.zIndex = '';
            }
        });
        
        const applyFilters = () => {
            petFilter.minHp = +document.getElementById('minPetHp').value || 0;
            petFilter.minDef = +document.getElementById('minPetDef').value || 0;
            petFilter.minSp = +document.getElementById('minPetSp').value || 0;
            petFilter.minDays = +document.getElementById('minPetDays').value || 0;
            petFilter.type = document.getElementById('petTypeSelect').value;
            
            scheduleFilter(400);
        };

        inputs.forEach(input => {
            if(input) {
                input.addEventListener('input', applyFilters);
                input.addEventListener('change', applyFilters);
            }
        });
        
        if(reset) {
            reset.addEventListener('click', () => {
                petFilter = { minHp: 0, minDef: 0, minSp: 0, minDays: 0, type: '' };
                document.getElementById('minPetHp').value = '';
                document.getElementById('minPetDef').value = '';
                document.getElementById('minPetSp').value = '';
                document.getElementById('minPetDays').value = '';
                document.getElementById('petTypeSelect').value = '';
                
                filterAndPaginate();
            });
        }
        
        document.addEventListener('click', e => {
            if (!popup.contains(e.target) && !toggle.contains(e.target)) {
                popup.classList.add('hidden');
                popup.style.display = '';
            }
        });
    }
    function setupSashFilter(){
        const toggle = document.getElementById('sashFilterToggle');
        const popup = document.getElementById('sashFilterPopup');
        const reset = document.getElementById('resetSashFilter');
        
        if (!toggle || !popup) return;
        
        const rateInput = document.getElementById('sashRateInput');
        const nameInput = document.getElementById('sashAbsorbedItemInput');
        const elementContainer = document.getElementById('sashElementContainer');
        const suggestionsBox = document.getElementById('sash-search-suggestions');
        
        const updateInputs = () => {
            if(rateInput) rateInput.value = sashFilter.minRate || '';
            if(nameInput) nameInput.value = sashFilter.absorbedName || '';
            
            if(elementContainer) {
                const btns = elementContainer.querySelectorAll('.element-btn');
                btns.forEach(btn => {
                    if(btn.dataset.elem === String(sashFilter.element)) {
                        btn.classList.add('ring-2', 'ring-indigo-500', 'bg-indigo-900/50', 'border-indigo-500', 'active');
                    } else {
                        btn.classList.remove('ring-2', 'ring-indigo-500', 'bg-indigo-900/50', 'border-indigo-500', 'active');
                    }
                });
            }
        };
        
        updateInputs();
        
        toggle.addEventListener('click', e => {
            e.stopPropagation();
            const pricePopup = document.getElementById('priceFilterPopup');
            if(pricePopup) {
                pricePopup.classList.add('hidden');
                pricePopup.style.display = '';
            }
            const petPopup = document.getElementById('petFilterPopup');
            if(petPopup) {
                petPopup.classList.add('hidden');
                petPopup.style.display = '';
            }
            const slotDropdown = document.getElementById('slotDropdown');
            if(slotDropdown) {
                slotDropdown.classList.add('hidden');
            }
            
            popup.style.display = '';
            const isHidden = popup.classList.toggle('hidden');
            
            if (!isHidden && window.innerWidth < 640) {
                setTimeout(() => {
                    const toggleRect = toggle.getBoundingClientRect();
                    const popupWidth = popup.offsetWidth || 288;
                    const left = (window.innerWidth - popupWidth) / 2;
                    const top = toggleRect.bottom + 16;
                    
                    popup.style.position = 'fixed';
                    popup.style.left = `${left}px`;
                    popup.style.top = `${top}px`;
                    popup.style.transform = 'translateX(0)';
                    popup.style.marginTop = '0';
                    popup.style.zIndex = '9999';
                }, 10);
            } else if (!isHidden) {
                popup.style.position = '';
                popup.style.left = '';
                popup.style.top = '';
                popup.style.transform = '';
                popup.style.marginTop = '';
                popup.style.zIndex = '';
            }
        });
        
        const applyFilters = () => {
            sashFilter.minRate = +(rateInput?.value) || 0;
            sashFilter.absorbedName = nameInput?.value || '';
            scheduleFilter(400);
        };
        
        if(rateInput) {
            rateInput.addEventListener('input', applyFilters);
            rateInput.addEventListener('change', applyFilters);
        }

        if(elementContainer) {
            elementContainer.addEventListener('click', e => {
                const btn = e.target.closest('.element-btn');
                if(!btn) return;
                
                const val = btn.dataset.elem;
                if(String(sashFilter.element) === val) {
                    sashFilter.element = ''; 
                } else {
                    sashFilter.element = val;
                }
                updateInputs();
                scheduleFilter(400);
            });
        }

        if(nameInput && suggestionsBox) {
             let debounceTimer = null;
             
            nameInput.addEventListener('input', () => {
                const locale = getLocaleForLanguage(currentLanguage);
                const term = nameInput.value.toLocaleLowerCase(locale);
                applyFilters();
                 
                 if(debounceTimer) clearTimeout(debounceTimer);
                 debounceTimer = setTimeout(() => {
                     if(!term) {
                         suggestionsBox.innerHTML = '';
                         suggestionsBox.classList.add('hidden');
                         return;
                     }
                     
                     const res = [];
                     const b1 = searchBuckets[term.slice(0,2)] || [];
                     for(let j=0; j<b1.length && res.length<20; j++){
                         const i = b1[j];
                         if(searchNamesLower[i].includes(term)) res.push(searchNames[i]);
                     }
                     
                     if(res.length === 0 && term.length > 2){
                         const b2 = searchBuckets[term.slice(0,1)] || [];
                         for(let j=0; j<b2.length && res.length<20; j++){
                             const i = b2[j];
                             if(searchNamesLower[i].includes(term)) res.push(searchNames[i]);
                         }
                     }
                     
                     if(res.length === 0){
                         suggestionsBox.innerHTML = '';
                         suggestionsBox.classList.add('hidden');
                         return;
                     }
                     
                     suggestionsBox.innerHTML = res.map(name => `<div class="px-3 py-2 hover:bg-gray-600 cursor-pointer text-gray-200 text-sm">${name}</div>`).join('');
                     suggestionsBox.classList.remove('hidden');
                 }, 120);
             });
             
             suggestionsBox.addEventListener('click', e => {
                 const t = e.target;
                 if(t && t.tagName === 'DIV'){
                     nameInput.value = t.textContent;
                     suggestionsBox.classList.add('hidden');
                     applyFilters();
                 }
             });
        }
        
        if(reset) {
            reset.addEventListener('click', () => {
                sashFilter = { minRate: 0, absorbedName: '', element: '' };
                updateInputs();
                filterAndPaginate();
            });
        }
        
        document.addEventListener('click', e => {
            if (!popup.contains(e.target) && !toggle.contains(e.target)) {
                popup.classList.add('hidden');
                popup.style.display = '';
            }
            if (suggestionsBox && !nameInput.contains(e.target) && !suggestionsBox.contains(e.target)) {
                suggestionsBox.classList.add('hidden');
            }
        });
    }
    function setupPlusFilter(){
        const minEl = document.getElementById('plusMinInput');
        const maxEl = document.getElementById('plusMaxInput');
        if(!minEl || !maxEl) return;
        minEl.value = plusFilter.min;
        maxEl.value = plusFilter.max;
        const clampVal = (n) => Math.max(0, Math.min(200, Number.parseInt(n,10)));
        const applyFilter = (a,b, updateInputs=false, immediate=true) => {
            if(a>b){ const t=a; a=b; b=t; }
            plusFilter.min = a;
            plusFilter.max = b;
            localStorage.setItem('plusFilter', JSON.stringify(plusFilter));
            if(updateInputs){
                minEl.value = String(a);
                maxEl.value = String(b);
            }
            if(immediate){ filterAndPaginate(); } else { scheduleFilter(140); }
        };
        const onInput = () => {
            const rawMin = minEl.value.trim();
            const rawMax = maxEl.value.trim();
            if(rawMin === '' || rawMax === '') return;
            const a = clampVal(rawMin);
            const b = clampVal(rawMax);
            if(Number.isNaN(a) || Number.isNaN(b)) return;
            applyFilter(a,b,false,false);
        };
        const onChange = () => {
            let rawMin = minEl.value.trim();
            let rawMax = maxEl.value.trim();
            if(rawMin === '') rawMin = String(plusFilter.min ?? 0);
            if(rawMax === '') rawMax = String(plusFilter.max ?? 200);
            let a = clampVal(rawMin);
            let b = clampVal(rawMax);
            if(Number.isNaN(a)) a = 0;
            if(Number.isNaN(b)) b = 200;
            applyFilter(a,b,true);
        };

        minEl.addEventListener('input', onInput);
        maxEl.addEventListener('input', onInput);
        minEl.addEventListener('change', onChange);
        maxEl.addEventListener('change', onChange);
    }

    function setupDaysFilter() {
        const minEl = document.getElementById('daysMinInput');
        const maxEl = document.getElementById('daysMaxInput');
        const resetBtn = document.getElementById('resetDaysFilterBtn');
        
        if (!minEl || !maxEl || !resetBtn) return;
        
        minEl.value = daysFilter.min > 0 ? daysFilter.min : '';
        maxEl.value = daysFilter.max < 9999 ? daysFilter.max : '';
        
        const update = () => {
            const mn = Math.max(0, Number(minEl.value)||0);
            const mx = Math.max(mn, Number(maxEl.value)||9999);
            daysFilter.min = mn;
            daysFilter.max = mx;
            scheduleFilter(500);
        };
        
        minEl.addEventListener('input', update);
        maxEl.addEventListener('input', update);
        
        resetBtn.addEventListener('click', () => {
            daysFilter = { min: 0, max: 9999 };
            minEl.value = '';
            maxEl.value = '';
            scheduleFilter(500);
        });
    }

    function setupLevelFilter(){
        const minEl = document.getElementById('levelMinInput');
        const maxEl = document.getElementById('levelMaxInput');
        if(!minEl || !maxEl) return;
        minEl.value = levelFilter.min;
        maxEl.value = levelFilter.max;
        const clampVal = (n) => Math.max(0, Math.min(120, Number.parseInt(n,10)));
        const applyFilter = (a,b, updateInputs=false, immediate=true) => {
            if(a>b){ const t=a; a=b; b=t; }
            levelFilter.min = a;
            levelFilter.max = b;
            localStorage.setItem('levelFilter', JSON.stringify(levelFilter));
            if(updateInputs){
                minEl.value = String(a);
                maxEl.value = String(b);
            }
            if(immediate){ filterAndPaginate(); } else { scheduleFilter(140); }
        };
        const nullCb = document.getElementById('showNullLvCheckbox');
        if (nullCb) {
            nullCb.checked = !!showNullLevel;
            nullCb.addEventListener('change', () => {
                showNullLevel = !!nullCb.checked;
                localStorage.setItem('showNullLevel', JSON.stringify(showNullLevel));
                filterAndPaginate();
            });
        }
        const onInput = () => {
            const rawMin = minEl.value.trim();
            const rawMax = maxEl.value.trim();
            if(rawMin === '' || rawMax === '') return;
            const a = clampVal(rawMin);
            const b = clampVal(rawMax);
            if(Number.isNaN(a) || Number.isNaN(b)) return;
            applyFilter(a,b,false,false);
        };
        const onChange = () => {
            let rawMin = minEl.value.trim();
            let rawMax = maxEl.value.trim();
            if(rawMin === '') rawMin = String(levelFilter.min ?? 0);
            if(rawMax === '') rawMax = String(levelFilter.max ?? 120);
            let a = clampVal(rawMin);
            let b = clampVal(rawMax);
            if(Number.isNaN(a)) a = 0;
            if(Number.isNaN(b)) b = 120;
            applyFilter(a,b,true);
        };

        minEl.addEventListener('input', onInput);
        maxEl.addEventListener('input', onInput);
        minEl.addEventListener('change', onChange);
        maxEl.addEventListener('change', onChange);
    }
    function resetPlusFilter(){
        plusFilter = { min: 0, max: 200 };
        localStorage.setItem('plusFilter', JSON.stringify(plusFilter));
        const minEl = document.getElementById('plusMinInput');
        const maxEl = document.getElementById('plusMaxInput');
        if(minEl) minEl.value = String(plusFilter.min);
        if(maxEl) maxEl.value = String(plusFilter.max);
        filterAndPaginate();
    }
    function resetLevelFilter(){
        levelFilter = { min: 0, max: 120 };
        localStorage.setItem('levelFilter', JSON.stringify(levelFilter));
        const minEl = document.getElementById('levelMinInput');
        const maxEl = document.getElementById('levelMaxInput');
        if(minEl) minEl.value = String(levelFilter.min);
        if(maxEl) maxEl.value = String(levelFilter.max);
        filterAndPaginate();
    }

    function setupSellerFilter(){
        const sellerInput = document.getElementById('sellerSearchInput');
        const clearSellerBtn = document.getElementById('clear-seller-btn');
        if(!sellerInput) return;

        sellerInput.value = sellerFilter;

        if (sellerInput.value.trim()) {
            clearSellerBtn.classList.remove('hidden');
        } else {
            clearSellerBtn.classList.add('hidden');
        }

        if (clearSellerBtn) {
            clearSellerBtn.addEventListener('click', () => {
                sellerFilter = '';
                sellerInput.value = '';
                localStorage.setItem('sellerFilter', '');
                clearSellerBtn.classList.add('hidden');
                sellerInput.focus();
                scheduleFilter(140);
            });
        }

        sellerInput.addEventListener('input', () => {
            sellerFilter = sellerInput.value.trim();
            localStorage.setItem('sellerFilter', sellerFilter);
            if (sellerFilter) {
                clearSellerBtn.classList.remove('hidden');
            } else {
                clearSellerBtn.classList.add('hidden');
            }

            scheduleFilter(300);
        });

        const resetBtn = document.getElementById('resetSellerFilterBtn');
        if(resetBtn){
            resetBtn.addEventListener('click', () => {
                sellerFilter = '';
                sellerInput.value = '';
                localStorage.setItem('sellerFilter', '');
                filterAndPaginate();
            });
        }
    }

    function setupCountFilter(){
        const toggleBtn = document.getElementById('toggleCountFilter');
        const popup = document.getElementById('countFilterPopup');
        const countInput = document.getElementById('countInput');

        if(!toggleBtn || !popup) return;
        countFilter = null;
        if(countInput) countInput.value = '';
        toggleBtn.classList.remove('text-indigo-400');
        toggleBtn.classList.add('text-slate-400');

        toggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            popup.classList.toggle('hidden');
            if (!popup.classList.contains('hidden') && countInput) {
                countInput.focus();
            }
        });
        document.addEventListener('click', (e) => {
            if (!popup.contains(e.target) && !toggleBtn.contains(e.target)) {
                popup.classList.add('hidden');
            }
        });

        popup.addEventListener('click', e => e.stopPropagation());

        const applyFilter = () => {
            const val = parseInt(countInput.value);
            countFilter = isNaN(val) ? null : val;

            if (countFilter !== null) {
                toggleBtn.classList.remove('text-slate-400');
                toggleBtn.classList.add('text-indigo-400');
            } else {
                toggleBtn.classList.remove('text-indigo-400');
                toggleBtn.classList.add('text-slate-400');
            }

            scheduleFilter(300);
        };

        if(countInput) {
            countInput.addEventListener('input', applyFilter);
        }
    }

    function setupTooltipPositions() {
        if (window.innerWidth > 768) {
            const tooltips = document.querySelectorAll('.item-tooltip');
            tooltips.forEach(tooltip => {
                const group = tooltip.closest('.group');
                if (!group) return;
                
                const groupRect = group.getBoundingClientRect();
                const windowWidth = window.innerWidth;
                const maxWidth = tooltip.style.maxWidth || 
                                window.getComputedStyle(tooltip).maxWidth || 
                                '280px';
                const tooltipWidth = parseInt(maxWidth) || 280;
                
                const isRight = tooltip.classList.contains('item-tooltip-right');
                const wouldBeRight = groupRect.right + 12 + tooltipWidth <= windowWidth;
                const wouldBeLeft = groupRect.left - 12 - tooltipWidth >= 0;
                if (isRight && !wouldBeRight && wouldBeLeft) {
                    tooltip.classList.remove('item-tooltip-right');
                    tooltip.classList.add('item-tooltip-left');
                } else if (!isRight && !wouldBeLeft && wouldBeRight) {
                    tooltip.classList.remove('item-tooltip-left');
                    tooltip.classList.add('item-tooltip-right');
                }
            });
        }
    }

    function setupMobileTooltips() {
        const isMobile = window.innerWidth <= 768;
        
        if (!isMobile) {
            document.querySelectorAll('.item-tooltip').forEach(t => {
                t.style.display = '';
            });
        }
        
        if (setupMobileTooltips.listenersAttached) return;
        setupMobileTooltips.listenersAttached = true;
        
        const tooltipOverlay = document.getElementById('tooltip-overlay');
        
        document.addEventListener('click', function(e) {
            if (window.innerWidth > 768) return;

            const globalTooltip = document.getElementById('global-tooltip');
            const group = e.target.closest('.group');

            if (group) {
                const originalTooltip = group.querySelector('.item-tooltip');
                if (originalTooltip && globalTooltip) {
                    const clone = originalTooltip.cloneNode(true);
                    
                    clone.style.setProperty('position', 'static', 'important');
                    clone.style.setProperty('display', 'block', 'important');
                    clone.style.setProperty('visibility', 'visible', 'important');
                    clone.style.setProperty('opacity', '1', 'important');
                    clone.style.setProperty('transform', 'none', 'important');
                    clone.style.setProperty('margin', '0', 'important');
                    globalTooltip.innerHTML = '';
                    globalTooltip.appendChild(clone);
                    globalTooltip.style.display = 'block';
                    
                    const tooltipRect = clone.getBoundingClientRect();
                    
                    const windowWidth = window.innerWidth;
                    const windowHeight = window.innerHeight;
                    
                    let left = (windowWidth - tooltipRect.width) / 2;
                    let top = (windowHeight - tooltipRect.height) / 2;
                    
                    if (left < 10) left = 10;
                    if (top < 10) top = 10;
                    
                    globalTooltip.style.left = left + 'px';
                    globalTooltip.style.top = top + 'px';
                    
                    if (tooltipOverlay) tooltipOverlay.classList.add('active');
                }
            } else {
                if (globalTooltip) globalTooltip.style.display = 'none';
                if (tooltipOverlay) tooltipOverlay.classList.remove('active');
            }
        });

        if (tooltipOverlay) {
            tooltipOverlay.addEventListener('click', function() {
                const globalTooltip = document.getElementById('global-tooltip');
                if (globalTooltip) globalTooltip.style.display = 'none';
                tooltipOverlay.classList.remove('active');
            });
        }
    }

    document.addEventListener('DOMContentLoaded', init);
    document.addEventListener('DOMContentLoaded', setupMobileTooltips);
    document.addEventListener('DOMContentLoaded', setupTooltipPositions);
    window.addEventListener('resize', setupMobileTooltips);
    window.addEventListener('resize', setupTooltipPositions);
    window.addEventListener('scroll', setupTooltipPositions);
    const searchInput = document.getElementById('category-search-input');
    const optionsDiv = document.getElementById('category-options');
    const hiddenSelect = document.getElementById('category-filter-select');
    const clearCategoryBtn = document.getElementById('clear-category-btn');
    if(clearCategoryBtn) {
        clearCategoryBtn.addEventListener('click', clearCategoryInput);
    }

    searchInput.addEventListener('focus', () => optionsDiv.classList.remove('hidden'));
    searchInput.addEventListener('input', () => {
        const locale = getLocaleForLanguage(currentLanguage);
        const term = searchInput.value.toLocaleLowerCase(locale);


        if (searchInput.value.trim()) {
            clearCategoryBtn.classList.remove('hidden');
        } else {
            clearCategoryBtn.classList.add('hidden');
        }

        Array.from(optionsDiv.children).forEach(option => {
            option.style.display = option.textContent.toLocaleLowerCase(locale).includes(term) ? 'block' : 'none';
        });
    });


    if (searchInput.value.trim()) {
        clearCategoryBtn.classList.remove('hidden');
    } else {
        clearCategoryBtn.classList.add('hidden');
    }
    document.addEventListener('click', e => {
        if (!document.getElementById('custom-category-select').contains(e.target)) {
            optionsDiv.classList.add('hidden');
        }
    });
    const globalTooltip = document.createElement('div');
    globalTooltip.id = 'global-tooltip';
    globalTooltip.style.cssText = 'position: fixed; z-index: 99999; pointer-events: none; display: none; top: 0; left: 0;';
    document.body.appendChild(globalTooltip);

    let currentTooltipTarget = null;

    document.addEventListener('mouseover', function(e) {
        if (window.innerWidth <= 768) return;
        const group = e.target.closest('.group');
        if (group && group !== currentTooltipTarget) {
            const originalTooltip = group.querySelector('.item-tooltip');
            if (originalTooltip) {
                currentTooltipTarget = group;
                
                const clone = originalTooltip.cloneNode(true);
                
                clone.style.position = 'static';
                clone.style.display = 'block';
                clone.style.opacity = '1';
                clone.style.transform = 'none';
                clone.style.visibility = 'visible';
                clone.style.marginLeft = '0';
                clone.style.marginRight = '0';
                
                globalTooltip.innerHTML = '';
                globalTooltip.appendChild(clone);
                globalTooltip.style.display = 'block';
                
                updateGlobalTooltipPosition(e, clone);
            }
        }
    });

    document.addEventListener('mousemove', function(e) {
        if (globalTooltip.style.display !== 'none' && currentTooltipTarget) {
             const tooltipEl = globalTooltip.firstElementChild;
             if (tooltipEl) {
                 updateGlobalTooltipPosition(e, tooltipEl);
             }
        }
    });

    document.addEventListener('mouseout', function(e) {
        const group = e.target.closest('.group');
        if (group && group === currentTooltipTarget) {
            globalTooltip.style.display = 'none';
            currentTooltipTarget = null;
        }
    });
    
    function updateGlobalTooltipPosition(e, tooltipEl) {
        if (!currentTooltipTarget || !tooltipEl) return;
        
        const targetRect = currentTooltipTarget.getBoundingClientRect();
        const tooltipRect = tooltipEl.getBoundingClientRect();
        
        let left = targetRect.right + 12;
        let top = targetRect.top + (targetRect.height / 2) - (tooltipRect.height / 2);
        
        if (left + tooltipRect.width > window.innerWidth - 10) {
            left = targetRect.left - tooltipRect.width - 12;
        }
        
        if (top < 10) top = 10;
        if (top + tooltipRect.height > window.innerHeight - 10) {
            top = window.innerHeight - tooltipRect.height - 10;
        }
        
        globalTooltip.style.left = left + 'px';
        globalTooltip.style.top = top + 'px';
    }
