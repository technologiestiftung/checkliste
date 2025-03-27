import { i18n, buildLocalizedLink } from "~/i18n/i18n-utils";
import { LanguageSelect } from "~/components/language-select";
import { Link } from "react-router";

export default function Index() {
	return (
		<>
			<div className="w-full bg-berlin-blue-900">
				<div className="flex w-full items-center justify-between lg:justify-end gap-2 lg:gap-7 px-7.5 py-2.5 lg:max-w-[974px] mx-auto lg:px-0">
					<div className="text-white font-bold text-base lg:text-2xl">
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
				<div className="w-full flex flex-col gap-4 lg:gap-6 pt-6 pb-9 lg:py-12 px-7.5 lg:px-0 text-base lg:text-2xl">
					<h1 className="text-3xl lg:text-6xl font-bold text-berlin-blue-900 lg:mt-4">
						{i18n("dataPrivacy.title")}
					</h1>
					<h3 className="lg:mt-8 text-xl lg:text-2xl  font-bold text-berlin-blue-900">
						{i18n("dataPrivacy.subtitle")}
					</h3>
					<h2 className="mt-8 lg:mt-10 text-2xl lg:text-4xl font-bold text-berlin-blue-900">
						{i18n("dataPrivacy.title.p1")}
					</h2>
					<h3 className="mt-4 lg:mt-8 text-xl lg:text-2xl font-bold text-berlin-blue-900">
						{i18n("dataPrivacy.subtitle.p1.1")}
					</h3>
					<div
						className="text-base lg:text-2xl"
						dangerouslySetInnerHTML={{ __html: i18n("dataPrivacy.text.p1.1") }}
					/>
					<h3 className="mt-4 lg:mt-8 text-xl lg:text-2xl font-bold text-berlin-blue-900">
						{i18n("dataPrivacy.subtitle.p1.2")}
					</h3>
					<div
						className="text-base lg:text-2xl"
						dangerouslySetInnerHTML={{ __html: i18n("dataPrivacy.text.p1.2") }}
					/>
					<h3 className="mt-4 lg:mt-8 text-xl lg:text-2xl font-bold text-berlin-blue-900">
						{i18n("dataPrivacy.subtitle.p1.3")}
					</h3>
					<div
						className="text-base lg:text-2xl"
						dangerouslySetInnerHTML={{ __html: i18n("dataPrivacy.text.p1.3") }}
						style={{ listStyleType: "disc" }}
					/>
					<h3 className="mt-4 lg:mt-8 text-xl lg:text-2xl font-bold text-berlin-blue-900">
						{i18n("dataPrivacy.subtitle.p1.4")}
					</h3>
					<div
						className="text-base lg:text-2xl"
						dangerouslySetInnerHTML={{ __html: i18n("dataPrivacy.text.p1.4") }}
					/>
					<h3 className="mt-4 lg:mt-8 text-xl lg:text-2xl font-bold text-berlin-blue-900">
						{i18n("dataPrivacy.subtitle.p1.5")}
					</h3>
					<div
						className="text-base lg:text-2xl"
						dangerouslySetInnerHTML={{ __html: i18n("dataPrivacy.text.p1.5") }}
					/>
					<h2 className="mt-8 lg:mt-10 text-2xl lg:text-4xl font-bold text-berlin-blue-900">
						{i18n("dataPrivacy.title.p2")}
					</h2>
					<h3 className="mt-4 lg:mt-8 text-xl lg:text-2xl font-bold text-berlin-blue-900">
						{i18n("dataPrivacy.subtitle.p2.1")}
					</h3>
					<div
						className="text-base lg:text-2xl"
						dangerouslySetInnerHTML={{ __html: i18n("dataPrivacy.text.p2.1") }}
					/>
					<h3 className="mt-4 lg:mt-8 text-xl lg:text-2xl font-bold text-berlin-blue-900">
						{i18n("dataPrivacy.subtitle.p2.2")}
					</h3>
					<div
						className="text-base lg:text-2xl"
						dangerouslySetInnerHTML={{ __html: i18n("dataPrivacy.text.p2.2") }}
					/>
				</div>
			</div>
		</>
	);
}
