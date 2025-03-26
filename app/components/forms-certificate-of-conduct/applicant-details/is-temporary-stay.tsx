import { useApplicantDetailsStore } from "./store";
import { useProgressStore } from "../../steps-certificate-of-conduct/store";
import { RadioInput } from "../../radio-input";
import { SecondaryButton } from "../../buttons/secondary-button";
import { i18n } from "~/i18n/i18n-utils";
import { FormButtonNext } from "~/components/buttons/form-button-next";

export function IsTemporaryStay() {
	const options = ["yes", "no"] as const;
	const { isTemporaryStay, setIsTemporaryStay } = useApplicantDetailsStore();
	const { goToPreviousStep, goToNextStep } = useProgressStore();

	const isValid = isTemporaryStay !== null;

	const hintTitle = i18n("title.hint");
	const hint = i18n("applicantDetails.q3.hint");

	const showHint = isValid && !isTemporaryStay;

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
					{i18n("applicantDetails.q3")}
				</h2>
				<div className="flex flex-col gap-1">
					{options.map((option) => {
						const name = "applicantDetails.q3.radio";
						const label = i18n(option);
						const isChecked =
							(option === "yes" && isTemporaryStay === true) ||
							(option === "no" && isTemporaryStay === false);
						const onChange = () => setIsTemporaryStay(option === "yes");

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
				<FormButtonNext
					isValid={isValid && isTemporaryStay}
					isEndofProcess={showHint}
				/>

				<SecondaryButton
					label={i18n("button.back")}
					onClick={goToPreviousStep}
					className="hidden lg:flex"
				/>
			</div>

			<div
				className={`${showHint ? "block" : "hidden"} border-3 border-berlin-orange rounded-xs p-3  text-base lg:text-2xl`}
			>
				<div className="font-bold">{hintTitle}</div>

				<p
					dangerouslySetInnerHTML={{
						__html: hint,
					}}
				/>
			</div>
		</form>
	);
}
