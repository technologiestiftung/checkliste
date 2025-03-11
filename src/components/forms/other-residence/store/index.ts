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

	isSupplementNeeded: boolean | null;
	setIsSupplementNeeded: (isSupplementNeeded: boolean) => void;
}

export const useOtherResidenceStore = create<OtherResidenceStore>()(
	persist(
		(set, get) => ({
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

			isSupplementNeeded: null,
			setIsSupplementNeeded(isSupplementNeeded) {
				set({
					isSupplementNeeded,
				});
			},

			isRegisteringForMoreThanThreeMonths: null,

			setIsRegisteringForMoreThanThreeMonths(
				isRegisteringForMoreThanThreeMonths,
			) {
				set({
					isRegisteringForMoreThanThreeMonths,
				});
				const isSupplementNeededThreeMonths =
					get().isOtherResidenceAbroad === true &&
					isRegisteringForMoreThanThreeMonths === true;

				get().setIsSupplementNeeded(isSupplementNeededThreeMonths);
			},

			isRegisteringForMoreThanSixMonths: null,

			setIsRegisteringForMoreThanSixMonths: (
				isRegisteringForMoreThanSixMonths,
			) => {
				set({
					isRegisteringForMoreThanSixMonths,
				});
				const isSupplementNeededSixMonths =
					get().isOtherResidenceAbroad === false &&
					isRegisteringForMoreThanSixMonths === true;

				get().setIsSupplementNeeded(isSupplementNeededSixMonths);
			},
		}),
		{
			name: "other-residences",
		},
	),
);
