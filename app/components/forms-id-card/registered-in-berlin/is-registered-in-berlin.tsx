import { useRegisteredInBerlinStore } from "./store";
import { useProgressStore } from "../../steps-id-card/store";
import { RadioInput } from "../../radio-input";
import { SecondaryButton } from "../../buttons/secondary-button";
import { i18n, buildLocalizedLink } from "~/i18n/i18n-utils";
import { FormButtonNext } from "~/components/buttons/form-button-next";
import { useNavigate } from "react-router";
import { useDialogStore } from "~/components/feedback-dialog/store/dialog";

export function IsRegisteredInBerlin() {
	const { isRegisteredInBerlin, setIsRegisteredInBerlin } =
		useRegisteredInBerlinStore();

	const { currentStep, goToNextStep } = useProgressStore();

	const isFirstStep = currentStep === 0;

	const options = ["yes", "no"] as const;

	const isValid = isRegisteredInBerlin !== null;

	const navigate = useNavigate();
	const startPageLink = buildLocalizedLink("/");
	const { setHasUserLeftFlow } = useDialogStore();

	const returnToStartpage = () => {
		navigate(startPageLink);
		setHasUserLeftFlow(true);
	};

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
					{i18n("registered-in-berlin.q1")}
				</h2>
				<div className="flex flex-col gap-3 lg:gap-4">
					{options.map((option) => {
						const name = "registered-in-berlin.q1.radio";
						const label = i18n(option);
						const isChecked =
							(option === "yes" && isRegisteredInBerlin === true) ||
							(option === "no" && isRegisteredInBerlin === false);
						const onChange = () => setIsRegisteredInBerlin(option === "yes");

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

				{!isFirstStep && (
					<SecondaryButton
						label={i18n("button.back")}
						onClick={returnToStartpage}
						className="hidden lg:flex"
					/>
				)}
			</div>
		</form>
	);
}
