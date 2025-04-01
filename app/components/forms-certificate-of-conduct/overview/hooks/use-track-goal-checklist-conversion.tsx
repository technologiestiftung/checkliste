import { useEffect } from "react";
import { trackInteraction } from "../../../feedback/matomo.ts";
import { getLanguage } from "~/i18n/i18n-utils.ts";

export function useTrackGoalChecklistConversion() {
	const language = getLanguage();

	useEffect(() => {
		if (
			sessionStorage.getItem(
				"has-seen-intro-page-view-certificate-of-conduct",
			) !== "true"
		) {
			return;
		}

		trackInteraction({
			eventAction: "page-view",
			eventName: `conversion-intro-checklist-certificate-of-conduct (language: ${language})`,
		});
	}, []);
}
