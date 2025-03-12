import { Link } from "react-router-dom";

const navigationLinks = [
	{
		label: "Personalausweis beantragen",
		link: "/id-card/",
	},
	{
		label: "Führungszeugnis beantragen",
		link: "/certificate-of-conduct/",
	},
	{
		label: "Wohnsitz – Alleinige Wohnung oder Hauptwohnung anmelden",
		link: "/residence-registration/",
	},
];
export function Navigation() {
	return (
		<>
			<div className="w-full flex flex-col gap-6 py-6 px-7.5">
				<h2 className="font-bold text-xl leading-relaxed">
					Wählen Sie eine Dienstleistung
				</h2>

				{navigationLinks.map((link) => (
					<div className="flex flex-row pb-3 border-b-1 border-b-black gap-x-7.5 items-end justify-between">
						<div className="flex flex-col gap-2 ">
							<h3 className="font-bold">{link.label}</h3>
							<div className="grow leading-tight">
								Finden Sie heraus, welche Dokumente Sie benötigen
							</div>
						</div>
						<Link
							to={link.link}
							viewTransition
							className="py-2 px-4 text-white bg-berlin-blue-900 size-fit"
						>
							Starten
						</Link>
					</div>
				))}
			</div>
		</>
	);
}
