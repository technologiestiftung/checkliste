import { useOverviewStore } from "./store/index.ts";
import { useProgressStore } from "../../steps-residence-registration/store/index.ts";
import { DocumentCheckbox } from "../../overview-checklist-layout/document-checkbox.tsx";
import { useTrackGoalChecklistConversion } from "./hooks/use-track-goal-checklist-conversion.tsx";
import { OverviewChecklistLayout } from "../../overview-checklist-layout/index.tsx";
import { i18n } from "~/i18n/i18n-utils.ts";

const storeKeys = [
	"overview-residence-registration",
	"first-registration",
	"nationality",
	"other-residences",
	"progress-residence-registration",
];

export function Overview() {
	const { docs: requiredDocs, setDocs } = useOverviewStore();
	const { goToPreviousStep, goToStart } = useProgressStore();

	const documents = [
		...Array.from(
			Object.entries(requiredDocs).filter(([, value]) => value !== null),
		),
	];

	useTrackGoalChecklistConversion();

	return (
		<OverviewChecklistLayout
			goToPreviousStep={goToPreviousStep}
			goToStart={goToStart}
			hintText={i18n("overview.forms-residence-registration.hint.text")}
			storeKeys={storeKeys}
		>
			{documents.map(([key, value]) => (
				<DocumentCheckbox
					key={key}
					id={key}
					value={value}
					filteredDocs={documents}
					setDocs={setDocs}
				/>
			))}
		</OverviewChecklistLayout>
	);
}
