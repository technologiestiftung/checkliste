import { i18n } from "~/i18n/i18n-utils.ts";
import { ArrowUpIcon } from "~/components/icons/arrow-up-icon";

export function ScrollToTopButton() {
	return (
		<button
			className="flex gap-x-2 p-2 w-48"
			onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
		>
			{i18n("footer.toTheTop")} <ArrowUpIcon className="bg-berlin-red" />
		</button>
	);
}
