import { create } from "zustand";
import { persist } from "zustand/middleware";
import { useFirstRegistrationStore } from "../../first-registration/store";
import { useNationalityStore } from "../../nationality/store";

interface OverviewDocs {
	registrationForm: boolean | null;
	movingInConfirmation: boolean | null;
	birthCertificate: boolean | null;
	marriageCertificate: boolean | null;
	idDocumentForSpouse: boolean | null;
	childBirthCertificate: boolean | null;
	custodyDeclaration: boolean | null;
	idDocumentForChild: boolean | null;
	guardianConsent: boolean | null;
	additionalRegistrationForm: boolean | null;
	germanIdOrPassportOrChildPassport: boolean | null;
	germanIdOrPassport: boolean | null;
	confirmationOfCustodian: boolean | null;
	euIdOrPassportOrReplacement: boolean | null;
	nonEuIdOrPassportOrReplacement: boolean | null;
	supplement: boolean | null;
}

interface OverviewStore {
	docs: OverviewDocs;
	setDocs: (docs: Partial<OverviewDocs>) => void;
	requiredDocs: OverviewDocs;
	setRequiredDocs: () => void;
}

export const useOverviewStore = create<OverviewStore>()(
	persist(
		(set, get) => ({
			docs: {
				registrationForm: false,
				movingInConfirmation: false,
				birthCertificate: null,
				marriageCertificate: null,
				idDocumentForSpouse: null,
				childBirthCertificate: null,
				custodyDeclaration: null,
				idDocumentForChild: null,
				guardianConsent: null,
				additionalRegistrationForm: null,
				germanIdOrPassportOrChildPassport: null,
				germanIdOrPassport: null,
				confirmationOfCustodian: null,
				euIdOrPassportOrReplacement: null,
				nonEuIdOrPassportOrReplacement: null,
				supplement: null,
			},

			requiredDocs: {
				registrationForm: false,
				movingInConfirmation: false,

				// First Registration
				birthCertificate:
					useFirstRegistrationStore.getState().isFirstRegistration,
				marriageCertificate: useFirstRegistrationStore.getState().isMarried,
				idDocumentForSpouse:
					!useFirstRegistrationStore.getState().isRegisteringSpouse,
				childBirthCertificate: useFirstRegistrationStore.getState().hasChild,
				custodyDeclaration: useFirstRegistrationStore.getState().hasChild,
				idDocumentForChild:
					useFirstRegistrationStore.getState().isRegisteringChild,
				guardianConsent:
					useFirstRegistrationStore.getState().isRegisteringChild,
				additionalRegistrationForm:
					useFirstRegistrationStore.getState().isRegisteringMoreThanTwo,

				// Nationality
				germanIdOrPassportOrChildPassport:
					!useNationalityStore.getState().isGermanOver16 &&
					useNationalityStore.getState().isGermanOver16,
				germanIdOrPassport: useNationalityStore.getState().isGermanOver16,
				confirmationOfCustodian:
					!useNationalityStore.getState().isGermanOver16 &&
					!useNationalityStore.getState().isNonGermanOver16,
				euIdOrPassportOrReplacement: useNationalityStore.getState().isEuropean,
				nonEuIdOrPassportOrReplacement:
					!useNationalityStore.getState().isEuropean,
				supplement: false,
			},

			setRequiredDocs() {
				// if requiredDocs entry is null don't change docs
				// if requiredDocs entry is true don't change docs
				// if requiredDocs entry is false set docs to false
				const newDocs = { ...get().docs };
				const requiredDocs = get().requiredDocs;

				for (const key in requiredDocs) {
					const typedKey = key as keyof OverviewDocs;
					if (requiredDocs[typedKey] === null) {
						continue;
					}

					if (requiredDocs[typedKey] === true) {
						newDocs[typedKey] = null;
						continue;
					}

					newDocs[typedKey] = false;
				}

				get().setDocs(newDocs);
			},

			setDocs(docs: Partial<OverviewDocs>) {
				set({ docs: { ...get().docs, ...docs } });
			},
		}),

		{
			name: "overview",
		},
	),
);
