import { create } from "zustand";
import { persist } from "zustand/middleware";
import { useCertificateOfConductDetailsStore } from "../../certificate-of-conduct-details/store";

export interface OverviewDocs {
	birthCertificateOfRepresantative: boolean | null;
	carerId: boolean | null;
	idOfLegalRepresantative: boolean | null;
	idDocument: boolean | null;
	writtenRequestAuthorized: boolean | null;
	nameAndAddressOfAuthority: boolean | null;
	fileNumber: boolean | null;
	purposeOfApplication: boolean | null;
	letterOrEmailFromAuthority: boolean | null;
	bankOrCreditCard: boolean | null;
}

interface OverviewStore {
	docs: OverviewDocs;
	setDocs: (docs: Partial<OverviewDocs>) => void;
	setRequiredDocs: () => void;
}

export const useOverviewStore = create<OverviewStore>()(
	persist(
		(set, get) => ({
			docs: {
				birthCertificateOfRepresantative: null,
				carerId: null,
				idOfLegalRepresantative: null,
				idDocument: null,
				writtenRequestAuthorized: null,
				nameAndAddressOfAuthority: null,
				fileNumber: null,
				purposeOfApplication: null,
				letterOrEmailFromAuthority: null,
				bankOrCreditCard: false,
			},

			setDocs(docs: Partial<OverviewDocs>) {
				set({ docs: { ...get().docs, ...docs } });
			},

			setRequiredDocs() {
				const requiredDocs = {
					birthCertificateOfRepresantative:
						useCertificateOfConductDetailsStore.getState()
							.isApplicationAsLegalRepresentation,
					carerId:
						useCertificateOfConductDetailsStore.getState()
							.isApplicationAsLegalRepresentation,
					idOfLegalRepresantative:
						useCertificateOfConductDetailsStore.getState()
							.isApplicationAsLegalRepresentation,
					idDocument: true,
					writtenRequestAuthorized:
						useCertificateOfConductDetailsStore.getState()
							.isExtendedCertificateOfConduct,
					nameAndAddressOfAuthority:
						useCertificateOfConductDetailsStore.getState()
							.isOfficialCertificateOfConduct,
					fileNumber:
						useCertificateOfConductDetailsStore.getState()
							.isOfficialCertificateOfConduct,
					purposeOfApplication:
						useCertificateOfConductDetailsStore.getState()
							.isOfficialCertificateOfConduct,
					letterOrEmailFromAuthority:
						useCertificateOfConductDetailsStore.getState()
							.isOfficialCertificateOfConduct,
					bankOrCreditCard: true,
				};

				const newDocs = { ...get().docs };
				for (const key in requiredDocs) {
					const typedKey = key as keyof OverviewDocs;
					newDocs[typedKey] = requiredDocs[typedKey] === true ? false : null;
				}
				set({ docs: newDocs });
			},
		}),

		{
			name: "overview-certificate-of-conduct",
		},
	),
);
