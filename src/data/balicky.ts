export const packages = [
  {
    id: 'balicek-start',
    name: 'Start',
    text: 'Úvodní školení (A) a specializované teoretické školení (B) — jeden den, typicky v přípravném týdnu.',
  },
  {
    id: 'balicek-pripravena-skola',
    name: 'Připravená škola',
    flagship: true,
    text: 'Bezpečnostní analýza → bezpečnostní plán → koordinační plán a karta pro IZS → školení A + B, praktický nácvik C, krizový tým D → písemná vyhodnocovací zpráva.',
  },
  {
    // shares the id of the "Roční servis" checkbox in step 2, so picking this
    // package also checks that box, not just the visible service name.
    id: 'rocni-servis',
    name: 'Roční servis',
    text: 'Roční úvodní školení, nácvik koordinačního plánu, revize dokumentace po změnách, konzultační linka a připomínky doporučených frekvencí MŠMT.',
  },
  {
    id: 'balicek-pro-zrizovatele',
    name: 'Pro zřizovatele',
    text: 'Rámcová smlouva pro více škol, jednotná dokumentace a souhrnná (anonymizovaná) zpráva pro zřizovatele.',
  },
];

export const financingOptions = [
  { title: 'Vlastní rozpočet školy', text: 'Standardní objednávka služby.' },
  { title: 'Zřizovatel', text: 'Obec nebo kraj hradí školení pro jednu nebo více škol najednou.' },
  {
    title: 'Šablony OP JAK',
    text: 'Programy typu DVPP lze u řady výzev hradit z EU šablon pro školy — aktuální pravidla ověřujeme u každé zakázky.',
  },
  { title: 'Ještě nevím', text: 'Rádi navrhneme možnosti financování na úvodní konzultaci.' },
];
