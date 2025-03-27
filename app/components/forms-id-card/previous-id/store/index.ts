import { create } from "zustand";
import { persist } from "zustand/middleware";

interface PreviousIDStore {
	isPreviousIDExisting: boolean | null;
	hasNameChanged: boolean | null;
	isFirstGermanID: boolean | null;

	setIsPreviousIDExisting: (isPreviousIDExisting: boolean) => void;
	setHasNameChanged: (hasNameChanged: boolean) => void;
	setIsFirstGermanID: (isFirstGermanID: boolean) => void;
}

export const usePreviousIDStore = create<PreviousIDStore>()(
	persist(
		(set) => ({
			isPreviousIDExisting: null,
			setIsPreviousIDExisting: (isPreviousIDExisting: boolean) => {
				set({
					isPreviousIDExisting,
					hasNameChanged: null,
					isFirstGermanID: null,
				});
			},
			hasNameChanged: null,
			setHasNameChanged: (hasNameChanged: boolean) => {
				set({ hasNameChanged, isFirstGermanID: null });
			},
			isFirstGermanID: null,
			setIsFirstGermanID: (isFirstGermanID: boolean) => {
				set({ isFirstGermanID });
			},
		}),
		{
			name: "previous-id",
		},
	),
);
