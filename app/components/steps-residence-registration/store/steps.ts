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

export const steps: Steps = {
	isFirstRegistration: 0,
	isMarried: 1,
	isRegisteringSpouse: 2,
	hasChild: 3,
	isRegisteringChild: 4,
	isRegisteringMoreThanTwo: 5,
	isGerman: 6,
	isGermanUnder16: 7,
	isEuropean: 8,
	isEuropeanUnder16: 9,
	isRefugee: 10,
	hasOtherResidence: 11,
	isOtherResidenceAbroad: 12,
	isRegisteringForMoreThanThreeMonths: 13,
	isRegisteringForMoreThanSixMonths: 14,
	overview: 15,
};

export const reverseSteps: StepsKeys[] = [
	"isFirstRegistration",
	"isMarried",
	"isRegisteringSpouse",
	"hasChild",
	"isRegisteringChild",
	"isRegisteringMoreThanTwo",
	"isGerman",
	"isGermanUnder16",
	"isEuropean",
	"isEuropeanUnder16",
	"isRefugee",
	"hasOtherResidence",
	"isOtherResidenceAbroad",
	"isRegisteringForMoreThanThreeMonths",
	"isRegisteringForMoreThanSixMonths",
	"overview",
];

/**
 * The keys represent the step number,
 * the values represent the section number.
 * 0 (isFirstRegistration): section 1
 * 1 (isMarried): section 2
 * 2 (isRegisteringSpouse): section 2
 * 3 (hasChild): section 3
 * 4 (isRegisteringChild): section 3
 * 5 (isRegisteringMoreThanTwo): section 3
 * 6 (isGerman): section 4
 * 7 (isGermanUnder16): section 4
 * 8 (isEuropean): section 4
 * 9 (isEuropeanUnder16): section 4
 * 10 (isRefugee): section 4
 * 11 (hasOtherResidence): section 5
 * 12 (isOtherResidenceAbroad): section 5
 * 13 (isRegisteringForMoreThanThreeMonths): section 5
 * 14 (isRegisteringForMoreThanSixMonths): section 5
 * 15 (overview): section 0
 */
export const stepSectionMapping: Record<number, number> = {
	0: 1,
	1: 2,
	2: 2,
	3: 3,
	4: 3,
	5: 3,
	6: 4,
	7: 4,
	8: 4,
	9: 4,
	10: 4,
	11: 5,
	12: 5,
	13: 5,
	14: 5,
	15: 0,
};
