import { useOtherResidenceStore } from "./store/index.ts";
import { useProgressStore } from "../../steps/store";
import { RadioInput } from "../../radio-input";
import { InfoButton } from "../../buttons/info-button";
import { PrimaryButton } from "../../buttons/primary-button";
import { SecondaryButton } from "../../buttons/secondary-button";
import { useTimeout } from "../../../hooks/useTimeout";
import { i18n } from "~/i18n/i18n-utils";

export function HasOtherResidence() {
	const { hasOtherResidence, setHasOtherResidence } = useOtherResidenceStore();

	const isValid = hasOtherResidence !== null;

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
					<p>{i18n("other-residence.q1")}</p>
					<div
						className="tooltip text-start sm:tooltip-top ltr:tooltip-left rtl:tooltip-right"
						data-tip={i18n("other-residence.q1.tooltip")}
					>
						<InfoButton />
					</div>
				</div>
				<div className="flex flex-col gap-1">
					{options.map((option) => {
						const name = "other-residence.q1.radio";
						const isChecked =
							(option === "yes" && hasOtherResidence === true) ||
							(option === "no" && hasOtherResidence === false);
						const onChange = () => setHasOtherResidence(option === "yes");
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

			<div className="flex w-full flex-row-reverse items-end justify-between">
				<div
					className={`${
						!isValid
							? `tooltip text-start sm:tooltip-top ltr:tooltip-left rtl:tooltip-right before:w-[9rem] ${arePointerEventsDisabled ? "pointer-events-none" : ""}`
							: undefined
					}`}
					data-tip={!isValid ? i18n("button.next.tooltip") : undefined}
				>
					<PrimaryButton
						label={i18n("button.next")}
						type="submit"
						disabled={!isValid}
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
