# Grill & Hobby – Landing Page

Stránka zaměřená na grily a živý oheň. Primární jazyk pro dodavatele: **angličtina**. Paleta „The Embers & Iron“ (uhlíky a železo), fonty Playfair Display a Montserrat.

## Spuštění

```bash
npm install
npm run dev
```

Stránka běží na [http://localhost:4321](http://localhost:4321).

## Build

```bash
npm run build
```

Výstup je ve složce `dist/`.

## GitHub Pages

Máte **dvě možnosti** nasazení. Pokud se stránka po pushi nemění nebo se nenačítají styly, použijte **možnost B**.

### Možnost A – zdroj „GitHub Actions“

1. **Settings → Pages → Build and deployment → Source:** zvolte **GitHub Actions**.
2. Po pushi na `main` se spustí workflow *Deploy to GitHub Pages* a stránka se nasadí.

### Možnost B – větev gh-pages (doporučeno, pokud A nefunguje)

1. Po pushi na `main` se spustí workflow **Deploy to gh-pages branch** – ten zbuildí stránku a nahraje ji na větev `gh-pages`.
2. V repozitáři: **Settings → Pages → Build and deployment → Source:** zvolte **Deploy from a branch**.
3. **Branch:** vyberte **gh-pages**, **Folder:** ponechejte **/ (root)**.
4. Uložte. Stránka se nasadí z větve `gh-pages` a měla by se zobrazovat včetně stylů.

URL stránky: `https://<username>.github.io/grill-hobby/` (např. `https://sonyx9.github.io/grill-hobby/`).

## Konfigurace

- **Kontakt** – v `src/data/content.ts` jsou `contacts.email` a `contacts.phone` (curator@grillandhobby.com, 735 306 070)
- **Obrázky** – přidejte do `public/images/`:
  - `hero-grill.jpg` – hlavní vizuál hero sekce
  - `gallery-grill-1.jpg` až `gallery-grill-6.jpg` – galerie v sekci Curating (nebo upravte cesty v `src/data/content.ts`)
- **Meta / OG** – v `astro.config.mjs` nastavte `site` na skutečnou doménu
- **Favicon** – nahraďte `public/favicon.svg` vlastním logem

## Struktura

```
src/
├── components/
│   ├── Header.astro       # Navigace + odkaz na sesterskou značku (Garden & Hobby)
│   ├── HeroGarden.astro   # Hero s nadpisem THE ART OF LIVE-FIRE COOKING
│   ├── Curating.astro     # Sekce CURATED MASTERY + galerie
│   ├── WhatsComing.astro  # WHAT'S NEXT (4 body s ikonami)
│   ├── SisterBrand.astro  # Odkaz na Garden & Hobby
│   ├── ContactGarden.astro # Start a Conversation + kontakt
│   └── FooterGarden.astro
├── data/
│   └── content.ts         # Všechny texty EN/CZ, kontakty
├── layouts/
│   └── Layout.astro
├── pages/
│   ├── index.astro        # EN
│   └── cz/index.astro     # CZ
└── styles/
    └── global.css
public/
├── images/
│   ├── hero-grill.jpg
│   ├── gallery-grill-1.jpg … 6
│   └── logo.png
└── favicon.svg
```
