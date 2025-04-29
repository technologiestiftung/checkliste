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
			className={`group flex cursor-pointer items-center gap-3 border-1 border-berlin-blue-900 rounded-xs px-4 py-3 bg-white hover:bg-berlin-blue-400`}
			onClick={onChange}
		>
			<input
				type="radio"
				name={name}
				id={label}
				onChange={onChange}
				checked={isChecked}
				value={label}
				className="h-4 w-4 appearance-none rounded-full bg-white outline-offset-3 outline-2 outline-berlin-blue-900 checked:bg-berlin-blue-900 checked:outline-berlin-blue-900 focus:ring-2 focus:ring-berlin-blue-400 focus:ring-offset-8"
			/>
			<label
				className="cursor-pointer text-base lg:text-[20px] font-bold"
				htmlFor={label}
				onClick={onChange}
			>
				{label}
			</label>
		</div>
	);
}
