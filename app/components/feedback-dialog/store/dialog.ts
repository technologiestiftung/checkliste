import { create } from "zustand";

interface DialogState {
	hasCompletedAFlow: boolean;
	setHasCompletedAFlow: (hasCompleted: boolean) => void;
}

export const useDialogStore = create<DialogState>((set) => ({
	hasCompletedAFlow: false,
	setHasCompletedAFlow: (hasCompletedAFlow) => set({ hasCompletedAFlow }),
}));
