// Client-side pagination over a statically rendered list (used by the blog and e-book listings).
// Page numbers jump to a single page; "Zobraziť ďalšie" appends the next page to the visible ones.

export type Pager = {
  /** Replace the set of items that match the current filter and go back to page 1. */
  setItems(items: HTMLElement[]): void;
};

/** Page labels with ellipses, e.g. 1 2 3 4 5 … 9. */
function pageLabels(n: number, cur: number): (number | '…')[] {
  if (n <= 7) return Array.from({ length: n }, (_, i) => i + 1);
  const set = new Set([1, n, cur - 1, cur, cur + 1]);
  if (cur <= 4) [2, 3, 4, 5].forEach((x) => set.add(x));
  if (cur >= n - 3) [n - 4, n - 3, n - 2, n - 1].forEach((x) => set.add(x));
  const nums = [...set].filter((x) => x >= 1 && x <= n).sort((a, b) => a - b);
  const out: (number | '…')[] = [];
  nums.forEach((x, i) => {
    if (i && x - nums[i - 1] > 1) out.push('…');
    out.push(x);
  });
  return out;
}

export function createPager(root: HTMLElement, all: HTMLElement[], per: number): Pager {
  const more = root.querySelector<HTMLButtonElement>('[data-pager-more]');
  const pages = root.querySelector<HTMLElement>('[data-pager-pages]');
  let items = all;
  let first = 1;
  let last = 1;

  const render = (scroll = false) => {
    const n = Math.max(1, Math.ceil(items.length / per));
    last = Math.min(last, n);
    first = Math.min(first, last);
    all.forEach((el) => (el.hidden = true));
    items.slice((first - 1) * per, last * per).forEach((el) => (el.hidden = false));
    root.hidden = n <= 1;
    if (more) more.hidden = last >= n;
    if (pages) {
      pages.replaceChildren(
        ...pageLabels(n, last).map((label) => {
          if (label === '…') {
            const s = document.createElement('span');
            s.textContent = '…';
            s.setAttribute('aria-hidden', 'true');
            return s;
          }
          const b = document.createElement('button');
          b.type = 'button';
          b.textContent = String(label);
          b.setAttribute('aria-label', `Strana ${label}`);
          if (label === last) b.setAttribute('aria-current', 'page');
          b.addEventListener('click', () => {
            first = last = label;
            render(true);
          });
          return b;
        }),
      );
    }
    if (scroll) items[(first - 1) * per]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  more?.addEventListener('click', () => {
    last += 1;
    render();
  });

  render();
  return {
    setItems(next) {
      items = next;
      first = last = 1;
      render();
    },
  };
}
