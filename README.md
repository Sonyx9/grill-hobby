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

1. Nahrajte projekt do vlastního repozitáře na GitHubu (např. `Grill-and-Hobby`).
2. V repozitáři: **Settings → Pages → Build and deployment → Source:** zvolte **GitHub Actions**.
3. Po každém push na větev `main` se spustí workflow `.github/workflows/pages.yml`, stránka se zbuildí a nasadí.
4. Stránka bude dostupná na: `https://<username>.github.io/<název-repo>/`  
   (např. `https://lukas.github.io/Grill-and-Hobby/`).

Base URL i `site` pro OG odkazy se v CI nastaví automaticky podle názvu repozitáře.

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
