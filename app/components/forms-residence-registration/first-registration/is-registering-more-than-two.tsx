import { useFirstRegistrationStore } from "./store";
import { useProgressStore } from "../../steps-residence-registration/store";
import { RadioInput } from "../../radio-input";
import { SecondaryButton } from "../../buttons/secondary-button";
import { i18n } from "~/i18n/i18n-utils";
import { FormButtonNext } from "~/components/buttons/form-button-next";

export function IsRegisteringMoreThanTwo() {
	const { isRegisteringMoreThanTwo, setIsRegisteringMoreThanTwo } =
		useFirstRegistrationStore();

	const { goToPreviousStep, goToNextStep } = useProgressStore();

	const options = ["yes", "no"] as const;

	const isValid = isRegisteringMoreThanTwo !== null;

	return (
		<form
			className="flex h-80 w-full flex-col gap-12 lg:h-96"
			onSubmit={(e) => {
				e.preventDefault();
				goToNextStep();
			}}
		>
			<div className="flex flex-col gap-4 lg:gap-12">
				<h2 className="text-xl font-bold lg:text-[25px]">
					{i18n("first-registration.q6")}
				</h2>
				<div className="flex flex-col gap-3 lg:gap-4">
					{options.map((option) => {
						const name = "first-registration.q6.radio";
						const label = i18n(option);
						const isChecked =
							(option === "yes" && isRegisteringMoreThanTwo === true) ||
							(option === "no" && isRegisteringMoreThanTwo === false);
						const onChange = () =>
							setIsRegisteringMoreThanTwo(option === "yes");

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
