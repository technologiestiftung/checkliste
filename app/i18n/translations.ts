import ar from "./translations/ar";
import de from "./translations/de";
import en from "./translations/en";
import es from "./translations/es";
import fr from "./translations/fr";
import tr from "./translations/tr";
import ru from "./translations/ru";

export type AvailableLanguages = keyof typeof translations;

export type AvailableTranslations = keyof (typeof translations)["de"];

export const translations = {
	ar,
	de,
	en,
	es,
	fr,
	ru,
	tr,
};
