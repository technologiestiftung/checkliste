export function SecondaryButton({
	type,
	onClick,
	label,
	className,
}: {
	type?: "button" | "submit" | "reset" | undefined;
	onClick?: () => void;
	label: string;
	className?: string;
}) {
	return (
		<button
			className={`flex items-center rounded-xs border-1 border-berlin-blue-900 hover:border-berlin-blue-400 hover:bg-berlin-blue-400 cursor-pointer hover:text-berlin-blue-900 ${className}`}
			type={type}
			onClick={onClick}
		>
			<span className="py-2.5 px-5 text-base lg:text-2xl">{label}</span>
		</button>
	);
}
