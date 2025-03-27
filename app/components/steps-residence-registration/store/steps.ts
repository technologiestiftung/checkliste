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
