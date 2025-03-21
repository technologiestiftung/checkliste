import { useOtherResidenceStore } from "./store/index.ts";
import { useProgressStore } from "../../steps/store";
import { RadioInput } from "../../radio-input";
import { SecondaryButton } from "../../buttons/secondary-button";
import { i18n } from "~/i18n/i18n-utils";
import { FormButtonNext } from "~/components/buttons/form-button-next";

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
					{i18n("other-residence.q4")}
				</h2>
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
					className="text-blue-700 hover:underline visited:text-purple-500"
				>
					{i18n("other-residence.q4.hint.link.label")}{" "}
				</a>
			</p>

			<div className="flex w-full flex-row-reverse items-end justify-between">
				<FormButtonNext
					isValid={isValid && isRegisteringForMoreThanSixMonths}
				/>

				<SecondaryButton
					label={i18n("button.back")}
					onClick={goToPreviousStep}
					className="hidden lg:flex"
				/>
			</div>
		</form>
	);
}
