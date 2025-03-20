import { Link, useLocation } from "react-router";
import { useEffect, useState } from "react";
import { type Language } from "./types.ts";
import { setDocumentDirection } from "../../i18n/i18n-utils";

type LanguageAnchorProps = {
	language: Language;
};

export function LanguageAnchor({ language }: LanguageAnchorProps) {
	const location = useLocation();
	const [href, setHref] = useState("");

	useEffect(() => {
		setHref(
			getHref({
				currentHref: location.pathname,
				targetLanguage: language,
			}),
		);
	}, [language, location]);

	// Handle click to set document direction when language changes
	const handleClick = () => {
		setDocumentDirection(language.code);
	};

	return (
		<Link
			className="flex w-full text-left pt-3 pb-1 items-center"
			to={href}
			onClick={handleClick}
		>
			<span className="text-base lg:text-2xl hover:underline">
				{language.label}
			</span>
		</Link>
	);
}

function getHref({
	currentHref,
	targetLanguage,
}: {
	currentHref: string;
	targetLanguage: { code: string; label: string };
}) {
	// Remove any existing language prefix
	const cleanHref = removeLanguagePrefix(currentHref);

	// If it's the default language (German), return clean URL
	const isDefaultLanguage = targetLanguage.code === "de";
	if (isDefaultLanguage) {
		return cleanHref;
	}

	// Otherwise, add the language prefix to the clean URL
	return `/${targetLanguage.code}${cleanHref}`;
}

function removeLanguagePrefix(currentHref: string) {
	return currentHref.replace(/^\/[a-zA-Z]{2}\//, "/");
}
