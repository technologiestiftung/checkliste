import { create } from "zustand";
import { persist } from "zustand/middleware";

interface RegisteredInBerlinStore {
	isRegisteredInBerlin: boolean | null;
	isVisitingBerlin: boolean | null;

	setIsRegisteredInBerlin: (isRegisteredInBerlin: boolean) => void;
	setIsVisitingBerlin: (isVisitingBerlin: boolean) => void;
}

export const useRegisteredInBerlinStore = create<RegisteredInBerlinStore>()(
	persist(
		(set) => ({
			isRegisteredInBerlin: null,
			setIsRegisteredInBerlin(isRegisteredInBerlin) {
				set({
					isRegisteredInBerlin,
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
