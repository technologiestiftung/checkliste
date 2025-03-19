import { useOtherResidenceStore } from "./store/index.ts";
import { useProgressStore } from "../../steps/store";
import { RadioInput } from "../../radio-input";
import { SecondaryButton } from "../../buttons/secondary-button";
import { i18n } from "~/i18n/i18n-utils";
import { FormButtonNext } from "~/components/buttons/form-button-next";

export function HasOtherResidence() {
	const { hasOtherResidence, setHasOtherResidence } = useOtherResidenceStore();

	const isValid = hasOtherResidence !== null;

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
					{i18n("other-residence.q1")}
				</h2>
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
