import { RadioInput } from "../../radio-input";
import { useNationalityStore } from "./store";
import { useProgressStore } from "../../steps/store";
import { SecondaryButton } from "../../buttons/secondary-button";
import { i18n } from "~/i18n/i18n-utils";
import { FormButtonNext } from "~/components/buttons/form-button-next";

export function IsEuropean() {
	const { isEuropean, setIsEuropean } = useNationalityStore();

	const isValid = isEuropean !== null;

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
					{i18n("nationality.q3")}
				</h2>
				<div className="flex flex-col gap-1">
					{options.map((option) => {
						const name = "nationality.q3.radio";
						const isChecked =
							(option === "yes" && isEuropean === true) ||
							(option === "no" && isEuropean === false);
						const onChange = () => setIsEuropean(option === "yes");
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
