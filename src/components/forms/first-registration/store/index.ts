import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FirstRegistrationStore {
	isFirstRegistration: boolean | null;
	isMarried: boolean | null;
	isRegisteringSpouse: boolean | null;
	hasChild: boolean | null;
	isRegisteringChild: boolean | null;
	isRegisteringMoreThanTwo: boolean | null;

	setIsFirstRegistration: (isFirstRegistration: boolean) => void;
	setIsMarried: (isMarried: boolean) => void;
	setIsRegisteringSpouse: (isRegisteringSpouse: boolean) => void;
	setHasChild: (hasChild: boolean) => void;
	setIsRegisteringChild: (isRegisteringChild: boolean) => void;
	setIsRegisteringMoreThanTwo: (isRegisteringMoreThanTwo: boolean) => void;
}

export const useFirstRegistrationStore = create<FirstRegistrationStore>()(
	persist(
		(set, get) => ({
			isFirstRegistration: null,

			setIsFirstRegistration(isFirstRegistration) {
				set({
					isFirstRegistration,
					isMarried: null,
					isRegisteringSpouse: null,
					hasChild: null,
					isRegisteringChild: null,
					isRegisteringMoreThanTwo: null,
				});
			},

			isMarried: null,
			setIsMarried(isMarried) {
				set({
					isMarried,
					isRegisteringSpouse: null,
					hasChild: null,
					isRegisteringChild: null,
					isRegisteringMoreThanTwo: null,
				});
			},

			isRegisteringSpouse: null,
			setIsRegisteringSpouse: (isRegisteringSpouse) => {
				set({
					isRegisteringSpouse: isRegisteringSpouse,
					hasChild: null,
					isRegisteringChild: null,
					isRegisteringMoreThanTwo: null,
				});
			},

			hasChild: null,
			setHasChild(hasChild) {
				set({
					hasChild,
					isRegisteringChild: null,
					isRegisteringMoreThanTwo: null,
				});
			},

			isRegisteringChild: null,
			setIsRegisteringChild: (isRegisteringChild) => {
				const needsAdditionalRegistrationForm =
					!!get().isRegisteringSpouse && isRegisteringChild;

				const isRegisteringMoreThanTwo =
					needsAdditionalRegistrationForm || null;
				set({
					isRegisteringChild,
					isRegisteringMoreThanTwo,
				});
			},

			isRegisteringMoreThanTwo: null,
			setIsRegisteringMoreThanTwo: (isRegisteringMoreThanTwo) => {
				set({
					isRegisteringMoreThanTwo,
				});
			},
		}),
		{
			name: "first-registration",
		},
	),
);
