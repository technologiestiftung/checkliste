import { Link } from "react-router";
import { buildLocalizedLink, i18n } from "~/i18n/i18n-utils";

export function Navigation() {
	const navigationLinks = [
		{
			label: i18n("navigation.id-card"),
			link: "/id-card/",
		},
		{
			label: i18n("navigation.certificate-of-conduct"),
			link: "/certificate-of-conduct/",
		},
		{
			label: i18n("navigation.residence-registration"),
			link: "/residence-registration/",
		},
	];
	return (
		<>
			<div className="w-full flex flex-col gap-6 py-6 lg:pt-12 px-7.5 lg:px-0">
				<h2 className="font-bold text-xl leading-relaxed lg:text-[33px]">
					{i18n("navigation.title")}
				</h2>
				<div className="leading-tight text-base lg:text-[25px] lg:mb-4">
					{i18n("navigation.description")}
				</div>

				{navigationLinks.map((link) => (
					<div
						key={link.link}
						className="flex flex-row pb-3 border-b-1 border-b-black gap-x-7.5 items-center justify-between"
					>
						<div className="flex flex-col gap-2">
							<h3 className="font-bold text-base lg:text-[25px]">
								{link.label}
							</h3>
						</div>
						<Link
							to={buildLocalizedLink(link.link)}
							viewTransition
							className="py-2 px-4 text-white bg-berlin-blue-900 hover:bg-berlin-blue-400 size-fit rounded-xs text-base lg:text-[20px]"
						>
							{i18n("navigation.button")}
						</Link>
					</div>
				))}
			</div>
		</>
	);
}
