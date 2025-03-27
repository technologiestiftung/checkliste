import { Overview } from "../forms-certificate-of-conduct/overview/index.tsx";
import { useProgressStore } from "./store";
import {
	Is14OrOlder,
	IsRegisteredInBerlin,
	IsTemporaryStay,
} from "../forms-certificate-of-conduct/applicant-details";
import {
	IsCertificateOfConductForSelf,
	IsApplicationAsLegalRepresentation,
	IsExtendedCertificateOfConduct,
	IsOfficialCertificateOfConduct,
} from "../forms-certificate-of-conduct/certificate-of-conduct-details";

export function Steps() {
	const { currentStep } = useProgressStore();

	const steps = [
		<Is14OrOlder />,
		<IsRegisteredInBerlin />,
		<IsTemporaryStay />,
		<IsCertificateOfConductForSelf />,
		<IsApplicationAsLegalRepresentation />,
		<IsExtendedCertificateOfConduct />,
		<IsOfficialCertificateOfConduct />,
		<Overview />,
	];

	return (
		<div
			className={`flex h-full flex-col gap-4 lg:text-lg w-full ${
				currentStep < 9 && "pt-4 lg:pt-12"
			}`}
		>
			{steps[currentStep]}
		</div>
	);
}
