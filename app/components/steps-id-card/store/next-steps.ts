import { useProgressStore } from "./index.ts";
import { useRegisteredInBerlinStore } from "../../forms-id-card/registered-in-berlin/store/index.ts";
import { useIDForChildStore } from "../../forms-id-card/id-for-child/store/index.ts";
import { usePreviousIDStore } from "../../forms-id-card/previous-id/store/index.ts";

export function handleIsRegisteredInBerlinNextStep() {
	if (useRegisteredInBerlinStore.getState().isRegisteredInBerlin === true) {
		useProgressStore.getState().goTo("isIdforChild");
		return;
	}

	useProgressStore.getState().goTo("isVisitingBerlin");
}

export function handleisIdforChildNextStep() {
	if (useIDForChildStore.getState().isIdforChild === true) {
		useProgressStore.getState().goTo("areCustodiansPresent");
		return;
	}
	useProgressStore.getState().goTo("isPreviousIDExisting");
}

export function handleAreCustodiansPresentNextStep() {
	if (useIDForChildStore.getState().areCustodiansPresent === true) {
		useProgressStore.getState().goTo("isPreviousIDExisting");
		return;
	}
	useProgressStore.getState().goTo("areCustodiansMarried");
}

export function handleIsPreviousIDExistingNextStep() {
	if (usePreviousIDStore.getState().isPreviousIDExisting === true) {
		useProgressStore.getState().goTo("hasNameChanged");
		return;
	}
	useProgressStore.getState().goTo("isFirstGermanID");
}

export function handleHasNameChangedNextStep() {
	useProgressStore.getState().goTo("overview");
}
