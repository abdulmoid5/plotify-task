import i18n from 'i18n-js';
import en from '../default/en.json';
import * as RNLocalize from 'react-native-localize';

i18n.fallbacks = true;
i18n.locales.no = ['en'];

const locales = RNLocalize.getLocales();

if (Array.isArray(locales)) {
  i18n.locale = locales[0].languageTag;
}

i18n.translations = {
  en,
};

export const i18nt = (key: string) => {
  if (!key) {
    return key;
  }
  return i18n.t(key);
};

export default i18n;
