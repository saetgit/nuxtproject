// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/color-mode'  ,  '@nuxt/content'
],
   colorMode: {
    classSuffix: ''
  },
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  content: {
    highlight: {
      theme: {
        default: 'min-light',
        dark: 'min-dark'
      }
    }
  },
  css: ['~/assets/css/main.css'],

})
