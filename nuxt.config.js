export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  loading: {
    height: '4px',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'The Boys with the Happy Feet Dance',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'keywords',
        content: 'happy feet book, hapy feet book, bode abifarin',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'A book by Bode Abifarin that follows two brothers, Nathan and Ethan, as they navigate their passions and life’s challenges all at the same time.',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: '' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'The Boys with the Happy Feet Dance',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://happyfeetbook.netlify.app/meta-image.png',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'A book by Bode Abifarin that follows two brothers, Nathan and Ethan, as they navigate their passions and life’s challenges all at the same time. ',
      },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:url', content: '' },
      {
        hid: 'twitter:title',
        property: 'twitter:title',
        content: 'The Boys with the Happy Feet Dance',
      },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content:
          'A book by Bode Abifarin that follows two brothers, Nathan and Ethan, as they navigate their passions and life’s challenges all at the same time. ',
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        content: 'https://happyfeetbook.netlify.app/meta-image.png',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  env: {},

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/vue-flickity', mode: 'client' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
    },
  },
  styleResources: {
    scss: [
      '~/assets/scss/core/_variables.scss',
      '~/assets/scss/mixins/_mediaqueries.scss',
    ],
  },
}
