interface Steps {
	is14OrOlder: number;
	isRegisteredInBerlin: number;
	isTemporaryStay: number;
	isCertificateOfConductForSelf: number;
	isApplicationAsLegalRepresentation: number;
	isExtendedCertificateOfConduct: number;
	isOfficialCertificateOfConduct: number;
	overview: number;
}

type StepsKeys = keyof Steps;

export const steps: Steps = {
	is14OrOlder: 0,
	isRegisteredInBerlin: 1,
	isTemporaryStay: 2,
	isCertificateOfConductForSelf: 3,
	isApplicationAsLegalRepresentation: 4,
	isExtendedCertificateOfConduct: 5,
	isOfficialCertificateOfConduct: 6,
	overview: 7,
};

export const reverseSteps: StepsKeys[] = [
	"is14OrOlder",
	"isRegisteredInBerlin",
	"isTemporaryStay",
	"isCertificateOfConductForSelf",
	"isApplicationAsLegalRepresentation",
	"isExtendedCertificateOfConduct",
	"isOfficialCertificateOfConduct",
	"overview",
];

/**
 * The keys represent the step number,
 * the values represent the section number.
 * 0 (is14OrOlder): section 1
 * 1 (isRegisteredInBerlin): section 2
 * 2 (isTemporaryStay): section 2
 * 3 (isCertificateOfConductForSelf): section 3
 * 4 (isApplicationAsLegalRepresentation): section 3
 * 5 (isExtendedCertificateOfConduct): section 4
 * 6 (isOfficialCertificateOfConduct): section 5
 */
export const stepSectionMapping: Record<number, number> = {
	0: 1,
	1: 2,
	2: 2,
	3: 3,
	4: 3,
	5: 4,
	6: 5,
	7: 0,
};
