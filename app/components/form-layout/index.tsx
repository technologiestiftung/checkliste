import { Link } from "react-router";
import { buildLocalizedLink, i18n } from "~/i18n/i18n-utils";
import { useProgressStore } from "../steps-residence-registration/store";
import { useDialogStore } from "~/components/feedback-dialog/store/dialog";

export function FormLayout({ children }: { children: React.ReactNode }) {
	const { currentStep, goToPreviousStep } = useProgressStore();
	const { setHasCompletedAFlow } = useDialogStore();

	const isLastStep = currentStep === 15;

	return (
		<div className="flex items-end w-full h-[calc(100dvh-44px)] lg:h-full bg-gray-200 relative">
			<Link
				className="absolute lg:hidden top-0 w-full h-7 cursor-default"
				to={buildLocalizedLink("/") as string}
				onClick={() => setHasCompletedAFlow(true)}
				tabIndex={-1}
			/>

			<div className="h-[calc(100dvh-70px)] bg-white flex w-full flex-col items-center justify-between animate-slide-up lg:animate-none rounded-t-[20px] lg:rounded-t-none">
				<main className="flex h-full w-full flex-col">
					<div className="hidden lg:flex w-full print:hidden">
						<Link
							className="text-2xl text-berlin-blue-900 hover:underline font-bold px-4 py-5"
							to={buildLocalizedLink("/") as string}
							onClick={() => setHasCompletedAFlow(true)}
						>
							{i18n("navigation.startpage")}
						</Link>
					</div>
					<div className="flex lg:hidden items-center justify-between px-4.5 print:hidden">
						<button
							className={`text-base lg:text-2xl font-bold p-2.5 pt-5 ${
								currentStep === 0
									? "opacity-0"
									: "text-berlin-blue-900 hover:underline"
							}`}
							onClick={goToPreviousStep}
							type="button"
							aria-label={i18n("button.back")}
							disabled={currentStep === 0}
						>
							{i18n("button.back")}
						</button>
						<Link
							className="text-base lg:text-2xl text-berlin-blue-900 hover:underline font-bold p-2.5 pt-5"
							to={buildLocalizedLink("/")}
							onClick={() => setHasCompletedAFlow(true)}
						>
							{isLastStep ? i18n("button.finish") : i18n("button.cancel")}
						</Link>
					</div>
					<span className="w-full border-t-1 border-berlin-gray-200" />
					{children}
				</main>
			</div>
		</div>
	);
}
