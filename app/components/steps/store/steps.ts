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

export const steps: Steps = {
	intro: 0,
	isFirstRegistration: 1,
	isMarried: 2,
	isRegisteringSpouse: 3,
	hasChild: 4,
	isRegisteringChild: 5,
	isRegisteringMoreThanTwo: 6,
	isGerman: 7,
	isGermanUnder16: 8,
	isEuropean: 9,
	isEuropeanUnder16: 10,
	isRefugee: 11,
	hasOtherResidence: 12,
	isOtherResidenceAbroad: 13,
	isRegisteringForMoreThanThreeMonths: 14,
	isRegisteringForMoreThanSixMonths: 15,
	overview: 16,
};

export const reverseSteps: StepsKeys[] = [
	"intro",
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
