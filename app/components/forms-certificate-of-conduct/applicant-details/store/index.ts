import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ApplicantDetailsStore {
	is14OrOlder: boolean | null;
	isRegisteredInBerlin: boolean | null;
	isTemporaryStay: boolean | null;

	setIs14OrOlder: (is14OrOlder: boolean | null) => void;
	setIsRegisteredInBerlin: (isRegisteredInBerlin: boolean | null) => void;
	setIsTemporaryStay: (isTemporaryStay: boolean | null) => void;
}

export const useApplicantDetailsStore = create<ApplicantDetailsStore>()(
	persist(
		(set) => ({
			is14OrOlder: null,
			isRegisteredInBerlin: null,
			isTemporaryStay: null,

			setIs14OrOlder: (is14OrOlder) =>
				set({ is14OrOlder, isRegisteredInBerlin: null, isTemporaryStay: null }),
			setIsRegisteredInBerlin: (isRegisteredInBerlin) => {
				set({ isRegisteredInBerlin, isTemporaryStay: null });
			},
			setIsTemporaryStay: (isTemporaryStay) => set({ isTemporaryStay }),
		}),
		{
			name: "applicant-details",
		},
	),
);
