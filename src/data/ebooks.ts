// E-books for /e-knihy (from the design's E-knihy page).
// TODO: load from the CMS once the administration is built; add the PDF download links.

export type Ebook = { cat: string; title: string; desc: string; segs: string[]; href: string };

/** Segment tabs; "Všeobecné" shows every e-book. */
export const ebookSegments = [
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
];

export const EBOOKS_PER_PAGE = 12;

// TODO: real copy (the design has lorem ipsum for the e-book descriptions).
const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

export const ebooks: Ebook[] = [
  { cat: 'Kybernetická bezpečnosť', title: 'Kybernetická bezpečnosť pre obce', desc: lorem, segs: ['Obec', 'Mesto'], href: '#' },
  { cat: 'GDPR', title: 'Zabezpečenie ochrany osobných údajov v obci', desc: lorem, segs: ['Obec', 'Mesto'], href: '#' },
];
