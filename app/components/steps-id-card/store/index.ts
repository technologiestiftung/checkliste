import { create } from "zustand";
import { reverseSteps, steps, stepSectionMapping } from "./steps.ts";
import {
	handleAreCustodiansPresentNextStep,
	handleHasNameChangedNextStep,
	handleisIdforChildNextStep,
	handleIsPreviousIDExistingNextStep,
	handleIsRegisteredInBerlinNextStep,
} from "./next-steps.ts";
import {
	handleIsVisitingBerlinPreviousStep,
	handleIsFirstGermanIDPreviousStep,
	handleisIdforChildPreviousStep,
	handleIsPreviousIDExistingPreviousStep,
	handleOverviewPreviousStep,
} from "./previous-steps.ts";
import { trackInteraction } from "../../feedback/matomo.ts";
import { persist } from "zustand/middleware";
import { useOverviewStore } from "~/components/forms-id-card/overview/store/index.ts";
import { getLanguage } from "~/i18n/i18n-utils.ts";

function trackStepChange(previousStep: number, currentStep: number) {
	const language = getLanguage;
	const previousStepKey = reverseSteps[previousStep];
	const currentStepKey = reverseSteps[currentStep];

	trackInteraction({
		eventAction: "step-change",
		eventName: `step change: ${previousStep} (${previousStepKey}) -> ${currentStep} (${currentStepKey}), language: ${language} `,
	});
}

interface Steps {
	isRegisteredInBerlin: number;
	isVisitingBerlin: number;

	isIdforChild: number;
	areCustodiansPresent: number;
	areCustodiansMarried: number;

	isPreviousIDExisting: number;
	hasNameChanged: number;

	isFirstGermanID: number;

	overview: number;
}

type StepsKeys = keyof Steps;

interface ProgressStore {
	currentStep: number;
	maxSteps: number;
	maxSections: number;
	currentSection: number;
	setCurrentStep: (currentStep: number) => void;
	goTo: (step: StepsKeys) => void;
	goToNextStep: () => void;
	goToPreviousStep: () => void;
	goToStart: () => void;
}

export const useProgressStore = create<ProgressStore>()(
	persist(
		(set, get) => ({
			currentStep: 0,
			maxSteps: 8,
			maxSections: 4,
			currentSection: 1,

			setCurrentStep(currentStep: number) {
				trackStepChange(get().currentStep, currentStep);

				const currentSection = stepSectionMapping[currentStep];

				set({ currentStep, currentSection });
			},

			goTo(step: StepsKeys) {
				get().setCurrentStep(steps[step]);
			},

			goToNextStep() {
				useOverviewStore.getState().setRequiredDocs();
				const canIncrement = get().currentStep < get().maxSteps;
				if (!canIncrement) {
					return;
				}

				switch (get().currentStep) {
					case 0:
						handleIsRegisteredInBerlinNextStep();
						return;
					case 2:
						handleisIdforChildNextStep();
						return;
					case 3:
						handleAreCustodiansPresentNextStep();
						return;
					case 5:
						handleIsPreviousIDExistingNextStep();
						return;
					case 6:
						handleHasNameChangedNextStep();
						return;
					default:
						get().setCurrentStep(get().currentStep + 1);
						return;
				}
			},

			goToPreviousStep() {
				const canDecrement = get().currentStep > 0;
				if (!canDecrement) {
					return;
				}

				switch (get().currentStep) {
					case 1:
						handleIsVisitingBerlinPreviousStep();
						return;
					case 2:
						handleisIdforChildPreviousStep();
						return;
					case 5:
						handleIsPreviousIDExistingPreviousStep();
						return;
					case 7:
						handleIsFirstGermanIDPreviousStep();
						return;
					case 8:
						handleOverviewPreviousStep();
						return;

					default:
						get().setCurrentStep(get().currentStep - 1);
						return;
				}
			},

			goToStart() {
				get().setCurrentStep(0);
			},
		}),

		{
			name: "progress-id-card",
		},
	),
);
