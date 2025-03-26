import { create } from "zustand";
import { persist } from "zustand/middleware";

import { useIDForChildStore } from "../../id-for-child/store";
import { usePreviousIDStore } from "../../previous-id/store";

export interface OverviewDocs {
	idOfParents: boolean | null;
	bringChild: boolean | null;
	proofOfCustody: boolean | null;
	consentOfCustodian: boolean | null;
	copyOfID: boolean | null;
	idDocument: boolean | null;
	birthCertificateOrPartnershipCertificate: boolean | null;
	passportOrforeignID: boolean | null;
	naturalizationCertificate: boolean | null;
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
				idOfParents: null,
				bringChild: null,
				proofOfCustody: null,
				consentOfCustodian: null,
				copyOfID: null,
				idDocument: null,
				birthCertificateOrPartnershipCertificate: null,
				passportOrforeignID: null,
				naturalizationCertificate: null,
			},

			setDocs(docs: Partial<OverviewDocs>) {
				set({ docs: { ...get().docs, ...docs } });
			},

			setRequiredDocs() {
				const requiredDocs = {
					idOfParents:
						useIDForChildStore.getState().areCustodiansPresent ||
						useIDForChildStore.getState().areCustodiansMarried,
					bringChild: useIDForChildStore.getState().isIDforChild,
					proofOfCustody: !useIDForChildStore.getState().areCustodiansMarried,
					consentOfCustodian:
						!useIDForChildStore.getState().areCustodiansMarried,
					copyOfID: !useIDForChildStore.getState().areCustodiansMarried,
					idDocument: usePreviousIDStore.getState().isPreviousIDExisting,
					birthCertificateOrPartnershipCertificate:
						!usePreviousIDStore.getState().isPreviousIDExisting ||
						usePreviousIDStore.getState().hasNameChanged ||
						usePreviousIDStore.getState().isFirstGermanID,
					passportOrforeignID: usePreviousIDStore.getState().isFirstGermanID,
					naturalizationCertificate:
						usePreviousIDStore.getState().isFirstGermanID,
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
			name: "overview-id-card",
		},
	),
);
