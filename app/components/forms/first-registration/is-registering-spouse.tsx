import { useFirstRegistrationStore } from "./store";
import { useProgressStore } from "../../steps/store";
import { RadioInput } from "../../radio-input";
import { SecondaryButton } from "../../buttons/secondary-button";
import { PrimaryButton } from "../../buttons/primary-button";
import { InfoButton } from "../../buttons/info-button";
import { useTimeout } from "../../../hooks/useTimeout";
import { i18n } from "~/i18n/i18n-utils";

export function IsRegisteringSpouse() {
	const { isRegisteringSpouse, setIsRegisteringSpouse } =
		useFirstRegistrationStore();

	const { goToPreviousStep, goToNextStep } = useProgressStore();

	const options = ["yes", "no"] as const;

	const isValid = isRegisteringSpouse !== null;

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
					<p>{i18n("first-registration.q3")}</p>
					<div
						className="tooltip text-start sm:tooltip-top ltr:tooltip-left rtl:tooltip-right"
						data-tip={i18n("first-registration.q3.tooltip")}
					>
						<InfoButton />
					</div>
				</div>
				<div className="flex flex-col gap-1">
					{options.map((option) => {
						const name = "first-registration.q3.radio";
						const label = i18n(option);
						const isChecked =
							(option === "yes" && isRegisteringSpouse === true) ||
							(option === "no" && isRegisteringSpouse === false);
						const onChange = () => setIsRegisteringSpouse(option === "yes");

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
