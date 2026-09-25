import { site } from '../site.config';

export interface FaqItem {
  question: string;
  answer: string;
  /** Only render this item when true — used for conditional facts. */
  show?: boolean;
}

export const faq: FaqItem[] = [
  {
    question: 'Je školení pro zaměstnance škol povinné?',
    answer:
      'Minimální standard MŠMT je metodické doporučení, ne zákon. Škola má ale ze zákona povinnost zajistit bezpečnost a ochranu zdraví žáků (§ 29 školského zákona) a zaměstnavatel musí připravit zaměstnance na mimořádné události (§ 102 zákoníku práce). Pravidelné školení je nejpraktičtější způsob, jak tyto povinnosti naplnit.',
  },
  {
    question: 'Účastní se nácviku žáci?',
    answer:
      'Ne. Teoretická školení i praktické nácviky pro zaměstnance probíhají vždy bez žáků. Pro žáky nabízíme samostatný, věku přizpůsobený program o bezpečném chování na veřejných místech.',
  },
  {
    question: 'Nevystraší nácvik děti nebo kolegy?',
    answer:
      'Nácvik probíhá bez dětí, vedení školy zná scénář předem a kdo se na praktickou část necítí (např. ze zdravotních důvodů), může se jí neúčastnit. Cílem je klid a jistota, ne stres.',
  },
  {
    question: 'Jak dlouho školení trvá?',
    answer:
      'Specializované teoretické školení trvá minimálně 3 hodiny, praktický nácvik také minimálně 3 hodiny. Úvodní školení k dokumentaci školy zabere 1–2 hodiny.',
  },
  {
    question: 'Jak často je potřeba školení opakovat?',
    answer:
      'Úvodní školení alespoň jednou ročně, specializované teoretické a praktické jednou za dva roky, nácvik krizového týmu přibližně jednou ročně.',
  },
  {
    question: 'Co je lockdown a invakuace?',
    answer:
      'Lockdown je okamžité uzamčení osob v místnostech při nebezpečné osobě uvnitř budovy. Invakuace je „evakuace dovnitř“ při nebezpečí venku. Konkrétní postupy vaší školy nastavujeme neveřejně.',
  },
  {
    question: 'Zpracujete bezpečnostní a koordinační plán?',
    answer:
      'Ano — včetně bezpečnostní analýzy s vyhodnocením ohroženosti a karty školy pro složky IZS. Dokumenty jsou neveřejné a zůstávají pouze vedení školy.',
  },
  {
    question: 'Jak předcházet útokům na měkké cíle?',
    answer:
      'Prevence stojí na několika vrstvách: jasných pravidlech vstupu a pohybu osob, dohledu, stavebně-technickém a elektronickém zabezpečení, bezpečnostní dokumentaci a pozornosti k varovným signálům v chování. Základem je bezpečnostní analýza, podle které se opatření vybírají.',
  },
  {
    question: 'Musí škola investovat do drahé techniky?',
    answer:
      'Ne vždy. Nejúčinnější jsou často režimová opatření, například jeden kontrolovaný vstup, doprovod návštěv nebo klíčový režim. Stojí minimum a působí okamžitě. Do techniky se vyplatí investovat podle výsledků bezpečnostní analýzy.',
  },
  {
    question: 'Lze školení hradit ze šablon OP JAK?',
    answer: site.opJakEligible
      ? 'Ano, naše programy typu DVPP splňují podmínky šablon OP JAK. Rádi vám poradíme, jak žádost nastavit.'
      : 'Možnost hrazení ze šablon OP JAK aktuálně ověřujeme — kontaktujte nás a probereme aktuální pravidla výzvy pro váš případ.',
  },
  {
    question: 'Jak ověřím, že je dodavatel kvalifikovaný?',
    answer:
      'MŠMT doporučuje ověřit živnostenská oprávnění, praxi v bezpečnosti i ve školství, pedagogickou kvalifikaci lektorů a spolupráci s IZS. Všechny doklady vám rádi předložíme.',
  },
  {
    question: 'Spolupracujete s policií?',
    answer: site.policeCooperationVerified
      ? '{{POLICE_COOPERATION_ANSWER}}'
      : 'Naše programy vycházíme z veřejně dostupných metodik Policie ČR a MV ČR a u praktických nácviků se zbraněmi nebo modelovou střelbou postupujeme v koordinaci s místní policií. Policie ČR provozuje bezplatnou konzultační linku pro provozovatele měkkých cílů 800 255 255. V bezprostředním ohrožení volejte 158.',
  },
  {
    question: 'Kde školení probíhá?',
    answer: `Přímo ve vaší budově — nácvik má smysl jen v prostředí, kde se zaměstnanci pohybují každý den. Působíme ${site.regionsServed}.`,
  },
  {
    question: 'Pracujete i s mateřskými školami?',
    answer:
      'Ano. U MŠ přizpůsobujeme postupy věku a pohybovým možnostem dětí a práci s nimi.',
  },
];
