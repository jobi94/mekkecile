// Central place for every fact that is specific to the operating company.
// Replace the {{TOKEN}} placeholders with real values before launch.
// Every unresolved token is also listed in the build summary.

export const site = {
  // --- Identity ---------------------------------------------------------
  companyName: '{{COMPANY_NAME}}',
  legalName: '{{LEGAL_NAME}}',
  ico: '{{ICO}}',
  dic: '{{DIC}}',

  // --- Address ------------------------------------------------------------
  addressStreet: '{{ADDRESS_STREET}}',
  addressCity: '{{ADDRESS_CITY}}',
  addressZip: '{{ADDRESS_ZIP}}',
  addressCountry: 'CZ',

  // --- Contact --------------------------------------------------------
  domain: '{{DOMAIN}}', // https, no trailing slash
  phone: '{{PHONE}}',
  email: '{{EMAIL}}',
  responseTimeDays: '{{RESPONSE_TIME}}',
  regionsServed: '{{REGIONS_SERVED}}', // e.g. "celá ČR" or a list of kraje

  // --- Form -------------------------------------------------------------
  // Wired to the included Netlify function (netlify/functions/poptavka.ts).
  // Change only if you pick a different form backend (see README).
  formEndpoint: '/.netlify/functions/poptavka',

  // --- Brand assets -------------------------------------------------------
  logoSvg: '/favicon.svg', // placeholder mark — replace with {{LOGO_SVG}}
  ogImage: '/og.png', // generated placeholder — replace with a real branded {{OG_IMAGE}} (1200x630)
  ogImageAlt: 'Školení ochrany měkkých cílů pro školy a instituce',
  socialLinks: [] as string[], // {{SOCIAL_LINKS}}

  // --- Analytics ----------------------------------------------------------
  analyticsId: '{{GA_OR_ANALYTICS_ID}}', // prefer a cookieless provider, see README
  gscToken: '{{GSC_TOKEN}}',
  seznamWmtToken: '{{SEZNAM_WMT_TOKEN}}',

  // --- Legal / registry -----------------------------------------------
  registryEntry: '{{REGISTRY_ENTRY}}', // spisová značka, if applicable

  // --- Trust flags (§4.6) --------------------------------------------
  // Flip to `true` only once the user has confirmed the underlying fact/document.
  qualifications: {
    licenceOstrahaMajetkuOsob: false,
    licenceTechnickeSluzbyOchranaMajetku: false,
    licenceMimoskolniVychova: false,
    lecturersLektor75001T: false,
    lecturersMin2YearsSecurity: false,
    experience5YearsPractice: false,
    experience5YearsRegionalEducation: false,
    cooperationIZS: false,
    coordinationPlan3YearsExperience: false,
    cooperationOzoPoOzoBozp: false,
    zbrojniPrukaz: false,
  },
  accreditationDvpp: '{{ACCREDITATION_DVPP}}', // show only if non-empty
  policeCooperationVerified: false, // only ever show a claim of Police ČR cooperation if this is true and user-confirmed
  opJakEligible: false, // show FAQ answer about OP JAK šablony only if true

  brandColor: '#FFD400',
} as const;

export type Site = typeof site;
