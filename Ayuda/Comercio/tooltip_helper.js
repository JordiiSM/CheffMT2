function formatDuration(seconds) {
    const LANG = window.LANG || {};
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

function createTooltipHtml(item) {
    const ITEM_DESC = window.ITEM_DESC_MAP || {};
    const ITEM_ICONS = window.ITEM_ICON_MAP || {};
    const ITEM_NAMES = window.item_names || {};
    const STAT_MAP = window.STAT_MAP || window.stat_map || {};
    const PROTO_STAT_MAP = window.proto_stat_map || {};
    const ITEM_PROTO = window.item_proto || {};
    const SITE_LANG = window.LANG || {};
    const PET_SKILLS = window.pet_skills || {};
    const ITEM_TYPE = window.ITEM_TYPE;
    let htmlContent = '';
    let dsId = 0;
    if (typeof item.vnum === 'number' && item.vnum >= 110000 && item.vnum <= 175460 && String(item.vnum).length === 6) {
        dsId = item.vnum;
        item.vnum = Math.floor(item.vnum / 100) * 100;
    }

    const appendLine = (text, colorClass, align) => {
        let content = text;
        if (text && typeof text === 'string' && text.includes('\n')) {
             const lines = text.split('\n');
             content = lines.map(line => `<div>${line}</div>`).join('');
        }
        htmlContent += `<div class="text-line text-${align} ${colorClass}">${content}</div>`;
    };

    const appendSpacer = () => {
        htmlContent += `<div class="spacer"></div>`;
    };
    const containerStart = `<div class="item-tooltip item-tooltip-right" style="padding:0; background:transparent; border:none; box-shadow:none; pointer-events:none;"><div class="tooltip-container">`;
    const protoItem = ITEM_PROTO[item.vnum];
    let iconUrl = item.imgSrc;
    if (!iconUrl) {
        const iconFilename = ITEM_ICONS[item.vnum] || "default.png";
        iconUrl = `/m2_data/icons/${iconFilename}`;
    }
    
    htmlContent += `
    <div class="item-icon-wrapper">
        <img src="${iconUrl}" alt="${item.name || ''}" style="max-width: 32px; max-height: 96px;" onerror="this.style.display='none'; this.parentNode.innerHTML='<div style=\\'width:32px; height:96px; background:#333; border:1px solid #555; display:flex; align-items:center; justify-content:center; color:#777;\\'>?</div>'">
    </div>`;


    
    let baseName = ITEM_NAMES[item.vnum] || item.name || "Unknown Item";
    if (typeof baseName === 'string') {
        baseName = baseName.replace(/<[^>]*>/g, ''); 
    }
    
    if (item.set && SITE_LANG.sets && SITE_LANG.sets[item.set]) {
        const setName = SITE_LANG.sets[item.set];
        if (!baseName.includes(setName)) {
             baseName = `[${setName}] ${baseName}`;
        }
    }
    
    htmlContent += `<div class="item-name color-title">${baseName}</div>`;
    const ELEMENT_COLOR_MAP = {
        99: "#22c7e8",  // Lightning
        100: "#dc583b", // Fire
        101: "#3c6cdf", // Ice
        102: "#36a321", // Wind
        103: "#f3cf14", // Earth
        104: "#b64eec", // Dark
        251: "#22c7e8",
        252: "#dc583b",
        253: "#3c6cdf",
        254: "#36a321",
        255: "#f3cf14",
        256: "#b64eec"
    };
    let isAbsorbingItem = false;
    if (protoItem && ITEM_TYPE && ITEM_TYPE[protoItem.Type] === ITEM_TYPE.ITEM_COSTUME) {
        if (protoItem.SubType === "COSTUME_AURA" || protoItem.SubType === "COSTUME_ACCE") {
            isAbsorbingItem = true;
        }
    }

    if (!isAbsorbingItem && item.elem && Array.isArray(item.elem) && item.elem.length >= 2) {
         const statID = item.elem[0];
         const elemValues = item.elem[1];
         
         let totalValue = 0;
         if (elemValues && Array.isArray(elemValues)) {
             totalValue = elemValues.reduce((a, b) => a + b, 0);
         }
         let fmt = STAT_MAP[statID] || `Bilinmeyen Element (${statID}) +%d`;
         let text = fmt.replace('%d', totalValue).replace(/%%/g, '%');

         if (elemValues && elemValues.length > 0) {
             text += ` (${elemValues.join(',')})`;
         }

         const colorHex = ELEMENT_COLOR_MAP[statID] || "#6699ff"; 
         
         htmlContent += `<div class="text-line text-center" style="color:${colorHex}">${text}</div>`;
         appendSpacer();
    }
    const desc = ITEM_DESC[item.vnum];
    if (desc) {
        htmlContent += `<div class="description-text">${desc}</div>`;
        appendSpacer();
    }
    if (protoItem) {
         [0, 1].forEach(i => {
             const limitType = protoItem[`LimitType${i}`];
             const limitValue = protoItem[`LimitValue${i}`];
             
             if (limitType === "LEVEL") {
                 const lvlText = SITE_LANG.TOOLTIP_ITEM_LIMIT_LEVEL || "Seviye: %d";
                 appendLine(lvlText.replace('%d', limitValue), 'color-normal', 'center');
             }
         });
    }
    if (protoItem && ITEM_TYPE) {
        const typeID = ITEM_TYPE[protoItem.Type];
        if (typeID === ITEM_TYPE.ITEM_GACHA) {
            appendSpacer();
            let useCount = 1;
            if (item.sockets && item.sockets[0] !== undefined && item.sockets[0] > 0) {
                useCount = item.sockets[0];
            }
            const restUsableText = SITE_LANG.TOOLTIP_REST_USABLE_COUNT ? SITE_LANG.TOOLTIP_REST_USABLE_COUNT.replace('%d', useCount) : `Kalan: ${useCount}`;
            htmlContent += `<div class="text-line text-center" style="color:#ABF200 !important">${restUsableText}</div>`;
        }
        if (typeID === ITEM_TYPE.ITEM_WEAPON) {
             appendSpacer();
             
             const val3 = parseInt(protoItem.Value3 || 0);
             const val4 = parseInt(protoItem.Value4 || 0);
             const val5 = parseInt(protoItem.Value5 || 0);
             
             const minAtk = val3 + val5;
             const maxAtk = val4 + val5;
             
             const val1 = parseInt(protoItem.Value1 || 0);
             const val2 = parseInt(protoItem.Value2 || 0);
             
             const minMagic = val1 + val5;
             const maxMagic = val2 + val5;
             
             if (val3 > 0 && val4 > 0) {
                 let text = `${SITE_LANG.STAT_TOOLTIP_ATT || 'Saldırı Değeri'} ${minAtk} - ${maxAtk}`;
                 
                 if (item.elem && item.elem.length > 2 && Array.isArray(item.elem[2])) {
                     const bonusSum = item.elem[2].reduce((a, b) => a + b, 0);
                     if (bonusSum > 0) {
                         text += ` (+${bonusSum})`;
                     }
                 }
                 
                 appendLine(text, 'color-positive', 'center');
             }
             
             if (val1 > 0 && val2 > 0) {
                 appendLine(`${SITE_LANG.STAT_TOOLTIP_MAG_ATT || 'Büyülü Saldırı Değeri'} ${minMagic} - ${maxMagic}`, 'color-positive', 'center');
             }
        }
        else if (typeID === ITEM_TYPE.ITEM_ARMOR) {
             appendSpacer();
             
             const val1 = parseInt(protoItem.Value1 || 0);
             const val5 = parseInt(protoItem.Value5 || 0); 
             
             const defValue = val1 + (val5 * 2);
             
             if (defValue > 0) {
                 const defText = SITE_LANG.TOOLTIP_ITEM_DEF_GRADE || "Defans %d";
                 let text = defText.replace('%d', defValue);
                 if (!text.includes('+')) {
                     text = text.replace('Defans', 'Defans ');
                 }
                 appendLine(text, 'color-positive', 'center');
             }
             
             const val0 = parseInt(protoItem.Value0 || 0);
             if (val0 > 0) {
                 appendLine(`Büyü Savunması ${val0}`, 'color-positive', 'center');
             }
        }
    }
    if (protoItem) {
         let randomSlotIndex = 0;
         
         for (let i = 0; i < 4; i++) { 
             const type = protoItem[`ApplyType${i}`];
             let value = parseInt(protoItem[`ApplyValue${i}`] || "0", 10);
             
             let typeID = null;
             let isRandom = false;
             
             if (type === "APPLY_RANDOM") {
                 if (item.rand && item.rand[randomSlotIndex]) {
                     typeID = item.rand[randomSlotIndex][0]; 
                     value = item.rand[randomSlotIndex][1]; 
                     randomSlotIndex++;
                     isRandom = true;
                 }
             } else if (type && type !== "APPLY_NONE" && value !== 0) {
                 if (type === "APPLY_ACCEDRAIN_RATE") {
                     continue; 
                 }
                 
                 typeID = PROTO_STAT_MAP[type];
             }
             
             if (typeID && STAT_MAP[typeID]) {
                  let text = STAT_MAP[typeID].replace('%d', value).replace('%%', '%');
                  
                  let color = 'color-normal';
                  if (isRandom) {
                      color = 'color-apply-random';
                  } else if (value > 0) {
                      color = 'color-positive';
                  } else if (value < 0) {
                      color = 'color-negative';
                  }
                  
                  appendLine(text, color, 'center'); 
             }
         }
    }
    
    appendSpacer();
    let isAura = false;
    let drainRate = 0;

    if (protoItem && ITEM_TYPE && ITEM_TYPE[protoItem.Type] === ITEM_TYPE.ITEM_COSTUME) {
         const subTypeStr = protoItem.SubType;
         if (subTypeStr === "COSTUME_AURA" || subTypeStr === "COSTUME_ACCE") {
             isAura = true;
         }
    }
    if (isAura) {
        let absorbedVnum = 0;
        let rateValue = 0;

        if (item.vnum === 49006) {
            const hasAttrs = item.attrs && Array.isArray(item.attrs) && item.attrs.length > 0;
            if (hasAttrs) {
                if (item.sockets && item.sockets.length > 1) {
                    rateValue = item.sockets[1];
                }
                if (item.sockets && item.sockets.length > 2) {
                    absorbedVnum = item.sockets[2];
                }
            } else {
                if (item.sockets && item.sockets.length > 0) {
                    rateValue = item.sockets[0];
                }
                absorbedVnum = 0;
            }
        } else {
            if (item.sockets && item.sockets.length === 1) {
                rateValue = item.sockets[0];
                absorbedVnum = 0;
            } else {
                if (item.sockets && item.sockets.length > 0) {
                    absorbedVnum = item.sockets[0];
                }
                if (item.sockets && item.sockets.length > 1) {
                    rateValue = item.sockets[1];
                }
            }
        }

        if (rateValue <= 0 && protoItem.SubType === "COSTUME_AURA") {
            rateValue = 250;
        }

        if (rateValue > 0) {
             if (protoItem.SubType === "COSTUME_AURA") {
                 appendSpacer();
                 const auraStep = SITE_LANG.AURA_LEVEL_STEP || "Sv %d (Seviye %d)";
                 appendLine(auraStep.replace('%d', rateValue).replace('%d', 6), 'color-condition', 'center');
             }
             
             if (protoItem.SubType === "COSTUME_ACCE") {
                 drainRate = rateValue / 100; 
             } else {
                 drainRate = rateValue / 1000; 
             }

             let finalRate = 0;
             if (protoItem.SubType === "COSTUME_ACCE") {
                 finalRate = rateValue; 
             } else {
                 finalRate = Math.floor(rateValue / 10); 
             }
             
             const fmtRate = STAT_MAP[97] || "Emiş oranı: %d%%";
             const textRate = fmtRate.replace('%d', finalRate).replace('%%', '%');
             appendLine(textRate, 'color-condition', 'center');
        }

        if (absorbedVnum > 0) {
            const absName = ITEM_NAMES[absorbedVnum] || "Bilinmeyen Eşya";
            
             if (item.elem && Array.isArray(item.elem) && item.elem.length >= 2) {
                 const statID = item.elem[0];
                 const elemValues = item.elem[1];
                 
                 let totalValue = 0;
                 if (elemValues && Array.isArray(elemValues)) {
                     totalValue = elemValues.reduce((a, b) => a + b, 0);
                 }
                 
                 let sTotal = Math.floor(totalValue * drainRate);
                 if (sTotal < 1 && totalValue > 0) sTotal = 1;

                 let sValues = [];
                 if (elemValues && Array.isArray(elemValues)) {
                     sValues = elemValues.map(v => v);
                 }

                 let fmt = STAT_MAP[statID] || `Bilinmeyen Element (${statID}) +%d`;
                 let text = fmt.replace('%d', sTotal).replace(/%%/g, '%');

                 if (sValues.length > 0) {
                     text += ` (${sValues.join(',')})`;
                 }
                 
                 const colorHex = ELEMENT_COLOR_MAP[statID] || "#6699ff";
                 htmlContent += `<div class="text-line text-center" style="color:${colorHex}">${text}</div>`;
             }
            
            const absorbedProto = ITEM_PROTO[absorbedVnum];
            if (absorbedProto && ITEM_TYPE) {
                const absTypeID = ITEM_TYPE[absorbedProto.Type];
                
                if (absTypeID === ITEM_TYPE.ITEM_WEAPON) {
                     const val3 = parseInt(absorbedProto.Value3 || 0); 
                     const val4 = parseInt(absorbedProto.Value4 || 0); 
                     const val5 = parseInt(absorbedProto.Value5 || 0); 
                     
                     const minAtk = val3 + val5;
                     const maxAtk = val4 + val5;
                     
                     const val1 = parseInt(absorbedProto.Value1 || 0); 
                     const val2 = parseInt(absorbedProto.Value2 || 0); 
                     
                     const minMagic = val1 + val5;
                     const maxMagic = val2 + val5;
                     
                     if (val3 > 0 && val4 > 0) {
                         let sMin = Math.floor(minAtk * drainRate);
                         if (sMin < 1) sMin = 1;
                         let sMax = Math.floor(maxAtk * drainRate);
                         if (sMax < 1) sMax = 1;
                         
                         if (sMin > 0 || sMax > 0) {
                             let text = `${SITE_LANG.STAT_TOOLTIP_ATT || 'Saldırı Değeri'} ${sMin} - ${sMax}`;
                             if (drainRate > 0 && (sMin !== minAtk || sMax !== maxAtk)) {
                                 text += ` (${minAtk} - ${maxAtk})`;
                             }
                             appendLine(text, 'color-positive', 'center'); 
                         }
                     }
                     
                     if (val1 > 0 && val2 > 0) {
                         let sMin = Math.floor(minMagic * drainRate);
                         if (sMin < 1) sMin = 1;
                         let sMax = Math.floor(maxMagic * drainRate);
                         if (sMax < 1) sMax = 1;
                         
                         if (sMin > 0 || sMax > 0) {
                             let text = `${SITE_LANG.STAT_TOOLTIP_MAG_ATT || 'Büyülü Saldırı Değeri'} +${sMin} - ${sMax}`;
                             if (drainRate > 0 && (sMin !== minMagic || sMax !== maxMagic)) {
                                 text += ` (${minMagic} - ${maxMagic})`;
                             }
                             appendLine(text, 'color-positive', 'center');
                         }
                     }
                } else if (absTypeID === ITEM_TYPE.ITEM_ARMOR) {
                     const val1 = parseInt(absorbedProto.Value1 || 0); 
                     const val5 = parseInt(absorbedProto.Value5 || 0); 
                     const defValue = val1 + (val5 * 2);
                     
                     if (defValue > 0) {
                         let sDef = Math.floor(defValue * drainRate);
                         if (sDef < 1) sDef = 1;
                         const defText = SITE_LANG.TOOLTIP_ITEM_DEF_GRADE || "Defans %d";
                         let text = defText.replace('%d', sDef);
                         if (!text.includes('+')) {
                             text = text.replace('Defans', 'Defans ');
                         }
                         if (drainRate > 0 && sDef !== defValue) {
                             text += ` (${defValue})`;
                         }
                         appendLine(text, 'color-positive', 'center');
                     }
                }

                let absRandomSlotIndex = 0;
                for (let i = 0; i < 4; i++) {
                    const type = absorbedProto[`ApplyType${i}`];
                    let rawValue = parseInt(absorbedProto[`ApplyValue${i}`] || "0", 10);
                    let typeID = null;
                    let isRandom = false;

                    if (type === "APPLY_RANDOM") {
                         if (item.rand && item.rand[absRandomSlotIndex]) {
                             typeID = item.rand[absRandomSlotIndex][0]; 
                             rawValue = item.rand[absRandomSlotIndex][1]; 
                             absRandomSlotIndex++;
                             isRandom = true;
                         }
                    } else if (type && type !== "APPLY_NONE" && rawValue !== 0) {
                        typeID = PROTO_STAT_MAP[type];
                    }

                    if (typeID && STAT_MAP[typeID]) {
                        let value = rawValue;
                        if (drainRate > 0) {
                            if (value > 0) {
                                value = Math.floor(value * drainRate);
                                if (value < 1) value = 1; 
                            } else {
                                value = Math.ceil(value * drainRate); 
                                if (value > -1) value = -1;
                            }
                        }

                        let text = STAT_MAP[typeID].replace('%d', value).replace('%%', '%');
                        if (drainRate > 0 && value !== rawValue) {
                            text += ` (${rawValue})`;
                        }
                        
                        let color = 'color-normal';
                        if (isRandom) {
                            color = 'color-apply-random';
                        } else if (value > 0) {
                            color = 'color-positive';
                        } else if (value < 0) {
                            color = 'color-negative';
                        }
                        
                        appendLine(text, color, 'center');
                    }
                }
            }
        }
    }
    if (item.attrs) {
        let processedAttrs = [...item.attrs];
        const has71 = processedAttrs.some(a => a[0] === 71);
        const has72 = processedAttrs.some(a => a[0] === 72);
        
        if (has72 && !has71) {
            processedAttrs.unshift([71, 0]); 
        } else if (has71 && !has72) {
            processedAttrs.unshift([72, 0]); 
        }

        processedAttrs.forEach((attr, index) => {
            const id = attr[0];
            let val = attr[1];
            
            if ((id === 71 || id === 72) && val === 0) return;

            if (isAura && drainRate > 0) {
                 if (val > 0) {
                     val = Math.floor(val * drainRate);
                     if (val < 1) val = 1;
                 } else if (val < 0) {
                     val = Math.ceil(val * drainRate);
                     if (val > -1) val = -1;
                 }
            }

            const fmt = STAT_MAP[id] || `Bilinmeyen (${id}) %d`;
            let text = fmt.replace('%d', val).replace('%%', '%');

            if (isAura && drainRate > 0 && val !== attr[1]) {
                 text += ` (${attr[1]})`;
            }
            
            let color = 'color-normal';
            const isDS = (protoItem && ITEM_TYPE && (
            ITEM_TYPE[protoItem.Type] === ITEM_TYPE.ITEM_DS || 
            protoItem.Type === "ITEM_DS" || 
            protoItem.Type == ITEM_TYPE.ITEM_DS ||
            ITEM_TYPE[protoItem.Type] === ITEM_TYPE.ITEM_SPECIAL_DS || 
            protoItem.Type === "ITEM_SPECIAL_DS" || 
            protoItem.Type == ITEM_TYPE.ITEM_SPECIAL_DS
        )) || (item.vnum >= 110000 && item.vnum <= 175499);

            if (val > 0) {
                if (index >= 5 && !isDS) {
                     color = 'color-rare'; 
                } else {
                     color = 'color-special-positive'; 
                }
            } else if (val < 0) {
                 color = 'color-negative';
            }
            
            text = text.trim();
            appendLine(text, color, 'center');
        });
        
        const attrCount = processedAttrs.length;
        let canHaveRare = false;
        if (protoItem && ITEM_TYPE) {
            const t = ITEM_TYPE[protoItem.Type];
            if (t === ITEM_TYPE.ITEM_WEAPON || t === ITEM_TYPE.ITEM_ARMOR) {
                canHaveRare = true;
            }
        }

        if (canHaveRare && attrCount < 7) {
            appendLine(SITE_LANG.ATTR_6TH_7TH_POSSIBILITY || "Bir ekstra bonus ekleyebilirsin", 'color-rare', 'center');
        }
    }

    if (isAura) {
        let absorbedVnum = 0;
        if (item.vnum === 49006) {
            const hasAttrs = item.attrs && Array.isArray(item.attrs) && item.attrs.length > 0;
            if (hasAttrs && item.sockets && item.sockets.length > 2) {
                absorbedVnum = item.sockets[0];
            } else {
                absorbedVnum = 0;
            }
        } else {
            if (item.sockets && item.sockets.length === 1) {
                absorbedVnum = 0;
            } else if (item.sockets && item.sockets.length > 0) {
                absorbedVnum = item.sockets[0];
            }
        }

        if (absorbedVnum > 0) {
            const absName = ITEM_NAMES[absorbedVnum] || "Bilinmeyen Eşya";
            appendSpacer();
            appendLine("[ Item ]", 'color-changelook-title', 'center');
            appendLine(absName, 'color-changelook-name', 'center');
        }
    } else if (item.changelookvnum && item.changelookvnum > 0) {
         appendSpacer();
         appendLine(`[ ${SITE_LANG.CHANGE_LOOK_TITLE || 'Yansıtma'} ]`, 'color-changelook-title', 'center');
         
         const clName = ITEM_NAMES[item.changelookvnum] || "Bilinmeyen Eşya";
         appendLine(clName, 'color-changelook-name', 'center');
    }

    if (protoItem && ITEM_TYPE) {
        const typeStr = protoItem.Type; 
        const typeID = ITEM_TYPE[typeStr];
        
        const wearableTypes = [
            ITEM_TYPE.ITEM_WEAPON,
            ITEM_TYPE.ITEM_ARMOR,
            ITEM_TYPE.ITEM_COSTUME,
            ITEM_TYPE.ITEM_RING,
            ITEM_TYPE.ITEM_BELT
        ];

        if (wearableTypes.includes(typeID)) {
             if (protoItem.AntiFlags) {
                 appendSpacer();
                 appendLine(`[ ${SITE_LANG.TOOLTIP_ITEM_WEARABLE_JOB || 'Giyilebilir'} ]`, 'color-title', 'center');

                 const antiFlags = protoItem.AntiFlags; 
                 
                 const classMap = [
                    { flag: "ANTI_MUSA", name: SITE_LANG.TOOLTIP_WARRIOR || "Savaşçı" },
                    { flag: "ANTI_ASSASSIN", name: SITE_LANG.TOOLTIP_ASSASSIN || "Ninja" },
                    { flag: "ANTI_SURA", name: SITE_LANG.TOOLTIP_SURA || "Sura" },
                    { flag: "ANTI_MUDANG", name: SITE_LANG.TOOLTIP_SHAMAN || "Şaman" },
                    { flag: "ANTI_WOLFMAN", name: SITE_LANG.TOOLTIP_WOLFMAN || "Lycan" }
                 ];

                 const wearableClasses = classMap.filter(cls => !antiFlags.includes(cls.flag));
                 
                 if (wearableClasses.length > 0) {
                     let spans = wearableClasses.map((cls, idx) => 
                         `<span class="color-normal" style="${idx < wearableClasses.length - 1 ? 'margin-right:5px' : ''}">${cls.name}</span>`
                     ).join('');
                     htmlContent += `<div class="text-center" style="margin-top:2px">${spans}</div>`;
                 }
             }
        }
    }
    let isRealTime = false;
    if (protoItem && (protoItem.LimitType0 === "REAL_TIME" || protoItem.SubType === "QUEST_GEM_BAG")) {
        isRealTime = true;
    }
    
    if (isAura) {
    } else if (isRealTime) {
        if (protoItem && ITEM_TYPE && (ITEM_TYPE[protoItem.Type] === ITEM_TYPE.ITEM_PET || protoItem.Type === "ITEM_PET")) {
        } else if (protoItem && protoItem.SubType === "QUEST_GEM_BAG" && item.sockets && item.sockets[1] !== undefined) {
            const gayaAmount = item.sockets[1];
            appendSpacer();
            htmlContent += `<div class="item-name color-title">${baseName}</div>`;
            const gayaAmountStyled = `<span style="color:#ABF200 !important">${gayaAmount}</span>`;
            let descriptionText = SITE_LANG.ITEM_TOOLTIP_DESC_GEM_BAG_HAVE_GEM || `Gaya kesesi (${gayaAmount} Gaya, ticareti yapılabilir).  Keseyi açarsan, ${gayaAmount} Gaya alırsın.`;
            descriptionText = descriptionText.replace(/%d/g, gayaAmountStyled);
            htmlContent += `<div class="description-text">${descriptionText.replace(/\n/g, '<br>')}</div>`;
        }
        if (item.sockets && item.sockets.length > 0 || (protoItem && protoItem.SubType === "QUEST_GEM_BAG" && item.sockets[1] !== undefined)) {
            const endTime = item.sockets[0];
            const now = Math.floor(Date.now() / 1000);
            const leftSec = endTime - now;
            
            if (leftSec > 0) {
                appendSpacer();
                const timeStr = formatDuration(leftSec);
                const leftTimeText = SITE_LANG.TITLE_SYSTEM_TOOLTIP_LEFT_TIME ? SITE_LANG.TITLE_SYSTEM_TOOLTIP_LEFT_TIME.replace('%s', timeStr) : `Kalan Süre : ${timeStr}`;
                appendLine(leftTimeText, 'color-title', 'center'); 
            }
        }
    } else if (item.sockets) {
        const hiddenSubtypes = ["ARMOR_NECK", "ARMOR_EAR", "ARMOR_FOOTS", "ARMOR_PENDANT", "ARMOR_WRIST"];
        const isHiddenArmor = protoItem && hiddenSubtypes.includes(protoItem.SubType);
        const isDS = (protoItem && ITEM_TYPE && (
            ITEM_TYPE[protoItem.Type] === ITEM_TYPE.ITEM_DS || 
            protoItem.Type === "ITEM_DS" || 
            protoItem.Type == ITEM_TYPE.ITEM_DS ||
            ITEM_TYPE[protoItem.Type] === ITEM_TYPE.ITEM_SPECIAL_DS || 
            protoItem.Type === "ITEM_SPECIAL_DS" || 
            protoItem.Type == ITEM_TYPE.ITEM_SPECIAL_DS
        )) || (item.vnum >= 110000 && item.vnum <= 175499);

        if ((protoItem && ITEM_TYPE && (ITEM_TYPE[protoItem.Type] === ITEM_TYPE.ITEM_BELT || ITEM_TYPE[protoItem.Type] === ITEM_TYPE.ITEM_GACHA || ITEM_TYPE[protoItem.Type] === ITEM_TYPE.ITEM_POLYMORPH || (ITEM_TYPE[protoItem.Type] === ITEM_TYPE.ITEM_QUEST && protoItem.SubType === "QUEST_GEM_BAG"))) || isHiddenArmor || isDS) {
        } else {
            appendSpacer();
            item.sockets.forEach(sock => {
                const sName = ITEM_NAMES[sock] || `Taş (${sock})`;
                const sIconFile = ITEM_ICONS[sock] || "default.png"; 
                const sIconUrl = `/m2_data/icons/${sIconFile}`; 

                let statText = "";
                const stoneProto = ITEM_PROTO[sock]; 
                
                if (stoneProto) {
                    for (let i = 0; i < 3; i++) {
                        const typeKey = `ApplyType${i}`;
                        const valKey = `ApplyValue${i}`;
                        const applyTypeStr = stoneProto[typeKey];
                        const applyVal = parseInt(stoneProto[valKey] || "0", 10);

                        if (applyTypeStr && applyTypeStr !== "APPLY_NONE" && applyVal !== 0) {
                            const typeID = PROTO_STAT_MAP[applyTypeStr];
                            if (typeID && STAT_MAP[typeID]) {
                                let txt = STAT_MAP[typeID].replace('%d', applyVal).replace('%%', '%');
                                statText = txt; 
                                break; 
                            }
                        }
                    }
                }

                htmlContent += `
                <div class="stone-container">
                    <div class="stone-icon-wrapper">
                        <img src="${sIconUrl}" class="stone-icon" onerror="this.style.display='none'">
            </div>
                    <div class="stone-info">
                        <div class="color-normal">${sName}</div>
                        ${statText ? `<div class="color-positive">${statText}</div>` : ''}
        </div>
                </div>`;
            });
        }
    }
    if (protoItem && ITEM_TYPE && (ITEM_TYPE[protoItem.Type] === ITEM_TYPE.ITEM_PET || protoItem.Type === "ITEM_PET") && item.petInfo && Array.isArray(item.petInfo) && item.petInfo.length >= 3) {
         appendSpacer();
         
         const [petVnum, petType, getPet, petSkill, petPotential] = item.petInfo;
         
         if (Array.isArray(getPet)) {
             const baseLevel     = getPet[0];
             const evolvedLevel  = getPet[1];
             const petTypeNum    = petType;
             const createdTs     = getPet[3];
             const ownerName     = getPet[4];
             const statA         = getPet[5]; // HP
             const statB         = getPet[6]; // Def
             const statC         = getPet[7]; // SP
             

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
             
             let shownLevel = (evolvedLevel > 0) ? evolvedLevel : baseLevel;
             let levelColorClass = (evolvedLevel > 0) ? 'color-pet-evolved' : 'color-pet-base';
             let levelPrefix = (evolvedLevel > 0) ? 'F. Sv' : 'Seviye';
             
             const typeKey = `PET_ATTR_DETERMINE_TYPE${petTypeNum}`;
             const typeText = SITE_LANG[typeKey] || `Tip ${petTypeNum}`;
             appendLine(`${ownerName} (${typeText})`, 'color-pet-highlight', 'center');
             
             if (evolvedLevel > 0 && SITE_LANG.PET_TOOLTIP_CONQUEROR_LEVEL_AND_LIFETIME) {
                const txt = SITE_LANG.PET_TOOLTIP_CONQUEROR_LEVEL_AND_LIFETIME;
                const daySuffix = (SITE_LANG.ui && SITE_LANG.ui.durationUnits && SITE_LANG.ui.durationUnits.day) ? SITE_LANG.ui.durationUnits.day : 'g';
                const dayStr = `${diffDays}${daySuffix}`;
                appendLine(txt.replace('%d', shownLevel).replace('%s', dayStr), levelColorClass, 'center');
             } else {
                const daySuffix = (SITE_LANG.ui && SITE_LANG.ui.durationUnits && SITE_LANG.ui.durationUnits.day) ? SITE_LANG.ui.durationUnits.day : 'g';
                const dayStr = `${diffDays}${daySuffix}`;
                
                if (SITE_LANG.PET_LEVEL) {
                    appendLine(SITE_LANG.PET_LEVEL.replace('%d', shownLevel).replace('%s', dayStr), levelColorClass, 'center');
                } else {
                    appendLine(`${levelPrefix} ${shownLevel} (${dayStr})`, levelColorClass, 'center');
                }
             }
             
             appendLine(`${SITE_LANG.PET_TOOLTIP_HP || 'HP'}: +${statA}%`, 'color-pet-hp', 'center');
             appendLine(`${SITE_LANG.PET_TOOLTIP_DEF || 'Defans'}: +${statB}%`, 'color-pet-def', 'center');
             appendLine(`${SITE_LANG.PET_TOOLTIP_SP || 'SP'}: +${statC}%`, 'color-pet-sp', 'center');
             if (Array.isArray(petSkill) && petSkill.length > 0) {
                 if (petSkill[1] !== 0 || petSkill[4] !== 0 || petSkill[7] !== 0) {
                     appendSpacer();
                     // appendLine("Beceriler", 'color-pet-skill-title', 'center');
                     const champF = Number(getPet[9] || 0);
                     const champS = Number(getPet[10] || 0);
                     const champT = Number(getPet[11] || 0);
                     
                     const fmt = (v) => Number.isInteger(v) ? String(v) : v.toFixed(1);
                     
                     if (champF > 0) {
                        const txt = SITE_LANG.PET_TOOLTIP_CONQUEROR_SUNGMA_MOVE || `% olarak SungMa iradesi: +${fmt(champF)}%`;
                        appendLine(txt.replace('%0.1f', fmt(champF)).replace(/%%/g, '%'), 'color-pet-skill', 'center');
                     }
                     if (champS > 0) {
                        const txt = SITE_LANG.PET_TOOLTIP_CONQUEROR_BLOCK_PENETRATE_PCT || `% olarak engelleme nüfuzu: Toplam değerin +${fmt(champS)}% oranında`;
                        appendLine(txt.replace('%0.1f', fmt(champS)).replace(/%%/g, '%'), 'color-pet-skill', 'center');
                     }
                     if (champT > 0) {
                        const txt = SITE_LANG.PET_TOOLTIP_CONQUEROR_HIT_PCT || `% olarak tamlık: +${fmt(champT)}%`;
                        appendLine(txt.replace('%0.1f', fmt(champT)).replace(/%%/g, '%'), 'color-pet-skill', 'center');
                     }
                     
                     for (let i = 0; i + 2 < petSkill.length; i += 3) {
                        const skillId = petSkill[i + 1];
                        const skillLv = petSkill[i + 2];
                        if (!skillId || !skillLv) continue;
                        
                        const skillName = PET_SKILLS[skillId] || `Skill #${skillId}`; 
                        const skillText = SITE_LANG.PET_TOOLTUP_SKILL || "%s (Seviye %d)";
                        appendLine(skillText.replace('%s', skillName).replace('%d', skillLv), 'color-pet-skill', 'center');
                     }
                 }
             }
             // Potential
             if (Array.isArray(petPotential) && petPotential.length > 0) {
                 appendSpacer();
                 appendLine(SITE_LANG.PET_INFO_POTENTIAL_SKILL || "Potansiyel Beceri", 'color-pet-skill-title', 'center');
                 petPotential.forEach(row => {
                     if (!Array.isArray(row) || row.length < 2) return;
                     const sVnum = row[1];
                     const sLv = row[2];
                     const sName = PET_SKILLS[sVnum] || `Skill item ${sVnum}`;
                     const sText = SITE_LANG.PET_TOOLTUP_SKILL || "%s (Seviye %d)";
                     appendLine(sText.replace('%s', sName).replace('%d', sLv), 'color-pet-highlight', 'center');
                 });
             }
         }
    }
    const valYang = parseInt(item.yangPrice || item.yang || 0, 10);
    const valWon = parseInt(item.wonPrice || item.won || 0, 10);

    if (valYang > 0 || valWon > 0) {
        appendSpacer();
        let parts = [];
        
        const formatPrice = (num) => num.toLocaleString('tr-TR');

        if (valWon > 0) {
            parts.push(`<img src="/m2_data/icons/won.png" style="vertical-align: middle; display: inline-block; margin-left: 3px; margin-right: 5px; width: 16px; height: 16px;"><span style="color: #8acdff !important">${formatPrice(valWon)} ${SITE_LANG.CHEQUE_SYSTEM_UNIT_WON || 'Won'}</span>`);
        }
        if (valYang > 0) {
            parts.push(`<img src="/m2_data/icons/yang.png" style="vertical-align: middle; display: inline-block; margin-left: 3px; width: 16px; height: 16px;"><span class="color-price">${formatPrice(valYang)} ${SITE_LANG.CHEQUE_SYSTEM_UNIT_YANG || 'Yang'}</span>`);
        }
        appendLine(parts.join(" "), '', 'center');
    }

    return containerStart + htmlContent + '</div></div>';
}
