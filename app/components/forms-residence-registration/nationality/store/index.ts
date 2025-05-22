import { create } from "zustand";
import { persist } from "zustand/middleware";

interface NationalityStore {
	isGerman: boolean | null;
	isGermanOver16: boolean | null;
	isEuropean: boolean | null;
	isNonGermanUnder16: boolean | null;
	isRefugee: boolean | null;

	setIsGerman: (isGerman: boolean) => void;
	setIsGermanOver16: (isGermanOver16: boolean) => void;
	setIsEuropean: (isEuropean: boolean) => void;
	setIsNonGermanUnder16: (isNonGermanUnder16: boolean) => void;
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
					isNonGermanUnder16: null,
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

			isNonGermanUnder16: null,
			setIsNonGermanUnder16(isNonGermanUnder16) {
				set({
					isNonGermanUnder16,
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
