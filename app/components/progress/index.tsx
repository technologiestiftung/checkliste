import { useProgressStore } from "../steps/store";

export function Progress({ id }: { id: string }) {
	const { currentStep, maxSteps } = useProgressStore();

	return (
		<>
			<label htmlFor={id} className="sr-only">
				Current progress: {currentStep} of {maxSteps} steps
			</label>
			<progress
				className="h-1 w-full bg-transparent"
				id={id}
				value={currentStep}
				max={maxSteps}
			/>
		</>
	);
}
