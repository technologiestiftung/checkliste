export function PrimaryButton({
	label,
	type,
	disabled,
	onClick,
	onMouseMove,
	onMouseOut,
}: {
	label: string;
	type?: "button" | "submit" | "reset" | undefined;
	disabled?: boolean;
	onClick?: () => void;
	onMouseMove?: () => void;
	onMouseOut?: () => void;
}) {
	return (
		<button
			className={`group flex items-center rounded-xs
				${
					!disabled
						? " bg-berlin-blue-900 hover:bg-berlin-blue-400 hover:text-berlin-blue-900 text-white cursor-pointer"
						: "bg-berlin-gray-200 text-berlin-blue-900"
				}`}
			type={type}
			disabled={disabled}
			onClick={onClick}
			onMouseMove={onMouseMove}
			onMouseOut={onMouseOut}
		>
			<span className="py-2.5 px-5 text-base lg:text-2xl">{label}</span>
		</button>
	);
}
