import { Steps } from "../../components/steps";
import { Progress } from "../../components/progress";
import { useProgressStore } from "../../components/steps/store";
import { i18n } from "~/i18n/i18n-utils";

export default function Index() {
	const { currentStep } = useProgressStore();

	return (
		<>
			<div className="flex items-end w-full h-[calc(100dvh-44px)] bg-gray-200">
				<div className="h-[calc(100dvh-70px)] bg-white flex w-full flex-col items-center justify-between animate-slide-up">
					<div className="flex h-full w-full flex-col">
						<div className="w-full bg-berlin-blue-400">
							<h2 className="text-xl lg:text-4xl font-bold px-7.5 py-2.5 lg:max-w-[974px] mx-auto lg:px-0">
								{i18n("title.residence-registration")}
							</h2>
						</div>

						<main className="flex flex-col h-full justify-start px-7.5 py-10 lg:max-w-[974px] mx-auto lg:px-0 w-full">
							<div className="flex w-full print:hidden">
								<Progress />
							</div>
							<div className="flex flex-col items-start">
								<Steps />
							</div>
						</main>

						<div
							className={`w-full border-b border-b-berlin-black-40 ${
								currentStep === 0 || currentStep === 15
									? "flex"
									: "hidden md:flex"
							} `}
						/>
					</div>
				</div>
			</div>
		</>
	);
}
