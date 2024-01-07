// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  // @ts-ignore
  nitro: {
    externals: {
      inline: ["uuid"],
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
        },
        {
          rel: 'stylesheet',
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap"
        },
      ]
    }
  }
});
