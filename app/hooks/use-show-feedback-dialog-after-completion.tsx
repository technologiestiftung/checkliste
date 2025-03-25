import { useEffect } from "react";
import { useDialogStore } from "~/components/feedback-dialog/store/dialog";

export function useShowFeedbackDialogAfterCompletion() {
	const { hasCompletedAFlow } = useDialogStore();

	useEffect(() => {
		const dialog = document.getElementById(
			"feedback-dialog",
		) as HTMLDialogElement;

		if (!dialog || !hasCompletedAFlow) {
			return;
		}

		dialog.showModal();
	}, [hasCompletedAFlow]);
}
