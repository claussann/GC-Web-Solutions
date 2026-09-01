# GC Web Solutions — React + TypeScript

Versione del sito realizzata esclusivamente come applicazione React +
TypeScript. Non utilizza Next.js, Vinext, Vite, Tailwind, Cloudflare, backend o
database.

Il risultato della compilazione è un sito statico compatibile con GitHub Pages.

## Requisiti

- Node.js 20 o successivo
- npm

Per controllare le versioni installate:

```bash
node -v
npm -v
```

## Avvio locale

Apri il terminale dentro la cartella del progetto ed esegui:

```bash
npm install
npm start
```

Il browser si aprirà automaticamente su `http://localhost:3000`.

## Build di produzione

```bash
npm run build
```

Webpack creerà la cartella `build/`. Questa cartella contiene soltanto i file
statici finali del sito.

## Controllo completo

```bash
npm run verify
```

Il comando verifica prima TypeScript e poi genera la build di produzione.

## Struttura del progetto

```text
public/
  index.html          metadati SEO e contenitore della pagina
  favicon.svg         icona del sito
  robots.txt          regole base per i motori di ricerca
src/
  components/         una sezione del sito per ogni componente
  config/site.ts      configurazioni semplici, come l'email del form
  data/content.ts     servizi, progetti e passaggi del metodo
  App.tsx             ordine delle sezioni
  main.tsx            avvio di React
  styles.css          colori, layout responsive e animazioni
webpack.config.cjs    compilazione e server locale, senza Vite
```

## Dove modificare il sito

- **Servizi, progetti e metodo:** `src/data/content.ts`
- **Email del modulo:** `src/config/site.ts`
- **Testi delle singole sezioni:** relativo file in `src/components/`
- **Colori, spaziature e animazioni:** `src/styles.css`
- **Titolo e descrizione SEO:** `public/index.html`
- **Ordine delle sezioni:** `src/App.tsx`

I file contengono commenti che segnalano lo scopo dei componenti e i punti di
modifica principali.

## Funzionamento del modulo contatti

Il form valida i campi nel browser e prepara un'email tramite `mailto:`. Non
salva né invia dati a un server.

Durante la verifica locale rimane intenzionalmente in modalità anteprima. Per
collegare l'indirizzo definitivo, apri `src/config/site.ts` e inserisci l'email:

```ts
export const SITE_CONFIG = {
  contactEmail: "info@esempio.it",
} as const;
```

Riavvia `npm start` dopo la modifica.

## GitHub Pages

Il progetto è già predisposto per funzionare anche nella sottocartella del
repository: gli asset compilati usano percorsi relativi e la build include il
file `.nojekyll`.

La pubblicazione non è automatica e non è stata eseguita. Verrà configurata
soltanto dopo la verifica locale e l'approvazione del sito.

## Note

- Non modificare direttamente la cartella `build/`: viene rigenerata a ogni
  compilazione.
- Non caricare `node_modules/` nel repository.
- Prima di un caricamento esegui sempre `npm run verify`.
