import { i18n } from "~/i18n/i18n-utils";

export function Feedback() {
	return (
		<>
			<div className="flex w-full flex-wrap justify-center gap-x-2 px-6 py-4 text-sm">
				<p className="sm:w-[560px] 2xl:w-[750px] 2xl:pr-48">
					{i18n("feedback.intro")} {i18n("feedback.question")}{" "}
					<a
						className="text-blue-700 underline"
						href={i18n("feedback.link")}
						target="_blank"
						rel="noopener noreferrer"
					>
						{i18n("feedback.link.label")}
					</a>
				</p>
			</div>
		</>
	);
}
