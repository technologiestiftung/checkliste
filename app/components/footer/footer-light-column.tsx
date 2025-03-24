import { Link } from "react-router";
import { Collapsible } from "~/components/collapsible";
import { i18n, buildLocalizedLink } from "~/i18n/i18n-utils.ts";

type FooterColumnProps = {
	title: string;
	links: {
		label: string;
		href: string;
	}[];
	openByDefault?: boolean;
};

export function FooterLightColumn({
	title,
	links,
	openByDefault = false,
}: FooterColumnProps) {
	return (
		<>
			{/* Mobile */}
			<div className="flex flex-col desktop:hidden">
				<Collapsible
					title={i18n(title as keyof typeof i18n)}
					isDefaultOpen={openByDefault}
					titleClassNames="text-lg"
				>
					<ul className="flex flex-col">
						{links.map((link) => (
							<li key={link.href}>
								<Link
									to={buildLocalizedLink(link.href)}
									rel="noopener noreferrer"
									className={`flex hover:underline pl-7 gap-x-1.5 py-4 flex-row`}
								>
									{i18n(link.label as keyof typeof i18n)}
								</Link>
							</li>
						))}
					</ul>
				</Collapsible>
			</div>

			{/* Desktop */}
			<div className="hidden desktop:flex flex-col gap-3.5 min-w-[12svw] ml-[3svw]">
				<div className="font-bold flex justify-between items-center">
					<span>{i18n(title as keyof typeof i18n)}</span>
				</div>
				<ul className="flex flex-col gap-2.5 bg-inherit">
					{links.map((link) => (
						<li key={link.href}>
							<Link
								to={buildLocalizedLink(link.href)}
								rel="noopener noreferrer"
								className={`flex hover:underline gap-1.5 flex-row`}
							>
								{i18n(link.label as keyof typeof i18n)}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</>
	);
}
