import { create } from "zustand";
import type { AvailableLanguages, i18nStore } from "./types.ts";
import de from "../translations/de.json" assert { type: "json" };
import { trackInteraction } from "../../components/feedback/matomo.ts";
import { persist } from "zustand/middleware";
import { availableLanguagesEnum } from "./types.ts";

export const useI18nStore = create<i18nStore>()(
	persist(
		(set, get) => ({
			language: availableLanguagesEnum.de,

			async setLanguage(language: AvailableLanguages) {
				trackInteraction({
					eventAction: "language-select interaction",
					eventName: `changed language to ${language} (from ${get().language})`,
				});

				set({ language });
				document.documentElement.lang = language;
				document.documentElement.dir =
					get().translations[language]?.dir ?? "ltr";

				if (!get().translations[language]) {
					const module = await import(`../translations/${language}.json`);

					get().setTranslations(language, module.default);
				}

				document.documentElement.dir =
					get().translations[language]?.dir ?? "ltr";
			},

			translations: {
				de,
				en: undefined,
				ar: undefined,
				es: undefined,
				fr: undefined,
				tr: undefined,
				ru: undefined,
			},
			setTranslations(
				language: AvailableLanguages,
				translations: Record<string, string>,
			) {
				set((state) => ({
					translations: { ...state.translations, [language]: translations },
				}));

				if (translations.dir) {
					document.documentElement.dir = translations.dir;
				}
			},
		}),

		{
			name: "i18n",
		},
	),
);
