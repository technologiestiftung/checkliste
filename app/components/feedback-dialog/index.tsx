import React, { useCallback } from "react";
import { Link } from "react-router";
import { SecondaryButton } from "../buttons/secondary-button";
import { useDialogStore } from "~/components/feedback-dialog/store/dialog";
import { i18n } from "~/i18n/i18n-utils";

export const FeedbackDialog: React.FC = () => {
	const { setHasCompletedAFlow } = useDialogStore();

	const closeDialog = () => {
		setHasCompletedAFlow(false);
		const dialog = document.getElementById(
			"feedback-dialog",
		) as HTMLDialogElement;
		dialog.close();
	};

	const onDialogClick = useCallback(
		(event: React.MouseEvent<HTMLDialogElement, MouseEvent>) => {
			const isClickOnBackground =
				event.target !== document.getElementById("feedback-dialog");

			if (isClickOnBackground) {
				return;
			}
			closeDialog();
		},
		[],
	);

	return (
		<dialog
			id="feedback-dialog"
			className="w-9/12 md:w-[450px] rounded-sm backdrop:backdrop-blur-xs items-center justify-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
			onClick={onDialogClick}
		>
			<div className="p-10 flex flex-col text-center gap-8 font-bold text-xl lg:text-2xl items-center justify-center">
				{i18n("feedback.question")}
				<div className="flex-col flex gap-2 w-40 lg:w-52 font-normal text-base lg:text-2xl">
					<Link
						to={i18n("feedback.link")}
						rel="noopener noreferrer"
						target="_blank"
						viewTransition
						className="w-full p-2.5 text-white bg-berlin-blue-900 hover:bg-berlin-blue-400 size-fit rounded-xs"
						onClick={() => closeDialog()}
					>
						{i18n("feedback.button.fillout")}
					</Link>
					<SecondaryButton
						onClick={() => closeDialog()}
						label={i18n("feedback.button.no")}
					/>
				</div>
			</div>
		</dialog>
	);
};
