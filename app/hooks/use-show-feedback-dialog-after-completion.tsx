import { useEffect } from "react";
import { useDialogStore } from "~/components/feedback-dialog/store/dialog";

export function useShowFeedbackDialogAfterCompletion() {
	const { hasUserLeftFlow } = useDialogStore();

	useEffect(() => {
		const dialog = document.getElementById(
			"feedback-dialog",
		) as HTMLDialogElement;

		if (!dialog || !hasUserLeftFlow) {
			return;
		}

		dialog.showModal();
	}, [hasUserLeftFlow]);
}
