import { ScrollToTopButton } from "~/components/buttons/scroll-to-top-button/scroll-to-top-button";
import { FooterLightColumn } from "~/components/footer/footer-light-column.tsx";

const upperFooterColumns = [
	{
		title: "upperFooter.checklist.title",
		links: [
			{
				label: "upperFooter.checklist.about",
				href: "/about/",
			},
			{
				label: "upperFooter.checklist.impressum",
				href: "https://www.technologiestiftung-berlin.de/impressum",
			},
			{
				label: "upperFooter.checklist.dataprivacy",
				href: "https://www.technologiestiftung-berlin.de/datenschutz",
			},
			{
				label: "upperFooter.checklist.accessibility",
				href: "https://www.technologiestiftung-berlin.de/erklaerung-zur-barrierefreiheit",
			},
		],
	},
];

export function Footer({ berlinFooter }: { berlinFooter: string }) {
	return (
		<div>
			<div className="flex items-start justify-between w-full bg-berlin-lighter-gray desktop:p-6">
				<div className="desktop:pl-[5%] flex desktop:items-start justify-between w-full">
					<div className="flex flex-col desktop:flex-row desktop:max-w-[210px] w-full">
						<div className="desktop:hidden self-end">
							<ScrollToTopButton />
						</div>

						{upperFooterColumns.map((column) => (
							<FooterLightColumn
								key={column.title}
								title={column.title}
								links={column.links}
								openByDefault={true}
							/>
						))}
					</div>
					<div className="hidden desktop:block">
						<ScrollToTopButton />
					</div>
				</div>
			</div>

			<div
				suppressHydrationWarning={true}
				dangerouslySetInnerHTML={{ __html: berlinFooter }}
			/>
		</div>
	);
}
