export type Audience =
  | 'vsichni'
  | 'vedeni'
  | 'provozni'
  | 'prevence'
  | 'zaci'
  | 'jine-instituce';

export interface Course {
  id: string;
  letter: string;
  icon: string; // key into Icons component
  name: string;
  promise: string;
  audience: Audience[];
  audienceLabel: string;
  duration: string;
  frequency: string;
  format: string;
  maxGroup?: string;
  takeaway: string[];
  detail: string;
}

export const courses: Course[] = [
  {
    id: 'zakladni-skoleni',
    letter: 'A',
    icon: 'shield',
    name: 'Úvodní bezpečnostní školení',
    promise: 'Základní školení všech zaměstnanců k vlastním směrnicím a bezpečnostnímu plánu školy.',
    audience: ['vsichni'],
    audienceLabel: 'Všichni zaměstnanci (pedagogičtí i nepedagogičtí)',
    duration: '60–120 min',
    frequency: 'min. 1× ročně + po každé aktualizaci dokumentů',
    format: 'Na místě, ve vaší budově',
    takeaway: [
      'Přehled vlastních směrnic a bezpečnostního plánu',
      'Praktická aplikace na konkrétní prostory školy',
      'Seznam zjištěných slabých míst',
    ],
    detail:
      'Projdeme s vaším týmem vlastní směrnice, bezpečnostní plán a postupy s důrazem na praktické použití v provozu školy. Školení končí krátkou diskuzí a shrnutím míst, na která se zaměřit.',
  },
  {
    id: 'aktivni-utocnik-teorie',
    letter: 'B',
    icon: 'alert',
    name: 'Aktivní útočník a mimořádné události ve škole',
    promise: 'Specializované teoretické vzdělávání pro celý personál — bez přítomnosti žáků.',
    audience: ['vsichni'],
    audienceLabel: 'Všichni zaměstnanci, bez žáků',
    duration: 'min. 3 h (4× 45 min jako DVPP)',
    frequency: '1× za 2 roky',
    format: 'Na místě, ve vaší budově',
    takeaway: [
      'Právní minimum: nutná obrana a krajní nouze, povinnosti podle školského zákona a zákoníku práce',
      'Typové mimořádné události: podezřelý předmět, bombová hrozba, násilný vstup, aktivní útočník',
      'Součinnost koordinačního týmu, krizová komunikace',
    ],
    detail:
      'Syllabus vychází z minima doporučeného MŠMT: nutná obrana a krajní nouze (§ 28, § 29 trestního zákoníku), § 22a, 22b, 29, 30 školského zákona, zákon o IZS. Probíráme podezřelý předmět, bombovou hrozbu, podezřelou zásilku, neoprávněný a násilný vstup, aktivní útok včetně principu Utíkej – Schovej se – Bojuj, požár a žhářství, únik nebezpečné látky, incident v okolí školy, elektronické a telefonické výhrůžky i nález zbraně u žáka.',
  },
  {
    id: 'prakticky-nacvik',
    letter: 'C',
    icon: 'target',
    name: 'Praktický nácvik',
    promise: 'Nácvik typu AMOK přímo ve vaší budově — s ohledem na klid a bezpečí zaměstnanců.',
    audience: ['vsichni'],
    audienceLabel: 'Zaměstnanci, vždy bez žáků',
    duration: 'min. 3 h za akci (4× 45 min jako DVPP)',
    frequency: '1× za 2 roky a po zásadních změnách provozu či budovy',
    format: 'Na místě, ve vaší budově',
    maxGroup: 'Jeden lektor na jednu nacvičující skupinu',
    takeaway: [
      'Zopakování právního minima a postupů, první pomoc v krizové situaci',
      'Simulace scénáře přímo v prostorách školy',
      'Písemné vyhodnocení a doporučení po nácviku',
    ],
    detail:
      'Ředitel/ka zná scénář předem. Zaměstnanci se zdravotním omezením (např. srdeční potíže, těhotenství, prodělané trauma) se mohou praktické části neúčastnit. Pokud nácvik pracuje s modelovou střelbou, předem informujeme místní policii. Při použití jakékoli zbraně, včetně kategorie D (např. airsoft), disponujeme příslušným oprávněním. Účast Policie ČR nebo složek IZS je možná po domluvě.',
  },
  {
    id: 'krizovy-tym',
    letter: 'D',
    icon: 'users',
    name: 'Krizový tým vedení školy',
    promise: 'Koordinační plán v praxi — role, aktivace týmu a komunikace při mimořádné události.',
    audience: ['vedeni'],
    audienceLabel: 'Ředitel/ka a koordinační tým',
    duration: '2–4 h',
    frequency: 'nácvik cca 1× ročně, seznámení s plánem cca 2× ročně',
    format: 'Tabletop / simulace na místě',
    takeaway: [
      'Role a aktivace koordinačního týmu, náhradní koordinační centrum',
      'Komunikace s rodiči, médii a zřizovatelem',
      'Návrat k běžnému provozu, návaznost na sekundární a terciární intervenci',
    ],
    detail:
      'Cvičení formou tabletopu nebo simulace pro vedení školy a koordinační tým. Probíráme kontakty, komunikační kanály, aktivaci náhradního koordinačního centra mimo budovu a postup návratu k běžnému provozu.',
  },
  {
    id: 'varovne-signaly',
    letter: 'E',
    icon: 'eye',
    name: 'Varovné signály a práce s rizikovým žákem',
    promise: 'Hodnocení hrozby založené na chování — bez „profilu útočníka“, s důrazem na včasné zachycení signálů.',
    audience: ['prevence'],
    audienceLabel: 'Metodici prevence, výchovní poradci, třídní učitelé, vedení',
    duration: '3 h',
    frequency: 'doporučeně 1× ročně',
    format: 'Na místě, ve vaší budově',
    takeaway: [
      'Hodnocení hrozby založené na chování a okolnostech, ne na profilu',
      'Šikana, sociální stresory a přístup ke zbrani doma jako rizikové faktory',
      'Postup při podezření, že žák nese nebezpečný předmět, a spolupráce s OSPOD a policií',
    ],
    detail:
      'Vycházíme ze zjištění, že neexistuje jednotný profil útočníka — naprostá většina však své chování předem projevila a o záměru s někým mluvila. Učíme rozpoznat signály (leakage), pracovat s podezřením na šikanu a nastavit spolupráci s rodiči, OSPOD a policií. Součástí je i postup podle doporučení Policejního prezidia pro případ podezření, že žák nese nebezpečný předmět.',
  },
  {
    id: 'provozni-zamestnanci',
    letter: 'F',
    icon: 'key',
    name: 'Pro provozní zaměstnance: vstup, návštěvy, pošta, výhrůžky',
    promise: 'Praktický postup pro školníky, recepci, administrativu, kuchyň a úklid.',
    audience: ['provozni'],
    audienceLabel: 'Školníci, recepce/vrátní, administrativa, kuchyň, úklid',
    duration: '90–120 min',
    frequency: 'min. 1× ročně',
    format: 'Na místě, ve vaší budově',
    takeaway: [
      'Kontrola vstupu a kniha návštěv v souladu s GDPR',
      'Bezpečné přebírání pošty a postup u podezřelé zásilky',
      'Postup při výhružném telefonátu a klíčový režim',
    ],
    detail:
      'Probíráme kontrolu vstupu, doprovod návštěv, bezpečné přebírání pošty a podezřelých zásilek, postup při výhružném telefonátu (zaznamenat detaily, nezavěšovat, informovat vedení a policii) a klíčový režim budovy.',
  },
  {
    id: 'prvni-pomoc',
    letter: 'G',
    icon: 'heart',
    name: 'První pomoc v krizových situacích',
    promise: 'Zvládnutí masivního krvácení a poskytnutí pomoci pod stresem do příjezdu záchranky.',
    audience: ['vsichni'],
    audienceLabel: 'Všichni zaměstnanci',
    duration: '2–4 h',
    frequency: 'doporučeně 1× ročně',
    format: 'Na místě, ve vaší budově',
    takeaway: [
      'Ošetření masivního krvácení a stabilizovaná poloha',
      'Poskytování pomoci pod stresem',
      'Doporučené vybavení lékárničky pro krizové situace',
    ],
    detail:
      'Praktický nácvik zaměřený na ošetření masivního krvácení, správné polohování a poskytování první pomoci pod stresem do příjezdu záchranné služby. Doporučíme i vybavení lékárničky pro tyto situace.',
  },
  {
    id: 'bezpecne-chovani-zaci',
    letter: 'H',
    icon: 'graduation',
    name: 'Bezpečné chování pro žáky',
    promise: 'Věkově přizpůsobený program o bezpečném chování na veřejných místech — bez nácviku postupů vaší školy.',
    audience: ['zaci'],
    audienceLabel: 'Žáci, praktická část se souhlasem zákonných zástupců',
    duration: '45–90 min na třídu',
    frequency: 'dle domluvy',
    format: 'Na místě, ve třídě',
    takeaway: [
      'Bezpečné chování v obchodních centrech, kině, dopravě a na akcích',
      'Obecné principy evakuace, invakuace a lockdownu',
      'Jak přivolat pomoc (158/112, aplikace Záchranka) a nahlásit znepokojivé chování',
    ],
    detail:
      'Program se týká veřejných prostor mimo školu (obchodní centra, kino, doprava, akce) a obecných principů bezpečného chování. Nikdy nenacvičuje konkrétní postupy či procedury vaší školy — výjimkou je zákonem vyžadovaný požární nácvik.',
  },
  {
    id: 'jine-mekke-cile',
    letter: 'I',
    icon: 'building',
    name: 'Pro jiné měkké cíle',
    promise: 'Upravené verze školení pro úřady, zdravotnictví, sociální služby, kulturu a firmy.',
    audience: ['jine-instituce'],
    audienceLabel: 'Úřady, zdravotnická a sociální zařízení, kultura, firmy',
    duration: 'dle rozsahu',
    frequency: 'dle domluvy',
    format: 'Na místě, v prostorách instituce',
    takeaway: [
      'Přizpůsobení obsahu prostředí a provozu instituce',
      'Modul bezpečnosti akcí pro pořadatele',
      'Stejná metodika jako u škol, na míru vašemu provozu',
    ],
    detail:
      'Upravujeme obsah školení B, C, D a F podle prostředí konkrétní instituce a doplňujeme modul bezpečnosti veřejných akcí pro jejich pořadatele.',
  },
];

export const audienceFilters: { id: Audience | 'vse'; label: string }[] = [
  { id: 'vse', label: 'Vše' },
  { id: 'vsichni', label: 'Všichni zaměstnanci' },
  { id: 'vedeni', label: 'Vedení a krizový tým' },
  { id: 'provozni', label: 'Provozní zaměstnanci' },
  { id: 'prevence', label: 'Prevence a poradenství' },
  { id: 'zaci', label: 'Žáci' },
  { id: 'jine-instituce', label: 'Jiné instituce' },
];
