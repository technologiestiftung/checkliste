import { useI18nStore } from "../store";

export function useI18n() {
	const { language, translations } = useI18nStore();

	return (key: string) => translations[language]?.[key] || "";
}
