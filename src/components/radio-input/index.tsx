type RadioInputProps = {
	name: string;
	label: string;
	isChecked: boolean;
	onChange: () => void;
};

export function RadioInput({
	name,
	label,
	isChecked,
	onChange,
}: RadioInputProps) {
	return (
		<div
			className={`group flex cursor-pointer items-center gap-3 border-2 px-3 py-2 hover:border-berlin-medium-blue`}
			onClick={onChange}
		>
			<input
				type="radio"
				name={name}
				id={label}
				onChange={onChange}
				checked={isChecked}
				value={label}
				className="h-3 w-3 appearance-none rounded-full bg-white outline outline-2 outline-offset-4 outline-black checked:bg-berlin-medium-blue checked:outline-berlin-medium-blue focus:ring-3 focus:ring-berlin-medium-blue focus:ring-offset-8"
			/>
			<label className="cursor-pointer" htmlFor={label} onClick={onChange}>
				{label}
			</label>
		</div>
	);
}
