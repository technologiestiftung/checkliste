import { DocumentLink } from "./document-link.tsx";
import { useOverviewStore } from "./store";
import { i18n } from "~/i18n/i18n-utils";
import { trackInteraction } from "../../feedback/matomo.ts";
import type { ChangeEvent } from "react";
import { getLanguage } from "~/i18n/i18n-utils.ts";
import { translations } from "~/i18n/translations.ts";

export function DocumentCheckbox({
	id,
	value,
}: {
	id: string;
	value: boolean | null;
}) {
	const { setDocs } = useOverviewStore();

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const currentValue = event.currentTarget.checked;
		const language = getLanguage();
		const translation =
			translations["de"][id as keyof (typeof translations)["de"]];

		const documentCheckboxState = `${currentValue ? "checked" : "unchecked"} ${translation} (lang: ${language})`;

		trackInteraction({
			eventAction: "toggle document checkbox",
			eventName: documentCheckboxState,
		});

		setDocs({ [id]: currentValue });

		if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
			return;
		}

		const docs = [
			...Array.from(
				Object.entries(useOverviewStore.getState().docs).filter(
					([, entry]) => entry !== null,
				),
			),
		];

		if (docs.some(([, entry]) => entry === false)) {
			return;
		}
	};

	return (
		<li className="flex w-full flex-col items-center gap-2 font-bold rounded-xs">
			<label
				htmlFor={id}
				className="flex w-full cursor-pointer items-center justify-between gap-8 px-4 py-2"
			>
				<div className="flex h-5 w-5">
					<input
						type="checkbox"
						className="h-5 w-5"
						id={id}
						checked={value === true}
						onChange={onChange}
					/>
				</div>
				<div className="bg-berlin-blue-400 rounded-xs px-7 py-2 w-full">
					{i18n(id as keyof typeof translations)}
					<DocumentLink id={id} />
				</div>
			</label>
		</li>
	);
}
