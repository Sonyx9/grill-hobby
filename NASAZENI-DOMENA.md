# Nasazení na vlastní doménu (Grill & Hobby – co jsme upravili)

Návod shrnuje úpravy, díky kterým stránka funguje na **https://grillandhobby.com/** (vlastní doména). Stejný postup lze použít i pro druhou stránku (např. Garden & Hobby).

---

## 1. Astro config (`astro.config.mjs`)

**Pro vlastní doménu (stránka na kořeni URL):**

```js
const site = 'https://grillandhobby.com';  // vaše doména
const base = '/';

export default defineConfig({
  site,
  base,
  output: 'static',
  build: {
    assets: 'assets',   // ne _astro (kvůli GitHub Pages/Jekyll)
  },
});
```

- **`base: '/'`** – všechny cesty jsou z kořene: `/images/...`, `/assets/...`, `/cz/`. Nutné, když stránka běží na vlastní doméně (grillandhobby.com/), ne na github.io/repo/.
- **`site`** – plná URL domény pro canonical a OG odkazy.
- **`build.assets: 'assets'`** – CSS/JS jdou do složky `assets` místo `_astro`, aby je GitHub Pages vždy naservíroval (složky začínající `_` mohou být ignorované).

**Kdybyste chtěli zároveň github.io (bez vlastní domény):**  
`base: '/nazev-repo/'`, `site: 'https://username.github.io/nazev-repo'`. Pro vlastní doménu to nepoužívejte.

---

## 2. Obrázky a odkazy – používat base

V komponentách používat `import.meta.env.BASE_URL`, aby cesty fungovaly i při změně base:

- Layout: favicon `href={base}favicon.svg`, výchozí obrázek `image={base}images/...`
- Obrázky: `src={base}images/logo.png` nebo `${base}images/hero.jpg`
- V galerii: `src = base + img.src.replace(/^\//, '')`

S `base: '/'` je BASE_URL = `/` (nebo `/` s koncovým lomítkem podle Astro), takže výsledek je např. `/images/logo.png`.

---

## 3. SVG ikony – explicitní width/height

Aby se ikony při nenačteném CSS neroztáhly, u každého SVG uvést `width` a `height` v px:

```html
<svg class="w-3 h-3 shrink-0" width="12" height="12" ...>
```

Bez toho prohlížeč může zobrazit ikonu v obří velikosti.

---

## 4. Soubor `.nojekyll` (pouze pokud používáte složku `_astro`)

Kdybyste nepoužili `build.assets: 'assets'` a nechali výchozí `_astro`, je potřeba v `public/` mít prázdný soubor **`.nojekyll`**, aby GitHub Pages neskipoval složky začínající podtržítkem. Při `assets: 'assets'` to není potřeba.

---

## 5. Nasazení na GitHub Pages

**Možnost A – větev gh-pages (doporučeno):**

- Workflow při pushi na `main`: build + push obsahu `dist/` na větev `gh-pages` (např. `peaceiris/actions-gh-pages`).
- V repozitáři: **Settings → Pages → Source: Deploy from a branch**, branch **gh-pages**, folder **/ (root)**.

**Možnost B – GitHub Actions jako zdroj:**

- Workflow: build + `actions/upload-pages-artifact` (path: `dist`) + `actions/deploy-pages`.
- V repozitáři: **Settings → Pages → Source: GitHub Actions**.

Po nasazení musí být v kořeni artifactu/větve soubor **index.html** („For root URLs you must provide an index.html file“).

---

## 6. Vlastní doména

- V **Settings → Pages** nastavit **Custom domain**: `grillandhobby.com` (bez https://).
- **Enforce HTTPS** zapnuté.
- V DNS u domény: CNAME na `username.github.io` (nebo A záznamy dle dokumentace GitHub Pages).

Konfigurace v Astro (`site` + `base`) musí odpovídat této doméně a tomu, že stránka běží v kořeni (base `/`).

---

## Checklist pro druhou stránku

1. V `astro.config.mjs`: `site: 'https://druha-domena.cz'`, `base: '/'`, `build.assets: 'assets'`.
2. Všechny odkazy na obrázky/assety přes `import.meta.env.BASE_URL` (ne natvrdo `/grill-hobby/...`).
3. U SVG ikon mít `width` a `height` v px.
4. Mít workflow, které z buildu nahraje obsah do `gh-pages` (nebo artifact pro deploy-pages).
5. V GitHub Pages nastavit zdroj (branch gh-pages nebo GitHub Actions) a vlastní doménu.
6. Po deployi ověřit, že na doméně fungují `/assets/...css` a `/images/...`.

---

*Úpravy provedené pro Grill & Hobby, březen 2026.*
