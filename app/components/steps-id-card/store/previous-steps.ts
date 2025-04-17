import { useRegisteredInBerlinStore } from "~/components/forms-id-card/registered-in-berlin/store/index.ts";
import { useIDForChildStore } from "~/components/forms-id-card/id-for-child/store/index.ts";
import { useProgressStore } from "./index.ts";
import { usePreviousIDStore } from "~/components/forms-id-card/previous-id/store/index.ts";

export function handleIsVisitingBerlinPreviousStep() {
	useProgressStore.getState().goTo("isRegisteredInBerlin");
}

export function handleisIdforChildPreviousStep() {
	if (useRegisteredInBerlinStore.getState().isRegisteredInBerlin === true) {
		useProgressStore.getState().goTo("isRegisteredInBerlin");
		return;
	}

	useProgressStore.getState().goTo("isVisitingBerlin");
}

export function handleIsPreviousIDExistingPreviousStep() {
	if (
		useIDForChildStore.getState().isIdforChild === true &&
		useIDForChildStore.getState().areCustodiansPresent === true
	) {
		useProgressStore.getState().goTo("areCustodiansPresent");
		return;
	}

	if (
		useIDForChildStore.getState().isIdforChild === true &&
		useIDForChildStore.getState().areCustodiansPresent === false
	) {
		useProgressStore.getState().goTo("areCustodiansMarried");
		return;
	}

	useProgressStore.getState().goTo("isIdforChild");
}

export function handleIsFirstGermanIDPreviousStep() {
	useProgressStore.getState().goTo("isPreviousIDExisting");
}

export function handleOverviewPreviousStep() {
	if (usePreviousIDStore.getState().isPreviousIDExisting === true) {
		useProgressStore.getState().goTo("hasNameChanged");
		return;
	}
	useProgressStore.getState().goTo("isFirstGermanID");
}
