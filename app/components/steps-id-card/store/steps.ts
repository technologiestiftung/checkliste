interface Steps {
	isRegisteredInBerlin: number;
	isNoIDRequired: number;
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

export const steps: Steps = {
	isRegisteredInBerlin: 0,
	isNoIDRequired: 1,
	isVisitingBerlin: 2,

	isIdforChild: 3,
	areCustodiansPresent: 4,
	areCustodiansMarried: 5,

	isPreviousIDExisting: 6,
	hasNameChanged: 7,
	isFirstGermanID: 8,

	overview: 9,
};

export const reverseSteps: StepsKeys[] = [
	"isRegisteredInBerlin",
	"isNoIDRequired",
	"isVisitingBerlin",
	"isIdforChild",
	"areCustodiansPresent",
	"areCustodiansMarried",
	"isPreviousIDExisting",
	"hasNameChanged",
	"isFirstGermanID",
	"overview",
];
