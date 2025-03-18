import { useProgressStore } from "../steps/store";

export function Progress() {
	const { currentSection, maxSections } = useProgressStore();

	if (currentSection === 0) return null;
	return (
		<div className="w-full flex flex-col lg:flex-row gap-2 lg:items-center">
			<label htmlFor={"progress-bar"} className="shrink-0">
				Abschnitt {currentSection}/{maxSections}
			</label>

			{/* custom progress bar for each maxSection add a div with the same width depending on the currentSection color the div in blue if currentSection is reached */}
			<div className="w-full flex flex-row gap-3 h-2" id={"progress-bar"}>
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
