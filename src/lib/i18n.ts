import { marked } from 'marked';

export type Lang = 'fr' | 'en';
export type I18n = { fr?: string | null; en?: string | null } | undefined | null;

/** Pick the text for `lang`, falling back to the other language. */
export function t(field: I18n, lang: Lang): string {
  if (!field) return '';
  const other: Lang = lang === 'fr' ? 'en' : 'fr';
  return (field[lang] ?? '').trim() || (field[other] ?? '').trim();
}

/** Same as t(), rendered from Markdown/HTML (the CMS rich-text field). */
export function rich(field: I18n, lang: Lang): string {
  return marked.parse(t(field, lang), { async: false }) as string;
}

/** Prefix a site-relative path with the configured base. */
export function url(path: string): string {
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

export const routes = {
  home: { fr: '/', en: '/en/' },
  news: { fr: '/nouvelles/', en: '/en/news/' },
  privacy: { fr: '/privacy/', en: '/privacy/' },
  support: { fr: '/support/', en: '/support/' },
} as const;

export function newsPath(slug: string, lang: Lang) {
  return `${routes.news[lang]}${slug}/`;
}

export function formatDate(d: Date, lang: Lang) {
  return new Intl.DateTimeFormat(lang === 'fr' ? 'fr-CA' : 'en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(d);
}

export const ui = {
  fr: {
    skip: 'Aller au contenu',
    nav: { solutions: 'Solutions', products: 'Produits', news: 'Nouvelles', clients: 'Clients', contact: 'Contact' },
    switchLang: 'English',
    switchLangCode: 'EN',
    productsTitle: 'Nos produits',
    productsIntro: 'Deux plateformes, un même objectif : faire progresser les athlètes.',
    newsTitle: 'Nouvelles',
    newsAll: 'Toutes les nouvelles',
    newsEmpty: 'Aucune nouvelle pour le moment.',
    newsBack: 'Retour aux nouvelles',
    readMore: 'Lire la suite',
    externalLink: 'Voir le lien',
    clientsTitle: 'Ils nous font confiance',
    clientsIntro: 'Les fédérations et organisations qui utilisent nos outils sur le terrain.',
    emailUs: 'Nous écrire',
    bookDemo: 'Réserver une démo',
    appStore: { small: 'Télécharger dans', big: "l'App Store" },
    categories: { partnership: 'Partenariat', product: 'Produit', event: 'Événement', company: 'Entreprise' },
    footer: { privacy: 'Confidentialité', support: 'Soutien', rights: 'Tous droits réservés.' },
    privacyNote: 'Cette politique est présentement offerte en anglais seulement.',
    eyebrow: 'Technologie sportive · Québec',
  },
  en: {
    skip: 'Skip to content',
    nav: { solutions: 'Solutions', products: 'Products', news: 'News', clients: 'Clients', contact: 'Contact' },
    switchLang: 'Français',
    switchLangCode: 'FR',
    productsTitle: 'Our products',
    productsIntro: 'Two platforms, one goal: helping athletes improve.',
    newsTitle: 'News',
    newsAll: 'All news',
    newsEmpty: 'No news yet.',
    newsBack: 'Back to news',
    readMore: 'Read more',
    externalLink: 'View link',
    clientsTitle: 'Trusted by',
    clientsIntro: 'The federations and organizations using our tools on the court.',
    emailUs: 'Email us',
    bookDemo: 'Book a demo',
    appStore: { small: 'Download on the', big: 'App Store' },
    categories: { partnership: 'Partnership', product: 'Product', event: 'Event', company: 'Company' },
    footer: { privacy: 'Privacy', support: 'Support', rights: 'All rights reserved.' },
    privacyNote: '',
    eyebrow: 'Sports technology · Québec',
  },
} as const;
