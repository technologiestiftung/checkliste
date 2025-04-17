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

export const steps: Steps = {
	isRegisteredInBerlin: 0,
	isVisitingBerlin: 1,

	isIdforChild: 2,
	areCustodiansPresent: 3,
	areCustodiansMarried: 4,

	isPreviousIDExisting: 5,
	hasNameChanged: 6,
	isFirstGermanID: 7,

	overview: 8,
};

export const reverseSteps: StepsKeys[] = [
	"isRegisteredInBerlin",
	"isVisitingBerlin",
	"isIdforChild",
	"areCustodiansPresent",
	"areCustodiansMarried",
	"isPreviousIDExisting",
	"hasNameChanged",
	"isFirstGermanID",
	"overview",
];

/**
 * The keys represent the step number,
 * the values represent the section number.
 * 0 (isRegisteredInBerlin): section 1
 * 1 (isVisitingBerlin): section 1
 * 2 (isIdforChild): section 2
 * 3 (areCustodiansPresent): section 2
 * 4 (areCustodiansMarried): section 2
 * 5 (isPreviousIDExisting): section 3
 * 6 (hasNameChanged): section 3
 * 7 (isFirstGermanID): section 4
 * 8 (overview): section 0
 */
export const stepSectionMapping: Record<number, number> = {
	0: 1,
	1: 1,
	2: 2,
	3: 2,
	4: 2,
	5: 3,
	6: 3,
	7: 4,
	8: 0,
};
