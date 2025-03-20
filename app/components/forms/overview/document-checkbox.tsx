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
	const language = getLanguage();

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const currentValue = event.currentTarget.checked;

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
		<li className="flex w-full flex-col items-center font-bold rounded-xs">
			<label
				htmlFor={id}
				className="flex w-full items-center justify-between gap-4 lg:gap-8 "
			>
				<div className="flex size-6.5">
					<input
						type="checkbox"
						className={`peer relative size-6.5 appearance-none border-2 border-black rounded-xs
							checked:after:content-[''] checked:after:w-full checked:after:h-full
							checked:after:absolute checked:after:inset-0 checked:after:bg-no-repeat checked:after:bg-center
							checked:after:bg-[url('/images/check-marker.svg')]`}
						id={id}
						checked={value === true}
						onChange={onChange}
					/>
				</div>
				<div className="bg-berlin-blue-400 rounded-xs px-5 py-2 w-full leading-snug flex flex-row items-center justify-between gap-2">
					{i18n(id as keyof typeof translations)}
					<DocumentLink id={id} />
				</div>
			</label>
		</li>
	);
}
