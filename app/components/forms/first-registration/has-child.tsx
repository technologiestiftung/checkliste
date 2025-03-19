import { RadioInput } from "../../radio-input";
import { useFirstRegistrationStore } from "./store";
import { useProgressStore } from "../../steps/store";
import { PrimaryButton } from "../../buttons/primary-button";
import { SecondaryButton } from "../../buttons/secondary-button";
import { i18n } from "~/i18n/i18n-utils";
import { Tooltip } from "~/components/tooltip";
import { useState } from "react";

export function HasChild() {
	const { hasChild, setHasChild } = useFirstRegistrationStore();

	const isValid = hasChild !== null;

	const [showTooltip, setShowTooltip] = useState(false);

	const { goToPreviousStep, goToNextStep } = useProgressStore();

	const options = ["yes", "no"] as const;

	return (
		<form
			className="flex h-80 w-full flex-col gap-12 lg:h-96"
			onSubmit={(e) => {
				e.preventDefault();
				goToNextStep();
			}}
		>
			<div className="flex flex-col gap-4">
				<h2 className="text-xl font-bold lg:text-4xl">
					{i18n("first-registration.q4")}
				</h2>

				<div className="flex flex-col gap-1">
					{options.map((option) => {
						const name = "first-registration.q4.radio";
						const label = i18n(option);
						const isChecked =
							(option === "yes" && hasChild === true) ||
							(option === "no" && hasChild === false);
						const onChange = () => setHasChild(option === "yes");

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
					className={`relative`}
					onMouseMove={() => setShowTooltip(true)}
					onMouseOut={() => setShowTooltip(false)}
				>
					<PrimaryButton
						label={i18n("button.next")}
						type="submit"
						disabled={!isValid}
					/>
					{showTooltip && !isValid && (
						<Tooltip
							content={i18n("button.next.tooltip")}
							className="min-w-[120px] lg:min-w-[130px] top-14"
						/>
					)}
				</div>

				<SecondaryButton
					label={i18n("button.back")}
					onClick={goToPreviousStep}
					className="hidden lg:flex"
				/>
			</div>
		</form>
	);
}
