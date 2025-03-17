import { Link } from "react-router";
import { i18n } from "~/i18n/i18n-utils";

export function LogoBanner() {
	const logoBannerElements = [
		{
			logo: "/images/logo-citylab-berlin.svg",
			link: "https://citylab-berlin.org/de/start/",
			alt: "Logo von CityLab Berlin",
			description: "",
			className: "w-full sm:w-[240px] max-w-[320px] shrink",
		},
		{
			logo: "/images/logo-technologiestiftung-berlin-de.svg",
			link: "https://www.technologiestiftung-berlin.de/",
			alt: "Logo von Technologiestiftung Berlin",
			description: i18n("logo.t2"),
			className: "w-full sm:w-[160px] max-w-[220px]",
		},
		{
			logo: "/images/logo-buergeramt-der-zukunft.png",
			link: "https://buergeramt-der-zukunft.de/",
			alt: "Logo von Bürgeramt der Zukunft",
			description: i18n("logo.t3"),
			className: "w-full sm:w-[80px] max-w-[100px]",
		},
		{
			logo: "/images/logo-senatskanzlei-buergermeister-horizontal.svg",
			link: "https://www.berlin.de/senatskanzlei/",
			alt: "Logo von Berlins Regierender Bürgermeister",
			description: i18n("logo.t4"),
			className: "w-9/10 sm:w-[225px] max-w-[320px]",
		},
	];

	return (
		<div className="flex w-full justify-center gap-y-4 px-8 pb-2.5 lg:pt-28 lg:px-0">
			<div className="flex flex-col text-sm lg:flex-row lg:items-start gap-x-10 gap-y-7.5">
				{logoBannerElements.map((logo) => (
					<div
						key={logo.logo}
						className="flex flex-col gap-4 justify-between h-full"
					>
						<div className="text-sm">{logo.description}</div>
						<Link to={logo.link} target="_blank" rel="noopener noreferrer">
							<img
								src={logo.logo}
								alt={logo.alt}
								className={logo.className}
								loading="lazy"
							/>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}
