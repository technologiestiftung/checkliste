import { useApplicantDetailsStore } from "./store";
import { useProgressStore } from "../../steps-certificate-of-conduct/store";
import { RadioInput } from "../../radio-input";
import { SecondaryButton } from "../../buttons/secondary-button";
import { i18n, buildLocalizedLink } from "~/i18n/i18n-utils";
import { FormButtonNext } from "~/components/buttons/form-button-next";
import { useNavigate } from "react-router";
import { useDialogStore } from "~/components/feedback-dialog/store/dialog";

export function Is14OrOlder() {
	const options = ["yes", "no"] as const;
	const { is14OrOlder, setIs14OrOlder } = useApplicantDetailsStore();
	const { currentStep, goToNextStep } = useProgressStore();

	const isFirstStep = currentStep === 0;
	const isValid = is14OrOlder !== null;

	const hintTitle = i18n("title.hint");
	const hint = i18n("applicantDetails.q1.hint");

	const isHintVisible = isValid && !is14OrOlder;

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
					{i18n("applicantDetails.q1")}
				</h2>
				<div className="flex flex-col gap-3 lg:gap-4">
					{options.map((option) => {
						const name = "applicantDetails.q1.radio";
						const label = i18n(option);
						const isChecked =
							(option === "yes" && is14OrOlder === true) ||
							(option === "no" && is14OrOlder === false);
						const onChange = () => setIs14OrOlder(option === "yes");

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
					isValid={isValid && is14OrOlder}
					isEndOfProcess={isHintVisible}
				/>

				{!isFirstStep && (
					<SecondaryButton
						label={i18n("button.back")}
						onClick={returnToStartpage}
						className="hidden lg:flex"
					/>
				)}
			</div>

			<div
				className={`${isHintVisible ? "block" : "hidden"} border-3 border-berlin-orange rounded-xs p-3  text-base lg:text-[20px]`}
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
