import { useProgressStore } from "../steps/store";
import { i18n } from "~/i18n/i18n-utils";

export function Progress() {
	const { currentSection, maxSections } = useProgressStore();

	if (currentSection === 0) return null;
	return (
		<div className="w-full flex flex-col lg:flex-row gap-2.5 lg:items-center">
			<label
				htmlFor={"progress-bar"}
				className="shrink-0 text-base lg:text-2xl"
			>
				{i18n("progress.section")} {currentSection}/{maxSections}
			</label>

			<div
				className="w-full flex flex-row gap-3 h-2 lg:h-3.5"
				id={"progress-bar"}
			>
				{Array.from({ length: maxSections }).map((_, index) => (
					<div
						key={index}
						className={`h-full w-full rounded-xs ${index < currentSection ? "bg-berlin-blue-900" : "bg-gray-200"}`}
					/>
				))}
			</div>
		</div>
	);
}
