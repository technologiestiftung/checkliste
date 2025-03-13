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
				className="relative text-black z-[10] bg-white"
				ref={languageSelectRef}
			>
				<button
					className="flex items-center"
					onClick={() => setIsOpen(!isOpen)}
					aria-label={i18n("language-select")}
					aria-expanded={isOpen}
					dir="ltr"
					id="language-button"
				>
					<span className="flex justify-center p-2.5 items-center">
						{i18n(`${currentLanguage}`)}
					</span>
					<span className="flex size-8 justify-center items-center pointer-events-none">
						{isOpen ? "⌃" : "⌄"}
					</span>
				</button>

				<div
					className={`${isOpen ? "block" : "hidden"} absolute top-8 right-0 bg-white shadow-lg`}
				>
					<ul>
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
