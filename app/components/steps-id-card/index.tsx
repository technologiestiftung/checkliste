import { Overview } from "../forms-id-card/overview";
import { useProgressStore } from "./store";
import {
	IsNoIDRequired,
	IsRegisteredInBerlin,
	IsVisitingBerlin,
} from "../forms-id-card/registered-in-berlin";
import {
	IsIdforChild,
	AreCustodiansPresent,
	AreCustodiansMarried,
} from "../forms-id-card/id-for-child";
import {
	IsPreviousIDExisting,
	HasNameChanged,
	IsFirstGermanID,
} from "../forms-id-card/previous-id";

export function Steps() {
	const { currentStep } = useProgressStore();

	const steps = [
		<IsRegisteredInBerlin />,
		<IsNoIDRequired />,
		<IsVisitingBerlin />,
		<IsIdforChild />,
		<AreCustodiansPresent />,
		<AreCustodiansMarried />,
		<IsPreviousIDExisting />,
		<HasNameChanged />,
		<IsFirstGermanID />,
		<Overview />,
	];

	return (
		<div
			className={`flex h-full flex-col gap-4 lg:text-lg w-full ${
				currentStep < 9 && "pt-4 lg:pt-12"
			}`}
		>
			{steps[currentStep]}
		</div>
	);
}
