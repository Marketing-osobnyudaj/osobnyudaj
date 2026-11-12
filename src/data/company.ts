// Data for the company pages: O nás, Náš tím, Kariéra, Kontakt, Referencie.
import { routes } from './site';

export type Person = { name: string; role?: string; photo?: string };

/** "Vedenie spoločnosti" — also the first group on the Náš tím page. */
export const leaders: Person[] = [
  { name: 'Ing. Tomáš Dopirák', role: 'Generálny riaditeľ', photo: '/assets/vedenie/dopirak.webp' },
  { name: 'Róbert Komžík', role: 'Obchodný riaditeľ', photo: '/assets/vedenie/komzik.webp' },
  { name: 'Ing. Pavol Pieger', role: 'Riaditeľ úseku IT a kybernetickej bezpečnosti', photo: '/assets/vedenie/pieger.webp' },
  { name: 'Ing. Vladimír Macko', role: 'Marketingový riaditeľ', photo: '/assets/vedenie/macko.webp' },
  { name: 'JUDr. Radovan Tomaško', role: 'Riaditeľ pre strategické vzťahy', photo: '/assets/vedenie/tomasko.webp' },
];

const names = (list: string[]): Person[] => list.map((name) => ({ name }));

/** Náš tím page. People without a photo get an initials tile. */
export const teamGroups: { title: string; people: Person[] }[] = [
  { title: 'Vedenie', people: leaders },
  {
    title: 'Obchodné a servisné oddelenie',
    people: names([
      'Ema Suváková',
      'Mgr. Katarína Hrabko',
      'Rastislav Želinský',
      'Patrícia Bobaľová',
      'PhDr. Dušan Kružel',
      'Mgr. Martina Henteková',
      'Mgr. Michaela Dubničková',
      'Mgr. Ivan Kordík',
      'Mgr. Kristína Kepičová',
      'Ing. Denisa Kohútová',
      'Lucia Hojsíková',
      'Ľubor Skladaný',
      'Marek Šmidovič',
    ]),
  },
  {
    title: 'Právne oddelenie',
    people: names(['JUDr. Veronika Szabová', 'Mgr. Diana Macíková', 'Mgr. Karin Grejtáková', 'Mgr. Veronika Truchla']),
  },
  {
    title: 'Administratíva',
    people: names([
      'Ing. Lenka Danková',
      'Mgr. Zuzana Tomčová',
      'Mgr. Ľubica Romaníková',
      'Andrea Némethová',
      'Annamária Petrovčinová',
    ]),
  },
  { title: 'Oddelenie BOZP a PO', people: names(['Ing. Dávid Bányi', 'Mgr. Lucia Plothová, PhD.']) },
  {
    title: 'Oddelenie kybernetickej bezpečnosti',
    people: names(['Marek Soták', 'Igor Belík', 'Michal Gabriš', 'Mgr. Matúš Ferenčík']),
  },
];

/** "JUDr. Radovan Tomaško" → "RT" (academic titles and suffixes are skipped). */
export function initials(name: string): string {
  return name
    .split(',')[0]
    .split(/\s+/)
    .filter((w) => w && !w.endsWith('.'))
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

/** "Rýchle fakty" on O nás. */
export const quickFacts = [
  {
    icon: '/assets/ic-rocket-a.svg',
    title: '48 regionálnych pobočiek',
    // TODO: real copy (lorem ipsum in the design)
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
  },
  {
    icon: '/assets/ic-library.svg',
    title: '10+ rokov skúsenosti',
    text: 'S nami máte istotu, že všetky služby a dokumenty, ktoré vám dodáme sú vypracované na základe aktuálnej legislatívy.',
  },
  {
    icon: '/assets/ic-headset-a.svg',
    title: 'Člen odborných organizácií',
    text: 'Osobné alebo online školenia, preškolili sme viac ako 3 000 ľudí. Súčasťou podpory sú aj materiály pre samoštúdium.',
  },
  {
    icon: '/assets/ic-umbrella.svg',
    title: 'Poistenie do 1 000 000 €',
    text: 'Spravujte rozsah našich služieb podľa vašich aktuálnych požiadaviek. Všetko rýchlo a jednoducho cez aplikáciu Klientske centrum.',
  },
  {
    icon: '/assets/ic-business.svg',
    title: '12 000+ spokojných klientov',
    text: 'S nami máte istotu, že všetky služby a dokumenty, ktoré vám dodáme sú vypracované na základe aktuálnej legislatívy.',
  },
  {
    icon: '/assets/ic-school-a.svg',
    title: '40+ členný tím odborníkov',
    text: 'Osobné alebo online školenia, preškolili sme viac ako 3 000 ľudí. Súčasťou podpory sú aj materiály pre samoštúdium.',
  },
];

// TODO: real copy — the design uses lorem ipsum for these descriptions.
const LOREM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

const ISO_TEXT =
  'Certifikát zaručuje, že organizácia poskytuje konzistentné, spoľahlivé a neustále zlepšované produkty či služby.';
const NBU_TEXT =
  'Certifikačný orgán týmto potvrdzuje plnenie kvalifikačných požiadaviek daných vyhláškou Národného bezpečnostného úradu č. 452/2022 Z. z. Príloha č. 5 o znalostných štandardoch v oblasti kybernetickej bezpečnosti.';

export type Certificate = { issuer: string; title: string; text: string; href: string };

/** "Certifikáty ISO". TODO: issuer logos and certificate files (design has placeholders). */
export const isoCertificates: Certificate[] = [
  'Certifikát EN ISO 9001:2015',
  'Certifikát EN ISO 14001:2015',
  'Certifikát ISO/IEC 27001:2022',
  'Certifikát ISO 45001:2018',
].map((title) => ({ issuer: 'EUCERT', title, text: ISO_TEXT, href: '#' }));

/** "Certifikáty našich odborníkov". */
export const expertCertificates: Certificate[] = [
  'JUDr. Jakub Pavčík',
  'Ing. Peter Hudák',
  'Ing. Pavol Pieger',
].map((n) => ({ issuer: 'TÜV SÜD', title: `Manažér kybernetickej bezpečnosti ${n}`, text: NBU_TEXT, href: '#' }));

export const insurance = {
  title: 'Poistenie zodpovednosti za škodu spôsobenú pri výkone profesie',
  text: LOREM, // TODO: real copy
  label: 'Poistné krytie do',
  amount: '1 mil. EUR',
  insurer: 'Allianz',
};

export type Org = { name: string; text: string; href: string; logo?: string; logoAlt?: string; badge?: string };

/** "Generálny partner". */
export const generalPartners: Org[] = [
  { name: 'Združenie miest a obcí Slovenska (ZMOS)', logo: '/img/zmos.png', logoAlt: 'ZMOS', text: LOREM, href: '#' },
  { name: 'Združenie hlavných kontrolórov miest a obcí SR', logo: '/img/zhk-sr.png', logoAlt: 'ZHK SR', text: LOREM, href: '#' },
  { name: 'Dosť bolo', badge: 'Dosť bolo', text: LOREM, href: '#' },
];

/** "Podporujeme". TODO: logos (design has placeholders). */
export const supported: Org[] = [
  'Úrad komisára pre deti',
  'Osobne a zodpovedne pre samosprávy a školy',
  'Národná asociácia na ochranu osobných údajov',
  'Združenie základných škôl Slovenska',
  'Asociácia prednostov úradov miestnej samosprávy',
  'Asociácia vzdelávania samosprávy',
  'Regionálny úrad školskej správy v Nitre',
].map((name) => ({ name, text: LOREM, href: '#' }));

/** "Ďakovné listy". TODO: the quotes in the design don't match their authors — verify with the client. */
export const thanks = [
  {
    name: 'Filip Bubeník',
    role: 'Vedúci právneho oddelenia Nemocnica Poprad',
    quote:
      '„Ako globálny výrobca náhradných dielov spracúvame obrovské množstvo citlivých dát – od osobných údajov zamestnancov po dáta z pripojených vozidiel. Vďaka online konzultáciám a riešeniam pre ochranu osobných údajov sme si boli istí, že dodržiavame všetky lokálne aj medzinárodné regulácie.“',
  },
  {
    name: 'Martina Horvátová',
    role: 'Vedúci právneho oddelenia Mesto Košice',
    quote:
      '„Pre nemocnicu je ochrana osobných údajov pacientov absolútnou prioritou. Vaše online poradenstvo nám umožnilo efektívne a diskrétne spracovávať zdravotnú dokumentáciu v súlade s GDPR. Ceníme si profesionálny prístup a jasné usmernenia, ktoré nám pomohli zabezpečiť citlivé dáta a udržať si dôveru verejnosti.“',
  },
  {
    name: 'Jakub Szabo',
    role: 'Riaditeľ Gymnázium Ivana Horvátha',
    quote:
      '„Gymnázium Ivana Horvátha spravuje rozsiahle registre osobných údajov obyvateľov. Vďaka vašim službám online ochrany osobných údajov sme výrazne zlepšili naše interné procesy a zabezpečenie dát. Je pre nás kľúčové, aby občania cítili, že ich dáta sú v bezpečí, a vaše riešenia nám v tom pomáhajú na dennej báze.“',
  },
];

/** Referencie page: featured case study + grid. Images are hot-linked from osobnyudaj.sk as in the design. */
export const featuredCaseStudy = {
  img: 'https://osobnyudaj.sk/wp-content/uploads/2025/09/pripadovastudia7.jpg',
  tags: ['Prípadová štúdia', 'Šikana a kyberšikana'],
  title: 'Prípadová štúdia: Nebezpečné vydieranie a vyhrážanie medzi žiakmi',
  text: 'Na jednej strednej škole sa objavil vážny prípad vydierania a vyhrážania. Dvaja 16-roční žiaci systematicky vymáhali od spolužiakov peniaze „na bufet“. Keď svoje požiadavky nedostali, uchyľovali sa k slovným útokom, vyhrážkam a emocionálnej šikane.',
  href: '#',
};

export const caseStudies = [
  {
    tags: ['GDPR', 'Prípadové štúdie'],
    title:
      'Hackerské hody 2025: Ako neschopnosť IT dodávateľa odovzdala obchodné tajomstvá tisícov firiem do rúk kriminálnikov',
    img: 'https://osobnyudaj.sk/wp-content/uploads/2026/07/copertina-15019-1024x683.png',
    href: 'https://www.osobnyudaj.sk/hackerske-hody-2025-ako-neschopnost-it-dodavatela-odovzdala-obchodne-tajomstva-tisicov-firiem-do-ruk-kriminalnikov/',
  },
  {
    tags: ['GDPR', 'Prípadové štúdie'],
    title: 'Osobné údaje na titulke? 5 brutálnych chýb médií, ktoré vás môžu stáť tisíce na pokutách za GDPR',
    img: 'https://osobnyudaj.sk/wp-content/uploads/2026/06/copertina-14788-1024x683.png',
    href: 'https://www.osobnyudaj.sk/osobne-udaje-na-titulke-5-brutalnych-chyb-medii-ktore-vas-mozu-stat-tisice-na-pokutach-za-gdpr/',
  },
  {
    tags: ['Kybernetická bezpečnosť', 'Prípadové štúdie'],
    title: 'MyHeritage 2018: Najväčšia nočná mora genealogických nadšencov – 92 miliónov e-mailov na predaj.',
    img: 'https://osobnyudaj.sk/wp-content/uploads/2026/06/copertina-14818-1024x683.png',
    href: 'https://www.osobnyudaj.sk/myheritage-2018-najvacsia-nocna-mora-genealogickych-nadsencov-92-milionov-e-mailov-na-predaj/',
  },
  {
    tags: ['Umelá inteligencia (AI)', 'Prípadové štúdie'],
    title: 'Šokujúca efektivita: Zistite, ako funguje AI v praxi a prečo robí lepšie rozhodnutia než skúsení manažéri.',
    img: 'https://osobnyudaj.sk/wp-content/uploads/2026/06/copertina-14667-1024x683.png',
    href: 'https://www.osobnyudaj.sk/sokujuca-efektivita-zistite-ako-funguje-ai-v-praxi-a-preco-robi-lepsie-rozhodnutia-nez-skuseni-manazeri/',
  },
  {
    tags: ['Kybernetická bezpečnosť', 'Prípadové štúdie'],
    title:
      'Keď útočia neviditeľné prízraky: Prečo sú Zero-day zraniteľnosti časovanou bombou pre vašu firmu aj súkromie.',
    img: 'https://osobnyudaj.sk/wp-content/uploads/2026/06/copertina-14567-1024x683.png',
    href: 'https://www.osobnyudaj.sk/ked-utocia-neviditelne-prizraky-preco-su-zero-day-zranitelnosti-casovanou-bombou-pre-vasu-firmu-aj-sukromie/',
  },
  {
    tags: ['Kybernetická bezpečnosť', 'Prípadové štúdie'],
    title: 'Neviditeľná hrozba, pred ktorou vás antivírus neochráni: Odhalené tajomstvá zero-day útokov',
    img: 'https://osobnyudaj.sk/wp-content/uploads/2026/06/copertina-14564-1024x683.png',
    href: 'https://www.osobnyudaj.sk/neviditelna-hrozba-pred-ktorou-vas-antivirus-neochrani-odhalene-tajomstva-zero-day-utokov/',
  },
];

/** Filterable references on the Referencie page (segment / service tags derived from the quotes). */
export const references = [
  {
    logo: '/assets/ref-kosice.png',
    name: 'MČ Košice - Staré Mesto',
    segment: 'Mesto',
    services: ['Ochrana osobných údajov', 'Kybernetická bezpečnosť'],
    quote:
      '„Dovoľte nám poďakovať za úspešnú spoluprácu Vašej spoločnosti s mestskou časťou Košice-Staré Mesto od roku 2022. Oceňujeme Váš zodpovedný prístup pri poskytovaní služieb, ktoré pre nás zabezpečujete v oblasti ochrany osobných údajov ako aj kybernetickej bezpečnosti. Tešíme sa na ďalšiu spoluprácu.“',
  },
  {
    logo: '/assets/ref-kezmarok.png',
    name: 'Mesto Kežmarok',
    segment: 'Mesto',
    services: ['Ochrana osobných údajov'],
    quote:
      '„Osobnyudaj.sk nám zabezpečuje komplexnú správu GDPR. Spolupráca je bezproblémová. Webové rozhranie je jednoducho ovládateľné a zrozumiteľné, ktoré nám uľahčuje prácu s údajmi zamestnancov a osôb evidovaných v systéme.“',
  },
  {
    logo: '/assets/ref-handlova.png',
    name: 'Mesto Handlová',
    segment: 'Mesto',
    services: ['Ochrana osobných údajov', 'Kybernetická bezpečnosť'],
    quote:
      '„So spoločnosťou osobnyudaj.sk spolupracujeme dlhodobo v oblasti zabezpečenia GDPR a KB. Spracovali kompletnú dokumentáciu, ktorú pravidelne aktualizujú, prihlásením do klientskeho centra získavame komplexný prehľad a informácie z oblasti GDPR a KB, ako aj o vykonávaní pravidelných školení oprávnených osôb. Tento spôsob zabezpečenia povinností v oblasti GDPR a KB nám maximálne vyhovuje a môžeme ho odporučiť aj ostatným subjektom.“',
  },
];

export const referenceSegments = [
  'Obec',
  'Mesto',
  'Škola',
  'Školské zariadenie',
  'Zdravotníctvo',
  'Štátna správa',
  'E-shop',
  'Malý podnik',
  'Veľký podnik',
  'Iný subjekt',
];

export const referenceServices = [
  'Ochrana osobných údajov',
  'Kybernetická bezpečnosť',
  'Šikana a kyberšikana',
  'Ochrana oznamovateľa',
  'Bezpečnosť práce',
  'Anonymizácia dokumentov',
  'Online poradca',
  'Segregácia',
];

/** "Produkty a riešenia" link lists. */
export const solutionSegments: { label: string; href: string }[][] = [
  [
    { label: 'Obec', href: routes.obec },
    { label: 'Mesto', href: routes.mesto },
    { label: 'Škola', href: routes.skola },
    { label: 'Školské zariadenie', href: routes.skolskeZariadenie },
    { label: 'Štátna správa', href: routes.statnaSprava },
  ],
  [
    { label: 'Súkromný sektor', href: '#' },
    { label: 'E-shop', href: routes.eshop },
    { label: 'Malý podnik', href: routes.malyPodnik },
    { label: 'Veľký podnik', href: routes.velkyPodnik },
    { label: 'Iný subjekt', href: routes.inySubjekt },
  ],
];

export const solutionServices: { label: string; href: string }[][] = [
  [
    { label: 'Ochrana osobných údajov', href: routes.gdpr },
    { label: 'Kybernetická bezpečnosť', href: routes.kb },
    { label: 'Šikana a kyberšikana', href: routes.kybersikana },
    { label: 'Whistleblowing', href: routes.whistleblowing },
  ],
  [
    { label: 'BOZP, PO, CO a PZS', href: routes.bozp },
    { label: 'Poradca online', href: '#' },
    { label: 'Anonymizér', href: routes.anonymizer },
  ],
];
