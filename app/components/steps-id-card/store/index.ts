import { create } from "zustand";
import { reverseSteps, steps } from "./steps.ts";
import {
	handleAreCustodiansPresentNextStep,
	handleHasNameChangedNextStep,
	handleIsIDforChildNextStep,
	handleIsNoIDRequiredNextStep,
	handleIsPreviousIDExistingNextStep,
	handleIsRegisteredInBerlinNextStep,
} from "./next-steps.ts";
import {
	handleIsVisitingBerlinPreviousStep,
	handleIsFirstGermanIDPreviousStep,
	handleIsIDforChildPreviousStep,
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
	isNoIDRequired: number;
	isVisitingBerlin: number;

	isIDforChild: number;
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
			maxSteps: 9,
			maxSections: 4,
			currentSection: 1,

			setCurrentStep(currentStep: number) {
				trackStepChange(get().currentStep, currentStep);

				let currentSection = 1;
				if (currentStep <= 2) currentSection = 1;
				else if (currentStep <= 5) currentSection = 2;
				else if (currentStep <= 7) currentSection = 3;
				else if (currentStep <= 8) currentSection = 4;
				else currentSection = 0;

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
					case 1:
						handleIsNoIDRequiredNextStep();
						return;
					case 3:
						handleIsIDforChildNextStep();
						return;
					case 4:
						handleAreCustodiansPresentNextStep();
						return;
					case 6:
						handleIsPreviousIDExistingNextStep();
						return;
					case 7:
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
					case 2:
						handleIsVisitingBerlinPreviousStep();
						return;
					case 3:
						handleIsIDforChildPreviousStep();
						return;
					case 6:
						handleIsPreviousIDExistingPreviousStep();
						return;
					case 8:
						handleIsFirstGermanIDPreviousStep();
						return;
					case 9:
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
