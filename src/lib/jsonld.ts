import { site } from '../site.config';
import { courses } from '../data/courses';
import { faq } from '../data/faq';

const durationToIso: Record<string, string> = {
  '60–120 min': 'PT2H',
  'min. 3 h (4× 45 min jako DVPP)': 'PT3H',
  'min. 3 h za akci (4× 45 min jako DVPP)': 'PT3H',
  '2–4 h': 'PT4H',
  '3 h': 'PT3H',
  '90–120 min': 'PT2H',
  '45–90 min na třídu': 'PT1H30M',
  'dle rozsahu': 'PT2H',
};

export function buildJsonLd() {
  const orgId = `${site.domain}/#org`;
  const websiteId = `${site.domain}/#website`;
  const webpageId = `${site.domain}/#webpage`;

  const organization = {
    '@type': 'ProfessionalService',
    '@id': orgId,
    name: site.companyName,
    legalName: site.legalName,
    url: site.domain,
    logo: site.logoSvg ? `${site.domain}${site.logoSvg}` : undefined,
    telephone: site.phone,
    email: site.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.addressStreet,
      addressLocality: site.addressCity,
      postalCode: site.addressZip,
      addressCountry: site.addressCountry,
    },
    areaServed: site.regionsServed,
    identifier: site.ico,
    sameAs: site.socialLinks,
    knowsAbout: [
      'ochrana měkkých cílů',
      'aktivní útočník',
      'bezpečnost škol',
      'krizové řízení',
      'prevence měkkých cílů',
      'zabezpečení škol',
    ],
    ...(site.accreditationDvpp && !site.accreditationDvpp.startsWith('{{')
      ? {
          hasCredential: {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'DVPP akreditace MŠMT',
            identifier: site.accreditationDvpp,
          },
        }
      : {}),
  };

  const website = {
    '@type': 'WebSite',
    '@id': websiteId,
    url: site.domain,
    name: site.companyName,
    inLanguage: 'cs-CZ',
    publisher: { '@id': orgId },
  };

  const webpage = {
    '@type': 'WebPage',
    '@id': webpageId,
    url: `${site.domain}/`,
    name: 'Školení ochrany měkkých cílů pro školy a instituce',
    isPartOf: { '@id': websiteId },
    about: { '@id': orgId },
    inLanguage: 'cs-CZ',
  };

  const offerCatalog = {
    '@type': 'OfferCatalog',
    name: 'Programy školení a služby',
    itemListElement: courses.map((c) => ({
      '@type': 'Offer',
      name: c.name,
      itemOffered: {
        '@type': 'Course',
        name: c.name,
        description: c.promise,
        provider: { '@id': orgId },
        inLanguage: 'cs',
        hasCourseInstance: {
          '@type': 'CourseInstance',
          courseMode: 'onsite',
          courseWorkload: durationToIso[c.duration] ?? 'PT2H',
        },
      },
    })),
  };

  (organization as any).hasOfferCatalog = offerCatalog;

  const securityAnalysisService = {
    '@type': 'Service',
    '@id': `${site.domain}/#sluzba-bezpecnostni-analyza`,
    name: 'Bezpečnostní analýza a návrh opatření',
    description:
      'Prevence měkkých cílů formou bezpečnostní analýzy současného stavu a návrhu vrstvených ' +
      'opatření — pravidel a režimu, dohledu, stavebně-technické a elektronické ochrany i ' +
      'bezpečnostní dokumentace — pro školy a další instituce.',
    provider: { '@id': orgId },
    areaServed: site.regionsServed,
    serviceType: 'Bezpečnostní analýza měkkého cíle',
  };

  const faqPage = {
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [organization, website, webpage, securityAnalysisService, faqPage],
  };
}
