// Blog posts for /blog and /blog/[slug] (from the design's Blog and Blog-Clanok pages).
// TODO: load from the CMS once the administration is built.

export type BlogBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'quote'; text: string }
  | { type: 'figure'; caption: string; img?: string };

export type Author = { name: string; role: string; avatar: string; bio: string };

export type Post = {
  slug: string;
  title: string;
  /** Categories; the first one is the primary category shown on cards. */
  cats: string[];
  /** Topics ("Témy"). */
  tags: string[];
  segs: string[];
  /** ISO date (YYYY-MM-DD). */
  date: string;
  author: string;
  img: string;
  /** The post's image on the current osobnyudaj.sk WordPress (not reachable from the build). TODO: copy into /public. */
  remoteImg?: string;
  /** Small media marker shown before the tags (▣ article with gallery, ▶ video). */
  media?: string;
  body?: BlogBlock[];
};

/** Quick category buttons above the listing (only those with posts are shown). */
export const quickCats = ['GDPR', 'Kyberbezpečnosť', 'Šikana a kyberšikana', 'Umelá inteligencia (AI)', 'BOZP'];

export const blogSegments = [
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

export const POSTS_PER_PAGE = 12;
export const TOPICS_MAX = 12;

export const authors: Record<string, Author> = {
  'Jakub Szabo': {
    name: 'Jakub Szabo',
    role: 'Analytik',
    avatar: '/img/avatar-2.jpg',
    // TODO: real copy (the design has lorem ipsum for the author bio).
    bio: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere.',
  },
};

const slugify = (s: string) =>
  s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const fallbackImgs = ['/img/87a2263744af11b3.png', '/img/ea950d0807164691.jpg', '/img/550a0ba81b755726.jpg'];
const WP = 'https://osobnyudaj.sk/wp-content/uploads/2026/08/';

// [title, category, topics, date, author, image]
// The design's images live on the current WordPress site; until they are copied into /public the cards
// use the design's placeholder images (rotating, as in the design) and keep the URL in `remoteImg`.
const listed: [string, string, string[], string, string, string][] = [
  ['Pozor na podvodné SMS o daňovom preplatku', 'GDPR', ['Kybernetická bezpečnosť'], '2026-09-11', 'admin', ''],
  ['Digitálne euro pod lupou: Ohrozuje GDPR vašu finančnú slobodu a budúcnosť Bitcoinu?', 'GDPR', ['bezpečnosť online', 'digitálna stopa', 'GDPR'], '2026-08-24', 'autor', WP + 'copertina-15224-1024x683.png'],
  ['Koniec tajomstiev AI? Prečo transparentnosť algoritmov v dobe GDPR vyvoláva paniku medzi vývojármi', 'GDPR', ['AI', 'duševné vlastníctvo', 'GDPR'], '2026-08-24', 'autor', WP + 'copertina-15221-1024x683.png'],
  ['Tikajúca bomba vo vašej firme: Ako často musíte v skutočnosti revidovať informačnú povinnosť?', 'GDPR', ['cookies', 'GDPR', 'gdpr a podnikanie'], '2026-08-24', 'autor', WP + 'copertina-15218-1024x683.png'],
  ['GDPR nočná mora: Kto skutočne platí za chyby tretích strán pri spracovaní dát vašich zákazníkov?', 'GDPR', ['GDPR', 'gdpr a podnikanie', 'gdpr pokuty'], '2026-08-24', 'autor', WP + 'copertina-15215-1024x683.png'],
  ['Čo o vašom dieťati vie internet? Prečo je GDPR v digitálnom veku dôležitejšie, než si väčšina rodičov myslí.', 'GDPR', ['bezpečnosť online', 'digitálna stopa', 'GDPR'], '2026-08-24', 'autor', WP + 'copertina-15212-1024x683.png'],
  ['Slovensko sprísňuje pravidlá pre umelú inteligenciu. Jasnejšie má byť, kto bude AI kontrolovať', 'Umelá inteligencia (AI)', [], '2026-08-24', 'admin', WP + 'sprisnenie-umela-inteligencia-1024x538.png'],
  ['Hackeri napadli viac ako 14 500 kamier Dahua. Útok využíval slabé heslá aj P2P prístup', 'Kyberbezpečnosť', [], '2026-08-24', 'admin', WP + 'hackeri-napadli-dahua-1024x538.png'],
  ['Koniec sledovania: Kompletný manuál, ako vďaka GDPR vymazať svoju minulosť z Facebooku, Instagramu a TikToku', 'GDPR', ['bezpečnosť online', 'cookies', 'digitálna stopa'], '2026-08-24', 'autor', WP + 'copertina-15204-1024x683.png'],
  ['Apple varuje pred spywarom: komu upozornenie posiela a čo treba urobiť?', 'Kyberbezpečnosť', [], '2026-08-24', 'admin', ''],
];

/** The full sample article from the Blog-Clanok design. */
const sample: Post = {
  slug: 'ako-nas-sleduju-socialne-siete',
  title: 'Ako nás sledujú sociálne siete? Aké údaje zbierajú sociálne siete a ako ich využívajú.',
  cats: ['GDPR', 'Šikana a kyberšikana'],
  tags: ['Trolling', 'Únik dát', 'Sociálne siete'],
  segs: ['Škola', 'Školské zariadenie'],
  date: '2020-08-18',
  author: 'Jakub Szabo',
  img: '/img/blog-socialne-siete.jpg',
  media: '▣',
  body: [
    { type: 'p', text: 'Sociálne siete sa stali neoddeliteľnou súčasťou našich životov. Spájajú nás s priateľmi a rodinou, sú zdrojom informácií a zábavy a umožňujú nám zdieľať dôležité momenty. Tieto platformy sú zdanlivo zadarmo, no v digitálnej ekonomike platí pravidlo, že ak za produkt neplatíte peniazmi, s najväčšou pravdepodobnosťou ste produktom vy sami.' },
    { type: 'p', text: 'Menou, ktorou platíme za používanie týchto služieb, sú naše osobné údaje a naša pozornosť. Pochopenie toho, aké dáta a akým spôsobom o nás tieto platformy zbierajú, je základom pre lepšiu kybernetickú bezpečnosť a ochranu súkromia.' },
    { type: 'h2', text: '1. Základom je to, čo sami prezradíte' },
    { type: 'p', text: 'Najúčinnejším a najjednoduchším spôsobom, ako o nás sociálne siete získavajú informácie, je prostredníctvom údajov, ktoré im poskytujeme dobrovoľne. Pri registrácii a vypĺňaní profilu im odovzdávame kľúčové osobné údaje: meno, vek, pohlavie, e-mailovú adresu, telefónne číslo, mesto, v ktorom žijeme, informácie o vzdelaní či zamestnávateľovi. Týmto sa však zber dát ani zďaleka nekončí.' },
    { type: 'p', text: 'Každá fotografia, ktorú nahráme, každý status, ktorý zverejníme, a každý komentár, ktorý napíšeme, sa stáva ďalším dielikom skladačky nášho digitálneho profilu. Sociálne siete analyzujú obsah týchto príspevkov, ľudí, ktorých označujeme, a dokonca aj skryté metadáta vo fotografiách, ktoré môžu prezradiť presný čas a miesto, kde bola snímka zhotovená. Tieto informácie dobrovoľne odovzdávame a tvoríme si tak vlastný, verejne dostupný záznam o našom živote.' },
    { type: 'quote', text: 'Najúčinnejším a najjednoduchším spôsobom, ako o nás sociálne siete získavajú informácie, je prostredníctvom údajov, ktoré im poskytujeme dobrovoľne.' },
    { type: 'h2', text: '2. Sledovanie každej interakcie na platforme' },
    { type: 'p', text: 'Okrem údajov, ktoré aktívne poskytujeme, sociálne siete pedantne zaznamenávajú každú našu aktivitu a interakciu priamo na platforme. Každý „lajk“, zdieľanie, kliknutie na odkaz či prehratie videa je starostlivo zaevidované. Platformy merajú, ako dlho sa pri ktorom príspevku zastavíme, aké profily si prezeráme a aké kľúčové slová zadávame do vyhľadávania.' },
    { type: 'p', text: 'Táto analýza správania umožňuje algoritmom vytvoriť si neuveriteľne presný profil záujmov každého používateľa. Zistia, či sa zaujímate o politiku, šport, varenie alebo cestovanie. Vedia, aký typ humoru sa vám páči a na aký obsah s najväčšou pravdepodobnosťou zareagujete. Tieto poznatky následne využívajú na optimalizáciu obsahu, ktorý vám zobrazujú, s cieľom udržať vás na platforme čo najdlhšie.' },
    { type: 'h2', text: '3. Technické údaje o vašich zariadeniach' },
    { type: 'p', text: 'Pri každom pripojení na sociálnu sieť odovzdávate aj množstvo technických informácií o zariadení, ktoré používate. Platformy zaznamenávajú vašu IP adresu, ktorá prezrádza vašu približnú geografickú polohu. Zbierajú tiež údaje o type vášho zariadenia (napr. iPhone 14, Samsung Galaxy S23), verzii operačného systému (iOS, Android), type prehliadača a dokonca aj o stave batérie či sile Wi-Fi signálu.' },
    { type: 'p', text: 'Tieto zdanlivo neškodné technické údaje slúžia na niekoľko účelov. Pomáhajú optimalizovať zobrazenie platformy pre vaše konkrétne zariadenie a sú dôležité pre diagnostiku technických problémov. Predovšetkým však umožňujú jednoznačne identifikovať a sledovať vás naprieč rôznymi prihláseniami a zariadeniami, čím sa vytvára ešte komplexnejší obraz o vašich zvykoch.' },
    // TODO: real image (the design shows a striped "Obrázok k článku" placeholder).
    { type: 'figure', caption: 'Týmto spôsobom sociálne siete vedia, čo nakupujete, aké správy čítate a aké služby využívate na celom internete.' },
    { type: 'h2', text: '4. Sledovanie mimo sociálnej siete: Pixel a cookies' },
    { type: 'p', text: 'Jednou z najmenej transparentných, no najvýkonnejších metód sledovania je monitorovanie vašej aktivity aj mimo samotnej sociálnej siete. Technológie ako Meta Pixel (od spoločnosti Meta, predtým Facebook) a sledovacie súbory cookies umožňujú sociálnym sieťam sledovať vás na miliónoch iných webových stránok, v e-shopoch a aplikáciách.' },
    { type: 'p', text: 'Funguje to jednoducho: majiteľ e-shopu si na svoju stránku umiestni malý kúsok kódu (pixel). Keď si na jeho stránke prezeráte napríklad nový pár topánok, tento kód odošle informáciu späť na sociálnu sieť. Keď sa neskôr vrátite na svoju nástenku, „zhodou okolností“ sa vám zobrazí reklama presne na tieto topánky. Týmto spôsobom sociálne siete vedia, čo nakupujete, aké správy čítate a aké služby využívate na celom internete.' },
  ],
};

export const posts: Post[] = [
  ...listed.map(([title, cat, tags, date, author, img], i) => ({
    slug: slugify(title),
    title,
    cats: [cat],
    tags,
    segs: [],
    date,
    author,
    img: fallbackImgs[i % 3],
    remoteImg: img || undefined,
  })),
  sample,
].sort((a, b) => b.date.localeCompare(a.date));

export const postUrl = (p: Post) => `/blog/${p.slug}`;

const months = ['januára', 'februára', 'marca', 'apríla', 'mája', 'júna', 'júla', 'augusta', 'septembra', 'októbra', 'novembra', 'decembra'];
const parts = (iso: string) => iso.split('-').map(Number);

/** "11. 9. 2026" */
export const shortDate = (iso: string) => {
  const [y, m, d] = parts(iso);
  return `${d}. ${m}. ${y}`;
};
/** "18. augusta 2020" */
export const longDate = (iso: string) => {
  const [y, m, d] = parts(iso);
  return `${d}. ${months[m - 1]} ${y}`;
};

/** Up to `count` posts sharing a category with `cats` (newest first), topped up with the newest others. */
export function relatedPosts(cats: string[], count = 3, exclude?: string): Post[] {
  const pool = posts.filter((p) => p.slug !== exclude);
  const same = pool.filter((p) => p.cats.some((c) => cats.includes(c)));
  const rest = pool.filter((p) => !same.includes(p));
  return [...same, ...rest].slice(0, count);
}
