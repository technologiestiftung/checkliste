import { useEffect } from "react";
import { trackInteraction } from "../../../feedback/matomo.ts";
import { getLanguage } from "~/i18n/i18n-utils.ts";

export function useSaveIntroPageViewInSessionStorage() {
	const language = getLanguage();

	useEffect(() => {
		saveIntroPageViewInSessionStorage();

		trackInteraction({
			eventAction: "page-view",
			eventName: `intro-page-view (language: ${language})`,
		});
	}, []);
}

function saveIntroPageViewInSessionStorage() {
	sessionStorage.setItem("has-seen-intro-page-view", "true");
}
