import { Steps } from "../../components/steps-residence-registration";
import { Progress } from "../../components/progress";
import { i18n } from "~/i18n/i18n-utils";
import { FormLayout } from "~/components/form-layout";
import { useProgressStore } from "~/components/steps-residence-registration/store";

export default function Index() {
	const { currentStep, currentSection, maxSections } = useProgressStore();

	return (
		<FormLayout>
			<div className="w-full bg-berlin-blue-400">
				{currentStep !== 15 && (
					<h2 className="text-xl lg:text-4xl font-bold px-7.5 py-2.5 lg:max-w-[974px] mx-auto lg:px-0">
						{i18n("title.residence-registration")}
					</h2>
				)}
			</div>
			<div className="flex flex-col justify-start px-7.5 py-10 lg:max-w-[974px] mx-auto lg:px-0 w-full gap-3">
				<div className="flex w-full print:hidden">
					<Progress currentSection={currentSection} maxSections={maxSections} />
				</div>
				<div className="flex flex-col items-start">
					<Steps />
				</div>
			</div>
		</FormLayout>
	);
}
