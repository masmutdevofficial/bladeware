import { defineStore } from "pinia";

export const useAppSettingsStore = defineStore("appSettings", {
  state: () => ({
    language: localStorage.getItem("preferredLanguage") || "en",
  }),
  actions: {
    setLanguage(newLanguage, updateLocale) {
      this.language = newLanguage;
      updateLocale(newLanguage); // Perbarui locale di i18n
      localStorage.setItem("preferredLanguage", newLanguage);
    },
  },
});
