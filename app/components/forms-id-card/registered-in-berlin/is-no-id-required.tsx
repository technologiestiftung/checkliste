import { useRegisteredInBerlinStore } from "./store";
import { useProgressStore } from "../../steps-id-card/store";
import { RadioInput } from "../../radio-input";
import { SecondaryButton } from "../../buttons/secondary-button";
import { i18n } from "~/i18n/i18n-utils";
import { FormButtonNext } from "~/components/buttons/form-button-next";

export function IsNoIDRequired() {
	const { isNoIDRequired, setIsNoIDRequired } = useRegisteredInBerlinStore();

	const { goToPreviousStep, goToNextStep } = useProgressStore();

	const options = ["yes", "no"] as const;

	const isValid = isNoIDRequired !== null;

	const showHint = isValid && isNoIDRequired;

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
					{i18n("registered-in-berlin.q2")}
				</h2>
				<div className="flex flex-col gap-3 lg:gap-4">
					{options.map((option) => {
						const name = "registered-in-berlin.q2.radio";
						const label = i18n(option);
						const isChecked =
							(option === "yes" && isNoIDRequired === true) ||
							(option === "no" && isNoIDRequired === false);
						const onChange = () => setIsNoIDRequired(option === "yes");

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
					isValid={isValid && !isNoIDRequired}
					isEndOfProcess={showHint}
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
				<div className="font-bold">{i18n("title.hint")}</div>
				<p>{i18n("registered-in-berlin.q2.hint.yes")}</p>
			</div>
		</form>
	);
}
