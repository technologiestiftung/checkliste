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
			<div className="w-full flex flex-col gap-6 py-6 lg:py-12 px-7.5 lg:px-0">
				<h2 className="font-bold text-xl leading-relaxed lg:text-4xl lg:pb-2">
					{i18n("navigation.title")}
				</h2>

				{navigationLinks.map((link) => (
					<div
						key={link.link}
						className="flex flex-row pb-3 border-b-1 border-b-black gap-x-7.5 items-end justify-between"
					>
						<div className="flex flex-col gap-2 ">
							<h3 className="font-bold text-base lg:text-[28px]">
								{link.label}
							</h3>
							<div className="grow leading-tight text-base lg:text-2xl">
								{i18n("navigation.description")}
							</div>
						</div>
						<Link
							to={buildLocalizedLink(link.link)}
							viewTransition
							className="py-2 px-4 text-white bg-berlin-blue-900 size-fit rounded-xs"
						>
							{i18n("navigation.button")}
						</Link>
					</div>
				))}
			</div>
		</>
	);
}
