import { Overview } from "../forms-id-card/overview";
import { useProgressStore } from "./store";
import {
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
		<div className="flex h-full flex-col gap-4 lg:text-lg w-full mt-4 lg:mt-12">
			{steps[currentStep]}
		</div>
	);
}
