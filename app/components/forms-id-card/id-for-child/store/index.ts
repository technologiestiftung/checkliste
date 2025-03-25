import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IDForChildStore {
	isIDforChild: boolean | null;
	areCustodiansPresent: boolean | null;
	areCustodiansMarried: boolean | null;

	setIsIDforChild: (isIDforChild: boolean) => void;
	setAreCustodiansPresent: (areCustodiansPresent: boolean) => void;
	setAreCustodiansMarried: (areCustodiansMarried: boolean) => void;
}

export const useIDForChildStore = create<IDForChildStore>()(
	persist(
		(set) => ({
			isIDforChild: null,
			setIsIDforChild(isIDforChild) {
				set({
					isIDforChild,
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
