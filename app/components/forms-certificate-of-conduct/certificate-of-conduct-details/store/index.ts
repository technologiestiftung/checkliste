import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CertificateOfConductDetailsStore {
	isCertificateOfConductForSelf: boolean | null;
	isApplicationAsLegalRepresentation: boolean | null;
	isExtendedCertificateOfConduct: boolean | null;
	isOfficialCertificateOfConduct: boolean | null;

	setIsCertificateOfConductForSelf: (
		isCertificateOfConductForSelf: boolean | null,
	) => void;
	setIsApplicationAsLegalRepresentation: (
		isApplicationAsLegalRepresentation: boolean | null,
	) => void;
	setIsExtendedCertificateOfConduct: (
		isExtendedCertificateOfConduct: boolean | null,
	) => void;
	setIsOfficialCertificateOfConduct: (
		isOfficialCertificateOfConduct: boolean | null,
	) => void;
}

export const useCertificateOfConductDetailsStore =
	create<CertificateOfConductDetailsStore>()(
		persist(
			(set) => ({
				isCertificateOfConductForSelf: null,
				isApplicationAsLegalRepresentation: null,
				isExtendedCertificateOfConduct: null,
				isOfficialCertificateOfConduct: null,

				setIsCertificateOfConductForSelf(isCertificateOfConductForSelf) {
					set({
						isCertificateOfConductForSelf,
						isApplicationAsLegalRepresentation: null,
						isExtendedCertificateOfConduct: null,
						isOfficialCertificateOfConduct: null,
					});
				},
				setIsApplicationAsLegalRepresentation(
					isApplicationAsLegalRepresentation,
				) {
					set({
						isApplicationAsLegalRepresentation,
						isExtendedCertificateOfConduct: null,
						isOfficialCertificateOfConduct: null,
					});
				},
				setIsExtendedCertificateOfConduct(isExtendedCertificateOfConduct) {
					set({
						isExtendedCertificateOfConduct,
						isOfficialCertificateOfConduct: null,
					});
				},
				setIsOfficialCertificateOfConduct(isOfficialCertificateOfConduct) {
					set({ isOfficialCertificateOfConduct });
				},
			}),
			{
				name: "certificate-of-conduct-details-storage",
			},
		),
	);
