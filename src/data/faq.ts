// FAQ entries. Each service page shows the questions of its category (see `faqCategoryForPage`).
// TODO: load from the CMS once the administration is built.

export type Faq = { cat: string; q: string; a: string; slug: string };

const slugify = (s: string) =>
  s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const raw: [string, string, string][] = [
  ['GDPR', 'Ako zabezpečiť IoT zariadenia proti úniku osobných údajov?', 'Internet vecí (IoT) je revolučná technológia, ktorá spojila mnoho zariadení do jedného globálneho systému umožňujúc ich vzájomnú komunikáciu a interakciu. Napriek svojim výhodám, IoT predstavuje i určité riziká, predovšetkým pokiaľ ide o únik osobných údajov.'],
  ['GDPR', 'Prečo GDPR upravuje spracovanie biometrických údajov?', 'Stručne povedané, je to kvôli ochrane, bezpečnosti a súkromiu jednotlivcov. Biometrické údaje predstavujú jedinečné fyziologické alebo behaviorálne charakteristiky jednotlivca, ktoré môžu byť použité na jeho jednoznačnú identifikáciu. Práve z tohto dôvodu sú klasifikované ako citlivé osobné údaje.'],
  ['GDPR', 'Aké informácie musia byť zahrnuté v súhlase na marketingovú komunikáciu?', 'Podniky a organizácie potrebujú vedieť, ako správne získať a udržiavať súhlas na marketingové účely, aby dodržiavali zákony ako GDPR či iné relevantné predpisy. Súhlas musí presne definovať účel, byť jasný a zrozumiteľný, určiť rozsah a informovať o práve na odvolanie.'],
  ['GDPR', 'Kedy je používanie kamier zakázané alebo neprimerané?', 'Zatiaľ čo v niektorých situáciách kamery môžu zvyšovať pocit bezpečia a pomáhať monitorovať priestory, existujú pravidlá a zákony, ktoré upravujú ich použitie na ochranu súkromia a práv jednotlivcov.'],
  ['GDPR', 'Prečo je potrebné vypracovať dokumentáciu k využívaniu AI pri spracovaní údajov?', 'Pri implementácii AI v rámci spracovania údajov je dôležité vypracovať podrobnú dokumentáciu. Táto dokumentácia nielenže poskytuje prehľad o procesoch a rozhodnutiach, ale aj zabezpečuje súlad so zákonmi a reguláciami o ochrane údajov, ako sú GDPR.'],
  ['Kyberbezpečnosť', 'Čo je Silver Ticket Attack', 'Silver Ticket Attack je pojem, ktorý sa často objavuje pri diskusiách o kybernetickej bezpečnosti, najmä v kontexte útokov na systémy Windows. Tento typ útoku sa týka manipulácie s autentifikačnými procesmi v rámci služieb, ktoré používajú Kerberos – protokol autentifikácie v sieti. Cieľom takéhoto útoku je získať neoprávnený prístup ku kritickým službám v sieti bez potreby prístupu k hlavnému kontroléru domény (Domain Controller, DC).'],
  ['Kyberbezpečnosť', 'Čo je Shoulder Surfing', 'Shoulder surfing je termín, ktorý sa používa na opis praktiky, kde sa neoprávnený pozorovateľ pokúša získať dôverné informácie tým, že ich odčíta priamo z obrazovky počítača, mobilného zariadenia alebo papierov bez vedomia alebo súhlasu obete. Táto metóda je obzvlášť populárna v rušných priestoroch, ako sú kaviarne, letiská alebo verejné dopravné prostriedky, kde je ľahké byť nenápadne v blízkosti cieľovej osoby.'],
  ['Kyberbezpečnosť', 'Čo je Shellshock', 'Shellshock, známy aj ako „Bash Bug,“ je bezpečnostná zraniteľnosť, ktorá bola objavená v skriptovacom jazyku Bash, široko používanom v systémoch založených na UNIXe, vrátane Linuxu a Mac OS X. Tento chybný mechanizmus umožňuje útočníkom manipulovať s prostredím prostredníctvom nebezpečných skriptov, čo potenciálne vedie k neautorizovanému prístupu a vykonávaniu škodlivého kódu.'],
  ['Kyberbezpečnosť', 'Čo je Screenlogger', 'Screenlogger je bezpečnostný nástroj, ktorý sa často používa na záznam aktivít, ktoré sa dejú na obrazovke vášho počítača. Jeho hlavnou funkciou je sledovanie a ukladaní obrazu z obrazovky vo forme snímok alebo videí. Tento softvér môže byť užitočný na rôzne účely, od rodičovskej kontroly cez dohľad nad zamestnancami až po monitorovanie vlastného použitia digitálnych zariadení.'],
  ['Kyberbezpečnosť', 'Čo je Scareware', 'Scareware predstavuje typ podvodného softvéru, ktorý má jediný účel – zastrašiť alebo manipulovať používateľov počítačov a mobilných zariadení na vykonávanie nežiaduceho správania, najčastejšie k nákupu nepotrebného bezpečnostného softvéru. Tieto programy často používajú rôzne psychologické triky, aby používateľa presvedčili, že ich zariadenie je infikované vážnymi vírusmi a jediným riešením je kúpa ich produktu.'],
];

export const faqs: Faq[] = raw.map(([cat, q, a]) => ({ cat, q, a, slug: slugify(q) }));

/** FAQ category shown on each service page (from the design's default rules). */
export const faqCategoryForPage: Record<string, string> = {
  'GDPR – ochrana osobných údajov': 'GDPR',
  'Zodpovedná osoba (DPO)': 'GDPR',
  'Kybernetická bezpečnosť': 'Kyberbezpečnosť',
  'Šikana a kyberšikana': 'Šikana a kyberšikana',
  Desegregácia: 'Desegregácia',
  'Smernice a dokumenty': 'Smernice',
  'Bezpečnosť pri práci': 'BOZP',
  'Ochrana oznamovateľa': 'Whistleblowing',
  'Anonymizér dokumentov': 'Anonymizér',
};

/** Up to `count` questions for a page; pages without a rule show all questions. */
export function faqsForPage(page: string, count = 5): Faq[] {
  const cat = faqCategoryForPage[page];
  return (cat ? faqs.filter((f) => f.cat === cat) : faqs).slice(0, count);
}

export const faqUrl = (f: Faq) => `/casto-kladene-otazky/${f.slug}`;
