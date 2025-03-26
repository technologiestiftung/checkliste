import { Tooltip } from "~/components/tooltip";
import { i18n } from "~/i18n/i18n-utils";
import { PrimaryButton } from "../primary-button";
import { useState } from "react";

export function FormButtonNext({
	isValid,
	isEndofProcess,
}: {
	isValid: boolean;
	isEndofProcess?: boolean;
}) {
	const [showTooltip, setShowTooltip] = useState(false);
	const tooltipText = i18n("button.next.tooltip");

	return (
		<div
			className={`relative`}
			onMouseMove={() => setShowTooltip(true)}
			onMouseOut={() => setShowTooltip(false)}
		>
			<PrimaryButton
				label={i18n("button.next")}
				type="submit"
				disabled={!isValid}
			/>
			{showTooltip && !isValid && !isEndofProcess && (
				<Tooltip
					content={tooltipText}
					className="min-w-[120px] lg:min-w-[130px] top-14"
				/>
			)}
		</div>
	);
}
