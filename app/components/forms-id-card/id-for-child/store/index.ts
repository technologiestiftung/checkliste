import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IDForChildStore {
	isIdforChild: boolean | null;
	areCustodiansPresent: boolean | null;
	areCustodiansMarried: boolean | null;

	setisIdforChild: (isIdforChild: boolean) => void;
	setAreCustodiansPresent: (areCustodiansPresent: boolean) => void;
	setAreCustodiansMarried: (areCustodiansMarried: boolean) => void;
}

export const useIDForChildStore = create<IDForChildStore>()(
	persist(
		(set) => ({
			isIdforChild: null,
			setisIdforChild(isIdforChild) {
				set({
					isIdforChild,
					areCustodiansPresent: null,
					areCustodiansMarried: null,
				});
			},

			areCustodiansPresent: null,
			setAreCustodiansPresent(areCustodiansPresent) {
				set({
					areCustodiansPresent,
					areCustodiansMarried: null,
				});
			},

			areCustodiansMarried: null,
			setAreCustodiansMarried(areCustodiansMarried) {
				set({
					areCustodiansMarried,
				});
			},
		}),
		{
			name: "id-for-child",
		},
	),
);
