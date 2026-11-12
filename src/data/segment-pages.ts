// Data for the segment landing pages (Obec, Mesto, Škola, …) and the "GDPR pre školy" page.
// All segment pages share one layout (src/components/segment/SegmentPage.astro); only this data varies.

import { routes, priceLabel, serviceIcon, type ServiceId } from './site';

export type SegmentKey =
  | 'obec'
  | 'mesto'
  | 'skola'
  | 'skolskeZariadenie'
  | 'zdravotnictvo'
  | 'statnaSprava'
  | 'eshop'
  | 'malyPodnik'
  | 'velkyPodnik'
  | 'inySubjekt';

export type Segment = {
  /** Key into `prices` in site.ts (used by priceLabel). */
  name: string;
  /** "pre ___" phrase, e.g. "vašu obec" → "Komplexné služby pre vašu obec". */
  forWhom: string;
  /** Eyebrow above the benefits heading. */
  benefitsEyebrow: string;
  /** Obec has its own "Ako pracujeme" texts; all other segments share the generic ones. */
  howWeWork: 'obec' | 'generic';
  /** Service card links. Defaults to '#'. */
  serviceHref?: (id: ServiceId) => string;
};

export const segments: Record<SegmentKey, Segment> = {
  obec: { name: 'Obec', forWhom: 'vašu obec', benefitsEyebrow: '/ Benefity pre obce /', howWeWork: 'obec' },
  mesto: { name: 'Mesto', forWhom: 'vaše mesto', benefitsEyebrow: '/ Benefity /', howWeWork: 'generic' },
  skola: {
    name: 'Škola',
    forWhom: 'vašu školu',
    benefitsEyebrow: '/ Benefity /',
    howWeWork: 'generic',
    serviceHref: (id) => (id === '1-gdpr' ? routes.gdprSkoly : '#cenova-ponuka'),
  },
  skolskeZariadenie: {
    name: 'Školské zariadenie',
    forWhom: 'vaše školské zariadenie',
    benefitsEyebrow: '/ Benefity /',
    howWeWork: 'generic',
  },
  zdravotnictvo: {
    name: 'Zdravotníctvo',
    forWhom: 'vaše zdravotnícke zariadenie',
    benefitsEyebrow: '/ Benefity /',
    howWeWork: 'generic',
  },
  statnaSprava: { name: 'Štátna správa', forWhom: 'štátnu správu', benefitsEyebrow: '/ Benefity /', howWeWork: 'generic' },
  eshop: { name: 'E-shop', forWhom: 'váš e-shop', benefitsEyebrow: '/ Benefity /', howWeWork: 'generic' },
  malyPodnik: { name: 'Malý podnik', forWhom: 'váš malý podnik', benefitsEyebrow: '/ Benefity /', howWeWork: 'generic' },
  velkyPodnik: { name: 'Veľký podnik', forWhom: 'váš veľký podnik', benefitsEyebrow: '/ Benefity /', howWeWork: 'generic' },
  inySubjekt: { name: 'Iný subjekt', forWhom: 'váš subjekt', benefitsEyebrow: '/ Benefity /', howWeWork: 'generic' },
};

// TODO: real copy — the design's hero paragraph is placeholder text (garbled, repeated sentence).
export const heroLead =
  'Vyriešime za vás všetky úkony a dokumentáciu, požadovaný.  vás všetky úkony a dokumentáciu, zaškolíme. Vyriešime za vás všetky úkony a dokumentáciu, zaškolíme požadovaný.';

/** Benefits on segment pages (design `obecBenefits`). Typos fixed: naších→našich, vaších→vašich, prešlolili→preškolili. */
// TODO: real copy — benefits 4–6 repeat the texts of 1–3 in the design.
export const segmentBenefits = [
  {
    icon: '/assets/ic-rocket-a.svg',
    title: 'Škálovateľné služby',
    text: 'Spravujte rozsah našich služieb podľa vašich aktuálnych požiadaviek. Všetko rýchlo a jednoducho cez aplikáciu Klientské centrum.',
  },
  {
    icon: '/assets/ic-library.svg',
    title: 'Aktuálna legislatíva',
    text: 'S nami máte istotu, že všetky služby a dokumenty, ktoré vám dodáme sú vypracované na základe aktuálnej legislatívy.',
  },
  {
    icon: '/assets/ic-headset-a.svg',
    title: 'Certifikačné školenia',
    text: 'Osobné alebo online školenia, preškolili sme viac ako 3 000 ľudí. Súčasťou podpory sú aj materiály pre samoštúdium.',
  },
  {
    icon: '/assets/ic-umbrella.svg',
    title: 'Poistenie do 1 000 000 €',
    text: 'Spravujte rozsah našich služieb podľa vašich aktuálnych požiadaviek. Všetko rýchlo a jednoducho cez aplikáciu Klientské centrum.',
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

// TODO: real copy — descriptions 4–8 are repeated placeholder sentences in the design.
const serviceList: [ServiceId, string, string][] = [
  ['1-gdpr', 'Ochrana osobných údajov', 'GDPR ochrana osobných údajov od jednoduchých riešení až po komplexnú správu.'],
  ['2-kyberbezpecnost', 'Kybernetická bezpečnosť', 'Ochrana digitálnych systémov, sietí a údajov pred kybernetickými hrozbami.'],
  ['3-kybersikana', 'Šikana a kyberšikana', 'Riešime prevenciu aj prípady šikany a kyberšikany na školách, pracovisku, ...'],
  ['4-ochrana-oznamovatelov', 'Ochrana oznamovateľa', 'Správa súkromných informácií aby sa s nimi zaobchádzalo bezpečne a legálne.'],
  ['5-bezpecnost-pri-praci', 'Bezpečnosť práce', 'Správa súkromných informácií aby sa s nimi zaobchádzalo bezpečne a legálne.'],
  ['6-anonymizer', 'Anonymizácia dokumentov', 'Správa súkromných informácií aby sa s nimi zaobchádzalo bezpečne a legálne.'],
  ['7-online-poradca', 'Online poradca', 'Riešime prevenciu aj prípady šikany a kyberšikany na školách, pracovisku, ...'],
  ['8-segregacia', 'Segregácia', 'Riešime prevenciu aj prípady šikany a kyberšikany na školách, pracovisku, ...'],
];

export type ServiceCard = { icon: string; title: string; desc?: string; price: string; href: string };

/** Service cards for a segment; services not offered in the segment (price '-') are left out. */
export function segmentServices(seg: Segment): ServiceCard[] {
  return serviceList.flatMap(([id, title, desc]) => {
    const price = priceLabel(seg.name, id);
    if (!price) return [];
    return [{ icon: serviceIcon(id), title, desc, price, href: seg.serviceHref?.(id) ?? '#' }];
  });
}

const howWeWorkObec = [
  {
    icon: '/assets/ako-analyza.svg',
    title: 'Analýza prostredia',
    text: 'Vykonáme audit, na základe ktorého zhodnotia aktuálny stav ochrany osobných údajov. Analýza všetkých dokumentov a žiadosti, ktoré obec využíva, vrátane kamerového systému, ktorým sú monitorované verejné priestranstvá.',
  },
  {
    icon: '/assets/ako-navrhy.svg',
    title: 'Návrhy odporúčaných služieb',
    text: 'Všetky procesy, ktoré vo Vašej obci zmapujeme a informácie, ktoré získame, je potrebné zaznamenať. Vytvoríme bezpečnostnú dokumentáciu, ktorá bude odzrkadľovať súčasný, ale aj požadovaný stav v oblasti ochrany osobných údajov',
  },
  {
    icon: '/assets/ako-sucinnost.svg',
    title: 'Súčinnosť po celú dobu spolupráce',
    text: 'Každá obec má podľa Nariadenia GDPR povinnosť ustanoviť zodpovednú osobu. Pridelíme vám až 4 zodpovedné osoby, ktoré budú dohliadať nad zákonnosťou spracúvania osobných údajov. Naše zodpovedné osoby Vám budú vždy nápomocné.',
  },
  {
    icon: '/assets/ako-skolenia.svg',
    title: 'Školenia a podpora 24/7',
    text: 'Oblasť ochrany osobných údajov môže vo Vašej obci skontrolovať Úrad na ochranu osobných údajov Slovenskej republiky. V prípade zistených nedostatkov môže úrad uložiť obci pokutu až do výšky 20.000.000,- Eur.',
  },
];

const howWeWorkGeneric = [
  {
    icon: '/assets/ako-analyza.svg',
    title: 'Analýza prostredia',
    text: 'Vykonáme audit, na základe ktorého zhodnotia aktuálny stav ochrany osobných údajov. Analýza všetkých dokumentov a žiadosti, ktoré využívate, vrátane kamerového systému, ktorým sú monitorované verejné priestranstvá.',
  },
  {
    icon: '/assets/ako-navrhy.svg',
    title: 'Návrhy odporúčaných služieb',
    text: 'Všetky procesy, ktoré u vás zmapujeme a informácie, ktoré získame, je potrebné zaznamenať. Vytvoríme bezpečnostnú dokumentáciu, ktorá bude odzrkadľovať súčasný, ale aj požadovaný stav v oblasti ochrany osobných údajov',
  },
  {
    icon: '/assets/ako-sucinnost.svg',
    title: 'Súčinnosť po celú dobu spolupráce',
    text: 'Podľa Nariadenia GDPR môže mať aj vaša organizácia povinnosť ustanoviť zodpovednú osobu. Pridelíme vám až 4 zodpovedné osoby, ktoré budú dohliadať nad zákonnosťou spracúvania osobných údajov. Naše zodpovedné osoby Vám budú vždy nápomocné.',
  },
  {
    icon: '/assets/ako-skolenia.svg',
    title: 'Školenia a podpora 24/7',
    text: 'Oblasť ochrany osobných údajov môže u vás skontrolovať Úrad na ochranu osobných údajov Slovenskej republiky. V prípade zistených nedostatkov môže úrad uložiť pokutu až do výšky 20.000.000,- Eur.',
  },
];

export const howWeWork = { obec: howWeWorkObec, generic: howWeWorkGeneric };

/** Klientske centrum features on segment pages. */
// TODO: real copy — the design has "lorem ipsum dolor sit amet" after each feature title.
export const clientCenterFeatures = [
  { icon: '/assets/kc-bezpecnost.svg', title: 'Bezpečná správa lorem ipsum dolor sit amet' },
  { icon: '/assets/kc-24-7.svg', title: 'Dostupnosť 24/7 lorem ipsum dolor sit amet' },
  { icon: '/assets/kc-rychlost.svg', title: 'Rýchlosť a škálovateľnosť lorem ipsum dolor sit amet' },
];

/* ---------------- GDPR pre školy ---------------- */

/** Partner logos rotating in the hero. */
// TODO: the ZHK SR, DOSŤ BOLO, AVS and APUMS logos are hotlinked from osobnyudaj.sk (could not be downloaded here) — copy them into public/img.
const W = 'https://osobnyudaj.sk/wp-content/uploads/';
export const partners = [
  { img: '/img/zmos.png', name: 'ZMOS', text: 'Sme generálny partner združenia miest a obcí Slovenska' },
  { img: W + '2025/09/Frame-948-1.png', name: 'ZHK SR', text: 'Sme generálny partner združenia hlavných kontrolórov SR' },
  { img: W + '2025/09/logo.png', name: 'DOSŤ BOLO', text: 'Sme akreditovaný partner združenia Dosť bolo šikany a kyberšikany' },
  { img: W + '2025/09/Asociacia-vzdelavania-samospravy-logo.png', name: 'AVS', text: 'Sme partnerom Asociácie vzdelávania samosprávy' },
  { img: W + '2025/09/asociacia-prednostov-logo.png', name: 'APUMS', text: 'Sme partnerom Asociácie prednostov úradov miestnej samosprávy' },
];

/** "Čo všetko dostanete v cene" (two columns of six). */
export const includedInPrice: { title: string; text: string }[] = [
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
].map(([title, text]) => ({ title, text }));

export const gdprSkolyClientCenterFeatures = [
  { icon: '/assets/kc-bezpecnost.svg', title: 'Bezpečná správa', text: 'Garantujeme najvyššiu úroveň ochrany dát a dôvernosti vašich procesov.' },
  { icon: '/assets/kc-24-7.svg', title: 'Dostupnosť a rýchlosť', text: 'Naše riešenia sú vždy pripravené, aby ste mali prístup okamžite a bez zdržania.' },
  { icon: '/assets/kc-rychlost.svg', title: 'Inteligentná škálovateľnosť', text: 'Služby rastú spolu s vami a flexibilne sa prispôsobujú vašim budúcim potrebám.' },
];

/** "Súvisiace služby" on GDPR pre školy, priced for the Škola segment. */
export const gdprSkolyRelated: ServiceCard[] = (
  [
    ['8-segregacia', 'Segregácia', routes.segregacia],
    ['2-kyberbezpecnost', 'Kybernetická bezpečnosť', routes.kb],
    ['3-kybersikana', 'Šikana a kyberšikana', routes.kybersikana],
    ['4-ochrana-oznamovatelov', 'Ochrana oznamovateľa', routes.whistleblowing],
    ['5-bezpecnost-pri-praci', 'Bezpečnosť pri práci', routes.bozp],
    ['6-anonymizer', 'Anonymizér dokumentov', routes.anonymizer],
    ['7-online-poradca', 'Online poradca', '#cenova-ponuka'],
  ] as [ServiceId, string, string][]
).map(([id, title, href]) => ({ icon: serviceIcon(id), title, href, price: priceLabel('Škola', id) ?? '' }));
