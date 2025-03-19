import { useFirstRegistrationStore } from "./store";
import { RadioInput } from "../../radio-input";
import { useProgressStore } from "../../steps/store";
import { i18n } from "~/i18n/i18n-utils";
import { useSaveIntroPageViewInSessionStorage } from "./hooks/use-save-intro-page-view-in-session-storage";
import { FormButtonNext } from "~/components/buttons/form-button-next";
export function IsFirstRegistration() {
	const { isFirstRegistration, setIsFirstRegistration } =
		useFirstRegistrationStore();
	const isValid = isFirstRegistration !== null;

	const { goToNextStep } = useProgressStore();

	const options = ["yes", "no"] as const;

	useSaveIntroPageViewInSessionStorage();

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
					{i18n("first-registration.q1")}
				</h2>
				<div className="flex flex-col gap-1">
					{options.map((option) => {
						const name = "first-registration.q1.radio";
						const isChecked =
							(option === "yes" && isFirstRegistration === true) ||
							(option === "no" && isFirstRegistration === false);
						const onChange = () => setIsFirstRegistration(option === "yes");
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
			</div>
		</form>
	);
}
