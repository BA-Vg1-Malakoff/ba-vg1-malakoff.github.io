# Elevportal BA Vg1 – Malakoff

Verktøy for elever i Vg1 bygg- og anleggsteknikk ved Malakoff videregående skole.
Publiseres med GitHub Pages på https://ba-vg1-malakoff.github.io/

## Innhold

| Mappe / fil | Hva |
|---|---|
| `index.html` | Startsiden (portalen) med oversikt over verktøyene |
| `risikovurdering/` | Interaktivt skjema for risikovurdering i fire soner |
| `manifest.webmanifest`, `sw.js`, `ikoner/` | Gjør portalen installerbar som app og brukbar uten nett |

## Prinsipper for alle verktøy

- Elevene fyller ut i nettleseren. Det lagres automatisk lokalt på elevens PC.
- Levering skjer ved å laste ned Word-fil (.docx) og levere i Teams.
- Ingen elevdata sendes til noen server.

## Nytt verktøy

1. Lag en ny mappe med `index.html` (samme utseende og knapper som risikovurderingen).
2. Legg til et kort for verktøyet i `index.html` på rot.
3. Legg filene til i `FILER` i `sw.js` og øk `VERSJON`.
