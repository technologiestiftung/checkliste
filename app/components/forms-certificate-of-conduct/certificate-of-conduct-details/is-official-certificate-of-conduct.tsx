import { useCertificateOfConductDetailsStore } from "./store";
import { useProgressStore } from "../../steps-certificate-of-conduct/store";
import { RadioInput } from "../../radio-input";
import { SecondaryButton } from "../../buttons/secondary-button";
import { i18n } from "~/i18n/i18n-utils";
import { FormButtonNext } from "~/components/buttons/form-button-next";

export function IsOfficialCertificateOfConduct() {
	const options = ["yes", "no"] as const;
	const { isOfficialCertificateOfConduct, setIsOfficialCertificateOfConduct } =
		useCertificateOfConductDetailsStore();
	const { goToPreviousStep, goToNextStep } = useProgressStore();

	const isValid = isOfficialCertificateOfConduct !== null;

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
					{i18n("certificate-of-conduct-details.q4")}
				</h2>
				<div className="flex flex-col gap-1">
					{options.map((option) => {
						const name = "certificate-of-conduct-details.q4.radio";
						const label = i18n(option);
						const isChecked =
							(option === "yes" && isOfficialCertificateOfConduct === true) ||
							(option === "no" && isOfficialCertificateOfConduct === false);
						const onChange = () =>
							setIsOfficialCertificateOfConduct(option === "yes");

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
