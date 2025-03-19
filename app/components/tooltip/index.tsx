import React from "react";

interface TooltipProps {
	content: string;
	className?: string;
}
export const Tooltip: React.FC<TooltipProps> = ({ content, className }) => {
	return (
		<div className={`absolute left-1/2 -translate-x-1/2 z-10 ${className}`}>
			<span className="absolute -top-1 left-1/2 size-4 -translate-x-1/2 rotate-45 bg-berlin-blue-200" />
			<div
				role="tooltip"
				className="relative bg-berlin-blue-200 rounded p-2 text-center text-base font-normal"
			>
				{content}
			</div>
		</div>
	);
};
