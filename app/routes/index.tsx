import { Link } from "react-router-dom";

export const meta = () => {
	return [
		{ title: "Checkliste" },
		{
			name: "description",
			content:
				"Diese Webseite ist ein Assistent für die Anmeldung oder Ummeldung in Berlin",
		},
	];
};

export default function Index() {
	return (
		<>
			<div className="w-full bg-blue-950 text-white">language selector</div>
			<div className="flex flex-col gap-2">
				<h1 className="text-xl font-bold">Willkommen bei der Checkliste</h1>
				<Link to="/id-card/">Personalausweis beantragen</Link>
				<Link to="/certificate-of-conduct/">Führungszeugnis beantragen</Link>
				<Link to="/residence-registration/">
					Wohnsitz – Alleinige Wohnung oder Hauptwohnung anmelden
				</Link>
			</div>

			<div className="flex flex-col bg-[#F5F5F5]">
				<Link to="/about/">About</Link>
			</div>
			<div className="bg-gray-950 text-white">Footer dunkel</div>
		</>
	);
}
