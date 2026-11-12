// Data for the service pages (GDPR, DPO, Smernice, …). All of them share one layout
// (`components/service/ServicePage.astro`) and differ only in the values below.

import { serviceIcon } from './site';

export type Included = { t: string; d: string };

export type ServicePageData = {
  /** Page name as used by the FAQ / blog category rules (`faqsForPage`). */
  page: string;
  /** Short label next to the icon above the h1. */
  label: string;
  h1: string;
  icon: string;
  /** Blog category shown in the "Blog" section; undefined → all articles. */
  blogCategory?: string;
  /** "Čo všetko dostanete v cene" items (rendered in two columns of six). */
  included: Included[];
  /** <title> */
  title: string;
};

// TODO: real copy — the design shows this GDPR list on every service page;
// each service needs its own "V cene" list.
const includedGdpr: Included[] = [
  ['Klientske centrum', 'Rýchla pomoc a odpovede na vaše otázky'],
  ['Zodpovedná osoba', 'Výkon funkcie externej DPO pre vašu organizáciu'],
  ['Bezpečnostná dokumentácia', 'Povinné GDPR dokumenty šité na mieru'],
  ['Školenia zamestnancov', 'Jednoduchá a zrozumiteľná forma školenia'],
  ['Analýza rizík a audit', 'Identifikácia nedostatkov a odporúčania'],
  ['Zastupovanie pri kontrole', 'Odborná asistencia pri inšpekcii z ÚOOÚ'],
  ['Podpora počas celého roka', 'E-mailom aj telefonicky, v pracovnom čase'],
  ['Implementácia opatrení', 'Pomoc s nastavením pravidiel a postupov'],
  ['Pravidelný monitoring', 'Sledovanie zmien a aktualizácia dokumentov'],
  ['Revízia zmlúv a vzťahov', 'Kontrola zmlúv s dodávateľmi a partnermi'],
  ['Web a ePrivacy', 'Kontrola cookies, formulárov a právnych textov'],
  ['Incident management', 'Pomoc pri únikoch údajov a ich oznamovaní'],
].map(([t, d]) => ({ t, d }));

const page = (p: Omit<ServicePageData, 'included' | 'title'> & Partial<ServicePageData>): ServicePageData => ({
  included: includedGdpr,
  title: `${p.label} – Osobný údaj`,
  ...p,
});

export const servicePages = {
  gdpr: page({
    page: 'GDPR – ochrana osobných údajov',
    label: 'Ochrana osobných údajov',
    h1: 'GDPR - Ochrana osobných údajov, ktorú si môže dovoliť každý',
    icon: serviceIcon('1-gdpr'),
    blogCategory: 'GDPR',
    title: 'GDPR – ochrana osobných údajov – Osobný údaj',
  }),
  dpo: page({
    page: 'Zodpovedná osoba (DPO)',
    label: 'Zodpovedná osoba (DPO)',
    h1: 'Zodpovedná osoba (DPO), ktorú si môže dovoliť každý',
    icon: '/assets/svc/dpo.png',
    blogCategory: 'GDPR',
  }),
  smernice: page({
    page: 'Smernice a dokumenty',
    label: 'Smernice a dokumenty',
    h1: 'Smernice a dokumenty',
    icon: '/assets/svc/smernice.png',
    blogCategory: 'Smernice',
  }),
  kb: page({
    page: 'Kybernetická bezpečnosť',
    label: 'Kybernetická bezpečnosť',
    h1: 'Kybernetická bezpečnosť',
    icon: serviceIcon('2-kyberbezpecnost'),
    blogCategory: 'Kyberbezpečnosť',
  }),
  kybersikana: page({
    page: 'Šikana a kyberšikana',
    label: 'Šikana a kyberšikana',
    h1: 'Šikana a kyberšikana',
    icon: serviceIcon('3-kybersikana'),
    blogCategory: 'Šikana a kyberšikana',
  }),
  whistleblowing: page({
    page: 'Ochrana oznamovateľa',
    label: 'Ochrana oznamovateľa',
    h1: 'Ochrana oznamovateľa',
    icon: serviceIcon('4-ochrana-oznamovatelov'),
    blogCategory: 'Whistleblowing',
  }),
  bozp: page({
    page: 'Bezpečnosť pri práci',
    label: 'Bezpečnosť pri práci',
    h1: 'Bezpečnosť pri práci',
    icon: serviceIcon('5-bezpecnost-pri-praci'),
    blogCategory: 'BOZP',
  }),
  segregacia: page({
    page: 'Desegregácia',
    label: 'Desegregácia',
    h1: 'Desegregácia',
    icon: serviceIcon('8-segregacia'),
    blogCategory: 'Desegregácia',
  }),
  anonymizer: page({
    page: 'Anonymizér dokumentov',
    label: 'Anonymizér dokumentov',
    h1: 'Anonymizér dokumentov',
    icon: serviceIcon('6-anonymizer'),
    blogCategory: 'Anonymizér',
  }),
  aiGarant: page({
    page: 'AI garant',
    label: 'AI garant',
    h1: 'AI garant – bezpečné a zákonné používanie umelej inteligencie',
    icon: '/assets/svc/ai-garant.png',
    // No category rule in the design → all articles.
  }),
} satisfies Record<string, ServicePageData>;

/** Partners rotating in the hero. */
// TODO: copy the partner logos (except ZMOS) into public/img; the design hotlinks them from osobnyudaj.sk.
const W = 'https://osobnyudaj.sk/wp-content/uploads/2025/09/';
export const heroPartners = [
  { img: '/img/zmos.png', name: 'ZMOS', text: 'Sme generálny partner združenia miest a obcí Slovenska' },
  { img: `${W}Frame-948-1.png`, name: 'ZHK SR', text: 'Sme generálny partner združenia hlavných kontrolórov SR' },
  { img: `${W}logo.png`, name: 'DOSŤ BOLO', text: 'Sme akreditovaný partner združenia Dosť bolo šikany a kyberšikany' },
  { img: `${W}Asociacia-vzdelavania-samospravy-logo.png`, name: 'AVS', text: 'Sme partnerom Asociácie vzdelávania samosprávy' },
  { img: `${W}asociacia-prednostov-logo.png`, name: 'APUMS', text: 'Sme partnerom Asociácie prednostov úradov miestnej samosprávy' },
];

/** Blog articles for the category-filtered "Blog" section. */
// TODO: load from the blog / CMS once it exists (articles, authors, dates and links).
export const blogArticles: { title: string; cat: string; tag: string }[] = [
  { title: 'Ako nás sledujú sociálne siete? Aké údaje zbierajú sociálne siete a ako ich využívajú.', cat: 'GDPR', tag: 'Sociálne siete' },
  { title: 'Dôležitosť prevencie šikany – smutný prípad z Košíc', cat: 'Šikana a kyberšikana', tag: 'Škola' },
  { title: 'Digitálna stopa – nepokazte si svoju online reputáciu', cat: 'GDPR', tag: 'Sociálne siete' },
  { title: 'BOZP – pojem alebo predpis?', cat: 'BOZP', tag: 'Legislatíva' },
];
export const blogImages = ['/img/87a2263744af11b3.png', '/img/ea950d0807164691.jpg', '/img/550a0ba81b755726.jpg'];

export function blogPostsFor(category: string | undefined, count = 3) {
  return (category ? blogArticles.filter((a) => a.cat === category) : blogArticles)
    .slice(0, count)
    .map((a, k) => ({ ...a, img: blogImages[k % blogImages.length] }));
}
