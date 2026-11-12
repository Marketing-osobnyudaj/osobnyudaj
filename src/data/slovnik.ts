// Glossary terms for /slovnik-pojmov, grouped by first letter (from the design's slovnik-data.js).
// TODO: load from the CMS once the administration is built.

export type Term = { term: string; desc: string };

export const glossary: Record<string, Term[]> = {
  A: [
    { term: 'Adware', desc: "Adware je typ softvéru, ktorý automaticky zobrazuje alebo sťahuje reklamy do počítača alebo mobilného zariadenia. Často sa inštaluje bez vedomia používateľa a môže spomaliť výkon zariadenia. Je dôležité ho odstrániť, aby sa zachovala bezpečnosť a efektivita systému." },
    { term: 'API Abuse', desc: "API Abuse označuje zneužitie rozhraní API, ktoré môže viesť k narušeniu bezpečnosti, zníženiu výkonu alebo neautorizovanému prístupu k dátam. Je dôležité chrániť API pred zneužitím, aby sa zabezpečila integrita a dôvernosť údajov a služieb, ktoré poskytujú." },
    { term: 'API Injection', desc: "API Injection je bezpečnostná hrozba, pri ktorej útočník vkladá škodlivé kódy do API požiadaviek. Tieto útoky môžu viesť k neoprávnenému prístupu k dátam alebo k narušeniu funkčnosti aplikácie. Je dôležité implementovať ochranné opatrenia na zabezpečenie API proti takýmto útokom." },
    { term: 'Audit GDPR', desc: "Interný audit GDPR je proces hodnotenia súladu organizácie s nariadením o ochrane osobných údajov. Pomáha identifikovať riziká a zabezpečiť, že všetky procesy spĺňajú právne požiadavky. Je dôležitý pre ochranu údajov a predchádzanie sankciám." },
  ],
  C: [
    { term: 'Code Injection', desc: "Code Injection je technika útoku, pri ktorej útočník vkladá škodlivý kód do aplikácie alebo systému. Tento kód môže spôsobiť neoprávnený prístup k dátam alebo narušiť funkčnosť systému. Je dôležité chrániť sa pred týmto typom útoku, aby sa zabezpečila integrita a bezpečnosť dát." },
    { term: 'Cyberstalking', desc: "Cyberstalking je forma obťažovania, pri ktorej útočník využíva internet na sledovanie alebo zastrašovanie obete. Tento druh prenasledovania môže zahŕňať neustále e-maily, správy alebo príspevky na sociálnych sieťach. Je dôležité ho rozpoznať a riešiť, aby sa zabránilo psychickému stresu a ohrozeniu bezpečnosti." },
  ],
  D: [
    { term: 'DDoS útok', desc: "DDoS útok (Distributed Denial of Service) je typ kybernetického útoku, pri ktorom útočníci preťažia server alebo sieť nadmerným množstvom falošných požiadaviek. To môže spôsobiť nedostupnosť služieb pre legitímnych používateľov. DDoS útoky sú závažnou hrozbou pre online bezpečnosť." },
    { term: 'Defamation (online ohováranie)', desc: "Online ohováranie je forma poškodzovania dobrého mena osoby alebo organizácie prostredníctvom internetu. Môže zahŕňať nepravdivé alebo zavádzajúce informácie, ktoré môžu poškodiť povesť a spôsobiť finančné alebo emocionálne škody. Rozumieť tomu je dôležité pre ochranu vašich práv." },
    { term: 'Digitálna empatia', desc: "Digitálna empatia je schopnosť rozpoznať a porozumieť emóciám a potrebám ľudí v online prostredí. Je dôležitá pre budovanie pozitívnych vzťahov a efektívnu komunikáciu na internete, čím prispieva k lepšiemu porozumeniu a spolupráci v digitálnom svete." },
    { term: 'Domain Hijacking', desc: "Domain Hijacking je proces, pri ktorom útočník neoprávnene prevezme kontrolu nad doménou. Tento útok môže viesť k strate prístupu k webovej stránke, poškodeniu reputácie a finančným stratám. Je dôležité chrániť svoje domény pomocou silných hesiel a bezpečnostných opatrení." },
    { term: 'Dotknutá osoba', desc: "Dotknutá osoba je jednotlivec, ktorého osobné údaje sú spracúvané podľa GDPR. Tento pojem je kľúčový pre ochranu súkromia, pretože definuje práva a povinnosti v oblasti správy osobných údajov. Znalosť svojich práv pomáha chrániť vaše osobné informácie." },
    { term: 'Downgrade Attack', desc: "Downgrade Attack je typ kybernetického útoku, pri ktorom útočník prinúti systém používať staršiu, menej bezpečnú verziu protokolu alebo softvéru. To môže viesť k zraniteľnostiam a zvýšiť riziko neoprávneného prístupu k citlivým údajom. Je dôležité chrániť systémy pred takýmito útokmi." },
    { term: 'doxing', desc: "Doxing je prax zverejňovania súkromných informácií o osobe bez jej súhlasu, často s cieľom zastrašiť alebo poškodiť. Táto forma kyberšikany môže mať vážne následky pre obeť, vrátane straty súkromia a bezpečnosti." },
    { term: 'DPO', desc: "DPO, alebo zodpovedná osoba, je odborník na ochranu osobných údajov, ktorý zabezpečuje, že organizácia dodržiava predpisy GDPR. Je kľúčový pre ochranu súkromia a bezpečnosť údajov, pretože dohliada na správne spracovanie a ochranu osobných informácií." },
    { term: 'Drive-by Download', desc: "Drive-by Download je typ kybernetického útoku, pri ktorom sa škodlivý softvér automaticky stiahne do zariadenia používateľa bez jeho vedomia alebo súhlasu. Tento útok môže viesť k strate dát alebo narušeniu súkromia, preto je dôležité mať aktualizovaný antivírusový program a byť opatrný pri prehliadaní webu." },
    { term: 'Dropper', desc: "Dropper je typ škodlivého softvéru, ktorý je navrhnutý na inštaláciu ďalších škodlivých programov do infikovaného zariadenia. Často sa používa na obchádzanie bezpečnostných opatrení a môže byť ťažké ho detegovať. Je dôležité mať aktuálny antivírusový softvér na ochranu pred takýmito hrozbami." },
  ],
  E: [
    { term: 'Email Spoofing', desc: "Email Spoofing je technika, pri ktorej útočník falšuje emailovú adresu odosielateľa, aby oklamal príjemcu a získal citlivé informácie. Tento podvod môže viesť k krádeži identity alebo finančným stratám. Je dôležité rozpoznať a chrániť sa pred takýmito útokmi." },
    { term: 'Exploit', desc: "Exploit je špeciálny softvér alebo skript, ktorý využíva chyby alebo zraniteľnosti v systéme na získanie neoprávneného prístupu alebo spôsobenie škody. Je dôležitý pre bezpečnosť IT, pretože pomáha identifikovať a opraviť slabé miesta skôr, než ich môžu zneužiť útočníci." },
  ],
  F: [
    { term: 'Fake news o osobe', desc: "Fake news o osobe sú nepravdivé alebo zavádzajúce informácie šírené o jednotlivcoch s cieľom poškodiť ich reputáciu alebo ovplyvniť verejnú mienku. Tieto správy môžu byť vytvorené a šírené cez rôzne médiá a sociálne siete, čo môže mať vážne dôsledky pre dotknuté osoby." },
    { term: 'Falošné hodnotenia a recenzie', desc: "Falošné hodnotenia a recenzie sú nepravdivé alebo zavádzajúce komentáre, ktoré sú zverejnené s cieľom manipulovať s verejnou mienkou o produkte alebo službe. Môžu poškodiť reputáciu firiem a ovplyvniť rozhodovanie spotrebiteľov. Je dôležité ich rozpoznať a riešiť." },
    { term: 'falošné profily', desc: "Falošné profily sú účty na sociálnych sieťach alebo iných online platformách, ktoré predstierajú byť niekým iným. Často sa používajú na podvody, kyberšikanu alebo krádež identity. Rozpoznanie a nahlásenie takýchto profilov je kľúčové pre online bezpečnosť." },
    { term: 'Firewall', desc: "Firewall je bezpečnostný systém, ktorý monitoruje a kontroluje prichádzajúcu a odchádzajúcu sieťovú prevádzku na základe stanovených bezpečnostných pravidiel. Je dôležitý pre ochranu počítačových systémov pred neoprávneným prístupom a kybernetickými hrozbami." },
    { term: 'Flaming', desc: "Flaming je online správanie, pri ktorom ľudia používajú urážlivý alebo agresívny jazyk v diskusiách alebo komentároch. Tento jav môže viesť k eskalácii konfliktov a narušeniu online komunity. Je dôležité rozpoznať a riešiť flaming, aby sa udržala zdravá online komunikácia." },
  ],
  G: [
    { term: 'GDPR', desc: "GDPR, alebo Všeobecné nariadenie o ochrane údajov, je legislatíva EÚ, ktorá posilňuje práva jednotlivcov na ochranu osobných údajov. Zabezpečuje, že organizácie, ktoré spracúvajú osobné údaje, dodržiavajú prísne pravidlá na ich ochranu a transparentnosť. Je dôležité pre ochranu súkromia a dôveru spotrebiteľov." },
    { term: 'Griefing', desc: "Griefing je forma kyberšikany, kde hráči úmyselne narúšajú hru iným hráčom. Môže zahŕňať ničenie herných objektov, obťažovanie alebo iné formy sabotáže. Tento jav je problémom, pretože môže zničiť herný zážitok a odradiť hráčov od účasti v online komunitách." },
  ],
  H: [
    { term: 'Heartbleed', desc: "Heartbleed je závažná bezpečnostná chyba v softvéri OpenSSL, ktorá umožňuje útočníkom získať citlivé informácie z pamäte servera. Táto chyba môže viesť k odhaleniu hesiel, súkromných kľúčov a ďalších dôverných údajov, čo ohrozuje bezpečnosť online komunikácie." },
    { term: 'HTTP Flood', desc: "HTTP Flood je typ útoku DDoS, ktorý zahŕňa zasielanie veľkého množstva HTTP požiadaviek na server s cieľom ho preťažiť a spôsobiť jeho nedostupnosť. Tento útok môže narušiť prevádzku webových stránok a spôsobiť finančné straty. Je dôležité rozpoznať a chrániť sa pred takýmito hrozbami." },
  ],
  J: [
    { term: 'Juice Jacking', desc: "Juice Jacking je bezpečnostná hrozba, ktorá sa vyskytuje pri nabíjaní zariadení cez verejné USB porty. Útočníci môžu získať prístup k vašim osobným údajom alebo nainštalovať škodlivý softvér. Je dôležité byť opatrný pri používaní neznámych nabíjacích staníc." },
  ],
  K: [
    { term: 'Koordinované nahlasovanie účtu', desc: "Koordinované nahlasovanie účtu je taktika kyberšikany, kde skupina ľudí hromadne nahlasuje účet obete s cieľom ho zablokovať alebo odstrániť. Tento postup môže mať vážne dôsledky na online prítomnosť a psychické zdravie obete. Je dôležité rozpoznať a riešiť takéto útoky." },
    { term: 'krádež identity', desc: "Krádež identity v kyberpriestore zahŕňa neoprávnené použitie osobných údajov na vytvorenie falošnej identity. Tento typ kyberšikany môže viesť k finančným stratám a poškodeniu reputácie obete. Dôležité je vedieť, ako sa chrániť pred takýmito útokmi." },
    { term: 'Kybergrooming', desc: "Kybergrooming je nebezpečný proces, pri ktorom sa dospelí snažia získať dôveru detí online s cieľom ich manipulácie alebo zneužitia. Tento fenomén je dôležité chápať, aby sme mohli chrániť mladých používateľov internetu pred potenciálnymi hrozbami a zabezpečiť ich bezpečnosť online." },
    { term: 'Kybernetická bezpečnosť', desc: "Kybernetická bezpečnosť sa zaoberá ochranou systémov, sietí a programov pred digitálnymi útokmi. Tieto útoky často zahŕňajú prístup k citlivým informáciám, ich zmenu alebo zničenie. Je dôležitá pre ochranu osobných údajov, finančných informácií a zabezpečenie dôveryhodnosti online služieb." },
    { term: 'kybernetický útok', desc: "Kybernetický útok je zameraný na narušenie, poškodenie alebo získanie neoprávneného prístupu k počítačovým systémom a údajom. Tieto útoky môžu mať rôzne formy, vrátane phishingu, malware a ransomware." },
    { term: 'Kyberšikana v online hrách', desc: "Kyberšikana v online hrách zahŕňa nevhodné správanie, ako sú urážky a sabotovanie, ktoré môžu hráčom spôsobiť emocionálnu ujmu. Je dôležité rozpoznať a riešiť takéto správanie, aby sa zabezpečilo bezpečné a príjemné herné prostredie pre všetkých účastníkov." },
    { term: 'Kyberšikanovanie', desc: "Kyberšikanovanie je forma šikanovania, ktorá sa odohráva prostredníctvom digitálnych technológií, ako sú sociálne siete, e-maily alebo textové správy. Môže mať vážne následky na psychické zdravie obetí, preto je dôležité rozpoznať a riešiť ho včas." },
  ],
  L: [
    { term: 'LDAP Injection', desc: "LDAP Injection je bezpečnostná zraniteľnosť, ktorá umožňuje útočníkom manipulovať s LDAP dotazmi, aby získali neoprávnený prístup k informáciám alebo poškodili systém. Je dôležité chrániť aplikácie pred touto hrozbou, aby sa zabránilo úniku citlivých údajov." },
  ],
  M: [
    { term: 'Man-in-the-Middle (MITM) útok', desc: "Man-in-the-Middle (MITM) útok je typ kybernetického útoku, pri ktorom útočník tajne zachytáva a potenciálne mení komunikáciu medzi dvoma stranami. Tento útok môže viesť k odcudzeniu citlivých údajov, ako sú heslá a finančné informácie, a preto je dôležité sa pred ním chrániť." },
  ],
  N: [
    { term: 'NIS2', desc: "NIS2 je aktualizovaná smernica EÚ zameraná na posilnenie kybernetickej bezpečnosti v členských štátoch. Rozširuje pôsobnosť pôvodnej smernice NIS a zavádza prísnejšie požiadavky na ochranu kritickej infraštruktúry a digitálnych služieb. Je dôležitá pre zvýšenie odolnosti proti kybernetickým hrozbám." },
  ],
  O: [
    { term: 'Ochrana oznamovateľa', desc: "Ochrana oznamovateľa sa týka opatrení na ochranu ľudí, ktorí upozorňujú na nezákonné alebo neetické praktiky v organizáciách. Táto ochrana je dôležitá na zabezpečenie transparentnosti a spravodlivosti, a na podporu odvahy oznamovateľov pri nahlasovaní nesprávneho konania." },
    { term: 'online ohováranie', desc: "Online ohováranie je šírenie nepravdivých informácií o osobe cez internet, ktoré môže poškodiť jej povesť. Tento čin je často súčasťou kyberšikany a môže mať právne dôsledky. Dôležité je vedieť, ako sa brániť a chrániť svoju reputáciu." },
    { term: 'outing', desc: "Outing je forma kyberšikany, kde sú osobné alebo citlivé informácie o niekom zverejnené bez jeho súhlasu. Tento útok môže mať vážne dôsledky na súkromie a bezpečnosť obete, a preto je dôležité vedieť, ako sa chrániť pred takýmto zneužitím." },
  ],
  P: [
    { term: 'Pass-the-Hash', desc: "Pass-the-Hash je technika útoku, pri ktorej útočník získa hash hesla a použije ho na autentifikáciu bez potreby poznať samotné heslo. Tento typ útoku je nebezpečný, pretože umožňuje prístup k systémom a dátam bez odhalenia hesla, čím ohrozuje bezpečnosť IT infraštruktúry." },
    { term: 'Pharming', desc: "Pharming je kybernetický útok, pri ktorom útočníci presmerujú návštevníkov legitímnych webových stránok na falošné stránky s cieľom ukradnúť citlivé údaje, ako sú prihlasovacie údaje alebo finančné informácie. Tento typ útoku môže mať vážne dôsledky na bezpečnosť a súkromie používateľov." },
    { term: 'Phishing', desc: "Phishing je podvodná technika, pri ktorej útočníci predstierajú, že sú dôveryhodné entity, aby získali citlivé informácie, ako sú heslá alebo čísla kreditných kariet. Tento typ útoku môže mať vážne následky pre vašu bezpečnosť a súkromie online. Naučte sa, ako sa chrániť pred phishingom." },
    { term: 'Protispoločenská činnosť', desc: "Protispoločenská činnosť zahŕňa správanie alebo aktivity, ktoré sú v rozpore so zákonmi alebo etickými normami spoločnosti. Môže mať negatívny vplyv na jednotlivcov alebo komunity a často vedie k právnym dôsledkom. Je dôležité rozpoznať a riešiť takéto správanie pre ochranu spoločnosti." },
  ],
  R: [
    { term: 'Ransomvér', desc: "Ransomvér je typ škodlivého softvéru, ktorý uzamkne alebo zašifruje súbory na vašom zariadení a žiada výkupné za ich odblokovanie. Tento útok môže spôsobiť vážne narušenie osobných aj firemných dát, preto je dôležité mať silnú kybernetickú ochranu a zálohy dát." },
    { term: 'Report bombing', desc: "Report bombing je forma kyberšikany, kde sa zneužíva systém nahlasovania na sociálnych sieťach na hromadné nahlasovanie účtu s cieľom jeho zablokovania. Tento útok môže vážne poškodiť reputáciu a online prítomnosť obete. Je dôležité rozpoznať a riešiť takéto útoky." },
    { term: 'Rootkit', desc: "Rootkit je typ škodlivého softvéru, ktorý útočníkom umožňuje získať neautorizovaný prístup k počítaču alebo sieti bez toho, aby bol zistený. Rootkity sú nebezpečné, pretože môžu skrývať iné škodlivé programy a ohroziť bezpečnosť systému. Ich detekcia a odstránenie môže byť veľmi náročné." },
  ],
  S: [
    { term: 'Scareware', desc: "Scareware je typ škodlivého softvéru, ktorý sa snaží vystrašiť používateľa falošnými varovaniami o bezpečnostných hrozbách. Cieľom je prinútiť obete k nákupu zbytočného softvéru alebo poskytnutiu osobných údajov. Je dôležité byť obozretný a overovať pravosť takýchto upozornení." },
    { term: 'Screenlogger', desc: "Screenlogger je softvér, ktorý zaznamenáva všetko, čo sa zobrazuje na obrazovke používateľa. Tento nástroj môže byť použitý na sledovanie aktivity používateľov, čo môže byť užitočné pre bezpečnostné účely, ale aj potenciálne zneužité na narušenie súkromia. Dôležité je poznať jeho funkcie a riziká." },
    { term: 'Session Fixation', desc: "Session Fixation je bezpečnostná zraniteľnosť, pri ktorej útočník manipuluje s identifikátorom relácie, aby prevzal kontrolu nad užívateľskou reláciou. Táto zraniteľnosť môže viesť k neoprávnenému prístupu k citlivým informáciám a ohroziť bezpečnosť webových aplikácií." },
    { term: 'Sextortion', desc: "Sextortion je forma vydierania, pri ktorej útočník hrozí zverejnením citlivých alebo intímnych materiálov, pokiaľ obeť nesplní jeho požiadavky. Tento typ nátlaku môže mať vážne psychologické a finančné dôsledky pre obeť. Je dôležité vedieť, ako sa chrániť a reagovať na takéto hrozby." },
    { term: 'Shellshock', desc: "Shellshock je bezpečnostná chyba objavená v Unixových systémoch, ktorá umožňuje útočníkom vykonávať škodlivý kód prostredníctvom zraniteľných shell skriptov. Táto chyba môže viesť k neoprávnenému prístupu k systémom a dátam, preto je dôležité ju rýchlo opraviť a chrániť systémy." },
    { term: 'Shoulder Surfing', desc: "Shoulder Surfing je technika, pri ktorej útočník sleduje vaše zadávanie citlivých údajov, ako sú heslá alebo PIN kódy, cez rameno. Táto metóda môže viesť k odcudzeniu identity alebo finančným stratám, preto je dôležité byť opatrný na verejných miestach a chrániť svoje súkromie." },
    { term: 'Šifrovanie', desc: "Šifrovanie je proces, ktorý premieňa čitateľné dáta na nečitateľný formát, aby sa chránili pred neoprávneným prístupom. Je dôležité ho implementovať pri prenose citlivých informácií, ako sú osobné údaje alebo finančné transakcie, aby sa zabezpečila ich dôvernosť a integrita." },
    { term: 'Silver Ticket Attack', desc: "Silver Ticket Attack je forma kybernetického útoku, pri ktorej útočník získa prístup k službám v sieti bez potreby overenia cez doménový radič. Tento útok ohrozuje bezpečnosť systémov, pretože umožňuje získať prístup k citlivým údajom a službám. Je dôležité chrániť sa pred týmto rizikom." },
    { term: 'smishing', desc: "Smishing je forma phishingu, ktorá využíva SMS správy na podvodné získavanie citlivých informácií, ako sú heslá alebo bankové údaje. Útočníci sa často vydávajú za dôveryhodné inštitúcie. Je dôležité byť opatrný a overovať si pravosť správ, aby ste sa vyhli podvodom." },
    { term: 'Sociálne inžinierstvo', desc: "Sociálne inžinierstvo je technika manipulácie, ktorá využíva ľudskú psychológiu na získanie dôverných informácií. Útočníci často predstierajú dôveryhodnosť, aby oklamali jednotlivcov a získali prístup k citlivým údajom. Je dôležité byť ostražitý a chrániť svoje osobné informácie." },
    { term: 'spyware', desc: "Spyware je škodlivý softvér, ktorý tajne sleduje a zhromažďuje informácie z počítača alebo zariadenia bez vedomia používateľa. Môže byť použitý na krádež osobných údajov alebo sledovanie online aktivity. Ochrana zahŕňa používanie antivírusového softvéru a opatrnosť pri sťahovaní súborov." },
  ],
  T: [
    { term: 'Trójsky kôň (Trojan)', desc: "Trójsky kôň je typ škodlivého softvéru, ktorý sa tvári ako legitímny program, ale pri inštalácii umožňuje hackerom prístup k vášmu počítaču. Je nebezpečný, pretože môže kradnúť citlivé údaje alebo poškodiť systém. Je dôležité mať aktuálny antivírusový softvér na ochranu pred týmito hrozbami." },
    { term: 'Trolling', desc: "Trolling je online správanie, pri ktorom jednotlivci zverejňujú provokatívne alebo rušivé príspevky s cieľom vyvolať reakcie alebo narušiť diskusiu. Tento jav je bežný na sociálnych sieťach a diskusných fórach a môže mať negatívny dopad na online komunity." },
  ],
  V: [
    { term: 'Viacfaktorová autentifikácia (MFA)', desc: "Viacfaktorová autentifikácia (MFA) je bezpečnostný proces, ktorý vyžaduje viacero foriem overenia identity používateľa. Zvyšuje bezpečnosť tým, že kombinuje niečo, čo používateľ vie (heslo), s niečím, čo má (telefón), alebo niečím, čo je (odtlačok prsta)." },
    { term: 'Vishing', desc: "Vishing je forma podvodu, pri ktorej útočníci používajú telefónne hovory na získanie citlivých informácií od obetí, ako sú heslá alebo údaje o kreditných kartách. Je dôležité byť opatrný a nikdy neposkytovať osobné údaje neznámym volajúcim. Chráňte sa pred podvodmi a buďte informovaní." },
  ],
  W: [
    { term: 'Whaling', desc: "Whaling je forma kybernetického útoku, ktorá sa zameriava na vysokopostavené osoby v organizácii, ako sú riaditelia alebo manažéri. Útočníci sa snažia získať citlivé informácie alebo finančné prostriedky prostredníctvom sofistikovaných phishingových e-mailov. Je dôležité chrániť sa pred týmito hrozbami." },
    { term: 'Whistleblowing', desc: "Whistleblowing je proces, pri ktorom jednotlivec upozorňuje na neetické alebo nezákonné praktiky v organizácii. Tento krok môže pomôcť odhaliť korupciu, podvody alebo iné nesprávne konania, čím prispieva k transparentnosti a zodpovednosti. Je dôležitý pre ochranu verejného záujmu." },
  ],
  X: [
    { term: 'XSS (Cross-Site Scripting)', desc: "XSS (Cross-Site Scripting) je typ kybernetického útoku, pri ktorom útočník vkladá škodlivý skript do webových stránok, ktoré sú zobrazené iným používateľom. Tento útok môže viesť k krádeži citlivých údajov, ako sú heslá alebo osobné informácie. Je dôležité chrániť webové aplikácie pred XSS útokmi." },
  ],
};

/** Terms shown as "Populárne témy" chips under the search field. */
export const popularTerms = ['Adware', 'API Abuse', 'API Injection', 'Audit GDPR', 'Code Injection'];
