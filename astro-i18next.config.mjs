import { locales } from './src/shared/lib/i18n';

const config = {
  defaultLanguage: 'ru',
  supportedLanguages: ['ru'],
  i18next: {
    debug: true,
    resources: {
      ru: {
        translation: locales.ru,
      },
    },
  },
};

export default config;
