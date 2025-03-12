import { useI18nStore } from "../../i18n/store";
import {
	availableLanguagesEnum,
	availableLanguagesSchema,
} from "../../i18n/store/types.ts";
import { useI18n } from "../../i18n/hook/useI18n";

export function LanguageSelect() {
	const { language, setLanguage } = useI18nStore();
	const t = useI18n();

	const availableLanguages = Object.values(availableLanguagesEnum);

	return (
		<div className="grid">
			{/* DESKTOP */}
			<select
				className="col-start-1 row-start-1 hidden w-36 cursor-pointer appearance-none rounded-none border-2 border-black bg-white py-2.5 text-center text-lg hover:bg-gray-100 lg:block ltr:pl-0 ltr:pr-2 rtl:pl-2 rtl:pr-0"
				dir="ltr"
				aria-label={t("language-select")}
				onChange={(e) =>
					setLanguage(availableLanguagesSchema.parse(e.target.value))
				}
				value={language}
			>
				{availableLanguages.map((availableLanguage) => (
					<option key={availableLanguage} value={availableLanguage}>
						{t(`${availableLanguage}.desktop`)}
					</option>
				))}
			</select>

			{/* MOBILE */}
			<select
				className="col-start-1 row-start-1 block w-[5.5rem] cursor-pointer appearance-none rounded-none border-2 border-black bg-white py-2.5 text-center hover:bg-gray-100 lg:hidden ltr:pl-4 ltr:pr-2 rtl:pl-2 rtl:pr-4"
				dir="ltr"
				aria-label={t("language-select")}
				onChange={(e) =>
					setLanguage(availableLanguagesSchema.parse(e.target.value))
				}
				value={language}
			>
				{availableLanguages.map((availableLanguage) => (
					<option key={availableLanguage} value={availableLanguage}>
						{t(`${availableLanguage}.mobile`)}
					</option>
				))}
			</select>
		</div>
	);
}
