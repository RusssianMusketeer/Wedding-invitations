import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import global_en from "./components/locales/en/global.json";
import global_es from "./components/locales/es/global.json";

const resources = {
	en: {
		translation: global_en,
	},
	es: {
		translation: global_es,
	},
};

i18n
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources,
		lng: "es", // React already does escaping
		fallbackLng: "en",
		interpolation: { escapeValue: false },
	});

export default i18n;
