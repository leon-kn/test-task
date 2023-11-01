export default defineNuxtConfig({
  plugins: [{ src: "~/plugins/yandex-map.client", mode: "client" }],
  modules: ["nuxt-primevue"],
  primevue: {
    options: {
      ripple: true,
    },
    components: {
      include: ["AutoComplete"],
    },
  },
  css: ["~/assets/scss/main.scss", "primevue/resources/themes/lara-light-teal/theme.css"],
});
