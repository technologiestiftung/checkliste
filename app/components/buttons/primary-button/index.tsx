export function PrimaryButton({
	label,
	type,
	disabled,
}: {
	label: string;
	type?: "button" | "submit" | "reset" | undefined;
	disabled?: boolean;
}) {
	return (
		<button
			className={`group flex items-center border-2
      ${
				!disabled
					? "border-berlin-blue-900 bg-berlin-blue-900 text-white hover:border-berlin-blue-900 hover:bg-berlin-blue-900"
					: "bg-berlin-black-10 text-berlin-black-40"
			}`}
			type={type}
			disabled={disabled}
		>
			<span className="py-2 px-4">{label}</span>
		</button>
	);
}
