import { Link } from "react-router-dom";
import { LanguageSelect } from "../components/language-select";
import { Navigation } from "~/components/navigation";
import { LogoBanner } from "~/components/logo-banner";
import { useI18n } from "~/i18n/hook/useI18n";

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
	const t = useI18n();
	return (
		<>
			<div className="w-full bg-blue-950">
				<header className="flex w-full items-center justify-between px-7.5 py-2.5">
					<div className="text-white font-bold">
						Suchen Sie Ihre Sprache aus:
					</div>
					<LanguageSelect />
				</header>
			</div>
			<div className="flex flex-col">
				<div className="w-full flex flex-col gap-4 pt-6 pb-9 px-7.5">
					<h1 className="font-bold text-[28px] leading-snug">{t("title")}</h1>
					<p>
						Diese Anwendung hilft, Ihren Termin beim Bürgeramt optimal
						vorzubereiten. Beantworten Sie ein paar Fragen und wir erstellen
						eine Übersicht der benötigten Dokumente.
					</p>
				</div>
				<span className="w-full border-b-1 border-b-berlin-gray-200" />
				<Navigation />
				<div className="w-full flex flex-col gap-10 pt-6 pb-9 px-7.5">
					<div>
						Diese Anwendung ist ein Prototyp vom {""}
						<a
							className="font-bold underline text-berlin-blue-500"
							href="https://citylab-berlin.org/de/start/"
							target="_blank"
							rel="noopener noreferrer"
						>
							CityLAB
						</a>{" "}
						Berlin und wird aktuell für einen Test verwendet.
					</div>
					<LogoBanner />
				</div>
			</div>

			<div className="flex flex-col bg-[#F5F5F5]">
				Fotter Hell <Link to="/about/">About</Link>
			</div>
			<div className="bg-gray-950 text-white">Footer dunkel</div>
		</>
	);
}
