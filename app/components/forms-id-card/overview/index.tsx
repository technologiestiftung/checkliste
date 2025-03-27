import { useOverviewStore } from "./store/index.ts";
import { useProgressStore } from "../../steps-id-card/store/index.ts";
import { DocumentCheckbox } from "../../overview-checklist-layout/document-checkbox.tsx";
import { useTrackGoalChecklistConversion } from "./hooks/use-track-goal-checklist-conversion.tsx";
import { OverviewChecklistLayout } from "~/components/overview-checklist-layout/index.tsx";

const storeKeys = [
	"overview-id-card",
	"id-for-child",
	"previous-id",
	"registered-in-berlin",
	"progress-id-card",
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
			showHint={true}
			storeKeys={storeKeys}
			goToStart={goToStart}
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
