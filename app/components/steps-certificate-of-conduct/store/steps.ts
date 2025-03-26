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
