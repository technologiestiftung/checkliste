import { useFirstRegistrationStore } from "./store";
import { useProgressStore } from "../../steps/store";
import { RadioInput } from "../../radio-input";
import { SecondaryButton } from "../../buttons/secondary-button";
import { i18n } from "~/i18n/i18n-utils";
import { FormButtonNext } from "~/components/buttons/form-button-next";

export function IsMarried() {
	const { isMarried, setIsMarried } = useFirstRegistrationStore();
	const { goToPreviousStep, goToNextStep } = useProgressStore();

	const options = ["yes", "no"] as const;

	const isValid = isMarried !== null;

	return (
		<form
			className="flex w-full flex-col gap-12"
			onSubmit={(e) => {
				e.preventDefault();
				goToNextStep();
			}}
		>
			<div className="flex flex-col gap-4">
				<h2 className="text-xl font-bold lg:text-4xl">
					{i18n("first-registration.q2")}
				</h2>
				<div className="flex flex-col gap-1">
					{options.map((option) => {
						const name = "first-registration.q2.radio";
						const label = i18n(option);
						const isChecked =
							(option === "yes" && isMarried === true) ||
							(option === "no" && isMarried === false);
						const onChange = () => setIsMarried(option === "yes");

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
				<FormButtonNext isValid={isValid} />

				<SecondaryButton
					label={i18n("button.back")}
					onClick={goToPreviousStep}
					className="hidden lg:flex"
				/>
			</div>
		</form>
	);
}
