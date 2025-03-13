import { Steps } from "../../components/steps";
import { Progress } from "../../components/progress";
import { HomeButton } from "../../components/buttons/home-button";
import { HeaderTitle } from "../../components/header-title";
import { useProgressStore } from "../../components/steps/store";
import { Feedback } from "../../components/feedback";

export default function Index() {
	const { currentStep } = useProgressStore();

	return (
		<>
			<div className="flex items-end w-full h-[calc(100dvh-24px)] bg-gray-200">
				<div className="h-[calc(100dvh-70px)] bg-white flex w-full flex-col items-center justify-between animate-slide-up">
					<div className="flex h-full w-full flex-col">
						<div className="flex w-full md:hidden print:hidden">
							<Progress id={"mobile-progress-bar"} />
						</div>

						<header className="flex w-full items-center justify-between p-6 print:hidden">
							<HomeButton />
						</header>

						<main className="flex h-full justify-center px-6 pb-10 pt-2 print:items-start">
							<div className="flex flex-col items-start">
								<HeaderTitle />
								<Steps />
							</div>
						</main>

						<Feedback />

						<div className="hidden w-full md:flex print:hidden">
							<Progress id={"desktop-progress-bar"} />
						</div>

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
