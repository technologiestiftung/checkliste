import { i18n } from "~/i18n/i18n-utils";

export function HeaderTitle() {
	return (
		<h1 className="text-xl font-bold md:text-2xl">
			{i18n("title")}{" "}
			<img
				src="/images/icon-checked-document.svg"
				alt=""
				className="mb-2 inline ltr:ml-2 rtl:mr-2"
			/>
		</h1>
	);
}
