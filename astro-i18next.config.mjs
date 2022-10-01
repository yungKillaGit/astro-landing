const config = {
  defaultLanguage: 'ru',
  supportedLanguages: ['ru'],
  i18next: {
    debug: true,
    initImmediate: false,
    backend: {
      loadPath: './src/shared/lib/i18n/locales/{{lng}}.json',
    },
  },
  i18nextPlugins: { fsBackend: 'i18next-fs-backend' },
};

export default config;
