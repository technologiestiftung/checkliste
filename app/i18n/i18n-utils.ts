import { type AvailableTranslations, translations } from "./translations";
import { isLanguageSupported } from "./is-language-supported";
import { useLocation } from "react-router";

export function i18n(key: AvailableTranslations) {
	const language = getLanguage();

	return translations[language][key];
}

export function getLanguage() {
	const location = useLocation();
	const language = location.pathname.split("/")[1];

	if (isLanguageSupported(language)) {
		return language;
	}

	return "de";
}

/**
 * Sets the document direction based on the language.
 * Arabic uses RTL (right-to-left), all other languages use LTR (left-to-right).
 *
 * @param language - The current language code
 */
export function setDocumentDirection(language: string) {
	// Get the direction from the translation file or default to "ltr"
	const direction =
		translations[language as keyof typeof translations]?.dir || "ltr";
	document.documentElement.dir = direction;
	document.documentElement.lang = language;
}

/**
 * Utility function to build localized URLs based on the current language.
 *
 * @function
 * @param {string} path - The base path of the link (e.g., `/about/`).
 * @returns {string} - The localized URL. For German (`"de"`), it returns the base path.
 *                     For other languages, it prefixes the path with the language code (e.g., `"/en/about/"`).
 *
 * @example
 * // Example Usage
 * //if currentLanguage = "en"
 * const localizedLink = buildLocalizedLink("/about/");
 * console.log(localizedLink); // Output: "/en/about/"
 *
 * //if currentLanguage = "de"
 * const localizedLinkDE = buildLocalizedLink("/about/");
 * console.log(localizedLinkDE); // Output: "/about/"
 */
export const buildLocalizedLink = (path: string) => {
	const language = getLanguage();
	return language === "de" ? path : `/${language}${path}`;
};
