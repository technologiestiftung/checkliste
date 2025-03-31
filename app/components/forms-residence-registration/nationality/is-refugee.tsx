import { RadioInput } from "../../radio-input";
import { useNationalityStore } from "./store";
import { useProgressStore } from "../../steps-residence-registration/store";
import { SecondaryButton } from "../../buttons/secondary-button";
import { i18n } from "~/i18n/i18n-utils";
import { FormButtonNext } from "~/components/buttons/form-button-next";

export function IsRefugee() {
	const { isRefugee, setIsRefugee } = useNationalityStore();
	const isValid = isRefugee !== null;

	const { goToPreviousStep, goToNextStep } = useProgressStore();

	const options = ["yes", "no"] as const;

	const showHint = isRefugee === true;

	return (
		<form
			className="flex h-80 w-full flex-col gap-12 lg:h-96"
			onSubmit={(e) => {
				e.preventDefault();
				goToNextStep();
			}}
		>
			<div className="flex flex-col gap-4 lg:gap-12">
				<h2 className="text-xl font-bold lg:text-4xl">
					{i18n("nationality.q5")}
				</h2>
				<div className="flex flex-col gap-3 lg:gap-4">
					{options.map((option) => {
						const name = "nationality.q5.radio";
						const isChecked =
							(option === "yes" && isRefugee === true) ||
							(option === "no" && isRefugee === false);
						const onChange = () => setIsRefugee(option === "yes");
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
				<FormButtonNext isValid={isValid} isEndOfProcess={showHint} />

				<SecondaryButton
					label={i18n("button.back")}
					onClick={goToPreviousStep}
					className="hidden lg:flex"
				/>
			</div>

			<div className={`${showHint ? "block" : "hidden"} text-base lg:text-2xl`}>
				<div className="font-bold">{i18n("title.hint")}</div>
				<p>
					{i18n("nationality.q5.hint")}{" "}
					<a
						href="https://service.berlin.de/standort/327539/"
						target="_blank"
						className="text-berlin-blue-900 font-bold hover:underline visited:text-purple-500"
					>
						https://service.berlin.de/standort/327539/
					</a>
				</p>
			</div>
		</form>
	);
}
