import { LanguageSelect } from "~/components/language-select";
import { Navigation } from "~/components/navigation";
import { LogoBanner } from "~/components/logo-banner";
import { i18n } from "~/i18n/i18n-utils";
import { FeedbackDialog } from "~/components/feedback-dialog";
import { useDialogStore } from "~/components/feedback-dialog/store/dialog";
import { useEffect } from "react";

export const meta = () => {
	return [
		{ title: "Checkliste" },
		{
			name: "description",
			content:
				"Diese Webseite ist ein Assistent für die Anmeldung oder Ummeldung in Berlin",
		},
	];
};

export default function Index() {
	const { isOpen } = useDialogStore();

	useEffect(() => {
		const dialog = document.getElementById(
			"feedback-dialog",
		) as HTMLDialogElement;

		if (!dialog || !isOpen) {
			return;
		}

		dialog.showModal();
	}, [isOpen]);

	return (
		<>
			<div className="w-full bg-berlin-blue-900">
				<div className="flex w-full items-center justify-between lg:justify-end gap-2 lg:gap-7 px-7.5 py-2.5 lg:max-w-[974px] mx-auto lg:px-0">
					<div className="text-white font-bold text-base lg:text-2xl">
						{i18n("selectLanguage")}
					</div>
					<LanguageSelect />
				</div>
			</div>
			<div className="flex flex-col lg:max-w-[974px] mx-auto">
				<div className="w-full flex flex-col gap-4 pt-6 pb-9 lg:py-12 px-7.5 lg:px-0">
					<h1 className="font-bold text-[28px] lg:text-7xl leading-snug">
						{i18n("title")}
					</h1>
					<p className="text-base lg:text-2xl">{i18n("intro")}</p>
				</div>
				<span className="w-full border-b-1 border-b-berlin-gray-200" />
				<Navigation />
				<div className="w-full flex flex-col gap-10 pt-6 pb-9 lg:py-12 px-7.5 lg:px-0 text-base lg:text-2xl">
					<div
						className="text-base lg:text-2xl"
						dangerouslySetInnerHTML={{ __html: i18n("context") }}
					/>
					<LogoBanner />
				</div>
			</div>

			<FeedbackDialog />
		</>
	);
}
