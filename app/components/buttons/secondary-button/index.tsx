export function SecondaryButton({
	type,
	onClick,
	label,
}: {
	type?: "button" | "submit" | "reset" | undefined;
	onClick?: () => void;
	label: string;
}) {
	return (
		<button
			className="flex items-center border-2 border-black hover:bg-gray-100"
			type={type}
			onClick={onClick}
		>
			<span className="py-2 ltr:pl-3 ltr:pr-4 rtl:pl-4 rtl:pr-3">{label}</span>
		</button>
	);
}
