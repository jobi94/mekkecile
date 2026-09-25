import { site } from '../site.config';

export const steps = [
  {
    n: '01',
    title: 'Poptávka',
    text: `Vyplníte formulář nebo zavoláte. Ozveme se do ${site.responseTimeDays} pracovních dnů.`,
  },
  {
    n: '02',
    title: 'Úvodní konzultace',
    text: 'Online nebo na místě. Probereme cíle, stávající dokumenty, velikost a typ školy, rozpočet a možnosti financování. Uzavíráme vzájemnou dohodu o mlčenlivosti.',
  },
  {
    n: '03',
    title: 'Prohlídka a analýza',
    text: 'Prohlídka budovy a revize dokumentace, pokud je objednána.',
  },
  {
    n: '04',
    title: 'Návrh programu na míru',
    text: 'Rozsah, termíny, lektoři, co si škola připraví, cena. Ve smlouvě je uvedeno, že zakázku skutečně provádí kvalifikovaný dodavatel.',
  },
  {
    n: '05',
    title: 'Teoretická část',
    text: 'Pro všechny zaměstnance, vždy bez žáků.',
  },
  {
    n: '06',
    title: 'Praktický nácvik',
    text: 'Ředitel/ka zná scénář předem, policie je informována tam, kde je to potřeba, kdo se necítí, může se neúčastnit, jeden lektor na skupinu, možná účast IZS.',
  },
  {
    n: '07',
    title: 'Vyhodnocení',
    text: 'Zpětná vazba na místě a písemná zpráva s doporučeními — důvěrná, sdílená jen s vedením a dle uvážení ředitele/ky se školskou radou a zřizovatelem.',
  },
  {
    n: '08',
    title: 'Zapracování do dokumentace',
    text: 'Aktualizace bezpečnostního plánu, koordinačního plánu a směrnic.',
  },
  {
    n: '09',
    title: 'Opakování a udržování',
    text: 'Kalendář opakování podle doporučených frekvencí MŠMT.',
  },
];

export const frequencyTable = [
  { activity: 'Úvodní (základní) školení', frequency: 'min. 1× ročně + po každé aktualizaci' },
  { activity: 'Specializované teoretické školení', frequency: '1× za 2 roky' },
  { activity: 'Specializovaný praktický nácvik', frequency: '1× za 2 roky (+ po změnách)' },
  { activity: 'Seznámení zaměstnanců s bezpečnostním plánem', frequency: 'cca 2× ročně' },
  { activity: 'Nácvik koordinačního týmu', frequency: 'cca 1× ročně' },
  { activity: 'Aktualizace kontaktů v koordinačním plánu', frequency: 'při každé personální změně' },
  { activity: 'Aktualizace tabulek v kartě pro IZS', frequency: 'min. 1× ročně' },
];
