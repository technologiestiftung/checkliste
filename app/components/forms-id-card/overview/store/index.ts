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
	newOrOldID: boolean | null;
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
				newOrOldID: null,
				birthCertificateOrPartnershipCertificate: null,
				passportOrforeignID: null,
				naturalizationCertificate: null,
			},

			setDocs(docs: Partial<OverviewDocs>) {
				set({ docs: { ...get().docs, ...docs } });
			},

			setRequiredDocs() {
				const { isIdforChild, areCustodiansPresent, areCustodiansMarried } =
					useIDForChildStore.getState();

				const { isPreviousIDExisting, hasNameChanged, isFirstGermanID } =
					usePreviousIDStore.getState();

				const requiredDocs = {
					idOfParents: areCustodiansPresent || areCustodiansMarried,
					bringChild: isIdforChild,
					proofOfCustody:
						areCustodiansMarried === false || areCustodiansPresent === false,
					consentOfCustodian:
						areCustodiansMarried === false || areCustodiansPresent === false,
					copyOfID:
						areCustodiansMarried === false || areCustodiansPresent === false,

					newOrOldID: isPreviousIDExisting,
					birthCertificateOrPartnershipCertificate:
						isPreviousIDExisting === false || hasNameChanged || isFirstGermanID,
					passportOrforeignID: isFirstGermanID,
					naturalizationCertificate: isFirstGermanID,
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
