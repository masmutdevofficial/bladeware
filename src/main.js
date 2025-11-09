import { createApp } from "vue";
import { createHead } from "@vueuse/head";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import { createI18n } from "vue-i18n";
import { createPinia } from "pinia";
import globalMixin from "./mixins/globalMixin";

import en from "./locales/en.json";
import id from "./locales/id.json";
import fr from "./locales/fr.json"; // Tambahkan bahasa Perancis

const savedLanguage = localStorage.getItem("preferredLanguage") || "en";

const i18n = createI18n({
  legacy: false, // Gunakan Composition API untuk i18n
  locale: savedLanguage, // Ambil bahasa dari localStorage
  fallbackLocale: "en", // Jika tidak ada, fallback ke "en"
  messages: { en, id, fr }, // Tambahkan "fr"
});

const app = createApp(App);
const head = createHead({
  title: "Bladeware Tech", // Ganti dengan title default
  meta: [
    {
      name: "description",
      content:
        "Bladeware Tech - More than Just dexchange Platform. Experience seamless trading and secure asset management",
    },
    { name: "keywords", content: "Bladeware Tech" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Bladeware Tech" },
    {
      name: "twitter:description",
      content:
        "Bladeware Tech - More than Just dexchange Platform. Experience seamless trading and secure asset management",
    },
    {
      name: "twitter:image",
      content:
        "#https://bladeware.masmutdevofficial.workers.dev/logo.png",
    },
    { name: "twitter:site", content: "https://bladeware.masmutdevofficial.workers.dev" },
    { property: "og:title", content: "Bladeware Tech" },
    {
      property: "og:description",
      content:
        "Bladeware Tech - More than Just dexchange Platform. Experience seamless trading and secure asset management",
    },
    {
      property: "og:image",
      content:
        "https://bladeware.masmutdevofficial.workers.dev/logo.png",
    },
    { property: "og:url", content: "https://bladeware.masmutdevofficial.workers.dev" },
    { property: "og:type", content: "website" },
  ],
  link: [
    { rel: "canonical", href: "https://bladeware.masmutdevofficial.workers.dev" }, // Ganti dengan URL default
    {
      rel: "icon",
      type: "image/png",
      href: "https://bladeware.masmutdevofficial.workers.dev/logo.png",
    }, // Favicon
  ],
});

const pinia = createPinia();

app.use(pinia);
app.use(router);
app.use(head);
app.use(i18n);
app.mixin(globalMixin);
app.mount("#app");
