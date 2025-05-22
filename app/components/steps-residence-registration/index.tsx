import { Overview } from "../forms-residence-registration/overview";
import { useProgressStore } from "./store";
import {
	IsFirstRegistration,
	HasChild,
	IsMarried,
	IsRegisteringSpouse,
	IsRegisteringChild,
	IsRegisteringMoreThanTwo,
} from "../forms-residence-registration/first-registration";
import {
	IsGerman,
	IsGermanOver16,
	IsEuropean,
	IsNonGermanUnder16,
	IsRefugee,
} from "../forms-residence-registration/nationality";
import {
	HasOtherResidence,
	IsOtherResidenceAbroad,
	IsRegisteringForMoreThanThreeMonths,
	IsRegisteringForMoreThanSixMonths,
} from "../forms-residence-registration/other-residence";

export function Steps() {
	const { currentStep } = useProgressStore();

	const steps = [
		<IsFirstRegistration />,
		<IsMarried />,
		<IsRegisteringSpouse />,
		<HasChild />,
		<IsRegisteringChild />,
		<IsRegisteringMoreThanTwo />,
		<IsGerman />,
		<IsGermanOver16 />,
		<IsEuropean />,
		<IsNonGermanUnder16 />,
		<IsRefugee />,
		<HasOtherResidence />,
		<IsOtherResidenceAbroad />,
		<IsRegisteringForMoreThanThreeMonths />,
		<IsRegisteringForMoreThanSixMonths />,
		<Overview />,
	];

	return (
		<div className="flex h-full flex-col gap-4 lg:text-lg w-full mt-4 lg:mt-12">
			{steps[currentStep]}
		</div>
	);
}
