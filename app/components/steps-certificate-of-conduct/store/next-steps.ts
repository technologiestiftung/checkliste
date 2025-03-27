import { useApplicantDetailsStore } from "~/components/forms-certificate-of-conduct/applicant-details/store/index.ts";
import { useProgressStore } from "./index.ts";
import { useCertificateOfConductDetailsStore } from "~/components/forms-certificate-of-conduct/certificate-of-conduct-details/store/index.ts";

export function handleIsRegisteredInBerlinNextStep() {
	if (useApplicantDetailsStore.getState().isRegisteredInBerlin === true) {
		useProgressStore.getState().goTo("isCertificateOfConductForSelf");
		return;
	}

	useProgressStore.getState().goTo("isTemporaryStay");
}

export function handleIsCertificateOfConductForSelfNextStep() {
	if (
		useCertificateOfConductDetailsStore.getState()
			.isCertificateOfConductForSelf === true
	) {
		useProgressStore.getState().goTo("isExtendedCertificateOfConduct");
		return;
	}

	useProgressStore.getState().goTo("isApplicationAsLegalRepresentation");
}
