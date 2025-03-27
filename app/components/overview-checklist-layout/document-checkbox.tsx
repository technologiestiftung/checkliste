import { DocumentLink } from "./document-link.tsx";
import { type OverviewDocs as OverviewDocsIDCard } from "../forms-id-card/overview/store/index.ts";
import { type OverviewDocs as OverviewDocsResidenceRegistration } from "../forms-residence-registration/overview/store/index.ts";
import { type OverviewDocs as OverviewDocsCertificateOfConduct } from "../forms-certificate-of-conduct/overview/store/index.ts";
import { i18n, getLanguage } from "~/i18n/i18n-utils";
import { trackInteraction } from "../feedback/matomo.ts";
import type { ChangeEvent } from "react";
import { translations } from "~/i18n/translations.ts";

interface DocumentCheckboxProps {
	id: string;
	value: boolean | null;
	filteredDocs: [string, boolean][];
	setDocs: (
		docs: Partial<OverviewDocsIDCard> &
			Partial<OverviewDocsResidenceRegistration> &
			Partial<OverviewDocsCertificateOfConduct>,
	) => void;
}

export function DocumentCheckbox({
	id,
	value,
	filteredDocs,
	setDocs,
}: DocumentCheckboxProps) {
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

		if (filteredDocs.some(([, entry]) => entry === false)) {
			return;
		}
	};

	return (
		<li className="flex w-full flex-col items-center font-bold rounded-xs">
			<label
				htmlFor={id}
				className="flex w-full items-center justify-between gap-2 lg:gap-16"
			>
				<div className="rounded-sm px-2 lg:px-8.5 py-5 w-full leading-snug flex flex-row items-center justify-start gap-6 border-black border-1 shrink">
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
					<div>{i18n(id as keyof typeof translations)}</div>
				</div>
				<div className="print:hidden lg:w-[117px] flex shrink-0">
					<DocumentLink id={id} />
				</div>
			</label>
		</li>
	);
}
