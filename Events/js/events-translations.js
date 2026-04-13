const VALID_LANGS = ['de','en','tr','es'];
const translations = {
de: {
flag: "🇩🇪",
label: "Deutsch",
title: "Event Helper",
subtitle:
"Hier findest du eine Übersicht über alle Events und einige Hilfetools.",
footer: "Metin2 Helper by NikKing97. Not official by Gameforge.",
activeLabel: "AKTIV",
events: {
treasure: {
title: "Schatzinsel - Goblin",
summary:
"Schütze einen Schatzgoblin vor Monstern, sammle Dublonen und nutze sie für eine Mini‑Schatzsuche.<br><strong>Ab Level 70</strong>",
descTitle: "Beschreibung",
desc: 'Mit einem <span class="treasure-ticket-highlight"><img src="https://m2-helper.com/resources/events/Schatzticket.png" alt="Schatzticket" class="inline w-6 h-6 mx-1.5 align-top -mt-0">Schatzticket<div class="tooltip">Das Schatzticket findest du in Truhen während des Eventzeitraums.<br><img src="https://m2-helper.com/resources/events/Goldene_Schatztruhe.png" alt="Goldene Truhe" class="inline w-5 h-5 mx-1"> <img src="https://m2-helper.com/resources/events/Goldener_Schlüssel.png" alt="Goldener Schlüssel" class="inline w-5 h-5 mx-1"></div></span> teleportierst du dich zur Insel, wo der Schatzgoblin wartet. Unterwegs erscheinen 3 riesige Schatztruhen – nur eine enthält den Schatz. Sobald der Goblin die richtige gefunden hat, endet die Mission erfolgreich. Stirbt er oder du, scheitert sie. <br><br><img src="https://m2-helper.com/resources/events/Dublone.png" alt="Dublone" class="inline w-7 h-7 mx-1.5 align-top -mt-0.5">Du erhälst 1 Dublone pro Monster, bei Erfolg 100 Dublonen – max. Kapazität: 999 Dublonen.',
huntTitle: "Schatzsuche:",
huntDesc: [
"Öffne das Event-UI.",
'Gegen <strong>90 Dublonen</strong> legst du das Suchfeld frei – die erste Belohnung ist gratis, danach kostet es pro weiteren Suche je einen<img src="Events/images/goblin_key.png" alt="Goblin-Schlüssel" class="inline w-6 h-6 mx-1.5 align-top -mt-0">Goblin-Schlüssel.',
"Die Runde bestimmt, welche Belohnungen du erhalten kannst. Ab der 3. Runde, der 5. Runde und der 10. Runde erweitert sich das Belohnungsfeld.",
"Sobald du <strong>9 Belohnungen</strong> in einer Serie sammelst, ohne die Runde zurückzusetzen, steigst du eine Runde auf.",
],
roundRewardsTitle: "Rundenbelohnungen:",
roundRewards: [
"Nach jeder abgeschlossenen Runde erhältst du eine zufällige Belohnung.",
"Ab Runde 10 erhältst du für jede weitere Runde die 10. Rundenbelohnung.",
],
roundRewardsTable: {
rounds: [
{
number: 1,
rewards: [
{
name: "Grüner Trank (40x)",
icon: "rundenbelohnungen/Grüner_Trank.png",
},
{
name: "Cor Daemonis (Roh) (3x)",
icon: "rundenbelohnungen/Cor_Daemonis_(Roh).png",
},
],
},
{
number: 2,
rewards: [
{
name: "Kritischer Kampf (10x)",
icon: "rundenbelohnungen/Kritischer_Kampf.png",
},
{
name: "Durchbohrender Kampf (10x)",
icon: "rundenbelohnungen/Durchbohrender_Kampf.png",
},
],
},
{
number: 3,
rewards: [
{
name: "Cor Daemonis (Roh) (15x)",
icon: "rundenbelohnungen/Cor_Daemonis_(Roh).png",
},
{
name: "Erfahrungsring (1T 12h)",
icon: "rundenbelohnungen/Erfahrungsring.png",
},
],
},
{
number: 4,
rewards: [
{
name: "Goblin Schlüsselbox",
icon: "Goblin-Schlüsselbox.png",
},
{
name: "Segen des Drachen (5x)",
icon: "rundenbelohnungen/Segen_des_Drachen.png",
},
],
},
{
number: 5,
rewards: [
{
name: "Einen antiken Drachenstein (matt)",
icon: "rundenbelohnungen/Roher_Drachenrubin_(matt).png",
},
{
name: "Cor Daemonis (Roh) (20x)",
icon: "rundenbelohnungen/Cor_Daemonis_(Roh).png",
},
],
},
{
number: 6,
rewards: [
{
name: "Veredelungssegen",
icon: "rundenbelohnungen/Veredlungssegen.png",
tooltip: "+10% Erfolgschance beim nächsten Verbesserungsversuch<br>(Für die ersten 100 Spieler)",
},
{
name: "Feuerrune der Aura 100 (10x)",
icon: "rundenbelohnungen/Feuerrune_der_Aura.png",
},
],
},
{
number: 7,
rewards: [
{
name: "Reiten (Zufall)",
icon: "rundenbelohnungen/Reiten_zufall.png",
},
{
name: "Monsterjäger Buch",
icon: "rundenbelohnungen/monster_Buch.png",
},
],
},
{
number: 8,
rewards: [
{
name: "Einen antiken Drachenstein (matt)",
icon: "rundenbelohnungen/Roher_Drachenrubin_(matt).png",
},
{
name: "Flamme des Drachen B (2x)",
icon: "rundenbelohnungen/Flamme_des_Drachen.png",
},
],
},
{
number: 9,
rewards: [
{
name: "Veredelungssegen",
icon: "rundenbelohnungen/Veredlungssegen.png",
tooltip: "Beim nächsten Verbesserungsversuch werden keine Materialien benötigt<br>(Für die ersten 50 Spieler)",
},
{
name: "Feuerphönix (Beute) (30T)",
icon: "rundenbelohnungen/Feuerphönix.png",
},
],
},
],
round10: {
title: "Runde 10 (Wiederholend)",
rewards: [
{
name: "Eisendrachenelixier (L)",
icon: "rundenbelohnungen/Eisendrachenelixir_(L).png",
},
{
name: "Segen des Drachen (10x)",
icon: "rundenbelohnungen/Segen_des_Drachen.png",
},
{
name: "Passierschein B (20x)",
icon: "rundenbelohnungen/Passierschein_B.png",
},
{
name: "Cor Draconis (mystisch)",
icon: "rundenbelohnungen/Cor_Draconis_(mystisch).png",
},
{
name: "Weißdrachenelixier (L)",
icon: "rundenbelohnungen/Weißdrachenelixir_(L).png",
},
],
},
},
tipsTitle: "Tipps & Tricks:",
tips: [
"Habe vor dem Event bereits einige Schatztruhen und passende Schlüssel parat.",
'Nutze die <span class="treasure-ticket-highlight">Buffs für den Goblin<div class="tooltip">• TP +20%<br>• Verteidigung +50<br>• Bewegungsgeschwindigkeit +100<br>• Immunität gegen Gift<br><br>Jeder Buff kostet eine kleine Menge <img src="https://m2-helper.com/resources/yang.png" alt="Yang" class="inline w-5 h-5 mx-1">Yang</div></span>, um ihn resistenter zu machen und schneller laufen zu lassen.',
'Nutze die erste Gratisbelohnung und das Zurücksetzen, um kostenlos an<img src="Events/images/goblin_key.png" alt="Goblin-Schlüssel" class="inline w-6 h-6 mx-1.5 align-top -mt-0">Goblin-Schlüssel zu kommen.',
'Nutze die <span class="treasure-ticket-highlight"><img src="https://m2-helper.com/resources/events/Goblin-Schlüsselbox.png" alt="Goblin-Schlüsselbox" class="inline w-6 h-6 mx-1.5 align-top -mt-0">Goblin-Schlüsselboxen<div class="tooltip">Enthält 8x<img src="Events/images/goblin_key.png" alt="Goblin-Schlüssel" class="inline w-5 h-5 mx-1">Goblin-Schlüssel</div></span> aus dem Itemshop, um schnell in den Rundenbelohnungen voran zu kommen.',
],
note: "<strong>Hinweis:</strong> Auf vielen Servern sind die Veredelungssegen sehr schnell vergriffen!",
},
underworld: {
title: "Reise in die Anderwelt",
summary:
"Kämpfe gegen mächtige Gegner und sammle seltene Materialien.<br><strong>Ab Level 90</strong>",
descTitle: "Beschreibung",
desc: "Die Reise in die Anderwelt ist in <strong>zwei Phasen</strong> aufgeteilt. In der ersten Phase erhält man durch Monsterkills<img src=\"Events/images/Totenflamme.png\" alt=\"Totenflamme\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\"><strong>Totenflammen</strong>, welche direkt in dem Event-Interface landen. Diese Totenflammen kann man gegen Gegenstände eintauschen, welche man in der zweiten Phase des Events benötigt.",
mechanicsTitle: "<span style='font-size: 1.25em; font-weight: bold;'>1. Phase - Totenflammen eintauschen:</span>",
mechanicsDesc: [
"Die in Phase 1 gesammelten Totenflammen können gegen fünf verschiedene Gegenstände eingetauscht werden. Jeder Gegenstand benötigt eine bestimmte Anzahl an Totenflammen und bietet unterschiedliche Funktionen für Phase 2 des Events.<br>Das <strong>Umtauschen</strong> der Totenflammen in den gewünschten Gegenstand <strong>klappt zu 80%</strong>."        ],
blackLetterTitle: "Schwarzer Brief:",
blackLetterDesc: "Die Schwarzen Briefe ermöglichen dir den Zugang zur Anderwelt.<br>Mit <strong>3x Schwarzer Brief</strong> kannst du die Anderwelt betreten. Außerdem kannst du mit <strong>10x Schwarzer Brief</strong> die vier Prüfungen in der Anderwelt betreten.",
blackLetterTableHeader: ["1.", "2.", "3.", "4.", "5.", "6."],
blackLetterTableValues: ["1x", "3x", "5x", "10x", "15x", "20x"],
tableHeaderDeaths: "Anzahl Tode",
tableHeaderWater: "Benötigte Wasser",
waterOfLifeTitle: "Wasser des Lebens:",
waterOfLifeDesc: "Mit dem Wasser des Lebens kannst du dich nach dem Tod in der Anderwelt <strong>wiederbeleben</strong> lassen. Je öfter du stirbst, desto mehr Wasser benötigst du für die Wiederbelebung.",
deathSoulTitle: "Totenseele:",
deathSoulDesc: "Wird benötigt um die <strong>TP von Asmodeus</strong> zu <strong>reduzieren</strong>. Die TP von Asmodeus kann 4x reduziert werden. Die TP-Reduktion hält für einen Run. Du kannst die Totenseelem beim Wächter Hae-Tae nutzen.",
deathSoulTableHeader: ["20", "40", "60", "80"],
deathSoulTableValues: ["-20%", "-40%", "-60%", "-90%"],
tableHeaderSouls: "Anzahl Totenseelen",
tableHeaderReduction: "TP Reduzierung",
asmodeusKeyTitle: "Asmodeus-Schlüssel:",
asmodeusKeyDesc: "Einen Asmodeus-Schlüssel kannst du verwenden, um <strong>direkt gegen Asmodeus</strong> zu <strong>kämpfen</strong>, ohne vorher die vier Prüfungen zu absolvieren.<br><br>",
phaseTitle: "<span style='font-size: 1.25em; font-weight: bold;'>2. Phase - Prüfungen und Asmodeus-Kampf:</span>",
phaseDesc: "In der zweiten Phase des Events betrittst du die <strong>Anderwelt</strong> und kämpfst gegen mächtige Gegner.<br>Das Portal für die Anderwelt findest du am <strong>Hafen</strong> des <strong>Kap des Drachenfeuers</strong>.<br><br>In der Anderwelt hat man nun die Möglichkeit die <strong>vier Prüfungen</strong> der Erde, Nacht, Donners und Lüfte zu absolvieren. Aus diesen Prüfungen erhält man das Verdammnis-Kostümset. Mit diesem Kostümset erhält man <strong>+100% Kraft der Dunkelheit</strong> und <strong>+400% Stark gegen Untote</strong>.<br><br>Nachdem man die vier Prüfungen absolviert hat, kann man <u>ohne</u> einen Asmodeus-Schlüssel zum Asmodeus gelangen und gegen diesen kämpfen. Sobald der Asmodeus besiegt ist, spawnt ein weiterer nach. Die ersten vier Asmodeus droppen eine<img src=\"https://m2-helper.com/resources/events/anderwelt/Verdammnis-Truhe.png\" alt=\"Truhe\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\"><strong>Verdammnis-Truhe</strong>, alle weiteren droppen eine<img src=\"https://m2-helper.com/resources/events/anderwelt/Verdammnis-Truhe+.png\" alt=\"Truhe\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\"><strong>Verdammnis-Truhe+</strong>.<br><br>Nachdem man den Asmodeus besiegt hat, kann man in die <strong>Erlösung</strong> gelangen. In der Erlösung steht jedes Mal ein Erlösungsmetin, welcher dropps für den <span class=\"treasure-ticket-highlight\"><img src=\"https://m2-helper.com/resources/events/anderwelt/Phönix_der_Erlösung.png\" alt=\"Phönix\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\"><strong>Phönix der Erösung</strong><div class=\"tooltip\">7 Tage Lootpet</div></span> droppt und<img src=\"https://m2-helper.com/resources/events/anderwelt/Verdammnis-Schlüssel.png\" alt=\"Schlüssel\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\"><strong>Verdammnis-Schlüssel</strong> sowie<img src=\"https://m2-helper.com/resources/events/anderwelt/Verdammnis-Schlüssel+.png\" alt=\"Schlüssel+\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\"><strong>Verdammnis-Schlüssel+</strong>.",
imageSrc: "https://m2-helper.com/resources/events/anderwelt/event-interface-de.png",
imageAlt: "Anderwelt Interface",
imageCaption: "Anderwelt Event-Interface",
rewardsTitle: "Belohnungen:",
rewardsTable: [
{
category: "Verdammnis-Truhe",
icon: "https://m2-helper.com/resources/events/anderwelt/Verdammnis-Truhe.png",
contents: [
{ name: "Verdammte Seele", icon: "https://m2-helper.com/resources/events/anderwelt/Verdammte_Seele.png", probability: "19.23%" },
{ name: "Verdammte Seele (2x)", icon: "https://m2-helper.com/resources/events/anderwelt/Verdammte_Seele.png", probability: "12.82%" },
{ name: "Verdammte Seele (5x)", icon: "https://m2-helper.com/resources/events/anderwelt/Verdammte_Seele.png", probability: "4.27%" },
{ name: "Buch des Unlebens", icon: "https://m2-helper.com/resources/events/anderwelt/Buch_des_Unlebens.png", probability: "19.23%" },
{ name: "Buch des Unlebens (2x)", icon: "https://m2-helper.com/resources/events/anderwelt/Buch_des_Unlebens.png", probability: "12.82%" },
{ name: "Buch des Unlebens (5x)", icon: "https://m2-helper.com/resources/events/anderwelt/Buch_des_Unlebens.png", probability: "4.27%" },
{ name: "Asmodeus-Schuppe", icon: "https://m2-helper.com/resources/events/anderwelt/Asmodeus-Schuppe.png", probability: "8.55%" },
{ name: "Asmodeus-Schuppe (2x)", icon: "https://m2-helper.com/resources/events/anderwelt/Asmodeus-Schuppe.png", probability: "4.27%" },
{ name: "Asmodeus-Schuppe (3x)", icon: "https://m2-helper.com/resources/events/anderwelt/Asmodeus-Schuppe.png", probability: "0.85%" },
{ name: "Asmodeus-Schulterschutz", icon: "https://m2-helper.com/resources/events/anderwelt/Asmodeus-Schulterschutz.png", probability: "8.55%" },
{ name: "Asmodeus-Schulterschutz (2x)", icon: "https://m2-helper.com/resources/events/anderwelt/Asmodeus-Schulterschutz.png", probability: "4.27%" },
{ name: "Asmodeus-Schulterschutz (3x)", icon: "https://m2-helper.com/resources/events/anderwelt/Asmodeus-Schulterschutz.png", probability: "0.85%" }
]
},
{
category: "Verdammnis-Truhe+",
icon: "https://m2-helper.com/resources/events/anderwelt/Verdammnis-Truhe+.png",
contents: [
{ name: "Asmodeus-Schuppe (5x)", icon: "https://m2-helper.com/resources/events/anderwelt/Asmodeus-Schuppe.png", probability: "18.00%" },
{ name: "Asmodeus-Schuppe (10x)", icon: "https://m2-helper.com/resources/events/anderwelt/Asmodeus-Schuppe.png", probability: "13.50%" },
{ name: "Asmodeus-Schulterschutz (3x)", icon: "https://m2-helper.com/resources/events/anderwelt/Asmodeus-Schulterschutz.png", probability: "18.00%" },
{ name: "Asmodeus-Schulterschutz (6x)", icon: "https://m2-helper.com/resources/events/anderwelt/Asmodeus-Schulterschutz.png", probability: "13.50%" },
{ name: "Buch des Unlebens (10x)", icon: "https://m2-helper.com/resources/events/anderwelt/Buch_des_Unlebens.png", probability: "9.00%" },
{ name: "Buch des Unlebens (20x)", icon: "https://m2-helper.com/resources/events/anderwelt/Buch_des_Unlebens.png", probability: "4.50%" },
{ name: "Verdammte Seele (10x)", icon: "https://m2-helper.com/resources/events/anderwelt/Verdammte_Seele.png", probability: "9.00%" },
{ name: "Verdammte Seele (20x)", icon: "https://m2-helper.com/resources/events/anderwelt/Verdammte_Seele.png", probability: "4.50%" },
{ name: "Asmodeus-Horn", icon: "https://m2-helper.com/resources/events/anderwelt/Asmodeus-Horn.png", probability: "9.00%" },
{ name: "Asmodeus-Horn (3x)", icon: "https://m2-helper.com/resources/events/anderwelt/Asmodeus-Horn.png", probability: "0.90%" },
{ name: "Asmodeus-Mähne", icon: "https://m2-helper.com/resources/events/anderwelt/Asmodeus-Mähne.png", probability: "0.09%" }
]
}
],
tipsTitle: "Tipps & Tricks:",
tips: [
"Du kannst den Effekt des<img src=\"https://m2-helper.com/resources/events/anderwelt/Anderwelt-Talisman.png\" alt=\"Talisman\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\">Anderwelt-Talisman stacken.",
"Asmodeus besitzt starke FKS-Angriffe, es empfiehlt sich FKS-Deff oder viel TP im Equip zu haben.",
"Nachdem man einige Schwarze Briefe zusammen hat, sollte man sich auf Asmodeus-Schlüssel konzentrieren, um oft Asmodeus zu besiegen und direkt in die Erlösung zu reisen.",
"Es macht Sinn jeweils ein vielfaches von 80 an Totenseelen zu haben, um die TP des Asmodeus effizient zu verringern."
],
note: "<strong>Hinweis:</strong> Wenn man während des Events ein<img src=\"https://m2-helper.com/resources/events/anderwelt/Verdammnis-Schild.png\" alt=\"Schild\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\">Verdammnis-Schild herstellt, erhält man ein weiteres durch die<img src=\"https://m2-helper.com/resources/mission.png\" alt=\"mission\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\">Missionen!",
},
tombola: {
title: "Tombola",
summary:
"Teste dein Glück bei der großen Tombola und gewinne wertvolle Preise.<br><strong>Ab Level 1</strong>",
descTitle: "Beschreibung",
desc: "Die Tombola in Metin2 findet zweimal im Jahr statt und ist ein Event, welches ausschließlich im Itemshop verfügbar ist. Jeden Tag kannst du bis zu <strong>10 Lose</strong> kaufen.<br>Jedes Los kostet<img src=\"https://m2-helper.com/resources/events/tombola/Drachenmarke.png\" alt=\"Drachenmarke\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\">Drachenmarken - die Anzahl an Drachenmarken steigt je Los. Du kannst bereits am Vortag 6 Lose für den darauffolgenden Tag für einen günstigeren Preis erwerben.<br>Die Tombola läuft meistens über einen gesamten Monat. Man benötigt für <strong>30 Tage</strong> Tombola insgesamt <strong>14.095 Drachenmarken</strong>, sofern man jeden Tag die Tombola spielt und die reduzierten Lose für den Folgetag kauft.",
tombolaPricesTitle: "Preise:",
tombolaPrices: "Jedes Los enthält eine zufällige Belohnung. Die Preise reichen von gewöhnlichen Tränken und Uppitems, bis hin zu Cor Draconis und Mondstein.<br> Jeden Tag gibt es einen <strong>Tagespreis</strong>, der mit einer Wahrscheinlichkeit von <strong>0,1%</strong> unter einem der Lose sein kann. Die Tagespreise können Köstume, Pets, Reittiere, DR-Gutscheine oder andere wertvolle Items sein.<br>Des Weiteren können unter jedem Los <strong>Glückssymbole</strong> versteckt sein. Die Wahrscheinlichkeit ein Glückssymbol zu erhalten, liegt bei <strong>19,95%</strong> pro Los. Glückssymbole sind in 6 verschiedenen Stufen unterteilt, die jeweils eine bestimmte Anzahl an Punkten geben.",
tombolaSymbolsTitle: "Glückssymbole:",
tombolaSymbols: "Sobald man <strong>3 Glückssymbole</strong> gesammelt hat, erhält man einen zusätzlichen Preis. Diesen Preis kann man mit 6<img src=\"https://m2-helper.com/resources/events/tombola/Drachenmünze.png\" alt=\"Drachenmarke\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\">Drachenmünzen neu rollen.<br> Jedes Glückssymbol gibt eine feste Anzahl an Punkten. Je nachdem wie viel Punkte man mit den drei Glückssymbole erreicht hat, erhält man einen bestimmten Preis.",
tombolaSummer2025SectionTitle: "Sommertombola 2025",
tombolaWinter2025SectionTitle: "Wintertombola 2025",
tombolaSummer2025SymbolsTable: [
{ name: "15 Punkte", points: 15, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_15_Punkte.jpg", probability: "7.3%" },
{ name: "10 Punkte", points: 10, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_10_Punkte.jpg", probability: "14.5%" },
{ name: "7 Punkte", points: 7, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_7_Punkte.jpg", probability: "37.1%" },
{ name: "5 Punkte", points: 5, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_5_Punkte.jpg", probability: "21.6%" },
{ name: "3 Punkte", points: 3, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_3_Punkte.jpg", probability: "13.5%" },
{ name: "1 Punkt", points: 1, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_1_Punkt.jpg", probability: "6%" }
],
tombolaSummer2025PrizeDistributionTitle: "Preisverteilung:",
tombolaSortByPoints: "Nach Punkten sortieren",
tombolaSortByProbability: "Nach Wahrscheinlichkeit sortieren",
tombolaTooltipProbability: "Wahrscheinlichkeit",
tombolaTooltipPoints: "Punkte",
tombolaSelectionDescription: "Klicke auf die Icons unter der Grafik, um die kummulierte Wahrscheinlichkeit und DR-Kosten anzuzeigen zu lassen.",
tombolaTalismanChanceLabel: "Gewinnchance pro Versuch:",
tombolaRealCostLabel: "DR für Erfolgschance:",
tombolaChanceNote: "Mit den angegebenen DR hast du eine X% Chance, einen der ausgewählten Preise zu erhalten.",
tombolaSummer2025PrizeTable: [
{ pointRange: "43-45", prize: "Flamme des Drachen", icon: "https://m2-helper.com/resources/events/tombola/Flamme_des_Drachen.png" },
{ pointRange: "40-42", prize: "Windtalisman", icon: "https://m2-helper.com/resources/events/tombola/Windtalisman.png" },
{ pointRange: "37-39", prize: "Feuertalisman", icon: "https://m2-helper.com/resources/events/tombola/Feuertalisman.png" },
{ pointRange: "35-36", prize: "Dunkler Talisman", icon: "https://m2-helper.com/resources/events/tombola/Dunkler_Talisman.png" },
{ pointRange: "32-34", prize: "Mondstein", icon: "https://m2-helper.com/resources/events/tombola/Mondstein.png" },
{ pointRange: "30-31", prize: "Erdtalisman", icon: "https://m2-helper.com/resources/events/tombola/Erdtalisman.png" },
{ pointRange: "28-29", prize: "Truhe der Erweckung", icon: "https://m2-helper.com/resources/events/tombola/Truhe_der_Erweckung.png" },
{ pointRange: "26-27", prize: "Seelenstein", icon: "https://m2-helper.com/resources/events/tombola/Seelenstein.png" },
{ pointRange: "24-25", prize: "Schimmernde Muschel", icon: "https://m2-helper.com/resources/events/tombola/Schimmernde_Muschel.png" },
{ pointRange: "22-23", prize: "Platin-Schatzkiste", icon: "https://m2-helper.com/resources/events/tombola/Platin-Schatzkiste.png" },
{ pointRange: "20-21", prize: "Muschel (10x)", icon: "https://m2-helper.com/resources/events/tombola/Muschel.png" },
{ pointRange: "18-19", prize: "Platin-Schatzschlüssel", icon: "https://m2-helper.com/resources/events/tombola/Platin-Schatzschlüssel.png" },
{ pointRange: "16-17", prize: "Sofortige Söldnerheilung (10x)", icon: "https://m2-helper.com/resources/events/tombola/Sofortige_Söldnerheilung.png" },
{ pointRange: "14-15", prize: "Fertigkeitsbuch-Auswahltruhe", icon: "https://m2-helper.com/resources/events/tombola/fertigkeitsbuch.png" },
{ pointRange: "12-13", prize: "3* Accessoire-Schmiederune", icon: "https://m2-helper.com/resources/events/tombola/Schmiederune.png" },
{ pointRange: "10-11", prize: "Titel: Sonnenanbeter", icon: "https://m2-helper.com/resources/events/tombola/titel.webp" },
{ pointRange: "8-9", prize: "Eistalisman", icon: "https://m2-helper.com/resources/events/tombola/Eistalisman.png" },
{ pointRange: "6-7", prize: "Blitztalisman", icon: "https://m2-helper.com/resources/events/tombola/Blitztalisman.png" },
{ pointRange: "4-5", prize: "Herrscherband (edel)", icon: "https://m2-helper.com/resources/events/tombola/Herrscherband_(edel).png" },
{ pointRange: "3", prize: "Ritualstein", icon: "https://m2-helper.com/resources/events/tombola/Ritualstein.png" }
],
tombolaWinter2025SymbolsTable: [
{ name: "15 Punkte", points: 15, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_15_Punkte.jpg", probability: "7.3%" },
{ name: "10 Punkte", points: 10, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_10_Punkte.jpg", probability: "14.5%" },
{ name: "7 Punkte", points: 7, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_7_Punkte.jpg", probability: "37.1%" },
{ name: "5 Punkte", points: 5, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_5_Punkte.jpg", probability: "21.6%" },
{ name: "3 Punkte", points: 3, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_3_Punkte.jpg", probability: "13.5%" },
{ name: "1 Punkt", points: 1, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_1_Punkt.jpg", probability: "6%" }
],
tombolaWinter2025PrizeDistributionTitle: "Preisverteilung:",
tombolaWinter2025PrizeTable: [
{ pointRange: "43-45", prize: "Flamme des Drachen", icon: "https://m2-helper.com/resources/events/tombola/Flamme_des_Drachen.png" },
{ pointRange: "40-42", prize: "Dunkler Talisman", icon: "https://m2-helper.com/resources/events/tombola/Dunkler_Talisman.png" },
{ pointRange: "37-39", prize: "Blitztalisman", icon: "https://m2-helper.com/resources/events/tombola/Blitztalisman.png" },
{ pointRange: "35-36", prize: "Feuertalisman", icon: "https://m2-helper.com/resources/events/tombola/Feuertalisman.png" },
{ pointRange: "32-34", prize: "Mondstein", icon: "https://m2-helper.com/resources/events/tombola/Mondstein.png" },
{ pointRange: "30-31", prize: "Erdtalisman", icon: "https://m2-helper.com/resources/events/tombola/Erdtalisman.png" },
{ pointRange: "28-29", prize: "Truhe der Erweckung", icon: "https://m2-helper.com/resources/events/tombola/Truhe_der_Erweckung.png" },
{ pointRange: "26-27", prize: "Seelenstein", icon: "https://m2-helper.com/resources/events/tombola/Seelenstein.png" },
{ pointRange: "24-25", prize: "Schimmernde Muschel", icon: "https://m2-helper.com/resources/events/tombola/Schimmernde_Muschel.png" },
{ pointRange: "22-23", prize: "Platin-Schatzkiste", icon: "https://m2-helper.com/resources/events/tombola/Platin-Schatzkiste.png" },
{ pointRange: "20-21", prize: "Muschel (10x)", icon: "https://m2-helper.com/resources/events/tombola/Muschel.png" },
{ pointRange: "18-19", prize: "Platin-Schatzschlüssel", icon: "https://m2-helper.com/resources/events/tombola/Platin-Schatzschlüssel.png" },
{ pointRange: "16-17", prize: "Sofortige Söldnerheilung (10x)", icon: "https://m2-helper.com/resources/events/tombola/Sofortige_Söldnerheilung.png" },
{ pointRange: "14-15", prize: "Fertigkeitsbuch-Auswahltruhe", icon: "https://m2-helper.com/resources/events/tombola/fertigkeitsbuch.png" },
{ pointRange: "12-13", prize: "Gaya-Sporttasche (500)", icon: "https://m2-helper.com/resources/events/tombola/Gaya-Beutel.png" },
{ pointRange: "10-11", prize: "Titel: Polarstern", icon: "https://m2-helper.com/resources/events/tombola/titel.webp" },
{ pointRange: "8-9", prize: "Windtalisman", icon: "https://m2-helper.com/resources/events/tombola/Windtalisman.png" },
{ pointRange: "6-7", prize: "Eistalisman", icon: "https://m2-helper.com/resources/events/tombola/Eistalisman.png" },
{ pointRange: "4-5", prize: "Herrscherband (edel)", icon: "https://m2-helper.com/resources/events/tombola/Herrscherband_(edel).png" },
{ pointRange: "3", prize: "Ritualstein", icon: "https://m2-helper.com/resources/events/tombola/Ritualstein.png" }
],
tombolaEaster2026SectionTitle: "Treasure-Server Ostern 2026",
tombolaEaster2026SymbolsTable: [
{ name: "15 Punkte", points: 15, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_15_Punkte.jpg", probability: "7.3%" },
{ name: "10 Punkte", points: 10, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_10_Punkte.jpg", probability: "14.5%" },
{ name: "7 Punkte", points: 7, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_7_Punkte.jpg", probability: "37.1%" },
{ name: "5 Punkte", points: 5, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_5_Punkte.jpg", probability: "21.6%" },
{ name: "3 Punkte", points: 3, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_3_Punkte.jpg", probability: "13.5%" },
{ name: "1 Punkt", points: 1, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_1_Punkt.jpg", probability: "6%" }
],
tombolaEaster2026PrizeDistributionTitle: "Preisverteilung:",
tombolaEaster2026PrizeTable: [
{ pointRange: "43-45", prize: "Flamme des Drachen", icon: "https://m2-helper.com/resources/events/tombola/Flamme_des_Drachen.png" },
{ pointRange: "40-42", prize: "Windtalisman+0", icon: "https://m2-helper.com/resources/events/tombola/Windtalisman.png" },
{ pointRange: "37-39", prize: "Feuertalisman+0", icon: "https://m2-helper.com/resources/events/tombola/Feuertalisman.png" },
{ pointRange: "35-36", prize: "Dunkler Talisman+0", icon: "https://m2-helper.com/resources/events/tombola/Dunkler_Talisman.png" },
{ pointRange: "32-34", prize: "Mondstein", icon: "https://m2-helper.com/resources/events/tombola/Mondstein.png" },
{ pointRange: "30-31", prize: "Erdtalisman+0", icon: "https://m2-helper.com/resources/events/tombola/Erdtalisman.png" },
{ pointRange: "28-29", prize: "Truhe der Erweckung", icon: "https://m2-helper.com/resources/events/tombola/Truhe_der_Erweckung.png" },
{ pointRange: "26-27", prize: "Seelenstein", icon: "https://m2-helper.com/resources/events/tombola/Seelenstein.png" },
{ pointRange: "24-25", prize: "Schimmernde Muschel", icon: "https://m2-helper.com/resources/events/tombola/Schimmernde_Muschel.png" },
{ pointRange: "22-23", prize: "Platin-Schatzkiste", icon: "https://m2-helper.com/resources/events/tombola/Platin-Schatzkiste.png" },
{ pointRange: "20-21", prize: "Muschel (10x)", icon: "https://m2-helper.com/resources/events/tombola/Muschel.png" },
{ pointRange: "18-19", prize: "Platin-Schatzschlüssel", icon: "https://m2-helper.com/resources/events/tombola/Platin-Schatzschlüssel.png" },
{ pointRange: "16-17", prize: "Sofortige Söldnerheilung (10x)", icon: "https://m2-helper.com/resources/events/tombola/Sofortige_Söldnerheilung.png" },
{ pointRange: "14-15", prize: "Fertigkeitsbuch-Auswahltruhe", icon: "https://m2-helper.com/resources/events/tombola/fertigkeitsbuch.png" },
{ pointRange: "12-13", prize: "Gaya-Sporttasche (100) (720h)", icon: "https://m2-helper.com/resources/events/tombola/Gaya-Beutel.png" },
{ pointRange: "10-11", prize: "Gegenstand verzaubern+", icon: "https://m2-helper.com/resources/events/tombola/Gegenstand_verzaubern+.png" },
{ pointRange: "8-9", prize: "Eistalisman+0", icon: "https://m2-helper.com/resources/events/tombola/Eistalisman.png" },
{ pointRange: "6-7", prize: "Blitztalisman+0", icon: "https://m2-helper.com/resources/events/tombola/Blitztalisman.png" },
{ pointRange: "4-5", prize: "Herrscherband (edel)", icon: "https://m2-helper.com/resources/events/tombola/Herrscherband_(edel).png" },
{ pointRange: "1-3", prize: "Ritualstein", icon: "https://m2-helper.com/resources/events/tombola/Ritualstein.png" }
],
tipsTitle: "Tipps & Tricks:",
tips: [
"Wenn du die Lv 30 Biologenquest abgeschlossen hast, erhälst du jeden Tag 1 kostenloses Los.",
"Wenn du sieben Tage hintereinander ein Los kaufst, erhälst du ab dem achten Tag ein kostenloses Los. Dies gilt nur, wenn du nicht bereits die Lv 30 Biologenquest abgeschlossen hast.",
"Versuche jeden Tag die Lose für den Folgetag zu kaufen, um die Kosten zu optimieren.",
],
note: "<strong>Hinweis:</strong> Durch die Tombola kommen die meisten Elementtalismane auf den Markt.",
},
okey: {
title: "Okey-Karten-Spiel",
summary:
"Sammle Okey‑Karten von Monstern, spiele das Minispiel und sichere dir Truhenbelohnungen.<br><strong>Ab Level 70</strong>",
descTitle: "Beschreibung",
desc: 'Während des Events droppen per Monsterkills<img src="Events/images/Okey-Kartenset.png" alt="Okey-Sammelkarte" class="inline w-6 h-6 mx-1.5 align-top -mt-0">Okey-Sammelkarten automatisch im Event-Interface. Mit der 24. Okey-Karte wird automatisch ein<img src="Events/images/Okey-Kartenset.png" alt="Okey-Kartenset" class="inline w-6 h-6 mx-1.5 align-top -mt-0">Okey-Kartenset erzeugt, welches zur Teilnahme am Minispiel berechtigt. Man kann maximal 999 Okey-Kartensets besitzen.',
gameplayTitle: "Spielablauf:",
gameplayDesc: [
"Öffne das Event-UI und starte das Spiel.",
"Zu Beginn erscheinen <strong>5 zufällige Karten</strong>.",
"Um Punkte machen zu können, wählst du 3 Karten aus. Diese müssen entweder eine <strong>Set-Kombination</strong> (z.B. 7-7-7) oder eine <strong>Reihe</strong> (z.B. 6-7-8) bilden. Reihen können in der gleichen Farbe oder in untschiedlichen Farben ausgwählt werden.",
"Du kannst beliebig Karten verwerfen und neue ziehen.",
],
rewardsDesc: [],
rewardsTable: {
versions: [
{
name: "Sommer-Version",
chests: [
{
name: "Bronzene Okey-Truhe",
icon: "Events/okey/Bronzene_Okey-Truhe.png",
points: "< 300 Punkte",
content: '<table class="w-full"><tr><td><img src="https://m2-helper.com/resources/exp.png" alt="exp" class="inline w-5 h-5 mx-1">EXP (100.000)</td><td class="text-right">10%</td></tr><tr><td><img src="https://m2-helper.com/resources/yang.png" alt="Yang" class="inline w-5 h-5 mx-1">Yang (50.000)</td><td class="text-right">69%</td></tr><tr><td><img src="https://m2-helper.com/resources/yang.png" alt="Yang" class="inline w-5 h-5 mx-1">Yang (100.000)</td><td class="text-right">19%</td></tr><tr><td><img src="Events/images/Okey-Kartenset.png" alt="Okey-Kartenset" class="inline w-5 h-5 mx-1">Okey-Kartenset</td><td class="text-right">2%</td></tr></table>',
},
{
name: "Silberne Okey-Truhe",
icon: "Events/okey/Silberne_Okey-Truhe.png",
points: "300-399 Punkte",
content: '<table class="w-full"><tr><td><img src="https://m2-helper.com/resources/exp.png" alt="exp" class="inline w-5 h-5 mx-1">EXP (500.000)</td><td class="text-right">5%</td></tr><tr><td><img src="https://m2-helper.com/resources/yang.png" alt="Yang" class="inline w-5 h-5 mx-1">Yang (500.000)</td><td class="text-right">15%</td></tr><tr><td><img src="https://m2-helper.com/resources/yang.png" alt="Yang" class="inline w-5 h-5 mx-1">Yang (700.000)</td><td class="text-right">15%</td></tr><tr><td><img src="Events/images/Okey-Kartenset.png" alt="Okey-Kartenset" class="inline w-5 h-5 mx-1">Okey-Kartenset</td><td class="text-right">1%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Blaue_Perle.png" alt="Blaue Perle" class="inline w-5 h-5 mx-1">Blaue Perle</td><td class="text-right">2%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Blutrote_Perle.png" alt="Blutrote Perle" class="inline w-5 h-5 mx-1">Blutrote Perle</td><td class="text-right">2%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Muschel.png" alt="Muschel" class="inline w-5 h-5 mx-1">Muschel</td><td class="text-right">10%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Traktat_zur_Fechtkunst.png" alt="Traktat zur Fechtkunst" class="inline w-5 h-5 mx-1">Traktat zur Fechtkunst</td><td class="text-right">5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Affenei.png" alt="Affenei" class="inline w-5 h-5 mx-1">Affenei</td><td class="text-right">3%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Spinnenei_(Item).png" alt="Spinnenei" class="inline w-5 h-5 mx-1">Spinnenei</td><td class="text-right">3%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Junges_Pet-Buch.png" alt="Junges Pet-Buch" class="inline w-5 h-5 mx-1">Junges Pet-Buch</td><td class="text-right">9%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Wildes_Pet-Buch.png" alt="Wildes Pet-Buch" class="inline w-5 h-5 mx-1">Wildes Pet-Buch</td><td class="text-right">1%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Cor_Draconis_(edel).png" alt="Cor Draconis (edel)" class="inline w-5 h-5 mx-1">Cor Draconis (edel)</td><td class="text-right">8%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Cor_Draconis_(kostbar).png" alt="Cor Draconis (kostbar)" class="inline w-5 h-5 mx-1">Cor Draconis (kostbar)</td><td class="text-right">5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Elixier_der_Sonne_(K)_B.png" alt="Elixier der Sonne (K) B" class="inline w-5 h-5 mx-1">Elixier der Sonne (K) B</td><td class="text-right">2%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Elixier_des_Mondes_(K)_B.png" alt="Elixier des Mondes (K) B" class="inline w-5 h-5 mx-1">Elixier des Mondes (K) B</td><td class="text-right">2%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Geschwindigkeitstrank_B.png" alt="Geschwindigkeitstrank B" class="inline w-5 h-5 mx-1">Geschwindigkeitstrank B</td><td class="text-right">5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Herrscherband_(einfach).png" alt="Herrscherband (einfach)" class="inline w-5 h-5 mx-1">Herrscherband (einfach)</td><td class="text-right">2%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Ring_der_tödlichen_Macht.png" alt="Ring der tödlichen Macht (7T)" class="inline w-5 h-5 mx-1">Ring der tödlichen Macht (7T)</td><td class="text-right">1%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Ring_der_Willenskraft.png" alt="Ring der Willenskraft (7T)" class="inline w-5 h-5 mx-1">Ring der Willenskraft (7T)</td><td class="text-right">1%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Zen-Bohne.png" alt="Zen-Bohne" class="inline w-5 h-5 mx-1">Zen-Bohne</td><td class="text-right">3%</td></tr></table>',
},
{
name: "Goldene Okey-Truhe",
icon: "/events/okey/Goldene_Okey-Truhe.png",
points: "≥ 400 Punkte",
content: '<table class="w-full"><tr><td><img src="https://m2-helper.com/resources/exp.png" alt="exp" class="inline w-5 h-5 mx-1">EXP (700.000)</td><td class="text-right">3%</td></tr><tr><td><img src="https://m2-helper.com/resources/yang.png" alt="Yang" class="inline w-5 h-5 mx-1">Yang (700.000)</td><td class="text-right">3%</td></tr><tr><td><img src="https://m2-helper.com/resources/yang.png" alt="Yang" class="inline w-5 h-5 mx-1">Yang (1.000.000)</td><td class="text-right">3%</td></tr><tr><td><img src="Events/images/Okey-Kartenset.png" alt="Okey-Kartenset" class="inline w-5 h-5 mx-1">Okey-Kartenset</td><td class="text-right">2%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Drachenschuppe.png" alt="Drachenschuppe" class="inline w-5 h-5 mx-1">Drachenschuppe</td><td class="text-right">5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Quarzsand.png" alt="Quarzsand" class="inline w-5 h-5 mx-1">Quarzsand</td><td class="text-right">2%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Roter_Höllenquarz.png" alt="Flammenstein" class="inline w-5 h-5 mx-1">Flammenstein</td><td class="text-right">5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Traktat_zur_Fechtkunst.png" alt="Traktat zur Fechtkunst" class="inline w-5 h-5 mx-1">Traktat zur Fechtkunst</td><td class="text-right">5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Weiße_Perle.png" alt="Weiße Perle" class="inline w-5 h-5 mx-1">Weiße Perle</td><td class="text-right">2%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Ei_des_Nemere.png" alt="Ei des Nemere" class="inline w-5 h-5 mx-1">Ei des Nemere</td><td class="text-right">2%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Ei_des_Razador.png" alt="Ei des Razador" class="inline w-5 h-5 mx-1">Ei des Razador</td><td class="text-right">2%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Junges_Pet-Buch.png" alt="Junges Pet-Buch" class="inline w-5 h-5 mx-1">Junges Pet-Buch</td><td class="text-right">10%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Wildes_Pet-Buch.png" alt="Wildes Pet-Buch" class="inline w-5 h-5 mx-1">Wildes Pet-Buch</td><td class="text-right">8%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Cor_Draconis_(kostbar).png" alt="Cor Draconis (kostbar)" class="inline w-5 h-5 mx-1">Cor Draconis (kostbar)</td><td class="text-right">10%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Cor_Draconis_(mystisch).png" alt="Cor Draconis (mystisch)" class="inline w-5 h-5 mx-1">Cor Draconis (mystisch)</td><td class="text-right">7%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Elixier_der_Sonne_(K)_B.png" alt="Elixier der Sonne (K) B" class="inline w-5 h-5 mx-1">Elixier der Sonne (K) B</td><td class="text-right">3%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Elixier_des_Mondes_(K)_B.png" alt="Elixier des Mondes (K) B" class="inline w-5 h-5 mx-1">Elixier des Mondes (K) B</td><td class="text-right">3%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Geschwindigkeitstrank_B.png" alt="Geschwindigkeitstrank B (30min) (3x)" class="inline w-5 h-5 mx-1">3 Geschwindigkeitstrank</td><td class="text-right">5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Königsband_(edel).png" alt="Königsband (edel)" class="inline w-5 h-5 mx-1">Königsband (edel)</td><td class="text-right">2%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Ring_der_tödlichen_Macht.png" alt="Ring der tödlichen Macht (7T)" class="inline w-5 h-5 mx-1">Ring der tödlichen Macht (7T)</td><td class="text-right">2%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Ring_der_Willenskraft.png" alt="Ring der Willenskraft (7T)" class="inline w-5 h-5 mx-1">Ring der Willenskraft (7T)</td><td class="text-right">2%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Schlachtenlöwe.png" alt="Schlachtenlöwe (20T)" class="inline w-5 h-5 mx-1">Schlachtenlöwe (20T)</td><td class="text-right">1%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Seelenstein.png" alt="Seelenstein" class="inline w-5 h-5 mx-1">Seelenstein</td><td class="text-right">5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Stein_der_Hast.png" alt="Stein der Hast +4" class="inline w-5 h-5 mx-1">Stein der Hast +4</td><td class="text-right">5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Zen-Bohne.png" alt="Zen-Bohne" class="inline w-5 h-5 mx-1">Zen-Bohne</td><td class="text-right">3%</td></tr></table>',
},
],
},
{
name: "Winter-Version",
chests: [
{
name: "Bronzene Okey-Festtruhe",
icon: "Events/okey/Bronzene_Okey-Truhe.png",
points: "< 300 Punkte",
content: '<table class="w-full"><tr><td><img src="https://m2-helper.com/resources/exp.png" alt="exp" class="inline w-5 h-5 mx-1">EXP (100.000)</td><td class="text-right">10%</td></tr><tr><td><img src="https://m2-helper.com/resources/yang.png" alt="Yang" class="inline w-5 h-5 mx-1">Yang (50.000)</td><td class="text-right">69%</td></tr><tr><td><img src="https://m2-helper.com/resources/yang.png" alt="Yang" class="inline w-5 h-5 mx-1">Yang (100.000)</td><td class="text-right">19%</td></tr><tr><td><img src="Events/images/Okey-Kartenset.png" alt="Okey-Kartenset" class="inline w-5 h-5 mx-1">Okey-Kartenset</td><td class="text-right">2%</td></tr></table>',
},
{
name: "Silberne Okey-Festtruhe",
icon: "Events/okey/Silberne_Okey-Truhe.png",
points: "300-399 Punkte",
content: '<table class="w-full"><tr><td><img src="https://m2-helper.com/resources/exp.png" alt="exp" class="inline w-5 h-5 mx-1">EXP (100.000)</td><td class="text-right">17.9%</td></tr><tr><td><img src="https://m2-helper.com/resources/yang.png" alt="Yang" class="inline w-5 h-5 mx-1">Yang (100.000)</td><td class="text-right">17.9%</td></tr><tr><td><img src="https://m2-helper.com/resources/yang.png" alt="Yang" class="inline w-5 h-5 mx-1">Yang (300.000)</td><td class="text-right">9.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/yang.png" alt="Yang" class="inline w-5 h-5 mx-1">Yang (500.000)</td><td class="text-right">7.0%</td></tr><tr><td><img src="Events/images/Okey-Kartenset.png" alt="Okey-Kartenset" class="inline w-5 h-5 mx-1">Okey-Kartenset</td><td class="text-right">1.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Blaue_Perle.png" alt="Blaue Perle" class="inline w-5 h-5 mx-1">Blaue Perle</td><td class="text-right">2.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Blutrote_Perle.png" alt="Blutrote Perle" class="inline w-5 h-5 mx-1">Blutrote Perle</td><td class="text-right">2.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Affenei.png" alt="Affenei" class="inline w-5 h-5 mx-1">Affenei</td><td class="text-right">2.5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Spinnenei_(Item).png" alt="Spinnenei" class="inline w-5 h-5 mx-1">Spinnenei</td><td class="text-right">2.5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Ei_des_Nemere.png" alt="Ei des Nemere" class="inline w-5 h-5 mx-1">Ei des Nemere</td><td class="text-right">1.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Ei_des_Razador.png" alt="Ei des Razador" class="inline w-5 h-5 mx-1">Ei des Razador</td><td class="text-right">1.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Büchertruhe_Boost.png" alt="Büchertruhe Boost" class="inline w-5 h-5 mx-1">Büchertruhe Boost</td><td class="text-right">1.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Büchertruhe_Konter.png" alt="Büchertruhe Konter" class="inline w-5 h-5 mx-1">Büchertruhe Konter</td><td class="text-right">1.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Cor_Draconis_(normal).png" alt="Cor Draconis (normal)" class="inline w-5 h-5 mx-1">Cor Draconis (normal)</td><td class="text-right">5.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Cor_Draconis_(edel).png" alt="Cor Draconis (edel)" class="inline w-5 h-5 mx-1">Cor Draconis (edel)</td><td class="text-right">2.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Gegenstand_verstärken_B.png" alt="Gegenstand verstärken B" class="inline w-5 h-5 mx-1">Gegenstand verstärken</td><td class="text-right">2.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Gegenstand_verzaubern_B.png" alt="Gegenstand verzaubern B" class="inline w-5 h-5 mx-1">Gegenstand verzaubern B</td><td class="text-right">1.5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Gegenstand_verzaubern+.png" alt="Gegenstand verzaubern+" class="inline w-5 h-5 mx-1">Gegenstand verzaubern+</td><td class="text-right">0.5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Herrscherband_(einfach).png" alt="Herrscherband (einfach)" class="inline w-5 h-5 mx-1">Herrscherband (einfach)</td><td class="text-right">2.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Magisches_Stein.png" alt="Magischer Stein" class="inline w-5 h-5 mx-1">Magischer Stein</td><td class="text-right">3.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Pers._Premiumladen.png" alt="Per. Premiumladen (1T)" class="inline w-5 h-5 mx-1">Per. Premiumladen (1T)</td><td class="text-right">0.5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Schmuckstein.png" alt="Schmuckstein (60x)" class="inline w-5 h-5 mx-1">Schmuckstein (60x)</td><td class="text-right">5.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Segensschriftrolle_B.png" alt="Segensschriftrolle B" class="inline w-5 h-5 mx-1">Segensschriftrolle B</td><td class="text-right">3.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Teleportationsring.png" alt="Teleportationsring" class="inline w-5 h-5 mx-1">Teleportationsring</td><td class="text-right">3.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Trank_der_Weisheit.png" alt="Trank der Weisheit (3std)" class="inline w-5 h-5 mx-1">Trank der Weisheit (3std)</td><td class="text-right">5.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Windschuhe.png" alt="Windschuhe (1T)" class="inline w-5 h-5 mx-1">Windschuhe (1T)</td><td class="text-right">2.0%</td></tr></table>',
},
{
name: "Goldene Okey-Festtruhe",
icon: "Events/okey/Goldene_Okey-Truhe.png",
points: "≥ 400 Punkte",
content: '<table class="w-full"><tr><td><img src="Events/images/Okey-Kartenset.png" alt="Okey-Kartenset" class="inline w-5 h-5 mx-1">Okey-Kartenset</td><td class="text-right">4.8%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Achat.png" alt="Achat" class="inline w-5 h-5 mx-1">Achat</td><td class="text-right">2.9%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Titandioxid.png" alt="Titandioxid" class="inline w-5 h-5 mx-1">Titandioxid</td><td class="text-right">2.9%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Mondstein.png" alt="Mondstein" class="inline w-5 h-5 mx-1">Mondstein</td><td class="text-right">1.5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Weiße_Perle.png" alt="Weiße Perle" class="inline w-5 h-5 mx-1">Weiße Perle</td><td class="text-right">0.5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Blaues_Drachenei.png" alt="Blaues Drachenei (7T)" class="inline w-5 h-5 mx-1">Blaues Drachenei</td><td class="text-right">1.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Ei_des_Nemere.png" alt="Ei des Nemere (7T)" class="inline w-5 h-5 mx-1">Ei des Nemere</td><td class="text-right">1.9%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Ei_des_Razador.png" alt="Ei des Razador (7T)" class="inline w-5 h-5 mx-1">Ei des Razador</td><td class="text-right">1.9%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Büchertruhe_Boost.png" alt="Büchertruhe Boost" class="inline w-5 h-5 mx-1">Büchertruhe Boost</td><td class="text-right">4.8%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Büchertruhe_Konter.png" alt="Büchertruhe Konter" class="inline w-5 h-5 mx-1">Büchertruhe Konter</td><td class="text-right">5.3%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Cor_Draconis_(kostbar).png" alt="Cor Draconis (kostbar)" class="inline w-5 h-5 mx-1">Cor Draconis (kostbar)</td><td class="text-right">7.8%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Cor_Draconis_(mystisch).png" alt="Cor Draconis (mystisch)" class="inline w-5 h-5 mx-1">Cor Draconis (mystisch)</td><td class="text-right">7.8%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Gegenstand_verstärken_B.png" alt="Gegenstand verstärken (b)" class="inline w-5 h-5 mx-1">Gegenstand verstärken</td><td class="text-right">4.8%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Gegenstand_verzaubern_B.png" alt="Gegenstand verzaubern B" class="inline w-5 h-5 mx-1">Gegenstand verzaubern B</td><td class="text-right">4.4%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Gegenstand_verzaubern+.png" alt="Gegenstand verzaubern+" class="inline w-5 h-5 mx-1">Gegenstand verzaubern+</td><td class="text-right">3.4%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Herrscherband_(edel).png" alt="Herrscherband (edel)" class="inline w-5 h-5 mx-1">Herrscherband (edel)</td><td class="text-right">3.9%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Magisches_Stein.png" alt="Magischer Stein" class="inline w-5 h-5 mx-1">Magischer Stein</td><td class="text-right">5.8%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Manni.png" alt="Manni (30t)" class="inline w-5 h-5 mx-1">Manni (30T)</td><td class="text-right">2.9%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Manu.png" alt="Manu (30T)" class="inline w-5 h-5 mx-1">Manu (30t)</td><td class="text-right">2.9%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Pers._Premiumladen.png" alt="Pers. Premiumladen (1T)" class="inline w-5 h-5 mx-1">Pers. Premiumladen (1T)</td><td class="text-right">3.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Schmuckstein.png" alt="Schmuckstein (200x)" class="inline w-5 h-5 mx-1">Schmuckstein (200x)</td><td class="text-right">2.4%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Seelenstein+.png" alt="Seelenstein+" class="inline w-5 h-5 mx-1">Seelenstein+</td><td class="text-right">3.4%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Segensschriftrolle_B.png" alt="Segensschriftrolle B" class="inline w-5 h-5 mx-1">Segensschriftrolle B</td><td class="text-right">4.8%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Teleportationsring.png" alt="Teleportationsring" class="inline w-5 h-5 mx-1">Teleportationsring</td><td class="text-right">4.8%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Trank_der_Weisheit.png" alt="Trank der Weisheit (3std)" class="inline w-5 h-5 mx-1">Trank der Weisheit (3std)</td><td class="text-right">6.8%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Windschuhe.png" alt="Windschuhe (1T)" class="inline w-5 h-5 mx-1">Windschuhe (1T)</td><td class="text-right">3.4%</td></tr></table>',
},
],
},
],
note: ""
},
tipsTitle: "Tipps & Tricks:",
tips: [
"Reihen, in gleichen Farben, bringen mehr Punkte.",
'Gemischte Farben bringen deutlich weniger Punkte, daher nur als Notlösung einsetzen.',
'Merke dir welche Kartenkombinationen noch im Spiel sind - nutze den <a href="#okey-helper" class="okey-helper-link" style="text-decoration:underline;" onclick="document.getElementById(\'okey-helper\').scrollIntoView({ behavior: \'smooth\' }); return false;">Okey-Helper</a>.',
'Wenn man 3x 6-7-8 in einer Farbe abgibt, erhält man garantiert eine silberne Truhe.'
],
gameplayImage: {
src: "Events/images/Okey-Minispielfenster.png",
alt: "Okey Spielfeld",
caption: "Okey Spielfeld"
},
okeyHelperTitle: "Okey-Helper:",
okeyHelperDesc: "Klicke auf die Karten, um sie als \"gespielt\" zu markieren:",
okeyResetText: "Alle Karten zurücksetzen",
rewardsTitle: "Belohnungen:",
note: "<strong>Hinweis:</strong> Achte beim Kauf und Verkauf auf den Truhennamen, um die Version zu überprüfen!",
},
king: {
title: "Schnapp den König",
summary:
"Sammle Königskarten von Monstern und spiele das Kartenspiel für wertvolle Truhenbelohnungen.<br><strong>Ab Level 30</strong>",
descTitle: "Beschreibung",
desc: "Schnapp den König ist ein Kartenspiel-Event ab Level 30. Während des Events droppen Monster<img src=\"https://m2-helper.com/resources/events/koenig/Königskarte.png\" alt=\"Königskarte\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\"><strong>Königskarten</strong>. 25 Königskarten werden automatisch zu einem<img src=\"Events/images/Königsdeck.png\" alt=\"Königsdeck\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\"><strong>Königsdeck</strong> zusammengefügt. Mit einem Königsdeck kann eine Runde des Kartenspiels gespielt werden. Man kann maximal 999 Königsdecks besitzen. Es ist möglich bis zu 5 Königsdecks gleichzeitig zu spielen.",
mechanicsTitle: "<span style='font-size: 1.25em; font-weight: bold;'>Spielmechanik:</span>",
mechanicsDesc: "Das Spielfeld besteht aus <strong>25 verdeckten Karten</strong>. Der Spieler erhält <strong>12 eigene Karten</strong>, mit denen er die Feldkarten aufdecken kann. Man startet immer mit der <strong>schwächsten Karte</strong> \u2013 ein Pfeil zeigt an, welche Karte ausgewählt werden kann. Karten können über mehrere Runden hinweg genutzt werden. Leuchten die umliegenden Karten kurz auf, befindet sich mindestens unter einer eine verdeckte 5 darunter.<br>Man muss mindestens <strong>10 Punkte</strong> erreichen, um Gewinne abholen zu können.<br><br>",
comparisonTitle: "Vergleichsmechanik:",
comparisonRules: [
"<strong>Eigene Karte höher</strong> → Punkte der aufgedeckten Karte erhalten, <strong>weitere Karte</strong> aufdecken",
"<strong>Eigene Karte gleich</strong> → Punkte erhalten, Runde endet – weiter mit neuer Karte vom Stapel",
"<strong>Eigene Karte niedriger</strong> → Keine Punkte, Runde endet – weiter mit neuer Karte vom Stapel",
],
specialRuleTitle: "Sonderregel Karte 5:",
specialRuleDesc: "Liegt die eigene Karte 5 <strong>direkt neben einer anderen verdeckten 5</strong>, wird sie eingefangen. Die Runde endet ohne Punkte.",
kingCardRuleTitle: "König-Karte:",
kingCardRuleDesc: "Der König kann <strong>nur</strong> den König fangen. Das Spiel endet nach dieser Runde.",
pointsTitle: "Punktesystem:",
pointsTableHeaderCard: "Karte",
pointsTableHeaderField: "Spielfeld",
pointsTableHeaderOwn: "Eigene",
pointsTableHeaderPoints: "Punkte",
pointsTable: [
{ icon: "Events/images/Schnapp_den_König_Karte_1.png", field: 7, own: 5, points: "+10" },
{ icon: "Events/images/Schnapp_den_König_Karte_2.png", field: 4, own: 2, points: "+20" },
{ icon: "Events/images/Schnapp_den_König_Karte_3.png", field: 5, own: 2, points: "+30" },
{ icon: "Events/images/Schnapp_den_König_Karte_4.png", field: 5, own: 1, points: "+40" },
{ icon: "Events/images/Schnapp_den_König_Karte_5.png", field: 3, own: 1, points: "+50" },
{ icon: "Events/images/Schnapp_den_König_Karte_K.png", field: 1, own: 1, points: "+100" },
],
pointsBonusRow: "Komplette Reihe",
pointsBonusValue: "+10",
rewardTiersTitle: "Belohnungen nach Spielende:",
rewardTiers: [
{ threshold: "< 400 Punkte", reward: "Bronzene Königsbeute", icon: "https://m2-helper.com/resources/events/koenig/Bronzene_Königsbeute.png" },
{ threshold: "400 – 549 Punkte", reward: "Silberne Königsbeute", icon: "https://m2-helper.com/resources/events/koenig/Silberne_Königsbeute.png" },
{ threshold: "≥ 550 Punkte", reward: "Goldene Königsbeute", icon: "https://m2-helper.com/resources/events/koenig/Goldene_Königsbeute.png" },
],
rewardsTitle: "<span style='font-size: 1.25em; font-weight: bold;'>Belohnungen:</span>",
rewardsTable: [
{
category: "Bronzene Königsbeute",
icon: "https://m2-helper.com/resources/events/koenig/Bronzene_Königsbeute.png",
contents: [
{ name: "EXP (100.000)", icon: "https://m2-helper.com/resources/exp.png", probability: "10%" },
{ name: "Yang (50.000)", icon: "https://m2-helper.com/resources/yang.png", probability: "68%" },
{ name: "Yang (100.000)", icon: "https://m2-helper.com/resources/yang.png", probability: "19%" },
{ name: "Königsdeck", icon: "Events/images/Königsdeck.png", probability: "3%" }
]
},
{
category: "Silberne Königsbeute",
icon: "https://m2-helper.com/resources/events/koenig/Silberne_Königsbeute.png",
contents: [
{ name: "EXP (100.000)", icon: "https://m2-helper.com/resources/exp.png", probability: "13.72%" },
{ name: "Yang (100.000)", icon: "https://m2-helper.com/resources/yang.png", probability: "13.72%" },
{ name: "Yang (300.000)", icon: "https://m2-helper.com/resources/yang.png", probability: "11.22%" },
{ name: "Yang (500.000)", icon: "https://m2-helper.com/resources/yang.png", probability: "9.98%" },
{ name: "Königsdeck", icon: "Events/images/Königsdeck.png", probability: "2.00%" },
{ name: "Affenei", icon: "https://m2-helper.com/resources/events/okey/Affenei.png", probability: "3.74%" },
{ name: "Spinnenei", icon: "https://m2-helper.com/resources/events/okey/Spinnenei_(Item).png", probability: "2.99%" },
{ name: "Ei des Razador", icon: "https://m2-helper.com/resources/events/okey/Ei_des_Razador.png", probability: "1.37%" },
{ name: "Ei des Nemere", icon: "https://m2-helper.com/resources/events/okey/Ei_des_Nemere.png", probability: "1.37%" },
{ name: "Büchertruhe Boost", icon: "https://m2-helper.com/resources/events/okey/Büchertruhe_Boost.png", probability: "2.99%" },
{ name: "Büchertruhe Konter", icon: "https://m2-helper.com/resources/events/okey/Büchertruhe_Konter.png", probability: "2.99%" },
{ name: "Cor Draconis (normal)", icon: "https://m2-helper.com/resources/events/okey/Cor_Draconis_(normal).png", probability: "2.37%" },
{ name: "Cor Draconis (edel)", icon: "https://m2-helper.com/resources/events/okey/Cor_Draconis_(edel).png", probability: "2.24%" },
{ name: "Herrscherband (einfach)", icon: "https://m2-helper.com/resources/events/okey/Herrscherband_(einfach).png", probability: "2.24%" },
{ name: "Blaue Perle", icon: "https://m2-helper.com/resources/events/okey/Blaue_Perle.png", probability: "2.24%" },
{ name: "Blutrote Perle", icon: "https://m2-helper.com/resources/events/okey/Blutrote_Perle.png", probability: "2.24%" },
{ name: "Trank der Weisheit", icon: "https://m2-helper.com/resources/events/okey/Trank_der_Weisheit.png", probability: "1.62%" },
{ name: "Trank des Aufstiegs", icon: "https://m2-helper.com/resources/events/yutnori/Trank_der_Weisheit.png", probability: "1.37%" },
{ name: "Geiststeinbündel (5x)", icon: "https://m2-helper.com/resources/events/yutnori/Geiststeinbündel.png", probability: "1.62%" },
{ name: "Feuerwerkskreisel (10x)", icon: "https://m2-helper.com/resources/events/yutnori/Feuerwerkskreisel.png", probability: "1.62%" },
{ name: "Chinesisches Feuerwerk (10x)", icon: "https://m2-helper.com/resources/events/yutnori/Chinesisches_Feuerwerk.png", probability: "1.62%" },
{ name: "Segensschriftrolle", icon: "https://m2-helper.com/resources/events/okey/Segensschriftrolle_B.png", probability: "1.62%" },
{ name: "Teleportationsring", icon: "https://m2-helper.com/resources/events/okey/Teleportationsring.png", probability: "1.62%" },
{ name: "Windschuhe (1T)", icon: "https://m2-helper.com/resources/events/okey/Windschuhe.png", probability: "1.62%" },
{ name: "Pfirsichblütenwein+ (10x)", icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Pfirsichblütenwein_B.png", probability: "1.37%" },
{ name: "Protein-Happen", icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Protein-Happen.png", probability: "1.25%" },
{ name: "Magischer Stein", icon: "https://m2-helper.com/resources/events/okey/Magisches_Stein.png", probability: "1.25%" },
{ name: "Geschwindigkeitstrank (10x)", icon: "https://m2-helper.com/resources/events/okey/Geschwindigkeitstrank_B.png", probability: "1.12%" },
{ name: "Trank des Angriffs +15 (5x)", icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Trank_des_Angriffs_+10_B.png", probability: "1.12%" },
{ name: "Trank der Hast (5x)", icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Trank_der_Hast_B.png", probability: "1.12%" },
{ name: "Grüne Drachenbohne", icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Grüne_Drachenbohne.png", probability: "1.12%" },
{ name: "Gegenstand verstärken(b)", icon: "https://m2-helper.com/resources/events/okey/Gegenstand_verstärken_B.png", probability: "0.62%" },
{ name: "Gegenstand verzaubern(B)", icon: "https://m2-helper.com/resources/events/okey/Gegenstand_verzaubern_B.png", probability: "0.62%" },
{ name: "Gegenstand verzaubern+", icon: "https://m2-helper.com/resources/events/okey/Gegenstand_verzaubern+.png", probability: "0.25%" }
]
},
{
category: "Goldene Königsbeute",
icon: "https://m2-helper.com/resources/events/koenig/Goldene_Königsbeute.png",
contents: [
{ name: "Königsdeck", icon: "Events/images/Königsdeck.png", probability: "7.46%" },
{ name: "Segensschriftrolle", icon: "https://m2-helper.com/resources/events/okey/Segensschriftrolle_B.png", probability: "7.46%" },
{ name: "Ei des Razador", icon: "https://m2-helper.com/resources/events/okey/Ei_des_Razador.png", probability: "3.31%" },
{ name: "Ei des Nemere", icon: "https://m2-helper.com/resources/events/okey/Ei_des_Nemere.png", probability: "3.31%" },
{ name: "Geiststeinbündel (10x)", icon: "https://m2-helper.com/resources/events/yutnori/Geiststeinbündel.png", probability: "7.46%" },
{ name: "Feuerwerkskreisel (20x)", icon: "https://m2-helper.com/resources/events/yutnori/Feuerwerkskreisel.png", probability: "5.80%" },
{ name: "Chinesisches Feuerwerk (20x)", icon: "https://m2-helper.com/resources/events/yutnori/Chinesisches_Feuerwerk.png", probability: "5.80%" },
{ name: "Trank der Weisheit", icon: "https://m2-helper.com/resources/events/okey/Trank_der_Weisheit.png", probability: "2.49%" },
{ name: "Seelenstein", icon: "https://m2-helper.com/resources/events/okey/Seelenstein.png", probability: "4.14%" },
{ name: "Mondlicht-Schatztruhe", icon: "https://m2-helper.com/resources/events/yutnori/Mondlicht-Schatztruhe.png", probability: "2.49%" },
{ name: "Stein des Schmieds", icon: "https://m2-helper.com/resources/events/yutnori/Stein_des_Schmieds.png", probability: "1.99%" },
{ name: "Magischer Stein", icon: "https://m2-helper.com/resources/events/okey/Magisches_Stein.png", probability: "1.82%" },
{ name: "Weiße Perle", icon: "https://m2-helper.com/resources/events/okey/Weiße_Perle.png", probability: "1.66%" },
{ name: "Cor Draconis (mystisch)", icon: "https://m2-helper.com/resources/events/okey/Cor_Draconis_(mystisch).png", probability: "2.49%" },
{ name: "Cor Draconis (kostbar)", icon: "https://m2-helper.com/resources/events/okey/Cor_Draconis_(kostbar).png", probability: "2.49%" },
{ name: "Drachentruhe", icon: "https://m2-helper.com/resources/guides/alchemy/Drachentruhe.png", probability: "2.98%" },
{ name: "Grüne Drachenbohne", icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Grüne_Drachenbohne.png", probability: "1.99%" },
{ name: "Pfirsichblütenwein XL (5x)", icon: "https://m2-helper.com/resources/events/yutnori/Pfirsichblütenwein_XL.png", probability: "1.82%" },
{ name: "Passierschein (3x)", icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Passierschein.png", probability: "1.99%" },
{ name: "Elixier des Mondes (K)", icon: "https://m2-helper.com/resources/events/okey/Elixier_des_Mondes_(K)_B.png", probability: "2.49%" },
{ name: "Elixier der Sonne (K)", icon: "https://m2-helper.com/resources/events/okey/Elixier_der_Sonne_(K)_B.png", probability: "2.49%" },
{ name: "Pfirsichblütenwein+ (10x)", icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Pfirsichblütenwein_B.png", probability: "2.82%" },
{ name: "Geschwindigkeitstrank (5x)", icon: "https://m2-helper.com/resources/events/okey/Geschwindigkeitstrank_B.png", probability: "2.82%" },
{ name: "Trank des Angriffs +15 (5x)", icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Trank_des_Angriffs_+10_B.png", probability: "2.82%" },
{ name: "Trank der Hast (5x)", icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Trank_der_Hast_B.png", probability: "2.82%" },
{ name: "Schlachtenlöwe (20T)", icon: "https://m2-helper.com/resources/events/okey/Schlachtenlöwe.png", probability: "1.82%" },
{ name: "Sturmtiger (20T)", icon: "https://m2-helper.com/resources/events/yutnori/Sturmtiger.png", probability: "1.82%" },
{ name: "Heldenmedaille (1T)", icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Heldenmedaille.png", probability: "1.82%" },
{ name: "Pet-Bücherkiste", icon: "https://m2-helper.com/resources/events/yutnori/Pet-Bücherkiste.png", probability: "1.82%" },
{ name: "Titandioxid", icon: "https://m2-helper.com/resources/events/okey/Titandioxid.png", probability: "1.49%" },
{ name: "Achat", icon: "https://m2-helper.com/resources/events/okey/Achat.png", probability: "1.49%" },
{ name: "Mondstein", icon: "https://m2-helper.com/resources/events/okey/Mondstein.png", probability: "1.49%" },
{ name: "Gegenstand verstärken(b)", icon: "https://m2-helper.com/resources/events/okey/Gegenstand_verstärken_B.png", probability: "1.16%" },
{ name: "Gegenstand verzaubern(B)", icon: "https://m2-helper.com/resources/events/okey/Gegenstand_verzaubern_B.png", probability: "1.16%" },
{ name: "Gegenstand verzaubern+", icon: "https://m2-helper.com/resources/events/okey/Gegenstand_verzaubern+.png", probability: "0.75%" }
]
},
],
imageSrc: "https://m2-helper.com/resources/events/koenig/Schnapp_den_König_UI.png",
imageAlt: "Schnapp den König Spielfeld",
imageCaption: "Schnapp den König Spielfeld",
tipsTitle: "Tipps & Tricks:",
tips: [
"Merke dir die Position von aufgedeckten 5er-Karten für die Sonderregel.",
"Versuche komplette Reihen aufzudecken für den +10 Punkte Bonus.",
"Sammle bereits bekannte Karten mit deiner 4 ein, um Punkte zu maximieren.",
],
note: "<strong>Hinweis:</strong> Ein Mapwechsel oder Teleport bricht das aktuelle Spiel ab!",
helperTitle: "Schnapp den König Helper",
helperDesc: "Nutze die Karten unterhalb des Spielfeldes oder deine Tastatur, um Eingaben zu tätigen. <svg class='inline-mouse-icon' viewBox='0 0 20 28' width='16' height='22'><path d='M3 10 C3 5 5 2 10 2 C15 2 17 5 17 10 L17 20 C17 24 15 26 10 26 C5 26 3 24 3 20Z' fill='none' stroke='currentColor' stroke-width='1.5'/><line x1='10' y1='2' x2='10' y2='14' stroke='currentColor' stroke-width='1.5'/><path d='M3.5 10 C3.5 5.5 5.5 2.5 10 2.5 L10 14 L3.5 14Z' fill='#FECE58' opacity='0.7'/></svg> = Keine umliegende 5, <svg class='inline-mouse-icon' viewBox='0 0 20 28' width='16' height='22'><path d='M3 10 C3 5 5 2 10 2 C15 2 17 5 17 10 L17 20 C17 24 15 26 10 26 C5 26 3 24 3 20Z' fill='none' stroke='currentColor' stroke-width='1.5'/><line x1='10' y1='2' x2='10' y2='14' stroke='currentColor' stroke-width='1.5'/><path d='M16.5 10 C16.5 5.5 14.5 2.5 10 2.5 L10 14 L16.5 14Z' fill='#FECE58' opacity='0.7'/></svg> = Umliegende 5",
resetText: "Zurücksetzen",
helperCredit: "Wahrscheinlichkeitsberechnung mit Hilfe von ArcMeurtrier",
},
seer: {
title: "Seherwettstreit",
summary:
"Spiel ein Kartenspiel gegen den Computer, gewinne Sehermünzen und tausche sie gegen Truhen.<br><strong>Ab Level 30</strong>",
descTitle: "Beschreibung",
desc: "Stelle dein Wissen über Metin2 unter Beweis! Der Seher stellt dir knifflige Fragen über das Spiel, seine Geschichte und Geheimnisse. Beantworte sie richtig für großartige Belohnungen.",
tipsTitle: "Tipps & Tricks:",
tips: [
"Kenne die verschiedenen Maps und ihre Monster",
"Lerne die NPC-Namen und ihre Funktionen",
"Merke dir wichtige Zahlen (Level-Anforderungen, Kosten etc.)",
"Nutze das Internet für schwierige Fragen (wenn erlaubt)",
],
note: "<strong>Tipp:</strong> Je mehr Fragen du richtig beantwortest, desto wertvoller werden die Belohnungen!",
},
yutnori: {
title: "Yutnori",
summary:
"Sammle Birkenstämme und spiele gegen den Computer für verschiedene Gewinne.<br><strong>Ab Level 30</strong>",
descTitle: "Beschreibung",
desc: "Während des Events sammelst du durch Monsterkills<img src=\"https://m2-helper.com/resources/events/yutnori/Birkenstamm.png\" alt=\"Birkenstamm\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\">Birkenstämme, welche automatisch im Eventinventar landen. Sobald du 28 Birkenstämme gesammelt hast, wandeln diese sich zu einem<img src=\"Events/images/Yutnori-Spielbrett.png\" alt=\"Yutnori-Spielbrett\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\">Yutnori-Spielbrett um. Man kann maximal 999 Yutnori-Spielbretter besitzen.<br>Mit einem Yutnori-Spielbrett kannst du das Yutnori-Minispiel starten und trittst gegen den Computer in einem klassischen Brettspiel an.<br>Alternativ kann man ein Yutnori-Spielbrett auch gegen ein<span class=\"treasure-ticket-highlight\"><img src=\"Events/images/Yutnori-Geheimnis.png\" alt=\"Yutnori-Geheimnis\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\"><strong>Yutnori-Geheimnis</strong><div class=\"tooltip\">Verleiht dir für 30min:<br>20% EXP<br>5% Itemdrop<br>10% Stark gegen Monster</div></span> eintauschen. Dieses zählt zu den <strong>besten Eventitems</strong> im Spiel, da es nicht auf den Eventzeitraum begrenzt ist.",
gameplayTitle: "Spielablauf:",
gameplayDesc: [
"Öffne das Event-UI und starte das Spiel.",
"Der erste Wurf entscheidet, wer beginnt - der niedrigere Wurf beginnt. Jede Runde kannst du eine deiner zwei Spielfiguren, entsprechend der geworfenen Yut-Stäbe, bewegen.<br>Es werden immer 4 Yut-Stäbe geworfen. Die <strong>Anzahl der flachen Seiten</strong> bestimmt die Anzahl der Felder, die du vorrücken darfst. Man startet mit 250 Punkten und verliert pro Zug 10 Punkte. Sollte man eine Spielfigur des Computers schlagen, erhält man 10 Punkte. Schlägt der Computer eine deiner Spielfiguren, verlierst du 10 Punkte. Wenn eine Spielfigur das Ziel erreicht, erhälst du 10 Punkte oder verlierst 10 Punkte, wenn es eine Spielfigur des Computers ist.",
"Sollte das Spiel nicht innerhalb 20 Zügen beendet worden sein, hat der Spieler verloren."
],
probabilityTitle: "Wahrscheinlichkeiten & Züge:",
probabilityDesc: "Du kannst die Wahrscheinlichkeit eines bestimmten Wurfes erhöhen, indem du den entsprechenden Wurf in der Wahrscheinlichkeits-Auswahl auswählst. Wenn man Yut oder Mo geworfen hat, erhält man einen weiteren Wurf.",
probabilityTable: [
{ throw: "Do", moves: "1 vor" },
{ throw: "Ge", moves: "2 vor" },
{ throw: "Geol", moves: "3 vor" },
{ throw: "Yut", moves: "4 vor" },
{ throw: "Mo", moves: "5 vor" },
{ throw: "Back-do", moves: "1 zurück" }
],
probabilityTableHeaders: {
throws: "Wurf",
moves: "Züge",
rowLabel: "Züge"
},
goalTitle: "Ziel:",
goalDesc: "Bringe deine beiden Spielfiguren als Erster ins Ziel, um das Spiel zu gewinnen. Je nach Punktestand erhältst du unterschiedliche Truhenbelohnungen.",
gameplayImage: {
src: "Events/images/Yut_Nori_Game.png",
alt: "Yutnori Spielfeld",
caption: "Yutnori Spielfeld"
},
tipsTitle: "Tipps & Tricks:",
tips: [
"Nutze die Wahrscheinlichkeits-Auswahl, um deine Chancen auf bestimmte Züge zu verbessern.",
"Sollte eine Spielfigur nur ein Feld vor dem Start/Ziel stehen, versuche ein Back-do zu nutzen.",
"Nutze die Ecken des Bretts, um Abkürzungen zu nehmen.",
"Es empfiehlt sich, zwei Spielfiguren zu verbinden, um Züge zu sparen.",
],
note: "<strong>Hinweis:</strong> Stell sicher, dass du genügend<img src=\"Events/images/Yutnori-Geheimnis.png\" alt=\"Yutnori-Geheimnis\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\">Yutnori-Geheimnisse eintauscht!",
rewardsTitle: "Belohnungen:",
rewardsTable: {
versions: [
{
name: "",
chests: [
{
name: "Bronzenes Yutnori-Bündel",
icon: "https://m2-helper.com/resources/events/yutnori/Bronzenes_Yutnori-Bündel.png",
points: "< 150 Punkte",
contents: [
{
name: "EXP (100.000)",
icon: "https://m2-helper.com/resources/exp.png",
probability: "10%"
},
{
name: "Yang (50.000)",
icon: "https://m2-helper.com/resources/yang.png",
probability: "70%"
},
{
name: "Yang (100.000)",
icon: "https://m2-helper.com/resources/yang.png",
probability: "18%"
},
{
name: "Yutnori-Spielbrett",
icon: "Events/images/Yutnori-Spielbrett.png",
probability: "2%"
}
]
},
{
name: "Silberne Yutnori-Trophäe",
icon: "https://m2-helper.com/resources/events/yutnori/Silberne_Yutnori-Trophäe.png",
points: "150-219 Punkte",
contents: [
{
name: "EXP (100.000)",
icon: "https://m2-helper.com/resources/exp.png",
probability: "14.4%"
},
{
name: "Yang (100.000)",
icon: "https://m2-helper.com/resources/yang.png",
probability: "14.4%"
},
{
name: "Yang (300.000)",
icon: "https://m2-helper.com/resources/yang.png",
probability: "7.2%"
},
{
name: "Yang (500.000)",
icon: "https://m2-helper.com/resources/yang.png",
probability: "5.0%"
},
{
name: "Yutnori-Spielbrett",
icon: "Events/images/Yutnori-Spielbrett.png",
probability: "0.7%"
},
{
name: "Blaue Perle",
icon: "https://m2-helper.com/resources/events/yutnori/Blaue_Perle.png",
probability: "1.4%"
},
{
name: "Blutrote Perle",
icon: "https://m2-helper.com/resources/events/yutnori/Blutrote_Perle.png",
probability: "1.4%"
},
{
name: "Affenei (7t)",
icon: "https://m2-helper.com/resources/events/yutnori/Affenei.png",
probability: "1.4%"
},
{
name: "Spinnenei (7t)",
icon: "https://m2-helper.com/resources/events/yutnori/Spinnenei_(Item).png",
probability: "1.4%"
},
{
name: "Ei des Razador (7t)",
icon: "https://m2-helper.com/resources/events/yutnori/Ei_des_Razador.png",
probability: "0.7%"
},
{
name: "Ei des Nemere (7t)",
icon: "https://m2-helper.com/resources/events/yutnori/Ei_des_Nemere.png",
probability: "0.7%"
},
{
name: "Büchertruhe Boost",
icon: "https://m2-helper.com/resources/events/yutnori/Büchertruhe_Boost.png",
probability: "0.7%"
},
{
name: "Büchertruhe Konter",
icon: "https://m2-helper.com/resources/events/yutnori/Büchertruhe_Konter.png",
probability: "0.7%"
},
{
name: "Cor Draconis (normal)",
icon: "https://m2-helper.com/resources/events/yutnori/Cor_Draconis_(Roh).png",
probability: "3.6%"
},
{
name: "Cor Draconis (edel)",
icon: "https://m2-helper.com/resources/events/yutnori/Cor_Draconis_(edel).png",
probability: "1.4%"
},
{
name: "Gegenstand verstärken(b)",
icon: "https://m2-helper.com/resources/events/yutnori/Gegenstand_verstärken_B.png",
probability: "1.4%"
},
{
name: "Gegenstand verzaubern(b)",
icon: "https://m2-helper.com/resources/events/yutnori/Gegenstand_verzaubern_B.png",
probability: "1.4%"
},
{
name: "Gegenstand verzaubern+",
icon: "https://m2-helper.com/resources/events/yutnori/Gegenstand_verzaubern+.png",
probability: "0.7%"
},
{
name: "Segensschriftrolle",
icon: "https://m2-helper.com/resources/events/yutnori/Segensschriftrolle.png",
probability: "2.2%"
},
{
name: "Magischer Stein",
icon: "https://m2-helper.com/resources/events/yutnori/Magischer_Stein.png",
probability: "2.2%"
},
{
name: "Teleportationsring",
icon: "https://m2-helper.com/resources/events/yutnori/Teleportationsring.png",
probability: "2.2%"
},
{
name: "Trank der Weisheit (3std)",
icon: "https://m2-helper.com/resources/events/yutnori/Trank_der_Weisheit.png",
probability: "3.6%"
},
{
name: "Trank des Aufstiegs (3std)",
icon: "https://m2-helper.com/resources/events/yutnori/Trank_der_Weisheit.png",
probability: "3.6%"
},
{
name: "Windschuhe (1t)",
icon: "https://m2-helper.com/resources/events/yutnori/Windschuhe.png",
probability: "1.4%"
},
{
name: "Herrscherband (einfach)",
icon: "https://m2-helper.com/resources/events/yutnori/Herrscherband_(einfach).png",
probability: "1.4%"
},
{
name: "Feuerwerkskreisel (10min) (10x)",
icon: "https://m2-helper.com/resources/events/yutnori/Feuerwerkskreisel.png",
probability: "2.2%"
},
{
name: "Chinesisches Feuerwerk (10min) (10x)",
icon: "https://m2-helper.com/resources/events/yutnori/Chinesisches_Feuerwerk.png",
probability: "2.2%"
},
{
name: "Stichschwert+0",
icon: "https://m2-helper.com/resources/events/yutnori/Stichschwert.png",
probability: "2.9%"
},
{
name: "Dämonenklinge+0",
icon: "https://m2-helper.com/resources/events/yutnori/Dämonenklinge.png",
probability: "2.9%"
},
{
name: "Siamesenmesser+0",
icon: "https://m2-helper.com/resources/events/yutnori/Siamesenmesser.png",
probability: "2.9%"
},
{
name: "Blaudrchenbogen+0",
icon: "https://m2-helper.com/resources/events/yutnori/Blaudrachenbogen.png",
probability: "2.9%"
},
{
name: "Halbmenschklinge+0",
icon: "https://m2-helper.com/resources/events/yutnori/Halbmenschklinge.png",
probability: "2.9%"
},
{
name: "Habichtskralle+0",
icon: "https://m2-helper.com/resources/events/yutnori/Habichtskralle.png",
probability: "2.9%"
},
{
name: "Ekstasefächer+0",
icon: "https://m2-helper.com/resources/events/yutnori/Ekstasefächer.png",
probability: "2.9%"
}
]
},
{
name: "Goldene Yutnori-Trophäe",
icon: "https://m2-helper.com/resources/events/yutnori/Goldene_Yutnori-Trophäe.png",
points: "≥ 220 Punkte",
contents: [
{
name: "Yutnori-Spielbrett",
icon: "Events/images/Yutnori-Spielbrett.png",
probability: "3.8%"
},
{
name: "Weiße Perle",
icon: "https://m2-helper.com/resources/events/yutnori/Weiße_Perle.png",
probability: "0.8%"
},
{
name: "Achat",
icon: "https://m2-helper.com/resources/events/yutnori/Achat.png",
probability: "2.3%"
},
{
name: "Titandioxid",
icon: "https://m2-helper.com/resources/events/yutnori/Titandioxid.png",
probability: "2.3%"
},
{
name: "Mondstein",
icon: "https://m2-helper.com/resources/events/yutnori/Mondstein.png",
probability: "1.5%"
},
{
name: "Ei des Razador (7t)",
icon: "https://m2-helper.com/resources/events/yutnori/Ei_des_Razador.png",
probability: "1.5%"
},
{
name: "Ei des Nemere (7t)",
icon: "https://m2-helper.com/resources/events/yutnori/Ei_des_Nemere.png",
probability: "1.5%"
},
{
name: "Cor Draconis (mystisch)",
icon: "https://m2-helper.com/resources/events/yutnori/Cor_Draconis_(mystisch).png",
probability: "5.4%"
},
{
name: "Cor Draconis (kostbar)",
icon: "https://m2-helper.com/resources/events/yutnori/Cor_Draconis_(kostbar).png",
probability: "6.2%"
},
{
name: "Gegenstand verstärken(b)",
icon: "https://m2-helper.com/resources/events/yutnori/Gegenstand_verstärken_B.png",
probability: "3.8%"
},
{
name: "Gegenstand verzaubern(b)",
icon: "https://m2-helper.com/resources/events/yutnori/Gegenstand_verzaubern_B.png",
probability: "3.8%"
},
{
name: "Gegenstand verzaubern+",
icon: "https://m2-helper.com/resources/events/yutnori/Gegenstand_verzaubern+.png",
probability: "3.1%"
},
{
name: "Segensschriftrolle",
icon: "https://m2-helper.com/resources/events/yutnori/Segensschriftrolle.png",
probability: "3.8%"
},
{
name: "Stein des Schmieds",
icon: "https://m2-helper.com/resources/events/yutnori/Stein_des_Schmieds.png",
probability: "2.3%"
},
{
name: "Magischer Stein",
icon: "https://m2-helper.com/resources/events/yutnori/Magischer_Stein.png",
probability: "4.6%"
},
{
name: "Hui (30t)",
icon: "https://m2-helper.com/resources/events/yutnori/Hui.png",
probability: "1.5%"
},
{
name: "Lavahöllenaxt (30t)",
icon: "https://m2-helper.com/resources/events/yutnori/Lavahöllenechse.png",
probability: "2.3%"
},
{
name: "Lolli der Stärke",
icon: "https://m2-helper.com/resources/events/yutnori/Halloween-Lolli.png",
probability: "1.5%"
},
{
name: "Tigerknochenohrring (20std)",
icon: "https://m2-helper.com/resources/events/yutnori/Tigerknochenohrring.png",
probability: "0.8%"
},
{
name: "Drachenknochenohrring (20std)",
icon: "https://m2-helper.com/resources/events/yutnori/Drachenknochenohrring.png",
probability: "0.8%"
},
{
name: "Teleportationsring",
icon: "https://m2-helper.com/resources/events/yutnori/Teleportationsring.png",
probability: "3.8%"
},
{
name: "Windschuhe (1t)",
icon: "https://m2-helper.com/resources/events/yutnori/Windschuhe.png",
probability: "2.3%"
},
{
name: "Segen des Lebens (10x)",
icon: "https://m2-helper.com/resources/events/yutnori/Segen_des_Lebens.png",
probability: "2.3%"
},
{
name: "Schmuckstein (200x)",
icon: "https://m2-helper.com/resources/events/yutnori/Schmuckstein.png",
probability: "2.3%"
},
{
name: "Geiststeinbündel (10x)",
icon: "https://m2-helper.com/resources/events/yutnori/Geiststeinbündel.png",
probability: "3.1%"
},
{
name: "Trank der Weisheit (3std)",
icon: "https://m2-helper.com/resources/events/yutnori/Trank_der_Weisheit.png",
probability: "6.2%"
},
{
name: "Feuerwerkskreisel (10min) (20x)",
icon: "https://m2-helper.com/resources/events/yutnori/Feuerwerkskreisel.png",
probability: "2.3%"
},
{
name: "Chinesisches Feuerwerk (10min) (20x)",
icon: "https://m2-helper.com/resources/events/yutnori/Chinesisches_Feuerwerk.png",
probability: "2.3%"
},
{
name: "Stichschwert+0",
icon: "https://m2-helper.com/resources/events/yutnori/Stichschwert.png",
probability: "3.1%"
},
{
name: "Dämonenklinge+0",
icon: "https://m2-helper.com/resources/events/yutnori/Dämonenklinge.png",
probability: "3.1%"
},
{
name: "Siamesenmesser+0",
icon: "https://m2-helper.com/resources/events/yutnori/Siamesenmesser.png",
probability: "3.1%"
},
{
name: "Blaudrachenbogen+0",
icon: "https://m2-helper.com/resources/events/yutnori/Blaudrachenbogen.png",
probability: "3.1%"
},
{
name: "Halbmenschklinge+0",
icon: "https://m2-helper.com/resources/events/yutnori/Halbmenschklinge.png",
probability: "3.1%"
},
{
name: "Habichtskralle+0",
icon: "https://m2-helper.com/resources/events/yutnori/Habichtskralle.png",
probability: "3.1%"
},
{
name: "Ekstasefächer+0",
icon: "https://m2-helper.com/resources/events/yutnori/Ekstasefächer.png",
probability: "3.1%"
}
]
}
]
}
]
},
rewardsNote: "Mit Hilfe der<img src=\"Events/images/Rätselsplitter.png\" alt=\"Rätselsplitter\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\"><strong>Rätselsplitter</strong> kann man verschiedene Lootkisten herstellen. Man hat unter anderem die Möglichkeit seltene Kostüme und Schulterbänder zu bekommen, Kisten für Lootpets oder gefragte PvP-Pets zu öffnen und Elementtalismane zu erhalten.",
puzzleChests: {
dropdownLabel: "Rätselsplitter-Kisten:",
selectedChestTitle: "Ausgewählte Kiste:",
collapsibleLabel: "Loot-Liste anzeigen",
chests: [
{
id: "halloween-m",
name: "Halloweenkiste (m)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Halloweenkiste_(m).png",
puzzlePieces: 11,
lootList: [
{
name: "Kürbis-Smoking (Bonus) (30t)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Kürbis-Smoking.png",
probability: "8.3%"
},
{
name: "Jack-Pumpkin-Anzug+ (30t)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Jack-Pumpkin-Anzug.png",
probability: "8.3%"
},
{
name: "Zombieanzug+ (30t)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Zombieanzug.png",
probability: "8.3%"
},
{
name: "Zaubereranzug+ (30t)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Zaubereranzug.png",
probability: "8.3%"
},
{
name: "Ku. Fangzahn-Kostüm+ (m) (30t)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Fangzahn-Kostüm_(Kupfer)_(m).png",
probability: "8.3%"
},
{
name: "S. Fangzahn-Kostüm+ (m) (30t)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Fangzahn-Kostüm_(Stahl)_(m).png",
probability: "8.3%"
},
{
name: "Vamp+ (rot) (30t)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Vampir-Kostüm_(rot)_(m).png",
probability: "8.3%"
},
{
name: "Vamp+ (grau) (30t)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Vampir-Kostüm_(grau)_(m).png",
probability: "8.3%"
},
{
name: "Harnisch des Horrors+(g) (30t)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Harnisch_des_Horrors_(g)_(m).png",
probability: "8.3%"
},
{
name: "Harnisch des Horrors+(b) (30t)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Harnisch_des_Horrors_(b)_(m).png",
probability: "8.3%"
},
{
name: "Braunes Wolfsgewand+ (m) (30t)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Braunes_Wolfsgewand_(m).png",
probability: "8.3%"
},
{
name: "Graues Wolfsgewand+ (m) (30t)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Graues_Wolfsgewand_(m).png",
probability: "8.3%"
}
]
},
{
id: "halloween-w",
name: "Halloweenkiste (w)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Halloweenkiste_(w).png",
puzzlePieces: 11,
lootList: [
{
name: "Kürbis-Kleid (Bonus) (30t)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Kürbis-Kleid.png",
probability: "8.3%"
},
{
name: "Jack-Pumpkin-Kleid+ (30t)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Jack-Pumpkin-Kleid.png",
probability: "8.3%"
},
{
name: "Zombiekleid+ (30t)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Zombiekleid.png",
probability: "8.3%"
},
{
name: "Hexenkleid+ (30t)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Hexenkleid.png",
probability: "8.3%"
},
{
name: "Ku. Fangzahn-Kostüm+ (w) (30t)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Fangzahn-Kostüm_(Kupfer)_(w).png",
probability: "8.3%"
},
{
name: "S. Fangzahn-Kostüm+ (w) (30t)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Fangzahn-Kostüm_(Stahl)_(w).png",
probability: "8.3%"
},
{
name: "Vamp+ (rot) (30t)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Vampir-Kostüm_(rot)_(w).png",
probability: "8.3%"
},
{
name: "Vamp+ (grau) (30t)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Vampir-Kostüm_(grau)_(w).png",
probability: "8.3%"
},
{
name: "Harnisch des Horrors+(g) (30t)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Harnisch_des_Horrors_(g)_(w).png",
probability: "8.3%"
},
{
name: "Harnisch des Horrors+(b) (30t)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Harnisch_des_Horrors_(b)_(w).png",
probability: "8.3%"
},
{
name: "Braunes Wolfsgewand+ (w) (30t)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Braunes_Wolfsgewand_(w).png",
probability: "8.3%"
},
{
name: "Graues Wolfsgewand+ (w) (30t)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Graues_Wolfsgewand_(w).png",
probability: "8.3%"
}
]
},
{
id: "halloweenhut-m",
name: "Halloweenhutkiste (m)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Halloweenhutkiste_(m).png",
puzzlePieces: 7,
lootList: [
{
name: "Hexenhut",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Hexenhut.png",
probability: "8.3%"
},
{
name: "Jack-Pumpkin-Kopf (m)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Jack-Pumpkin-Kopf_(m)_icon.png",
probability: "8.3%"
},
{
name: "Kürbis-Maske",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Jack-Pumpkin-Kopf_(m)_icon.png",
probability: "8.3%"
},
{
name: "Zombiekürbismaske",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Zombiekürbismaske.png",
probability: "8.3%"
},
{
name: "Vampirkriegerhelm (rot)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Vampirkriegerhelm_(rot)_icon.png",
probability: "8.3%"
},
{
name: "Vampirkriegerhelm (gr.)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Vampirkriegerhelm_(gr.)_icon.png",
probability: "8.3%"
},
{
name: "Fangzahn-Helm (Kupfer)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Fangzahn-Helm_(Kupfer)_icon.png",
probability: "8.3%"
},
{
name: "Fangzahn-Helm (Stahl)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Fangzahn-Helm_(Stahl)_icon.png",
probability: "8.3%"
},
{
name: "Hörner des Horrors (g) (m)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Hörner_des_Horrors_(g)_(w)_icon.png",
probability: "8.3%"
},
{
name: "Hörner des Horrors (b) (m)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Hörner_des_Horrors_(b)_(w)_icon.png",
probability: "8.3%"
},
{
name: "Braune Wolfskappe (m)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Braune_Wolfskappe_(w)_icon.png",
probability: "8.3%"
},
{
name: "Graue Wolfskappe (m)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Graue_Wolfskappe_(m)_icon.png",
probability: "8.3%"
}
]
},
{
id: "halloweenhut-w",
name: "Halloweenhutkiste (w)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Halloweenhutkiste_(w).png",
puzzlePieces: 7,
lootList: [
{
name: "Hexenhut",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Hexenhut.png",
probability: "8.3%"
},
{
name: "Jack-Pumpkin-Kopf (w)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Jack-Pumpkin-Kopf_(m)_icon.png",
probability: "8.3%"
},
{
name: "Kürbis-Maske",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Jack-Pumpkin-Kopf_(m)_icon.png",
probability: "8.3%"
},
{
name: "Zombiekürbismaske",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Zombiekürbismaske.png",
probability: "8.3%"
},
{
name: "Vampirkriegerhelm (rot) (w)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Vampirkriegerhelm_(rot)_icon.png",
probability: "8.3%"
},
{
name: "Vampirkriegerhelm (gr.) (w)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Vampirkriegerhelm_(gr.)_icon.png",
probability: "8.3%"
},
{
name: "Fangzahn-Helm (Kupfer) (w)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Fangzahn-Helm_(Kupfer)_icon.png",
probability: "8.3%"
},
{
name: "Fangzahn-Helm (Stahl) (w)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Fangzahn-Helm_(Stahl)_icon.png",
probability: "8.3%"
},
{
name: "Hörner des Horrors (g) (w)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Hörner_des_Horrors_(g)_(w)_icon.png",
probability: "8.3%"
},
{
name: "Hörner des Horrors (b) (w)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Hörner_des_Horrors_(b)_(w)_icon.png",
probability: "8.3%"
},
{
name: "Braune Wolfskappe (w)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Braune_Wolfskappe_(w)_icon.png",
probability: "8.3%"
},
{
name: "Graue Wolfskappe (w)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Graue_Wolfskappe_(m)_icon.png",
probability: "8.3%"
}
]
},
{
id: "gruselpet",
name: "Gruselpet-Kiste",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Gruselpet-Kiste.png",
puzzlePieces: 11,
lootList: [
{
name: "Boney (30t)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Boney.png",
probability: "8.3%"
},
{
name: "Jadephönix (30t)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Jadephönix.png",
probability: "8.3%"
},
{
name: "Kleiner Feger (30t)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Kleiner_Feger.png",
probability: "8.3%"
},
{
name: "Kürbisköpfchen (30t)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Kürbisköpfchen.png",
probability: "8.3%"
},
{
name: "Bruce (Loot) (30t)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Bruce.png",
probability: "8.3%"
},
{
name: "Wayne (Loot) (30t)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Wayne.png",
probability: "8.3%"
},
{
name: "Frau Jiangshi+ (30t)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Frau-Jiangshi.png",
probability: "8.3%"
},
{
name: "Herr Jiangshi+ (30t)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Herr-Jiangshi.png",
probability: "8.3%"
},
{
name: "Hui (30t)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Hui.png",
probability: "8.3%"
},
{
name: "Buh (30t)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Buh.png",
probability: "8.3%"
},
{
name: "Astrabell (30t)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Astrabell.png",
probability: "8.3%"
},
{
name: "Helexna (30t)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Helexna.png",
probability: "8.3%"
}
]
},
{
id: "gruselmount",
name: "Gruselmount-Kiste",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Gruselmount-Kiste.png",
puzzlePieces: 7,
lootList: [
{
name: "Equus Purpur (30t)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Equus_Purpur.png",
probability: "14.3%"
},
{
name: "Nirwana-Drache (30t)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Nirwana-Drache.png",
probability: "14.3%"
},
{
name: "Samsara-Drache (30t)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Samsara-Drache.png",
probability: "14.3%"
},
{
name: "Lavahöllenechse (30t)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Lavahöllenechse.png",
probability: "14.3%"
},
{
name: "Eishöllenechse (30t)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Eishöllenechse.png",
probability: "14.3%"
},
{
name: "Zerberus (gold) (30t)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Zerberus_(gold).png",
probability: "14.3%"
},
{
name: "Zerberus (silber) (30t)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Zerberus_(silber).png",
probability: "14.3%"
}
]
},
{
id: "schmuckschatulle",
name: "Schmuckschatulle",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Schmuckschatulle.png",
puzzlePieces: 29,
lootList: [
{
name: "Lolli der Kraft (3t)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Lolli_der_Kraft.png",
probability: "20.0%"
},
{
name: "Lolli der Kraft (7t)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Lolli_der_Kraft.png",
probability: "1.7%"
},
{
name: "Lolli der Stärke",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Halloween-Lolli.png",
probability: "1.7%"
},
{
name: "Lolli der Magie",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Lolli_der_Magie.png",
probability: "1.7%"
},
{
name: "Ring der Willenskraft",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Ring_der_Willenskraft.png",
probability: "3.3%"
},
{
name: "Ring der tödlichen Macht",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Ring_der_tödlichen_Macht.png",
probability: "3.3%"
},
{
name: "Halbmondring",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Halbmondring.png",
probability: "1.7%"
},
{
name: "Ring der Freude",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Ring_der_Freude.png",
probability: "6.7%"
},
{
name: "Amulett der Ewigen Liebe",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Amulett_der_ewigen_Liebe.png",
probability: "6.7%"
},
{
name: "Schoko-Amulett",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Schoko-Amulett.png",
probability: "1.7%"
},
{
name: "Nazar-Amulett",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Nazar-Amulett.png",
probability: "6.7%"
},
{
name: "Amulett der Wächter",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Amulett_der_Wächter.png",
probability: "1.7%"
},
{
name: "Heldenmedaille (1t)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Heldenmedaille.png",
probability: "10.0%"
},
{
name: "Trank des Aufstiegs (3std)",
icon: "https://m2-helper.com/resources/events/yutnori/Trank_der_Weisheit.png",
probability: "13.3%"
},
{
name: "Trank der Weisheit (3std)",
icon: "https://m2-helper.com/resources/events/yutnori/Trank_der_Weisheit.png",
probability: "20.0%"
}
]
},
{
id: "petkiste",
name: "Petkiste",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Petkiste.png",
puzzlePieces: 15,
lootList: [
{
name: "Affenei",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Affenei.png",
probability: "50.0%"
},
{
name: "Spinnenei",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Spinnenei_(Item).png",
probability: "25.0%"
},
{
name: "Ei des Nemere",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Ei_des_Nemere.png",
probability: "8.3%"
},
{
name: "Ei des Razador",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Ei_des_Razador.png",
probability: "7.8%"
},
{
name: "Baby-Baashidos Ei",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Baby-Baashidos_Ei.png",
probability: "4.2%"
},
{
name: "Azraelichens Ei",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Azraelchens_Ei.png",
probability: "2.1%"
},
{
name: "Moppelhenkerchen-Ei",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Moppelhenkerchen-Ei.png",
probability: "2.0%"
},
{
name: "Rotes Drachenei",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Rotes_Drachenei.png",
probability: "0.4%"
},
{
name: "Blaues Drachenei",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Blaues_Drachenei.png",
probability: "0.08%"
},
{
name: "Nessie-Ei",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Nessie-Ei.png",
probability: "0.08%"
}
]
},
{
id: "baenderbox",
name: "Bänderbox",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Bänderbox.png",
puzzlePieces: 9,
lootList: [
{
name: "Herrscherband (einfach)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Herrscherband_(einfach).png",
probability: "6.8%"
},
{
name: "Herrscherband (fein)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Herrscherband_(fein).png",
probability: "0.6%"
},
{
name: "Herrscherband (edel)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Herrscherband_(edel).png",
probability: "0.1%"
},
{
name: "Meisterband (einfach)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Meisterband_(einfach).png",
probability: "6.8%"
},
{
name: "Meisterband (fein)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Meisterband_(fein).png",
probability: "0.6%"
},
{
name: "Meisterband (edel)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Meisterband_(edel).png",
probability: "0.1%"
},
{
name: "Fürstenband (einfach)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Fürstenband_(einfach).png",
probability: "6.8%"
},
{
name: "Fürstenband (fein)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Fürstenband_(fein).png",
probability: "0.6%"
},
{
name: "Fürstenband (edel)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Fürstenband_(edel).png",
probability: "0.1%"
},
{
name: "Königsband (einfach)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Königsband_(einfach).png",
probability: "6.8%"
},
{
name: "Königsband (fein)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Königsband_(fein).png",
probability: "0.6%"
},
{
name: "Königsband (edel)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Königsband_(edel).png",
probability: "0.1%"
},
{
name: "Band des Zi (einfach)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Zi_(einfach).png",
probability: "5.6%"
},
{
name: "Band des Zi (fein)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Zi_(fein).png",
probability: "0.2%"
},
{
name: "Band des Chou (einfach)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Chou_(einfach).png",
probability: "5.6%"
},
{
name: "Band des Chou (fein)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Chou_(fein).png",
probability: "0.2%"
},
{
name: "Band des Yin (einfach)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Yin_(einfach).png",
probability: "5.6%"
},
{
name: "Band des Yin (fein)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Yin_(fein).png",
probability: "0.2%"
},
{
name: "Band der Mao (einfach)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_der_Mao_(einfach).png",
probability: "5.6%"
},
{
name: "Band der Mao (fein)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_der_Mao_(fein).png",
probability: "0.2%"
},
{
name: "Band des Chen (einfach)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Chen_(einfach).png",
probability: "5.6%"
},
{
name: "Band des Chen (fein)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Chen_(fein).png",
probability: "0.2%"
},
{
name: "Band der Si (einfach)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_der_Si_(einfach).png",
probability: "5.6%"
},
{
name: "Band der Si (fein)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_der_Si_(fein).png",
probability: "0.2%"
},
{
name: "Band des Wu (einfach)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Wu_(einfach).png",
probability: "5.6%"
},
{
name: "Band des Wu (fein)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Wu_(fein).png",
probability: "0.2%"
},
{
name: "Band des Wei (einfach)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Wei_(einfach).png",
probability: "5.6%"
},
{
name: "Band des Wei (fein)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Wei_(fein).png",
probability: "0.2%"
},
{
name: "Band des Shen (einfach)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Shen_(einfach).png",
probability: "5.6%"
},
{
name: "Band des Shen (fein)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Shen_(fein).png",
probability: "0.2%"
},
{
name: "Band des Yu (einfach)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Yu_(einfach).png",
probability: "5.6%"
},
{
name: "Band des Yu (fein)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Yu_(fein).png",
probability: "0.2%"
},
{
name: "Band des Xu (einfach)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Xu_(einfach).png",
probability: "5.6%"
},
{
name: "Band des Xu (fein)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Xu_(fein).png",
probability: "0.2%"
},
{
name: "Band des Hai (einfach)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Hai_(einfach).png",
probability: "5.6%"
},
{
name: "Band des Hai (fein)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Hai_(fein).png",
probability: "0.2%"
}
]
},
{
id: "ornamentkiste",
name: "Ornamentkiste",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Ornamentkiste.png",
puzzlePieces: 33,
lootList: [
{
name: "Feuertalisman+0",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Feuertalisman.png",
probability: "0.7%"
},
{
name: "Eistalisman+0",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Eistalisman.png",
probability: "0.7%"
},
{
name: "Erdtalisman+0",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Erdtalisman.png",
probability: "0.7%"
},
{
name: "Dunkler Talisman+0",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Dunkler_Talisman.png",
probability: "0.7%"
},
{
name: "Windtalisman+0",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Windtalisman.png",
probability: "0.7%"
},
{
name: "Blitztalisman+0",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Blitztalisman.png",
probability: "0.7%"
},
{
name: "Rote Zodiakschatulle (50x)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Rote_Zodiakschatulle.png",
probability: "25.7%"
},
{
name: "Blaue Zodiakschatulle (50x)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Blaue_Zodiakschatulle.png",
probability: "33.1%"
},
{
name: "Elementblüte (50x)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Elementblüte.png",
probability: "22.0%"
},
{
name: "Signum der Wächter (3std)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Signum_der_Wächter.png",
probability: "7.4%"
},
{
name: "Sphärenpergament",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Sphärenpergament_(h).png",
probability: "7.4%"
}
]
},
{
id: "ultimate-pet-book",
name: "Ultimative Pet-Bücherkiste",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Pet-Buch-Kiste.png",
puzzlePieces: 14,
lootList: [
{
name: "Widerstand (Krieger)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "2.8%"
},
{
name: "Widerstand (Sura)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "2.8%"
},
{
name: "Widerstand (Ninja)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "2.8%"
},
{
name: "Widerstand (Schamane)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "2.8%"
},
{
name: "Widerstand (Lykaner)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "2.8%"
},
{
name: "Berserker-Buch",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "9.3%"
},
{
name: "Magiebruch-Buch",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "9.3%"
},
{
name: "Beschleunigungs-Buch",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "0.9%"
},
{
name: "Drill-Buch",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "4.7%"
},
{
name: "Erneuerungs-Buch",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-blau.png",
probability: "3.7%"
},
{
name: "Vampir-Buch",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "9.3%"
},
{
name: "Geister-Buch",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "14.0%"
},
{
name: "Hindernis-Buch",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "0.9%"
},
{
name: "Spiegel-Buch",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "0.9%"
},
{
name: "Yang Drop-Buch",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "9.3%"
},
{
name: "Reichweiten-Buch",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "14.0%"
},
{
name: "Unbesiegbarkeits-Buch",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-blau.png",
probability: "1.4%"
},
{
name: "Heilungs-Buch",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-blau.png",
probability: "1.4%"
},
{
name: "Braumeister-Buch",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "0.9%"
},
{
name: "Monsterjäger-Buch",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "0.9%"
},
{
name: "Scharfblick-Buch",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "0.9%"
},
{
name: "Lebensentzugs-Buch",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "0.9%"
},
{
name: "Federleicht-Buch",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-blau.png",
probability: "0.9%"
},
{
name: "Pet verzaubern",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Pet_verzaubern.png",
probability: "0.9%"
},
{
name: "Pet Reverti",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Pet_Reverti.png",
probability: "0.9%"
},
{
name: "Pet Revertus",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Pet_Revertus.png",
probability: "0.9%"
}
]
},
{
id: "risserzahn-plus",
name: "Risserzahnkiste+",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Risserzahnkiste+.png",
puzzlePieces: 25,
lootList: [
{
name: "Enthält einen Waffenskin deiner Wahl:",
isDescription: true
},
{
name: "Risserzahn-Klinge",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Risserzahn-Klinge.png"
},
{
name: "Risserzahn-Dolch",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Risserzahn-Dolch.png"
},
{
name: "Risserzahn-Bogen",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Risserzahn-Bogen.png"
},
{
name: "Risserzahn-Krallen",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Risserzahn-Krallen.png"
},
{
name: "Risserzahn-Fächer",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Risserzahn-Fächer.png"
},
{
name: "Risserzahn-Glocke",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Risserzahn-Glocke.png"
},
{
name: "Risserzahn-Glefe",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Risserzahn-Glefe.png"
}
]
},
{
id: "cor-draconis",
name: "Cor Draconis-Kiste",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Cor_Draconis-Kiste.png",
puzzlePieces: 55,
lootList: [
{
name: "Cor Draconis (Roh)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Cor_Draconis_(Roh).png",
probability: "36.3%"
},
{
name: "Cor Draconis (normal)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Cor_Draconis_(Roh).png",
probability: "12.1%"
},
{
name: "Cor Draconis (edel)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Cor_Draconis_(edel).png",
probability: "7.3%"
},
{
name: "Cor Draconis (kostbar)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Cor_Draconis_(kostbar).png",
probability: "4.0%"
},
{
name: "Cor Draconis (mystisch)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Cor_Draconis_(mystisch).png",
probability: "2.0%"
},
{
name: "Grüne Drachenbohne",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Grüne_Drachenbohne.png",
probability: "28.2%"
},
{
name: "Blaue Drachenbohne",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Blaue_Drachenbohne.png",
probability: "6.0%"
},
{
name: "Rosa Drachenbohne",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Rosa_Drachenbohne.png",
probability: "4.0%"
}
]
},
{
id: "gayakiste",
name: "Gayakiste",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Gayakiste.png",
puzzlePieces: 7,
lootList: [
{
name: "Enthält immer folgende Items:",
isDescription: true
},
{
name: "Schmuckstein (1200x)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Schmuckstein.png",
probability: "100%"
},
{
name: "Geiststeinbündel (10x)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Geiststeinbündel.png",
probability: "100%"
},
{
name: "Gayahandel zurücksetzen",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Gayahandel_zurücksetzen.png",
probability: "100%"
},
{
name: "Gayahandelerweiterung",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Gayahandelerweiterung.png",
probability: "100%"
}
]
},
{
id: "mysterien",
name: "Kiste der Mysterien",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Kiste_der_Mysterien.png",
puzzlePieces: 11,
lootList: [
{
name: "Weiße Perle",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Weiße_Perle.png",
probability: "6.5%"
},
{
name: "Blaue Perle",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Blaue_Perle.png",
probability: "13.1%"
},
{
name: "Blutrote Perle",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Blutrote_Perle.png",
probability: "18.3%"
},
{
name: "Titandioxid",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Titandioxid.png",
probability: "0.1%"
},
{
name: "Achat",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Achat.png",
probability: "0.3%"
},
{
name: "Mondstein",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Mondstein.png",
probability: "0.1%"
},
{
name: "Goldmetallic Farbstoff",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Goldmetallic_Farbstoff.png",
probability: "7.8%"
},
{
name: "Rotflammenstein",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Rotflammenstein.png",
probability: "11.8%"
},
{
name: "Truhe der Königin Meley",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Truhe_der_Königin_Meley.png",
probability: "1.3%"
},
{
name: "Truhe des Drachenwächter",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Truhe_der_Königin_Meley.png",
probability: "1.3%"
},
{
name: "Truhe des Beran-Setaou",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Truhe_des_Beran-Setaou.png",
probability: "3.9%"
},
{
name: "Truhe des Bagjanamu",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Truhe_des_Bagjanamu.png",
probability: "5.2%"
},
{
name: "Truhe des Razador",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Truhe_des_Razador.png",
probability: "14.4%"
},
{
name: "Truhe des Nemere",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Truhe_des_Nemere.png",
probability: "13.1%"
},
{
name: "Truhe des Jotun Thrym",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Jotun_Thrym-Truhe.png",
probability: "1.3%"
},
{
name: "Hydras Truhe",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Hydras_Truhe.png",
probability: "1.3%"
}
]
},
{
id: "rubinkiste",
name: "Rubinkiste",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Rubinkiste.png",
puzzlePieces: 11,
lootList: [
{
name: "Pfirsichblütenwein (3x)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Pfirsichblütenwein_B.png",
probability: "2.9%"
},
{
name: "Status-Neuverteilung",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Status-Neuverteilung_B.png",
probability: "2.9%"
},
{
name: "Schrumpfkopf",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Schrumpfkopf.png",
probability: "2.9%"
},
{
name: "Trank der Hast (30min) (3x)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Trank_der_Hast_B.png",
probability: "2.9%"
},
{
name: "Elixier des Mondes (M)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Elixier_des_Mondes_(M)_B.png",
probability: "2.9%"
},
{
name: "Kompass des Metinsteins",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Kompass_des_Metinsteins_B.png",
probability: "2.9%"
},
{
name: "Tapferkeitsumhang",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Tapferkeitsumhang_B.png",
probability: "2.9%"
},
{
name: "Medaille des Drachen (3x)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Medaille_des_Drachen_B.png",
probability: "2.9%"
},
{
name: "Schriftrolle des Drachen",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Schriftrolle_des_Drachen_B.png",
probability: "2.9%"
},
{
name: "Blutstein",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Blutstein.png",
probability: "2.9%"
},
{
name: "Buch des Anführers (1std)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Buch_des_Anführers_B.png",
probability: "2.9%"
},
{
name: "Geschwindigkeitstrank (30min) (3x)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Geschwindigkeitstrank_B.png",
probability: "2.9%"
},
{
name: "Gegenstand verstärken(b)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Gegenstand_verstärken_B.png",
probability: "0.3%"
},
{
name: "Gegenstand verzaubern(B)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Gegenstand_verzaubern_B.png",
probability: "0.3%"
},
{
name: "Segenskugel",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Segenskugel_B.png",
probability: "2.9%"
},
{
name: "Segensschriftrolle",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Segensschriftrolle_B.png",
probability: "2.9%"
},
{
name: "Trank des Angriffs +15 (30min) (3x)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Trank_des_Angriffs_+10_B.png",
probability: "2.9%"
},
{
name: "Trank des Angriffs +20 (30min) (3x)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Trank_des_Angriffs_+20_B.png",
probability: "2.9%"
},
{
name: "Passierschein",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Passierschein.png",
probability: "2.9%"
},
{
name: "Elixier des Forschers",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Elixier_des_Forschers.png",
probability: "2.9%"
},
{
name: "Elixier der Sonne (M)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Elixier_der_Sonne_(M)_B.png",
probability: "2.9%"
},
{
name: "Windschuhe (1t)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Windschuhe.png",
probability: "2.9%"
},
{
name: "Exorzismus-Schriftrolle",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Exorzismus-Schriftrolle.png",
probability: "2.9%"
},
{
name: "Stein-Handbuch",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Stein-Handbuch.png",
probability: "2.9%"
},
{
name: "Protein-Happen",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Protein-Happen.png",
probability: "2.9%"
},
{
name: "Frucht des Lebens",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Frucht_des_Lebens.png",
probability: "2.9%"
},
{
name: "Pfirsichblütenwein+ (3x)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Pfirsichblütenwein_B.png",
probability: "2.9%"
},
{
name: "Konzentriertes Lesen",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Konzentriertes_Lesen.png",
probability: "2.9%"
},
{
name: "Drachengott-Leben (30min) (3x)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Drachengott-Leben.png",
probability: "2.9%"
},
{
name: "Drachengott-Angriff (30min) (3x)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Drachengott-Angriff.png",
probability: "2.9%"
},
{
name: "Handschuhe des Diebes (7t)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Handschuhe_des_Diebes.png",
probability: "2.9%"
},
{
name: "Medaille des Glücks (7t)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Medaille_des_Glücks.png",
probability: "2.9%"
},
{
name: "Teleportationsring",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Teleportationsring.png",
probability: "2.9%"
},
{
name: "Pergament der Pet-Namen",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Pergament_der_Pet-Namen.png",
probability: "2.9%"
},
{
name: "Inventarerweiterung",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Inventarerweiterung.png",
probability: "2.9%"
},
{
name: "Ring der Geheimnisse (15t)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Ring_der_Geheimnisse.png",
probability: "2.9%"
},
{
name: "Gegenstand verzaubern+",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Gegenstand_verzaubern+.png",
probability: "0.1%"
}
]
}
]
},
secretCalculator: {
title: "Yutnori-Geheimnis Rechner",
minutesLabel: "Minuten pro Run:",
secretsLabel: "Anzahl Yutnori-Geheimnisse:",
calculateBtn: "Berechnen",
resultLabel: "Mögliche Runs:"
},
},
},
},
en: {
flag: "🇬🇧",
label: "English",
title: "Event Helper",
subtitle: "Overview and help tools for all events.",
footer: "Metin2 Helper by NikKing97. Not official by Gameforge.",
activeLabel: "ACTIVE",
events: {
treasure: {
title: "Treasure Island - Goblin",
summary:
"Protect a treasure goblin from monsters, collect doubloons, and use them for a mini-treasure hunt.<br><strong>From level 70</strong>",
descTitle: "Description",
desc: 'With a <span class="treasure-ticket-highlight"><img src="https://m2-helper.com/resources/events/Schatzticket.png" alt="Treasure Ticket" class="inline w-6 h-6 mx-1.5 align-top -mt-0">Treasure Ticket<div class="tooltip">You can find the Treasure Ticket in chests during the event period.<br><img src="https://m2-helper.com/resources/events/Goldene_Schatztruhe.png" alt="Golden Chest" class="inline w-5 h-5 mx-1"> <img src="https://m2-helper.com/resources/events/Goldener_Schlüssel.png" alt="Golden Key" class="inline w-5 h-5 mx-1"></div></span> you teleport to the island where the treasure goblin awaits. On the way, 3 giant treasure chests appear - only one contains the treasure. As soon as the goblin finds the right one, the mission is successful. If he or you die, it fails. <br><br><img src="https://m2-helper.com/resources/events/Dublone.png" alt="Doubloon" class="inline w-7 h-7 mx-1.5 align-top -mt-0.5">You receive 1 doubloon per monster, 100 doubloons for success - max. capacity: 999 doubloons.',
huntTitle: "Treasure Hunt:",
huntDesc: [
"Open the event UI.",
'For <strong>90 doubloons</strong> you reveal the search field - the first reward is free, afterwards it costs one <img src="Events/images/goblin_key.png" alt="Goblin Key" class="inline w-6 h-6 mx-1.5 align-top -mt-0">Goblin Key per additional search.',
"The round determines which rewards you can receive. From the 3rd round, 5th round, and 10th round, the reward field expands.",
"As soon as you collect <strong>9 rewards</strong> in a series without resetting the round, you advance to the next round.",
],
roundRewardsTitle: "Round Rewards:",
roundRewards: [
"After each completed round, you will receive a random reward.",
"From round 10 onwards, you will receive the 10th round reward for each additional round.",
],
roundRewardsTable: {
rounds: [
{
number: 1,
rewards: [
{
name: "Green Potion (40x)",
icon: "rundenbelohnungen/Grüner_Trank.png",
},
{
name: "Cor Daemonis (Raw) (3x)",
icon: "rundenbelohnungen/Cor_Daemonis_(Roh).png",
},
],
},
{
number: 2,
rewards: [
{
name: "Critical Hit (10x)",
icon: "rundenbelohnungen/Kritischer_Kampf.png",
},
{
name: "Piercing Strike (10x)",
icon: "rundenbelohnungen/Durchbohrender_Kampf.png",
},
],
},
{
number: 3,
rewards: [
{
name: "Cor Daemonis (Raw) (15x)",
icon: "rundenbelohnungen/Cor_Daemonis_(Roh).png",
},
{
name: "Experience Ring (1T 12h)",
icon: "rundenbelohnungen/Erfahrungsring.png",
},
],
},
{
number: 4,
rewards: [
{
name: "Goblin Key Box",
icon: "Goblin-Schlüsselbox.png",
},
{
name: "Dragon's Blessing (5x)",
icon: "rundenbelohnungen/Segen_des_Drachen.png",
},
],
},
{
number: 5,
rewards: [
{
name: "An Antique Dragon Stone (matte)",
icon: "rundenbelohnungen/Roher_Drachenrubin_(matt).png",
},
{
name: "Cor Daemonis (Raw) (20x)",
icon: "rundenbelohnungen/Cor_Daemonis_(Roh).png",
},
],
},
{
number: 6,
rewards: [
{
name: "Enhancement Blessing",
icon: "rundenbelohnungen/Veredlungssegen.png",
tooltip: "+10% success rate for the next enhancement attempt<br>(For the first 100 players)",
},
{
name: "Fire Rune of the Aura 100 (10x)",
icon: "rundenbelohnungen/Feuerrune_der_Aura.png",
},
],
},
{
number: 7,
rewards: [
{
name: "Riding (Random)",
icon: "rundenbelohnungen/Reiten_zufall.png",
},
{
name: "Monster Hunter Book",
icon: "rundenbelohnungen/monster_Buch.png",
},
],
},
{
number: 8,
rewards: [
{
name: "An Antique Dragon Stone (matte)",
icon: "rundenbelohnungen/Roher_Drachenrubin_(matt).png",
},
{
name: "Flame of the Dragon B (2x)",
icon: "rundenbelohnungen/Flamme_des_Drachen.png",
},
],
},
{
number: 9,
rewards: [
{
name: "Enhancement Blessing",
icon: "rundenbelohnungen/Veredlungssegen.png",
tooltip: "No materials are needed for the next enhancement attempt<br>(For the first 50 players)",
},
{
name: "Fire Phoenix (Loot) (30T)",
icon: "rundenbelohnungen/Feuerphönix.png",
},
],
},
],
round10: {
title: "Round 10 (Repeatable)",
rewards: [
{
name: "Iron Dragon Elixir (L)",
icon: "rundenbelohnungen/Eisendrachenelixir_(L).png",
},
{
name: "Dragon's Blessing (10x)",
icon: "rundenbelohnungen/Segen_des_Drachen.png",
},
{
name: "Pass Card B (20x)",
icon: "rundenbelohnungen/Passierschein_B.png",
},
{
name: "Cor Draconis (mystical)",
icon: "rundenbelohnungen/Cor_Draconis_(mystisch).png",
},
{
name: "White Dragon Elixir (L)",
icon: "rundenbelohnungen/Weißdrachenelixir_(L).png",
},
],
},
},
tipsTitle: "Tips & Tricks:",
tips: [
"Have some treasure chests and matching keys ready before the event.",
'Use the <span class="treasure-ticket-highlight">Buffs for the Goblin<div class="tooltip">• HP +20%<br>• Defense +50<br>• Movement Speed +100<br>• Immunity to Poison<br><br>Each buff costs a small amount of <img src="https://m2-helper.com/resources/yang.png" alt="Yang" class="inline w-5 h-5 mx-1">Yang</div></span> to make him more resistant and faster.',
'Use the first free reward and the reset to get Goblin Keys for free.<br>',
'Use the <span class="treasure-ticket-highlight"><img src="https://m2-helper.com/resources/events/Goblin-Schlüsselbox.png" alt="Goblin Key Box" class="inline w-6 h-6 mx-1.5 align-top -mt-0">Goblin Key Boxes<div class="tooltip">Contains 8x<img src="Events/images/goblin_key.png" alt="Goblin Key" class="inline w-5 h-5 mx-1">Goblin Keys</div></span> from the item shop to quickly advance in the round rewards.',
],
note: "<strong>Note:</strong> On many servers, the enhancement blessings run out very quickly!",
},
underworld: {
title: "Journey to the Underworld",
summary:
"Fight against powerful enemies and collect rare materials.<br><strong>From level 90</strong>",
descTitle: "Description",
desc: "The Journey to the Underworld is divided into <strong>two phases</strong>. In the first phase, you obtain<img src=\"Events/images/Totenflamme.png\" alt=\"Death Flame\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\"><strong>Death Flames</strong> through monster kills, which are directly added to the event interface. These Death Flames can be exchanged for items that you need in the second phase of the event.",
mechanicsTitle: "<span style='font-size: 1.25em; font-weight: bold;'>1. Phase - Exchange Death Flames:</span>",
mechanicsDesc: [
"The Death Flames collected in Phase 1 can be exchanged for five different items. Each item requires a certain number of Death Flames and offers different functions for Phase 2 of the event.<br>The <strong>exchange</strong> of Death Flames for the desired item <strong>works 80% of the time</strong>."
],
blackLetterTitle: "Black Letter:",
blackLetterDesc: "The Black Letters allow you access to the Underworld.<br>With <strong>3x Black Letter</strong> you can enter the Underworld. Additionally, you can enter the four trials in the Underworld with <strong>10x Black Letter</strong>.",
blackLetterTableHeader: ["1.", "2.", "3.", "4.", "5.", "6."],
blackLetterTableValues: ["1x", "3x", "5x", "10x", "15x", "20x"],
tableHeaderDeaths: "Number of Deaths",
tableHeaderWater: "Required Water",
waterOfLifeTitle: "Water of Life:",
waterOfLifeDesc: "With the Water of Life, you can <strong>revive</strong> yourself after death in the Underworld. The more often you die, the more water you need for revival.",
deathSoulTitle: "Death Soul:",
deathSoulDesc: "Required to <strong>reduce Asmodeus' HP</strong>. Asmodeus' HP can be reduced 4 times. The HP reduction lasts for one run. You can use the Death Souls at the Guardian Hae-Tae.",
deathSoulTableHeader: ["20", "40", "60", "80"],
deathSoulTableValues: ["-20%", "-40%", "-60%", "-90%"],
tableHeaderSouls: "Number of Death Souls",
tableHeaderReduction: "HP Reduction",
asmodeusKeyTitle: "Asmodeus Key:",
asmodeusKeyDesc: "You can use an Asmodeus Key to <strong>fight directly against Asmodeus</strong> without having to complete the four trials first.<br><br>",
phaseTitle: "<span style='font-size: 1.25em; font-weight: bold;'>2. Phase - Trials and Asmodeus Fight:</span>",
phaseDesc: "In the second phase of the event, you enter the <strong>Underworld</strong> and fight against powerful enemies.<br>You can find the portal to the Underworld at the <strong>Harbor</strong> of <strong>Cape Dragon Fire</strong>.<br><br>In the Underworld, you now have the opportunity to complete the <strong>four trials</strong> of Earth, Night, Thunder, and Air. From these trials, you obtain the Damnation Costume Set. With this costume set, you get <strong>+100% Dark Force</strong> and <strong>+400% Strong against Undead</strong>.<br><br>After completing the four trials, you can reach Asmodeus <u>without</u> an Asmodeus Key and fight against him. Once Asmodeus is defeated, another one spawns. The first four Asmodeus drop a<img src=\"https://m2-helper.com/resources/events/anderwelt/Verdammnis-Truhe.png\" alt=\"Chest\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\"><strong>Damnation Chest</strong>, all subsequent ones drop a<img src=\"https://m2-helper.com/resources/events/anderwelt/Verdammnis-Truhe+.png\" alt=\"Chest\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\"><strong>Damnation Chest+</strong>.<br><br>After defeating Asmodeus, you can enter the <strong>Salvation</strong>. In the Salvation, there is always a Salvation Metin, which drops items for the<span class=\"treasure-ticket-highlight\"><img src=\"https://m2-helper.com/resources/events/anderwelt/Phönix_der_Erlösung.png\" alt=\"Phoenix\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\"><strong>Phoenix of Salvation</strong><div class=\"tooltip\">7 Days Lootpet</div></span> and<img src=\"https://m2-helper.com/resources/events/anderwelt/Verdammnis-Schlüssel.png\" alt=\"Key\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\"><strong>Damnation Key</strong> as well as<img src=\"https://m2-helper.com/resources/events/anderwelt/Verdammnis-Schlüssel+.png\" alt=\"Key+\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\"><strong>Damnation Key+</strong>.",
imageSrc: "https://m2-helper.com/resources/events/anderwelt/event-interface-en.png",
imageAlt: "Underworld Interface",
imageCaption: "Underworld Event Interface",
rewardsTitle: "Rewards:",
rewardsTable: [
{
category: "Damnation Chest",
icon: "https://m2-helper.com/resources/events/anderwelt/Verdammnis-Truhe.png",
contents: [
{ name: "Damned Soul", icon: "https://m2-helper.com/resources/events/anderwelt/Verdammte_Seele.png", probability: "19.23%" },
{ name: "Damned Soul (2x)", icon: "https://m2-helper.com/resources/events/anderwelt/Verdammte_Seele.png", probability: "12.82%" },
{ name: "Damned Soul (5x)", icon: "https://m2-helper.com/resources/events/anderwelt/Verdammte_Seele.png", probability: "4.27%" },
{ name: "Book of the Undead", icon: "https://m2-helper.com/resources/events/anderwelt/Buch_des_Unlebens.png", probability: "19.23%" },
{ name: "Book of the Undead (2x)", icon: "https://m2-helper.com/resources/events/anderwelt/Buch_des_Unlebens.png", probability: "12.82%" },
{ name: "Book of the Undead (5x)", icon: "https://m2-helper.com/resources/events/anderwelt/Buch_des_Unlebens.png", probability: "4.27%" },
{ name: "Asmodeus Scale", icon: "https://m2-helper.com/resources/events/anderwelt/Asmodeus-Schuppe.png", probability: "8.55%" },
{ name: "Asmodeus Scale (2x)", icon: "https://m2-helper.com/resources/events/anderwelt/Asmodeus-Schuppe.png", probability: "4.27%" },
{ name: "Asmodeus Scale (3x)", icon: "https://m2-helper.com/resources/events/anderwelt/Asmodeus-Schuppe.png", probability: "0.85%" },
{ name: "Asmodeus Shoulder Guard", icon: "https://m2-helper.com/resources/events/anderwelt/Asmodeus-Schulterschutz.png", probability: "8.55%" },
{ name: "Asmodeus Shoulder Guard (2x)", icon: "https://m2-helper.com/resources/events/anderwelt/Asmodeus-Schulterschutz.png", probability: "4.27%" },
{ name: "Asmodeus Shoulder Guard (3x)", icon: "https://m2-helper.com/resources/events/anderwelt/Asmodeus-Schulterschutz.png", probability: "0.85%" }
]
},
{
category: "Damnation Chest+",
icon: "https://m2-helper.com/resources/events/anderwelt/Verdammnis-Truhe+.png",
contents: [
{ name: "Asmodeus Scale (5x)", icon: "https://m2-helper.com/resources/events/anderwelt/Asmodeus-Schuppe.png", probability: "18.00%" },
{ name: "Asmodeus Scale (10x)", icon: "https://m2-helper.com/resources/events/anderwelt/Asmodeus-Schuppe.png", probability: "13.50%" },
{ name: "Asmodeus Shoulder Guard (3x)", icon: "https://m2-helper.com/resources/events/anderwelt/Asmodeus-Schulterschutz.png", probability: "18.00%" },
{ name: "Asmodeus Shoulder Guard (6x)", icon: "https://m2-helper.com/resources/events/anderwelt/Asmodeus-Schulterschutz.png", probability: "13.50%" },
{ name: "Book of the Undead (10x)", icon: "https://m2-helper.com/resources/events/anderwelt/Buch_des_Unlebens.png", probability: "9.00%" },
{ name: "Book of the Undead (20x)", icon: "https://m2-helper.com/resources/events/anderwelt/Buch_des_Unlebens.png", probability: "4.50%" },
{ name: "Damned Soul (10x)", icon: "https://m2-helper.com/resources/events/anderwelt/Verdammte_Seele.png", probability: "9.00%" },
{ name: "Damned Soul (20x)", icon: "https://m2-helper.com/resources/events/anderwelt/Verdammte_Seele.png", probability: "4.50%" },
{ name: "Asmodeus Horn", icon: "https://m2-helper.com/resources/events/anderwelt/Asmodeus-Horn.png", probability: "9.00%" },
{ name: "Asmodeus Horn (3x)", icon: "https://m2-helper.com/resources/events/anderwelt/Asmodeus-Horn.png", probability: "0.90%" },
{ name: "Asmodeus Mane", icon: "https://m2-helper.com/resources/events/anderwelt/Asmodeus-Mähne.png", probability: "0.09%" }
]
}
],
tipsTitle: "Tips & Tricks:",
tips: [
"You can stack the effect of the<img src=\"https://m2-helper.com/resources/events/anderwelt/Anderwelt-Talisman.png\" alt=\"Talisman\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\">Underworld Talisman.",
"Asmodeus has strong ranged attacks, it is recommended to have ranged defense or a lot of HP in your equipment.",
"After collecting some Black Letters, you should focus on Asmodeus Keys to defeat Asmodeus often and travel directly to Salvation.",
"It makes sense to carry a multiple of 80 Death Souls to efficiently reduce Asmodeus’s HP"
],
note: "<strong>Note:</strong> If you craft a<img src=\"https://m2-helper.com/resources/events/anderwelt/Verdammnis-Schild.png\" alt=\"Shield\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\">Damnation Shield during the event, you will receive another one through the<img src=\"https://m2-helper.com/resources/mission.png\" alt=\"mission\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\">Missions!",
},
tombola: {
title: "Tombola",
summary:
"Test your luck in the grand tombola and win valuable prizes.<br><strong>From level 1</strong>",
descTitle: "Description",
desc: "The Tombola in Metin2 takes place twice a year and is an event exclusively available in the item shop. Every day you can buy up to <strong>10 tickets</strong>.<br>Each ticket costs <img src=\"https://m2-helper.com/resources/events/tombola/Drachenmarke.png\" alt=\"Dragon Mark\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\"> Dragon Marks - the number of Dragon Marks increases per ticket. You can already buy 6 tickets the day before for the following day at a cheaper price.<br>The Tombola usually runs for an entire month. You need a total of <strong>14,095 Dragon Marks</strong> for <strong>30 days</strong> of Tombola, provided you buy the reduced tickets for the following day every day.",
tombolaPricesTitle: "Prizes:",
tombolaPrices: "Each ticket contains a random reward. Prizes range from common potions and upgrade items to Cor Draconis and Moonstone.<br> Every day there is a <strong>daily prize</strong> that can be found under one of the tickets with a probability of <strong>0.1%</strong>. The daily prizes can be costumes, pets, mounts, DR vouchers or other valuable items.<br>Furthermore, <strong>lucky symbols</strong> can be hidden under each ticket. The probability of obtaining a lucky symbol is <strong>19.95%</strong> per ticket. Lucky symbols are divided into 6 different levels, each giving a certain number of points.",
tombolaSymbolsTitle: "Lucky Symbols:",
tombolaSymbols: "Once you have collected <strong>3 lucky symbols</strong>, you get an additional prize. You can reroll this prize with 6<img src=\"https://m2-helper.com/resources/events/tombola/Drachenmünze.png\" alt=\"Dragon Mark\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\">Dragon Coins.<br> Each lucky symbol gives a fixed number of points. Depending on how many points you have achieved with the three lucky symbols, you get a certain prize.",
tombolaSummer2025SectionTitle: "Summer Tombola 2025",
tombolaWinter2025SectionTitle: "Winter Tombola 2025",
tombolaSummer2025SymbolsTable: [
{ name: "15 Points", points: 15, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_15_Punkte.jpg", probability: "7.3%" },
{ name: "10 Points", points: 10, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_10_Punkte.jpg", probability: "14.5%" },
{ name: "7 Points", points: 7, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_7_Punkte.jpg", probability: "37.1%" },
{ name: "5 Points", points: 5, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_5_Punkte.jpg", probability: "21.6%" },
{ name: "3 Points", points: 3, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_3_Punkte.jpg", probability: "13.5%" },
{ name: "1 Point", points: 1, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_1_Punkt.jpg", probability: "6%" }
],
tombolaSummer2025PrizeDistributionTitle: "Prize Distribution:",
tombolaSortByPoints: "Sort by Points",
tombolaSortByProbability: "Sort by Probability",
tombolaTooltipProbability: "Probability",
tombolaTooltipPoints: "Points",
tombolaSelectionDescription: "Click on the icons below the chart to select prizes. Probability and DC costs will be calculated accordingly.",
tombolaTalismanChanceLabel: "Win Chance per Attempt:",
tombolaRealCostLabel: "DC for Success Chance:",
tombolaChanceNote: "With the specified DC, you have an X% chance to receive at least one of the selected prizes.",
tombolaSummer2025PrizeTable: [
{ pointRange: "43-45", prize: "Flame of the Dragon", icon: "https://m2-helper.com/resources/events/tombola/Flamme_des_Drachen.png" },
{ pointRange: "40-42", prize: "Wind Talisman", icon: "https://m2-helper.com/resources/events/tombola/Windtalisman.png" },
{ pointRange: "37-39", prize: "Fire Talisman", icon: "https://m2-helper.com/resources/events/tombola/Feuertalisman.png" },
{ pointRange: "35-36", prize: "Dark Talisman", icon: "https://m2-helper.com/resources/events/tombola/Dunkler_Talisman.png" },
{ pointRange: "32-34", prize: "Moonstone", icon: "https://m2-helper.com/resources/events/tombola/Mondstein.png" },
{ pointRange: "30-31", prize: "Earth Talisman", icon: "https://m2-helper.com/resources/events/tombola/Erdtalisman.png" },
{ pointRange: "28-29", prize: "Redux Chest", icon: "https://m2-helper.com/resources/events/tombola/Truhe_der_Erweckung.png" },
{ pointRange: "26-27", prize: "Soul Stone", icon: "https://m2-helper.com/resources/events/tombola/Seelenstein.png" },
{ pointRange: "24-25", prize: "Shimmering Seashell", icon: "https://m2-helper.com/resources/events/tombola/Schimmernde_Muschel.png" },
{ pointRange: "22-23", prize: "Platinum Treasure Chest", icon: "https://m2-helper.com/resources/events/tombola/Platin-Schatzkiste.png" },
{ pointRange: "20-21", prize: "Clam (10x)", icon: "https://m2-helper.com/resources/events/tombola/Muschel.png" },
{ pointRange: "18-19", prize: "Platinum Treasure Key", icon: "https://m2-helper.com/resources/events/tombola/Platin-Schatzschlüssel.png" },
{ pointRange: "16-17", prize: "Instant Mercenary Heal (10x)", icon: "https://m2-helper.com/resources/events/tombola/Sofortige_Söldnerheilung.png" },
{ pointRange: "14-15", prize: "Skill Book Selection Box", icon: "https://m2-helper.com/resources/events/tombola/fertigkeitsbuch.png" },
{ pointRange: "12-13", prize: "3* Accessory Catalyst", icon: "https://m2-helper.com/resources/events/tombola/Schmiederune.png" },
{ pointRange: "10-11", prize: "Title: Sun Worshipper", icon: "https://m2-helper.com/resources/events/tombola/titel.webp" },
{ pointRange: "8-9", prize: "Ice Talisman", icon: "https://m2-helper.com/resources/events/tombola/Eistalisman.png" },
{ pointRange: "6-7", prize: "Lightning Talisman", icon: "https://m2-helper.com/resources/events/tombola/Blitztalisman.png" },
{ pointRange: "4-5", prize: "Lord Sash (noble)", icon: "https://m2-helper.com/resources/events/tombola/Herrscherband_(edel).png" },
{ pointRange: "3", prize: "Ritual Stone", icon: "https://m2-helper.com/resources/events/tombola/Ritualstein.png" }
],
tombolaWinter2025SymbolsTable: [
{ name: "15 Points", points: 15, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_15_Punkte.jpg", probability: "7.3%" },
{ name: "10 Points", points: 10, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_10_Punkte.jpg", probability: "14.5%" },
{ name: "7 Points", points: 7, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_7_Punkte.jpg", probability: "37.1%" },
{ name: "5 Points", points: 5, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_5_Punkte.jpg", probability: "21.6%" },
{ name: "3 Points", points: 3, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_3_Punkte.jpg", probability: "13.5%" },
{ name: "1 Point", points: 1, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_1_Punkt.jpg", probability: "6%" }
],
tombolaWinter2025PrizeDistributionTitle: "Prize Distribution:",
tombolaWinter2025PrizeTable: [
{ pointRange: "43-45", prize: "Flame of the Dragon", icon: "https://m2-helper.com/resources/events/tombola/Flamme_des_Drachen.png" },
{ pointRange: "40-42", prize: "Dark Talisman", icon: "https://m2-helper.com/resources/events/tombola/Dunkler_Talisman.png" },
{ pointRange: "37-39", prize: "Lightning Talisman", icon: "https://m2-helper.com/resources/events/tombola/Blitztalisman.png" },
{ pointRange: "35-36", prize: "Fire Talisman", icon: "https://m2-helper.com/resources/events/tombola/Feuertalisman.png" },
{ pointRange: "32-34", prize: "Moonstone", icon: "https://m2-helper.com/resources/events/tombola/Mondstein.png" },
{ pointRange: "30-31", prize: "Earth Talisman", icon: "https://m2-helper.com/resources/events/tombola/Erdtalisman.png" },
{ pointRange: "28-29", prize: "Redux Chest", icon: "https://m2-helper.com/resources/events/tombola/Truhe_der_Erweckung.png" },
{ pointRange: "26-27", prize: "Soul Stone", icon: "https://m2-helper.com/resources/events/tombola/Seelenstein.png" },
{ pointRange: "24-25", prize: "Shimmering Seashell", icon: "https://m2-helper.com/resources/events/tombola/Schimmernde_Muschel.png" },
{ pointRange: "22-23", prize: "Platinum Treasure Chest", icon: "https://m2-helper.com/resources/events/tombola/Platin-Schatzkiste.png" },
{ pointRange: "20-21", prize: "Clam (10x)", icon: "https://m2-helper.com/resources/events/tombola/Muschel.png" },
{ pointRange: "18-19", prize: "Platinum Treasure Key", icon: "https://m2-helper.com/resources/events/tombola/Platin-Schatzschlüssel.png" },
{ pointRange: "16-17", prize: "Instant Mercenary Heal (10x)", icon: "https://m2-helper.com/resources/events/tombola/Sofortige_Söldnerheilung.png" },
{ pointRange: "14-15", prize: "Skill Book Selection Box", icon: "https://m2-helper.com/resources/events/tombola/fertigkeitsbuch.png" },
{ pointRange: "12-13", prize: "Gaya Sports Bag (500)", icon: "https://m2-helper.com/resources/events/tombola/Gaya-Beutel.png" },
{ pointRange: "10-11", prize: "Title: Pole Star", icon: "https://m2-helper.com/resources/events/tombola/titel.webp" },
{ pointRange: "8-9", prize: "Wind Talisman", icon: "https://m2-helper.com/resources/events/tombola/Windtalisman.png" },
{ pointRange: "6-7", prize: "Ice Talisman", icon: "https://m2-helper.com/resources/events/tombola/Eistalisman.png" },
{ pointRange: "4-5", prize: "Lord Sash (noble)", icon: "https://m2-helper.com/resources/events/tombola/Herrscherband_(edel).png" },
{ pointRange: "3", prize: "Ritual Stone", icon: "https://m2-helper.com/resources/events/tombola/Ritualstein.png" }
],
tombolaEaster2026SectionTitle: "Treasure-Server Easter 2026",
tombolaEaster2026SymbolsTable: [
{ name: "15 Points", points: 15, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_15_Punkte.jpg", probability: "7.3%" },
{ name: "10 Points", points: 10, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_10_Punkte.jpg", probability: "14.5%" },
{ name: "7 Points", points: 7, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_7_Punkte.jpg", probability: "37.1%" },
{ name: "5 Points", points: 5, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_5_Punkte.jpg", probability: "21.6%" },
{ name: "3 Points", points: 3, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_3_Punkte.jpg", probability: "13.5%" },
{ name: "1 Point", points: 1, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_1_Punkt.jpg", probability: "6%" }
],
tombolaEaster2026PrizeDistributionTitle: "Prize Distribution:",
tombolaEaster2026PrizeTable: [
{ pointRange: "43-45", prize: "Flame of the Dragon", icon: "https://m2-helper.com/resources/events/tombola/Flamme_des_Drachen.png" },
{ pointRange: "40-42", prize: "Wind Talisman+0", icon: "https://m2-helper.com/resources/events/tombola/Windtalisman.png" },
{ pointRange: "37-39", prize: "Fire Talisman+0", icon: "https://m2-helper.com/resources/events/tombola/Feuertalisman.png" },
{ pointRange: "35-36", prize: "Dark Talisman+0", icon: "https://m2-helper.com/resources/events/tombola/Dunkler_Talisman.png" },
{ pointRange: "32-34", prize: "Moonstone", icon: "https://m2-helper.com/resources/events/tombola/Mondstein.png" },
{ pointRange: "30-31", prize: "Earth Talisman+0", icon: "https://m2-helper.com/resources/events/tombola/Erdtalisman.png" },
{ pointRange: "28-29", prize: "Redux Chest", icon: "https://m2-helper.com/resources/events/tombola/Truhe_der_Erweckung.png" },
{ pointRange: "26-27", prize: "Soul Stone", icon: "https://m2-helper.com/resources/events/tombola/Seelenstein.png" },
{ pointRange: "24-25", prize: "Shimmering Seashell", icon: "https://m2-helper.com/resources/events/tombola/Schimmernde_Muschel.png" },
{ pointRange: "22-23", prize: "Platinum Treasure Chest", icon: "https://m2-helper.com/resources/events/tombola/Platin-Schatzkiste.png" },
{ pointRange: "20-21", prize: "Clam (10x)", icon: "https://m2-helper.com/resources/events/tombola/Muschel.png" },
{ pointRange: "18-19", prize: "Platinum Treasure Key", icon: "https://m2-helper.com/resources/events/tombola/Platin-Schatzschlüssel.png" },
{ pointRange: "16-17", prize: "Instant Mercenary Heal (10x)", icon: "https://m2-helper.com/resources/events/tombola/Sofortige_Söldnerheilung.png" },
{ pointRange: "14-15", prize: "Skill Book Selection Box", icon: "https://m2-helper.com/resources/events/tombola/fertigkeitsbuch.png" },
{ pointRange: "12-13", prize: "Gaya Sports Bag (100) (720h)", icon: "https://m2-helper.com/resources/events/tombola/Gaya-Beutel.png" },
{ pointRange: "10-11", prize: "Item Enchant+", icon: "https://m2-helper.com/resources/events/tombola/Gegenstand_verzaubern+.png" },
{ pointRange: "8-9", prize: "Ice Talisman+0", icon: "https://m2-helper.com/resources/events/tombola/Eistalisman.png" },
{ pointRange: "6-7", prize: "Lightning Talisman+0", icon: "https://m2-helper.com/resources/events/tombola/Blitztalisman.png" },
{ pointRange: "4-5", prize: "Lord Sash (noble)", icon: "https://m2-helper.com/resources/events/tombola/Herrscherband_(edel).png" },
{ pointRange: "1-3", prize: "Ritual Stone", icon: "https://m2-helper.com/resources/events/tombola/Ritualstein.png" }
],
tipsTitle: "Tips & Tricks:",
tips: [
"If you've completed the Orc Tooth Biologist quest at Level 30, then every day you receive one free entry ticket.",
"If you buy a ticket seven days in a row, you will receive a free ticket starting on the eighth day. This only applies if you have not already completed the Level 30 Biologist quest.",
"Try to buy the tickets for the following day every day to optimize costs.",
],
note: "<strong>Note:</strong> Through the Tombola most elemental talismans enter the market.",
},
okey: {
title: "Okey Card Game",
summary:
"Collect Okey cards from monsters, play the minigame and earn chest rewards.<br><strong>From level 70</strong>",
descTitle: "Description",
desc: 'During the event, Okey collection cards<img src="Events/images/Okey-Kartenset.png" alt="Okey Collection Card" class="inline w-6 h-6 mx-1.5 align-top -mt-0">drop automatically in the event interface. With the 24th Okey card, an<img src="Events/images/Okey-Kartenset.png" alt="Okey Card Set" class="inline w-6 h-6 mx-1.5 align-top -mt-0">Okey card set is automatically created, which entitles you to participate in the minigame. You can own a maximum of 999 Okey card sets.',
gameplayTitle: "Gameplay:",
gameplayDesc: [
"Open the event UI and start the game.",
"At the start, <strong>5 random cards</strong> appear.",
"To score points, select 3 cards. These must form either a <strong>set combination</strong> (e.g. 7-7-7) or a <strong>row</strong> (e.g. 6-7-8). Rows can be selected in the same color or in different colors.",
"You can discard any cards and draw new ones.",
],
rewardsDesc: [],
rewardsTable: {
versions: [
{
name: "Summer Version",
chests: [
{
name: "Bronze Okey Chest",
icon: "Events/okey/Bronzene_Okey-Truhe.png",
points: "< 300 Points",
content: '<table class="w-full"><tr><td><img src="https://m2-helper.com/resources/exp.png" alt="exp" class="inline w-5 h-5 mx-1">EXP (100,000)</td><td class="text-right">10%</td></tr><tr><td><img src="https://m2-helper.com/resources/yang.png" alt="Yang" class="inline w-5 h-5 mx-1">Yang (50,000)</td><td class="text-right">69%</td></tr><tr><td><img src="https://m2-helper.com/resources/yang.png" alt="Yang" class="inline w-5 h-5 mx-1">Yang (100,000)</td><td class="text-right">19%</td></tr><tr><td><img src="Events/images/Okey-Kartenset.png" alt="Okey-Kartenset" class="inline w-5 h-5 mx-1">Okey Card Set</td><td class="text-right">2%</td></tr></table>',
},
{
name: "Silver Okey Chest",
icon: "Events/okey/Silberne_Okey-Truhe.png",
points: "300-399 Points",
content: '<table class="w-full"><tr><td><img src="https://m2-helper.com/resources/exp.png" alt="exp" class="inline w-5 h-5 mx-1">EXP (500,000)</td><td class="text-right">5%</td></tr><tr><td><img src="https://m2-helper.com/resources/yang.png" alt="Yang" class="inline w-5 h-5 mx-1">Yang (500,000)</td><td class="text-right">15%</td></tr><tr><td><img src="https://m2-helper.com/resources/yang.png" alt="Yang" class="inline w-5 h-5 mx-1">Yang (700,000)</td><td class="text-right">15%</td></tr><tr><td><img src="Events/images/Okey-Kartenset.png" alt="Okey-Kartenset" class="inline w-5 h-5 mx-1">Okey Card Set</td><td class="text-right">1%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Blaue_Perle.png" alt="Blaue Perle" class="inline w-5 h-5 mx-1">Blue Pearl</td><td class="text-right">2%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Blutrote_Perle.png" alt="Blood-Red Pearl" class="inline w-5 h-5 mx-1">Blood-Red Pearl</td><td class="text-right">2%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Muschel.png" alt="Muschel" class="inline w-5 h-5 mx-1">Clam</td><td class="text-right">10%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Traktat_zur_Fechtkunst.png" alt="Fencing" class="inline w-5 h-5 mx-1">Fencing Pamphlet</td><td class="text-right">5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Affenei.png" alt="Affenei" class="inline w-5 h-5 mx-1">Monkey Egg</td><td class="text-right">3%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Spinnenei_(Item).png" alt="Spinnenei" class="inline w-5 h-5 mx-1">Spider Egg</td><td class="text-right">3%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Junges_Pet-Buch.png" alt="Junges Pet-Buch" class="inline w-5 h-5 mx-1">Young Pet Book</td><td class="text-right">9%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Wildes_Pet-Buch.png" alt="Wildes Pet-Buch" class="inline w-5 h-5 mx-1">Wild Pet Book</td><td class="text-right">1%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Cor_Draconis_(edel).png" alt="Cor Draconis (edel)" class="inline w-5 h-5 mx-1">Cor Draconis (noble)</td><td class="text-right">8%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Cor_Draconis_(kostbar).png" alt="Cor Draconis (Precious)" class="inline w-5 h-5 mx-1">Cor Draconis (kostbar)</td><td class="text-right">5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Elixier_der_Sonne_(K)_B.png" alt="Elixier der Sonne (K) B" class="inline w-5 h-5 mx-1">Sun Elixir (S)</td><td class="text-right">2%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Elixier_des_Mondes_(K)_B.png" alt="Elixier des Mondes (K) B" class="inline w-5 h-5 mx-1">Moon Elixir (S)</td><td class="text-right">2%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Geschwindigkeitstrank_B.png" alt="Geschwindigkeitstrank B" class="inline w-5 h-5 mx-1">Potion of Speed</td><td class="text-right">5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Herrscherband_(einfach).png" alt="Herrscherband (einfach)" class="inline w-5 h-5 mx-1">Lord Sash (basic)</td><td class="text-right">2%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Ring_der_tödlichen_Macht.png" alt="Ring der tödlichen Macht (7T)" class="inline w-5 h-5 mx-1">Ring of Deadly Power (7D)</td><td class="text-right">1%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Ring_der_Willenskraft.png" alt="Ring der Willenskraft (7T)" class="inline w-5 h-5 mx-1">Ring of Will Power (7D)</td><td class="text-right">1%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Zen-Bohne.png" alt="Zen-Bohne" class="inline w-5 h-5 mx-1">Zen Bean</td><td class="text-right">3%</td></tr></table>',
},
{
name: "Golden Okey Chest",
icon: "Events/okey/Goldene_Okey-Truhe.png",
points: "≥ 400 Points",
content: '<table class="w-full"><tr><td><img src="https://m2-helper.com/resources/exp.png" alt="exp" class="inline w-5 h-5 mx-1">EXP (700,000)</td><td class="text-right">3%</td></tr><tr><td><img src="https://m2-helper.com/resources/yang.png" alt="Yang" class="inline w-5 h-5 mx-1">Yang (700,000)</td><td class="text-right">3%</td></tr><tr><td><img src="https://m2-helper.com/resources/yang.png" alt="Yang" class="inline w-5 h-5 mx-1">Yang (1,000,000)</td><td class="text-right">3%</td></tr><tr><td><img src="Events/images/Okey-Kartenset.png" alt="Okey Card Set" class="inline w-5 h-5 mx-1">Okey Card Set</td><td class="text-right">2%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Drachenschuppe.png" alt="Dragon Scale" class="inline w-5 h-5 mx-1">Dragon Scale</td><td class="text-right">5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Quarzsand.png" alt="Quartz Sand" class="inline w-5 h-5 mx-1">Quartz Sand</td><td class="text-right">2%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Roter_Höllenquarz.png" alt="Flame Stone" class="inline w-5 h-5 mx-1">Flame Stone</td><td class="text-right">5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Traktat_zur_Fechtkunst.png" alt="Fencing Pamphlet" class="inline w-5 h-5 mx-1">Fencing Pamphlet</td><td class="text-right">5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Weiße_Perle.png" alt="White Pearl" class="inline w-5 h-5 mx-1">White Pearl</td><td class="text-right">2%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Ei_des_Nemere.png" alt="Nemere Egg" class="inline w-5 h-5 mx-1">Nemere Egg</td><td class="text-right">2%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Ei_des_Razador.png" alt="Razador Egg" class="inline w-5 h-5 mx-1">Razador Egg</td><td class="text-right">2%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Junges_Pet-Buch.png" alt="Young Pet Book" class="inline w-5 h-5 mx-1">Young Pet Book</td><td class="text-right">10%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Wildes_Pet-Buch.png" alt="Wild Pet Book" class="inline w-5 h-5 mx-1">Wild Pet Book</td><td class="text-right">8%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Cor_Draconis_(kostbar).png" alt="Cor Draconis (precious)" class="inline w-5 h-5 mx-1">Cor Draconis (precious)</td><td class="text-right">10%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Cor_Draconis_(mystisch).png" alt="Cor Draconis (mystical)" class="inline w-5 h-5 mx-1">Cor Draconis (mystical)</td><td class="text-right">7%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Elixier_der_Sonne_(K)_B.png" alt="Sun Elixir (K) B" class="inline w-5 h-5 mx-1">Sun Elixir (K) B</td><td class="text-right">3%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Elixier_des_Mondes_(K)_B.png" alt="Moon Elixir (K) B" class="inline w-5 h-5 mx-1">Moon Elixir (K) B</td><td class="text-right">3%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Geschwindigkeitstrank_B.png" alt="Speed Potion B (30min) (3x)" class="inline w-5 h-5 mx-1">3 Speed Potion</td><td class="text-right">5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Königsband_(edel).png" alt="Royal Sash (noble)" class="inline w-5 h-5 mx-1">Royal Sash (noble)</td><td class="text-right">2%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Ring_der_tödlichen_Macht.png" alt="Ring of Deadly Power (7D)" class="inline w-5 h-5 mx-1">Ring of Deadly Power (7D)</td><td class="text-right">2%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Ring_der_Willenskraft.png" alt="Ring of Willpower (7D)" class="inline w-5 h-5 mx-1">Ring of Willpower (7D)</td><td class="text-right">2%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Schlachtenlöwe.png" alt="Battle Lion (20D)" class="inline w-5 h-5 mx-1">Battle Lion (20D)</td><td class="text-right">1%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Seelenstein.png" alt="Soul Stone" class="inline w-5 h-5 mx-1">Soul Stone</td><td class="text-right">5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Stein_der_Hast.png" alt="Stone of Haste +4" class="inline w-5 h-5 mx-1">Stone of Haste +4</td><td class="text-right">5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Zen-Bohne.png" alt="Zen Bean" class="inline w-5 h-5 mx-1">Zen Bean</td><td class="text-right">3%</td></tr></table>',
},
],
},
{
name: "Winter Version",
chests: [
{
name: "Merry Okey Chest",
icon: "Events/okey/Bronzene_Okey-Truhe.png",
points: "< 300 Points",
content: '<table class="w-full"><tr><td><img src="https://m2-helper.com/resources/exp.png" alt="exp" class="inline w-5 h-5 mx-1">EXP (100,000)</td><td class="text-right">10%</td></tr><tr><td><img src="https://m2-helper.com/resources/yang.png" alt="Yang" class="inline w-5 h-5 mx-1">Yang (50,000)</td><td class="text-right">69%</td></tr><tr><td><img src="https://m2-helper.com/resources/yang.png" alt="Yang" class="inline w-5 h-5 mx-1">Yang (100,000)</td><td class="text-right">19%</td></tr><tr><td><img src="Events/images/Okey-Kartenset.png" alt="Okey Card Set" class="inline w-5 h-5 mx-1">Okey Card Set</td><td class="text-right">2%</td></tr></table>',
},
{
name: "Merry Silver Okey Chest",
icon: "Events/okey/Silberne_Okey-Truhe.png",
points: "300-399 Points",
content: '<table class="w-full"><tr><td><img src="https://m2-helper.com/resources/exp.png" alt="exp" class="inline w-5 h-5 mx-1">EXP (100,000)</td><td class="text-right">17.9%</td></tr><tr><td><img src="https://m2-helper.com/resources/yang.png" alt="Yang" class="inline w-5 h-5 mx-1">Yang (100,000)</td><td class="text-right">17.9%</td></tr><tr><td><img src="https://m2-helper.com/resources/yang.png" alt="Yang" class="inline w-5 h-5 mx-1">Yang (300,000)</td><td class="text-right">9.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/yang.png" alt="Yang" class="inline w-5 h-5 mx-1">Yang (500,000)</td><td class="text-right">7.0%</td></tr><tr><td><img src="Events/images/Okey-Kartenset.png" alt="Okey Card Set" class="inline w-5 h-5 mx-1">Okey Card Set</td><td class="text-right">1.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Blaue_Perle.png" alt="Blue Pearl" class="inline w-5 h-5 mx-1">Blue Pearl</td><td class="text-right">2.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Blutrote_Perle.png" alt="Blood-red Pearl" class="inline w-5 h-5 mx-1">Blood-red Pearl</td><td class="text-right">2.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Affenei.png" alt="Monkey Egg" class="inline w-5 h-5 mx-1">Monkey Egg</td><td class="text-right">2.5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Spinnenei_(Item).png" alt="Spider Egg" class="inline w-5 h-5 mx-1">Spider Egg</td><td class="text-right">2.5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Ei_des_Nemere.png" alt="Nemere Egg" class="inline w-5 h-5 mx-1">Nemere Egg</td><td class="text-right">1.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Ei_des_Razador.png" alt="Razador Egg" class="inline w-5 h-5 mx-1">Razador Egg</td><td class="text-right">1.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Büchertruhe_Boost.png" alt="Book Chest Boost" class="inline w-5 h-5 mx-1">Book Chest Boost</td><td class="text-right">1.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Büchertruhe_Konter.png" alt="Book Chest Counter" class="inline w-5 h-5 mx-1">Book Chest Counter</td><td class="text-right">1.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Cor_Draconis_(normal).png" alt="Cor Draconis (normal)" class="inline w-5 h-5 mx-1">Cor Draconis (normal)</td><td class="text-right">5.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Cor_Draconis_(edel).png" alt="Cor Draconis (noble)" class="inline w-5 h-5 mx-1">Cor Draconis (noble)</td><td class="text-right">2.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Gegenstand_verstärken_B.png" alt="Item Enhancement B" class="inline w-5 h-5 mx-1">Item Enhancement</td><td class="text-right">2.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Gegenstand_verzaubern_B.png" alt="Item Enchantment B" class="inline w-5 h-5 mx-1">Item Enchantment B</td><td class="text-right">1.5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Gegenstand_verzaubern+.png" alt="Item Enchantment+" class="inline w-5 h-5 mx-1">Item Enchantment+</td><td class="text-right">0.5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Herrscherband_(einfach).png" alt="Ruler Band (simple)" class="inline w-5 h-5 mx-1">Ruler Band (simple)</td><td class="text-right">2.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Magisches_Stein.png" alt="Magic Stone" class="inline w-5 h-5 mx-1">Magic Stone</td><td class="text-right">3.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Pers._Premiumladen.png" alt="Personal Premium Shop (1D)" class="inline w-5 h-5 mx-1">Personal Premium Shop (1D)</td><td class="text-right">0.5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Schmuckstein.png" alt="Glimmerstone (60x)" class="inline w-5 h-5 mx-1">Glimmerstone (60x)</td><td class="text-right">5.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Segensschriftrolle_B.png" alt="Blessing Scroll B" class="inline w-5 h-5 mx-1">Blessing Scroll B</td><td class="text-right">3.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Teleportationsring.png" alt="Teleportation Ring" class="inline w-5 h-5 mx-1">Teleportation Ring</td><td class="text-right">3.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Trank_der_Weisheit.png" alt="Potion of Wisdom (3h)" class="inline w-5 h-5 mx-1">Potion of Wisdom (3h)</td><td class="text-right">5.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Windschuhe.png" alt="Wind Shoes (1D)" class="inline w-5 h-5 mx-1">Wind Shoes (1D)</td><td class="text-right">2.0%</td></tr></table>',
},
{
name: "Merry Okey Chest",
icon: "Events/okey/Goldene_Okey-Truhe.png",
points: "≥ 400 Points",
content: '<table class="w-full"><tr><td><img src="Events/images/Okey-Kartenset.png" alt="Okey Card Set" class="inline w-5 h-5 mx-1">Okey Card Set</td><td class="text-right">4.8%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Achat.png" alt="Agate" class="inline w-5 h-5 mx-1">Agate</td><td class="text-right">2.9%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Titandioxid.png" alt="Titanium Dioxide" class="inline w-5 h-5 mx-1">Titanium Dioxide</td><td class="text-right">2.9%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Mondstein.png" alt="Moonstone" class="inline w-5 h-5 mx-1">Moonstone</td><td class="text-right">1.5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Weiße_Perle.png" alt="White Pearl" class="inline w-5 h-5 mx-1">White Pearl</td><td class="text-right">0.5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Blaues_Drachenei.png" alt="Blue Dragon Egg (7D)" class="inline w-5 h-5 mx-1">Blue Dragon Egg</td><td class="text-right">1.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Ei_des_Nemere.png" alt="Nemere Egg (7D)" class="inline w-5 h-5 mx-1">Nemere Egg</td><td class="text-right">1.9%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Ei_des_Razador.png" alt="Razador Egg (7D)" class="inline w-5 h-5 mx-1">Razador Egg</td><td class="text-right">1.9%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Büchertruhe_Boost.png" alt="Book Chest Boost" class="inline w-5 h-5 mx-1">Book Chest Boost</td><td class="text-right">4.8%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Büchertruhe_Konter.png" alt="Book Chest Counter" class="inline w-5 h-5 mx-1">Book Chest Counter</td><td class="text-right">5.3%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Cor_Draconis_(kostbar).png" alt="Cor Draconis (precious)" class="inline w-5 h-5 mx-1">Cor Draconis (precious)</td><td class="text-right">7.8%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Cor_Draconis_(mystisch).png" alt="Cor Draconis (mystical)" class="inline w-5 h-5 mx-1">Cor Draconis (mystical)</td><td class="text-right">7.8%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Gegenstand_verstärken_B.png" alt="Item Enhancement (B)" class="inline w-5 h-5 mx-1">Item Enhancement</td><td class="text-right">4.8%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Gegenstand_verzaubern_B.png" alt="Item Enchantment B" class="inline w-5 h-5 mx-1">Item Enchantment B</td><td class="text-right">4.4%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Gegenstand_verzaubern+.png" alt="Item Enchantment+" class="inline w-5 h-5 mx-1">Item Enchantment+</td><td class="text-right">3.4%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Herrscherband_(edel).png" alt="Ruler Band (noble)" class="inline w-5 h-5 mx-1">Ruler Band (noble)</td><td class="text-right">3.9%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Magisches_Stein.png" alt="Magic Stone" class="inline w-5 h-5 mx-1">Magic Stone</td><td class="text-right">5.8%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Manni.png" alt="Manni (30D)" class="inline w-5 h-5 mx-1">Manni (30D)</td><td class="text-right">2.9%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Manu.png" alt="Manu (30D)" class="inline w-5 h-5 mx-1">Manu (30D)</td><td class="text-right">2.9%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Pers._Premiumladen.png" alt="Personal Premium Shop (1D)" class="inline w-5 h-5 mx-1">Personal Premium Shop (1D)</td><td class="text-right">3.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Schmuckstein.png" alt="Glimmerstone (200x)" class="inline w-5 h-5 mx-1">Glimmerstone (200x)</td><td class="text-right">2.4%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Seelenstein+.png" alt="Soul Stone+" class="inline w-5 h-5 mx-1">Soul Stone+</td><td class="text-right">3.4%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Segensschriftrolle_B.png" alt="Blessing Scroll B" class="inline w-5 h-5 mx-1">Blessing Scroll B</td><td class="text-right">4.8%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Teleportationsring.png" alt="Teleportation Ring" class="inline w-5 h-5 mx-1">Teleportation Ring</td><td class="text-right">4.8%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Trank_der_Weisheit.png" alt="Potion of Wisdom (3h)" class="inline w-5 h-5 mx-1">Potion of Wisdom (3h)</td><td class="text-right">6.8%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Windschuhe.png" alt="Wind Shoes (1D)" class="inline w-5 h-5 mx-1">Wind Shoes (1D)</td><td class="text-right">3.4%</td></tr></table>',
},
],
},
],
note: ""
},
tipsTitle: "Tips & Tricks:",
tips: [
"Rows in the same colors bring more points.",
'Mixed colors bring significantly fewer points, so only use as a last resort.',
'Remember which card combinations are still in the game - use the <a href="#okey-helper" class="okey-helper-link" style="text-decoration:underline;" onclick="document.getElementById(\'okey-helper\').scrollIntoView({ behavior: \'smooth\' }); return false;">Okey-Helper</a>.',
'If you submit 3x 6-7-8 in one color, you are guaranteed to receive a silver chest.'
],
gameplayImage: {
src: "Events/images/Okey-Minispielfenster.png",
alt: "Okey Game Field",
caption: "Okey Game Field"
},
okeyHelperTitle: "Okey-Helper:",
okeyHelperDesc: "Click on the cards to mark them as \"played\":",
okeyResetText: "Reset all cards",
rewardsTitle: "Rewards:",
note: "<strong>Note:</strong> Pay attention to the chest name when buying and selling to check the version!",
},
king: {
title: "Catch the King",
summary:
"Collect king cards from monsters and play the card game for valuable chest rewards.<br><strong>From level 30</strong>",
descTitle: "Description",
desc: "Catch the King is a card game event from level 30. During the event, monsters drop<img src=\"https://m2-helper.com/resources/events/koenig/Königskarte.png\" alt=\"King Card\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\"><strong>King Cards</strong>. 25 King Cards are automatically combined into a<img src=\"Events/images/Königsdeck.png\" alt=\"King Deck\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\"><strong>King Deck</strong>. With a King Deck, one round can be played at the Catch the King table.<br><br><strong>Important:</strong> Cards and decks are deleted after the event ends. Event drops end one day before the event ends. A map change or teleport cancels the current game!",
mechanicsTitle: "<span style='font-size: 1.25em; font-weight: bold;'>Game Mechanics:</span>",
mechanicsDesc: "The playing field consists of <strong>25 face-down cards</strong>. The player receives <strong>12 own cards</strong> to reveal the field cards. You always start with the <strong>weakest card</strong> \u2013 an arrow indicates which card can be selected. Cards of the same value are automatically carried over to subsequent rounds. If the surrounding cards briefly light up, there is a hidden 5 among them.<br>You must score at least <strong>10 points</strong> to be able to collect your winnings.<br><br>",
comparisonTitle: "Comparison Mechanic:",
comparisonRules: [
"<strong>Your card is higher</strong> \u2192 Score the revealed card\u2019s points, <strong>flip another card</strong>",
"<strong>Cards are equal</strong> \u2192 Score points, round ends \u2013 continue with a new card from your pile",
"<strong>Your card is lower</strong> \u2192 No points, round ends \u2013 continue with a new card from your pile",
],
specialRuleTitle: "Special Rule Card 5:",
specialRuleDesc: "If your Card 5 is located <strong>right next to another covered 5</strong>, your card is captured. Your turn ends and you get no points.",
kingCardRuleTitle: "King Card:",
kingCardRuleDesc: "The King can <strong>only</strong> catch the King. The game ends after this round.",
pointsTitle: "Point System:",
pointsTableHeaderCard: "Card",
pointsTableHeaderField: "Field",
pointsTableHeaderOwn: "Own",
pointsTableHeaderPoints: "Points",
pointsTable: [
{ icon: "Events/images/Schnapp_den_König_Karte_1.png", field: 7, own: 5, points: "+10" },
{ icon: "Events/images/Schnapp_den_König_Karte_2.png", field: 4, own: 2, points: "+20" },
{ icon: "Events/images/Schnapp_den_König_Karte_3.png", field: 5, own: 2, points: "+30" },
{ icon: "Events/images/Schnapp_den_König_Karte_4.png", field: 5, own: 1, points: "+40" },
{ icon: "Events/images/Schnapp_den_König_Karte_5.png", field: 3, own: 1, points: "+50" },
{ icon: "Events/images/Schnapp_den_König_Karte_K.png", field: 1, own: 1, points: "+100" },
],
pointsBonusRow: "Complete Row",
pointsBonusValue: "+10",
rewardTiersTitle: "Rewards after Game:",
rewardTiers: [
{ threshold: "< 400 Points", reward: "Bronze King's Loot", icon: "https://m2-helper.com/resources/events/koenig/Bronzene_Königsbeute.png" },
{ threshold: "400 – 549 Points", reward: "Silver King's Loot", icon: "https://m2-helper.com/resources/events/koenig/Silberne_Königsbeute.png" },
{ threshold: "≥ 550 Points", reward: "Golden King's Loot", icon: "https://m2-helper.com/resources/events/koenig/Goldene_Königsbeute.png" },
],
rewardsTitle: "Rewards:",
rewardsTable: [
{
category: "Bronze King's Loot",
icon: "https://m2-helper.com/resources/events/koenig/Bronzene_Königsbeute.png",
contents: [
{ name: "EXP (100,000)", icon: "https://m2-helper.com/resources/exp.png", probability: "10%" },
{ name: "Yang (50,000)", icon: "https://m2-helper.com/resources/yang.png", probability: "68%" },
{ name: "Yang (100,000)", icon: "https://m2-helper.com/resources/yang.png", probability: "19%" },
{ name: "King Deck", icon: "Events/images/Königsdeck.png", probability: "3%" }
]
},
{
category: "Silver King's Loot",
icon: "https://m2-helper.com/resources/events/koenig/Silberne_Königsbeute.png",
contents: [
{ name: "EXP (100,000)", icon: "https://m2-helper.com/resources/exp.png", probability: "13.72%" },
{ name: "Yang (100,000)", icon: "https://m2-helper.com/resources/yang.png", probability: "13.72%" },
{ name: "Yang (300,000)", icon: "https://m2-helper.com/resources/yang.png", probability: "11.22%" },
{ name: "Yang (500,000)", icon: "https://m2-helper.com/resources/yang.png", probability: "9.98%" },
{ name: "King Deck", icon: "Events/images/Königsdeck.png", probability: "2.00%" },
{ name: "Monkey Egg", icon: "https://m2-helper.com/resources/events/okey/Affenei.png", probability: "3.74%" },
{ name: "Spider Egg", icon: "https://m2-helper.com/resources/events/okey/Spinnenei_(Item).png", probability: "2.99%" },
{ name: "Razador's Egg", icon: "https://m2-helper.com/resources/events/okey/Ei_des_Razador.png", probability: "1.37%" },
{ name: "Nemere's Egg", icon: "https://m2-helper.com/resources/events/okey/Ei_des_Nemere.png", probability: "1.37%" },
{ name: "Boost Book Chest", icon: "https://m2-helper.com/resources/events/okey/Büchertruhe_Boost.png", probability: "2.99%" },
{ name: "Ward Book Chest", icon: "https://m2-helper.com/resources/events/okey/Büchertruhe_Konter.png", probability: "2.99%" },
{ name: "Cor Draconis (Normal)", icon: "https://m2-helper.com/resources/events/okey/Cor_Draconis_(normal).png", probability: "2.37%" },
{ name: "Cor Draconis (Noble)", icon: "https://m2-helper.com/resources/events/okey/Cor_Draconis_(edel).png", probability: "2.24%" },
{ name: "Lord Sash (basic)", icon: "https://m2-helper.com/resources/events/okey/Herrscherband_(einfach).png", probability: "2.24%" },
{ name: "Blue Pearl", icon: "https://m2-helper.com/resources/events/okey/Blaue_Perle.png", probability: "2.24%" },
{ name: "Blood-Red Pearl", icon: "https://m2-helper.com/resources/events/okey/Blutrote_Perle.png", probability: "2.24%" },
{ name: "Potion of Wisdom", icon: "https://m2-helper.com/resources/events/okey/Trank_der_Weisheit.png", probability: "1.62%" },
{ name: "Potion of Ascension", icon: "https://m2-helper.com/resources/events/yutnori/Trank_der_Weisheit.png", probability: "1.37%" },
{ name: "Spirit Stone Bundle (5x)", icon: "https://m2-helper.com/resources/events/yutnori/Geiststeinbündel.png", probability: "1.62%" },
{ name: "Fireworks Top (10x)", icon: "https://m2-helper.com/resources/events/yutnori/Feuerwerkskreisel.png", probability: "1.62%" },
{ name: "Chinese Fire Cracker (10x)", icon: "https://m2-helper.com/resources/events/yutnori/Chinesisches_Feuerwerk.png", probability: "1.62%" },
{ name: "Blessing Scroll", icon: "https://m2-helper.com/resources/events/okey/Segensschriftrolle_B.png", probability: "1.62%" },
{ name: "Teleportation Ring", icon: "https://m2-helper.com/resources/events/okey/Teleportationsring.png", probability: "1.62%" },
{ name: "Wind Shoes (1D)", icon: "https://m2-helper.com/resources/events/okey/Windschuhe.png", probability: "1.62%" },
{ name: "Peach Flower Wine+ (10x)", icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Pfirsichblütenwein_B.png", probability: "1.37%" },
{ name: "Protein Snack", icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Protein-Happen.png", probability: "1.25%" },
{ name: "Magic Stone", icon: "https://m2-helper.com/resources/events/okey/Magisches_Stein.png", probability: "1.25%" },
{ name: "Potion of Speed (10x)", icon: "https://m2-helper.com/resources/events/okey/Geschwindigkeitstrank_B.png", probability: "1.12%" },
{ name: "Potion of Attack +15 (5x)", icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Trank_des_Angriffs_+10_B.png", probability: "1.12%" },
{ name: "Potion of Haste (5x)", icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Trank_der_Hast_B.png", probability: "1.12%" },
{ name: "Green Dragon Bean", icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Grüne_Drachenbohne.png", probability: "1.12%" },
{ name: "Reinforce Item (b)", icon: "https://m2-helper.com/resources/events/okey/Gegenstand_verstärken_B.png", probability: "0.62%" },
{ name: "Enchant Item (B)", icon: "https://m2-helper.com/resources/events/okey/Gegenstand_verzaubern_B.png", probability: "0.62%" },
{ name: "Enchant Item+", icon: "https://m2-helper.com/resources/events/okey/Gegenstand_verzaubern+.png", probability: "0.25%" }
]
},
{
category: "Golden King's Loot",
icon: "https://m2-helper.com/resources/events/koenig/Goldene_Königsbeute.png",
contents: [
{ name: "King Deck", icon: "Events/images/Königsdeck.png", probability: "7.46%" },
{ name: "Blessing Scroll", icon: "https://m2-helper.com/resources/events/okey/Segensschriftrolle_B.png", probability: "7.46%" },
{ name: "Razador's Egg", icon: "https://m2-helper.com/resources/events/okey/Ei_des_Razador.png", probability: "3.31%" },
{ name: "Nemere's Egg", icon: "https://m2-helper.com/resources/events/okey/Ei_des_Nemere.png", probability: "3.31%" },
{ name: "Spirit Stone Bundle (10x)", icon: "https://m2-helper.com/resources/events/yutnori/Geiststeinbündel.png", probability: "7.46%" },
{ name: "Fireworks Top (20x)", icon: "https://m2-helper.com/resources/events/yutnori/Feuerwerkskreisel.png", probability: "5.80%" },
{ name: "Chinese Fire Cracker (20x)", icon: "https://m2-helper.com/resources/events/yutnori/Chinesisches_Feuerwerk.png", probability: "5.80%" },
{ name: "Potion of Wisdom", icon: "https://m2-helper.com/resources/events/okey/Trank_der_Weisheit.png", probability: "2.49%" },
{ name: "Soul Stone", icon: "https://m2-helper.com/resources/events/okey/Seelenstein.png", probability: "4.14%" },
{ name: "Moonlight Treasure Chest", icon: "https://m2-helper.com/resources/events/yutnori/Mondlicht-Schatztruhe.png", probability: "2.49%" },
{ name: "Stone of the Blacksmith", icon: "https://m2-helper.com/resources/events/yutnori/Stein_des_Schmieds.png", probability: "1.99%" },
{ name: "Magic Stone", icon: "https://m2-helper.com/resources/events/okey/Magisches_Stein.png", probability: "1.82%" },
{ name: "White Pearl", icon: "https://m2-helper.com/resources/events/okey/Weiße_Perle.png", probability: "1.66%" },
{ name: "Cor Draconis (Mystic)", icon: "https://m2-helper.com/resources/events/okey/Cor_Draconis_(mystisch).png", probability: "2.49%" },
{ name: "Cor Draconis (Precious)", icon: "https://m2-helper.com/resources/events/okey/Cor_Draconis_(kostbar).png", probability: "2.49%" },
{ name: "Dragon Chest", icon: "https://m2-helper.com/resources/guides/alchemy/Drachentruhe.png", probability: "2.98%" },
{ name: "Green Dragon Bean", icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Grüne_Drachenbohne.png", probability: "1.99%" },
{ name: "Peach Flower Wine XL (5x)", icon: "https://m2-helper.com/resources/events/yutnori/Pfirsichblütenwein_XL.png", probability: "1.82%" },
{ name: "Passage Ticket (3x)", icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Passierschein.png", probability: "1.99%" },
{ name: "Moon Elixir (K)", icon: "https://m2-helper.com/resources/events/okey/Elixier_des_Mondes_(K)_B.png", probability: "2.49%" },
{ name: "Sun Elixir (K)", icon: "https://m2-helper.com/resources/events/okey/Elixier_der_Sonne_(K)_B.png", probability: "2.49%" },
{ name: "Peach Flower Wine+ (10x)", icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Pfirsichblütenwein_B.png", probability: "2.82%" },
{ name: "Potion of Speed (5x)", icon: "https://m2-helper.com/resources/events/okey/Geschwindigkeitstrank_B.png", probability: "2.82%" },
{ name: "Potion of Attack +15 (5x)", icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Trank_des_Angriffs_+10_B.png", probability: "2.82%" },
{ name: "Potion of Haste (5x)", icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Trank_der_Hast_B.png", probability: "2.82%" },
{ name: "Battle Lion (20D)", icon: "https://m2-helper.com/resources/events/okey/Schlachtenlöwe.png", probability: "1.82%" },
{ name: "Storm Tiger (20D)", icon: "https://m2-helper.com/resources/events/yutnori/Sturmtiger.png", probability: "1.82%" },
{ name: "Hero's Medal (1D)", icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Heldenmedaille.png", probability: "1.82%" },
{ name: "Pet Book Chest", icon: "https://m2-helper.com/resources/events/yutnori/Pet-Bücherkiste.png", probability: "1.82%" },
{ name: "Titanium Dioxide", icon: "https://m2-helper.com/resources/events/okey/Titandioxid.png", probability: "1.49%" },
{ name: "Agate", icon: "https://m2-helper.com/resources/events/okey/Achat.png", probability: "1.49%" },
{ name: "Moonstone", icon: "https://m2-helper.com/resources/events/okey/Mondstein.png", probability: "1.49%" },
{ name: "Reinforce Item (b)", icon: "https://m2-helper.com/resources/events/okey/Gegenstand_verstärken_B.png", probability: "1.16%" },
{ name: "Enchant Item (B)", icon: "https://m2-helper.com/resources/events/okey/Gegenstand_verzaubern_B.png", probability: "1.16%" },
{ name: "Enchant Item+", icon: "https://m2-helper.com/resources/events/okey/Gegenstand_verzaubern+.png", probability: "0.75%" }
]
},
],
imageSrc: "https://m2-helper.com/resources/events/koenig/Schnapp_den_König_UI.png",
imageAlt: "Catch the King Playing Field",
imageCaption: "Catch the King Playing Field",
tipsTitle: "Tips & Tricks:",
tips: [
"Remember the positions of revealed 5-cards for the special rule.",
"Try to reveal complete rows for the +10 points bonus.",
"Collect already known cards with your 4 to maximize points.",
],
note: "<strong>Note:</strong> A map change or teleport cancels the current game!",
helperTitle: "Catch the King Helper",
helperDesc: "Use the cards below the board or your keyboard to make inputs. <svg class='inline-mouse-icon' viewBox='0 0 20 28' width='16' height='22'><path d='M3 10 C3 5 5 2 10 2 C15 2 17 5 17 10 L17 20 C17 24 15 26 10 26 C5 26 3 24 3 20Z' fill='none' stroke='currentColor' stroke-width='1.5'/><line x1='10' y1='2' x2='10' y2='14' stroke='currentColor' stroke-width='1.5'/><path d='M3.5 10 C3.5 5.5 5.5 2.5 10 2.5 L10 14 L3.5 14Z' fill='#FECE58' opacity='0.7'/></svg> = No nearby 5, <svg class='inline-mouse-icon' viewBox='0 0 20 28' width='16' height='22'><path d='M3 10 C3 5 5 2 10 2 C15 2 17 5 17 10 L17 20 C17 24 15 26 10 26 C5 26 3 24 3 20Z' fill='none' stroke='currentColor' stroke-width='1.5'/><line x1='10' y1='2' x2='10' y2='14' stroke='currentColor' stroke-width='1.5'/><path d='M16.5 10 C16.5 5.5 14.5 2.5 10 2.5 L10 14 L16.5 14Z' fill='#FECE58' opacity='0.7'/></svg> = Nearby 5",
resetText: "Reset",
helperCredit: "Probability calculation with the help of ArcMeurtrier",
},
seer: {
title: "Seer Contest",
summary:
"Play a card game against the computer, win seer coins and exchange them for chests.<br><strong>From level 30</strong>",
descTitle: "Description",
desc: "Prove your knowledge of Metin2! The seer asks you tricky questions about the game, its history and secrets. Answer them correctly for great rewards.",
tipsTitle: "Tips & Tricks:",
tips: [
"Know the different maps and their monsters",
"Learn the NPC names and their functions",
"Remember important numbers (level requirements, costs etc.)",
"Use the internet for difficult questions (if allowed)",
],
note: "<strong>Tip:</strong> The more questions you answer correctly, the more valuable the rewards become!",
},
yutnori: {
title: "Yutnori",
summary:
"Collect birch logs and play against the computer for various rewards.<br><strong>From level 30</strong>",
descTitle: "Description",
desc: "During the event, you collect<img src=\"https://m2-helper.com/resources/events/yutnori/Birkenstamm.png\" alt=\"Birch Log\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\">Birch Logs through monster kills, which automatically go into the event inventory. Once you have collected 28 Birch Logs, they convert into a<img src=\"Events/images/Yutnori-Spielbrett.png\" alt=\"Yutnori Game Board\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\">Yutnori Game Board. You can possess a maximum of 999 Yutnori Game Boards.<br>With a Yutnori Game Board, you can start the Yutnori mini-game and compete against the computer in a classic board game.<br>Alternatively, you can exchange a Yutnori Game Board for a<span class=\"treasure-ticket-highlight\"><img src=\"Events/images/Yutnori-Geheimnis.png\" alt=\"Yutnori Secret\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\"><strong>Yutnori Secret</strong><div class=\"tooltip\">Grants you for 30min:<br>20% EXP<br>5% Item Drop<br>10% Strong vs Monsters</div></span>. This counts as one of the <strong>best event items</strong> in the game, as it is not limited to the event period.",
gameplayTitle: "Gameplay:",
gameplayDesc: [
"Open the Event UI and start the game.",
"The first throw decides who begins - the lower throw starts. Each round you can move one of your two game pieces according to the thrown Yut sticks.<br>4 Yut sticks are always thrown. The <strong>number of flat sides</strong> determines the number of fields you may advance. You start with 250 points and lose 10 points per turn. If you capture an opponent's piece, you gain 10 points. If the computer captures your piece, you lose 10 points. When a piece reaches the goal, you gain 10 points or lose 10 points if it's a computer piece.",
"If the game is not finished within 20 turns, the player loses."
],
probabilityTitle: "Probabilities & Moves:",
probabilityDesc: "You can increase the probability of a specific throw by selecting the corresponding throw in the probability selection. When you throw Yut or Mo, you get another throw.",
probabilityTable: [
{ throw: "Do", moves: "1 forward" },
{ throw: "Ge", moves: "2 forward" },
{ throw: "Geol", moves: "3 forward" },
{ throw: "Yut", moves: "4 forward" },
{ throw: "Mo", moves: "5 forward" },
{ throw: "Back-do", moves: "1 backward" }
],
probabilityTableHeaders: {
throws: "Throw",
moves: "Moves",
rowLabel: "Moves"
},
gameplayImage: {
src: "Events/images/Yut_Nori_Game.png",
alt: "Yutnori Game Board",
caption: "Yutnori Game Board"
},
goalTitle: "Goal:",
goalDesc: "Be the first to bring both your game pieces to the goal to win the game. Depending on your score, you receive different chest rewards.",
tipsTitle: "Tips & Tricks:",
tips: [
"Use the probability selection to improve your chances for specific moves.",
"If a game piece is only one field before the start/goal, try to use a Back-do.",
"Use the corners of the board to take shortcuts.",
"It is recommended to connect two game pieces to save moves.",
],
note: "<strong>Note:</strong> Make sure you exchange enough<img src=\"Events/images/Yutnori-Geheimnis.png\" alt=\"Yutnori Secret\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\">Yutnori Secrets!",
rewardsTitle: "Rewards:",
rewardsTable: {
versions: [
{
name: "",
chests: [
{
name: "Bronze Yutnori Bundle",
icon: "https://m2-helper.com/resources/events/yutnori/Bronzenes_Yutnori-Bündel.png",
points: "< 150 Points",
contents: [
{
name: "EXP (100,000)",
icon: "https://m2-helper.com/resources/exp.png",
probability: "10%"
},
{
name: "Yang (50,000)",
icon: "https://m2-helper.com/resources/yang.png",
probability: "70%"
},
{
name: "Yang (100,000)",
icon: "https://m2-helper.com/resources/yang.png",
probability: "18%"
},
{
name: "Yut Nori Board",
icon: "Events/images/Yutnori-Spielbrett.png",
probability: "2%"
}
]
},
{
name: "Silver Yutnori Trophy",
icon: "https://m2-helper.com/resources/events/yutnori/Silberne_Yutnori-Trophäe.png",
points: "150-219 Points",
contents: [
{
name: "EXP (100,000)",
icon: "https://m2-helper.com/resources/exp.png",
probability: "14.4%"
},
{
name: "Yang (100,000)",
icon: "https://m2-helper.com/resources/yang.png",
probability: "14.4%"
},
{
name: "Yang (300,000)",
icon: "https://m2-helper.com/resources/yang.png",
probability: "7.2%"
},
{
name: "Yang (500,000)",
icon: "https://m2-helper.com/resources/yang.png",
probability: "5.0%"
},
{
name: "Yut Nori Board",
icon: "Events/images/Yutnori-Spielbrett.png",
probability: "0.7%"
},
{
name: "Blue Pearl",
icon: "https://m2-helper.com/resources/events/yutnori/Blaue_Perle.png",
probability: "1.4%"
},
{
name: "Blood-Red Pearl",
icon: "https://m2-helper.com/resources/events/yutnori/Blutrote_Perle.png",
probability: "1.4%"
},
{
name: "Monkey Egg (7d)",
icon: "https://m2-helper.com/resources/events/yutnori/Affenei.png",
probability: "1.4%"
},
{
name: "Spider Egg (7d)",
icon: "https://m2-helper.com/resources/events/yutnori/Spinnenei_(Item).png",
probability: "1.4%"
},
{
name: "Razador's Egg (7d)",
icon: "https://m2-helper.com/resources/events/yutnori/Ei_des_Razador.png",
probability: "0.7%"
},
{
name: "Nemere's Egg (7d)",
icon: "https://m2-helper.com/resources/events/yutnori/Ei_des_Nemere.png",
probability: "0.7%"
},
{
name: "Boost Book Chest",
icon: "https://m2-helper.com/resources/events/yutnori/Büchertruhe_Boost.png",
probability: "0.7%"
},
{
name: "Ward Book Chest",
icon: "https://m2-helper.com/resources/events/yutnori/Büchertruhe_Konter.png",
probability: "0.7%"
},
{
name: "Cor Draconis (normal)",
icon: "https://m2-helper.com/resources/events/yutnori/Cor_Draconis_(Roh).png",
probability: "3.6%"
},
{
name: "Cor Draconis (noble)",
icon: "https://m2-helper.com/resources/events/yutnori/Cor_Draconis_(edel).png",
probability: "1.4%"
},
{
name: "Reinforce Item (b)",
icon: "https://m2-helper.com/resources/events/yutnori/Gegenstand_verstärken_B.png",
probability: "1.4%"
},
{
name: "Enchantment Item (b)",
icon: "https://m2-helper.com/resources/events/yutnori/Gegenstand_verzaubern_B.png",
probability: "1.4%"
},
{
name: "Enchantment Item+",
icon: "https://m2-helper.com/resources/events/yutnori/Gegenstand_verzaubern+.png",
probability: "0.7%"
},
{
name: "Blessing Scroll",
icon: "https://m2-helper.com/resources/events/yutnori/Segensschriftrolle.png",
probability: "2.2%"
},
{
name: "Magic Stone",
icon: "https://m2-helper.com/resources/events/yutnori/Magischer_Stein.png",
probability: "2.2%"
},
{
name: "Teleportation Ring",
icon: "https://m2-helper.com/resources/events/yutnori/Teleportationsring.png",
probability: "2.2%"
},
{
name: "Potion of Wisdom (3h)",
icon: "https://m2-helper.com/resources/events/yutnori/Trank_der_Weisheit.png",
probability: "3.6%"
},
{
name: "Potion of Ascension (3h)",
icon: "https://m2-helper.com/resources/events/yutnori/Trank_der_Weisheit.png",
probability: "3.6%"
},
{
name: "Wind Shoes (1d)",
icon: "https://m2-helper.com/resources/events/yutnori/Windschuhe.png",
probability: "1.4%"
},
{
name: "Lord Sash (basic)",
icon: "https://m2-helper.com/resources/events/yutnori/Herrscherband_(einfach).png",
probability: "1.4%"
},
{
name: "Fireworks Top (10min) (10x)",
icon: "https://m2-helper.com/resources/events/yutnori/Feuerwerkskreisel.png",
probability: "2.2%"
},
{
name: "Chinese Fire Cracker (10min) (10x)",
icon: "https://m2-helper.com/resources/events/yutnori/Chinesisches_Feuerwerk.png",
probability: "2.2%"
},
{
name: "Sting Sword+0",
icon: "https://m2-helper.com/resources/events/yutnori/Stichschwert.png",
probability: "2.9%"
},
{
name: "Demon Blade+0",
icon: "https://m2-helper.com/resources/events/yutnori/Dämonenklinge.png",
probability: "2.9%"
},
{
name: "Siamese Knife+0",
icon: "https://m2-helper.com/resources/events/yutnori/Siamesenmesser.png",
probability: "2.9%"
},
{
name: "Blue Dragon Bow+0",
icon: "https://m2-helper.com/resources/events/yutnori/Blaudrachenbogen.png",
probability: "2.9%"
},
{
name: "Soul Stealing Blade+0",
icon: "https://m2-helper.com/resources/events/yutnori/Halbmenschklinge.png",
probability: "2.9%"
},
{
name: "Hawk Claw+0",
icon: "https://m2-helper.com/resources/events/yutnori/Habichtskralle.png",
probability: "2.9%"
},
{
name: "Ecstasy Fan+0",
icon: "https://m2-helper.com/resources/events/yutnori/Ekstasefächer.png",
probability: "2.9%"
}
]
},
{
name: "Golden Yutnori Trophy",
icon: "https://m2-helper.com/resources/events/yutnori/Goldene_Yutnori-Trophäe.png",
points: "≥ 220 Points",
contents: [
{
name: "Yut Nori Board",
icon: "Events/images/Yutnori-Spielbrett.png",
probability: "3.8%"
},
{
name: "White Pearl",
icon: "https://m2-helper.com/resources/events/yutnori/Weiße_Perle.png",
probability: "0.8%"
},
{
name: "Agate",
icon: "https://m2-helper.com/resources/events/yutnori/Achat.png",
probability: "2.3%"
},
{
name: "Titanium Dioxide",
icon: "https://m2-helper.com/resources/events/yutnori/Titandioxid.png",
probability: "2.3%"
},
{
name: "Moonstone",
icon: "https://m2-helper.com/resources/events/yutnori/Mondstein.png",
probability: "1.5%"
},
{
name: "Razador's Egg (7d)",
icon: "https://m2-helper.com/resources/events/yutnori/Ei_des_Razador.png",
probability: "1.5%"
},
{
name: "Nemere's Egg (7d)",
icon: "https://m2-helper.com/resources/events/yutnori/Ei_des_Nemere.png",
probability: "1.5%"
},
{
name: "Cor Draconis (mystical)",
icon: "https://m2-helper.com/resources/events/yutnori/Cor_Draconis_(mystisch).png",
probability: "5.4%"
},
{
name: "Cor Draconis (precious)",
icon: "https://m2-helper.com/resources/events/yutnori/Cor_Draconis_(kostbar).png",
probability: "6.2%"
},
{
name: "Reinforce Item (b)",
icon: "https://m2-helper.com/resources/events/yutnori/Gegenstand_verstärken_B.png",
probability: "3.8%"
},
{
name: "Enchantment Item (b)",
icon: "https://m2-helper.com/resources/events/yutnori/Gegenstand_verzaubern_B.png",
probability: "3.8%"
},
{
name: "Enchantment Item+",
icon: "https://m2-helper.com/resources/events/yutnori/Gegenstand_verzaubern+.png",
probability: "3.1%"
},
{
name: "Blessing Scroll",
icon: "https://m2-helper.com/resources/events/yutnori/Segensschriftrolle.png",
probability: "3.8%"
},
{
name: "Stone of the Blacksmith",
icon: "https://m2-helper.com/resources/events/yutnori/Stein_des_Schmieds.png",
probability: "2.3%"
},
{
name: "Magic Stone",
icon: "https://m2-helper.com/resources/events/yutnori/Magischer_Stein.png",
probability: "4.6%"
},
{
name: "Shiver (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/Hui.png",
probability: "1.5%"
},
{
name: "Lava Cave Lizard (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/Lavahöllenechse.png",
probability: "2.3%"
},
{
name: "Mighty Lolly",
icon: "https://m2-helper.com/resources/events/yutnori/Halloween-Lolli.png",
probability: "1.5%"
},
{
name: "Tiger Bone Earring (20h)",
icon: "https://m2-helper.com/resources/events/yutnori/Tigerknochenohrring.png",
probability: "0.8%"
},
{
name: "Dragon Bone Earring (20h)",
icon: "https://m2-helper.com/resources/events/yutnori/Drachenknochenohrring.png",
probability: "0.8%"
},
{
name: "Teleportation Ring",
icon: "https://m2-helper.com/resources/events/yutnori/Teleportationsring.png",
probability: "3.8%"
},
{
name: "Wind Shoes (1d)",
icon: "https://m2-helper.com/resources/events/yutnori/Windschuhe.png",
probability: "2.3%"
},
{
name: "Blessing of Life (10x)",
icon: "https://m2-helper.com/resources/events/yutnori/Segen_des_Lebens.png",
probability: "2.3%"
},
{
name: "Glimmerstone (200x)",
icon: "https://m2-helper.com/resources/events/yutnori/Schmuckstein.png",
probability: "2.3%"
},
{
name: "Spirit Stone Bundle (10x)",
icon: "https://m2-helper.com/resources/events/yutnori/Geiststeinbündel.png",
probability: "3.1%"
},
{
name: "Potion of Wisdom (3h)",
icon: "https://m2-helper.com/resources/events/yutnori/Trank_der_Weisheit.png",
probability: "6.2%"
},
{
name: "Fireworks Top (10min) (20x)",
icon: "https://m2-helper.com/resources/events/yutnori/Feuerwerkskreisel.png",
probability: "2.3%"
},
{
name: "Chinese Fire Cracker (10min) (20x)",
icon: "https://m2-helper.com/resources/events/yutnori/Chinesisches_Feuerwerk.png",
probability: "2.3%"
},
{
name: "Sting Sword+0",
icon: "https://m2-helper.com/resources/events/yutnori/Stichschwert.png",
probability: "3.1%"
},
{
name: "Demon Blade+0",
icon: "https://m2-helper.com/resources/events/yutnori/Dämonenklinge.png",
probability: "3.1%"
},
{
name: "Siamese Knife+0",
icon: "https://m2-helper.com/resources/events/yutnori/Siamesenmesser.png",
probability: "3.1%"
},
{
name: "Blue Dragon Bow+0",
icon: "https://m2-helper.com/resources/events/yutnori/Blaudrachenbogen.png",
probability: "3.1%"
},
{
name: "Soul Stealing Blade+0",
icon: "https://m2-helper.com/resources/events/yutnori/Halbmenschklinge.png",
probability: "3.1%"
},
{
name: "Hawk Claw+0",
icon: "https://m2-helper.com/resources/events/yutnori/Habichtskralle.png",
probability: "3.1%"
},
{
name: "Ecstasy Fan+0",
icon: "https://m2-helper.com/resources/events/yutnori/Ekstasefächer.png",
probability: "3.1%"
}
]
}
]
}
]
},
rewardsNote: "With the help of<img src=\"Events/images/Rätselsplitter.png\" alt=\"Mysterious Shard\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\"><strong>Mysterious Shard</strong> you can craft various loot chests. Among other things, you have the opportunity to get rare costumes and shoulder bands, open chests for loot pets or sought-after PvP pets, and obtain elemental talismans.",
puzzleChests: {
dropdownLabel: "Mysterious Shard Chests:",
selectedChestTitle: "Selected Chest:",
collapsibleLabel: "Show loot list",
chests: [
{
id: "halloween-m",
name: "Halloween Chest (m)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Halloweenkiste_(m).png",
puzzlePieces: 11,
lootList: [
{
name: "Pumpkin Suit (Bonus) (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Kürbis-Smoking.png",
probability: "8.3%"
},
{
name: "Jack-Pumpkin Suit+ (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Jack-Pumpkin-Anzug.png",
probability: "8.3%"
},
{
name: "Zombie Suit+ (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Zombieanzug.png",
probability: "8.3%"
},
{
name: "Wizard Suit+ (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Zaubereranzug.png",
probability: "8.3%"
},
{
name: "Cu. Fang Costume+ (m) (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Fangzahn-Kostüm_(Kupfer)_(m).png",
probability: "8.3%"
},
{
name: "S. Fang Costume+ (m) (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Fangzahn-Kostüm_(Stahl)_(m).png",
probability: "8.3%"
},
{
name: "Vamp+ (red) (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Vampir-Kostüm_(rot)_(m).png",
probability: "8.3%"
},
{
name: "Vamp+ (grey) (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Vampir-Kostüm_(grau)_(m).png",
probability: "8.3%"
},
{
name: "Armour of Horrors+(g) (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Harnisch_des_Horrors_(g)_(m).png",
probability: "8.3%"
},
{
name: "Armour of Horrors+(b) (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Harnisch_des_Horrors_(b)_(m).png",
probability: "8.3%"
},
{
name: "Brown Wolf Garment+ (m) (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Braunes_Wolfsgewand_(m).png",
probability: "8.3%"
},
{
name: "Grey Wolf Garment+ (m) (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Graues_Wolfsgewand_(m).png",
probability: "8.3%"
}
]
},
{
id: "halloween-w",
name: "Halloween Chest (w)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Halloweenkiste_(w).png",
puzzlePieces: 11,
lootList: [
{
name: "Pumpkin Dress (Bonus) (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Kürbis-Kleid.png",
probability: "8.3%"
},
{
name: "Jack-Pumpkin Dress+ (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Jack-Pumpkin-Kleid.png",
probability: "8.3%"
},
{
name: "Zombie Dress+ (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Zombiekleid.png",
probability: "8.3%"
},
{
name: "Witch Dress+ (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Hexenkleid.png",
probability: "8.3%"
},
{
name: "Cu. Fang Costume+ (w) (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Fangzahn-Kostüm_(Kupfer)_(w).png",
probability: "8.3%"
},
{
name: "S. Fang Costume+ (w) (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Fangzahn-Kostüm_(Stahl)_(w).png",
probability: "8.3%"
},
{
name: "Vamp+ (red) (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Vampir-Kostüm_(rot)_(w).png",
probability: "8.3%"
},
{
name: "Vamp+ (grey) (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Vampir-Kostüm_(grau)_(w).png",
probability: "8.3%"
},
{
name: "Armour of Horrors+(g) (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Harnisch_des_Horrors_(g)_(w).png",
probability: "8.3%"
},
{
name: "Armour of Horrors+(b) (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Harnisch_des_Horrors_(b)_(w).png",
probability: "8.3%"
},
{
name: "Brown Wolf Garment+ (w) (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Braunes_Wolfsgewand_(w).png",
probability: "8.3%"
},
{
name: "Grey Wolf Garment+ (w) (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Graues_Wolfsgewand_(w).png",
probability: "8.3%"
}
]
},
{
id: "halloweenhut-m",
name: "Halloween Hat Chest (m)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Halloweenhutkiste_(m).png",
puzzlePieces: 7,
lootList: [
{
name: "Witch Hat",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Hexenhut.png",
probability: "8.3%"
},
{
name: "Jack-Pumpkin Head (m)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Jack-Pumpkin-Kopf_(m)_icon.png",
probability: "8.3%"
},
{
name: "Pumpkin Mask",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Jack-Pumpkin-Kopf_(m)_icon.png",
probability: "8.3%"
},
{
name: "Zombie Pumpkin Mask",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Zombiekürbismaske.png",
probability: "8.3%"
},
{
name: "Vampire Warrior Helmet (red)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Vampirkriegerhelm_(rot)_icon.png",
probability: "8.3%"
},
{
name: "Vampire Warrior Helmet (grey)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Vampirkriegerhelm_(gr.)_icon.png",
probability: "8.3%"
},
{
name: "Fangtooth Helmet (Copper)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Fangzahn-Helm_(Kupfer)_icon.png",
probability: "8.3%"
},
{
name: "Fangtooth Helmet (Steel)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Fangzahn-Helm_(Stahl)_icon.png",
probability: "8.3%"
},
{
name: "Horns of Horror (g) (m)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Hörner_des_Horrors_(g)_(w)_icon.png",
probability: "8.3%"
},
{
name: "Horns of Horror (b) (m)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Hörner_des_Horrors_(b)_(w)_icon.png",
probability: "8.3%"
},
{
name: "Brown Wolf Cap (m)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Braune_Wolfskappe_(w)_icon.png",
probability: "8.3%"
},
{
name: "Grey Wolf Cap (m)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Graue_Wolfskappe_(m)_icon.png",
probability: "8.3%"
}
]
},
{
id: "halloweenhut-w",
name: "Halloween Hat Chest (w)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Halloweenhutkiste_(w).png",
puzzlePieces: 7,
lootList: [
{
name: "Witch Hat",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Hexenhut.png",
probability: "8.3%"
},
{
name: "Jack-Pumpkin Head (w)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Jack-Pumpkin-Kopf_(m)_icon.png",
probability: "8.3%"
},
{
name: "Pumpkin Mask",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Jack-Pumpkin-Kopf_(m)_icon.png",
probability: "8.3%"
},
{
name: "Zombie Pumpkin Mask",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Zombiekürbismaske.png",
probability: "8.3%"
},
{
name: "Vampire Warrior Helmet (red) (w)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Vampirkriegerhelm_(rot)_icon.png",
probability: "8.3%"
},
{
name: "Vampire Warrior Helmet (grey) (w)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Vampirkriegerhelm_(gr.)_icon.png",
probability: "8.3%"
},
{
name: "Fangtooth Helmet (Copper) (w)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Fangzahn-Helm_(Kupfer)_icon.png",
probability: "8.3%"
},
{
name: "Fangtooth Helmet (Steel) (w)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Fangzahn-Helm_(Stahl)_icon.png",
probability: "8.3%"
},
{
name: "Horns of Horror (g) (w)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Hörner_des_Horrors_(g)_(w)_icon.png",
probability: "8.3%"
},
{
name: "Horns of Horror (b) (w)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Hörner_des_Horrors_(b)_(w)_icon.png",
probability: "8.3%"
},
{
name: "Brown Wolf Cap (w)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Braune_Wolfskappe_(w)_icon.png",
probability: "8.3%"
},
{
name: "Grey Wolf Cap (w)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Graue_Wolfskappe_(m)_icon.png",
probability: "8.3%"
}
]
},
{
id: "gruselpet",
name: "Spooky Pet Chest",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Gruselpet-Kiste.png",
puzzlePieces: 11,
lootList: [
{
name: "Boney (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Boney.png",
probability: "8.3%"
},
{
name: "Jade Phoenix (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Jadephönix.png",
probability: "8.3%"
},
{
name: "Small Sweeper (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Kleiner_Feger.png",
probability: "8.3%"
},
{
name: "Pumpkin Head (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Kürbisköpfchen.png",
probability: "8.3%"
},
{
name: "Bruce (Loot) (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Bruce.png",
probability: "8.3%"
},
{
name: "Wayne (Loot) (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Wayne.png",
probability: "8.3%"
},
{
name: "Mrs. Jiangshi+ (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Frau-Jiangshi.png",
probability: "8.3%"
},
{
name: "Mr. Jiangshi+ (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Herr-Jiangshi.png",
probability: "8.3%"
},
{
name: "Shiver (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Hui.png",
probability: "8.3%"
},
{
name: "Snivel (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Buh.png",
probability: "8.3%"
},
{
name: "Astrabell (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Astrabell.png",
probability: "8.3%"
},
{
name: "Helexna (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Helexna.png",
probability: "8.3%"
}
]
},
{
id: "gruselmount",
name: "Spooky Mount Chest",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Gruselmount-Kiste.png",
puzzlePieces: 7,
lootList: [
{
name: "Purple Equus (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Equus_Purpur.png",
probability: "14.3%"
},
{
name: "Nirvana Dragon (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Nirwana-Drache.png",
probability: "14.3%"
},
{
name: "Samsara Dragon (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Samsara-Drache.png",
probability: "14.3%"
},
{
name: "Lava Hell Lizard (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Lavahöllenechse.png",
probability: "14.3%"
},
{
name: "Ice Hell Lizard (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Eishöllenechse.png",
probability: "14.3%"
},
{
name: "Cerberus (gold) (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Zerberus_(gold).png",
probability: "14.3%"
},
{
name: "Cerberus (silver) (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Zerberus_(silber).png",
probability: "14.3%"
}
]
},
{
id: "schmuckschatulle",
name: "Jewelry Box",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Schmuckschatulle.png",
puzzlePieces: 29,
lootList: [
{
name: "Power Lollipop (3d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Lolli_der_Kraft.png",
probability: "20.0%"
},
{
name: "Power Lollipop (7d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Lolli_der_Kraft.png",
probability: "1.7%"
},
{
name: "Strength Lollipop",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Halloween-Lolli.png",
probability: "1.7%"
},
{
name: "Magic Lollipop",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Lolli_der_Magie.png",
probability: "1.7%"
},
{
name: "Ring of Willpower",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Ring_der_Willenskraft.png",
probability: "3.3%"
},
{
name: "Ring of Deadly Power",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Ring_der_tödlichen_Macht.png",
probability: "3.3%"
},
{
name: "Crescent Ring",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Halbmondring.png",
probability: "1.7%"
},
{
name: "Ring of Joy",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Ring_der_Freude.png",
probability: "6.7%"
},
{
name: "Amulet of Eternal Love",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Amulett_der_ewigen_Liebe.png",
probability: "6.7%"
},
{
name: "Chocolate Amulet",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Schoko-Amulett.png",
probability: "1.7%"
},
{
name: "Nazar Amulet",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Nazar-Amulett.png",
probability: "6.7%"
},
{
name: "Guardian Amulet",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Amulett_der_Wächter.png",
probability: "1.7%"
},
{
name: "Hero Medal (1d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Heldenmedaille.png",
probability: "10.0%"
},
{
name: "Ascension Potion (3hrs)",
icon: "https://m2-helper.com/resources/events/yutnori/Trank_der_Weisheit.png",
probability: "13.3%"
},
{
name: "Wisdom Potion (3hrs)",
icon: "https://m2-helper.com/resources/events/yutnori/Trank_der_Weisheit.png",
probability: "20.0%"
}
]
},
{
id: "petkiste",
name: "Pet Chest",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Petkiste.png",
puzzlePieces: 15,
lootList: [
{
name: "Monkey Egg",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Affenei.png",
probability: "50.0%"
},
{
name: "Spider Egg",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Spinnenei_(Item).png",
probability: "25.0%"
},
{
name: "Nemere's Egg",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Ei_des_Nemere.png",
probability: "8.3%"
},
{
name: "Razador's Egg",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Ei_des_Razador.png",
probability: "7.8%"
},
{
name: "Baby Baashido's Egg",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Baby-Baashidos_Ei.png",
probability: "4.2%"
},
{
name: "Azrael's Egg",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Azraelchens_Ei.png",
probability: "2.1%"
},
{
name: "Little Executioner's Egg",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Moppelhenkerchen-Ei.png",
probability: "2.0%"
},
{
name: "Red Dragon Egg",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Rotes_Drachenei.png",
probability: "0.4%"
},
{
name: "Blue Dragon Egg",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Blaues_Drachenei.png",
probability: "0.08%"
},
{
name: "Nessie's Egg",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Nessie-Ei.png",
probability: "0.08%"
}
]
},
{
id: "baenderbox",
name: "Ribbon Box",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Bänderbox.png",
puzzlePieces: 9,
lootList: [
{
name: "Ruler Band (Simple)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Herrscherband_(einfach).png",
probability: "6.8%"
},
{
name: "Ruler Band (Fine)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Herrscherband_(fein).png",
probability: "0.6%"
},
{
name: "Ruler Band (Noble)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Herrscherband_(edel).png",
probability: "0.1%"
},
{
name: "Master Band (Simple)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Meisterband_(einfach).png",
probability: "6.8%"
},
{
name: "Master Band (Fine)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Meisterband_(fein).png",
probability: "0.6%"
},
{
name: "Master Band (Noble)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Meisterband_(edel).png",
probability: "0.1%"
},
{
name: "Prince Band (Simple)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Fürstenband_(einfach).png",
probability: "6.8%"
},
{
name: "Prince Band (Fine)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Fürstenband_(fein).png",
probability: "0.6%"
},
{
name: "Prince Band (Noble)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Fürstenband_(edel).png",
probability: "0.1%"
},
{
name: "King Band (Simple)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Königsband_(einfach).png",
probability: "6.8%"
},
{
name: "King Band (Fine)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Königsband_(fein).png",
probability: "0.6%"
},
{
name: "King Band (Noble)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Königsband_(edel).png",
probability: "0.1%"
},
{
name: "Band of Zi (Simple)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Zi_(einfach).png",
probability: "5.6%"
},
{
name: "Band of Zi (Fine)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Zi_(fein).png",
probability: "0.2%"
},
{
name: "Band of Chou (Simple)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Chou_(einfach).png",
probability: "5.6%"
},
{
name: "Band of Chou (Fine)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Chou_(fein).png",
probability: "0.2%"
},
{
name: "Band of Yin (Simple)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Yin_(einfach).png",
probability: "5.6%"
},
{
name: "Band of Yin (Fine)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Yin_(fein).png",
probability: "0.2%"
},
{
name: "Band of Mao (Simple)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_der_Mao_(einfach).png",
probability: "5.6%"
},
{
name: "Band of Mao (Fine)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_der_Mao_(fein).png",
probability: "0.2%"
},
{
name: "Band of Chen (Simple)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Chen_(einfach).png",
probability: "5.6%"
},
{
name: "Band of Chen (Fine)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Chen_(fein).png",
probability: "0.2%"
},
{
name: "Band of Si (Simple)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_der_Si_(einfach).png",
probability: "5.6%"
},
{
name: "Band of Si (Fine)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_der_Si_(fein).png",
probability: "0.2%"
},
{
name: "Band of Wu (Simple)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Wu_(einfach).png",
probability: "5.6%"
},
{
name: "Band of Wu (Fine)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Wu_(fein).png",
probability: "0.2%"
},
{
name: "Band of Wei (Simple)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Wei_(einfach).png",
probability: "5.6%"
},
{
name: "Band of Wei (Fine)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Wei_(fein).png",
probability: "0.2%"
},
{
name: "Band of Shen (Simple)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Shen_(einfach).png",
probability: "5.6%"
},
{
name: "Band of Shen (Fine)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Shen_(fein).png",
probability: "0.2%"
},
{
name: "Band of Yu (Simple)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Yu_(einfach).png",
probability: "5.6%"
},
{
name: "Band of Yu (Fine)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Yu_(fein).png",
probability: "0.2%"
},
{
name: "Band of Xu (Simple)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Xu_(einfach).png",
probability: "5.6%"
},
{
name: "Band of Xu (Fine)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Xu_(fein).png",
probability: "0.2%"
},
{
name: "Band of Hai (Simple)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Hai_(einfach).png",
probability: "5.6%"
},
{
name: "Band of Hai (Fine)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Hai_(fein).png",
probability: "0.2%"
}
]
},
{
id: "ornamentkiste",
name: "Ornament Chest",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Ornamentkiste.png",
puzzlePieces: 33,
lootList: [
{
name: "Fire Talisman+0",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Feuertalisman.png",
probability: "0.7%"
},
{
name: "Ice Talisman+0",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Eistalisman.png",
probability: "0.7%"
},
{
name: "Earth Talisman+0",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Erdtalisman.png",
probability: "0.7%"
},
{
name: "Dark Talisman+0",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Dunkler_Talisman.png",
probability: "0.7%"
},
{
name: "Wind Talisman+0",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Windtalisman.png",
probability: "0.7%"
},
{
name: "Lightning Talisman+0",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Blitztalisman.png",
probability: "0.7%"
},
{
name: "Red Zodiac Chest (50x)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Rote_Zodiakschatulle.png",
probability: "25.7%"
},
{
name: "Blue Zodiac Chest (50x)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Blaue_Zodiakschatulle.png",
probability: "33.1%"
},
{
name: "Element Flower (50x)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Elementblüte.png",
probability: "22.0%"
},
{
name: "Guardian's Signum (3hrs)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Signum_der_Wächter.png",
probability: "7.4%"
},
{
name: "Sphere Scroll",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Sphärenpergament_(h).png",
probability: "7.4%"
}
]
},
{
id: "ultimate-pet-book",
name: "Ultimate Pet Book Chest",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Pet-Buch-Kiste.png",
puzzlePieces: 14,
lootList: [
{
name: "Resistance (Warrior)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "2.8%"
},
{
name: "Resistance (Sura)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "2.8%"
},
{
name: "Resistance (Ninja)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "2.8%"
},
{
name: "Resistance (Shaman)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "2.8%"
},
{
name: "Resistance (Lycan)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "2.8%"
},
{
name: "Berserker Book",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "9.3%"
},
{
name: "Magic Break Book",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "9.3%"
},
{
name: "Acceleration Book",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "0.9%"
},
{
name: "Drill Book",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "4.7%"
},
{
name: "Renewal Book",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-blau.png",
probability: "3.7%"
},
{
name: "Vampire Book",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "9.3%"
},
{
name: "Ghost Book",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "14.0%"
},
{
name: "Obstacle Book",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "0.9%"
},
{
name: "Mirror Book",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "0.9%"
},
{
name: "Yang Drop Book",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "9.3%"
},
{
name: "Range Book",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "14.0%"
},
{
name: "Invincibility Book",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-blau.png",
probability: "1.4%"
},
{
name: "Healing Book",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-blau.png",
probability: "1.4%"
},
{
name: "Brewer Book",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "0.9%"
},
{
name: "Monster Hunter Book",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "0.9%"
},
{
name: "Sharp Eye Book",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "0.9%"
},
{
name: "Life Drain Book",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "0.9%"
},
{
name: "Featherweight Book",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-blau.png",
probability: "0.9%"
},
{
name: "Pet Enchant",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Pet_verzaubern.png",
probability: "0.9%"
},
{
name: "Pet Reverti",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Pet_Reverti.png",
probability: "0.9%"
},
{
name: "Pet Revertus",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Pet_Revertus.png",
probability: "0.9%"
}
]
},
{
id: "risserzahn-plus",
name: "Ripper Fang Chest+",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Risserzahnkiste+.png",
puzzlePieces: 25,
lootList: [
{
name: "Contains a weapon skin of your choice:",
isDescription: true
},
{
name: "Ripper Fang Blade",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Risserzahn-Klinge.png"
},
{
name: "Ripper Fang Dagger",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Risserzahn-Dolch.png"
},
{
name: "Ripper Fang Bow",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Risserzahn-Bogen.png"
},
{
name: "Ripper Fang Claws",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Risserzahn-Krallen.png"
},
{
name: "Ripper Fang Fan",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Risserzahn-Fächer.png"
},
{
name: "Ripper Fang Bell",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Risserzahn-Glocke.png"
},
{
name: "Ripper Fang Glaive",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Risserzahn-Glefe.png"
}
]
},
{
id: "cor-draconis",
name: "Cor Draconis Chest",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Cor_Draconis-Kiste.png",
puzzlePieces: 55,
lootList: [
{
name: "Cor Draconis (Raw)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Cor_Draconis_(Roh).png",
probability: "36.3%"
},
{
name: "Cor Draconis (Normal)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Cor_Draconis_(Roh).png",
probability: "12.1%"
},
{
name: "Cor Draconis (Noble)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Cor_Draconis_(edel).png",
probability: "7.3%"
},
{
name: "Cor Draconis (Precious)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Cor_Draconis_(kostbar).png",
probability: "4.0%"
},
{
name: "Cor Draconis (Mystical)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Cor_Draconis_(mystisch).png",
probability: "2.0%"
},
{
name: "Green Dragon Bean",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Grüne_Drachenbohne.png",
probability: "28.2%"
},
{
name: "Blue Dragon Bean",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Blaue_Drachenbohne.png",
probability: "6.0%"
},
{
name: "Pink Dragon Bean",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Rosa_Drachenbohne.png",
probability: "4.0%"
}
]
},
{
id: "gayakiste",
name: "Gaya Chest",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Gayakiste.png",
puzzlePieces: 7,
lootList: [
{
name: "Always contains the following items:",
isDescription: true
},
{
name: "Glimmerstone (1200x)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Schmuckstein.png",
probability: "100%"
},
{
name: "Spirit Stone Bundle (10x)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Geiststeinbündel.png",
probability: "100%"
},
{
name: "Gaya Merchant Reset",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Gayahandel_zurücksetzen.png",
probability: "100%"
},
{
name: "Gaya Merchant Extension",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Gayahandelerweiterung.png",
probability: "100%"
}
]
},
{
id: "mysterien",
name: "Mystery Chest",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Kiste_der_Mysterien.png",
puzzlePieces: 11,
lootList: [
{
name: "White Pearl",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Weiße_Perle.png",
probability: "6.5%"
},
{
name: "Blue Pearl",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Blaue_Perle.png",
probability: "13.1%"
},
{
name: "Blood Red Pearl",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Blutrote_Perle.png",
probability: "18.3%"
},
{
name: "Titanium Dioxide",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Titandioxid.png",
probability: "0.1%"
},
{
name: "Agate",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Achat.png",
probability: "0.3%"
},
{
name: "Moonstone",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Mondstein.png",
probability: "0.1%"
},
{
name: "Gold Metallic Dye",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Goldmetallic_Farbstoff.png",
probability: "7.8%"
},
{
name: "Red Flame Stone",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Rotflammenstein.png",
probability: "11.8%"
},
{
name: "Queen Meley's Chest",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Truhe_der_Königin_Meley.png",
probability: "1.3%"
},
{
name: "Dragon Guardian's Chest",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Truhe_der_Königin_Meley.png",
probability: "1.3%"
},
{
name: "Beran-Setaou's Chest",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Truhe_des_Beran-Setaou.png",
probability: "3.9%"
},
{
name: "Bagjanamu's Chest",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Truhe_des_Bagjanamu.png",
probability: "5.2%"
},
{
name: "Razador's Chest",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Truhe_des_Razador.png",
probability: "14.4%"
},
{
name: "Nemere's Chest",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Truhe_des_Nemere.png",
probability: "13.1%"
},
{
name: "Jotun Thrym's Chest",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Jotun_Thrym-Truhe.png",
probability: "1.3%"
},
{
name: "Hydra's Chest",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Hydras_Truhe.png",
probability: "1.3%"
}
]
},
{
id: "rubinkiste",
name: "Ruby Chest",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Rubinkiste.png",
puzzlePieces: 11,
lootList: [
{
name: "Peach Blossom Wine (3x)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Pfirsichblütenwein_B.png",
probability: "2.9%"
},
{
name: "Status Reset",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Status-Neuverteilung_B.png",
probability: "2.9%"
},
{
name: "Shrunken Head",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Schrumpfkopf.png",
probability: "2.9%"
},
{
name: "Haste Potion (30min) (3x)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Trank_der_Hast_B.png",
probability: "2.9%"
},
{
name: "Moon Elixir (M)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Elixier_des_Mondes_(M)_B.png",
probability: "2.9%"
},
{
name: "Metin Compass",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Kompass_des_Metinsteins_B.png",
probability: "2.9%"
},
{
name: "Courage Cape",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Tapferkeitsumhang_B.png",
probability: "2.9%"
},
{
name: "Dragon Medal (3x)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Medaille_des_Drachen_B.png",
probability: "2.9%"
},
{
name: "Dragon Scroll",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Schriftrolle_des_Drachen_B.png",
probability: "2.9%"
},
{
name: "Blood Stone",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Blutstein.png",
probability: "2.9%"
},
{
name: "Leader's Book (1hr)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Buch_des_Anführers_B.png",
probability: "2.9%"
},
{
name: "Speed Potion (30min) (3x)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Geschwindigkeitstrank_B.png",
probability: "2.9%"
},
{
name: "Item Upgrade (B)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Gegenstand_verstärken_B.png",
probability: "0.3%"
},
{
name: "Item Enchant (B)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Gegenstand_verzaubern_B.png",
probability: "0.3%"
},
{
name: "Blessing Orb",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Segenskugel_B.png",
probability: "2.9%"
},
{
name: "Blessing Scroll",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Segensschriftrolle_B.png",
probability: "2.9%"
},
{
name: "Attack Potion +15 (30min) (3x)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Trank_des_Angriffs_+10_B.png",
probability: "2.9%"
},
{
name: "Attack Potion +20 (30min) (3x)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Trank_des_Angriffs_+20_B.png",
probability: "2.9%"
},
{
name: "Pass",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Passierschein.png",
probability: "2.9%"
},
{
name: "Research Elixir",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Elixier_des_Forschers.png",
probability: "2.9%"
},
{
name: "Sun Elixir (M)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Elixier_der_Sonne_(M)_B.png",
probability: "2.9%"
},
{
name: "Wind Shoes (1d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Windschuhe.png",
probability: "2.9%"
},
{
name: "Exorcism Scroll",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Exorzismus-Schriftrolle.png",
probability: "2.9%"
},
{
name: "Stone Manual",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Stein-Handbuch.png",
probability: "2.9%"
},
{
name: "Protein Bite",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Protein-Happen.png",
probability: "2.9%"
},
{
name: "Fruit of Life",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Frucht_des_Lebens.png",
probability: "2.9%"
},
{
name: "Peach Blossom Wine+ (3x)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Pfirsichblütenwein_B.png",
probability: "2.9%"
},
{
name: "Concentrated Reading",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Konzentriertes_Lesen.png",
probability: "2.9%"
},
{
name: "Dragon God Life (30min) (3x)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Drachengott-Leben.png",
probability: "2.9%"
},
{
name: "Dragon God Attack (30min) (3x)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Drachengott-Angriff.png",
probability: "2.9%"
},
{
name: "Thief Gloves (7d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Handschuhe_des_Diebes.png",
probability: "2.9%"
},
{
name: "Luck Medal (7d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Medaille_des_Glücks.png",
probability: "2.9%"
},
{
name: "Teleportation Ring",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Teleportationsring.png",
probability: "2.9%"
},
{
name: "Pet Name Scroll",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Pergament_der_Pet-Namen.png",
probability: "2.9%"
},
{
name: "Inventory Extension",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Inventarerweiterung.png",
probability: "2.9%"
},
{
name: "Ring of Secrets (15d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Ring_der_Geheimnisse.png",
probability: "2.9%"
},
{
name: "Item Enchant+",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Gegenstand_verzaubern+.png",
probability: "0.1%"
}
]
}
]
},
secretCalculator: {
title: "Yutnori Secret Calculator",
minutesLabel: "Minutes per Run:",
secretsLabel: "Number of Yutnori Secrets:",
calculateBtn: "Calculate",
resultLabel: "Possible Runs:"
},
},
},
},
tr: {
flag: "🇹🇷",
label: "Türkçe",
title: "Event Yardımcısı",
subtitle: "Tüm eventler için genel bakış ve yardım araçları",
footer: "Metin2 Helper by NikKing97. Gameforge tarafından resmi değildir.",
activeLabel: "AKTİF",
events: {
treasure: {
title: "Hazine Adası - Goblin",
summary:
"Bir hazine goblini canavarlardan koru, dublun topla ve onları mini hazine avcılığı için kullan.<br><strong>Seviye 70'ten itibaren</strong>",
descTitle: "Açıklama",
desc: 'Bir <span class="treasure-ticket-highlight"><img src="https://m2-helper.com/resources/events/Schatzticket.png" alt="Hazine Bileti" class="inline w-6 h-6 mx-1.5 align-top -mt-0">Hazine Bileti<div class="tooltip">Hazine biletini event süresi boyunca sandıklarda bulabilirsin.<br><img src="https://m2-helper.com/resources/events/Goldene_Schatztruhe.png" alt="Altın Sandık" class="inline w-5 h-5 mx-1"> <img src="https://m2-helper.com/resources/events/Goldener_Schlüssel.png" alt="Altın Anahtar" class="inline w-5 h-5 mx-1"></div></span> ile hazine goblinin beklediği adaya ışınlanırsın. Yol boyunca 3 büyük hazine sandığı belirir – sadece birinde hazine vardır. Goblin doğru olanı bulduğunda, görev başarıyla biter. O veya sen ölürseniz, görev başarısız olur. <br><br><img src="https://m2-helper.com/resources/events/Dublone.png" alt="Dublun" class="inline w-7 h-7 mx-1.5 align-top -mt-0.5">Canavar başına 1 Dublon, başarıda 100 Dublun alırsın – maks. kapasite: 999 Dublon.',
huntTitle: "Hazine Avcılığı:",
huntDesc: [
"Event UI'ını aç.",
'<strong>90 Dublun</strong> karşılığında arama alanını aç – ilk ödül bedava, sonrasında her ek arama bir <img src="Events/images/goblin_key.png" alt="Goblin Anahtarı" class="inline w-6 h-6 mx-1.5 align-top -mt-0">Goblin Anahtarı tutar.',
"Tur hangi ödülleri alabileceğini belirler. 3. tur, 5. tur ve 10. turdan itibaren ödül alanı genişler.",
"<strong>9 ödülü</strong> seri halinde topladığında, turu sıfırlamadan bir tur yukarı çıkarsın.",
],
roundRewardsTitle: "Tur Ödülleri:",
roundRewards: [
"Her tamamlanan tur sonrasında rastgele bir ödül alırsın.",
"10. turdan itibaren, her ek tur için 10. tur ödülünü alırsın.",
],
roundRewardsTable: {
rounds: [
{
number: 1,
rewards: [
{
name: "Yeşil İksir (40x)",
icon: "rundenbelohnungen/Grüner_Trank.png",
},
{
name: "Cor Daemonis (Ham) (3x)",
icon: "rundenbelohnungen/Cor_Daemonis_(Roh).png",
},
],
},
{
number: 2,
rewards: [
{
name: "Kritik Vuruş (10x)",
icon: "rundenbelohnungen/Kritischer_Kampf.png",
},
{
name: "Delici Vuruş (10x)",
icon: "rundenbelohnungen/Durchbohrender_Kampf.png",
},
],
},
{
number: 3,
rewards: [
{
name: "Cor Daemonis (Ham) (15x)",
icon: "rundenbelohnungen/Cor_Daemonis_(Roh).png",
},
{
name: "Deneyim Yüzüğü (1G 12s)",
icon: "rundenbelohnungen/Erfahrungsring.png",
},
],
},
{
number: 4,
rewards: [
{
name: "Goblin Anahtar Kutusu",
icon: "Goblin-Schlüsselbox.png",
},
{
name: "Ejder Kutsaması (5x)",
icon: "rundenbelohnungen/Segen_des_Drachen.png",
},
],
},
{
number: 5,
rewards: [
{
name: "Bir Antik Ejder Taşı (mat)",
icon: "rundenbelohnungen/Roher_Drachenrubin_(matt).png",
},
{
name: "Cor Daemonis (Ham) (20x)",
icon: "rundenbelohnungen/Cor_Daemonis_(Roh).png",
},
],
},
{
number: 6,
rewards: [
{
name: "İyileştirme Kutsaması",
icon: "rundenbelohnungen/Veredlungssegen.png",
tooltip: "Bir sonraki geliştirme denemesinde +10% başarı oranı<br>(İlk 100 oyuncu için)",
},
{
name: "Aura Ateş Rünü 100 (10x)",
icon: "rundenbelohnungen/Feuerrune_der_Aura.png",
},
],
},
{
number: 7,
rewards: [
{
name: "Binicilik (Rastgele)",
icon: "rundenbelohnungen/Reiten_zufall.png",
},
{
name: "Canavar Avcısı Kitabı",
icon: "rundenbelohnungen/monster_Buch.png",
},
],
},
{
number: 8,
rewards: [
{
name: "Bir Antik Ejder Taşı (mat)",
icon: "rundenbelohnungen/Roher_Drachenrubin_(matt).png",
},
{
name: "Ejder Alevi (2x)",
icon: "rundenbelohnungen/Flamme_des_Drachen.png",
},
],
},
{
number: 9,
rewards: [
{
name: "İyileştirme Kutsaması",
icon: "rundenbelohnungen/Veredlungssegen.png",
tooltip: "Bir sonraki geliştirme denemesinde malzeme gerekmez<br>(İlk 50 oyuncu için)",
},
{
name: "Ateş Anka Kuşu (Ganimet) (30G)",
icon: "rundenbelohnungen/Feuerphönix.png",
},
],
},
],
round10: {
title: "Tur 10 (Tekrarlanan)",
rewards: [
{
name: "Demir Ejder İksiri (L)",
icon: "rundenbelohnungen/Eisendrachenelixir_(L).png",
},
{
name: "Ejder Kutsaması (10x)",
icon: "rundenbelohnungen/Segen_des_Drachen.png",
},
{
name: "Geçiş B (20x)",
icon: "rundenbelohnungen/Passierschein_B.png",
},
{
name: "Cor Draconis (mistik)",
icon: "rundenbelohnungen/Cor_Draconis_(mystisch).png",
},
{
name: "Beyaz Ejder İksiri (L)",
icon: "rundenbelohnungen/Weißdrachenelixir_(L).png",
},
],
},
},
tipsTitle: "İpuçları ve Püf Noktaları:",
tips: [
"Event öncesi bazı hazine sandıkları ve uygun anahtarları hazır bulundur.",
'<span class="treasure-ticket-highlight">Goblin için buffları<div class="tooltip">• HP +%20<br>• Savunma +50<br>• Hareket Hızı +100<br>• Zehir Bağışıklığı<br><br>Her buff küçük miktarda <img src="https://m2-helper.com/resources/yang.png" alt="Yang" class="inline w-5 h-5 mx-1">Yang tutar</div></span> kullanarak goblini daha dayanıklı hale getir ve daha hızlı koştur.',
'Ücretsiz <img src="Events/images/goblin_key.png" alt="Goblin Anahtarı" class="inline w-6 h-6 mx-1.5 align-top -mt-0">goblin anahtarları almak için ilk bedava ödülü ve sıfırlamayı kullan.',
'Tur ödüllerinde hızla ilerlemek için item shoptan <span class="treasure-ticket-highlight"><img src="https://m2-helper.com/resources/events/Goblin-Schlüsselbox.png" alt="Goblin Anahtar Kutusu" class="inline w-6 h-6 mx-1.5 align-top -mt-0">goblin anahtar kutularını<div class="tooltip">8x <img src="Events/images/goblin_key.png" alt="Goblin Anahtarı" class="inline w-5 h-5 mx-1">Goblin Anahtarı içerir</div></span> kullan.',
],
note: "<strong>Not:</strong> Birçok sunucuda iyileştirme kutsamaları çok hızlı tükeniyor!",
},
underworld: {
title: "Öteki Dünyaya Yolculuk",
summary:
"Güçlü düşmanlara karşı savaş ve nadir materyaller topla.<br><strong>Seviye 90'dan itibaren</strong>",
descTitle: "Açıklama",
desc: "Öteki Dünyaya Yolculuk <strong>iki aşamaya</strong> ayrılmıştır. İlk aşamada, canavar öldürmeleri yoluyla<img src=\"Events/images/Totenflamme.png\" alt=\"Ölüm Alevi\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\"><strong>Ölüm Alevleri</strong> elde edersiniz, bunlar doğrudan etkinlik arayüzüne eklenir. Bu Ölüm Alevleri, etkinliğin ikinci aşamasında ihtiyacınız olan eşyalarla değiştirilebilir.",
mechanicsTitle: "<span style='font-size: 1.25em; font-weight: bold;'>1. Aşama - Ölüm Alevlerini Değiştirin:</span>",
mechanicsDesc: [
"1. Aşamada toplanan Ölüm Alevleri beş farklı eşyayla değiştirilebilir. Her eşya belirli sayıda Ölüm Alevi gerektirir ve etkinliğin 2. aşaması için farklı işlevler sunar.<br>Ölüm Alevlerinin istenen eşyaya <strong>değişimi</strong> <strong>%80 oranında başarılıdır</strong>."
],
blackLetterTitle: "Kara Mektup:",
blackLetterDesc: "Kara Mektuplar size Öteki Dünyaya erişim sağlar.<br><strong>3x Kara Mektup</strong> ile Öteki Dünyaya girebilirsiniz. Ayrıca <strong>10x Kara Mektup</strong> ile Öteki Dünyada dört deneye girebilirsiniz.",
blackLetterTableHeader: ["1.", "2.", "3.", "4.", "5.", "6."],
blackLetterTableValues: ["1x", "3x", "5x", "10x", "15x", "20x"],
tableHeaderDeaths: "Ölüm Sayısı",
tableHeaderWater: "Gerekli Su",
waterOfLifeTitle: "Yaşam Suyu:",
waterOfLifeDesc: "Yaşam Suyu ile Öteki Dünyada ölümden sonra kendinizi <strong>diriltebilirsiniz</strong>. Ne kadar çok ölürseniz, dirilmek için o kadar çok suya ihtiyacınız olur.",
deathSoulTitle: "Ölüm Ruhu:",
deathSoulDesc: "<strong>Asmodeus'un HP'sini azaltmak</strong> için gereklidir. Asmodeus'un HP'si 4 kez azaltılabilir. HP azalması bir koşu için geçerlidir. Ölüm Ruhlarını Koruyucu Hae-Tae'de kullanabilirsiniz.",
deathSoulTableHeader: ["20", "40", "60", "80"],
deathSoulTableValues: ["-20%", "-40%", "-60%", "-90%"],
tableHeaderSouls: "Ölüm Ruhu Sayısı",
tableHeaderReduction: "HP Azalması",
asmodeusKeyTitle: "Asmodeus Anahtarı:",
asmodeusKeyDesc: "Önce dört deneyi tamamlamadan <strong>doğrudan Asmodeus'a karşı savaşmak</strong> için bir Asmodeus Anahtarı kullanabilirsiniz.<br><br>",
phaseTitle: "<span style='font-size: 1.25em; font-weight: bold;'>2. Aşama - Denemeler ve Asmodeus Savaşı:</span>",
phaseDesc: "Etkinliğin ikinci aşamasında <strong>Öteki Dünya</strong>'ya girersiniz ve güçlü düşmanlara karşı savaşırsınız.<br>Öteki Dünya portalını <strong>Ejder Ateşi Burnu</strong>'nun <strong>Limanında</strong> bulabilirsiniz.<br><br>Öteki Dünyada artık Toprak, Gece, Gök Gürültüsü ve Hava'nın <strong>dört denemesini</strong> tamamlama fırsatınız var. Bu denemelerden Lanet Kostüm Setini elde edersiniz. Bu kostüm setiyle <strong>+100% Karanlık Gücü</strong> ve <strong>+400% Ölülere Karşı Güçlü</strong> bonus alırsınız.<br><br>Dört denemeyi tamamladıktan sonra, Asmodeus Anahtarı <u>olmadan</u> Asmodeus'a ulaşabilir ve onunla savaşabilirsiniz. Asmodeus yenildiğinde, bir başkası doğar. İlk dört Asmodeus bir<img src=\"https://m2-helper.com/resources/events/anderwelt/Verdammnis-Truhe.png\" alt=\"Sandık\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\"><strong>Lanet Sandığı</strong> düşürür, sonrakiler bir<img src=\"https://m2-helper.com/resources/events/anderwelt/Verdammnis-Truhe+.png\" alt=\"Sandık\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\"><strong>Lanet Sandığı+</strong> düşürür.<br><br>Asmodeus'u yendikten sonra <strong>Kurtuluş</strong>a girebilirsiniz. Kurtuluş'ta her zaman bir Kurtuluş Metini vardır, bu<span class=\"treasure-ticket-highlight\"><img src=\"https://m2-helper.com/resources/events/anderwelt/Phönix_der_Erlösung.png\" alt=\"Anka\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\"><strong>Kurtuluş Ankası</strong><div class=\"tooltip\">7 Gün Loot Evcil Hayvanı</div></span> ve<img src=\"https://m2-helper.com/resources/events/anderwelt/Verdammnis-Schlüssel.png\" alt=\"Anahtar\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\"><strong>Lanet Anahtarı</strong> ile<img src=\"https://m2-helper.com/resources/events/anderwelt/Verdammnis-Schlüssel+.png\" alt=\"Anahtar+\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\"><strong>Lanet Anahtarı+</strong> için eşyalar düşürür.",
imageSrc: "https://m2-helper.com/resources/events/anderwelt/event-interface-en.png",
imageAlt: "Öteki Dünya Arayüzü",
imageCaption: "Öteki Dünya Etkinlik Arayüzü",
rewardsTitle: "Ödüller:",
rewardsTable: [
{
category: "Lanet Sandığı",
icon: "https://m2-helper.com/resources/events/anderwelt/Verdammnis-Truhe.png",
contents: [
{ name: "Lanetli Ruh", icon: "https://m2-helper.com/resources/events/anderwelt/Verdammte_Seele.png", probability: "19.23%" },
{ name: "Lanetli Ruh (2x)", icon: "https://m2-helper.com/resources/events/anderwelt/Verdammte_Seele.png", probability: "12.82%" },
{ name: "Lanetli Ruh (5x)", icon: "https://m2-helper.com/resources/events/anderwelt/Verdammte_Seele.png", probability: "4.27%" },
{ name: "Ölümsüzlük Kitabı", icon: "https://m2-helper.com/resources/events/anderwelt/Buch_des_Unlebens.png", probability: "19.23%" },
{ name: "Ölümsüzlük Kitabı (2x)", icon: "https://m2-helper.com/resources/events/anderwelt/Buch_des_Unlebens.png", probability: "12.82%" },
{ name: "Ölümsüzlük Kitabı (5x)", icon: "https://m2-helper.com/resources/events/anderwelt/Buch_des_Unlebens.png", probability: "4.27%" },
{ name: "Asmodeus Pulu", icon: "https://m2-helper.com/resources/events/anderwelt/Asmodeus-Schuppe.png", probability: "8.55%" },
{ name: "Asmodeus Pulu (2x)", icon: "https://m2-helper.com/resources/events/anderwelt/Asmodeus-Schuppe.png", probability: "4.27%" },
{ name: "Asmodeus Pulu (3x)", icon: "https://m2-helper.com/resources/events/anderwelt/Asmodeus-Schuppe.png", probability: "0.85%" },
{ name: "Asmodeus Omuz Koruması", icon: "https://m2-helper.com/resources/events/anderwelt/Asmodeus-Schulterschutz.png", probability: "8.55%" },
{ name: "Asmodeus Omuz Koruması (2x)", icon: "https://m2-helper.com/resources/events/anderwelt/Asmodeus-Schulterschutz.png", probability: "4.27%" },
{ name: "Asmodeus Omuz Koruması (3x)", icon: "https://m2-helper.com/resources/events/anderwelt/Asmodeus-Schulterschutz.png", probability: "0.85%" }
]
},
{
category: "Lanet Sandığı+",
icon: "https://m2-helper.com/resources/events/anderwelt/Verdammnis-Truhe+.png",
contents: [
{ name: "Asmodeus Pulu (5x)", icon: "https://m2-helper.com/resources/events/anderwelt/Asmodeus-Schuppe.png", probability: "18.00%" },
{ name: "Asmodeus Pulu (10x)", icon: "https://m2-helper.com/resources/events/anderwelt/Asmodeus-Schuppe.png", probability: "13.50%" },
{ name: "Asmodeus Omuz Koruması (3x)", icon: "https://m2-helper.com/resources/events/anderwelt/Asmodeus-Schulterschutz.png", probability: "18.00%" },
{ name: "Asmodeus Omuz Koruması (6x)", icon: "https://m2-helper.com/resources/events/anderwelt/Asmodeus-Schulterschutz.png", probability: "13.50%" },
{ name: "Ölümsüzlük Kitabı (10x)", icon: "https://m2-helper.com/resources/events/anderwelt/Buch_des_Unlebens.png", probability: "9.00%" },
{ name: "Ölümsüzlük Kitabı (20x)", icon: "https://m2-helper.com/resources/events/anderwelt/Buch_des_Unlebens.png", probability: "4.50%" },
{ name: "Lanetli Ruh (10x)", icon: "https://m2-helper.com/resources/events/anderwelt/Verdammte_Seele.png", probability: "9.00%" },
{ name: "Lanetli Ruh (20x)", icon: "https://m2-helper.com/resources/events/anderwelt/Verdammte_Seele.png", probability: "4.50%" },
{ name: "Asmodeus Boynuzu", icon: "https://m2-helper.com/resources/events/anderwelt/Asmodeus-Horn.png", probability: "9.00%" },
{ name: "Asmodeus Boynuzu (3x)", icon: "https://m2-helper.com/resources/events/anderwelt/Asmodeus-Horn.png", probability: "0.90%" },
{ name: "Asmodeus Yelesi", icon: "https://m2-helper.com/resources/events/anderwelt/Asmodeus-Mähne.png", probability: "0.09%" }
]
}
],
tipsTitle: "İpuçları ve Püf Noktaları:",
tips: [
"<img src=\"https://m2-helper.com/resources/events/anderwelt/Anderwelt-Talisman.png\" alt=\"Talisman\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\">Öteki Dünya Talismanının etkisini yığabilirsiniz.",
"Asmodeus güçlü uzak saldırılara sahiptir, ekipmanınızda uzak savunma veya çok HP bulundurmanız önerilir.",
"Birkaç Kara Mektup topladıktan sonra, Asmodeus'u sık sık yenmek ve doğrudan Kurtuluş'a seyahat etmek için Asmodeus Anahtarlarına odaklanmalısınız.",
"Asmodeus’un HP’sini etkili şekilde düşürmek için 80’in katı miktarda Ölüm Ruhu taşımak mantıklıdır."
],
note: "<strong>Not:</strong> Etkinlik sırasında bir<img src=\"https://m2-helper.com/resources/events/anderwelt/Verdammnis-Schild.png\" alt=\"Kalkan\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\">Lanet Kalkanı yaparsanız,<img src=\"https://m2-helper.com/resources/mission.png\" alt=\"görev\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\">Görevler yoluyla bir tane daha alırsınız!",
},
tombola: {
title: "Tombola",
summary:
"Büyük tombolada şansını dene ve değerli ödüller kazan.<br><strong>Seviye 1'dan itibaren</strong>",
descTitle: "Açıklama",
desc: "Metin2'deki Tombola yılda iki kez gerçekleşir ve sadece item shop'ta bulunan bir etkinliktir. Her gün <strong>10 bilete</strong> kadar satın alabilirsiniz.<br>Her bilet <img src=\"https://m2-helper.com/resources/events/tombola/Drachenmarke.png\" alt=\"Ejder İşareti\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\"> Ejder İşaretine mal olur - Ejder İşareti sayısı bilet başına artar. Bir önceki gün ertesi gün için 6 bileti daha ucuz fiyattan satın alabilirsiniz.<br>Tombola genellikle tam bir ay sürer. Her gün ertesi gün için indirimli biletleri satın aldığınız takdirde <strong>30 günlük</strong> Tombola için toplamda <strong>14.095 Ejder İşaretine</strong> ihtiyacınız vardır.",
tombolaPricesTitle: "Ödüller:",
tombolaPrices: "Her bilet rastgele bir ödül içerir. Ödüller sıradan iksirler ve yükseltme öğelerinden Cor Draconis ve Ayışığı'na kadar uzanır.<br> Her gün <strong>%0,1</strong> olasılıkla biletlerden birinin altında bulunabilecek bir <strong>günlük ödül</strong> vardır. Günlük ödüller kostümler, evcil hayvanlar, binekler, DR kuponları veya diğer değerli öğeler olabilir.<br>Ayrıca her biletin altında <strong>şanslı semboller</strong> gizlenebilir. Şanslı sembol elde etme olasılığı bilet başına <strong>%19,95</strong>'tir. Şanslı semboller, her biri belirli sayıda puan veren 6 farklı seviyeye ayrılmıştır.",
tombolaSymbolsTitle: "Şanslı Semboller:",
tombolaSymbols: "<strong>3 şanslı sembol</strong> topladığınızda ek bir ödül alırsınız. Bu ödülü 6<img src=\"https://m2-helper.com/resources/events/tombola/Drachenmünze.png\" alt=\"Ejder İşareti\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\">Ejder İşareti ile yeniden atabilirsiniz.<br> Her şanslı sembol sabit sayıda puan verir. Üç şanslı sembol ile kaç puan elde ettiğinize bağlı olarak belirli bir ödül alırsınız.",
tombolaSummer2025SectionTitle: "Yaz Tombola 2025",
tombolaWinter2025SectionTitle: "Kış Tombola 2025",
tombolaSummer2025SymbolsTable: [
{ name: "15 Puan", points: 15, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_15_Punkte.jpg", probability: "7.3%" },
{ name: "10 Puan", points: 10, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_10_Punkte.jpg", probability: "14.5%" },
{ name: "7 Puan", points: 7, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_7_Punkte.jpg", probability: "37.1%" },
{ name: "5 Puan", points: 5, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_5_Punkte.jpg", probability: "21.6%" },
{ name: "3 Puan", points: 3, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_3_Punkte.jpg", probability: "13.5%" },
{ name: "1 Puan", points: 1, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_1_Punkt.jpg", probability: "6%" }
],
tombolaSummer2025PrizeDistributionTitle: "Ödül Dağılımı:",
tombolaSortByPoints: "Puanlara Göre Sırala",
tombolaSortByProbability: "Olasılığa Göre Sırala",
tombolaTooltipProbability: "Olasılık",
tombolaTooltipPoints: "Puan",
tombolaSelectionDescription: "Ödül seçmek için grafiğin altındaki simgelere tıklayın. Olasılık ve EP maliyetleri buna göre hesaplanacak.",
tombolaTalismanChanceLabel: "Deneme başına kazanma şansı:",
tombolaRealCostLabel: "Başarı şansı için EP:",
tombolaChanceNote: "Belirtilen EP ile seçilen ödüllerden en az birini alma şansın %X'dir.",
tombolaSummer2025PrizeTable: [
{ pointRange: "43-45", prize: "Ejderha Alevi", icon: "https://m2-helper.com/resources/events/tombola/Flamme_des_Drachen.png" },
{ pointRange: "40-42", prize: "Rüzgar Tılsımı", icon: "https://m2-helper.com/resources/events/tombola/Windtalisman.png" },
{ pointRange: "37-39", prize: "Ateş Tılsımı", icon: "https://m2-helper.com/resources/events/tombola/Feuertalisman.png" },
{ pointRange: "35-36", prize: "Karanlık Tılsım", icon: "https://m2-helper.com/resources/events/tombola/Dunkler_Talisman.png" },
{ pointRange: "32-34", prize: "Ay Taşı", icon: "https://m2-helper.com/resources/events/tombola/Mondstein.png" },
{ pointRange: "30-31", prize: "Toprak Tılsımı", icon: "https://m2-helper.com/resources/events/tombola/Erdtalisman.png" },
{ pointRange: "28-29", prize: "Uyanış Sandığı", icon: "https://m2-helper.com/resources/events/tombola/Truhe_der_Erweckung.png" },
{ pointRange: "26-27", prize: "Ruh Taşı", icon: "https://m2-helper.com/resources/events/tombola/Seelenstein.png" },
{ pointRange: "24-25", prize: "Parıltılı istiridye", icon: "https://m2-helper.com/resources/events/tombola/Schimmernde_Muschel.png" },
{ pointRange: "22-23", prize: "Platin Hazine Kutusu", icon: "https://m2-helper.com/resources/events/tombola/Platin-Schatzkiste.png" },
{ pointRange: "20-21", prize: "İstiridye (10x)", icon: "https://m2-helper.com/resources/events/tombola/Muschel.png" },
{ pointRange: "18-19", prize: "Platin Hazine Anahtarı", icon: "https://m2-helper.com/resources/events/tombola/Platin-Schatzschlüssel.png" },
{ pointRange: "16-17", prize: "Anında paralı asker şif. (10x)", icon: "https://m2-helper.com/resources/events/tombola/Sofortige_Söldnerheilung.png" },
{ pointRange: "14-15", prize: "Beceri kitabı seçimi.", icon: "https://m2-helper.com/resources/events/tombola/fertigkeitsbuch.png" },
{ pointRange: "12-13", prize: "3* Aksesuar Demirci ru.", icon: "https://m2-helper.com/resources/events/tombola/Schmiederune.png" },
{ pointRange: "10-11", prize: "Ünvan: Güneş Tapınıcısı", icon: "https://m2-helper.com/resources/events/tombola/titel.webp" },
{ pointRange: "8-9", prize: "Buz Tılsımı", icon: "https://m2-helper.com/resources/events/tombola/Eistalisman.png" },
{ pointRange: "6-7", prize: "Şimşek Tılsımı", icon: "https://m2-helper.com/resources/events/tombola/Blitztalisman.png" },
{ pointRange: "4-5", prize: "Hakim Kuşağı (asil)", icon: "https://m2-helper.com/resources/events/tombola/Herrscherband_(edel).png" },
{ pointRange: "3", prize: "Ritüel Taşı", icon: "https://m2-helper.com/resources/events/tombola/Ritualstein.png" }
],
tombolaWinter2025SymbolsTable: [
{ name: "15 Puan", points: 15, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_15_Punkte.jpg", probability: "7.3%" },
{ name: "10 Puan", points: 10, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_10_Punkte.jpg", probability: "14.5%" },
{ name: "7 Puan", points: 7, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_7_Punkte.jpg", probability: "37.1%" },
{ name: "5 Puan", points: 5, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_5_Punkte.jpg", probability: "21.6%" },
{ name: "3 Puan", points: 3, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_3_Punkte.jpg", probability: "13.5%" },
{ name: "1 Puan", points: 1, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_1_Punkt.jpg", probability: "6%" }
],
tombolaWinter2025PrizeDistributionTitle: "Ödül Dağılımı:",
tombolaWinter2025PrizeTable: [
{ pointRange: "43-45", prize: "Ejderha Alevi", icon: "https://m2-helper.com/resources/events/tombola/Flamme_des_Drachen.png" },
{ pointRange: "40-42", prize: "Karanlık Tılsım", icon: "https://m2-helper.com/resources/events/tombola/Dunkler_Talisman.png" },
{ pointRange: "37-39", prize: "Şimşek Tılsımı", icon: "https://m2-helper.com/resources/events/tombola/Blitztalisman.png" },
{ pointRange: "35-36", prize: "Ateş Tılsımı", icon: "https://m2-helper.com/resources/events/tombola/Feuertalisman.png" },
{ pointRange: "32-34", prize: "Ay Taşı", icon: "https://m2-helper.com/resources/events/tombola/Mondstein.png" },
{ pointRange: "30-31", prize: "Toprak Tılsımı", icon: "https://m2-helper.com/resources/events/tombola/Erdtalisman.png" },
{ pointRange: "28-29", prize: "Uyanış Sandığı", icon: "https://m2-helper.com/resources/events/tombola/Truhe_der_Erweckung.png" },
{ pointRange: "26-27", prize: "Ruh Taşı", icon: "https://m2-helper.com/resources/events/tombola/Seelenstein.png" },
{ pointRange: "24-25", prize: "Parıltılı istiridye", icon: "https://m2-helper.com/resources/events/tombola/Schimmernde_Muschel.png" },
{ pointRange: "22-23", prize: "Platin hazine kutusu", icon: "https://m2-helper.com/resources/events/tombola/Platin-Schatzkiste.png" },
{ pointRange: "20-21", prize: "İstiridye (10x)", icon: "https://m2-helper.com/resources/events/tombola/Muschel.png" },
{ pointRange: "18-19", prize: "Platin Hazine Anahtarı", icon: "https://m2-helper.com/resources/events/tombola/Platin-Schatzschlüssel.png" },
{ pointRange: "16-17", prize: "Anında paralı asker şif. (10x)", icon: "https://m2-helper.com/resources/events/tombola/Sofortige_Söldnerheilung.png" },
{ pointRange: "14-15", prize: "Beceri kitabı seçimi.", icon: "https://m2-helper.com/resources/events/tombola/fertigkeitsbuch.png" },
{ pointRange: "12-13", prize: "Gaya Spor Çantası (500)", icon: "https://m2-helper.com/resources/events/tombola/Gaya-Beutel.png" },
{ pointRange: "10-11", prize: "Ünvan: Kutup Yıldızı", icon: "https://m2-helper.com/resources/events/tombola/titel.webp" },
{ pointRange: "8-9", prize: "Rüzgar Tılsımı", icon: "https://m2-helper.com/resources/events/tombola/Windtalisman.png" },
{ pointRange: "6-7", prize: "Buz Tılsımı", icon: "https://m2-helper.com/resources/events/tombola/Eistalisman.png" },
{ pointRange: "4-5", prize: "Hakim Kuşağı (asil)", icon: "https://m2-helper.com/resources/events/tombola/Herrscherband_(edel).png" },
{ pointRange: "3", prize: "Ritüel Taşı", icon: "https://m2-helper.com/resources/events/tombola/Ritualstein.png" }
],
tombolaEaster2026SectionTitle: "Treasure-Server Paskalya 2026",
tombolaEaster2026SymbolsTable: [
{ name: "15 Puan", points: 15, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_15_Punkte.jpg", probability: "7.3%" },
{ name: "10 Puan", points: 10, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_10_Punkte.jpg", probability: "14.5%" },
{ name: "7 Puan", points: 7, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_7_Punkte.jpg", probability: "37.1%" },
{ name: "5 Puan", points: 5, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_5_Punkte.jpg", probability: "21.6%" },
{ name: "3 Puan", points: 3, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_3_Punkte.jpg", probability: "13.5%" },
{ name: "1 Puan", points: 1, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_1_Punkt.jpg", probability: "6%" }
],
tombolaEaster2026PrizeDistributionTitle: "Ödül Dağılımı:",
tombolaEaster2026PrizeTable: [
{ pointRange: "43-45", prize: "Ejderha Alevi", icon: "https://m2-helper.com/resources/events/tombola/Flamme_des_Drachen.png" },
{ pointRange: "40-42", prize: "Rüzgar Tılsımı+0", icon: "https://m2-helper.com/resources/events/tombola/Windtalisman.png" },
{ pointRange: "37-39", prize: "Ateş Tılsımı+0", icon: "https://m2-helper.com/resources/events/tombola/Feuertalisman.png" },
{ pointRange: "35-36", prize: "Karanlık Tılsım+0", icon: "https://m2-helper.com/resources/events/tombola/Dunkler_Talisman.png" },
{ pointRange: "32-34", prize: "Ay Taşı", icon: "https://m2-helper.com/resources/events/tombola/Mondstein.png" },
{ pointRange: "30-31", prize: "Toprak Tılsımı+0", icon: "https://m2-helper.com/resources/events/tombola/Erdtalisman.png" },
{ pointRange: "28-29", prize: "Uyanış Sandığı", icon: "https://m2-helper.com/resources/events/tombola/Truhe_der_Erweckung.png" },
{ pointRange: "26-27", prize: "Ruh Taşı", icon: "https://m2-helper.com/resources/events/tombola/Seelenstein.png" },
{ pointRange: "24-25", prize: "Parıltılı istiridye", icon: "https://m2-helper.com/resources/events/tombola/Schimmernde_Muschel.png" },
{ pointRange: "22-23", prize: "Platin Hazine Kutusu", icon: "https://m2-helper.com/resources/events/tombola/Platin-Schatzkiste.png" },
{ pointRange: "20-21", prize: "İstiridye (10x)", icon: "https://m2-helper.com/resources/events/tombola/Muschel.png" },
{ pointRange: "18-19", prize: "Platin Hazine Anahtarı", icon: "https://m2-helper.com/resources/events/tombola/Platin-Schatzschlüssel.png" },
{ pointRange: "16-17", prize: "Anında paralı asker şif. (10x)", icon: "https://m2-helper.com/resources/events/tombola/Sofortige_Söldnerheilung.png" },
{ pointRange: "14-15", prize: "Beceri kitabı seçimi.", icon: "https://m2-helper.com/resources/events/tombola/fertigkeitsbuch.png" },
{ pointRange: "12-13", prize: "Gaya Spor Çantası (100) (720h)", icon: "https://m2-helper.com/resources/events/tombola/Gaya-Beutel.png" },
{ pointRange: "10-11", prize: "Eşya büyüle+", icon: "https://m2-helper.com/resources/events/tombola/Gegenstand_verzaubern+.png" },
{ pointRange: "8-9", prize: "Buz Tılsımı+0", icon: "https://m2-helper.com/resources/events/tombola/Eistalisman.png" },
{ pointRange: "6-7", prize: "Şimşek Tılsımı+0", icon: "https://m2-helper.com/resources/events/tombola/Blitztalisman.png" },
{ pointRange: "4-5", prize: "Hakim Kuşağı (asil)", icon: "https://m2-helper.com/resources/events/tombola/Herrscherband_(edel).png" },
{ pointRange: "1-3", prize: "Ritüel Taşı", icon: "https://m2-helper.com/resources/events/tombola/Ritualstein.png" }
],
tipsTitle: "İpuçları ve Hileler:",
tips: [
"30. seviyede Ork Dişi Biyolog görevini tamamladıysan, her gün bir ücretsiz çekiliş bileti alırsın.",
"Eğer yedi gün üst üste bir bilet satın alırsan, sekizinci günden itibaren ücretsiz bir bilet alırsın. Bu yalnızca 30. seviye Biyolog görevini henüz tamamlamadıysan geçerlidir.",
"Maliyetleri en aza indirmek için her gün bir sonraki günün biletlerini almaya çalış."
],
note: "<strong>Not:</strong> Tombala aracılığıyla çoğu element tılsımı piyasaya girer.",
},
okey: {
title: "Okey Kart Oyunu",
summary:
"Canavarlardan Okey kartları topla, mini oyunu oyna ve değerli sandık ödüllerini kazan.<br><strong>Seviye 70'ten itibaren</strong>",
descTitle: "Açıklama",
desc: 'Event sırasında canavar öldürerek <img src="Events/images/Okey-Kartenset.png" alt="Okey Koleksiyon Kartı" class="inline w-6 h-6 mx-1.5 align-top -mt-0">Okey koleksiyon kartları otomatik olarak event arayüzünde düşer. 24. Okey kartı ile otomatik olarak mini oyuna katılım hakkı veren <img src="Events/images/Okey-Kartenset.png" alt="Okey Kart Seti" class="inline w-6 h-6 mx-1.5 align-top -mt-0">Okey kart seti oluşturulur. Maksimum 999 Okey kart setine sahip olabilirsin.',
gameplayTitle: "Oyun Akışı:",
gameplayDesc: [
"Event arayüzünü aç ve oyunu başlat.",
"Başlangıçta <strong>5 rastgele kart</strong> görünür.",
"Puan almak için 3 kart seçmelisin. Bunlar ya bir <strong>set kombinasyonu</strong> (örn. 7-7-7) ya da bir <strong>dizi</strong> (örn. 6-7-8) oluşturmalı. Diziler aynı renkte veya karışık renkte seçilebilir.",
"İstediğin kadar kartı atabilir ve yenilerini çekebilirsin.",
],
rewardsDesc: [],
rewardsTable: {
versions: [
{
name: "Yaz Versiyonu",
chests: [
{
name: "Bronz Okey Sandığı",
icon: "Events/okey/Bronzene_Okey-Truhe.png",
points: "< 300 Puan",
content: '<table class="w-full"><tr><td><img src="https://m2-helper.com/resources/exp.png" alt="exp" class="inline w-5 h-5 mx-1">EXP (100.000)</td><td class="text-right">10%</td></tr><tr><td><img src="https://m2-helper.com/resources/yang.png" alt="Yang" class="inline w-5 h-5 mx-1">Yang (50.000)</td><td class="text-right">69%</td></tr><tr><td><img src="https://m2-helper.com/resources/yang.png" alt="Yang" class="inline w-5 h-5 mx-1">Yang (100.000)</td><td class="text-right">19%</td></tr><tr><td><img src="Events/images/Okey-Kartenset.png" alt="Okey-Kartenset" class="inline w-5 h-5 mx-1">Okey Kart Seti</td><td class="text-right">2%</td></tr></table>',
},
{
name: "Gümüş Okey Sandığı",
icon: "Events/okey/Silberne_Okey-Truhe.png",
points: "300-399 Puan",
content: '<table class="w-full"><tr><td><img src="https://m2-helper.com/resources/exp.png" alt="exp" class="inline w-5 h-5 mx-1">EXP (500.000)</td><td class="text-right">5%</td></tr><tr><td><img src="https://m2-helper.com/resources/yang.png" alt="Yang" class="inline w-5 h-5 mx-1">Yang (500.000)</td><td class="text-right">15%</td></tr><tr><td><img src="https://m2-helper.com/resources/yang.png" alt="Yang" class="inline w-5 h-5 mx-1">Yang (700.000)</td><td class="text-right">15%</td></tr><tr><td><img src="Events/images/Okey-Kartenset.png" alt="Okey Kart Seti" class="inline w-5 h-5 mx-1">Okey Kart Seti</td><td class="text-right">1%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Blaue_Perle.png" alt="Mavi İnci" class="inline w-5 h-5 mx-1">Mavi İnci</td><td class="text-right">2%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Blutrote_Perle.png" alt="Kan Kırmızısı İnci" class="inline w-5 h-5 mx-1">Kan Kırmızısı İnci</td><td class="text-right">2%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Muschel.png" alt="Midye" class="inline w-5 h-5 mx-1">Midye</td><td class="text-right">10%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Traktat_zur_Fechtkunst.png" alt="Eskrim Risalesi" class="inline w-5 h-5 mx-1">Eskrim Risalesi</td><td class="text-right">5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Affenei.png" alt="Maymun Yumurtası" class="inline w-5 h-5 mx-1">Maymun Yumurtası</td><td class="text-right">3%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Spinnenei_(Item).png" alt="Örümcek Yumurtası" class="inline w-5 h-5 mx-1">Örümcek Yumurtası</td><td class="text-right">3%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Junges_Pet-Buch.png" alt="Genç Pet Kitabı" class="inline w-5 h-5 mx-1">Genç Pet Kitabı</td><td class="text-right">9%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Wildes_Pet-Buch.png" alt="Vahşi Pet Kitabı" class="inline w-5 h-5 mx-1">Vahşi Pet Kitabı</td><td class="text-right">1%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Cor_Draconis_(edel).png" alt="Cor Draconis (asil)" class="inline w-5 h-5 mx-1">Cor Draconis (asil)</td><td class="text-right">8%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Cor_Draconis_(kostbar).png" alt="Cor Draconis (değerli)" class="inline w-5 h-5 mx-1">Cor Draconis (değerli)</td><td class="text-right">5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Elixier_der_Sonne_(K)_B.png" alt="Güneş İksiri (K) B" class="inline w-5 h-5 mx-1">Güneş İksiri (K) B</td><td class="text-right">2%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Elixier_des_Mondes_(K)_B.png" alt="Ay İksiri (K) B" class="inline w-5 h-5 mx-1">Ay İksiri (K) B</td><td class="text-right">2%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Geschwindigkeitstrank_B.png" alt="Hız İksiri B" class="inline w-5 h-5 mx-1">Hız İksiri B</td><td class="text-right">5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Herrscherband_(einfach).png" alt="Hükümdar Bandı (basit)" class="inline w-5 h-5 mx-1">Hükümdar Bandı (basit)</td><td class="text-right">2%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Ring_der_tödlichen_Macht.png" alt="Ölümcül Güç Yüzüğü (7G)" class="inline w-5 h-5 mx-1">Ölümcül Güç Yüzüğü (7G)</td><td class="text-right">1%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Ring_der_Willenskraft.png" alt="İrade Gücü Yüzüğü (7G)" class="inline w-5 h-5 mx-1">İrade Gücü Yüzüğü (7G)</td><td class="text-right">1%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Zen-Bohne.png" alt="Zen Fasulyesi" class="inline w-5 h-5 mx-1">Zen Fasulyesi</td><td class="text-right">3%</td></tr></table>',
},
{
name: "Altın Okey Sandığı",
icon: "Events/okey/Goldene_Okey-Truhe.png",
points: "≥ 400 Puan",
content: '<table class="w-full"><tr><td><img src="https://m2-helper.com/resources/exp.png" alt="exp" class="inline w-5 h-5 mx-1">EXP (700.000)</td><td class="text-right">3%</td></tr><tr><td><img src="https://m2-helper.com/resources/yang.png" alt="Yang" class="inline w-5 h-5 mx-1">Yang (700.000)</td><td class="text-right">3%</td></tr><tr><td><img src="https://m2-helper.com/resources/yang.png" alt="Yang" class="inline w-5 h-5 mx-1">Yang (1.000.000)</td><td class="text-right">3%</td></tr><tr><td><img src="Events/images/Okey-Kartenset.png" alt="Okey Kart Seti" class="inline w-5 h-5 mx-1">Okey Kart Seti</td><td class="text-right">2%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Drachenschuppe.png" alt="Ejder Pulcuğu" class="inline w-5 h-5 mx-1">Ejder Pulcuğu</td><td class="text-right">5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Quarzsand.png" alt="Kuvars Kumu" class="inline w-5 h-5 mx-1">Kuvars Kumu</td><td class="text-right">2%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Roter_Höllenquarz.png" alt="Alev Taşı" class="inline w-5 h-5 mx-1">Alev Taşı</td><td class="text-right">5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Traktat_zur_Fechtkunst.png" alt="Eskrim Risalesi" class="inline w-5 h-5 mx-1">Eskrim Risalesi</td><td class="text-right">5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Weiße_Perle.png" alt="Beyaz İnci" class="inline w-5 h-5 mx-1">Beyaz İnci</td><td class="text-right">2%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Ei_des_Nemere.png" alt="Nemere Yumurtası" class="inline w-5 h-5 mx-1">Nemere Yumurtası</td><td class="text-right">2%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Ei_des_Razador.png" alt="Razador Yumurtası" class="inline w-5 h-5 mx-1">Razador Yumurtası</td><td class="text-right">2%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Junges_Pet-Buch.png" alt="Genç Pet Kitabı" class="inline w-5 h-5 mx-1">Genç Pet Kitabı</td><td class="text-right">10%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Wildes_Pet-Buch.png" alt="Vahşi Pet Kitabı" class="inline w-5 h-5 mx-1">Vahşi Pet Kitabı</td><td class="text-right">8%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Cor_Draconis_(kostbar).png" alt="Cor Draconis (değerli)" class="inline w-5 h-5 mx-1">Cor Draconis (değerli)</td><td class="text-right">10%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Cor_Draconis_(mystisch).png" alt="Cor Draconis (mistik)" class="inline w-5 h-5 mx-1">Cor Draconis (mistik)</td><td class="text-right">7%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Elixier_der_Sonne_(K)_B.png" alt="Güneş İksiri (K) B" class="inline w-5 h-5 mx-1">Güneş İksiri (K) B</td><td class="text-right">3%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Elixier_des_Mondes_(K)_B.png" alt="Ay İksiri (K) B" class="inline w-5 h-5 mx-1">Ay İksiri (K) B</td><td class="text-right">3%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Geschwindigkeitstrank_B.png" alt="Hız İksiri B (30dk) (3x)" class="inline w-5 h-5 mx-1">3 Hız İksiri</td><td class="text-right">5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Königsband_(edel).png" alt="Kral Kuşağı (asil)" class="inline w-5 h-5 mx-1">Kral Kuşağı (asil)</td><td class="text-right">2%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Ring_der_tödlichen_Macht.png" alt="Ölümcül Güç Yüzüğü (7G)" class="inline w-5 h-5 mx-1">Ölümcül Güç Yüzüğü (7G)</td><td class="text-right">2%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Ring_der_Willenskraft.png" alt="İrade Gücü Yüzüğü (7G)" class="inline w-5 h-5 mx-1">İrade Gücü Yüzüğü (7G)</td><td class="text-right">2%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Schlachtenlöwe.png" alt="Savaş Aslanı (20G)" class="inline w-5 h-5 mx-1">Savaş Aslanı (20G)</td><td class="text-right">1%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Seelenstein.png" alt="Ruh Taşı" class="inline w-5 h-5 mx-1">Ruh Taşı</td><td class="text-right">5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Stein_der_Hast.png" alt="Acele Taşı +4" class="inline w-5 h-5 mx-1">Acele Taşı +4</td><td class="text-right">5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Zen-Bohne.png" alt="Zen Fasulyesi" class="inline w-5 h-5 mx-1">Zen Fasulyesi</td><td class="text-right">3%</td></tr></table>',
},
],
},
{
name: "Kış Versiyonu",
chests: [
{
name: "Bronz Okey Tatil Sandığı",
icon: "Events/okey/Bronzene_Okey-Truhe.png",
points: "< 300 Puan",
content: '<table class="w-full"><tr><td><img src="https://m2-helper.com/resources/exp.png" alt="exp" class="inline w-5 h-5 mx-1">EXP (100.000)</td><td class="text-right">10%</td></tr><tr><td><img src="https://m2-helper.com/resources/yang.png" alt="Yang" class="inline w-5 h-5 mx-1">Yang (50.000)</td><td class="text-right">69%</td></tr><tr><td><img src="https://m2-helper.com/resources/yang.png" alt="Yang" class="inline w-5 h-5 mx-1">Yang (100.000)</td><td class="text-right">19%</td></tr><tr><td><img src="Events/images/Okey-Kartenset.png" alt="Okey Kart Seti" class="inline w-5 h-5 mx-1">Okey Kart Seti</td><td class="text-right">2%</td></tr></table>',
},
{
name: "Gümüş Okey Tatil Sandığı",
icon: "Events/okey/Silberne_Okey-Truhe.png",
points: "300-399 Puan",
content: '<table class="w-full"><tr><td><img src="https://m2-helper.com/resources/exp.png" alt="exp" class="inline w-5 h-5 mx-1">EXP (100.000)</td><td class="text-right">17.9%</td></tr><tr><td><img src="https://m2-helper.com/resources/yang.png" alt="Yang" class="inline w-5 h-5 mx-1">Yang (100.000)</td><td class="text-right">17.9%</td></tr><tr><td><img src="https://m2-helper.com/resources/yang.png" alt="Yang" class="inline w-5 h-5 mx-1">Yang (300.000)</td><td class="text-right">9.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/yang.png" alt="Yang" class="inline w-5 h-5 mx-1">Yang (500.000)</td><td class="text-right">7.0%</td></tr><tr><td><img src="Events/images/Okey-Kartenset.png" alt="Okey Kart Seti" class="inline w-5 h-5 mx-1">Okey Kart Seti</td><td class="text-right">1.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Blaue_Perle.png" alt="Mavi İnci" class="inline w-5 h-5 mx-1">Mavi İnci</td><td class="text-right">2.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Blutrote_Perle.png" alt="Kan Kırmızısı İnci" class="inline w-5 h-5 mx-1">Kan Kırmızısı İnci</td><td class="text-right">2.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Affenei.png" alt="Maymun Yumurtası" class="inline w-5 h-5 mx-1">Maymun Yumurtası</td><td class="text-right">2.5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Spinnenei_(Item).png" alt="Örümcek Yumurtası" class="inline w-5 h-5 mx-1">Örümcek Yumurtası</td><td class="text-right">2.5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Ei_des_Nemere.png" alt="Nemere Yumurtası" class="inline w-5 h-5 mx-1">Nemere Yumurtası</td><td class="text-right">1.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Ei_des_Razador.png" alt="Razador Yumurtası" class="inline w-5 h-5 mx-1">Razador Yumurtası</td><td class="text-right">1.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Büchertruhe_Boost.png" alt="Kitap Sandığı Güçlendirme" class="inline w-5 h-5 mx-1">Kitap Sandığı Güçlendirme</td><td class="text-right">1.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Büchertruhe_Konter.png" alt="Kitap Sandığı Karşı" class="inline w-5 h-5 mx-1">Kitap Sandığı Karşı</td><td class="text-right">1.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Cor_Draconis_(normal).png" alt="Cor Draconis (normal)" class="inline w-5 h-5 mx-1">Cor Draconis (normal)</td><td class="text-right">5.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Cor_Draconis_(edel).png" alt="Cor Draconis (asil)" class="inline w-5 h-5 mx-1">Cor Draconis (asil)</td><td class="text-right">2.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Gegenstand_verstärken_B.png" alt="Eşya Güçlendirme B" class="inline w-5 h-5 mx-1">Eşya Güçlendirme</td><td class="text-right">2.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Gegenstand_verzaubern_B.png" alt="Eşya Büyüleme B" class="inline w-5 h-5 mx-1">Eşya Büyüleme B</td><td class="text-right">1.5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Gegenstand_verzaubern+.png" alt="Eşya Büyüleme+" class="inline w-5 h-5 mx-1">Eşya Büyüleme+</td><td class="text-right">0.5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Herrscherband_(einfach).png" alt="Hükümdar Bandı (basit)" class="inline w-5 h-5 mx-1">Hükümdar Bandı (basit)</td><td class="text-right">2.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Magisches_Stein.png" alt="Büyülü Taş" class="inline w-5 h-5 mx-1">Büyülü Taş</td><td class="text-right">3.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Pers._Premiumladen.png" alt="Kişisel Premium Mağaza (1G)" class="inline w-5 h-5 mx-1">Kişisel Premium Mağaza (1G)</td><td class="text-right">0.5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Schmuckstein.png" alt="Mücevher Taşı (60x)" class="inline w-5 h-5 mx-1">Mücevher Taşı (60x)</td><td class="text-right">5.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Segensschriftrolle_B.png" alt="Kutsama Parşömeni B" class="inline w-5 h-5 mx-1">Kutsama Parşömeni B</td><td class="text-right">3.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Teleportationsring.png" alt="Işınlanma Yüzüğü" class="inline w-5 h-5 mx-1">Işınlanma Yüzüğü</td><td class="text-right">3.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Trank_der_Weisheit.png" alt="Bilgelik İksiri (3s)" class="inline w-5 h-5 mx-1">Bilgelik İksiri (3s)</td><td class="text-right">5.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Windschuhe.png" alt="Rüzgar Ayakkabıları (1G)" class="inline w-5 h-5 mx-1">Rüzgar Ayakkabıları (1G)</td><td class="text-right">2.0%</td></tr></table>',
},
{
name: "Altın Okey Tatil Sandığı",
icon: "Events/okey/Goldene_Okey-Truhe.png",
points: "≥ 400 Puan",
content: '<table class="w-full"><tr><td><img src="Events/images/Okey-Kartenset.png" alt="Okey Kart Seti" class="inline w-5 h-5 mx-1">Okey Kart Seti</td><td class="text-right">4.8%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Achat.png" alt="Akik" class="inline w-5 h-5 mx-1">Akik</td><td class="text-right">2.9%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Titandioxid.png" alt="Titanyum Dioksit" class="inline w-5 h-5 mx-1">Titanyum Dioksit</td><td class="text-right">2.9%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Mondstein.png" alt="Ay Taşı" class="inline w-5 h-5 mx-1">Ay Taşı</td><td class="text-right">1.5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Weiße_Perle.png" alt="Beyaz İnci" class="inline w-5 h-5 mx-1">Beyaz İnci</td><td class="text-right">0.5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Blaues_Drachenei.png" alt="Mavi Ejder Yumurtası (7G)" class="inline w-5 h-5 mx-1">Mavi Ejder Yumurtası</td><td class="text-right">1.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Ei_des_Nemere.png" alt="Nemere Yumurtası (7G)" class="inline w-5 h-5 mx-1">Nemere Yumurtası</td><td class="text-right">1.9%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Ei_des_Razador.png" alt="Razador Yumurtası (7G)" class="inline w-5 h-5 mx-1">Razador Yumurtası</td><td class="text-right">1.9%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Büchertruhe_Boost.png" alt="Kitap Sandığı Güçlendirme" class="inline w-5 h-5 mx-1">Kitap Sandığı Güçlendirme</td><td class="text-right">4.8%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Büchertruhe_Konter.png" alt="Kitap Sandığı Karşı" class="inline w-5 h-5 mx-1">Kitap Sandığı Karşı</td><td class="text-right">5.3%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Cor_Draconis_(kostbar).png" alt="Cor Draconis (değerli)" class="inline w-5 h-5 mx-1">Cor Draconis (değerli)</td><td class="text-right">7.8%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Cor_Draconis_(mystisch).png" alt="Cor Draconis (mistik)" class="inline w-5 h-5 mx-1">Cor Draconis (mistik)</td><td class="text-right">7.8%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Gegenstand_verstärken_B.png" alt="Eşya Güçlendirme (B)" class="inline w-5 h-5 mx-1">Eşya Güçlendirme</td><td class="text-right">4.8%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Gegenstand_verzaubern_B.png" alt="Eşya Büyüleme B" class="inline w-5 h-5 mx-1">Eşya Büyüleme B</td><td class="text-right">4.4%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Gegenstand_verzaubern+.png" alt="Eşya Büyüleme+" class="inline w-5 h-5 mx-1">Eşya Büyüleme+</td><td class="text-right">3.4%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Herrscherband_(edel).png" alt="Hükümdar Bandı (asil)" class="inline w-5 h-5 mx-1">Hükümdar Bandı (asil)</td><td class="text-right">3.9%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Magisches_Stein.png" alt="Büyülü Taş" class="inline w-5 h-5 mx-1">Büyülü Taş</td><td class="text-right">5.8%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Manni.png" alt="Manni (30G)" class="inline w-5 h-5 mx-1">Manni (30G)</td><td class="text-right">2.9%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Manu.png" alt="Manu (30G)" class="inline w-5 h-5 mx-1">Manu (30G)</td><td class="text-right">2.9%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Pers._Premiumladen.png" alt="Kişisel Premium Mağaza (1G)" class="inline w-5 h-5 mx-1">Kişisel Premium Mağaza (1G)</td><td class="text-right">3.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Schmuckstein.png" alt="Mücevher Taşı (200x)" class="inline w-5 h-5 mx-1">Mücevher Taşı (200x)</td><td class="text-right">2.4%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Seelenstein+.png" alt="Ruh Taşı+" class="inline w-5 h-5 mx-1">Ruh Taşı+</td><td class="text-right">3.4%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Segensschriftrolle_B.png" alt="Kutsama Parşömeni B" class="inline w-5 h-5 mx-1">Kutsama Parşömeni B</td><td class="text-right">4.8%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Teleportationsring.png" alt="Işınlanma Yüzüğü" class="inline w-5 h-5 mx-1">Işınlanma Yüzüğü</td><td class="text-right">4.8%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Trank_der_Weisheit.png" alt="Bilgelik İksiri (3s)" class="inline w-5 h-5 mx-1">Bilgelik İksiri (3s)</td><td class="text-right">6.8%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Windschuhe.png" alt="Rüzgar Ayakkabıları (1G)" class="inline w-5 h-5 mx-1">Rüzgar Ayakkabıları (1G)</td><td class="text-right">3.4%</td></tr></table>',
},
],
},
],
note: ""
},
tipsTitle: "Oyun Kuralları ve İpuçları:",
tips: [
"Aynı renkteki diziler daha fazla puan kazandırır.",
"Karışık renkler çok daha az puan kazandırır, bu yüzden sadece son çare olarak kullan.",
'Hangi kart kombinasyonlarının oyunda olduğunu hatırla - <a href="#okey-helper" class="okey-helper-link" style="text-decoration:underline;" onclick="document.getElementById(\'okey-helper\').scrollIntoView({ behavior: \'smooth\' }); return false;">Okey Yardımcısı</a>nı kullan.',
"Eğer 3x 6-7-8 aynı renkte verirsen, kesinlikle gümüş sandık alırsın."
],
gameplayImage: {
src: "https://m2-helper.com/resources/events/okey/Okey_Card_Game_Field.png",
alt: "Okey Kart Oyunu Alanı",
caption: "Okey Kart Oyunu Alanı"
},
okeyHelperTitle: "Okey Yardımcısı:",
okeyHelperDesc: "Kartlara tıklayarak \"oynandı\" olarak işaretle (gri görünecekler):",
okeyResetText: "Tüm kartları sıfırla",
rewardsTitle: "Ödüller:",
note: "<strong>Ödüller:</strong> Yang, event eşyaları ve değerli içerikli özel Okey kutuları!",
},
king: {
title: "Kralı Yakala",
summary:
"Canavarlardan kral kartları topla ve değerli sandık ödülleri için kart oyununu oyna.<br><strong>Seviye 30'dan itibaren</strong>",
descTitle: "Açıklama",
desc: "Kralı Yakala, seviye 30'dan itibaren oynanabilen bir kart oyunu etkinliğidir. Etkinlik süresince canavarlar<img src=\"https://m2-helper.com/resources/events/koenig/Königskarte.png\" alt=\"Kral Kartı\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\"><strong>Kral Kartları</strong> düşürür. 25 Kral Kartı otomatik olarak bir<img src=\"Events/images/Königsdeck.png\" alt=\"Kral Destesi\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\"><strong>Kral Destesi</strong>'ne dönüştürülür. Bir Kral Destesi ile Kralı Yakala masasında bir tur oynanabilir.<br><br><strong>Önemli:</strong> Kartlar ve desteler etkinlik bitiminde silinir. Etkinlik düşüşleri etkinlik bitiminden bir gün önce sona erer. Harita değişikliği veya ışınlanma mevcut oyunu iptal eder!",
mechanicsTitle: "<span style='font-size: 1.25em; font-weight: bold;'>Oyun Mekaniği:</span>",
mechanicsDesc: "Oyun alanı <strong>25 kapalı karttan</strong> oluşur. Oyuncu alan kartlarını açmak için <strong>12 kendi kartı</strong> alır. Her zaman <strong>en zayıf kartla</strong> başlarsın \u2013 bir ok hangi kartın seçilebileceğini gösterir. Aynı değerdeki kartlar otomatik olarak sonraki turlara aktarılır. \u00c7evredeki kartlar kısa bir s\u00fcre yanarsa, aralarında gizli bir 5 vardır.<br>Kazançlarını toplayabilmek i\u00e7in en az <strong>10 puan</strong> elde etmelisin.<br><br>",
comparisonTitle: "Karşılaştırma Mekaniği:",
comparisonRules: [
"<strong>Kartın daha yüksek</strong> \u2192 Açılan kartın puanını kazan, <strong>başka bir kart aç</strong>",
"<strong>Kartlar eşit</strong> \u2192 Puan kazan, tur biter \u2013 yığından yeni kartla devam et",
"<strong>Kartın daha düşük</strong> \u2192 Puan yok, tur biter \u2013 yığından yeni kartla devam et",
],
specialRuleTitle: "Özel Kural Kart 5:",
specialRuleDesc: "Kart 5\u2019in <strong>başka bir kapalı 5\u2019in hemen yanında</strong> olması durumunda kartın yakalanır. Turun biter ve puan alamazsın.",
kingCardRuleTitle: "Kral Kartı:",
kingCardRuleDesc: "Kral <strong>sadece</strong> Kralı yakalayabilir. Oyun bu turdan sonra biter.",
pointsTitle: "Puan Sistemi:",
pointsTableHeaderCard: "Kart",
pointsTableHeaderField: "Alan",
pointsTableHeaderOwn: "Kendi",
pointsTableHeaderPoints: "Puan",
pointsTable: [
{ icon: "Events/images/Schnapp_den_König_Karte_1.png", field: 7, own: 5, points: "+10" },
{ icon: "Events/images/Schnapp_den_König_Karte_2.png", field: 4, own: 2, points: "+20" },
{ icon: "Events/images/Schnapp_den_König_Karte_3.png", field: 5, own: 2, points: "+30" },
{ icon: "Events/images/Schnapp_den_König_Karte_4.png", field: 5, own: 1, points: "+40" },
{ icon: "Events/images/Schnapp_den_König_Karte_5.png", field: 3, own: 1, points: "+50" },
{ icon: "Events/images/Schnapp_den_König_Karte_K.png", field: 1, own: 1, points: "+100" },
],
pointsBonusRow: "Tam Sıra",
pointsBonusValue: "+10",
rewardTiersTitle: "Oyun Sonrası Ödüller:",
rewardTiers: [
{ threshold: "< 400 Puan", reward: "Bronz Kral Ganimeti", icon: "https://m2-helper.com/resources/events/koenig/Bronzene_Königsbeute.png" },
{ threshold: "400 – 549 Puan", reward: "Gümüş Kral Ganimeti", icon: "https://m2-helper.com/resources/events/koenig/Silberne_Königsbeute.png" },
{ threshold: "≥ 550 Puan", reward: "Altın Kral Ganimeti", icon: "https://m2-helper.com/resources/events/koenig/Goldene_Königsbeute.png" },
],
rewardsTitle: "Ödüller:",
rewardsTable: [
{
category: "Bronz Kral Ganimeti",
icon: "https://m2-helper.com/resources/events/koenig/Bronzene_Königsbeute.png",
contents: [
{ name: "EXP (100.000)", icon: "https://m2-helper.com/resources/exp.png", probability: "10%" },
{ name: "Yang (50.000)", icon: "https://m2-helper.com/resources/yang.png", probability: "68%" },
{ name: "Yang (100.000)", icon: "https://m2-helper.com/resources/yang.png", probability: "19%" },
{ name: "Kral Destesi", icon: "Events/images/Königsdeck.png", probability: "3%" }
]
},
{
category: "Gümüş Kral Ganimeti",
icon: "https://m2-helper.com/resources/events/koenig/Silberne_Königsbeute.png",
contents: [
{ name: "EXP (100.000)", icon: "https://m2-helper.com/resources/exp.png", probability: "13.72%" },
{ name: "Yang (100.000)", icon: "https://m2-helper.com/resources/yang.png", probability: "13.72%" },
{ name: "Yang (300.000)", icon: "https://m2-helper.com/resources/yang.png", probability: "11.22%" },
{ name: "Yang (500.000)", icon: "https://m2-helper.com/resources/yang.png", probability: "9.98%" },
{ name: "Kral Destesi", icon: "Events/images/Königsdeck.png", probability: "2.00%" },
{ name: "Maymun Yumurtası", icon: "https://m2-helper.com/resources/events/okey/Affenei.png", probability: "3.74%" },
{ name: "Örümcek Yumurtası", icon: "https://m2-helper.com/resources/events/okey/Spinnenei_(Item).png", probability: "2.99%" },
{ name: "Razadör Yumurtası", icon: "https://m2-helper.com/resources/events/okey/Ei_des_Razador.png", probability: "1.37%" },
{ name: "Nemere Yumurtası", icon: "https://m2-helper.com/resources/events/okey/Ei_des_Nemere.png", probability: "1.37%" },
{ name: "Kitap Sandığ Güçlendirme", icon: "https://m2-helper.com/resources/events/okey/Büchertruhe_Boost.png", probability: "2.99%" },
{ name: "Kitap Sandığı Misilleme", icon: "https://m2-helper.com/resources/events/okey/Büchertruhe_Konter.png", probability: "2.99%" },
{ name: "Cor Draconis (normal)", icon: "https://m2-helper.com/resources/events/okey/Cor_Draconis_(normal).png", probability: "2.37%" },
{ name: "Cor Draconis (soylu)", icon: "https://m2-helper.com/resources/events/okey/Cor_Draconis_(edel).png", probability: "2.24%" },
{ name: "Hakim Kuşağı (Basit)", icon: "https://m2-helper.com/resources/events/okey/Herrscherband_(einfach).png", probability: "2.24%" },
{ name: "Mavi İnci", icon: "https://m2-helper.com/resources/events/okey/Blaue_Perle.png", probability: "2.24%" },
{ name: "Kankırmızı İnci", icon: "https://m2-helper.com/resources/events/okey/Blutrote_Perle.png", probability: "2.24%" },
{ name: "Bilgelik İksiri", icon: "https://m2-helper.com/resources/events/okey/Trank_der_Weisheit.png", probability: "1.62%" },
{ name: "Yükseliş İksiri", icon: "https://m2-helper.com/resources/events/yutnori/Trank_der_Weisheit.png", probability: "1.37%" },
{ name: "Zihin Taşı Destesi (5x)", icon: "https://m2-helper.com/resources/events/yutnori/Geiststeinbündel.png", probability: "1.62%" },
{ name: "Havai Fişek Topaçı (10x)", icon: "https://m2-helper.com/resources/events/yutnori/Feuerwerkskreisel.png", probability: "1.62%" },
{ name: "Çin Havai Fişekleri (10x)", icon: "https://m2-helper.com/resources/events/yutnori/Chinesisches_Feuerwerk.png", probability: "1.62%" },
{ name: "Kutsama Parşömeni", icon: "https://m2-helper.com/resources/events/okey/Segensschriftrolle_B.png", probability: "1.62%" },
{ name: "Işınlanma Yüzüğü", icon: "https://m2-helper.com/resources/events/okey/Teleportationsring.png", probability: "1.62%" },
{ name: "Rüzgarın Ayakkabıları (1G)", icon: "https://m2-helper.com/resources/events/okey/Windschuhe.png", probability: "1.62%" },
{ name: "Şeftali Çiçeği Şarabı+ (10x)", icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Pfirsichblütenwein_B.png", probability: "1.37%" },
{ name: "Protein Lokması", icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Protein-Happen.png", probability: "1.25%" },
{ name: "Büyülü Metal", icon: "https://m2-helper.com/resources/events/okey/Magisches_Stein.png", probability: "1.25%" },
{ name: "Hız İksiri (10x)", icon: "https://m2-helper.com/resources/events/okey/Geschwindigkeitstrank_B.png", probability: "1.12%" },
{ name: "Saldırı İksiri +15 (5x)", icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Trank_des_Angriffs_+10_B.png", probability: "1.12%" },
{ name: "Soğutma İksiri (5x)", icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Trank_der_Hast_B.png", probability: "1.12%" },
{ name: "Yeşil Ejderha Fasulyesi", icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Grüne_Drachenbohne.png", probability: "1.12%" },
{ name: "Arttırma Kağıdı(m)", icon: "https://m2-helper.com/resources/events/okey/Gegenstand_verstärken_B.png", probability: "0.62%" },
{ name: "Nesnesyi efsunla(m)", icon: "https://m2-helper.com/resources/events/okey/Gegenstand_verzaubern_B.png", probability: "0.62%" },
{ name: "Efsun Nesnesi+", icon: "https://m2-helper.com/resources/events/okey/Gegenstand_verzaubern+.png", probability: "0.25%" }
]
},
{
category: "Altın Kral Ganimeti",
icon: "https://m2-helper.com/resources/events/koenig/Goldene_Königsbeute.png",
contents: [
{ name: "Kral Destesi", icon: "Events/images/Königsdeck.png", probability: "7.46%" },
{ name: "Kutsama Parşömeni", icon: "https://m2-helper.com/resources/events/okey/Segensschriftrolle_B.png", probability: "7.46%" },
{ name: "Razadör Yumurtası", icon: "https://m2-helper.com/resources/events/okey/Ei_des_Razador.png", probability: "3.31%" },
{ name: "Nemere Yumurtası", icon: "https://m2-helper.com/resources/events/okey/Ei_des_Nemere.png", probability: "3.31%" },
{ name: "Zihin Taşı Destesi (10x)", icon: "https://m2-helper.com/resources/events/yutnori/Geiststeinbündel.png", probability: "7.46%" },
{ name: "Havai Fişek Topaçı (20x)", icon: "https://m2-helper.com/resources/events/yutnori/Feuerwerkskreisel.png", probability: "5.80%" },
{ name: "Çin Havai Fişekleri (20x)", icon: "https://m2-helper.com/resources/events/yutnori/Chinesisches_Feuerwerk.png", probability: "5.80%" },
{ name: "Bilgelik İksiri", icon: "https://m2-helper.com/resources/events/okey/Trank_der_Weisheit.png", probability: "2.49%" },
{ name: "Ruh Taşı", icon: "https://m2-helper.com/resources/events/okey/Seelenstein.png", probability: "4.14%" },
{ name: "Ayışığı Define Sandığı", icon: "https://m2-helper.com/resources/events/yutnori/Mondlicht-Schatztruhe.png", probability: "2.49%" },
{ name: "Demirci Taşı", icon: "https://m2-helper.com/resources/events/yutnori/Stein_des_Schmieds.png", probability: "1.99%" },
{ name: "Büyülü Metal", icon: "https://m2-helper.com/resources/events/okey/Magisches_Stein.png", probability: "1.82%" },
{ name: "Beyaz İnci", icon: "https://m2-helper.com/resources/events/okey/Weiße_Perle.png", probability: "1.66%" },
{ name: "Cor Draconis (destansı)", icon: "https://m2-helper.com/resources/events/okey/Cor_Draconis_(mystisch).png", probability: "2.49%" },
{ name: "Cor Draconis (değerli)", icon: "https://m2-helper.com/resources/events/okey/Cor_Draconis_(kostbar).png", probability: "2.49%" },
{ name: "Ejderha Sandığı", icon: "https://m2-helper.com/resources/guides/alchemy/Drachentruhe.png", probability: "2.98%" },
{ name: "Yeşil Ejderha Fasulyesi", icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Grüne_Drachenbohne.png", probability: "1.99%" },
{ name: "Şeftali Çiçeği Şarabı XL (5x)", icon: "https://m2-helper.com/resources/events/yutnori/Pfirsichblütenwein_XL.png", probability: "1.82%" },
{ name: "Geçiş Bileti (3x)", icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Passierschein.png", probability: "1.99%" },
{ name: "Ay Özütü (K)", icon: "https://m2-helper.com/resources/events/okey/Elixier_des_Mondes_(K)_B.png", probability: "2.49%" },
{ name: "Güneş Özütü (K)", icon: "https://m2-helper.com/resources/events/okey/Elixier_der_Sonne_(K)_B.png", probability: "2.49%" },
{ name: "Şeftali Çiçeği Şarabı+ (10x)", icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Pfirsichblütenwein_B.png", probability: "2.82%" },
{ name: "Hız İksiri (5x)", icon: "https://m2-helper.com/resources/events/okey/Geschwindigkeitstrank_B.png", probability: "2.82%" },
{ name: "Saldırı İksiri +15 (5x)", icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Trank_des_Angriffs_+10_B.png", probability: "2.82%" },
{ name: "Soğutma İksiri (5x)", icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Trank_der_Hast_B.png", probability: "2.82%" },
{ name: "Yırtıcı Aslan (20G)", icon: "https://m2-helper.com/resources/events/okey/Schlachtenlöwe.png", probability: "1.82%" },
{ name: "Vahşi Kaplan (20G)", icon: "https://m2-helper.com/resources/events/yutnori/Sturmtiger.png", probability: "1.82%" },
{ name: "Kahraman Madalyası (1G)", icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Heldenmedaille.png", probability: "1.82%" },
{ name: "Pet Kitabı Sandığı", icon: "https://m2-helper.com/resources/events/yutnori/Pet-Bücherkiste.png", probability: "1.82%" },
{ name: "Titandiyoksit", icon: "https://m2-helper.com/resources/events/okey/Titandioxid.png", probability: "1.49%" },
{ name: "Akik", icon: "https://m2-helper.com/resources/events/okey/Achat.png", probability: "1.49%" },
{ name: "Ay Taşı", icon: "https://m2-helper.com/resources/events/okey/Mondstein.png", probability: "1.49%" },
{ name: "Arttırma Kağıdı(m)", icon: "https://m2-helper.com/resources/events/okey/Gegenstand_verstärken_B.png", probability: "1.16%" },
{ name: "Nesnesyi efsunla(m)", icon: "https://m2-helper.com/resources/events/okey/Gegenstand_verzaubern_B.png", probability: "1.16%" },
{ name: "Efsun Nesnesi+", icon: "https://m2-helper.com/resources/events/okey/Gegenstand_verzaubern+.png", probability: "0.75%" }
]
},
],
imageSrc: "https://m2-helper.com/resources/events/koenig/Schnapp_den_König_UI.png",
imageAlt: "Kralı Yakala Oyun Alanı",
imageCaption: "Kralı Yakala Oyun Alanı",
tipsTitle: "İpuçları ve Püf Noktaları:",
tips: [
"Özel kural için açılmış 5'li kartların konumlarını hatırla.",
"+10 puan bonusu için tam sıraları açmaya çalış.",
"Puanları en üst düzeye çıkarmak için bilinen kartları 4'ünle topla.",
],
note: "<strong>Not:</strong> Harita değişikliği veya ışınlanma mevcut oyunu iptal eder!",
helperTitle: "Kralı Yakala Helper",
helperDesc: "Giriş yapmak için oyun alanının altındaki kartları veya klavyeni kullan. <svg class='inline-mouse-icon' viewBox='0 0 20 28' width='16' height='22'><path d='M3 10 C3 5 5 2 10 2 C15 2 17 5 17 10 L17 20 C17 24 15 26 10 26 C5 26 3 24 3 20Z' fill='none' stroke='currentColor' stroke-width='1.5'/><line x1='10' y1='2' x2='10' y2='14' stroke='currentColor' stroke-width='1.5'/><path d='M3.5 10 C3.5 5.5 5.5 2.5 10 2.5 L10 14 L3.5 14Z' fill='#FECE58' opacity='0.7'/></svg> = Yakında 5 yok, <svg class='inline-mouse-icon' viewBox='0 0 20 28' width='16' height='22'><path d='M3 10 C3 5 5 2 10 2 C15 2 17 5 17 10 L17 20 C17 24 15 26 10 26 C5 26 3 24 3 20Z' fill='none' stroke='currentColor' stroke-width='1.5'/><line x1='10' y1='2' x2='10' y2='14' stroke='currentColor' stroke-width='1.5'/><path d='M16.5 10 C16.5 5.5 14.5 2.5 10 2.5 L10 14 L16.5 14Z' fill='#FECE58' opacity='0.7'/></svg> = Yakında 5 var",
resetText: "Sıfırla",
helperCredit: "Olasılık hesaplaması ArcMeurtrier'in yardımıyla",
},
seer: {
title: "Kahin Yarışması",
summary:
"Bilgisayara karşı kart oyunu oyna, kahin paraları kazan ve onları sandıklar için takas et.<br><strong>Seviye 30'dan itibaren</strong>",
descTitle: "Açıklama",
desc: "Metin2 hakkındaki bilgini test et! Kahin sana oyun, tarihi ve sırları hakkında zor sorular sorar. Harika ödüller için doğru cevapla.",
tipsTitle: "İpuçları ve Püf Noktaları:",
tips: [
"Farklı mapları ve canavarlarını bil",
"NPC isimlerini ve işlevlerini öğren",
"Önemli sayıları hatırla (seviye gereksinimleri, maliyetler vb.)",
"Zor sorular için interneti kullan (izin verilirse)",
],
note: "<strong>İpucu:</strong> Ne kadar çok soruyu doğru cevaplayırsan, ödüller o kadar değerli olur!",
},
yutnori: {
title: "Yutnori",
summary:
"Huş ağacı kütüklerini topla ve çeşitli ödüller için bilgisayara karşı oyna.<br><strong>Seviye 30'dan itibaren</strong>",
descTitle: "Açıklama",
desc: "Event sırasında canavar öldürerek<img src=\"https://m2-helper.com/resources/events/yutnori/Birkenstamm.png\" alt=\"Huş Ağacı Kütüğü\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\">Huş Ağacı Kütüklerini toplarsın, bunlar otomatik olarak event envanterine girer. 28 Huş Ağacı Kütüğü topladığında, bunlar bir<img src=\"Events/images/Yutnori-Spielbrett.png\" alt=\"Yutnori Oyun Tahtası\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\">Yutnori Oyun Tahtasına dönüşür. Maksimum 999 Yutnori Oyun Tahtası sahip olabilirsin.<br>Bir Yutnori Oyun Tahtası ile Yutnori mini oyununu başlatabilir ve bilgisayara karşı klasik bir masa oyununda yarışabilirsin.<br>Alternatif olarak, bir Yutnori Oyun Tahtasını bir<span class=\"treasure-ticket-highlight\"><img src=\"Events/images/Yutnori-Geheimnis.png\" alt=\"Yutnori Sırrı\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\"><strong>Yutnori Sırrı</strong><div class=\"tooltip\">30 dakika boyunca sana şunları verir:<br>20% EXP<br>5% Eşya Düşürme<br>10% Canavarlar Karşısında Güçlü</div></span> karşı takas edebilirsin. Bu oyundaki <strong>en iyi event eşyalarından</strong> biridir, çünkü event süresiyle sınırlı değildir.",
gameplayTitle: "Oynanış:",
gameplayDesc: [
"Event UI'ını aç ve oyunu başlat.",
"İlk atış kimin başlayacağına karar verir - düşük atış başlar. Her turda iki oyun taşından birini, atılan Yut çubuklarına göre hareket ettirebilirsin.<br>Her zaman 4 Yut çubuğu atılır. <strong>Düz tarafların sayısı</strong> ilerleyebileceğin alan sayısını belirler. 250 puanla başlarsın ve her hamle için 10 puan kaybedersin. Bilgisayarın bir taşını alırsan 10 puan kazanırsın. Bilgisayar senin taşlarından birini alırsa 10 puan kaybedersin. Bir taş hedefe ulaştığında 10 puan kazanırsın, bilgisayarın taşı hedefe ulaşırsa 10 puan kaybedersin.",
"Oyun 20 hamle içinde bitmezse, oyuncu kaybeder."
],
probabilityTitle: "Olasılıklar ve Hamleler:",
probabilityDesc: "Olasılık seçiminde karşılık gelen atışı seçerek belirli bir atışın olasılığını artırabilirsin. Yut veya Mo attığında, başka bir atış hakkı alırsın.",
probabilityTable: [
{ throw: "Do", moves: "1 ileri" },
{ throw: "Ge", moves: "2 ileri" },
{ throw: "Geol", moves: "3 ileri" },
{ throw: "Yut", moves: "4 ileri" },
{ throw: "Mo", moves: "5 ileri" },
{ throw: "Back-do", moves: "1 geri" }
],
probabilityTableHeaders: {
throws: "Atış",
moves: "Hamleler",
rowLabel: "Hamleler"
},
gameplayImage: {
src: "Events/images/Yut_Nori_Game.png",
alt: "Yutnori Oyun Alanı",
caption: "Yutnori Oyun Alanı"
},
goalTitle: "Hedef:",
goalDesc: "Oyunu kazanmak için iki oyun taşını ilk sen hedefe ulaştır. Puan durumuna göre farklı sandık ödülleri alırsın.",
tipsTitle: "İpuçları & Hileler:",
tips: [
"Belirli hamleler için şansını artırmak üzere olasılık seçimini kullan.",
"Bir oyun taşı başlangıç/hedeften sadece bir alan uzaktaysa, Back-do kullanmaya çalış.",
"Kısayol almak için tahtanın köşelerini kullan.",
"Hamle tasarrufu yapmak için iki oyun taşını birleştirmen önerilir.",
],
note: "<strong>Not:</strong> Yeterli<img src=\"Events/images/Yutnori-Geheimnis.png\" alt=\"Yutnori Sırrı\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\">Yutnori Sırrı takas ettiğinden emin ol!",
rewardsTitle: "Ödüller:",
rewardsTable: {
versions: [
{
name: "",
chests: [
{
name: "Bronz Yutnori Paketi",
icon: "https://m2-helper.com/resources/events/yutnori/Bronzenes_Yutnori-Bündel.png",
points: "< 150 Puan",
contents: [
{
name: "EXP (100.000)",
icon: "https://m2-helper.com/resources/exp.png",
probability: "10%"
},
{
name: "Yang (50.000)",
icon: "https://m2-helper.com/resources/yang.png",
probability: "70%"
},
{
name: "Yang (100.000)",
icon: "https://m2-helper.com/resources/yang.png",
probability: "18%"
},
{
name: "Yutnori Oyun Tahtası",
icon: "Events/images/Yutnori-Spielbrett.png",
probability: "2%"
}
]
},
{
name: "Gümüş Yutnori Kupası",
icon: "https://m2-helper.com/resources/events/yutnori/Silberne_Yutnori-Trophäe.png",
points: "150-219 Puan",
contents: [
{
name: "EXP (100.000)",
icon: "https://m2-helper.com/resources/exp.png",
probability: "14.4%"
},
{
name: "Yang (100.000)",
icon: "https://m2-helper.com/resources/yang.png",
probability: "14.4%"
},
{
name: "Yang (300.000)",
icon: "https://m2-helper.com/resources/yang.png",
probability: "7.2%"
},
{
name: "Yang (500.000)",
icon: "https://m2-helper.com/resources/yang.png",
probability: "5.0%"
},
{
name: "Yutnori Oyun Tahtası",
icon: "Events/images/Yutnori-Spielbrett.png",
probability: "0.7%"
},
{
name: "Mavi İnci",
icon: "https://m2-helper.com/resources/events/yutnori/Blaue_Perle.png",
probability: "1.4%"
},
{
name: "Kan Kırmızısı İnci",
icon: "https://m2-helper.com/resources/events/yutnori/Blutrote_Perle.png",
probability: "1.4%"
},
{
name: "Maymun Yumurtası (7g)",
icon: "https://m2-helper.com/resources/events/yutnori/Affenei.png",
probability: "1.4%"
},
{
name: "Örümcek Yumurtası (7g)",
icon: "https://m2-helper.com/resources/events/yutnori/Spinnenei_(Item).png",
probability: "1.4%"
},
{
name: "Razador'un Yumurtası (7g)",
icon: "https://m2-helper.com/resources/events/yutnori/Ei_des_Razador.png",
probability: "0.7%"
},
{
name: "Nemere'nin Yumurtası (7g)",
icon: "https://m2-helper.com/resources/events/yutnori/Ei_des_Nemere.png",
probability: "0.7%"
},
{
name: "Kitap Sandığı Güçlendirici",
icon: "https://m2-helper.com/resources/events/yutnori/Büchertruhe_Boost.png",
probability: "0.7%"
},
{
name: "Kitap Sandığı Karşılayıcı",
icon: "https://m2-helper.com/resources/events/yutnori/Büchertruhe_Konter.png",
probability: "0.7%"
},
{
name: "Cor Draconis (normal)",
icon: "https://m2-helper.com/resources/events/yutnori/Cor_Draconis_(Roh).png",
probability: "3.6%"
},
{
name: "Cor Draconis (asil)",
icon: "https://m2-helper.com/resources/events/yutnori/Cor_Draconis_(edel).png",
probability: "1.4%"
},
{
name: "Eşya güçlendirme(m)",
icon: "https://m2-helper.com/resources/events/yutnori/Gegenstand_verstärken_B.png",
probability: "1.4%"
},
{
name: "Eşya büyüleme(m)",
icon: "https://m2-helper.com/resources/events/yutnori/Gegenstand_verzaubern_B.png",
probability: "1.4%"
},
{
name: "Eşya büyüleme+",
icon: "https://m2-helper.com/resources/events/yutnori/Gegenstand_verzaubern+.png",
probability: "0.7%"
},
{
name: "Kutsama Parşömeni",
icon: "https://m2-helper.com/resources/events/yutnori/Segensschriftrolle.png",
probability: "2.2%"
},
{
name: "Sihirli Taş",
icon: "https://m2-helper.com/resources/events/yutnori/Magischer_Stein.png",
probability: "2.2%"
},
{
name: "Işınlanma Yüzüğü",
icon: "https://m2-helper.com/resources/events/yutnori/Teleportationsring.png",
probability: "2.2%"
},
{
name: "Bilgelik İksiri (3sa)",
icon: "https://m2-helper.com/resources/events/yutnori/Trank_der_Weisheit.png",
probability: "3.6%"
},
{
name: "Yükseliş İksiri (3sa)",
icon: "https://m2-helper.com/resources/events/yutnori/Trank_der_Weisheit.png",
probability: "3.6%"
},
{
name: "Rüzgar Ayakkabıları (1g)",
icon: "https://m2-helper.com/resources/events/yutnori/Windschuhe.png",
probability: "1.4%"
},
{
name: "Hükümdar Şeridi (basit)",
icon: "https://m2-helper.com/resources/events/yutnori/Herrscherband_(einfach).png",
probability: "1.4%"
},
{
name: "Havai Fişek Çarkı (10dk) (10x)",
icon: "https://m2-helper.com/resources/events/yutnori/Feuerwerkskreisel.png",
probability: "2.2%"
},
{
name: "Çin Havai Fişeği (10dk) (10x)",
icon: "https://m2-helper.com/resources/events/yutnori/Chinesisches_Feuerwerk.png",
probability: "2.2%"
},
{
name: "Saplama Kılıcı+0",
icon: "https://m2-helper.com/resources/events/yutnori/Stichschwert.png",
probability: "2.9%"
},
{
name: "İblis Bıçağı+0",
icon: "https://m2-helper.com/resources/events/yutnori/Dämonenklinge.png",
probability: "2.9%"
},
{
name: "Siam Bıçağı+0",
icon: "https://m2-helper.com/resources/events/yutnori/Siamesenmesser.png",
probability: "2.9%"
},
{
name: "Mavi Ejder Yayı+0",
icon: "https://m2-helper.com/resources/events/yutnori/Blaudrachenbogen.png",
probability: "2.9%"
},
{
name: "Yarı İnsan Kılıcı+0",
icon: "https://m2-helper.com/resources/events/yutnori/Halbmenschklinge.png",
probability: "2.9%"
},
{
name: "Şahin Pençesi+0",
icon: "https://m2-helper.com/resources/events/yutnori/Habichtskralle.png",
probability: "2.9%"
},
{
name: "Esrime Yelpazesi+0",
icon: "https://m2-helper.com/resources/events/yutnori/Ekstasefächer.png",
probability: "2.9%"
}
]
},
{
name: "Altın Yutnori Kupası",
icon: "https://m2-helper.com/resources/events/yutnori/Goldene_Yutnori-Trophäe.png",
points: "≥ 220 Puan",
contents: [
{
name: "Yutnori Oyun Tahtası",
icon: "Events/images/Yutnori-Spielbrett.png",
probability: "3.8%"
},
{
name: "Beyaz İnci",
icon: "https://m2-helper.com/resources/events/yutnori/Weiße_Perle.png",
probability: "0.8%"
},
{
name: "Akik",
icon: "https://m2-helper.com/resources/events/yutnori/Achat.png",
probability: "2.3%"
},
{
name: "Titanyum Dioksit",
icon: "https://m2-helper.com/resources/events/yutnori/Titandioxid.png",
probability: "2.3%"
},
{
name: "Ay Taşı",
icon: "https://m2-helper.com/resources/events/yutnori/Mondstein.png",
probability: "1.5%"
},
{
name: "Razador'un Yumurtası (7g)",
icon: "https://m2-helper.com/resources/events/yutnori/Ei_des_Razador.png",
probability: "1.5%"
},
{
name: "Nemere'nin Yumurtası (7g)",
icon: "https://m2-helper.com/resources/events/yutnori/Ei_des_Nemere.png",
probability: "1.5%"
},
{
name: "Cor Draconis (mistik)",
icon: "https://m2-helper.com/resources/events/yutnori/Cor_Draconis_(mystisch).png",
probability: "5.4%"
},
{
name: "Cor Draconis (değerli)",
icon: "https://m2-helper.com/resources/events/yutnori/Cor_Draconis_(kostbar).png",
probability: "6.2%"
},
{
name: "Eşya güçlendirme(m)",
icon: "https://m2-helper.com/resources/events/yutnori/Gegenstand_verstärken_B.png",
probability: "3.8%"
},
{
name: "Eşya büyüleme(m)",
icon: "https://m2-helper.com/resources/events/yutnori/Gegenstand_verzaubern_B.png",
probability: "3.8%"
},
{
name: "Eşya büyüleme+",
icon: "https://m2-helper.com/resources/events/yutnori/Gegenstand_verzaubern+.png",
probability: "3.1%"
},
{
name: "Kutsama Parşömeni",
icon: "https://m2-helper.com/resources/events/yutnori/Segensschriftrolle.png",
probability: "3.8%"
},
{
name: "Demirci Taşı",
icon: "https://m2-helper.com/resources/events/yutnori/Stein_des_Schmieds.png",
probability: "2.3%"
},
{
name: "Sihirli Taş",
icon: "https://m2-helper.com/resources/events/yutnori/Magischer_Stein.png",
probability: "4.6%"
},
{
name: "Hui (30g)",
icon: "https://m2-helper.com/resources/events/yutnori/Hui.png",
probability: "1.5%"
},
{
name: "Lav Cehennem Kertenkelesi (30g)",
icon: "https://m2-helper.com/resources/events/yutnori/Lavahöllenechse.png",
probability: "2.3%"
},
{
name: "Güç Şekeri",
icon: "https://m2-helper.com/resources/events/yutnori/Halloween-Lolli.png",
probability: "1.5%"
},
{
name: "Kaplan Kemiği Küpesi (20sa)",
icon: "https://m2-helper.com/resources/events/yutnori/Tigerknochenohrring.png",
probability: "0.8%"
},
{
name: "Ejder Kemiği Küpesi (20sa)",
icon: "https://m2-helper.com/resources/events/yutnori/Drachenknochenohrring.png",
probability: "0.8%"
},
{
name: "Işınlanma Yüzüğü",
icon: "https://m2-helper.com/resources/events/yutnori/Teleportationsring.png",
probability: "3.8%"
},
{
name: "Rüzgar Ayakkabıları (1g)",
icon: "https://m2-helper.com/resources/events/yutnori/Windschuhe.png",
probability: "2.3%"
},
{
name: "Yaşam Kutsaması (10x)",
icon: "https://m2-helper.com/resources/events/yutnori/Segen_des_Lebens.png",
probability: "2.3%"
},
{
name: "Mücevher Taşı (200x)",
icon: "https://m2-helper.com/resources/events/yutnori/Schmuckstein.png",
probability: "2.3%"
},
{
name: "Ruh Taşı Demeti (10x)",
icon: "https://m2-helper.com/resources/events/yutnori/Geiststeinbündel.png",
probability: "3.1%"
},
{
name: "Bilgelik İksiri (3sa)",
icon: "https://m2-helper.com/resources/events/yutnori/Trank_der_Weisheit.png",
probability: "6.2%"
},
{
name: "Havai Fişek Çarkı (10dk) (20x)",
icon: "https://m2-helper.com/resources/events/yutnori/Feuerwerkskreisel.png",
probability: "2.3%"
},
{
name: "Çin Havai Fişeği (10dk) (20x)",
icon: "https://m2-helper.com/resources/events/yutnori/Chinesisches_Feuerwerk.png",
probability: "2.3%"
},
{
name: "Saplama Kılıcı+0",
icon: "https://m2-helper.com/resources/events/yutnori/Stichschwert.png",
probability: "3.1%"
},
{
name: "İblis Bıçağı+0",
icon: "https://m2-helper.com/resources/events/yutnori/Dämonenklinge.png",
probability: "3.1%"
},
{
name: "Siam Bıçağı+0",
icon: "https://m2-helper.com/resources/events/yutnori/Siamesenmesser.png",
probability: "3.1%"
},
{
name: "Mavi Ejder Yayı+0",
icon: "https://m2-helper.com/resources/events/yutnori/Blaudrachenbogen.png",
probability: "3.1%"
},
{
name: "Yarı İnsan Kılıcı+0",
icon: "https://m2-helper.com/resources/events/yutnori/Halbmenschklinge.png",
probability: "3.1%"
},
{
name: "Şahin Pençesi+0",
icon: "https://m2-helper.com/resources/events/yutnori/Habichtskralle.png",
probability: "3.1%"
},
{
name: "Esrime Yelpazesi+0",
icon: "https://m2-helper.com/resources/events/yutnori/Ekstasefächer.png",
probability: "3.1%"
}
]
}
]
}
]
},
rewardsNote: "Gümüş ve altın Yutnori kupalarından elde edilen bulmaca parçaları yardımıyla çeşitli ganimet kutuları üretebilirsiniz. Diğer şeylerin yanında nadir kostümler ve omuz bandları alma, loot petler için kutular açma veya aranan PvP petleri açma ve element tılsımları elde etme fırsatınız vardır.",
puzzleChests: {
dropdownLabel: "Bulmaca Parçası Sandıkları:",
selectedChestTitle: "Seçili sandık:",
collapsibleLabel: "Ganimet listesini göster",
chests: [
{
id: "halloween-m",
name: "Cadılar Bayramı Sandığı (e)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Halloweenkiste_(m).png",
puzzlePieces: 11,
lootList: [
{
name: "Balkabağı Takım (Bonus) (30g)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Kürbis-Smoking.png",
probability: "8.3%"
},
{
name: "Jack-Balkabağı Takım+ (30g)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Jack-Pumpkin-Anzug.png",
probability: "8.3%"
},
{
name: "Zombi Takım+ (30g)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Zombieanzug.png",
probability: "8.3%"
},
{
name: "Büyücü Takım+ (30g)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Zaubereranzug.png",
probability: "8.3%"
},
{
name: "Ba. Diş Kostüm+ (e) (30g)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Fangzahn-Kostüm_(Kupfer)_(m).png",
probability: "8.3%"
},
{
name: "Ç. Diş Kostüm+ (e) (30g)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Fangzahn-Kostüm_(Stahl)_(m).png",
probability: "8.3%"
},
{
name: "Vampir+ (kırmızı) (30g)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Vampir-Kostüm_(rot)_(m).png",
probability: "8.3%"
},
{
name: "Vampir+ (gri) (30g)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Vampir-Kostüm_(grau)_(m).png",
probability: "8.3%"
},
{
name: "Korku Zırhı+(y) (30g)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Harnisch_des_Horrors_(g)_(m).png",
probability: "8.3%"
},
{
name: "Korku Zırhı+(m) (30g)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Harnisch_des_Horrors_(b)_(m).png",
probability: "8.3%"
},
{
name: "Kahverengi Kurt Giysisi+ (e) (30g)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Braunes_Wolfsgewand_(m).png",
probability: "8.3%"
},
{
name: "Gri Kurt Giysisi+ (e) (30g)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Graues_Wolfsgewand_(m).png",
probability: "8.3%"
}
]
},
{
id: "halloween-w",
name: "Cadılar Bayramı Sandığı (k)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Halloweenkiste_(w).png",
puzzlePieces: 11,
lootList: [
{
name: "Balkabağı Elbise (Bonus) (30g)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Kürbis-Kleid.png",
probability: "8.3%"
},
{
name: "Jack-Balkabağı Elbise+ (30g)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Jack-Pumpkin-Kleid.png",
probability: "8.3%"
},
{
name: "Zombi Elbise+ (30g)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Zombiekleid.png",
probability: "8.3%"
},
{
name: "Cadı Elbise+ (30g)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Hexenkleid.png",
probability: "8.3%"
},
{
name: "Ba. Diş Kostüm+ (k) (30g)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Fangzahn-Kostüm_(Kupfer)_(w).png",
probability: "8.3%"
},
{
name: "Ç. Diş Kostüm+ (k) (30g)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Fangzahn-Kostüm_(Stahl)_(w).png",
probability: "8.3%"
},
{
name: "Vampir+ (kırmızı) (30g)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Vampir-Kostüm_(rot)_(w).png",
probability: "8.3%"
},
{
name: "Vampir+ (gri) (30g)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Vampir-Kostüm_(grau)_(w).png",
probability: "8.3%"
},
{
name: "Korku Zırhı+(y) (30g)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Harnisch_des_Horrors_(g)_(w).png",
probability: "8.3%"
},
{
name: "Korku Zırhı+(m) (30g)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Harnisch_des_Horrors_(b)_(w).png",
probability: "8.3%"
},
{
name: "Kahverengi Kurt Giysisi+ (k) (30g)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Braunes_Wolfsgewand_(w).png",
probability: "8.3%"
},
{
name: "Gri Kurt Giysisi+ (k) (30g)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Graues_Wolfsgewand_(w).png",
probability: "8.3%"
}
]
},
{
id: "halloweenhut-m",
name: "Cadılar Bayramı Şapka Sandığı (e)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Halloweenhutkiste_(m).png",
puzzlePieces: 7,
lootList: [
{
name: "Cadı Şapkası",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Hexenhut.png",
probability: "8.3%"
},
{
name: "Jack-Balkabağı Kafa (e)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Jack-Pumpkin-Kopf_(m)_icon.png",
probability: "8.3%"
},
{
name: "Balkabağı Maskesi",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Jack-Pumpkin-Kopf_(m)_icon.png",
probability: "8.3%"
},
{
name: "Zombi Balkabağı Maskesi",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Zombiekürbismaske.png",
probability: "8.3%"
},
{
name: "Vampir Savaşçı Miğferi (kırmızı)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Vampirkriegerhelm_(rot)_icon.png",
probability: "8.3%"
},
{
name: "Vampir Savaşçı Miğferi (gri)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Vampirkriegerhelm_(gr.)_icon.png",
probability: "8.3%"
},
{
name: "Köpek Dişi Miğfer (Bakır)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Fangzahn-Helm_(Kupfer)_icon.png",
probability: "8.3%"
},
{
name: "Köpek Dişi Miğfer (Çelik)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Fangzahn-Helm_(Stahl)_icon.png",
probability: "8.3%"
},
{
name: "Korku Boynuzları (y) (e)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Hörner_des_Horrors_(g)_(w)_icon.png",
probability: "8.3%"
},
{
name: "Korku Boynuzları (m) (e)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Hörner_des_Horrors_(b)_(w)_icon.png",
probability: "8.3%"
},
{
name: "Kahverengi Kurt Başlığı (e)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Braune_Wolfskappe_(w)_icon.png",
probability: "8.3%"
},
{
name: "Gri Kurt Başlığı (e)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Graue_Wolfskappe_(m)_icon.png",
probability: "8.3%"
}
]
},
{
id: "halloweenhut-w",
name: "Cadılar Bayramı Şapka Sandığı (k)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Halloweenhutkiste_(w).png",
puzzlePieces: 7,
lootList: [
{
name: "Cadı Şapkası",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Hexenhut.png",
probability: "8.3%"
},
{
name: "Jack-Balkabağı Kafa (k)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Jack-Pumpkin-Kopf_(m)_icon.png",
probability: "8.3%"
},
{
name: "Balkabağı Maskesi",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Jack-Pumpkin-Kopf_(m)_icon.png",
probability: "8.3%"
},
{
name: "Zombi Balkabağı Maskesi",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Zombiekürbismaske.png",
probability: "8.3%"
},
{
name: "Vampir Savaşçı Miğferi (kırmızı) (k)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Vampirkriegerhelm_(rot)_icon.png",
probability: "8.3%"
},
{
name: "Vampir Savaşçı Miğferi (gri) (k)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Vampirkriegerhelm_(gr.)_icon.png",
probability: "8.3%"
},
{
name: "Köpek Dişi Miğfer (Bakır) (k)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Fangzahn-Helm_(Kupfer)_icon.png",
probability: "8.3%"
},
{
name: "Köpek Dişi Miğfer (Çelik) (k)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Fangzahn-Helm_(Stahl)_icon.png",
probability: "8.3%"
},
{
name: "Korku Boynuzları (y) (k)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Hörner_des_Horrors_(g)_(w)_icon.png",
probability: "8.3%"
},
{
name: "Korku Boynuzları (m) (k)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Hörner_des_Horrors_(b)_(w)_icon.png",
probability: "8.3%"
},
{
name: "Kahverengi Kurt Başlığı (k)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Braune_Wolfskappe_(w)_icon.png",
probability: "8.3%"
},
{
name: "Gri Kurt Başlığı (k)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Graue_Wolfskappe_(m)_icon.png",
probability: "8.3%"
}
]
},
{
id: "gruselpet",
name: "Korkunç Pet Sandığı",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Gruselpet-Kiste.png",
puzzlePieces: 11,
lootList: [
{
name: "Boney (30g)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Boney.png",
probability: "8.3%"
},
{
name: "Yeşim Anka (30g)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Jadephönix.png",
probability: "8.3%"
},
{
name: "Küçük Süpürgeci (30g)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Kleiner_Feger.png",
probability: "8.3%"
},
{
name: "Balkabağı Kafa (30g)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Kürbisköpfchen.png",
probability: "8.3%"
},
{
name: "Bruce (Ganimet) (30g)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Bruce.png",
probability: "8.3%"
},
{
name: "Wayne (Ganimet) (30g)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Wayne.png",
probability: "8.3%"
},
{
name: "Bayan Jiangshi+ (30g)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Frau-Jiangshi.png",
probability: "8.3%"
},
{
name: "Bay Jiangshi+ (30g)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Herr-Jiangshi.png",
probability: "8.3%"
},
{
name: "Hui (30g)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Hui.png",
probability: "8.3%"
},
{
name: "Buh (30g)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Buh.png",
probability: "8.3%"
},
{
name: "Astrabell (30g)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Astrabell.png",
probability: "8.3%"
},
{
name: "Helexna (30g)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Helexna.png",
probability: "8.3%"
}
]
},
{
id: "gruselmount",
name: "Korkunç Binek Sandığı",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Gruselmount-Kiste.png",
puzzlePieces: 7,
lootList: [
{
name: "Mor Equus (30g)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Equus_Purpur.png",
probability: "14.3%"
},
{
name: "Nirvana Ejderi (30g)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Nirwana-Drache.png",
probability: "14.3%"
},
{
name: "Samsara Ejderi (30g)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Samsara-Drache.png",
probability: "14.3%"
},
{
name: "Lav Cehennem Kertenkelesi (30g)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Lavahöllenechse.png",
probability: "14.3%"
},
{
name: "Buz Cehennem Kertenkelesi (30g)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Eishöllenechse.png",
probability: "14.3%"
},
{
name: "Zerberus (altın) (30g)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Zerberus_(gold).png",
probability: "14.3%"
},
{
name: "Zerberus (gümüş) (30g)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Zerberus_(silber).png",
probability: "14.3%"
}
]
},
{
id: "schmuckschatulle",
name: "Mücevher Kutusu",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Schmuckschatulle.png",
puzzlePieces: 29,
lootList: [
{
name: "Güç Şekeri (3g)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Lolli_der_Kraft.png",
probability: "20.0%"
},
{
name: "Güç Şekeri (7g)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Lolli_der_Kraft.png",
probability: "1.7%"
},
{
name: "Kuvvet Şekeri",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Halloween-Lolli.png",
probability: "1.7%"
},
{
name: "Büyü Şekeri",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Lolli_der_Magie.png",
probability: "1.7%"
},
{
name: "İrade Yüzüğü",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Ring_der_Willenskraft.png",
probability: "3.3%"
},
{
name: "Ölümcül Güç Yüzüğü",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Ring_der_tödlichen_Macht.png",
probability: "3.3%"
},
{
name: "Hilal Yüzük",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Halbmondring.png",
probability: "1.7%"
},
{
name: "Neşe Yüzüğü",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Ring_der_Freude.png",
probability: "6.7%"
},
{
name: "Sonsuz Aşk Muskası",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Amulett_der_ewigen_Liebe.png",
probability: "6.7%"
},
{
name: "Çikolata Muska",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Schoko-Amulett.png",
probability: "1.7%"
},
{
name: "Nazar Muska",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Nazar-Amulett.png",
probability: "6.7%"
},
{
name: "Koruyucu Muska",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Amulett_der_Wächter.png",
probability: "1.7%"
},
{
name: "Kahraman Madalyası (1g)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Heldenmedaille.png",
probability: "10.0%"
},
{
name: "Yükseliş İksiri (3saat)",
icon: "https://m2-helper.com/resources/events/yutnori/Trank_der_Weisheit.png",
probability: "13.3%"
},
{
name: "Bilgelik İksiri (3saat)",
icon: "https://m2-helper.com/resources/events/yutnori/Trank_der_Weisheit.png",
probability: "20.0%"
}
]
},
{
id: "petkiste",
name: "Pet Sandığı",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Petkiste.png",
puzzlePieces: 15,
lootList: [
{
name: "Maymun Yumurtası",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Affenei.png",
probability: "50.0%"
},
{
name: "Örümcek Yumurtası",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Spinnenei_(Item).png",
probability: "25.0%"
},
{
name: "Nemere'nin Yumurtası",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Ei_des_Nemere.png",
probability: "8.3%"
},
{
name: "Razador'un Yumurtası",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Ei_des_Razador.png",
probability: "7.8%"
},
{
name: "Bebek Baashido'nun Yumurtası",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Baby-Baashidos_Ei.png",
probability: "4.2%"
},
{
name: "Azrael'in Yumurtası",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Azraelchens_Ei.png",
probability: "2.1%"
},
{
name: "Küçük Cellat'ın Yumurtası",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Moppelhenkerchen-Ei.png",
probability: "2.0%"
},
{
name: "Kırmızı Ejder Yumurtası",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Rotes_Drachenei.png",
probability: "0.4%"
},
{
name: "Mavi Ejder Yumurtası",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Blaues_Drachenei.png",
probability: "0.08%"
},
{
name: "Nessie'nin Yumurtası",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Nessie-Ei.png",
probability: "0.08%"
}
]
},
{
id: "baenderbox",
name: "Şerit Kutusu",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Bänderbox.png",
puzzlePieces: 9,
lootList: [
{
name: "Hükümdar Şeridi (Basit)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Herrscherband_(einfach).png",
probability: "6.8%"
},
{
name: "Hükümdar Şeridi (İnce)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Herrscherband_(fein).png",
probability: "0.6%"
},
{
name: "Hükümdar Şeridi (Asil)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Herrscherband_(edel).png",
probability: "0.1%"
},
{
name: "Usta Şeridi (Basit)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Meisterband_(einfach).png",
probability: "6.8%"
},
{
name: "Usta Şeridi (İnce)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Meisterband_(fein).png",
probability: "0.6%"
},
{
name: "Usta Şeridi (Asil)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Meisterband_(edel).png",
probability: "0.1%"
},
{
name: "Prens Şeridi (Basit)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Fürstenband_(einfach).png",
probability: "6.8%"
},
{
name: "Prens Şeridi (İnce)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Fürstenband_(fein).png",
probability: "0.6%"
},
{
name: "Prens Şeridi (Asil)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Fürstenband_(edel).png",
probability: "0.1%"
},
{
name: "Kral Şeridi (Basit)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Königsband_(einfach).png",
probability: "6.8%"
},
{
name: "Kral Şeridi (İnce)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Königsband_(fein).png",
probability: "0.6%"
},
{
name: "Kral Şeridi (Asil)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Königsband_(edel).png",
probability: "0.1%"
},
{
name: "Zi'nin Şeridi (Basit)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Zi_(einfach).png",
probability: "5.6%"
},
{
name: "Zi'nin Şeridi (İnce)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Zi_(fein).png",
probability: "0.2%"
},
{
name: "Chou'nun Şeridi (Basit)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Chou_(einfach).png",
probability: "5.6%"
},
{
name: "Chou'nun Şeridi (İnce)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Chou_(fein).png",
probability: "0.2%"
},
{
name: "Yin'in Şeridi (Basit)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Yin_(einfach).png",
probability: "5.6%"
},
{
name: "Yin'in Şeridi (İnce)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Yin_(fein).png",
probability: "0.2%"
},
{
name: "Mao'nun Şeridi (Basit)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_der_Mao_(einfach).png",
probability: "5.6%"
},
{
name: "Mao'nun Şeridi (İnce)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_der_Mao_(fein).png",
probability: "0.2%"
},
{
name: "Chen'in Şeridi (Basit)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Chen_(einfach).png",
probability: "5.6%"
},
{
name: "Chen'in Şeridi (İnce)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Chen_(fein).png",
probability: "0.2%"
},
{
name: "Si'nin Şeridi (Basit)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_der_Si_(einfach).png",
probability: "5.6%"
},
{
name: "Si'nin Şeridi (İnce)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_der_Si_(fein).png",
probability: "0.2%"
},
{
name: "Wu'nun Şeridi (Basit)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Wu_(einfach).png",
probability: "5.6%"
},
{
name: "Wu'nun Şeridi (İnce)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Wu_(fein).png",
probability: "0.2%"
},
{
name: "Wei'nin Şeridi (Basit)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Wei_(einfach).png",
probability: "5.6%"
},
{
name: "Wei'nin Şeridi (İnce)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Wei_(fein).png",
probability: "0.2%"
},
{
name: "Shen'in Şeridi (Basit)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Shen_(einfach).png",
probability: "5.6%"
},
{
name: "Shen'in Şeridi (İnce)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Shen_(fein).png",
probability: "0.2%"
},
{
name: "Yu'nun Şeridi (Basit)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Yu_(einfach).png",
probability: "5.6%"
},
{
name: "Yu'nun Şeridi (İnce)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Yu_(fein).png",
probability: "0.2%"
},
{
name: "Xu'nun Şeridi (Basit)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Xu_(einfach).png",
probability: "5.6%"
},
{
name: "Xu'nun Şeridi (İnce)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Xu_(fein).png",
probability: "0.2%"
},
{
name: "Hai'nin Şeridi (Basit)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Hai_(einfach).png",
probability: "5.6%"
},
{
name: "Hai'nin Şeridi (İnce)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Hai_(fein).png",
probability: "0.2%"
}
]
},
{
id: "ornamentkiste",
name: "Süs Sandığı",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Ornamentkiste.png",
puzzlePieces: 33,
lootList: [
{
name: "Ateş Talismanı+0",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Feuertalisman.png",
probability: "0.7%"
},
{
name: "Buz Talismanı+0",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Eistalisman.png",
probability: "0.7%"
},
{
name: "Toprak Talismanı+0",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Erdtalisman.png",
probability: "0.7%"
},
{
name: "Karanlık Talisman+0",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Dunkler_Talisman.png",
probability: "0.7%"
},
{
name: "Rüzgar Talismanı+0",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Windtalisman.png",
probability: "0.7%"
},
{
name: "şimşek Talismanı+0",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Blitztalisman.png",
probability: "0.7%"
},
{
name: "Kırmızı Zodiakschatulle (50x)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Rote_Zodiakschatulle.png",
probability: "25.7%"
},
{
name: "Mavi Zodiakschatulle (50x)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Blaue_Zodiakschatulle.png",
probability: "33.1%"
},
{
name: "Element Çiçeği (50x)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Elementblüte.png",
probability: "22.0%"
},
{
name: "Bekci Signum (3saat)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Signum_der_Wächter.png",
probability: "7.4%"
},
{
name: "Küre Pergament",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Sphärenpergament_(h).png",
probability: "7.4%"
}
]
},
{
id: "ultimate-pet-book",
name: "Nihai Pet Kitap Sandığı",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Pet-Buch-Kiste.png",
puzzlePieces: 14,
lootList: [
{
name: "Direnç (Savaşçı)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "2.8%"
},
{
name: "Direnç (Sura)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "2.8%"
},
{
name: "Direnç (Ninja)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "2.8%"
},
{
name: "Direnç (Şaman)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "2.8%"
},
{
name: "Direnç (Lykaner)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "2.8%"
},
{
name: "Berserker Kitabı",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "9.3%"
},
{
name: "Büyü Kırma Kitabı",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "9.3%"
},
{
name: "Hızlandırma Kitabı",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "0.9%"
},
{
name: "Delme Kitabı",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "4.7%"
},
{
name: "Yenileme Kitabı",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-blau.png",
probability: "3.7%"
},
{
name: "Vampir Kitabı",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "9.3%"
},
{
name: "Hayalet Kitabı",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "14.0%"
},
{
name: "Engel Kitabı",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "0.9%"
},
{
name: "Ayna Kitabı",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "0.9%"
},
{
name: "Yang Düşürme Kitabı",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "9.3%"
},
{
name: "Menzil Kitabı",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "14.0%"
},
{
name: "Yenilmezlik Kitabı",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-blau.png",
probability: "1.4%"
},
{
name: "İyileştirme Kitabı",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-blau.png",
probability: "1.4%"
},
{
name: "Demirci Kitabı",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "0.9%"
},
{
name: "Canavar Avcısı Kitabı",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "0.9%"
},
{
name: "Keskin Göz Kitabı",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "0.9%"
},
{
name: "Hayat Çekme Kitabı",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "0.9%"
},
{
name: "Hafif Kitabı",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-blau.png",
probability: "0.9%"
},
{
name: "Pet Büyüleme",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Pet_verzaubern.png",
probability: "0.9%"
},
{
name: "Pet Reverti",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Pet_Reverti.png",
probability: "0.9%"
},
{
name: "Pet Revertus",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Pet_Revertus.png",
probability: "0.9%"
}
]
},
{
id: "risserzahn-plus",
name: "Yırtıcı Diş Sandığı+",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Risserzahnkiste+.png",
puzzlePieces: 25,
lootList: [
{
name: "Seçtiğin silah skinını içerir:",
isDescription: true
},
{
name: "Yırtıcı Diş Kılıcı",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Risserzahn-Klinge.png"
},
{
name: "Yırtıcı Diş Hançeri",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Risserzahn-Dolch.png"
},
{
name: "Yırtıcı Diş Yayı",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Risserzahn-Bogen.png"
},
{
name: "Yırtıcı Diş Pençeleri",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Risserzahn-Krallen.png"
},
{
name: "Yırtıcı Diş Yelpaçesi",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Risserzahn-Fächer.png"
},
{
name: "Yırtıcı Diş Çanı",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Risserzahn-Glocke.png"
},
{
name: "Yırtıcı Diş Glefı",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Risserzahn-Glefe.png"
}
]
},
{
id: "cor-draconis",
name: "Cor Draconis Sandığı",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Cor_Draconis-Kiste.png",
puzzlePieces: 55,
lootList: [
{
name: "Cor Draconis (Ham)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Cor_Draconis_(Roh).png",
probability: "36.3%"
},
{
name: "Cor Draconis (Normal)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Cor_Draconis_(Roh).png",
probability: "12.1%"
},
{
name: "Cor Draconis (Asil)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Cor_Draconis_(edel).png",
probability: "7.3%"
},
{
name: "Cor Draconis (Değerli)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Cor_Draconis_(kostbar).png",
probability: "4.0%"
},
{
name: "Cor Draconis (Gizemli)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Cor_Draconis_(mystisch).png",
probability: "2.0%"
},
{
name: "Yeşil Ejder Fasulyesi",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Grüne_Drachenbohne.png",
probability: "28.2%"
},
{
name: "Mavi Ejder Fasulyesi",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Blaue_Drachenbohne.png",
probability: "6.0%"
},
{
name: "Pembe Ejder Fasulyesi",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Rosa_Drachenbohne.png",
probability: "4.0%"
}
]
},
{
id: "gayakiste",
name: "Gaya Sandığı",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Gayakiste.png",
puzzlePieces: 7,
lootList: [
{
name: "Her zaman şu eşyaları içerir:",
isDescription: true
},
{
name: "Mücevher Taşı (1200x)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Schmuckstein.png",
probability: "100%"
},
{
name: "Ruh Taşı Deste (10x)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Geiststeinbündel.png",
probability: "100%"
},
{
name: "Gaya Ticareti Sıfırla",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Gayahandel_zurücksetzen.png",
probability: "100%"
},
{
name: "Gaya Tacır Genişletmesi",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Gayahandelerweiterung.png",
probability: "100%"
}
]
},
{
id: "mysterien",
name: "Gizem Sandığı",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Kiste_der_Mysterien.png",
puzzlePieces: 11,
lootList: [
{
name: "Beyaz İnci",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Weiße_Perle.png",
probability: "6.5%"
},
{
name: "Mavi İnci",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Blaue_Perle.png",
probability: "13.1%"
},
{
name: "Kan Kırmızısı İnci",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Blutrote_Perle.png",
probability: "18.3%"
},
{
name: "Titandioksit",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Titandioxid.png",
probability: "0.1%"
},
{
name: "Akik",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Achat.png",
probability: "0.3%"
},
{
name: "Ay Taşı",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Mondstein.png",
probability: "0.1%"
},
{
name: "Altın Metalik Boya",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Goldmetallic_Farbstoff.png",
probability: "7.8%"
},
{
name: "Kızıl Alev Taşı",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Rotflammenstein.png",
probability: "11.8%"
},
{
name: "Kraliçe Meley Sandığı",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Truhe_der_Königin_Meley.png",
probability: "1.3%"
},
{
name: "Ejder Bekci Sandığı",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Truhe_der_Königin_Meley.png",
probability: "1.3%"
},
{
name: "Beran-Setaou Sandığı",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Truhe_des_Beran-Setaou.png",
probability: "3.9%"
},
{
name: "Bagjanamu Sandığı",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Truhe_des_Bagjanamu.png",
probability: "5.2%"
},
{
name: "Razador Sandığı",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Truhe_des_Razador.png",
probability: "14.4%"
},
{
name: "Nemere Sandığı",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Truhe_des_Nemere.png",
probability: "13.1%"
},
{
name: "Jotun Thrym Sandığı",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Jotun_Thrym-Truhe.png",
probability: "1.3%"
},
{
name: "Hidra Sandığı",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Hydras_Truhe.png",
probability: "1.3%"
}
]
},
{
id: "rubinkiste",
name: "Yakut Sandığı",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Rubinkiste.png",
puzzlePieces: 11,
lootList: [
{
name: "Şeftali Çiçeği Şarabı (3x)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Pfirsichblütenwein_B.png",
probability: "2.9%"
},
{
name: "Durum Sıfırlama",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Status-Neuverteilung_B.png",
probability: "2.9%"
},
{
name: "Küçük Kafa",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Schrumpfkopf.png",
probability: "2.9%"
},
{
name: "Acele İksiri (30dk) (3x)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Trank_der_Hast_B.png",
probability: "2.9%"
},
{
name: "Ay İksiri (M)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Elixier_des_Mondes_(M)_B.png",
probability: "2.9%"
},
{
name: "Metin Pusulası",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Kompass_des_Metinsteins_B.png",
probability: "2.9%"
},
{
name: "Cesaret Pelerini",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Tapferkeitsumhang_B.png",
probability: "2.9%"
},
{
name: "Ejder Madalyası (3x)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Medaille_des_Drachen_B.png",
probability: "2.9%"
},
{
name: "Ejder Paromen",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Schriftrolle_des_Drachen_B.png",
probability: "2.9%"
},
{
name: "Kan Taşı",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Blutstein.png",
probability: "2.9%"
},
{
name: "Lider Kitabı (1s)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Buch_des_Anführers_B.png",
probability: "2.9%"
},
{
name: "Hız İksiri (30dk) (3x)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Geschwindigkeitstrank_B.png",
probability: "2.9%"
},
{
name: "Eşya Güçlendirme (B)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Gegenstand_verstärken_B.png",
probability: "0.3%"
},
{
name: "Eşya Büyüleme (B)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Gegenstand_verzaubern_B.png",
probability: "0.3%"
},
{
name: "Bereket Küresi",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Segenskugel_B.png",
probability: "2.9%"
},
{
name: "Bereket Paromen",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Segensschriftrolle_B.png",
probability: "2.9%"
},
{
name: "Saldırı İksiri +15 (30dk) (3x)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Trank_des_Angriffs_+10_B.png",
probability: "2.9%"
},
{
name: "Saldırı İksiri +20 (30dk) (3x)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Trank_des_Angriffs_+20_B.png",
probability: "2.9%"
},
{
name: "Geçiş Kartı",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Passierschein.png",
probability: "2.9%"
},
{
name: "Araştırma İksiri",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Elixier_des_Forschers.png",
probability: "2.9%"
},
{
name: "Güneş İksiri (M)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Elixier_der_Sonne_(M)_B.png",
probability: "2.9%"
},
{
name: "Rüzgar Ayakkabısı (1g)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Windschuhe.png",
probability: "2.9%"
},
{
name: "Cin Çıkarma Paromen",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Exorzismus-Schriftrolle.png",
probability: "2.9%"
},
{
name: "Taş El Kitabı",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Stein-Handbuch.png",
probability: "2.9%"
},
{
name: "Protein Lokması",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Protein-Happen.png",
probability: "2.9%"
},
{
name: "Hayat Meyvesi",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Frucht_des_Lebens.png",
probability: "2.9%"
},
{
name: "Şeftali Çiçeği Şarabı+ (3x)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Pfirsichblütenwein_B.png",
probability: "2.9%"
},
{
name: "Yoğun Okuma",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Konzentriertes_Lesen.png",
probability: "2.9%"
},
{
name: "Ejder Tanrısı Yaşam (30dk) (3x)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Drachengott-Leben.png",
probability: "2.9%"
},
{
name: "Ejder Tanrısı Saldırı (30dk) (3x)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Drachengott-Angriff.png",
probability: "2.9%"
},
{
name: "Hırsız Eldivenleri (7g)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Handschuhe_des_Diebes.png",
probability: "2.9%"
},
{
name: "Şans Madalyası (7g)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Medaille_des_Glücks.png",
probability: "2.9%"
},
{
name: "Işınlanma Yüzüğü",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Teleportationsring.png",
probability: "2.9%"
},
{
name: "Pet İsim Pergamen",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Pergament_der_Pet-Namen.png",
probability: "2.9%"
},
{
name: "Envanter Genişletme",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Inventarerweiterung.png",
probability: "2.9%"
},
{
name: "Sırlar Yüzüğü (15g)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Ring_der_Geheimnisse.png",
probability: "2.9%"
},
{
name: "Eşya Büyüleme+",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Gegenstand_verzaubern+.png",
probability: "0.1%"
}
]
}
]
},
secretCalculator: {
title: "Yutnori Gizem Hesaplayıcısı",
minutesLabel: "Run başına dakika:",
secretsLabel: "Yutnori Gizem sayısı:",
calculateBtn: "Hesapla",
resultLabel: "Mümkün Run'lar:"
},
},
},
},
es: {
flag: "🇪🇸",
label: "Español",
title: "Asistente de Eventos",
subtitle: "Descripción general y herramientas de ayuda para todos los eventos.",
footer: "Metin2 Helper por NikKing97. No oficial de Gameforge.",
activeLabel: "ACTIVO",
events: {
treasure: {
title: "Isla del Tesoro - Goblin",
summary:
"Protege un goblin del tesoro de los monstruos, colecciona doblones y úsalos para una minibúsqueda del tesoro.<br><strong>Desde el nivel 70</strong>",
descTitle: "Descripción",
desc: 'Con un <span class="treasure-ticket-highlight"><img src="https://m2-helper.com/resources/events/Schatzticket.png" alt="Boleto de Tesoro" class="inline w-6 h-6 mx-1.5 align-top -mt-0">Boleto de Tesoro<div class="tooltip">Puedes encontrar el Boleto de Tesoro en cofres durante el período del evento.<br><img src="https://m2-helper.com/resources/events/Goldene_Schatztruhe.png" alt="Cofre Dorado" class="inline w-5 h-5 mx-1"> <img src="https://m2-helper.com/resources/events/Goldener_Schlüssel.png" alt="Llave Dorada" class="inline w-5 h-5 mx-1"></div></span> te teletransportas a la isla donde te espera el goblin del tesoro. En el camino, aparecen 3 cofres gigantes del tesoro - solo uno contiene el tesoro. Tan pronto como el goblin encuentra el correcto, la misión es exitosa. Si él o tú mueren, falla. <br><br><img src="https://m2-helper.com/resources/events/Dublone.png" alt="Doblón" class="inline w-7 h-7 mx-1.5 align-top -mt-0.5">Recibes 1 doblón por monstruo, 100 doblones por éxito - capacidad máxima: 999 doblones.',
huntTitle: "Búsqueda del Tesoro:",
huntDesc: [
"Abre la interfaz del evento.",
'Por <strong>90 doblones</strong> revelas el campo de búsqueda - la primera recompensa es gratis, después cuesta uno <img src="Events/images/goblin_key.png" alt="Llave del Goblin" class="inline w-6 h-6 mx-1.5 align-top -mt-0">Llave del Goblin por búsqueda adicional.',
"La ronda determina qué recompensas puedes recibir. Desde la ronda 3, 5 y 10, el campo de recompensas se expande.",
"Tan pronto como recopiles <strong>9 recompensas</strong> en una serie sin reiniciar la ronda, avanzas a la siguiente ronda.",
],
roundRewardsTitle: "Recompensas de Ronda:",
roundRewards: [
"Después de completar cada ronda, recibirás una recompensa aleatoria.",
"A partir de la ronda 10 en adelante, recibirás la recompensa de la ronda 10 para cada ronda adicional.",
],
roundRewardsTable: {
rounds: [
{
number: 1,
rewards: [
{
name: "Poción Verde (40x)",
icon: "rundenbelohnungen/Grüner_Trank.png",
},
{
name: "Cor Daemonis (Crudo) (3x)",
icon: "rundenbelohnungen/Cor_Daemonis_(Roh).png",
},
],
},
{
number: 2,
rewards: [
{
name: "Golpe Crítico (10x)",
icon: "rundenbelohnungen/Kritischer_Kampf.png",
},
{
name: "Golpe Penetrante (10x)",
icon: "rundenbelohnungen/Durchbohrender_Kampf.png",
},
],
},
{
number: 3,
rewards: [
{
name: "Cor Daemonis (Crudo) (15x)",
icon: "rundenbelohnungen/Cor_Daemonis_(Roh).png",
},
{
name: "Anillo de Experiencia (1D 12h)",
icon: "rundenbelohnungen/Erfahrungsring.png",
},
],
},
{
number: 4,
rewards: [
{
name: "Caja de Llaves del Goblin",
icon: "Goblin-Schlüsselbox.png",
},
{
name: "Bendición del Dragón (5x)",
icon: "rundenbelohnungen/Segen_des_Drachen.png",
},
],
},
{
number: 5,
rewards: [
{
name: "Piedra de Dragón Antigua (mate)",
icon: "rundenbelohnungen/Roher_Drachenrubin_(matt).png",
},
{
name: "Cor Daemonis (Crudo) (20x)",
icon: "rundenbelohnungen/Cor_Daemonis_(Roh).png",
},
],
},
{
number: 6,
rewards: [
{
name: "Bendición de Mejora",
icon: "rundenbelohnungen/Veredlungssegen.png",
tooltip: "+10% de tasa de éxito para el siguiente intento de mejora<br>(Para los primeros 100 jugadores)",
},
{
        name: "Runa de Fuego del Aura 100 (10x)",
icon: "rundenbelohnungen/Feuerrune_der_Aura.png",
},
],
},
{
number: 7,
rewards: [
{
        name: "Montura (Aleatoria)",
icon: "rundenbelohnungen/Reiten_zufall.png",
},
{
name: "Libro del Cazador de Monstruos",
icon: "rundenbelohnungen/monster_Buch.png",
},
],
},
{
number: 8,
rewards: [
{
name: "Piedra de Dragón Antigua (mate)",
icon: "rundenbelohnungen/Roher_Drachenrubin_(matt).png",
},
{
        name: "Llama del Dragón B (2x)",
icon: "rundenbelohnungen/Flamme_des_Drachen.png",
},
],
},
{
number: 9,
rewards: [
{
name: "Bendición de Mejora",
icon: "rundenbelohnungen/Veredlungssegen.png",
tooltip: "No se necesitan materiales para el siguiente intento de mejora<br>(Para los primeros 50 jugadores)",
},
{
        name: "Fénix de Fuego (Botín) (30D)",
icon: "rundenbelohnungen/Feuerphönix.png",
},
],
},
],
round10: {
title: "Ronda 10 (Repetible)",
rewards: [
{
        name: "Elixir del Dragón de Hierro (L)",
icon: "rundenbelohnungen/Eisendrachenelixir_(L).png",
},
{
        name: "Bendición del Dragón (10x)",
icon: "rundenbelohnungen/Segen_des_Drachen.png",
},
{
        name: "Pase de Entrada B (20x)",
icon: "rundenbelohnungen/Passierschein_B.png",
},
{
        name: "Cor Draconis (Místico)",
icon: "rundenbelohnungen/Cor_Draconis_(mystisch).png",
},
{
        name: "Elixir del Dragón Blanco (L)",
icon: "rundenbelohnungen/Weißdrachenelixir_(L).png",
},
],
},
},
tipsTitle: "Consejos y Trucos:",
tips: [
"Ten algunos cofres del tesoro y las llaves correspondientes listas antes del evento.",
'Usa los <span class="treasure-ticket-highlight">Buffs para el Goblin<div class="tooltip">• PV +20%<br>• Defensa +50<br>• Velocidad de Movimiento +15%</div></span> para aumentar sus posibilidades de supervivencia.',
'Usa la primera recompensa gratuita y el reinicio para obtener Llaves del Goblin gratis.<br>',
'Usa el <span class="treasure-ticket-highlight"><img src="https://m2-helper.com/resources/events/Goblin-Schlüsselbox.png" alt="Caja de Llaves del Goblin" class="inline w-6 h-6 mx-1.5 align-top -mt-0">Caja de Llaves del Goblin<div class="tooltip">Contiene 8x<img src="Events/images/goblin_key.png" alt="Llave del Goblin" class="inline w-5 h-5 mx-1">Llave del Goblins</div></span> desde la tienda de artículos para avanzar rápidamente en las recompensas de ronda.',
],
note: "<strong>Note:</strong> On many servers, the enhancement blessings run out very quickly!",
},
underworld: {
title: "Viaje al Mundo Subterráneo",
summary:
"Lucha contra enemigos poderosos y recolecta materiales raros.<br><strong>Desde el nivel 90</strong>",
descTitle: "Descripción",
desc: "El Viaje al Mundo Subterráneo se divide en <strong>dos fases</strong>. En la primera fase, obtienes<img src=\"Events/images/Totenflamme.png\" alt=\"Death Flame\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\"><strong>Llamas de la Muerte</strong> a través de asesinatos de monstruos, que se agregan directamente a la interfaz de eventos. Estas Llamas de la Muerte pueden ser intercambiadas por elementos que necesitas en la segunda fase del evento.",
mechanicsTitle: "<span style='font-size: 1.25em; font-weight: bold;'>1. Fase - Intercambio de Llamas de la Muerte:</span>",
mechanicsDesc: [
"Las Llamas de la Muerte recopiladas en la Fase 1 pueden ser intercambiadas por cinco elementos diferentes. Cada elemento requiere una cierta cantidad de Llamas de la Muerte y ofrece diferentes funciones para la Fase 2 del evento.<br>El <strong>intercambio</strong> de Llamas de la Muerte por el elemento deseado <strong>funciona el 80% del tiempo</strong>."
],
blackLetterTitle: "Cartas Negras:",
blackLetterDesc: "Las Cartas Negras te permiten acceder al Mundo Subterráneo.<br>Con <strong>3x Cartas Negras</strong> puedes entrar al Mundo Subterráneo. Además, puedes entrar en los cuatro juicios en el Mundo Subterráneo con <strong>10x Cartas Negras</strong>.",
blackLetterTableHeader: ["1.", "2.", "3.", "4.", "5.", "6."],
blackLetterTableValues: ["1x", "3x", "5x", "10x", "15x", "20x"],
tableHeaderDeaths: "Número de Muertes",
tableHeaderWater: "Agua Requerida",
waterOfLifeTitle: "Agua de la Vida:",
waterOfLifeDesc: "Con el Agua de la Vida, puedes <strong>revivir</strong> después de la muerte en el Mundo Subterráneo. Cuanto más a menudo mueras, más agua necesitarás para revivir.",
deathSoulTitle: "Alma de la Muerte:",
deathSoulDesc: "Necesario para <strong>reducir los PV de Asmodeus</strong>. Se pueden reducir los PV de Asmodeus 4 veces. La reducción de PV dura una carrera. Puedes usar las Almas de la Muerte en el Guardián Hae-Tae.",
deathSoulTableHeader: ["20", "40", "60", "80"],
deathSoulTableValues: ["-20%", "-40%", "-60%", "-90%"],
tableHeaderSouls: "Número de Almas de la Muerte",
tableHeaderReduction: "Reducción de PV",
asmodeusKeyTitle: "Llave de Asmodeus:",
asmodeusKeyDesc: "Puedes usar una Llave de Asmodeus para <strong>luchar directamente contra Asmodeus</strong> sin tener que completar los cuatro juicios primero.<br><br>",
phaseTitle: "<span style='font-size: 1.25em; font-weight: bold;'>2. Fase - Pruebas y Combate contra Asmodeus:</span>",
phaseDesc: "En la segunda fase del evento, entras al <strong>Mundo Subterráneo</strong> y luchas contra enemigos poderosos.<br>Puedes encontrar el portal al Mundo Subterráneo en el <strong>Puerto</strong> de <strong>Cabo Fuego de Dragón</strong>.<br><br>En el Mundo Subterráneo, ahora tienes la oportunidad de completar los <strong>cuatro juicios</strong> de Tierra, Noche, Trueno y Aire. De estos juicios, obtienes el Conjunto de Traje de Condenación. Con este conjunto de traje, obtienes <strong>+100% Fuerza Oscura</strong> y <strong>+400% Fuerte contra No-Muertos</strong>.<br><br>Después de completar los cuatro juicios, puedes alcanzar a Asmodeus <u>sin</u> una Llave de Asmodeus y luchar contra él. Una vez que Asmodeus es derrotado, otro aparece. Los primeros cuatro Asmodeus sueltan un<img src=\"https://m2-helper.com/resources/events/anderwelt/Verdammnis-Truhe.png\" alt=\"Chest\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\"><strong>Cofre de Condenación</strong>, todos los posteriores sueltan un<img src=\"https://m2-helper.com/resources/events/anderwelt/Verdammnis-Truhe+.png\" alt=\"Chest\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\"><strong>Cofre de Condenación+</strong>.<br><br>Después de derrotar a Asmodeus, puedes entrar a la <strong>Salvación</strong>. En la Salvación, siempre hay un Metin de Salvación, que suelta elementos para el<span class=\"treasure-ticket-highlight\"><img src=\"https://m2-helper.com/resources/events/anderwelt/Phönix_der_Erlösung.png\" alt=\"Phoenix\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\"><strong>Fénix de la Salvación</strong><div class=\"tooltip\">Mascota de Botín de 7 Días</div></span> and<img src=\"https://m2-helper.com/resources/events/anderwelt/Verdammnis-Schlüssel.png\" alt=\"Key\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\"><strong>Llave de Condenación</strong> así como<img src=\"https://m2-helper.com/resources/events/anderwelt/Verdammnis-Schlüssel+.png\" alt=\"Key+\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\"><strong>Llave de Condenación+</strong>.",
imageSrc: "https://m2-helper.com/resources/events/anderwelt/event-interface-en.png",
imageAlt: "Interfaz del Mundo Subterráneo",
imageCaption: "Interfaz del Evento del Mundo Subterráneo",
rewardsTitle: "Recompensas:",
rewardsTable: [
{
category: "Cofre de la Condena",
icon: "https://m2-helper.com/resources/events/anderwelt/Verdammnis-Truhe.png",
contents: [
{ name: "Alma Condenada", icon: "https://m2-helper.com/resources/events/anderwelt/Verdammte_Seele.png", probability: "19.23%" },
{ name: "Alma Condenada (2x)", icon: "https://m2-helper.com/resources/events/anderwelt/Verdammte_Seele.png", probability: "12.82%" },
{ name: "Alma Condenada (5x)", icon: "https://m2-helper.com/resources/events/anderwelt/Verdammte_Seele.png", probability: "4.27%" },
{ name: "Libro del No-Muerto", icon: "https://m2-helper.com/resources/events/anderwelt/Buch_des_Unlebens.png", probability: "19.23%" },
{ name: "Libro del No-Muerto (2x)", icon: "https://m2-helper.com/resources/events/anderwelt/Buch_des_Unlebens.png", probability: "12.82%" },
{ name: "Libro del No-Muerto (5x)", icon: "https://m2-helper.com/resources/events/anderwelt/Buch_des_Unlebens.png", probability: "4.27%" },
{ name: "Escama de Asmodeo", icon: "https://m2-helper.com/resources/events/anderwelt/Asmodeus-Schuppe.png", probability: "8.55%" },
{ name: "Escama de Asmodeo (2x)", icon: "https://m2-helper.com/resources/events/anderwelt/Asmodeus-Schuppe.png", probability: "4.27%" },
{ name: "Escama de Asmodeo (3x)", icon: "https://m2-helper.com/resources/events/anderwelt/Asmodeus-Schuppe.png", probability: "0.85%" },
{ name: "Hombrera de Asmodeo", icon: "https://m2-helper.com/resources/events/anderwelt/Asmodeus-Schulterschutz.png", probability: "8.55%" },
{ name: "Hombrera de Asmodeo (2x)", icon: "https://m2-helper.com/resources/events/anderwelt/Asmodeus-Schulterschutz.png", probability: "4.27%" },
{ name: "Hombrera de Asmodeo (3x)", icon: "https://m2-helper.com/resources/events/anderwelt/Asmodeus-Schulterschutz.png", probability: "0.85%" }
]
},
{
category: "Cofre de la Condena+",
icon: "https://m2-helper.com/resources/events/anderwelt/Verdammnis-Truhe+.png",
contents: [
{ name: "Escama de Asmodeo (5x)", icon: "https://m2-helper.com/resources/events/anderwelt/Asmodeus-Schuppe.png", probability: "18.00%" },
{ name: "Escama de Asmodeo (10x)", icon: "https://m2-helper.com/resources/events/anderwelt/Asmodeus-Schuppe.png", probability: "13.50%" },
{ name: "Hombrera de Asmodeo (3x)", icon: "https://m2-helper.com/resources/events/anderwelt/Asmodeus-Schulterschutz.png", probability: "18.00%" },
{ name: "Hombrera de Asmodeo (6x)", icon: "https://m2-helper.com/resources/events/anderwelt/Asmodeus-Schulterschutz.png", probability: "13.50%" },
{ name: "Libro del No-Muerto (10x)", icon: "https://m2-helper.com/resources/events/anderwelt/Buch_des_Unlebens.png", probability: "9.00%" },
{ name: "Libro del No-Muerto (20x)", icon: "https://m2-helper.com/resources/events/anderwelt/Buch_des_Unlebens.png", probability: "4.50%" },
{ name: "Alma Condenada (10x)", icon: "https://m2-helper.com/resources/events/anderwelt/Verdammte_Seele.png", probability: "9.00%" },
{ name: "Alma Condenada (20x)", icon: "https://m2-helper.com/resources/events/anderwelt/Verdammte_Seele.png", probability: "4.50%" },
{ name: "Cuerno de Asmodeo", icon: "https://m2-helper.com/resources/events/anderwelt/Asmodeus-Horn.png", probability: "9.00%" },
{ name: "Cuerno de Asmodeo (3x)", icon: "https://m2-helper.com/resources/events/anderwelt/Asmodeus-Horn.png", probability: "0.90%" },
{ name: "Melena de Asmodeo", icon: "https://m2-helper.com/resources/events/anderwelt/Asmodeus-Mähne.png", probability: "0.09%" }
]
}
],
tipsTitle: "Consejos y Trucos:",
tips: [
"Puedes apilar el efecto del<img src=\"https://m2-helper.com/resources/events/anderwelt/Anderwelt-Talisman.png\" alt=\"Talisman\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\">Talismán del Mundo Subterráneo.",
"Asmodeus tiene fuertes ataques a distancia, se recomienda tener defensa a distancia o muchos PV en tu equipo.",
"Después de recopilar algunas Cartas Negras, deberías enfocarte en Llaves de Asmodeus para derrotar a Asmodeus a menudo y viajar directamente a la Salvación.",
"Tiene sentido llevar un múltiplo de 80 Almas de la Muerte para reducir los PV de Asmodeo de forma eficiente."
],
note: "<strong>Nota:</strong> Si fabricas un<img src=\"https://m2-helper.com/resources/events/anderwelt/Verdammnis-Schild.png\" alt=\"Shield\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\">Damnation Shield during the event, you will receive another one through the<img src=\"https://m2-helper.com/resources/mission.png\" alt=\"mission\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\">Missions!",
},
tombola: {
title: "Tómbola",
summary:
"Prueba tu suerte en la gran Tómbola y gana premios valiosos.<br><strong>Desde el nivel 1</strong>",
descTitle: "Descripción",
desc: "La Tómbola en Metin2 se lleva a cabo dos veces al año y es un evento disponible exclusivamente en la tienda de artículos. Cada día puedes comprar hasta <strong>10 boletos</strong>.<br>Cada boleto cuesta <img src=\"https://m2-helper.com/resources/events/tombola/Drachenmarke.png\" alt=\"Marca del Dragón\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\"> Marca del Dragón - el número de Marca del Dragón aumenta por boleto. Ya puedes comprar 6 boletos el día anterior para el día siguiente a un precio más bajo.<br>La Tómbola generalmente se ejecuta durante un mes completo. Necesitas un total de <strong>14,095 Marca del Dragón</strong> para <strong>30 días</strong> de Tómbola, siempre que compres los boletos reducidos para el día siguiente cada día.",
tombolaPricesTitle: "Premios:",
tombolaPrices: "Cada boleto contiene una recompensa aleatoria. Los premios van desde pociones comunes e elementos de actualización hasta Cor Draconis y Piedra de Luna.<br> Cada día hay un <strong>premio diario</strong> que se puede encontrar bajo uno de los boletos con una probabilidad de <strong>0.1%</strong>. Los premios diarios pueden ser disfraces, mascotas, monturas, vales de DR u otros elementos valiosos.<br>Además, <strong>símbolos de suerte</strong> pueden estar ocultos bajo cada boleto. La probabilidad de obtener un símbolo de suerte es <strong>19.95%</strong> por boleto. Los símbolos de suerte se dividen en 6 niveles diferentes, cada uno dando un cierto número de puntos.",
tombolaSymbolsTitle: "Símbolos de Suerte:",
tombolaSymbols: "Una vez que hayas recopilado <strong>3 símbolos de suerte</strong>, obtienes un premio adicional. Puedes relanzar este premio con 6<img src=\"https://m2-helper.com/resources/events/tombola/Drachenmünze.png\" alt=\"Marca del Dragón\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\">Monedas de Dragón.<br> Cada símbolo de suerte da un número fijo de puntos. Dependiendo de cuántos puntos hayas logrado con los tres símbolos de suerte, obtienes un premio determinado.",
tombolaSummer2025SectionTitle: "Tómbola Verano 2025",
tombolaWinter2025SectionTitle: "Tómbola Invierno 2025",
tombolaSummer2025SymbolsTable: [
{ name: "15 Puntos", points: 15, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_15_Punkte.jpg", probability: "7.3%" },
{ name: "10 Puntos", points: 10, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_10_Punkte.jpg", probability: "14.5%" },
{ name: "7 Puntos", points: 7, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_7_Punkte.jpg", probability: "37.1%" },
{ name: "5 Puntos", points: 5, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_5_Punkte.jpg", probability: "21.6%" },
{ name: "3 Puntos", points: 3, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_3_Punkte.jpg", probability: "13.5%" },
{ name: "1 Punto", points: 1, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_1_Punkt.jpg", probability: "6%" }
],
tombolaSummer2025PrizeDistributionTitle: "Distribución de Premios:",
tombolaSortByPoints: "Ordenar por Puntos",
tombolaSortByProbability: "Ordenar por Probabilidad",
tombolaTooltipProbability: "Probabilidad",
tombolaTooltipPoints: "Puntos",
tombolaSelectionDescription: "Haz clic en los iconos debajo del gráfico para seleccionar premios. La Probabilidad y los costos de DC se calcularán en consecuencia.",
tombolaTalismanChanceLabel: "Probabilidad de Victoria por Intento:",
tombolaRealCostLabel: "DC para Probabilidad de Éxito:",
tombolaChanceNote: "Con el DC especificado, tienes un X% de probabilidad de recibir al menos uno de los premios seleccionados.",
tombolaSummer2025PrizeTable: [
{ pointRange: "43-45", prize: "Llama del Dragón", icon: "https://m2-helper.com/resources/events/tombola/Flamme_des_Drachen.png" },
{ pointRange: "40-42", prize: "Talismán del Viento", icon: "https://m2-helper.com/resources/events/tombola/Windtalisman.png" },
{ pointRange: "37-39", prize: "Talismán de Fuego", icon: "https://m2-helper.com/resources/events/tombola/Feuertalisman.png" },
{ pointRange: "35-36", prize: "Talismán Oscuro", icon: "https://m2-helper.com/resources/events/tombola/Dunkler_Talisman.png" },
{ pointRange: "32-34", prize: "Piedra Lunar", icon: "https://m2-helper.com/resources/events/tombola/Mondstein.png" },
{ pointRange: "30-31", prize: "Talismán de Tierra", icon: "https://m2-helper.com/resources/events/tombola/Erdtalisman.png" },
{ pointRange: "28-29", prize: "Cofre del Despertar", icon: "https://m2-helper.com/resources/events/tombola/Truhe_der_Erweckung.png" },
{ pointRange: "26-27", prize: "Piedra del Alma", icon: "https://m2-helper.com/resources/events/tombola/Seelenstein.png" },
{ pointRange: "24-25", prize: "Concha Brillante", icon: "https://m2-helper.com/resources/events/tombola/Schimmernde_Muschel.png" },
{ pointRange: "22-23", prize: "Cofre del Tesoro de Platino", icon: "https://m2-helper.com/resources/events/tombola/Platin-Schatzkiste.png" },
{ pointRange: "20-21", prize: "Almeja (10x)", icon: "https://m2-helper.com/resources/events/tombola/Muschel.png" },
{ pointRange: "18-19", prize: "Llave del Tesoro de Platino", icon: "https://m2-helper.com/resources/events/tombola/Platin-Schatzschlüssel.png" },
{ pointRange: "16-17", prize: "Curación Instantánea de Mercenario (10x)", icon: "https://m2-helper.com/resources/events/tombola/Sofortige_Söldnerheilung.png" },
{ pointRange: "14-15", prize: "Caja de Libro de Habilidades", icon: "https://m2-helper.com/resources/events/tombola/fertigkeitsbuch.png" },
{ pointRange: "12-13", prize: "Catalizador de Accesorio 3*", icon: "https://m2-helper.com/resources/events/tombola/Schmiederune.png" },
{ pointRange: "10-11", prize: "Título: Adorador del Sol", icon: "https://m2-helper.com/resources/events/tombola/titel.webp" },
{ pointRange: "8-9", prize: "Talismán de Hielo", icon: "https://m2-helper.com/resources/events/tombola/Eistalisman.png" },
{ pointRange: "6-7", prize: "Talismán del Rayo", icon: "https://m2-helper.com/resources/events/tombola/Blitztalisman.png" },
{ pointRange: "4-5", prize: "Cinta del Señor (noble)", icon: "https://m2-helper.com/resources/events/tombola/Herrscherband_(edel).png" },
{ pointRange: "3", prize: "Piedra Ritual", icon: "https://m2-helper.com/resources/events/tombola/Ritualstein.png" }
],
tombolaWinter2025SymbolsTable: [
{ name: "15 Puntos", points: 15, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_15_Punkte.jpg", probability: "7.3%" },
{ name: "10 Puntos", points: 10, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_10_Punkte.jpg", probability: "14.5%" },
{ name: "7 Puntos", points: 7, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_7_Punkte.jpg", probability: "37.1%" },
{ name: "5 Puntos", points: 5, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_5_Punkte.jpg", probability: "21.6%" },
{ name: "3 Puntos", points: 3, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_3_Punkte.jpg", probability: "13.5%" },
{ name: "1 Punto", points: 1, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_1_Punkt.jpg", probability: "6%" }
],
tombolaWinter2025PrizeDistributionTitle: "Distribución de Premios:",
tombolaWinter2025PrizeTable: [
{ pointRange: "43-45", prize: "Llama del Dragón", icon: "https://m2-helper.com/resources/events/tombola/Flamme_des_Drachen.png" },
{ pointRange: "40-42", prize: "Talismán Oscuro", icon: "https://m2-helper.com/resources/events/tombola/Dunkler_Talisman.png" },
{ pointRange: "37-39", prize: "Talismán del Rayo", icon: "https://m2-helper.com/resources/events/tombola/Blitztalisman.png" },
{ pointRange: "35-36", prize: "Talismán de Fuego", icon: "https://m2-helper.com/resources/events/tombola/Feuertalisman.png" },
{ pointRange: "32-34", prize: "Piedra Lunar", icon: "https://m2-helper.com/resources/events/tombola/Mondstein.png" },
{ pointRange: "30-31", prize: "Talismán de Tierra", icon: "https://m2-helper.com/resources/events/tombola/Erdtalisman.png" },
{ pointRange: "28-29", prize: "Cofre del Despertar", icon: "https://m2-helper.com/resources/events/tombola/Truhe_der_Erweckung.png" },
{ pointRange: "26-27", prize: "Piedra del Alma", icon: "https://m2-helper.com/resources/events/tombola/Seelenstein.png" },
{ pointRange: "24-25", prize: "Concha Brillante", icon: "https://m2-helper.com/resources/events/tombola/Schimmernde_Muschel.png" },
{ pointRange: "22-23", prize: "Cofre del Tesoro de Platino", icon: "https://m2-helper.com/resources/events/tombola/Platin-Schatzkiste.png" },
{ pointRange: "20-21", prize: "Almeja (10x)", icon: "https://m2-helper.com/resources/events/tombola/Muschel.png" },
{ pointRange: "18-19", prize: "Llave del Tesoro de Platino", icon: "https://m2-helper.com/resources/events/tombola/Platin-Schatzschlüssel.png" },
{ pointRange: "16-17", prize: "Curación Instantánea de Mercenario (10x)", icon: "https://m2-helper.com/resources/events/tombola/Sofortige_Söldnerheilung.png" },
{ pointRange: "14-15", prize: "Caja de Libro de Habilidades", icon: "https://m2-helper.com/resources/events/tombola/fertigkeitsbuch.png" },
{ pointRange: "12-13", prize: "Bolsa Deportiva Gaya (500)", icon: "https://m2-helper.com/resources/events/tombola/Gaya-Beutel.png" },
{ pointRange: "10-11", prize: "Título: Estrella Polar", icon: "https://m2-helper.com/resources/events/tombola/titel.webp" },
{ pointRange: "8-9", prize: "Talismán del Viento", icon: "https://m2-helper.com/resources/events/tombola/Windtalisman.png" },
{ pointRange: "6-7", prize: "Talismán de Hielo", icon: "https://m2-helper.com/resources/events/tombola/Eistalisman.png" },
{ pointRange: "4-5", prize: "Cinta del Señor (noble)", icon: "https://m2-helper.com/resources/events/tombola/Herrscherband_(edel).png" },
{ pointRange: "3", prize: "Piedra Ritual", icon: "https://m2-helper.com/resources/events/tombola/Ritualstein.png" }
],
tombolaEaster2026SectionTitle: "Treasure-Server Pascua 2026",
tombolaEaster2026SymbolsTable: [
{ name: "15 Puntos", points: 15, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_15_Punkte.jpg", probability: "7.3%" },
{ name: "10 Puntos", points: 10, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_10_Punkte.jpg", probability: "14.5%" },
{ name: "7 Puntos", points: 7, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_7_Punkte.jpg", probability: "37.1%" },
{ name: "5 Puntos", points: 5, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_5_Punkte.jpg", probability: "21.6%" },
{ name: "3 Puntos", points: 3, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_3_Punkte.jpg", probability: "13.5%" },
{ name: "1 Punto", points: 1, icon: "https://m2-helper.com/resources/events/tombola/Glückssymbol_1_Punkt.jpg", probability: "6%" }
],
tombolaEaster2026PrizeDistributionTitle: "Distribución de Premios:",
tombolaEaster2026PrizeTable: [
{ pointRange: "43-45", prize: "Llama del Dragón", icon: "https://m2-helper.com/resources/events/tombola/Flamme_des_Drachen.png" },
{ pointRange: "40-42", prize: "Talismán del Viento+0", icon: "https://m2-helper.com/resources/events/tombola/Windtalisman.png" },
{ pointRange: "37-39", prize: "Talismán de Fuego+0", icon: "https://m2-helper.com/resources/events/tombola/Feuertalisman.png" },
{ pointRange: "35-36", prize: "Talismán Oscuro+0", icon: "https://m2-helper.com/resources/events/tombola/Dunkler_Talisman.png" },
{ pointRange: "32-34", prize: "Piedra Lunar", icon: "https://m2-helper.com/resources/events/tombola/Mondstein.png" },
{ pointRange: "30-31", prize: "Talismán de Tierra+0", icon: "https://m2-helper.com/resources/events/tombola/Erdtalisman.png" },
{ pointRange: "28-29", prize: "Cofre del Despertar", icon: "https://m2-helper.com/resources/events/tombola/Truhe_der_Erweckung.png" },
{ pointRange: "26-27", prize: "Piedra del Alma", icon: "https://m2-helper.com/resources/events/tombola/Seelenstein.png" },
{ pointRange: "24-25", prize: "Concha Brillante", icon: "https://m2-helper.com/resources/events/tombola/Schimmernde_Muschel.png" },
{ pointRange: "22-23", prize: "Cofre del Tesoro de Platino", icon: "https://m2-helper.com/resources/events/tombola/Platin-Schatzkiste.png" },
{ pointRange: "20-21", prize: "Almeja (10x)", icon: "https://m2-helper.com/resources/events/tombola/Muschel.png" },
{ pointRange: "18-19", prize: "Llave del Tesoro de Platino", icon: "https://m2-helper.com/resources/events/tombola/Platin-Schatzschlüssel.png" },
{ pointRange: "16-17", prize: "Curación Instantánea de Mercenario (10x)", icon: "https://m2-helper.com/resources/events/tombola/Sofortige_Söldnerheilung.png" },
{ pointRange: "14-15", prize: "Caja de Libro de Habilidades", icon: "https://m2-helper.com/resources/events/tombola/fertigkeitsbuch.png" },
{ pointRange: "12-13", prize: "Bolsa Deportiva Gaya (100) (720h)", icon: "https://m2-helper.com/resources/events/tombola/Gaya-Beutel.png" },
{ pointRange: "10-11", prize: "Artículo Encantar+", icon: "https://m2-helper.com/resources/events/tombola/Gegenstand_verzaubern+.png" },
{ pointRange: "8-9", prize: "Talismán de Hielo+0", icon: "https://m2-helper.com/resources/events/tombola/Eistalisman.png" },
{ pointRange: "6-7", prize: "Talismán del Rayo+0", icon: "https://m2-helper.com/resources/events/tombola/Blitztalisman.png" },
{ pointRange: "4-5", prize: "Cinta del Señor (noble)", icon: "https://m2-helper.com/resources/events/tombola/Herrscherband_(edel).png" },
{ pointRange: "1-3", prize: "Piedra Ritual", icon: "https://m2-helper.com/resources/events/tombola/Ritualstein.png" }
],
tipsTitle: "Consejos y Trucos:",
tips: [
"If you've completed the Orc Tooth Biologist quest at Level 30, then every day you receive one free entry ticket.",
"Si compras un boleto siete días seguidos, recibirás un boleto gratuito a partir del octavo día. Esto solo se aplica si aún no has completado la misión de Biólogo del Nivel 30.",
"Intenta comprar los boletos para el día siguiente cada día para optimizar costos.",
],
note: "<strong>Note:</strong> A través de la Tómbola, la mayoría de los talismanes elementales entran en el mercado.",
},
okey: {
title: "Okey Card Game",
summary:
"Recoge cartas de Okey de monstruos, juega el minijuego y gana recompensas en cofres.<br><strong>Desde el nivel 70</strong>",
descTitle: "Descripción",
desc: 'Durante el evento, las tarjetas de colección de Okey<img src="Events/images/Okey-Kartenset.png" alt="Okey Collection Card" class="inline w-6 h-6 mx-1.5 align-top -mt-0">se sueltan automáticamente en la interfaz de eventos. Con la 24ª tarjeta de Okey, se<img src="Events/images/Okey-Kartenset.png" alt="Okey Card Set" class="inline w-6 h-6 mx-1.5 align-top -mt-0">crea automáticamente un conjunto de tarjetas de Okey, que te da derecho a participar en el minijuego. Puedes poseer un máximo de 999 conjuntos de tarjetas de Okey.',
gameplayTitle: "Jugabilidad:",
gameplayDesc: [
"Open the event UI and start the game.",
"At the start, <strong>5 random cards</strong> appear.",
"To score points, select 3 cards. These must form either a <strong>set combination</strong> (e.g. 7-7-7) or a <strong>row</strong> (e.g. 6-7-8). Rows can be selected in the same color or in different colors.",
"You can discard any cards and draw new ones.",
],
rewardsDesc: [],
rewardsTable: {
versions: [
{
name: "Versión de Verano",
chests: [
{
name: "Cofre Okey de Bronce",
icon: "Events/okey/Bronzene_Okey-Truhe.png",
points: "< 300 Puntos",
content: '<table class="w-full"><tr><td><img src="https://m2-helper.com/resources/exp.png" alt="exp" class="inline w-5 h-5 mx-1">EXP (100,000)</td><td class="text-right">10%</td></tr><tr><td><img src="https://m2-helper.com/resources/yang.png" alt="Yang" class="inline w-5 h-5 mx-1">Yang (50,000)</td><td class="text-right">69%</td></tr><tr><td><img src="https://m2-helper.com/resources/yang.png" alt="Yang" class="inline w-5 h-5 mx-1">Yang (100,000)</td><td class="text-right">19%</td></tr><tr><td><img src="Events/images/Okey-Kartenset.png" alt="Okey-Kartenset" class="inline w-5 h-5 mx-1">Okey Card Set</td><td class="text-right">2%</td></tr></table>',
},
{
name: "Cofre Okey de Plata",
icon: "Events/okey/Silberne_Okey-Truhe.png",
points: "300-399 Puntos",
content: '<table class="w-full"><tr><td><img src="https://m2-helper.com/resources/exp.png" alt="exp" class="inline w-5 h-5 mx-1">EXP (500,000)</td><td class="text-right">5%</td></tr><tr><td><img src="https://m2-helper.com/resources/yang.png" alt="Yang" class="inline w-5 h-5 mx-1">Yang (500,000)</td><td class="text-right">15%</td></tr><tr><td><img src="https://m2-helper.com/resources/yang.png" alt="Yang" class="inline w-5 h-5 mx-1">Yang (700,000)</td><td class="text-right">15%</td></tr><tr><td><img src="Events/images/Okey-Kartenset.png" alt="Okey-Kartenset" class="inline w-5 h-5 mx-1">Okey Card Set</td><td class="text-right">1%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Blaue_Perle.png" alt="Blaue Perle" class="inline w-5 h-5 mx-1">Blue Pearl</td><td class="text-right">2%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Blutrote_Perle.png" alt="Perla Rojo Sangre" class="inline w-5 h-5 mx-1">Blood-Red Pearl</td><td class="text-right">2%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Muschel.png" alt="Muschel" class="inline w-5 h-5 mx-1">Clam</td><td class="text-right">10%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Traktat_zur_Fechtkunst.png" alt="Fencing" class="inline w-5 h-5 mx-1">Fencing Pamphlet</td><td class="text-right">5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Affenei.png" alt="Affenei" class="inline w-5 h-5 mx-1">Monkey Egg</td><td class="text-right">3%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Spinnenei_(Item).png" alt="Spinnenei" class="inline w-5 h-5 mx-1">Spider Egg</td><td class="text-right">3%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Junges_Pet-Buch.png" alt="Junges Pet-Buch" class="inline w-5 h-5 mx-1">Young Pet Book</td><td class="text-right">9%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Wildes_Pet-Buch.png" alt="Wildes Pet-Buch" class="inline w-5 h-5 mx-1">Wild Pet Book</td><td class="text-right">1%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Cor_Draconis_(edel).png" alt="Cor Draconis (edel)" class="inline w-5 h-5 mx-1">Cor Draconis (noble)</td><td class="text-right">8%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Cor_Draconis_(kostbar).png" alt="Cor Draconis (Precioso)" class="inline w-5 h-5 mx-1">Cor Draconis (kostbar)</td><td class="text-right">5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Elixier_der_Sonne_(K)_B.png" alt="Elixier der Sonne (K) B" class="inline w-5 h-5 mx-1">Sun Elixir (S)</td><td class="text-right">2%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Elixier_des_Mondes_(K)_B.png" alt="Elixier des Mondes (K) B" class="inline w-5 h-5 mx-1">Moon Elixir (S)</td><td class="text-right">2%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Geschwindigkeitstrank_B.png" alt="Geschwindigkeitstrank B" class="inline w-5 h-5 mx-1">Potion of Speed</td><td class="text-right">5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Herrscherband_(einfach).png" alt="Herrscherband (einfach)" class="inline w-5 h-5 mx-1">Lord Sash (basic)</td><td class="text-right">2%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Ring_der_tödlichen_Macht.png" alt="Ring der tödlichen Macht (7T)" class="inline w-5 h-5 mx-1">Ring of Deadly Power (7D)</td><td class="text-right">1%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Ring_der_Willenskraft.png" alt="Ring der Willenskraft (7T)" class="inline w-5 h-5 mx-1">Ring of Will Power (7D)</td><td class="text-right">1%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Zen-Bohne.png" alt="Zen-Bohne" class="inline w-5 h-5 mx-1">Zen Bean</td><td class="text-right">3%</td></tr></table>',
},
{
name: "Cofre Okey de Oro",
icon: "Events/okey/Goldene_Okey-Truhe.png",
points: "≥ 400 Puntos",
content: '<table class="w-full"><tr><td><img src="https://m2-helper.com/resources/exp.png" alt="exp" class="inline w-5 h-5 mx-1">EXP (700,000)</td><td class="text-right">3%</td></tr><tr><td><img src="https://m2-helper.com/resources/yang.png" alt="Yang" class="inline w-5 h-5 mx-1">Yang (700,000)</td><td class="text-right">3%</td></tr><tr><td><img src="https://m2-helper.com/resources/yang.png" alt="Yang" class="inline w-5 h-5 mx-1">Yang (1,000,000)</td><td class="text-right">3%</td></tr><tr><td><img src="Events/images/Okey-Kartenset.png" alt="Okey Card Set" class="inline w-5 h-5 mx-1">Okey Card Set</td><td class="text-right">2%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Drachenschuppe.png" alt="Dragon Scale" class="inline w-5 h-5 mx-1">Dragon Scale</td><td class="text-right">5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Quarzsand.png" alt="Quartz Sand" class="inline w-5 h-5 mx-1">Quartz Sand</td><td class="text-right">2%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Roter_Höllenquarz.png" alt="Flame Stone" class="inline w-5 h-5 mx-1">Flame Stone</td><td class="text-right">5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Traktat_zur_Fechtkunst.png" alt="Fencing Pamphlet" class="inline w-5 h-5 mx-1">Fencing Pamphlet</td><td class="text-right">5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Weiße_Perle.png" alt="Perla Blanca" class="inline w-5 h-5 mx-1">White Pearl</td><td class="text-right">2%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Ei_des_Nemere.png" alt="Nemere Egg" class="inline w-5 h-5 mx-1">Nemere Egg</td><td class="text-right">2%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Ei_des_Razador.png" alt="Razador Egg" class="inline w-5 h-5 mx-1">Razador Egg</td><td class="text-right">2%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Junges_Pet-Buch.png" alt="Young Pet Book" class="inline w-5 h-5 mx-1">Young Pet Book</td><td class="text-right">10%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Wildes_Pet-Buch.png" alt="Wild Pet Book" class="inline w-5 h-5 mx-1">Wild Pet Book</td><td class="text-right">8%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Cor_Draconis_(kostbar).png" alt="Cor Draconis (precious)" class="inline w-5 h-5 mx-1">Cor Draconis (precious)</td><td class="text-right">10%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Cor_Draconis_(mystisch).png" alt="Cor Draconis (mystical)" class="inline w-5 h-5 mx-1">Cor Draconis (mystical)</td><td class="text-right">7%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Elixier_der_Sonne_(K)_B.png" alt="Sun Elixir (K) B" class="inline w-5 h-5 mx-1">Sun Elixir (K) B</td><td class="text-right">3%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Elixier_des_Mondes_(K)_B.png" alt="Moon Elixir (K) B" class="inline w-5 h-5 mx-1">Moon Elixir (K) B</td><td class="text-right">3%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Geschwindigkeitstrank_B.png" alt="Speed Potion B (30min) (3x)" class="inline w-5 h-5 mx-1">3 Speed Potion</td><td class="text-right">5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Königsband_(edel).png" alt="Royal Sash (noble)" class="inline w-5 h-5 mx-1">Royal Sash (noble)</td><td class="text-right">2%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Ring_der_tödlichen_Macht.png" alt="Ring of Deadly Power (7D)" class="inline w-5 h-5 mx-1">Ring of Deadly Power (7D)</td><td class="text-right">2%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Ring_der_Willenskraft.png" alt="Ring of Willpower (7D)" class="inline w-5 h-5 mx-1">Ring of Willpower (7D)</td><td class="text-right">2%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Schlachtenlöwe.png" alt="León de Batalla (20D)" class="inline w-5 h-5 mx-1">Battle Lion (20D)</td><td class="text-right">1%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Seelenstein.png" alt="Piedra del Alma" class="inline w-5 h-5 mx-1">Soul Stone</td><td class="text-right">5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Stein_der_Hast.png" alt="Stone of Haste +4" class="inline w-5 h-5 mx-1">Stone of Haste +4</td><td class="text-right">5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Zen-Bohne.png" alt="Zen Bean" class="inline w-5 h-5 mx-1">Zen Bean</td><td class="text-right">3%</td></tr></table>',
},
],
},
{
name: "Versión de Invierno",
chests: [
{
name: "Merry Okey Chest",
icon: "Events/okey/Bronzene_Okey-Truhe.png",
points: "< 300 Puntos",
content: '<table class="w-full"><tr><td><img src="https://m2-helper.com/resources/exp.png" alt="exp" class="inline w-5 h-5 mx-1">EXP (100,000)</td><td class="text-right">10%</td></tr><tr><td><img src="https://m2-helper.com/resources/yang.png" alt="Yang" class="inline w-5 h-5 mx-1">Yang (50,000)</td><td class="text-right">69%</td></tr><tr><td><img src="https://m2-helper.com/resources/yang.png" alt="Yang" class="inline w-5 h-5 mx-1">Yang (100,000)</td><td class="text-right">19%</td></tr><tr><td><img src="Events/images/Okey-Kartenset.png" alt="Okey Card Set" class="inline w-5 h-5 mx-1">Okey Card Set</td><td class="text-right">2%</td></tr></table>',
},
{
name: "Merry Silver Okey Chest",
icon: "Events/okey/Silberne_Okey-Truhe.png",
points: "300-399 Puntos",
content: '<table class="w-full"><tr><td><img src="https://m2-helper.com/resources/exp.png" alt="exp" class="inline w-5 h-5 mx-1">EXP (100,000)</td><td class="text-right">17.9%</td></tr><tr><td><img src="https://m2-helper.com/resources/yang.png" alt="Yang" class="inline w-5 h-5 mx-1">Yang (100,000)</td><td class="text-right">17.9%</td></tr><tr><td><img src="https://m2-helper.com/resources/yang.png" alt="Yang" class="inline w-5 h-5 mx-1">Yang (300,000)</td><td class="text-right">9.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/yang.png" alt="Yang" class="inline w-5 h-5 mx-1">Yang (500,000)</td><td class="text-right">7.0%</td></tr><tr><td><img src="Events/images/Okey-Kartenset.png" alt="Okey Card Set" class="inline w-5 h-5 mx-1">Okey Card Set</td><td class="text-right">1.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Blaue_Perle.png" alt="Perla Azul" class="inline w-5 h-5 mx-1">Blue Pearl</td><td class="text-right">2.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Blutrote_Perle.png" alt="Blood-red Pearl" class="inline w-5 h-5 mx-1">Blood-red Pearl</td><td class="text-right">2.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Affenei.png" alt="Huevo de Mono" class="inline w-5 h-5 mx-1">Monkey Egg</td><td class="text-right">2.5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Spinnenei_(Item).png" alt="Huevo de Araña" class="inline w-5 h-5 mx-1">Spider Egg</td><td class="text-right">2.5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Ei_des_Nemere.png" alt="Nemere Egg" class="inline w-5 h-5 mx-1">Nemere Egg</td><td class="text-right">1.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Ei_des_Razador.png" alt="Razador Egg" class="inline w-5 h-5 mx-1">Razador Egg</td><td class="text-right">1.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Büchertruhe_Boost.png" alt="Book Chest Boost" class="inline w-5 h-5 mx-1">Book Chest Boost</td><td class="text-right">1.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Büchertruhe_Konter.png" alt="Book Chest Counter" class="inline w-5 h-5 mx-1">Book Chest Counter</td><td class="text-right">1.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Cor_Draconis_(normal).png" alt="Cor Draconis (normal)" class="inline w-5 h-5 mx-1">Cor Draconis (normal)</td><td class="text-right">5.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Cor_Draconis_(edel).png" alt="Cor Draconis (noble)" class="inline w-5 h-5 mx-1">Cor Draconis (noble)</td><td class="text-right">2.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Gegenstand_verstärken_B.png" alt="Item Enhancement B" class="inline w-5 h-5 mx-1">Item Enhancement</td><td class="text-right">2.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Gegenstand_verzaubern_B.png" alt="Item Enchantment B" class="inline w-5 h-5 mx-1">Item Enchantment B</td><td class="text-right">1.5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Gegenstand_verzaubern+.png" alt="Item Enchantment+" class="inline w-5 h-5 mx-1">Item Enchantment+</td><td class="text-right">0.5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Herrscherband_(einfach).png" alt="Ruler Band (simple)" class="inline w-5 h-5 mx-1">Ruler Band (simple)</td><td class="text-right">2.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Magisches_Stein.png" alt="Piedra Mágica" class="inline w-5 h-5 mx-1">Magic Stone</td><td class="text-right">3.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Pers._Premiumladen.png" alt="Personal Premium Shop (1D)" class="inline w-5 h-5 mx-1">Personal Premium Shop (1D)</td><td class="text-right">0.5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Schmuckstein.png" alt="Glimmerstone (60x)" class="inline w-5 h-5 mx-1">Glimmerstone (60x)</td><td class="text-right">5.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Segensschriftrolle_B.png" alt="Blessing Scroll B" class="inline w-5 h-5 mx-1">Blessing Scroll B</td><td class="text-right">3.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Teleportationsring.png" alt="Anillo de Teletransportación" class="inline w-5 h-5 mx-1">Teleportation Ring</td><td class="text-right">3.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Trank_der_Weisheit.png" alt="Potion of Wisdom (3h)" class="inline w-5 h-5 mx-1">Potion of Wisdom (3h)</td><td class="text-right">5.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Windschuhe.png" alt="Zapatos del Viento (1D)" class="inline w-5 h-5 mx-1">Wind Shoes (1D)</td><td class="text-right">2.0%</td></tr></table>',
},
{
name: "Merry Okey Chest",
icon: "Events/okey/Goldene_Okey-Truhe.png",
points: "≥ 400 Puntos",
content: '<table class="w-full"><tr><td><img src="Events/images/Okey-Kartenset.png" alt="Okey Card Set" class="inline w-5 h-5 mx-1">Okey Card Set</td><td class="text-right">4.8%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Achat.png" alt="Ágata" class="inline w-5 h-5 mx-1">Agate</td><td class="text-right">2.9%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Titandioxid.png" alt="Dióxido de Titanio" class="inline w-5 h-5 mx-1">Titanium Dioxide</td><td class="text-right">2.9%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Mondstein.png" alt="Piedra Lunar" class="inline w-5 h-5 mx-1">Moonstone</td><td class="text-right">1.5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Weiße_Perle.png" alt="Perla Blanca" class="inline w-5 h-5 mx-1">White Pearl</td><td class="text-right">0.5%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Blaues_Drachenei.png" alt="Blue Dragon Egg (7D)" class="inline w-5 h-5 mx-1">Blue Dragon Egg</td><td class="text-right">1.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Ei_des_Nemere.png" alt="Nemere Egg (7D)" class="inline w-5 h-5 mx-1">Nemere Egg</td><td class="text-right">1.9%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Ei_des_Razador.png" alt="Razador Egg (7D)" class="inline w-5 h-5 mx-1">Razador Egg</td><td class="text-right">1.9%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Büchertruhe_Boost.png" alt="Book Chest Boost" class="inline w-5 h-5 mx-1">Book Chest Boost</td><td class="text-right">4.8%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Büchertruhe_Konter.png" alt="Book Chest Counter" class="inline w-5 h-5 mx-1">Book Chest Counter</td><td class="text-right">5.3%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Cor_Draconis_(kostbar).png" alt="Cor Draconis (precious)" class="inline w-5 h-5 mx-1">Cor Draconis (precious)</td><td class="text-right">7.8%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Cor_Draconis_(mystisch).png" alt="Cor Draconis (mystical)" class="inline w-5 h-5 mx-1">Cor Draconis (mystical)</td><td class="text-right">7.8%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Gegenstand_verstärken_B.png" alt="Item Enhancement (B)" class="inline w-5 h-5 mx-1">Item Enhancement</td><td class="text-right">4.8%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Gegenstand_verzaubern_B.png" alt="Item Enchantment B" class="inline w-5 h-5 mx-1">Item Enchantment B</td><td class="text-right">4.4%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Gegenstand_verzaubern+.png" alt="Item Enchantment+" class="inline w-5 h-5 mx-1">Item Enchantment+</td><td class="text-right">3.4%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Herrscherband_(edel).png" alt="Ruler Band (noble)" class="inline w-5 h-5 mx-1">Ruler Band (noble)</td><td class="text-right">3.9%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Magisches_Stein.png" alt="Piedra Mágica" class="inline w-5 h-5 mx-1">Magic Stone</td><td class="text-right">5.8%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Manni.png" alt="Manni (30D)" class="inline w-5 h-5 mx-1">Manni (30D)</td><td class="text-right">2.9%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Manu.png" alt="Manu (30D)" class="inline w-5 h-5 mx-1">Manu (30D)</td><td class="text-right">2.9%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Pers._Premiumladen.png" alt="Personal Premium Shop (1D)" class="inline w-5 h-5 mx-1">Personal Premium Shop (1D)</td><td class="text-right">3.0%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Schmuckstein.png" alt="Glimmerstone (200x)" class="inline w-5 h-5 mx-1">Glimmerstone (200x)</td><td class="text-right">2.4%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Seelenstein+.png" alt="Soul Stone+" class="inline w-5 h-5 mx-1">Soul Stone+</td><td class="text-right">3.4%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Segensschriftrolle_B.png" alt="Blessing Scroll B" class="inline w-5 h-5 mx-1">Blessing Scroll B</td><td class="text-right">4.8%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Teleportationsring.png" alt="Anillo de Teletransportación" class="inline w-5 h-5 mx-1">Teleportation Ring</td><td class="text-right">4.8%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Trank_der_Weisheit.png" alt="Potion of Wisdom (3h)" class="inline w-5 h-5 mx-1">Potion of Wisdom (3h)</td><td class="text-right">6.8%</td></tr><tr><td><img src="https://m2-helper.com/resources/events/okey/Windschuhe.png" alt="Zapatos del Viento (1D)" class="inline w-5 h-5 mx-1">Wind Shoes (1D)</td><td class="text-right">3.4%</td></tr></table>',
},
],
},
],
note: ""
},
tipsTitle: "Consejos y Trucos:",
tips: [
"Las filas del mismo color traen más puntos.",
'Los colores mezclados traen significativamente menos puntos, así que úsalos solo como último recurso.',
'Recuerda qué combinaciones de cartas siguen en el juego - usa el <a href="#okey-helper" class="okey-helper-link" style="text-decoration:underline;" onclick="document.getElementById(\'okey-helper\').scrollIntoView({ behavior: \'smooth\' }); return false;">Okey-Helper</a>.',
'If you submit 3x 6-7-8 in one color, you are guaranteed to receive a silver chest.'
],
gameplayImage: {
src: "Events/images/Okey-Minispielfenster.png",
alt: "Okey Game Field",
caption: "Okey Game Field"
},
okeyHelperTitle: "Okey-Helper:",
okeyHelperDesc: "Haz clic en las cartas para marcarlas como \"jugadas\":",
okeyResetText: "Reiniciar todas las cartas",
rewardsTitle: "Recompensas:",
note: "<strong>Note:</strong> Pay attention to the chest name when buying and selling to check the version!",
},
king: {
title: "Atrapa al Rey",
summary:
"Recoge cartas del rey de monstruos y juega al juego de cartas para obtener valiosas recompensas en cofres.<br><strong>Desde el nivel 30</strong>",
descTitle: "Descripción",
desc: "Atrapa al Rey es un evento de juego de cartas desde nivel 30. Durante el evento, los monstruos sueltan<img src=\"https://m2-helper.com/resources/events/koenig/Königskarte.png\" alt=\"Carta del Rey\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\"><strong>Carta del Reys</strong>. 25 Cartas del Rey se combinan automáticamente en un<img src=\"Events/images/Königsdeck.png\" alt=\"King Deck\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\"><strong>King Deck</strong>. Con un Mazo del Rey, se puede jugar una ronda en la mesa Atrapa al Rey.<br><br><strong>Importante:</strong> Las cartas y los mazos se eliminan después de que finaliza el evento. Las caídas de eventos terminan un día antes de que finalice el evento. ¡Un cambio de mapa o teletransporte cancela el juego actual!",
mechanicsTitle: "<span style='font-size: 1.25em; font-weight: bold;'>Mecánicas del Juego:</span>",
mechanicsDesc: "El campo de juego consta de <strong>25 cartas boca abajo</strong>. El jugador recibe <strong>12 cartas propias</strong> para revelar las cartas del campo. Siempre empiezas con la <strong>carta más débil</strong> \u2013 an arrow indicates which card can be selected. Cards of the same value are automatically carried over to subsequent rounds. If the surrounding cards briefly light up, there is a hidden 5 among them.<br>You must score at least <strong>10 points</strong> to be able to collect your winnings.<br><br>",
comparisonTitle: "Mecánica de Comparación:",
comparisonRules: [
"<strong>Tu carta es más alta</strong> \u2192 Anota los puntos de la carta revelada, <strong>voltea otra carta</strong>",
"<strong>Las cartas son iguales</strong> \u2192 Anota puntos, la ronda termina \u2013 continúa con una nueva carta de tu pila",
"<strong>Tu carta es más baja</strong> \u2192 Sin puntos, la ronda termina \u2013 continúa con una nueva carta de tu pila",
],
specialRuleTitle: "Regla Especial Tarjeta 5:",
specialRuleDesc: "Si tu Carta 5 se encuentra <strong>justo al lado de otro 5 cubierto</strong>, tu carta es capturada. Tu turno termina y no recibes puntos.",
kingCardRuleTitle: "Carta del Rey:",
kingCardRuleDesc: "El Rey solo puede <strong>capturar</strong> al Rey. El juego termina después de esta ronda.",
pointsTitle: "Sistema de Puntos:",
pointsTableHeaderCard: "Carta",
pointsTableHeaderField: "Campo",
pointsTableHeaderOwn: "Propia",
pointsTableHeaderPuntos: "Puntos",
pointsTable: [
{ icon: "Events/images/Schnapp_den_König_Karte_1.png", field: 7, own: 5, points: "+10" },
{ icon: "Events/images/Schnapp_den_König_Karte_2.png", field: 4, own: 2, points: "+20" },
{ icon: "Events/images/Schnapp_den_König_Karte_3.png", field: 5, own: 2, points: "+30" },
{ icon: "Events/images/Schnapp_den_König_Karte_4.png", field: 5, own: 1, points: "+40" },
{ icon: "Events/images/Schnapp_den_König_Karte_5.png", field: 3, own: 1, points: "+50" },
{ icon: "Events/images/Schnapp_den_König_Karte_K.png", field: 1, own: 1, points: "+100" },
],
pointsBonusRow: "Fila Completa",
pointsBonusValue: "+10",
rewardTiersTitle: "Recompensas después del Juego:",
rewardTiers: [
{ threshold: "< 400 Puntos", reward: "Botín del Rey de Bronce", icon: "https://m2-helper.com/resources/events/koenig/Bronzene_Königsbeute.png" },
{ threshold: "400 – 549 Puntos", reward: "Botín del Rey de Plata", icon: "https://m2-helper.com/resources/events/koenig/Silberne_Königsbeute.png" },
{ threshold: "≥ 550 Puntos", reward: "Botín del Rey Dorado", icon: "https://m2-helper.com/resources/events/koenig/Goldene_Königsbeute.png" },
],
rewardsTitle: "Recompensas:",
rewardsTable: [
{
category: "Botín del Rey de Bronce",
icon: "https://m2-helper.com/resources/events/koenig/Bronzene_Königsbeute.png",
contents: [
{ name: "EXP (100,000)", icon: "https://m2-helper.com/resources/exp.png", probability: "10%" },
{ name: "Yang (50,000)", icon: "https://m2-helper.com/resources/yang.png", probability: "68%" },
{ name: "Yang (100,000)", icon: "https://m2-helper.com/resources/yang.png", probability: "19%" },
{ name: "Mazo del Rey", icon: "Events/images/Königsdeck.png", probability: "3%" }
]
},
{
category: "Botín del Rey de Plata",
icon: "https://m2-helper.com/resources/events/koenig/Silberne_Königsbeute.png",
contents: [
{ name: "EXP (100,000)", icon: "https://m2-helper.com/resources/exp.png", probability: "13.72%" },
{ name: "Yang (100,000)", icon: "https://m2-helper.com/resources/yang.png", probability: "13.72%" },
{ name: "Yang (300,000)", icon: "https://m2-helper.com/resources/yang.png", probability: "11.22%" },
{ name: "Yang (500,000)", icon: "https://m2-helper.com/resources/yang.png", probability: "9.98%" },
{ name: "Mazo del Rey", icon: "Events/images/Königsdeck.png", probability: "2.00%" },
{ name: "Huevo de Mono", icon: "https://m2-helper.com/resources/events/okey/Affenei.png", probability: "3.74%" },
{ name: "Huevo de Araña", icon: "https://m2-helper.com/resources/events/okey/Spinnenei_(Item).png", probability: "2.99%" },
{ name: "Huevo de Razador", icon: "https://m2-helper.com/resources/events/okey/Ei_des_Razador.png", probability: "1.37%" },
{ name: "Huevo de Nemere", icon: "https://m2-helper.com/resources/events/okey/Ei_des_Nemere.png", probability: "1.37%" },
{ name: "Cofre de Libro de Mejora", icon: "https://m2-helper.com/resources/events/okey/Büchertruhe_Boost.png", probability: "2.99%" },
{ name: "Cofre de Libro de Contraataque", icon: "https://m2-helper.com/resources/events/okey/Büchertruhe_Konter.png", probability: "2.99%" },
{ name: "Cor Draconis (Normal)", icon: "https://m2-helper.com/resources/events/okey/Cor_Draconis_(normal).png", probability: "2.37%" },
{ name: "Cor Draconis (Noble)", icon: "https://m2-helper.com/resources/events/okey/Cor_Draconis_(edel).png", probability: "2.24%" },
{ name: "Cinta del Señor (básica)", icon: "https://m2-helper.com/resources/events/okey/Herrscherband_(einfach).png", probability: "2.24%" },
{ name: "Perla Azul", icon: "https://m2-helper.com/resources/events/okey/Blaue_Perle.png", probability: "2.24%" },
{ name: "Perla Rojo Sangre", icon: "https://m2-helper.com/resources/events/okey/Blutrote_Perle.png", probability: "2.24%" },
{ name: "Poción de Sabiduría", icon: "https://m2-helper.com/resources/events/okey/Trank_der_Weisheit.png", probability: "1.62%" },
{ name: "Poción de Ascensión", icon: "https://m2-helper.com/resources/events/yutnori/Trank_der_Weisheit.png", probability: "1.37%" },
{ name: "Paquete de Piedras del Espíritu (5x)", icon: "https://m2-helper.com/resources/events/yutnori/Geiststeinbündel.png", probability: "1.62%" },
{ name: "Peonza de Fuegos Artificiales (10x)", icon: "https://m2-helper.com/resources/events/yutnori/Feuerwerkskreisel.png", probability: "1.62%" },
{ name: "Petardo Chino (10x)", icon: "https://m2-helper.com/resources/events/yutnori/Chinesisches_Feuerwerk.png", probability: "1.62%" },
{ name: "Pergamino de Bendición", icon: "https://m2-helper.com/resources/events/okey/Segensschriftrolle_B.png", probability: "1.62%" },
{ name: "Anillo de Teletransportación", icon: "https://m2-helper.com/resources/events/okey/Teleportationsring.png", probability: "1.62%" },
{ name: "Zapatos del Viento (1D)", icon: "https://m2-helper.com/resources/events/okey/Windschuhe.png", probability: "1.62%" },
{ name: "Vino de Flor de Melocotón+ (10x)", icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Pfirsichblütenwein_B.png", probability: "1.37%" },
{ name: "Aperitivo de Proteínas", icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Protein-Happen.png", probability: "1.25%" },
{ name: "Piedra Mágica", icon: "https://m2-helper.com/resources/events/okey/Magisches_Stein.png", probability: "1.25%" },
{ name: "Poción de Velocidad (10x)", icon: "https://m2-helper.com/resources/events/okey/Geschwindigkeitstrank_B.png", probability: "1.12%" },
{ name: "Poción de Ataque +15 (5x)", icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Trank_des_Angriffs_+10_B.png", probability: "1.12%" },
{ name: "Poción de Prisa (5x)", icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Trank_der_Hast_B.png", probability: "1.12%" },
{ name: "Judía del Dragón Verde", icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Grüne_Drachenbohne.png", probability: "1.12%" },
{ name: "Mejorar Objeto (B)", icon: "https://m2-helper.com/resources/events/okey/Gegenstand_verstärken_B.png", probability: "0.62%" },
{ name: "Encantar Objeto (B)", icon: "https://m2-helper.com/resources/events/okey/Gegenstand_verzaubern_B.png", probability: "0.62%" },
{ name: "Encantar Objeto+", icon: "https://m2-helper.com/resources/events/okey/Gegenstand_verzaubern+.png", probability: "0.25%" }
]
},
{
category: "Botín del Rey Dorado",
icon: "https://m2-helper.com/resources/events/koenig/Goldene_Königsbeute.png",
contents: [
{ name: "Mazo del Rey", icon: "Events/images/Königsdeck.png", probability: "7.46%" },
{ name: "Pergamino de Bendición", icon: "https://m2-helper.com/resources/events/okey/Segensschriftrolle_B.png", probability: "7.46%" },
{ name: "Huevo de Razador", icon: "https://m2-helper.com/resources/events/okey/Ei_des_Razador.png", probability: "3.31%" },
{ name: "Huevo de Nemere", icon: "https://m2-helper.com/resources/events/okey/Ei_des_Nemere.png", probability: "3.31%" },
{ name: "Paquete de Piedras del Espíritu (10x)", icon: "https://m2-helper.com/resources/events/yutnori/Geiststeinbündel.png", probability: "7.46%" },
{ name: "Peonza de Fuegos Artificiales (20x)", icon: "https://m2-helper.com/resources/events/yutnori/Feuerwerkskreisel.png", probability: "5.80%" },
{ name: "Petardo Chino (20x)", icon: "https://m2-helper.com/resources/events/yutnori/Chinesisches_Feuerwerk.png", probability: "5.80%" },
{ name: "Poción de Sabiduría", icon: "https://m2-helper.com/resources/events/okey/Trank_der_Weisheit.png", probability: "2.49%" },
{ name: "Piedra del Alma", icon: "https://m2-helper.com/resources/events/okey/Seelenstein.png", probability: "4.14%" },
{ name: "Cofre del Tesoro a la Luz de la Luna", icon: "https://m2-helper.com/resources/events/yutnori/Mondlicht-Schatztruhe.png", probability: "2.49%" },
{ name: "Piedra del Herrero", icon: "https://m2-helper.com/resources/events/yutnori/Stein_des_Schmieds.png", probability: "1.99%" },
{ name: "Piedra Mágica", icon: "https://m2-helper.com/resources/events/okey/Magisches_Stein.png", probability: "1.82%" },
{ name: "Perla Blanca", icon: "https://m2-helper.com/resources/events/okey/Weiße_Perle.png", probability: "1.66%" },
{ name: "Cor Draconis (Místico)", icon: "https://m2-helper.com/resources/events/okey/Cor_Draconis_(mystisch).png", probability: "2.49%" },
{ name: "Cor Draconis (Precioso)", icon: "https://m2-helper.com/resources/events/okey/Cor_Draconis_(kostbar).png", probability: "2.49%" },
{ name: "Cofre del Dragón", icon: "https://m2-helper.com/resources/guides/alchemy/Drachentruhe.png", probability: "2.98%" },
{ name: "Judía del Dragón Verde", icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Grüne_Drachenbohne.png", probability: "1.99%" },
{ name: "Vino de Flor de Melocotón XL (5x)", icon: "https://m2-helper.com/resources/events/yutnori/Pfirsichblütenwein_XL.png", probability: "1.82%" },
{ name: "Pase de Entrada (3x)", icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Passierschein.png", probability: "1.99%" },
{ name: "Elixir de la Luna (K)", icon: "https://m2-helper.com/resources/events/okey/Elixier_des_Mondes_(K)_B.png", probability: "2.49%" },
{ name: "Elixir del Sol (K)", icon: "https://m2-helper.com/resources/events/okey/Elixier_der_Sonne_(K)_B.png", probability: "2.49%" },
{ name: "Vino de Flor de Melocotón+ (10x)", icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Pfirsichblütenwein_B.png", probability: "2.82%" },
{ name: "Poción de Velocidad (5x)", icon: "https://m2-helper.com/resources/events/okey/Geschwindigkeitstrank_B.png", probability: "2.82%" },
{ name: "Poción de Ataque +15 (5x)", icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Trank_des_Angriffs_+10_B.png", probability: "2.82%" },
{ name: "Poción de Prisa (5x)", icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Trank_der_Hast_B.png", probability: "2.82%" },
{ name: "León de Batalla (20D)", icon: "https://m2-helper.com/resources/events/okey/Schlachtenlöwe.png", probability: "1.82%" },
{ name: "Tigre de la Tormenta (20D)", icon: "https://m2-helper.com/resources/events/yutnori/Sturmtiger.png", probability: "1.82%" },
{ name: "Medalla del Héroe (1D)", icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Heldenmedaille.png", probability: "1.82%" },
{ name: "Cofre de Libro de Mascota", icon: "https://m2-helper.com/resources/events/yutnori/Pet-Bücherkiste.png", probability: "1.82%" },
{ name: "Dióxido de Titanio", icon: "https://m2-helper.com/resources/events/okey/Titandioxid.png", probability: "1.49%" },
{ name: "Ágata", icon: "https://m2-helper.com/resources/events/okey/Achat.png", probability: "1.49%" },
{ name: "Piedra Lunar", icon: "https://m2-helper.com/resources/events/okey/Mondstein.png", probability: "1.49%" },
{ name: "Mejorar Objeto (B)", icon: "https://m2-helper.com/resources/events/okey/Gegenstand_verstärken_B.png", probability: "1.16%" },
{ name: "Encantar Objeto (B)", icon: "https://m2-helper.com/resources/events/okey/Gegenstand_verzaubern_B.png", probability: "1.16%" },
{ name: "Encantar Objeto+", icon: "https://m2-helper.com/resources/events/okey/Gegenstand_verzaubern+.png", probability: "0.75%" }
]
},
],
imageSrc: "https://m2-helper.com/resources/events/koenig/Schnapp_den_König_UI.png",
imageAlt: "Campo de Juego de Atrapa al Rey",
imageCaption: "Campo de Juego de Atrapa al Rey",
tipsTitle: "Consejos y Trucos:",
tips: [
"Recuerda las posiciones de las cartas 5 reveladas para la regla especial.",
"Intenta revelar filas completas para el bono de +10 puntos.",
"Recoge las cartas ya conocidas con tu 4 para maximizar los puntos.",
],
note: "<strong>Note:</strong> A map change or teleport cancels the current game!",
helperTitle: "Asistente de Atrapa al Rey",
helperDesc: "Usa las cartas debajo del tablero o tu teclado para hacer entradas. <svg class='inline-mouse-icon' viewBox='0 0 20 28' width='16' height='22'><path d='M3 10 C3 5 5 2 10 2 C15 2 17 5 17 10 L17 20 C17 24 15 26 10 26 C5 26 3 24 3 20Z' fill='none' stroke='currentColor' stroke-width='1.5'/><line x1='10' y1='2' x2='10' y2='14' stroke='currentColor' stroke-width='1.5'/><path d='M3.5 10 C3.5 5.5 5.5 2.5 10 2.5 L10 14 L3.5 14Z' fill='#FECE58' opacity='0.7'/></svg> = Sin 5 cercano, <svg class='inline-mouse-icon' viewBox='0 0 20 28' width='16' height='22'><path d='M3 10 C3 5 5 2 10 2 C15 2 17 5 17 10 L17 20 C17 24 15 26 10 26 C5 26 3 24 3 20Z' fill='none' stroke='currentColor' stroke-width='1.5'/><line x1='10' y1='2' x2='10' y2='14' stroke='currentColor' stroke-width='1.5'/><path d='M16.5 10 C16.5 5.5 14.5 2.5 10 2.5 L10 14 L16.5 14Z' fill='#FECE58' opacity='0.7'/></svg> = 5 cercano",
resetText: "Reiniciar",
helperCredit: "Cálculo de probabilidad con la ayuda de ArcMeurtrier",
},
seer: {
title: "Seer Contest",
summary:
"Juega un juego de cartas contra la computadora, gana monedas del Vidente e intercámbialas por cofres.<br><strong>Desde el nivel 30</strong>",
descTitle: "Descripción",
desc: "¡Prueba tu conocimiento de Metin2! El Vidente te hace preguntas difíciles sobre el juego, su historia y secretos. Respóndelas correctamente para obtener grandes recompensas.",
tipsTitle: "Consejos y Trucos:",
tips: [
"Conoce los diferentes mapas y sus monstruos",
"Aprende los nombres de los NPC y sus funciones",
"Recuerda números importantes (requisitos de nivel, costos, etc.)",
"Usa Internet para preguntas difíciles (si se permite)",
],
note: "<strong>Consejo:</strong> Cuantas más preguntas contestes correctamente, más valiosas serán las recompensas!",
},
yutnori: {
title: "Yutnori",
summary:
"Recoge troncos de abedul y juega contra la computadora para obtener varias recompensas.<br><strong>Desde el nivel 30</strong>",
descTitle: "Descripción",
desc: "Durante el evento, recopilas<img src=\"https://m2-helper.com/resources/events/yutnori/Birkenstamm.png\" alt=\"Birch Log\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\">Troncos de Abedul mediante asesinatos de monstruos, que van automáticamente al inventario de eventos. Una vez que hayas recopilado 28 Troncos de Abedul, se convierten en un<img src=\"Events/images/Yutnori-Spielbrett.png\" alt=\"Yutnori Game Board\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\">Tablero de Juego de Yutnori. Puedes poseer un máximo de 999 Tableros de Juego de Yutnori.<br>Con un Tablero de Juego de Yutnori, puedes iniciar el minijuego de Yutnori y competir contra la computadora en un juego de mesa clásico.<br>Alternativamente, puedes intercambiar un Tablero de Juego de Yutnori por un<span class=\"treasure-ticket-highlight\"><img src=\"Events/images/Yutnori-Geheimnis.png\" alt=\"Yutnori Secret\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\"><strong>Yutnori Secret</strong><div class=\"tooltip\">Grants you for 30min:<br>20% EXP<br>5% Caída de Objetos<br>10% Fuerte contra Monstruos</div></span>. Esto cuenta como uno de los <strong>mejores elementos del evento</strong> en el juego, ya que no se limita al período del evento.",
gameplayTitle: "Jugabilidad:",
gameplayDesc: [
"Abre la Interfaz de Eventos e inicia el juego.",
"El primer lanzamiento decide quién comienza, el lanzamiento más bajo comienza. Cada ronda puedes mover una de tus dos piezas de juego según los palitos de Yut lanzados.<br>Se lanzan siempre 4 palitos de Yut. El <strong>número de lados planos</strong> determina el número de campos que puedes avanzar. Comienzas con 250 puntos y pierdes 10 puntos por turno. Si capturas una pieza del oponente, ganas 10 puntos. Si la computadora captura tu pieza, pierdes 10 puntos. Cuando una pieza llega a la meta, ganas 10 puntos o pierdes 10 puntos si es una pieza de la computadora.",
"Si el juego no se termina en 20 turnos, el jugador pierde."
],
probabilityTitle: "Probabilidades y Movimientos:",
probabilityDesc: "Puedes aumentar la probabilidad de un lanzamiento específico seleccionando el lanzamiento correspondiente en la selección de probabilidad. Cuando lanzas Yut o Mo, obtienes otro lanzamiento.",
probabilityTable: [
{ throw: "Do", moves: "1 adelante" },
{ throw: "Ge", moves: "2 adelante" },
{ throw: "Geol", moves: "3 adelante" },
{ throw: "Yut", moves: "4 adelante" },
{ throw: "Mo", moves: "5 adelante" },
{ throw: "Atrás-do", moves: "1 atrás" }
],
probabilityTableHeaders: {
throws: "Lanzamiento",
moves: "Movimientos",
rowLabel: "Movimientos"
},
gameplayImage: {
src: "Events/images/Yut_Nori_Game.png",
alt: "Yutnori Game Board",
caption: "Yutnori Game Board"
},
goalTitle: "Objetivo:",
goalDesc: "Sé el primero en traer ambas piezas de juego a la meta para ganar el juego. Dependiendo de tu puntuación, recibes diferentes recompensas de cofres.",
tipsTitle: "Consejos y Trucos:",
tips: [
"Usa la selección de probabilidad para mejorar tus posibilidades de movimientos específicos.",
"Si una pieza de juego está a solo un campo antes del inicio/meta, intenta usar un Atrás-do.",
"Usa las esquinas del tablero para tomar atajos.",
"Se recomienda conectar dos piezas de juego para ahorrar movimientos.",
],
note: "<strong>Note:</strong> Make sure you exchange enough<img src=\"Events/images/Yutnori-Geheimnis.png\" alt=\"Yutnori Secret\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\">Yutnori Secrets!",
rewardsTitle: "Recompensas:",
rewardsTable: {
versions: [
{
name: "",
chests: [
{
name: "Bronze Yutnori Bundle",
icon: "https://m2-helper.com/resources/events/yutnori/Bronzenes_Yutnori-Bündel.png",
points: "< 150 Puntos",
contents: [
{
name: "EXP (100,000)",
icon: "https://m2-helper.com/resources/exp.png",
probability: "10%"
},
{
name: "Yang (50,000)",
icon: "https://m2-helper.com/resources/yang.png",
probability: "70%"
},
{
name: "Yang (100,000)",
icon: "https://m2-helper.com/resources/yang.png",
probability: "18%"
},
{
name: "Yut Nori Board",
icon: "Events/images/Yutnori-Spielbrett.png",
probability: "2%"
}
]
},
{
name: "Silver Yutnori Trophy",
icon: "https://m2-helper.com/resources/events/yutnori/Silberne_Yutnori-Trophäe.png",
points: "150-219 Puntos",
contents: [
{
name: "EXP (100,000)",
icon: "https://m2-helper.com/resources/exp.png",
probability: "14.4%"
},
{
name: "Yang (100,000)",
icon: "https://m2-helper.com/resources/yang.png",
probability: "14.4%"
},
{
name: "Yang (300,000)",
icon: "https://m2-helper.com/resources/yang.png",
probability: "7.2%"
},
{
name: "Yang (500,000)",
icon: "https://m2-helper.com/resources/yang.png",
probability: "5.0%"
},
{
name: "Yut Nori Board",
icon: "Events/images/Yutnori-Spielbrett.png",
probability: "0.7%"
},
{
name: "Perla Azul",
icon: "https://m2-helper.com/resources/events/yutnori/Blaue_Perle.png",
probability: "1.4%"
},
{
name: "Perla Rojo Sangre",
icon: "https://m2-helper.com/resources/events/yutnori/Blutrote_Perle.png",
probability: "1.4%"
},
{
name: "Monkey Egg (7d)",
icon: "https://m2-helper.com/resources/events/yutnori/Affenei.png",
probability: "1.4%"
},
{
name: "Spider Egg (7d)",
icon: "https://m2-helper.com/resources/events/yutnori/Spinnenei_(Item).png",
probability: "1.4%"
},
{
name: "Razador's Egg (7d)",
icon: "https://m2-helper.com/resources/events/yutnori/Ei_des_Razador.png",
probability: "0.7%"
},
{
name: "Nemere's Egg (7d)",
icon: "https://m2-helper.com/resources/events/yutnori/Ei_des_Nemere.png",
probability: "0.7%"
},
{
name: "Cofre de Libro de Mejora",
icon: "https://m2-helper.com/resources/events/yutnori/Büchertruhe_Boost.png",
probability: "0.7%"
},
{
name: "Cofre de Libro de Contraataque",
icon: "https://m2-helper.com/resources/events/yutnori/Büchertruhe_Konter.png",
probability: "0.7%"
},
{
name: "Cor Draconis (normal)",
icon: "https://m2-helper.com/resources/events/yutnori/Cor_Draconis_(Roh).png",
probability: "3.6%"
},
{
name: "Cor Draconis (noble)",
icon: "https://m2-helper.com/resources/events/yutnori/Cor_Draconis_(edel).png",
probability: "1.4%"
},
{
name: "Mejorar Objeto (B)",
icon: "https://m2-helper.com/resources/events/yutnori/Gegenstand_verstärken_B.png",
probability: "1.4%"
},
{
name: "Enchantment Item (b)",
icon: "https://m2-helper.com/resources/events/yutnori/Gegenstand_verzaubern_B.png",
probability: "1.4%"
},
{
name: "Enchantment Item+",
icon: "https://m2-helper.com/resources/events/yutnori/Gegenstand_verzaubern+.png",
probability: "0.7%"
},
{
name: "Pergamino de Bendición",
icon: "https://m2-helper.com/resources/events/yutnori/Segensschriftrolle.png",
probability: "2.2%"
},
{
name: "Piedra Mágica",
icon: "https://m2-helper.com/resources/events/yutnori/Magischer_Stein.png",
probability: "2.2%"
},
{
name: "Anillo de Teletransportación",
icon: "https://m2-helper.com/resources/events/yutnori/Teleportationsring.png",
probability: "2.2%"
},
{
name: "Potion of Wisdom (3h)",
icon: "https://m2-helper.com/resources/events/yutnori/Trank_der_Weisheit.png",
probability: "3.6%"
},
{
name: "Potion of Ascension (3h)",
icon: "https://m2-helper.com/resources/events/yutnori/Trank_der_Weisheit.png",
probability: "3.6%"
},
{
name: "Wind Shoes (1d)",
icon: "https://m2-helper.com/resources/events/yutnori/Windschuhe.png",
probability: "1.4%"
},
{
name: "Cinta del Señor (básica)",
icon: "https://m2-helper.com/resources/events/yutnori/Herrscherband_(einfach).png",
probability: "1.4%"
},
{
name: "Fireworks Top (10min) (10x)",
icon: "https://m2-helper.com/resources/events/yutnori/Feuerwerkskreisel.png",
probability: "2.2%"
},
{
name: "Chinese Fire Cracker (10min) (10x)",
icon: "https://m2-helper.com/resources/events/yutnori/Chinesisches_Feuerwerk.png",
probability: "2.2%"
},
{
name: "Sting Sword+0",
icon: "https://m2-helper.com/resources/events/yutnori/Stichschwert.png",
probability: "2.9%"
},
{
name: "Demon Blade+0",
icon: "https://m2-helper.com/resources/events/yutnori/Dämonenklinge.png",
probability: "2.9%"
},
{
name: "Siamese Knife+0",
icon: "https://m2-helper.com/resources/events/yutnori/Siamesenmesser.png",
probability: "2.9%"
},
{
name: "Blue Dragon Bow+0",
icon: "https://m2-helper.com/resources/events/yutnori/Blaudrachenbogen.png",
probability: "2.9%"
},
{
name: "Soul Stealing Blade+0",
icon: "https://m2-helper.com/resources/events/yutnori/Halbmenschklinge.png",
probability: "2.9%"
},
{
name: "Hawk Claw+0",
icon: "https://m2-helper.com/resources/events/yutnori/Habichtskralle.png",
probability: "2.9%"
},
{
name: "Ecstasy Fan+0",
icon: "https://m2-helper.com/resources/events/yutnori/Ekstasefächer.png",
probability: "2.9%"
}
]
},
{
name: "Golden Yutnori Trophy",
icon: "https://m2-helper.com/resources/events/yutnori/Goldene_Yutnori-Trophäe.png",
points: "≥ 220 Puntos",
contents: [
{
name: "Yut Nori Board",
icon: "Events/images/Yutnori-Spielbrett.png",
probability: "3.8%"
},
{
name: "Perla Blanca",
icon: "https://m2-helper.com/resources/events/yutnori/Weiße_Perle.png",
probability: "0.8%"
},
{
name: "Ágata",
icon: "https://m2-helper.com/resources/events/yutnori/Achat.png",
probability: "2.3%"
},
{
name: "Dióxido de Titanio",
icon: "https://m2-helper.com/resources/events/yutnori/Titandioxid.png",
probability: "2.3%"
},
{
name: "Piedra Lunar",
icon: "https://m2-helper.com/resources/events/yutnori/Mondstein.png",
probability: "1.5%"
},
{
name: "Razador's Egg (7d)",
icon: "https://m2-helper.com/resources/events/yutnori/Ei_des_Razador.png",
probability: "1.5%"
},
{
name: "Nemere's Egg (7d)",
icon: "https://m2-helper.com/resources/events/yutnori/Ei_des_Nemere.png",
probability: "1.5%"
},
{
name: "Cor Draconis (mystical)",
icon: "https://m2-helper.com/resources/events/yutnori/Cor_Draconis_(mystisch).png",
probability: "5.4%"
},
{
name: "Cor Draconis (precious)",
icon: "https://m2-helper.com/resources/events/yutnori/Cor_Draconis_(kostbar).png",
probability: "6.2%"
},
{
name: "Mejorar Objeto (B)",
icon: "https://m2-helper.com/resources/events/yutnori/Gegenstand_verstärken_B.png",
probability: "3.8%"
},
{
name: "Enchantment Item (b)",
icon: "https://m2-helper.com/resources/events/yutnori/Gegenstand_verzaubern_B.png",
probability: "3.8%"
},
{
name: "Enchantment Item+",
icon: "https://m2-helper.com/resources/events/yutnori/Gegenstand_verzaubern+.png",
probability: "3.1%"
},
{
name: "Pergamino de Bendición",
icon: "https://m2-helper.com/resources/events/yutnori/Segensschriftrolle.png",
probability: "3.8%"
},
{
name: "Piedra del Herrero",
icon: "https://m2-helper.com/resources/events/yutnori/Stein_des_Schmieds.png",
probability: "2.3%"
},
{
name: "Piedra Mágica",
icon: "https://m2-helper.com/resources/events/yutnori/Magischer_Stein.png",
probability: "4.6%"
},
{
name: "Shiver (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/Hui.png",
probability: "1.5%"
},
{
name: "Lava Cave Lizard (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/Lavahöllenechse.png",
probability: "2.3%"
},
{
name: "Mighty Lolly",
icon: "https://m2-helper.com/resources/events/yutnori/Halloween-Lolli.png",
probability: "1.5%"
},
{
name: "Tiger Bone Earring (20h)",
icon: "https://m2-helper.com/resources/events/yutnori/Tigerknochenohrring.png",
probability: "0.8%"
},
{
name: "Dragon Bone Earring (20h)",
icon: "https://m2-helper.com/resources/events/yutnori/Drachenknochenohrring.png",
probability: "0.8%"
},
{
name: "Anillo de Teletransportación",
icon: "https://m2-helper.com/resources/events/yutnori/Teleportationsring.png",
probability: "3.8%"
},
{
name: "Wind Shoes (1d)",
icon: "https://m2-helper.com/resources/events/yutnori/Windschuhe.png",
probability: "2.3%"
},
{
name: "Blessing of Life (10x)",
icon: "https://m2-helper.com/resources/events/yutnori/Segen_des_Lebens.png",
probability: "2.3%"
},
{
name: "Glimmerstone (200x)",
icon: "https://m2-helper.com/resources/events/yutnori/Schmuckstein.png",
probability: "2.3%"
},
{
name: "Paquete de Piedras del Espíritu (10x)",
icon: "https://m2-helper.com/resources/events/yutnori/Geiststeinbündel.png",
probability: "3.1%"
},
{
name: "Potion of Wisdom (3h)",
icon: "https://m2-helper.com/resources/events/yutnori/Trank_der_Weisheit.png",
probability: "6.2%"
},
{
name: "Fireworks Top (10min) (20x)",
icon: "https://m2-helper.com/resources/events/yutnori/Feuerwerkskreisel.png",
probability: "2.3%"
},
{
name: "Chinese Fire Cracker (10min) (20x)",
icon: "https://m2-helper.com/resources/events/yutnori/Chinesisches_Feuerwerk.png",
probability: "2.3%"
},
{
name: "Sting Sword+0",
icon: "https://m2-helper.com/resources/events/yutnori/Stichschwert.png",
probability: "3.1%"
},
{
name: "Demon Blade+0",
icon: "https://m2-helper.com/resources/events/yutnori/Dämonenklinge.png",
probability: "3.1%"
},
{
name: "Siamese Knife+0",
icon: "https://m2-helper.com/resources/events/yutnori/Siamesenmesser.png",
probability: "3.1%"
},
{
name: "Blue Dragon Bow+0",
icon: "https://m2-helper.com/resources/events/yutnori/Blaudrachenbogen.png",
probability: "3.1%"
},
{
name: "Soul Stealing Blade+0",
icon: "https://m2-helper.com/resources/events/yutnori/Halbmenschklinge.png",
probability: "3.1%"
},
{
name: "Hawk Claw+0",
icon: "https://m2-helper.com/resources/events/yutnori/Habichtskralle.png",
probability: "3.1%"
},
{
name: "Ecstasy Fan+0",
icon: "https://m2-helper.com/resources/events/yutnori/Ekstasefächer.png",
probability: "3.1%"
}
]
}
]
}
]
},
rewardsNote: "Con la ayuda del<img src=\"Events/images/Rätselsplitter.png\" alt=\"Fragmento Misterioso\" class=\"inline w-6 h-6 mx-1.5 align-top -mt-0\"><strong>Fragmento Misterioso</strong> puedes fabricar varios cofres de botín. Entre otras cosas, tienes la oportunidad de obtener disfraces raros y bandas para los hombros, abrir cofres para mascotas de botín o mascotas PvP buscadas, y obtener talismanes elementales.",
puzzleChests: {
dropdownLabel: "Fragmento Misterioso Chests:",
selectedChestTitle: "Selected Chest:",
collapsibleLabel: "Show loot list",
chests: [
{
id: "halloween-m",
name: "Halloween Chest (m)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Halloweenkiste_(m).png",
puzzlePieces: 11,
lootList: [
{
name: "Pumpkin Suit (Bonus) (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Kürbis-Smoking.png",
probability: "8.3%"
},
{
name: "Jack-Pumpkin Suit+ (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Jack-Pumpkin-Anzug.png",
probability: "8.3%"
},
{
name: "Zombie Suit+ (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Zombieanzug.png",
probability: "8.3%"
},
{
name: "Wizard Suit+ (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Zaubereranzug.png",
probability: "8.3%"
},
{
name: "Cu. Fang Costume+ (m) (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Fangzahn-Kostüm_(Kupfer)_(m).png",
probability: "8.3%"
},
{
name: "S. Fang Costume+ (m) (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Fangzahn-Kostüm_(Stahl)_(m).png",
probability: "8.3%"
},
{
name: "Vamp+ (red) (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Vampir-Kostüm_(rot)_(m).png",
probability: "8.3%"
},
{
name: "Vamp+ (grey) (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Vampir-Kostüm_(grau)_(m).png",
probability: "8.3%"
},
{
name: "Armour of Horrors+(g) (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Harnisch_des_Horrors_(g)_(m).png",
probability: "8.3%"
},
{
name: "Armour of Horrors+(b) (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Harnisch_des_Horrors_(b)_(m).png",
probability: "8.3%"
},
{
name: "Brown Wolf Garment+ (m) (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Braunes_Wolfsgewand_(m).png",
probability: "8.3%"
},
{
name: "Grey Wolf Garment+ (m) (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Graues_Wolfsgewand_(m).png",
probability: "8.3%"
}
]
},
{
id: "halloween-w",
name: "Halloween Chest (w)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Halloweenkiste_(w).png",
puzzlePieces: 11,
lootList: [
{
name: "Pumpkin Dress (Bonus) (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Kürbis-Kleid.png",
probability: "8.3%"
},
{
name: "Jack-Pumpkin Dress+ (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Jack-Pumpkin-Kleid.png",
probability: "8.3%"
},
{
name: "Zombie Dress+ (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Zombiekleid.png",
probability: "8.3%"
},
{
name: "Witch Dress+ (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Hexenkleid.png",
probability: "8.3%"
},
{
name: "Cu. Fang Costume+ (w) (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Fangzahn-Kostüm_(Kupfer)_(w).png",
probability: "8.3%"
},
{
name: "S. Fang Costume+ (w) (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Fangzahn-Kostüm_(Stahl)_(w).png",
probability: "8.3%"
},
{
name: "Vamp+ (red) (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Vampir-Kostüm_(rot)_(w).png",
probability: "8.3%"
},
{
name: "Vamp+ (grey) (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Vampir-Kostüm_(grau)_(w).png",
probability: "8.3%"
},
{
name: "Armour of Horrors+(g) (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Harnisch_des_Horrors_(g)_(w).png",
probability: "8.3%"
},
{
name: "Armour of Horrors+(b) (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Harnisch_des_Horrors_(b)_(w).png",
probability: "8.3%"
},
{
name: "Brown Wolf Garment+ (w) (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Braunes_Wolfsgewand_(w).png",
probability: "8.3%"
},
{
name: "Grey Wolf Garment+ (w) (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Graues_Wolfsgewand_(w).png",
probability: "8.3%"
}
]
},
{
id: "halloweenhut-m",
name: "Halloween Hat Chest (m)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Halloweenhutkiste_(m).png",
puzzlePieces: 7,
lootList: [
{
name: "Witch Hat",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Hexenhut.png",
probability: "8.3%"
},
{
name: "Jack-Pumpkin Head (m)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Jack-Pumpkin-Kopf_(m)_icon.png",
probability: "8.3%"
},
{
name: "Pumpkin Mask",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Jack-Pumpkin-Kopf_(m)_icon.png",
probability: "8.3%"
},
{
name: "Zombie Pumpkin Mask",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Zombiekürbismaske.png",
probability: "8.3%"
},
{
name: "Vampire Warrior Helmet (red)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Vampirkriegerhelm_(rot)_icon.png",
probability: "8.3%"
},
{
name: "Vampire Warrior Helmet (grey)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Vampirkriegerhelm_(gr.)_icon.png",
probability: "8.3%"
},
{
name: "Fangtooth Helmet (Copper)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Fangzahn-Helm_(Kupfer)_icon.png",
probability: "8.3%"
},
{
name: "Fangtooth Helmet (Steel)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Fangzahn-Helm_(Stahl)_icon.png",
probability: "8.3%"
},
{
name: "Horns of Horror (g) (m)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Hörner_des_Horrors_(g)_(w)_icon.png",
probability: "8.3%"
},
{
name: "Horns of Horror (b) (m)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Hörner_des_Horrors_(b)_(w)_icon.png",
probability: "8.3%"
},
{
name: "Brown Wolf Cap (m)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Braune_Wolfskappe_(w)_icon.png",
probability: "8.3%"
},
{
name: "Grey Wolf Cap (m)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Graue_Wolfskappe_(m)_icon.png",
probability: "8.3%"
}
]
},
{
id: "halloweenhut-w",
name: "Halloween Hat Chest (w)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Halloweenhutkiste_(w).png",
puzzlePieces: 7,
lootList: [
{
name: "Witch Hat",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Hexenhut.png",
probability: "8.3%"
},
{
name: "Jack-Pumpkin Head (w)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Jack-Pumpkin-Kopf_(m)_icon.png",
probability: "8.3%"
},
{
name: "Pumpkin Mask",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Jack-Pumpkin-Kopf_(m)_icon.png",
probability: "8.3%"
},
{
name: "Zombie Pumpkin Mask",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Zombiekürbismaske.png",
probability: "8.3%"
},
{
name: "Vampire Warrior Helmet (red) (w)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Vampirkriegerhelm_(rot)_icon.png",
probability: "8.3%"
},
{
name: "Vampire Warrior Helmet (grey) (w)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Vampirkriegerhelm_(gr.)_icon.png",
probability: "8.3%"
},
{
name: "Fangtooth Helmet (Copper) (w)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Fangzahn-Helm_(Kupfer)_icon.png",
probability: "8.3%"
},
{
name: "Fangtooth Helmet (Steel) (w)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Fangzahn-Helm_(Stahl)_icon.png",
probability: "8.3%"
},
{
name: "Horns of Horror (g) (w)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Hörner_des_Horrors_(g)_(w)_icon.png",
probability: "8.3%"
},
{
name: "Horns of Horror (b) (w)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Hörner_des_Horrors_(b)_(w)_icon.png",
probability: "8.3%"
},
{
name: "Brown Wolf Cap (w)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Braune_Wolfskappe_(w)_icon.png",
probability: "8.3%"
},
{
name: "Grey Wolf Cap (w)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Graue_Wolfskappe_(m)_icon.png",
probability: "8.3%"
}
]
},
{
id: "gruselpet",
name: "Spooky Pet Chest",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Gruselpet-Kiste.png",
puzzlePieces: 11,
lootList: [
{
name: "Boney (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Boney.png",
probability: "8.3%"
},
{
name: "Jade Phoenix (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Jadephönix.png",
probability: "8.3%"
},
{
name: "Small Sweeper (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Kleiner_Feger.png",
probability: "8.3%"
},
{
name: "Pumpkin Head (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Kürbisköpfchen.png",
probability: "8.3%"
},
{
name: "Bruce (Loot) (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Bruce.png",
probability: "8.3%"
},
{
name: "Wayne (Loot) (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Wayne.png",
probability: "8.3%"
},
{
name: "Mrs. Jiangshi+ (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Frau-Jiangshi.png",
probability: "8.3%"
},
{
name: "Mr. Jiangshi+ (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Herr-Jiangshi.png",
probability: "8.3%"
},
{
name: "Shiver (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Hui.png",
probability: "8.3%"
},
{
name: "Snivel (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Buh.png",
probability: "8.3%"
},
{
name: "Astrabell (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Astrabell.png",
probability: "8.3%"
},
{
name: "Helexna (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Helexna.png",
probability: "8.3%"
}
]
},
{
id: "gruselmount",
name: "Spooky Mount Chest",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Gruselmount-Kiste.png",
puzzlePieces: 7,
lootList: [
{
name: "Purple Equus (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Equus_Purpur.png",
probability: "14.3%"
},
{
name: "Nirvana Dragon (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Nirwana-Drache.png",
probability: "14.3%"
},
{
name: "Samsara Dragon (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Samsara-Drache.png",
probability: "14.3%"
},
{
name: "Lava Hell Lizard (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Lavahöllenechse.png",
probability: "14.3%"
},
{
name: "Ice Hell Lizard (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Eishöllenechse.png",
probability: "14.3%"
},
{
name: "Cerberus (gold) (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Zerberus_(gold).png",
probability: "14.3%"
},
{
name: "Cerberus (silver) (30d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Zerberus_(silber).png",
probability: "14.3%"
}
]
},
{
id: "schmuckschatulle",
name: "Jewelry Box",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Schmuckschatulle.png",
puzzlePieces: 29,
lootList: [
{
name: "Power Lollipop (3d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Lolli_der_Kraft.png",
probability: "20.0%"
},
{
name: "Power Lollipop (7d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Lolli_der_Kraft.png",
probability: "1.7%"
},
{
name: "Strength Lollipop",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Halloween-Lolli.png",
probability: "1.7%"
},
{
name: "Magic Lollipop",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Lolli_der_Magie.png",
probability: "1.7%"
},
{
name: "Ring of Willpower",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Ring_der_Willenskraft.png",
probability: "3.3%"
},
{
name: "Ring of Deadly Power",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Ring_der_tödlichen_Macht.png",
probability: "3.3%"
},
{
name: "Crescent Ring",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Halbmondring.png",
probability: "1.7%"
},
{
name: "Ring of Joy",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Ring_der_Freude.png",
probability: "6.7%"
},
{
name: "Amulet of Eternal Love",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Amulett_der_ewigen_Liebe.png",
probability: "6.7%"
},
{
name: "Chocolate Amulet",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Schoko-Amulett.png",
probability: "1.7%"
},
{
name: "Nazar Amulet",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Nazar-Amulett.png",
probability: "6.7%"
},
{
name: "Guardian Amulet",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Amulett_der_Wächter.png",
probability: "1.7%"
},
{
name: "Hero Medal (1d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Heldenmedaille.png",
probability: "10.0%"
},
{
name: "Ascension Potion (3hrs)",
icon: "https://m2-helper.com/resources/events/yutnori/Trank_der_Weisheit.png",
probability: "13.3%"
},
{
name: "Wisdom Potion (3hrs)",
icon: "https://m2-helper.com/resources/events/yutnori/Trank_der_Weisheit.png",
probability: "20.0%"
}
]
},
{
id: "petkiste",
name: "Pet Chest",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Petkiste.png",
puzzlePieces: 15,
lootList: [
{
name: "Huevo de Mono",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Affenei.png",
probability: "50.0%"
},
{
name: "Huevo de Araña",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Spinnenei_(Item).png",
probability: "25.0%"
},
{
name: "Huevo de Nemere",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Ei_des_Nemere.png",
probability: "8.3%"
},
{
name: "Huevo de Razador",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Ei_des_Razador.png",
probability: "7.8%"
},
{
name: "Baby Baashido's Egg",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Baby-Baashidos_Ei.png",
probability: "4.2%"
},
{
name: "Azrael's Egg",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Azraelchens_Ei.png",
probability: "2.1%"
},
{
name: "Little Executioner's Egg",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Moppelhenkerchen-Ei.png",
probability: "2.0%"
},
{
name: "Red Dragon Egg",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Rotes_Drachenei.png",
probability: "0.4%"
},
{
name: "Blue Dragon Egg",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Blaues_Drachenei.png",
probability: "0.08%"
},
{
name: "Nessie's Egg",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Nessie-Ei.png",
probability: "0.08%"
}
]
},
{
id: "baenderbox",
name: "Ribbon Box",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Bänderbox.png",
puzzlePieces: 9,
lootList: [
{
name: "Ruler Band (Simple)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Herrscherband_(einfach).png",
probability: "6.8%"
},
{
name: "Ruler Band (Fine)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Herrscherband_(fein).png",
probability: "0.6%"
},
{
name: "Ruler Band (Noble)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Herrscherband_(edel).png",
probability: "0.1%"
},
{
name: "Master Band (Simple)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Meisterband_(einfach).png",
probability: "6.8%"
},
{
name: "Master Band (Fine)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Meisterband_(fein).png",
probability: "0.6%"
},
{
name: "Master Band (Noble)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Meisterband_(edel).png",
probability: "0.1%"
},
{
name: "Prince Band (Simple)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Fürstenband_(einfach).png",
probability: "6.8%"
},
{
name: "Prince Band (Fine)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Fürstenband_(fein).png",
probability: "0.6%"
},
{
name: "Prince Band (Noble)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Fürstenband_(edel).png",
probability: "0.1%"
},
{
name: "King Band (Simple)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Königsband_(einfach).png",
probability: "6.8%"
},
{
name: "King Band (Fine)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Königsband_(fein).png",
probability: "0.6%"
},
{
name: "King Band (Noble)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Königsband_(edel).png",
probability: "0.1%"
},
{
name: "Band of Zi (Simple)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Zi_(einfach).png",
probability: "5.6%"
},
{
name: "Band of Zi (Fine)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Zi_(fein).png",
probability: "0.2%"
},
{
name: "Band of Chou (Simple)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Chou_(einfach).png",
probability: "5.6%"
},
{
name: "Band of Chou (Fine)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Chou_(fein).png",
probability: "0.2%"
},
{
name: "Band of Yin (Simple)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Yin_(einfach).png",
probability: "5.6%"
},
{
name: "Band of Yin (Fine)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Yin_(fein).png",
probability: "0.2%"
},
{
name: "Band of Mao (Simple)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_der_Mao_(einfach).png",
probability: "5.6%"
},
{
name: "Band of Mao (Fine)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_der_Mao_(fein).png",
probability: "0.2%"
},
{
name: "Band of Chen (Simple)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Chen_(einfach).png",
probability: "5.6%"
},
{
name: "Band of Chen (Fine)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Chen_(fein).png",
probability: "0.2%"
},
{
name: "Band of Si (Simple)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_der_Si_(einfach).png",
probability: "5.6%"
},
{
name: "Band of Si (Fine)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_der_Si_(fein).png",
probability: "0.2%"
},
{
name: "Band of Wu (Simple)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Wu_(einfach).png",
probability: "5.6%"
},
{
name: "Band of Wu (Fine)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Wu_(fein).png",
probability: "0.2%"
},
{
name: "Band of Wei (Simple)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Wei_(einfach).png",
probability: "5.6%"
},
{
name: "Band of Wei (Fine)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Wei_(fein).png",
probability: "0.2%"
},
{
name: "Band of Shen (Simple)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Shen_(einfach).png",
probability: "5.6%"
},
{
name: "Band of Shen (Fine)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Shen_(fein).png",
probability: "0.2%"
},
{
name: "Band of Yu (Simple)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Yu_(einfach).png",
probability: "5.6%"
},
{
name: "Band of Yu (Fine)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Yu_(fein).png",
probability: "0.2%"
},
{
name: "Band of Xu (Simple)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Xu_(einfach).png",
probability: "5.6%"
},
{
name: "Band of Xu (Fine)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Xu_(fein).png",
probability: "0.2%"
},
{
name: "Band of Hai (Simple)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Hai_(einfach).png",
probability: "5.6%"
},
{
name: "Band of Hai (Fine)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Band_des_Hai_(fein).png",
probability: "0.2%"
}
]
},
{
id: "ornamentkiste",
name: "Ornament Chest",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Ornamentkiste.png",
puzzlePieces: 33,
lootList: [
{
name: "Talismán de Fuego+0",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Feuertalisman.png",
probability: "0.7%"
},
{
name: "Talismán de Hielo+0",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Eistalisman.png",
probability: "0.7%"
},
{
name: "Talismán de Tierra+0",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Erdtalisman.png",
probability: "0.7%"
},
{
name: "Talismán Oscuro+0",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Dunkler_Talisman.png",
probability: "0.7%"
},
{
name: "Talismán del Viento+0",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Windtalisman.png",
probability: "0.7%"
},
{
name: "Talismán del Rayo+0",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Blitztalisman.png",
probability: "0.7%"
},
{
name: "Red Zodiac Chest (50x)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Rote_Zodiakschatulle.png",
probability: "25.7%"
},
{
name: "Blue Zodiac Chest (50x)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Blaue_Zodiakschatulle.png",
probability: "33.1%"
},
{
name: "Element Flower (50x)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Elementblüte.png",
probability: "22.0%"
},
{
name: "Guardian's Signum (3hrs)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Signum_der_Wächter.png",
probability: "7.4%"
},
{
name: "Sphere Scroll",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Sphärenpergament_(h).png",
probability: "7.4%"
}
]
},
{
id: "ultimate-pet-book",
name: "Ultimate Pet Book Chest",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Pet-Buch-Kiste.png",
puzzlePieces: 14,
lootList: [
{
name: "Resistance (Warrior)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "2.8%"
},
{
name: "Resistance (Sura)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "2.8%"
},
{
name: "Resistance (Ninja)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "2.8%"
},
{
name: "Resistance (Shaman)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "2.8%"
},
{
name: "Resistance (Lycan)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "2.8%"
},
{
name: "Berserker Book",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "9.3%"
},
{
name: "Magic Break Book",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "9.3%"
},
{
name: "Acceleration Book",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "0.9%"
},
{
name: "Drill Book",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "4.7%"
},
{
name: "Renewal Book",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-blau.png",
probability: "3.7%"
},
{
name: "Vampire Book",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "9.3%"
},
{
name: "Ghost Book",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "14.0%"
},
{
name: "Obstacle Book",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "0.9%"
},
{
name: "Mirror Book",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "0.9%"
},
{
name: "Yang Drop Book",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "9.3%"
},
{
name: "Range Book",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "14.0%"
},
{
name: "Invincibility Book",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-blau.png",
probability: "1.4%"
},
{
name: "Healing Book",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-blau.png",
probability: "1.4%"
},
{
name: "Brewer Book",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "0.9%"
},
{
name: "Libro del Cazador de Monstruos",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "0.9%"
},
{
name: "Sharp Eye Book",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "0.9%"
},
{
name: "Life Drain Book",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-rot.png",
probability: "0.9%"
},
{
name: "Featherweight Book",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/pet-blau.png",
probability: "0.9%"
},
{
name: "Pet Enchant",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Pet_verzaubern.png",
probability: "0.9%"
},
{
name: "Pet Reverti",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Pet_Reverti.png",
probability: "0.9%"
},
{
name: "Pet Revertus",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Pet_Revertus.png",
probability: "0.9%"
}
]
},
{
id: "risserzahn-plus",
name: "Ripper Fang Chest+",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Risserzahnkiste+.png",
puzzlePieces: 25,
lootList: [
{
name: "Contains a weapon skin of your choice:",
isDescription: true
},
{
name: "Ripper Fang Blade",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Risserzahn-Klinge.png"
},
{
name: "Ripper Fang Dagger",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Risserzahn-Dolch.png"
},
{
name: "Ripper Fang Bow",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Risserzahn-Bogen.png"
},
{
name: "Ripper Fang Claws",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Risserzahn-Krallen.png"
},
{
name: "Ripper Fang Fan",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Risserzahn-Fächer.png"
},
{
name: "Ripper Fang Bell",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Risserzahn-Glocke.png"
},
{
name: "Ripper Fang Glaive",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Risserzahn-Glefe.png"
}
]
},
{
id: "cor-draconis",
name: "Cor Draconis Chest",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Cor_Draconis-Kiste.png",
puzzlePieces: 55,
lootList: [
{
name: "Cor Draconis (Raw)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Cor_Draconis_(Roh).png",
probability: "36.3%"
},
{
name: "Cor Draconis (Normal)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Cor_Draconis_(Roh).png",
probability: "12.1%"
},
{
name: "Cor Draconis (Noble)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Cor_Draconis_(edel).png",
probability: "7.3%"
},
{
name: "Cor Draconis (Precioso)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Cor_Draconis_(kostbar).png",
probability: "4.0%"
},
{
name: "Cor Draconis (Mystical)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Cor_Draconis_(mystisch).png",
probability: "2.0%"
},
{
name: "Judía del Dragón Verde",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Grüne_Drachenbohne.png",
probability: "28.2%"
},
{
name: "Blue Dragon Bean",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Blaue_Drachenbohne.png",
probability: "6.0%"
},
{
name: "Pink Dragon Bean",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Rosa_Drachenbohne.png",
probability: "4.0%"
}
]
},
{
id: "gayakiste",
name: "Gaya Chest",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Gayakiste.png",
puzzlePieces: 7,
lootList: [
{
name: "Always contains the following items:",
isDescription: true
},
{
name: "Glimmerstone (1200x)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Schmuckstein.png",
probability: "100%"
},
{
name: "Paquete de Piedras del Espíritu (10x)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Geiststeinbündel.png",
probability: "100%"
},
{
name: "Gaya Merchant Reiniciar",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Gayahandel_zurücksetzen.png",
probability: "100%"
},
{
name: "Gaya Merchant Extension",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Gayahandelerweiterung.png",
probability: "100%"
}
]
},
{
id: "mysterien",
name: "Mystery Chest",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Kiste_der_Mysterien.png",
puzzlePieces: 11,
lootList: [
{
name: "Perla Blanca",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Weiße_Perle.png",
probability: "6.5%"
},
{
name: "Perla Azul",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Blaue_Perle.png",
probability: "13.1%"
},
{
name: "Blood Red Pearl",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Blutrote_Perle.png",
probability: "18.3%"
},
{
name: "Dióxido de Titanio",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Titandioxid.png",
probability: "0.1%"
},
{
name: "Ágata",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Achat.png",
probability: "0.3%"
},
{
name: "Piedra Lunar",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Mondstein.png",
probability: "0.1%"
},
{
name: "Gold Metallic Dye",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Goldmetallic_Farbstoff.png",
probability: "7.8%"
},
{
name: "Red Flame Stone",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Rotflammenstein.png",
probability: "11.8%"
},
{
name: "Queen Meley's Chest",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Truhe_der_Königin_Meley.png",
probability: "1.3%"
},
{
name: "Dragon Guardian's Chest",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Truhe_der_Königin_Meley.png",
probability: "1.3%"
},
{
name: "Beran-Setaou's Chest",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Truhe_des_Beran-Setaou.png",
probability: "3.9%"
},
{
name: "Bagjanamu's Chest",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Truhe_des_Bagjanamu.png",
probability: "5.2%"
},
{
name: "Razador's Chest",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Truhe_des_Razador.png",
probability: "14.4%"
},
{
name: "Nemere's Chest",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Truhe_des_Nemere.png",
probability: "13.1%"
},
{
name: "Jotun Thrym's Chest",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Jotun_Thrym-Truhe.png",
probability: "1.3%"
},
{
name: "Hydra's Chest",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Hydras_Truhe.png",
probability: "1.3%"
}
]
},
{
id: "rubinkiste",
name: "Ruby Chest",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Rubinkiste.png",
puzzlePieces: 11,
lootList: [
{
name: "Peach Blossom Wine (3x)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Pfirsichblütenwein_B.png",
probability: "2.9%"
},
{
name: "Status Reiniciar",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Status-Neuverteilung_B.png",
probability: "2.9%"
},
{
name: "Shrunken Head",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Schrumpfkopf.png",
probability: "2.9%"
},
{
name: "Haste Potion (30min) (3x)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Trank_der_Hast_B.png",
probability: "2.9%"
},
{
name: "Moon Elixir (M)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Elixier_des_Mondes_(M)_B.png",
probability: "2.9%"
},
{
name: "Metin Compass",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Kompass_des_Metinsteins_B.png",
probability: "2.9%"
},
{
name: "Courage Cape",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Tapferkeitsumhang_B.png",
probability: "2.9%"
},
{
name: "Dragon Medal (3x)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Medaille_des_Drachen_B.png",
probability: "2.9%"
},
{
name: "Dragon Scroll",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Schriftrolle_des_Drachen_B.png",
probability: "2.9%"
},
{
name: "Blood Stone",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Blutstein.png",
probability: "2.9%"
},
{
name: "Leader's Book (1hr)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Buch_des_Anführers_B.png",
probability: "2.9%"
},
{
name: "Speed Potion (30min) (3x)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Geschwindigkeitstrank_B.png",
probability: "2.9%"
},
{
name: "Item Upgrade (B)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Gegenstand_verstärken_B.png",
probability: "0.3%"
},
{
name: "Item Enchant (B)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Gegenstand_verzaubern_B.png",
probability: "0.3%"
},
{
name: "Blessing Orb",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Segenskugel_B.png",
probability: "2.9%"
},
{
name: "Pergamino de Bendición",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Segensschriftrolle_B.png",
probability: "2.9%"
},
{
name: "Attack Potion +15 (30min) (3x)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Trank_des_Angriffs_+10_B.png",
probability: "2.9%"
},
{
name: "Attack Potion +20 (30min) (3x)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Trank_des_Angriffs_+20_B.png",
probability: "2.9%"
},
{
name: "Pass",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Passierschein.png",
probability: "2.9%"
},
{
name: "Research Elixir",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Elixier_des_Forschers.png",
probability: "2.9%"
},
{
name: "Sun Elixir (M)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Elixier_der_Sonne_(M)_B.png",
probability: "2.9%"
},
{
name: "Wind Shoes (1d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Windschuhe.png",
probability: "2.9%"
},
{
name: "Exorcism Scroll",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Exorzismus-Schriftrolle.png",
probability: "2.9%"
},
{
name: "Stone Manual",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Stein-Handbuch.png",
probability: "2.9%"
},
{
name: "Protein Bite",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Protein-Happen.png",
probability: "2.9%"
},
{
name: "Fruit of Life",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Frucht_des_Lebens.png",
probability: "2.9%"
},
{
name: "Peach Blossom Wine+ (3x)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Pfirsichblütenwein_B.png",
probability: "2.9%"
},
{
name: "Concentrated Reading",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Konzentriertes_Lesen.png",
probability: "2.9%"
},
{
name: "Dragon God Life (30min) (3x)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Drachengott-Leben.png",
probability: "2.9%"
},
{
name: "Dragon God Attack (30min) (3x)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Drachengott-Angriff.png",
probability: "2.9%"
},
{
name: "Thief Gloves (7d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Handschuhe_des_Diebes.png",
probability: "2.9%"
},
{
name: "Luck Medal (7d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Medaille_des_Glücks.png",
probability: "2.9%"
},
{
name: "Anillo de Teletransportación",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Teleportationsring.png",
probability: "2.9%"
},
{
name: "Pet Name Scroll",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Pergament_der_Pet-Namen.png",
probability: "2.9%"
},
{
name: "Extensión de Inventario",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Inventarerweiterung.png",
probability: "2.9%"
},
{
name: "Anillo de Secretos (15d)",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Ring_der_Geheimnisse.png",
probability: "2.9%"
},
{
name: "Artículo Encantar+",
icon: "https://m2-helper.com/resources/events/yutnori/shard-chests/Gegenstand_verzaubern+.png",
probability: "0.1%"
}
]
}
]
},
secretCalculator: {
title: "Calculadora de Secretos de Yutnori",
minutesLabel: "Minutos por Carrera:",
secretsLabel: "Número de Secretos de Yutnori:",
calculateBtn: "Calcular",
resultLabel: "Carreras Posibles:"
},
},
},
},
}
