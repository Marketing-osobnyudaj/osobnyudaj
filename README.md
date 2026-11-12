# osobnyudaj.sk

Web osobnyudaj.sk postavený na [Astro](https://astro.build) (statické stránky).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # výstup v dist/
```

## Štruktúra

- `src/styles/global.css` – dizajnové tokeny (farby, písma, tiene), tlačidlá, nadpisy, formulárové polia
- `src/data/site.ts` – trasy, menu, služby, segmenty, cenník, päta
- `src/layouts/BaseLayout.astro` – spoločná kostra stránky (hlavička + päta)
- `src/components/` – `Header`, `Footer`, `LogoMarquee`, sekcie domovskej stránky v `home/`
- `public/assets`, `public/img` – obrázky z dizajnu
