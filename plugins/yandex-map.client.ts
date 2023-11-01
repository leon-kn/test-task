import plugin from "vue-yandex-maps";
import { defineNuxtPlugin } from "nuxt/app";

const settings = {
  apiKey: "7a0149dd-1fbd-4f0c-9b2a-3fcc13e1edef",
};

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(plugin, settings);
});
