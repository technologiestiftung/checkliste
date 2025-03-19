import { useRef, useState } from "react";
import { LanguageAnchor } from "./language-anchor";
import { type Language } from "./types";
import { i18n, getLanguage } from "../../i18n/i18n-utils";
import { useCloseOnClickOutside } from "./hooks/use-close-on-click-outside";

export function LanguageSelect() {
	const currentLanguage = getLanguage();
	const [isOpen, setIsOpen] = useState(false);
	const languageSelectRef = useRef<HTMLDivElement>(null);

	const languages: Language[] = [
		{ code: "de", label: "Deutsch" },
		{ code: "en", label: "English" },
		{ code: "es", label: "Español" },
		{ code: "fr", label: "Français" },
		{ code: "tr", label: "Türkçe" },
		{ code: "ru", label: "Русский" },
		{ code: "ar", label: "العربية" },
	];

	useCloseOnClickOutside(languageSelectRef, setIsOpen);

	return (
		<>
			<div
				className="relative text-berlin-blue-900 z-[10]"
				ref={languageSelectRef}
			>
				<button
					className="w-[106px] flex gap-1 bg-white items-center rounded-xs border-1 border-berlin-blue-900 hover:bg-berlin-blue-400 cursor-pointer hover:text-berlin-blue-900"
					onClick={() => setIsOpen(!isOpen)}
					aria-label={i18n("language-select")}
					aria-expanded={isOpen}
					dir="ltr"
					id="language-button"
				>
					<span className="flex justify-center py-2.5 pl-2.5 text-base lg:text-2xl items-center">
						{i18n(`${currentLanguage}`)}
					</span>
					<span className="flex size-8 pr-2.5 justify-center items-center pointer-events-none">
						<img
							src="/images/chevron-up.svg"
							alt="chevron-up"
							className={`${isOpen ? "" : "rotate-180"}`}
						/>
					</span>
				</button>

				<div
					className={`${isOpen ? "block" : "hidden"} absolute top-[44px] w-[106px]
					rounded-b-xs right-0 bg-white border-b-1 border-x-1 border-berlin-blue-900
					`}
				>
					<ul className="divide-y-1 divide-berlin-blue-900 px-2.5 pb-2.5">
						{languages.map((language) => (
							<li key={language.code} onClick={() => setIsOpen(false)}>
								<LanguageAnchor language={language} />
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
}
