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
import { useI18nStore } from "../../../i18n/store";
import { persist } from "zustand/middleware";
import { useOverviewStore } from "~/components/forms/overview/store/index.ts";

function trackStepChange(previousStep: number, currentStep: number) {
	const previousStepKey = reverseSteps[previousStep];
	const currentStepKey = reverseSteps[currentStep];

	trackInteraction({
		eventAction: "step-change",
		eventName: `step change: ${previousStep} (${previousStepKey}) -> ${currentStep} (${currentStepKey}), language: ${useI18nStore.getState().language} `,
	});
}

interface Steps {
	intro: number;
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
			maxSteps: 16,

			setCurrentStep(currentStep: number) {
				trackStepChange(get().currentStep, currentStep);
				set({ currentStep });
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
					case 2:
						handleIsMarriedNextStep();
						return;
					case 4:
						handleHasChildNextStep();
						return;
					case 5:
						handleIsRegisteringChildNextStep();
						return;
					case 7:
						handleIsGermanNextStep();
						return;
					case 8:
						handleIsGermanUnder16NextStep();
						return;
					case 12:
						handleHasOtherResidenceNextStep();
						return;
					case 13:
						handleIsOtherResidenceAbroadNextStep();
						return;
					case 14:
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
					case 4:
						handleHasChildPreviousStep();
						return;
					case 7:
						handleIsGermanPreviousStep();
						return;
					case 9:
						handleIsEuropeanPreviousStep();
						return;
					case 12:
						handleHasOtherResidencePreviousStep();
						return;
					case 15:
						handleIsRegisteringForMoreThanSixMonthsPreviousStep();
						return;
					case 16:
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
			name: "progress",
		},
	),
);
