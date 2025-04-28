import { useOtherResidenceStore } from "./store/index.ts";
import { useProgressStore } from "../../steps-residence-registration/store/index.ts";
import { RadioInput } from "../../radio-input/index.tsx";
import { SecondaryButton } from "../../buttons/secondary-button/index.tsx";
import { i18n } from "~/i18n/i18n-utils";
import { FormButtonNext } from "~/components/buttons/form-button-next";

export function IsRegisteringForMoreThanThreeMonths() {
	const {
		isRegisteringForMoreThanThreeMonths,
		setIsRegisteringForMoreThanThreeMonths,
	} = useOtherResidenceStore();

	const isValid = isRegisteringForMoreThanThreeMonths !== null;
	const needsRegistration = isRegisteringForMoreThanThreeMonths === true;
	const isHintVisible = isValid && !needsRegistration;

	const { goToPreviousStep, goToNextStep } = useProgressStore();

	const options = ["yes", "no"] as const;

	const hintTitle = i18n("title.hint");
	const hint = i18n("other-residence.q3.hint");
	const hintLinkLabel = i18n("other-residence.q3.hint.link.label");

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
					{i18n("other-residence.q3")}
				</h2>
				<div className="flex flex-col gap-3 lg:gap-4">
					{options.map((option) => {
						const name = "other-residence.q3.radio";
						const isChecked =
							(option === "yes" &&
								isRegisteringForMoreThanThreeMonths === true) ||
							(option === "no" &&
								isRegisteringForMoreThanThreeMonths === false);
						const onChange = () =>
							setIsRegisteringForMoreThanThreeMonths(option === "yes");
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
				<FormButtonNext
					isValid={isValid && needsRegistration}
					isEndOfProcess={isHintVisible}
				/>

				<SecondaryButton
					label={i18n("button.back")}
					onClick={goToPreviousStep}
					className="hidden lg:flex"
				/>
			</div>

			<div
				className={`${isHintVisible ? "block" : "hidden"} border-3 border-berlin-orange rounded-xs p-3`}
			>
				<div className="font-bold">{hintTitle}</div>
				{hint}{" "}
				<a
					href="https://service.berlin.de/terminvereinbarung/termin/manage/"
					target="_blank"
					className="font-bold hover:underline text-berlin-blue-500 visited:text-purple-500"
				>
					{hintLinkLabel}
				</a>
				.
			</div>
		</form>
	);
}
