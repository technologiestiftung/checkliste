import { create } from "zustand";

interface DialogState {
	hasUserLeftFlow: boolean;
	setHasUserLeftFlow: (hasCompleted: boolean) => void;
}

export const useDialogStore = create<DialogState>((set) => ({
	hasUserLeftFlow: false,
	setHasUserLeftFlow: (hasUserLeftFlow) => set({ hasUserLeftFlow }),
}));
