import { useOverviewStore } from "./store";
import { useProgressStore } from "../../steps/store";
import { DocumentCheckbox } from "./document-checkbox.tsx";
import { SecondaryButton } from "../../buttons/secondary-button";
import { i18n } from "~/i18n/i18n-utils.ts";
import { trackInteraction } from "../../feedback/matomo.ts";
import { useTrackGoalChecklistConversion } from "./hooks/use-track-goal-checklist-conversion.tsx";
import { PrimaryButton } from "../../buttons/primary-button";

export function Overview() {
	const { docs: requiredDocs } = useOverviewStore();
	const { goToPreviousStep } = useProgressStore();

	const documents = [
		...Array.from(
			Object.entries(requiredDocs).filter(([, value]) => value !== null),
		),
	];

	useTrackGoalChecklistConversion();

	return (
		<div className="flex h-full flex-col gap-8 text-base lg:text-2xl">
			<div className="flex flex-col gap-8">
				<div className="flex flex-row items-center gap-4">
					<img
						src="/images/check.svg"
						alt="check icon"
						className="size-[55px]"
					/>
					<h2 className="flex w-full items-center justify-between gap-3 font-bold text-2xl lg:text-4xl">
						{i18n("overview.title")}
					</h2>
				</div>
				<p dangerouslySetInnerHTML={{ __html: i18n("overview.text.1") }} />
				<div className="flex flex-col gap-1">
					<h3
						className="font-bold"
						dangerouslySetInnerHTML={{ __html: i18n("overview.title.2") }}
					/>
					<p dangerouslySetInnerHTML={{ __html: i18n("overview.text.2") }} />
				</div>
			</div>
			<ul className="flex flex-col gap-3">
				{documents.map(([key, value]) => (
					<DocumentCheckbox key={key} id={key} value={value} />
				))}
			</ul>
			<div className="flex h-full w-full flex-row items-end justify-end lg:justify-between print:hidden">
				<SecondaryButton
					label={i18n("button.back")}
					onClick={goToPreviousStep}
					className="hidden lg:flex"
				/>
				<div className="relative">
					<PrimaryButton
						label={i18n("button.print")}
						onClick={() => {
							const originalTitle = document.title;
							document.title = "Dokumenten-Checkliste-Bürgeramt";
							trackInteraction({
								eventAction: "button click",
								eventName: "print document checklist",
							});
							window.print();
							document.title = originalTitle;
						}}
						type="button"
					/>
				</div>
			</div>
			<div>
				<p
					className="pt-6"
					dangerouslySetInnerHTML={{ __html: i18n("context") }}
				/>
			</div>
		</div>
	);
}
