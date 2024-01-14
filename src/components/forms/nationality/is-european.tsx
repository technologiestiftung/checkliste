import { t } from "../../../i18n/translations";
import { RadioInput } from "../../radio-input";
import { useNationalityStore } from "./store";
import { useProgressStore } from "../../steps/store";
import { useI18nStore } from "../../../i18n/store";
import { InfoButton } from "../../buttons/info-button";
import { PrimaryButton } from "../../buttons/primary-button";
import { SecondaryButton } from "../../buttons/secondary-button";

export function IsEuropean() {
  const isEuropean = useNationalityStore((state) => state.isEuropean);
  const setIsEuropean = useNationalityStore((state) => state.setIsEuropean);

  const isValid = isEuropean !== null;

  const goToPreviousStep = useProgressStore((state) => state.goToPreviousStep);
  const goToNextStep = useProgressStore((state) => state.goToNextStep);

  const language = useI18nStore((state) => state.language);

  const options = ["yes", "no"];

  return (
    <form
      className="flex h-full w-full flex-col gap-5"
      onSubmit={(e) => {
        e.preventDefault();
        goToNextStep();
      }}
    >
      <div className="flex flex-col gap-4">
        <h3 className="flex w-full items-baseline justify-between gap-3">
          {t("nationality.q3", language)}
          <div
            className="tooltip tooltip-left text-start sm:tooltip-top"
            data-tip={t("nationality.q3.tooltip", language)}
          >
            <InfoButton />
          </div>
        </h3>
        <div className="flex flex-col gap-1">
          {options.map((option) => {
            const name = "nationality.q3.radio";
            const isChecked =
              (option === "yes" && isEuropean === true) ||
              (option === "no" && isEuropean === false);
            const onChange = () => setIsEuropean(option === "yes");
            const label = t(option, language);

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

      <div className="flex h-full w-full flex-row-reverse items-end justify-between pt-10">
        <div
          className={
            !isValid
              ? "tooltip tooltip-left text-start sm:tooltip-top"
              : undefined
          }
          data-tip={!isValid ? t("button.next.tooltip", language) : undefined}
        >
          <PrimaryButton
            label={t("button.next", language)}
            type="submit"
            disabled={!isValid}
          />
        </div>

        <SecondaryButton
          label={t("button.back", language)}
          onClick={goToPreviousStep}
        />
      </div>
    </form>
  );
}
