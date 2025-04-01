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

/**
 * The keys represent the step number,
 * the values represent the section number.
 * 0 (isRegisteredInBerlin): section 1
 * 1 (isNoIDRequired): section 1
 * 2 (isVisitingBerlin): section 1
 * 3 (isIdforChild): section 2
 * 4 (areCustodiansPresent): section 2
 * 5 (areCustodiansMarried): section 2
 * 6 (isPreviousIDExisting): section 3
 * 7 (hasNameChanged): section 3
 * 8 (isFirstGermanID): section 4
 * 9 (overview): section 0
 */
export const stepSectionMapping: Record<number, number> = {
	0: 1,
	1: 1,
	2: 1,
	3: 2,
	4: 2,
	5: 2,
	6: 3,
	7: 3,
	8: 4,
	9: 0,
};
