// Shared site data: routes, navigation, services, segments and pricing.

export const contact = {
  email: 'info@osobnyudaj.sk',
  phone: '02/ 800 800 80',
  phoneHref: 'tel:0280080080',
};

/** Routes for every page in the design. Pages not built yet will 404 until added. */
export const routes = {
  home: '/',
  oNas: '/o-nas',
  nasTim: '/nas-tim',
  referencie: '/referencie',
  kariera: '/kariera',
  kontakt: '/kontakt',
  blog: '/blog',
  faq: '/casto-kladene-otazky',
  slovnik: '/slovnik-pojmov',
  eKnihy: '/e-knihy',
  klientskeCentrum: '#',
  // Services
  gdpr: '/gdpr',
  gdprSkoly: '/gdpr-pre-skoly',
  dpo: '/zodpovedna-osoba',
  smernice: '/smernice',
  kb: '/kyberneticka-bezpecnost',
  kybersikana: '/kybersikana',
  whistleblowing: '/whistleblowing',
  bozp: '/bozp',
  segregacia: '/segregacia',
  anonymizer: '/anonymizer',
  aiGarant: '/ai-garant',
  // Segments
  obec: '/obec',
  mesto: '/mesto',
  skola: '/skola',
  skolskeZariadenie: '/skolske-zariadenie',
  zdravotnictvo: '/zdravotnictvo',
  statnaSprava: '/statna-sprava',
  eshop: '/e-shop',
  malyPodnik: '/maly-podnik',
  velkyPodnik: '/velky-podnik',
  inySubjekt: '/iny-subjekt',
} as const;

export type ServiceId =
  | '1-gdpr'
  | '2-kyberbezpecnost'
  | '3-kybersikana'
  | '4-ochrana-oznamovatelov'
  | '5-bezpecnost-pri-praci'
  | '6-anonymizer'
  | '7-online-poradca'
  | '8-segregacia';

export const serviceIcon = (id: ServiceId) => `/assets/svc/${id}.svg`;

/** The eight priced services shown in the home page picker and quote form. */
export const services: { id: ServiceId; title: string; formTitle?: string }[] = [
  { id: '1-gdpr', title: 'Ochrana osobných údajov' },
  { id: '2-kyberbezpecnost', title: 'Kybernetická bezpečnosť' },
  { id: '3-kybersikana', title: 'Šikana a kyberšikana' },
  { id: '4-ochrana-oznamovatelov', title: 'Ochrana oznamovateľa' },
  { id: '5-bezpecnost-pri-praci', title: 'Bezpečnosť práce', formTitle: 'Bezpečnosť pri práci' },
  { id: '6-anonymizer', title: 'Anonymizácia dokumentov', formTitle: 'Anonymizér dokumentov' },
  { id: '7-online-poradca', title: 'Online poradca' },
  { id: '8-segregacia', title: 'Segregácia' },
];

/** Segment tabs in the home page service picker, in display order (icon = index). */
export const pickerSegments = [
  'Všeobecné',
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
] as const;

/**
 * Monthly price per segment, keyed by the service number (first digit of ServiceId).
 * '-' means the service is not offered for that segment. Missing → falls back to "Všeobecné".
 */
export const prices: Record<string, Record<string, string>> = {
  'Všeobecné': { 1: '9,90', 2: '29', 3: '49', 4: '9,90', 5: '19', 6: '9,90', 7: '59', 8: '9,90' },
  Obec: { 1: '9,90', 2: '29', 3: '49,90', 4: '9,90', 5: '19', 6: '9,90', 7: '59,90', 8: '9,90' },
  Mesto: { 1: '9,90', 2: '29', 3: '49,90', 4: '9,90', 5: '19', 6: '9,90', 7: '59,90', 8: '9,90' },
  Škola: { 1: '9,90', 2: '29,90', 3: '49', 4: '9,90', 5: '29', 6: '9,90', 7: '69', 8: '9,90' },
  'Školské zariadenie': { 1: '9,90', 2: '29,90', 3: '49', 4: '9,90', 5: '29', 6: '9,90', 7: '69', 8: '9,90' },
  Zdravotníctvo: { 1: '49', 2: '99', 3: '-', 4: '9,90', 5: '99', 6: '19,90', 7: '99', 8: '9,90' },
  'Štátna správa': { 1: '49', 2: '79', 3: '-', 4: '9,90', 5: '79', 6: '14,90', 7: '99', 8: '14,90' },
  'E-shop': { 1: '9,90', 2: '39', 3: '-', 4: '59', 5: '19', 6: '9,90', 7: '59', 8: '-' },
  'Malý podnik': { 1: '9,90', 2: '39', 3: '-', 4: '59', 5: '19', 6: '9,90', 7: '59', 8: '-' },
  'Veľký podnik': { 1: '99', 2: '159', 3: '-', 4: '29', 5: '49', 6: '19', 7: '199', 8: '-' },
  'Iný subjekt': {},
};

/** Returns "od X € / mesiac", or null when the service is not offered for the segment. */
export function priceLabel(segment: string, id: ServiceId): string | null {
  const n = id[0];
  const own = prices[segment]?.[n];
  if (own === '-') return null;
  return `od ${own ?? prices['Všeobecné'][n] ?? '9,90'} € / mesiac`;
}

/** "Služby" mega menu. */
export const menuServices: { title: string; href: string; icon?: ServiceId; img?: string }[] = [
  { icon: '1-gdpr', title: 'Ochrana osobných údajov', href: routes.gdpr },
  { img: '/assets/svc/dpo.png', title: 'Zodpovedná osoba (DPO)', href: routes.dpo },
  { icon: '2-kyberbezpecnost', title: 'Kybernetická bezpečnosť', href: routes.kb },
  { icon: '3-kybersikana', title: 'Šikana a kyberšikana', href: routes.kybersikana },
  { icon: '8-segregacia', title: 'Desegregácia', href: routes.segregacia },
  { img: '/assets/svc/smernice.png', title: 'Smernice a dokumenty', href: routes.smernice },
  { icon: '5-bezpecnost-pri-praci', title: 'Bezpečnosť pri práci', href: routes.bozp },
  { icon: '4-ochrana-oznamovatelov', title: 'Ochrana oznamovateľa', href: routes.whistleblowing },
  { icon: '6-anonymizer', title: 'Anonymizér dokumentov', href: routes.anonymizer },
  { img: '/assets/svc/reforma.png', title: 'Reforma školstva', href: '#' },
  { img: '/assets/svc/akademia.png', title: 'Akadémia vzdelávania', href: '#' },
  { img: '/assets/svc/ai-garant.png', title: 'AI garant', href: routes.aiGarant },
];

/** "Segmenty" mega menu. */
export const menuSegments: { title: string; href: string; img: string }[] = [
  { title: 'Obec', href: routes.obec, img: '/assets/seg-obec.png' },
  { title: 'Štátna správa', href: routes.statnaSprava, img: '/assets/seg-statna.png' },
  { title: 'Mesto', href: routes.mesto, img: '/assets/seg-mesto.png' },
  { title: 'E-shop', href: routes.eshop, img: '/assets/seg-eshop.png' },
  { title: 'Škola', href: routes.skola, img: '/assets/seg-skola.png' },
  { title: 'Malý podnik', href: routes.malyPodnik, img: '/assets/seg-maly.png' },
  { title: 'Školské zariadenie', href: routes.skolskeZariadenie, img: '/assets/seg-skolske.png' },
  { title: 'Veľký podnik', href: routes.velkyPodnik, img: '/assets/seg-velky.png' },
  { title: 'Zdravotníctvo', href: routes.zdravotnictvo, img: '/assets/seg-zdravotnictvo.png' },
  { title: 'Iný subjekt', href: routes.inySubjekt, img: '/assets/seg-iny.png' },
];

export const menuPodpora = [
  { title: 'Klientské centrum', href: routes.klientskeCentrum },
  { title: 'Blog', href: routes.blog },
  { title: 'Často kladené otázky', href: routes.faq },
  { title: 'Slovník pojmov', href: routes.slovnik },
  { title: 'E-knihy', href: routes.eKnihy },
];

export const menuONas = [
  { title: 'O spoločnosti', href: routes.oNas },
  { title: 'Náš tím', href: routes.nasTim },
  { title: 'Kariéra', href: routes.kariera },
  { title: 'Kontakt', href: routes.kontakt },
];

type Link = { label: string; href: string };
export const footerColumns: { title: string; links: Link[]; cookies?: boolean }[] = [
  {
    title: 'Segmenty',
    links: [
      { label: 'Obec', href: routes.obec },
      { label: 'Mesto', href: routes.mesto },
      { label: 'Škola', href: routes.skola },
      { label: 'Školské zariadenie', href: routes.skolskeZariadenie },
      { label: 'Zdravotníctvo', href: routes.zdravotnictvo },
      { label: 'Štátna správa', href: routes.statnaSprava },
      { label: 'E-shop', href: routes.eshop },
      { label: 'Malý podnik', href: routes.malyPodnik },
      { label: 'Veľký podnik', href: routes.velkyPodnik },
      { label: 'Iný subjekt', href: routes.inySubjekt },
    ],
  },
  {
    title: 'Služby',
    links: [
      { label: 'Ochrana osobných údajov', href: routes.gdpr },
      { label: 'Kybernetická bezpečnosť', href: routes.kb },
      { label: 'Šikana a kyberšikana', href: routes.kybersikana },
      { label: 'Whistleblowing', href: routes.whistleblowing },
      { label: 'BOZP, PO, CO a PZS', href: routes.bozp },
      { label: 'Anonymizér', href: routes.anonymizer },
      { label: 'AI garant', href: routes.aiGarant },
    ],
  },
  {
    title: 'Podpora',
    links: [
      { label: 'Referencie', href: routes.referencie },
      { label: 'Portál Môj osobný údaj', href: '#' },
      { label: 'Blog', href: routes.blog },
      { label: 'Často kladené otázky', href: routes.faq },
      { label: 'E-knihy', href: routes.eKnihy },
    ],
  },
  {
    title: 'O nás',
    links: [
      { label: 'Spoločnosť Osobnyudaj.sk', href: routes.oNas },
      { label: 'Náš tím', href: routes.nasTim },
      { label: 'Kariéra', href: routes.kariera },
      { label: 'Kontakt', href: routes.kontakt },
    ],
    cookies: true,
  },
];

export const clientLogos = [
  { src: '/img/sfz-logo.webp', alt: 'Slovenský futbalový zväz' },
  { src: '/img/logo-banskabystrica.webp', alt: 'Mesto Banská Bystrica' },
  { src: '/img/logo-fnnitra.webp', alt: 'FN Nitra' },
  { src: '/img/logo-zkw.webp', alt: 'ZKW' },
  { src: '/img/logo-istyle.webp', alt: 'iStyle' },
  { src: '/img/logo-tatravagonka.webp', alt: 'Tatravagónka Poprad' },
  { src: '/img/logo-mecom.jpg', alt: 'Mecom' },
  { src: '/img/logo-winners.webp', alt: 'Winners Group' },
];
