import { create } from "zustand";
import { persist } from "zustand/middleware";

interface NationalityStore {
	isGerman: boolean | null;
	isGermanOver16: boolean | null;
	isEuropean: boolean | null;
	isNonGermanOver16: boolean | null;
	isRefugee: boolean | null;

	setIsGerman: (isGerman: boolean) => void;
	setIsGermanOver16: (isGermanOver16: boolean) => void;
	setIsEuropean: (isEuropean: boolean) => void;
	setIsNonGermanOver16: (isNonGermanOver16: boolean) => void;
	setIsRefugee: (isRefugee: boolean) => void;
}

export const useNationalityStore = create<NationalityStore>()(
	persist(
		(set) => ({
			isGerman: null,
			setIsGerman(isGerman) {
				set({
					isGerman,
					isGermanOver16: null,
					isEuropean: null,
					isRefugee: null,
					isNonGermanOver16: null,
				});
			},

			isGermanOver16: null,
			setIsGermanOver16(isGermanOver16) {
				set({
					isGermanOver16,
				});
			},

			isEuropean: null,
			setIsEuropean(isEuropean) {
				set({
					isEuropean,
				});
			},

			isNonGermanOver16: null,
			setIsNonGermanOver16(isNonGermanOver16) {
				set({
					isNonGermanOver16,
				});
			},

			isRefugee: null,
			setIsRefugee(isRefugee) {
				set({ isRefugee });
			},
		}),
		{
			name: "nationality",
		},
	),
);
