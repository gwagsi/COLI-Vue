import locale6010b66b from '../..\\static\\lang\\en-US.js'

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
  REDIRECT_ON_OPTIONS: {"ALL":"all","ROOT":"root","NO_PREFIX":"no prefix"},
}
export const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {"fallbackLocale":"en"},
  vueI18nLoader: false,
  locales: [{"code":"de","iso":"de-DE","name":"Deutch","file":"de-DE.js","dir":"ltr"},{"code":"en","iso":"en-US","name":"English","file":"en-US.js","dir":"ltr"},{"code":"fr","iso":"fr-FR","name":"French","file":"fr-FR.js","dir":"ltr"}],
  defaultLocale: "en",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "prefix_except_default",
  lazy: true,
  langDir: "C:\\Users\\glenn\\OneDrive\\Documents\\Projects\\COLI-Vue\\static\\lang",
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":true,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true},
  differentDomains: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  seo: false,
  normalizedLocales: [{"code":"de","iso":"de-DE","name":"Deutch","file":"de-DE.js","dir":"ltr"},{"code":"en","iso":"en-US","name":"English","file":"en-US.js","dir":"ltr"},{"code":"fr","iso":"fr-FR","name":"French","file":"fr-FR.js","dir":"ltr"}],
  localeCodes: ["de","en","fr"],
  additionalMessages: [],
}

export const localeMessages = {
  'en-US.js': () => Promise.resolve(locale6010b66b),
  'de-DE.js': () => import('../..\\static\\lang\\de-DE.js' /* webpackChunkName: "lang-de-DE.js" */),
  'fr-FR.js': () => import('../..\\static\\lang\\fr-FR.js' /* webpackChunkName: "lang-fr-FR.js" */),
}
