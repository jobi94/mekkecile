export const perex =
  'Nejúčinnější ochranou je incidentu předejít. Bezpečnost školy nebo instituce nestojí jen ' +
  'na školení, ale na několika vrstvách opatření, které do sebe zapadají: pravidlech, lidech, ' +
  'stavebních a technických prvcích, dokumentaci a pozornosti k varovným signálům.';

export const highlight =
  'Většina opatření nestojí mnoho peněz. Nejvíc záleží na jasných pravidlech a na tom, aby je všichni dodržovali.';

export const peopleBlock = {
  title: 'Prevence začíná u lidí',
  text:
    'Útočníci podle zahraničních analýz obvykle předem vysílají varovné signály a často o svém ' +
    'záměru někomu řeknou. Neexistuje „profil útočníka“, existuje chování, které lze včas zachytit.',
  bullets: [
    'Bezpečné klima a důsledné řešení šikany.',
    'Jasný a bezpečný způsob, jak mohou žáci, zaměstnanci i rodiče nahlásit znepokojivé chování.',
    'Ve školním řádu zákaz vnášení nebezpečných předmětů a postup, když se takový předmět u žáka najde.',
  ],
};

export interface SecurityLayer {
  icon: string;
  title: string;
  summary: string;
  bullets: string[];
}

export const layers: SecurityLayer[] = [
  {
    icon: 'door',
    title: 'Pravidla a režim',
    summary: 'Nejlevnější a nejrychleji účinná opatření. Bez nich nefunguje ani nejlepší technika.',
    bullets: [
      'Během provozu jeden hlavní kontrolovaný vstup, ostatní vstupy zamčené.',
      'Identifikace a doprovod návštěv, kniha návštěv v souladu s GDPR.',
      'Příjem pošty a zásilek na jednom místě u vstupu.',
      'Klíčový režim, díky kterému lze kteroukoli místnost okamžitě zamknout.',
    ],
  },
  {
    icon: 'users',
    title: 'Lidé a dohled',
    summary: 'Fyzická přítomnost a pozornost lidí, kterou žádná technika nenahradí.',
    bullets: [
      'Vrátný nebo ostraha u hlavního vstupu.',
      'Dohled po celou dobu provozu, včetně příchodů a odchodů.',
      'Každý zaměstnanec ví, co udělat, když v budově uvidí cizí osobu bez doprovodu.',
    ],
  },
  {
    icon: 'building',
    title: 'Stavebně-technická ochrana',
    summary: 'Úpravy budovy a areálu, které ztíží neoprávněný vstup.',
    bullets: [
      'Oplocení, zajištěné vjezdy a dobré osvětlení areálu.',
      'Jasně určené vstupy pro žáky, návštěvy a zásobování.',
      'Okna odolná proti vniknutí, zabezpečený přístup na střechu.',
      'Kvalitní dveře, zámky a bezpečnostní kování.',
    ],
  },
  {
    icon: 'camera',
    title: 'Elektronické systémy',
    summary: 'Technika, která doplňuje pravidla a lidský dohled — ne naopak.',
    bullets: [
      'Vstupní systém s evidencí příchodů a odchodů.',
      'Kamerový systém na rizikových místech, provozovaný v souladu s GDPR.',
      'Systém včasného varování pro evakuaci, invakuaci a lockdown.',
      'Tísňová tlačítka, zabezpečovací systém napojený na pult centralizované ochrany a záložní zdroj energie.',
    ],
  },
  {
    icon: 'document',
    title: 'Plány a postupy',
    summary: 'Dokumentace, která dává všem opatřením řád a jasné odpovědnosti.',
    bullets: [
      'Bezpečnostní analýza s vyhodnocením ohroženosti jako základ všech rozhodnutí.',
      'Bezpečnostní plán a koordinační plán s kartou školy pro složky IZS.',
      'Směrnice pro evakuaci, invakuaci a lockdown, evidence bezpečnostních incidentů.',
      'Spolupráce s místní policií. Policie ČR nabízí konzultační linku 800 255 255.',
    ],
  },
  {
    icon: 'shield',
    title: 'Ochrana informací',
    summary: 'To, co chrání vaše lidi, nesmí být volně dostupné útočníkovi předem.',
    bullets: [
      'Bezpečnostní postupy, signály ani umístění tísňových prvků nepatří na web ani na sociální sítě.',
      'Plánky budovy, virtuální prohlídky a fotografie vstupů raději nezveřejňujte.',
      'Rozvrhy a umístění tříd sdílejte jen přes systémy s přihlášením.',
    ],
  },
];

export const kdeZacit = [
  {
    n: '1',
    title: 'Zmapujte současný stav',
    text: 'Bezpečnostní analýza ukáže, co funguje a kde jsou slabá místa.',
  },
  {
    n: '2',
    title: 'Nastavte pravidla',
    text: 'Režimová opatření mají okamžitý efekt a stojí minimum.',
  },
  {
    n: '3',
    title: 'Doplňte techniku a proškolte lidi',
    text: 'Investujte tam, kam ukáže analýza, a opatření pravidelně nacvičujte.',
  },
];

export const footnote = 'Všechna opatření musí být v souladu s požární bezpečností. Únikové cesty musí zůstat volné.';

export const sourceUrl = 'https://edu.gov.cz/pro-vedeni-skoly/bezpecnost-na-skolach/materialy/';
export const sourceLabel = 'Minimální standard bezpečnosti v regionálním školství, MŠMT 2024';
