import { addMessages, init, getLocaleFromNavigator, locale } from 'svelte-i18n';

import en from './locales/en.json';
import fr from './locales/fr.json';

addMessages('en', en);
addMessages('fr', fr);

function getInitialLocale(): string {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('locale');
    if (stored && ['en', 'fr'].includes(stored)) {
      return stored;
    }
  }
  
  const navigatorLocale = getLocaleFromNavigator();
  if (navigatorLocale?.startsWith('fr')) {
    return 'fr';
  }
  
  return 'en';
}

init({
  fallbackLocale: 'en',
  initialLocale: getInitialLocale(),
});

if (typeof window !== 'undefined') {
  locale.subscribe((value) => {
    if (value) {
      localStorage.setItem('locale', value);
    }
  });
}
