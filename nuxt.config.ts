export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/v-focus-trap.directive.ts',
    '~/plugins/v-on-escape.directive.ts',
    '~/plugins/v-blur.directive.ts',
    '~/plugins/vuex-persist.client.ts',
    '~/plugins/cookie-universal-accessor.ts'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/localforage'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    'cookie-universal-nuxt',
    'nuxt-i18n'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en-US.ts', name: 'English' },
      { code: 'es', iso: 'es-ES', file: 'es-ES.ts', name: 'Español' },
      { code: 'pt', iso: 'pt-BR', file: 'pt-BR.ts', name: 'Português' }
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      alwaysRedirect: true
    },
    vuex: false,
    // SEO Must be Implemented inside head method of each layout
    seo: false
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    parallel: true,
    cache: true
  }
}
