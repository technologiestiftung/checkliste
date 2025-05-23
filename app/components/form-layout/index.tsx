import { Link, useNavigate } from "react-router";
import { buildLocalizedLink, i18n } from "~/i18n/i18n-utils";
import { useDialogStore } from "~/components/feedback-dialog/store/dialog";

interface FormLayoutProps {
	children: React.ReactNode;
	currentStep: number;
	goToPreviousStep: () => void;
}

export function FormLayout({
	children,
	currentStep,
	goToPreviousStep,
}: FormLayoutProps) {
	const navigate = useNavigate();
	const { setHasUserLeftFlow } = useDialogStore();

	const isLastStep = currentStep === 15;
	const isFirstStep = currentStep === 0;

	const handleGoToPreviousStep = () => {
		if (currentStep === 0) {
			navigate(startPageLink);
			setHasUserLeftFlow(true);
			return;
		}
		goToPreviousStep();
	};

	const startPageLink = buildLocalizedLink("/");

	return (
		<div className="flex items-end w-full h-[calc(100dvh-44px)] lg:h-full bg-gray-200 relative">
			<Link
				className="absolute lg:hidden top-0 w-full h-7 cursor-default"
				to={startPageLink}
				onClick={() => setHasUserLeftFlow(true)}
				tabIndex={-1}
			/>

			<div className="h-[calc(100dvh-70px)] bg-white flex w-full flex-col items-center justify-between animate-slide-up lg:animate-none print:animate-none rounded-t-[20px] lg:rounded-t-none">
				<main className="flex h-full w-full flex-col">
					<div className="hidden lg:flex w-full print:hidden">
						<Link
							className="text-[20px] text-berlin-blue-900 hover:underline font-bold px-4 py-5"
							to={startPageLink}
							onClick={() => setHasUserLeftFlow(true)}
						>
							{i18n("navigation.startpage")}
						</Link>
					</div>
					<div className="flex lg:hidden items-center justify-between px-4.5 print:hidden">
						<button
							className={`text-base lg:text-[20px] font-bold p-2.5 pt-5 text-berlin-blue-900 hover:underline`}
							onClick={() => {
								handleGoToPreviousStep();
							}}
							type="button"
						>
							{isFirstStep ? i18n("navigation.startpage") : i18n("button.back")}
						</button>
						<Link
							className="text-base lg:text-[20px] text-berlin-blue-900 hover:underline font-bold p-2.5 pt-5"
							to={buildLocalizedLink("/")}
							onClick={() => setHasUserLeftFlow(true)}
						>
							{isLastStep ? i18n("button.finish") : i18n("button.cancel")}
						</Link>
					</div>
					<span className="w-full border-t-1 border-berlin-gray-200 print:hidden" />
					{children}
				</main>
			</div>
		</div>
	);
}
