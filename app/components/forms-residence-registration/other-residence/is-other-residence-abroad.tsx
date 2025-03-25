import { useOtherResidenceStore } from "./store/index.ts";
import { useProgressStore } from "../../steps-residence-registration/store/index.ts";
import { RadioInput } from "../../radio-input/index.tsx";
import { SecondaryButton } from "../../buttons/secondary-button/index.tsx";
import { i18n } from "~/i18n/i18n-utils";
import { FormButtonNext } from "~/components/buttons/form-button-next";

export function IsOtherResidenceAbroad() {
	const { isOtherResidenceAbroad, setIsOtherResidenceAbroad } =
		useOtherResidenceStore();

	const isValid = isOtherResidenceAbroad !== null;

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
					{i18n("other-residence.q2")}
				</h2>
				<div className="flex flex-col gap-1">
					{options.map((option) => {
						const name = "other-residence.q2.radio";
						const isChecked =
							(option === "yes" && isOtherResidenceAbroad === true) ||
							(option === "no" && isOtherResidenceAbroad === false);
						const onChange = () => setIsOtherResidenceAbroad(option === "yes");
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
