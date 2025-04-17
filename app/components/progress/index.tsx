interface ProgressProps {
	currentStep: number;
	maxSteps: number;
}

export function Progress({ currentStep, maxSteps }: ProgressProps) {
	const percentage = Math.round((currentStep / maxSteps) * 100);

	const position = getLabelPosition(percentage);

	return (
		<div className="w-full flex flex-col lg:flex-row gap-2.5 lg:items-center">
			<div
				className="w-full flex flex-row h-2 lg:h-3.5 bg-gray-200 rounded-xs"
				id={"progress-bar"}
				role="progressbar"
			>
				<div
					className="relative h-full justify-end rounded-xs bg-berlin-blue-900"
					style={{ width: `${percentage}%` }}
				>
					<label
						htmlFor={"progress-bar"}
						className={`absolute w-16 top-2 lg:top-5 ${position} text-base lg:text-[20px]`}
					>
						{percentage}%
					</label>
				</div>
			</div>
		</div>
	);
}

function getLabelPosition(percentage: number) {
	if (percentage === 0) {
		return "start-0 text-start";
	}

	if (percentage === 100) {
		return "end-0 text-end";
	}

	return "-end-8 text-center";
}
