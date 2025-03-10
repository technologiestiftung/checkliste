import { create } from "zustand";
import { persist } from "zustand/middleware";

interface OtherResidenceStore {
	hasOtherResidence: boolean | null;
	isOtherResidenceAbroad: boolean | null;
	isRegisteringForMoreThanThreeMonths: boolean | null;
	isRegisteringForMoreThanSixMonths: boolean | null;

	setHasOtherResidence: (hasOtherResidence: boolean) => void;
	setIsOtherResidenceAbroad: (isOtherResidenceAbroad: boolean) => void;
	setIsRegisteringForMoreThanThreeMonths: (
		isRegisteringForMoreThanThreeMonths: boolean,
	) => void;
	setIsRegisteringForMoreThanSixMonths: (
		isRegisteringForMoreThanSixMonths: boolean,
	) => void;
}

export const useOtherResidenceStore = create<OtherResidenceStore>()(
	persist(
		(set) => ({
			hasOtherResidence: null,
			setHasOtherResidence(hasOtherResidence) {
				set({
					hasOtherResidence,
					isOtherResidenceAbroad: null,
					isRegisteringForMoreThanThreeMonths: null,
					isRegisteringForMoreThanSixMonths: null,
				});
			},

			isOtherResidenceAbroad: null,
			setIsOtherResidenceAbroad(isOtherResidenceAbroad) {
				set({
					isOtherResidenceAbroad,
					isRegisteringForMoreThanThreeMonths: null,
					isRegisteringForMoreThanSixMonths: null,
				});
			},

			isRegisteringForMoreThanThreeMonths: null,

			setIsRegisteringForMoreThanThreeMonths(
				isRegisteringForMoreThanThreeMonths,
			) {
				set({
					isRegisteringForMoreThanThreeMonths,
				});
			},

			isRegisteringForMoreThanSixMonths: null,

			setIsRegisteringForMoreThanSixMonths: (
				isRegisteringForMoreThanSixMonths,
			) => {
				set({
					isRegisteringForMoreThanSixMonths,
				});
			},
		}),
		{
			name: "other-residences",
		},
	),
);
