import { type ReactNode, useEffect, useState } from "react";
import { ChevronDown } from "~/components/icons/chevron-down.tsx";
import { i18n } from "~/i18n/i18n-utils";

type CollapsibleProps = {
	title: string;
	classNames?: string;
	titleClassNames?: string;
	children: string | ReactNode;
	isDefaultOpen?: boolean;
	forceOpen?: boolean;
};

let timeout: ReturnType<typeof setTimeout>;

export function Collapsible({
	title,
	children,
	classNames,
	titleClassNames,
	isDefaultOpen = false,
	forceOpen = false,
}: CollapsibleProps) {
	const [isOpen, setIsOpen] = useState(isDefaultOpen);
	const [isShadowVisible, setIsShadowVisible] = useState(false);

	// Keeps the collapsible open when forceOpen is true.
	// Current approach handles multiple renders caused by useEffect in FilterMenu but may need refactoring later.
	useEffect(() => {
		if (forceOpen) {
			setIsOpen(true);
		}
	}, [forceOpen]);

	useEffect(() => {
		clearTimeout(timeout);

		if (isOpen) {
			setIsShadowVisible(true);
			return () => {};
		}

		timeout = setTimeout(() => {
			setIsShadowVisible(false);
		}, 150);

		return () => clearTimeout(timeout);
	}, [isOpen]);

	return (
		<div className="flex flex-col">
			<button
				className={`
					font-bold flex justify-between items-center border-t-[0.5px] p-4 
					${isShadowVisible ? "shadow-[0_4px_4px_rgba(144,144,144,.5)]" : "shadow-none"}
					${classNames}
					`}
				onClick={() => setIsOpen(!isOpen)}
				aria-label={
					isOpen
						? i18n("footer.button.name.collapse")
						: i18n("footer.button.name.expand")
				}
				aria-expanded={isOpen}
			>
				<span className={titleClassNames}>{title}</span>
				<div className={`transition ${isOpen ? "-rotate-180" : "rotate-0"}`}>
					<ChevronDown />
				</div>
			</button>

			<div
				className={`transition-all duration-200 ease-in-out overflow-hidden
          ${isOpen ? "max-h-96" : "max-h-0 invisible"}`}
			>
				{children}
			</div>
		</div>
	);
}
