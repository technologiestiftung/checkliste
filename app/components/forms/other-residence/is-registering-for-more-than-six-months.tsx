import { useOtherResidenceStore } from "./store/index.ts";
import { useProgressStore } from "../../steps/store";
import { RadioInput } from "../../radio-input";
import { InfoButton } from "../../buttons/info-button";
import { PrimaryButton } from "../../buttons/primary-button";
import { SecondaryButton } from "../../buttons/secondary-button";
import { useTimeout } from "../../../hooks/useTimeout";
import { i18n } from "~/i18n/i18n-utils";

export function IsRegisteringForMoreThanSixMonths() {
	const {
		isRegisteringForMoreThanSixMonths,
		setIsRegisteringForMoreThanSixMonths,
	} = useOtherResidenceStore();

	const isValid = isRegisteringForMoreThanSixMonths !== null;
	const needsRegistration = isRegisteringForMoreThanSixMonths === true;
	const showHint = isValid && !needsRegistration;

	const { goToPreviousStep, goToNextStep } = useProgressStore();

	const options = ["yes", "no"] as const;

	const { isOver } = useTimeout();

	const arePointerEventsDisabled = !isOver;

	return (
		<form
			className="flex h-80 w-full flex-col gap-12 lg:h-96"
			onSubmit={(e) => {
				e.preventDefault();
				goToNextStep();
			}}
		>
			<div className="flex flex-col gap-4">
				<div className="flex w-full items-baseline justify-between gap-3">
					<p>{i18n("other-residence.q4")}</p>
					<div
						className="tooltip text-start sm:tooltip-top ltr:tooltip-left rtl:tooltip-right"
						data-tip={i18n("other-residence.q4.tooltip")}
					>
						<InfoButton />
					</div>
				</div>
				<div className="flex flex-col gap-1">
					{options.map((option) => {
						const name = "other-residence.q4.radio";
						const isChecked =
							(option === "yes" &&
								isRegisteringForMoreThanSixMonths === true) ||
							(option === "no" && isRegisteringForMoreThanSixMonths === false);
						const onChange = () =>
							setIsRegisteringForMoreThanSixMonths(option === "yes");
						const label = i18n(option);

						return (
							<RadioInput
								key={option}
								name={name}
								label={label}
								isChecked={isChecked}
								onChange={onChange}
							/>
						);
					})}
				</div>
			</div>

			<p className={`${showHint ? "block" : "hidden"}`}>
				{i18n("other-residence.q4.hint")}{" "}
				<a
					href="https://service.berlin.de/terminvereinbarung/termin/manage/"
					target="_blank"
					className="text-blue-700 underline visited:text-purple-500"
				>
					{i18n("other-residence.q4.hint.link.label")}{" "}
				</a>
			</p>

			<div className="flex w-full flex-row-reverse items-end justify-between">
				<div
					className={`${
						!isValid
							? `tooltip text-start sm:tooltip-top ltr:tooltip-left rtl:tooltip-right before:w-[9rem] ${arePointerEventsDisabled ? "pointer-events-none" : ""}`
							: undefined
					}`}
					data-tip={
						!isValid || !needsRegistration
							? i18n(
									showHint ? "other-residence.q4.hint" : "button.next.tooltip",
								)
							: undefined
					}
				>
					<PrimaryButton
						label={i18n("button.next")}
						type="submit"
						disabled={!isValid || !needsRegistration}
					/>
				</div>

				<SecondaryButton
					label={i18n("button.back")}
					onClick={goToPreviousStep}
				/>
			</div>
		</form>
	);
}
