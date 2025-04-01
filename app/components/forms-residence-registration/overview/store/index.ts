import { create } from "zustand";
import { persist } from "zustand/middleware";
import { useFirstRegistrationStore } from "../../first-registration/store";
import { useNationalityStore } from "../../nationality/store";
import { useOtherResidenceStore } from "../../other-residence/store";

export interface OverviewDocs {
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

			setDocs(docs: Partial<OverviewDocs>) {
				set({ docs: { ...get().docs, ...docs } });
			},

			setRequiredDocs() {
				const requiredDocs = {
					registrationForm: true,
					movingInConfirmation: true,
					birthCertificate:
						useFirstRegistrationStore.getState().isFirstRegistration,
					marriageCertificate: useFirstRegistrationStore.getState().isMarried,
					idDocumentForSpouse:
						useFirstRegistrationStore.getState().isRegisteringSpouse,
					childBirthCertificate: useFirstRegistrationStore.getState().hasChild,
					custodyDeclaration: useFirstRegistrationStore.getState().hasChild,
					idDocumentForChild:
						useFirstRegistrationStore.getState().isRegisteringChild,
					guardianConsent:
						useFirstRegistrationStore.getState().isRegisteringChild,
					additionalRegistrationForm:
						useFirstRegistrationStore.getState().isRegisteringMoreThanTwo,
					germanIdOrPassportOrChildPassport:
						!useNationalityStore.getState().isGermanOver16 &&
						useNationalityStore.getState().isGerman,
					germanIdOrPassport:
						useNationalityStore.getState().isGermanOver16 &&
						useNationalityStore.getState().isGerman,
					confirmationOfCustodian:
						!useNationalityStore.getState().isGermanOver16 &&
						!useNationalityStore.getState().isNonGermanOver16,
					euIdOrPassportOrReplacement:
						useNationalityStore.getState().isEuropean,
					nonEuIdOrPassportOrReplacement:
						!useNationalityStore.getState().isEuropean &&
						!useNationalityStore.getState().isGerman,
					supplement: useOtherResidenceStore.getState().isSupplementNeeded,
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
			name: "overview-residence-registration",
		},
	),
);
