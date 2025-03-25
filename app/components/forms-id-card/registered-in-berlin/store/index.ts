import { create } from "zustand";
import { persist } from "zustand/middleware";

interface RegisteredInBerlinStore {
	isRegisteredInBerlin: boolean | null;
	isNoIDRequired: boolean | null;
	isVisitingBerlin: boolean | null;

	setIsRegisteredInBerlin: (isRegisteredInBerlin: boolean) => void;
	setIsNoIDRequired: (isNoIDRequired: boolean) => void;
	setIsVisitingBerlin: (isVisitingBerlin: boolean) => void;
}

export const useRegisteredInBerlinStore = create<RegisteredInBerlinStore>()(
	persist(
		(set) => ({
			isRegisteredInBerlin: null,
			setIsRegisteredInBerlin(isRegisteredInBerlin) {
				set({
					isRegisteredInBerlin,
					isNoIDRequired: null,
					isVisitingBerlin: null,
				});
			},

			isNoIDRequired: null,
			setIsNoIDRequired(isNoIDRequired) {
				set({
					isNoIDRequired,
					isVisitingBerlin: null,
				});
			},

			isVisitingBerlin: null,
			setIsVisitingBerlin(isVisitingBerlin) {
				set({
					isVisitingBerlin,
				});
			},
		}),
		{
			name: "registered-in-berlin",
		},
	),
);
