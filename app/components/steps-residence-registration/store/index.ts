import { create } from "zustand";
import { reverseSteps, steps } from "./steps.ts";
import {
	handleHasChildNextStep,
	handleHasOtherResidenceNextStep,
	handleIsGermanNextStep,
	handleIsGermanUnder16NextStep,
	handleIsMarriedNextStep,
	handleIsOtherResidenceAbroadNextStep,
	handleIsRegisteringChildNextStep,
	handleIsRegisteringForMoreThanThreeMonthsNextStep,
} from "./next-steps.ts";
import {
	handleHasChildPreviousStep,
	handleHasOtherResidencePreviousStep,
	handleIsEuropeanPreviousStep,
	handleIsGermanPreviousStep,
	handleIsRegisteringForMoreThanSixMonthsPreviousStep,
	handleOverviewPreviousStep,
} from "./previous-steps.ts";
import { trackInteraction } from "../../feedback/matomo.ts";
import { persist } from "zustand/middleware";
import { useOverviewStore } from "~/components/forms-residence-registration/overview/store/index.ts";
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
	isFirstRegistration: number;
	isMarried: number;
	isRegisteringSpouse: number;
	hasChild: number;
	isRegisteringChild: number;
	isRegisteringMoreThanTwo: number;
	isGerman: number;
	isGermanUnder16: number;
	isEuropean: number;
	isEuropeanUnder16: number;
	isRefugee: number;
	hasOtherResidence: number;
	isOtherResidenceAbroad: number;
	isRegisteringForMoreThanThreeMonths: number;
	isRegisteringForMoreThanSixMonths: number;
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
			maxSteps: 15,
			maxSections: 3,
			currentSection: 1,

			setCurrentStep(currentStep: number) {
				trackStepChange(get().currentStep, currentStep);

				let currentSection = 1;
				if (currentStep <= 5) currentSection = 1;
				else if (currentStep <= 10) currentSection = 2;
				else if (currentStep <= 14) currentSection = 3;
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
					case 1:
						handleIsMarriedNextStep();
						return;
					case 3:
						handleHasChildNextStep();
						return;
					case 4:
						handleIsRegisteringChildNextStep();
						return;
					case 6:
						handleIsGermanNextStep();
						return;
					case 7:
						handleIsGermanUnder16NextStep();
						return;
					case 11:
						handleHasOtherResidenceNextStep();
						return;
					case 12:
						handleIsOtherResidenceAbroadNextStep();
						return;
					case 13:
						handleIsRegisteringForMoreThanThreeMonthsNextStep();
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
					case 3:
						handleHasChildPreviousStep();
						return;
					case 6:
						handleIsGermanPreviousStep();
						return;
					case 8:
						handleIsEuropeanPreviousStep();
						return;
					case 11:
						handleHasOtherResidencePreviousStep();
						return;
					case 14:
						handleIsRegisteringForMoreThanSixMonthsPreviousStep();
						return;
					case 15:
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
			name: "progress-residence-registration",
		},
	),
);
