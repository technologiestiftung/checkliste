import { i18n, buildLocalizedLink } from "~/i18n/i18n-utils";
import { LanguageSelect } from "~/components/language-select";
import { LogoBanner } from "~/components/logo-banner";
import { Link } from "react-router";

export default function Index() {
	return (
		<>
			<div className="w-full bg-berlin-blue-900">
				<div className="flex w-full items-center justify-between lg:justify-end gap-2 lg:gap-7 px-7.5 py-2.5 lg:max-w-[974px] mx-auto lg:px-0">
					<div className="text-white font-bold text-base lg:text-[20px]">
						{i18n("selectLanguage")}
					</div>
					<LanguageSelect />
				</div>
			</div>
			<div className="w-full flex flex-col">
				<Link
					className="hidden w-fit lg:flex text-2xl text-berlin-blue-900 hover:underline font-bold px-4 py-5"
					to={buildLocalizedLink("/")}
				>
					{i18n("navigation.startpage")}
				</Link>
				<Link
					className="flex w-fit lg:hidden text-berlin-blue-900 hover:underline font-bold px-7.5 py-5"
					to={buildLocalizedLink("/")}
				>
					{i18n("navigation.startpage.mobile")}
				</Link>
				<span className="hidden lg:flex w-full border-t-1 border-berlin-gray-200" />
			</div>

			<div className="flex flex-col lg:max-w-[974px] mx-auto">
				<div className="w-full flex flex-col gap-6 lg:gap-10 pt-6 pb-9 lg:py-12 px-7.5 lg:px-0 text-base lg:text-[20px]">
					<h1 className="text-[28px] lg:text-[50px] font-bold text-berlin-blue-900 lg:mt-4">
						{i18n("about.title")}
					</h1>
					<div className="text-base lg:text-[20px]">
						{i18n("about.text.p1")}
					</div>
					<div
						className="text-base lg:text-[20px]"
						dangerouslySetInnerHTML={{ __html: i18n("about.text.p2") }}
					/>
					<div
						className="text-base lg:text-[20px]"
						dangerouslySetInnerHTML={{ __html: i18n("about.text.p3") }}
					/>
					<div className="text-base lg:text-[20px]">
						{i18n("about.text.p4")}
					</div>

					<span className="w-full border-t-1 border-berlin-gray-200 my-5" />
					<div
						className="text-base lg:text-[20px]"
						dangerouslySetInnerHTML={{ __html: i18n("context") }}
					/>
					<LogoBanner />
				</div>
			</div>
		</>
	);
}
