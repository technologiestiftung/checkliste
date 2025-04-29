import { DownloadIcon } from "~/components/icons/download-icon";
import { i18n } from "~/i18n/i18n-utils";

export function DocumentLink({ id }: { id: string }) {
	let url = "";
	switch (id) {
		case "registrationForm":
			url =
				"https://www.berlin.de/formularverzeichnis/?formular=/labo/zentrale-einwohnerangelegenheiten/_assets/anmeldung_bei_der_meldebehoerde.pdf";
			break;

		case "movingInConfirmation":
			url =
				"https://www.berlin.de/formularverzeichnis/?formular=/labo/zentrale-einwohnerangelegenheiten/_assets/mdb-f402544-20161102_wohnungsgeberbestaetigung.pdf";
			break;

		case "additionalRegistrationForm":
			url =
				"https://www.berlin.de/formularverzeichnis/?formular=/labo/zentrale-einwohnerangelegenheiten/_assets/anmeldung_bei_der_meldebehoerde.pdf";
			break;

		case "guardianConsent":
			url =
				"https://www.berlin.de/formularverzeichnis/?formular=/labo/zentrale-einwohnerangelegenheiten/_assets/20190125_einverstaendniserklaerung_der_sorgeberechtigten.pdf";
			break;

		case "confirmationOfCustodian":
			url =
				"https://www.berlin.de/formularverzeichnis/?formular=/labo/zentrale-einwohnerangelegenheiten/_assets/20190125_einverstaendniserklaerung_der_sorgeberechtigten.pdf";
			break;

		case "supplement":
			url =
				"https://www.berlin.de/formularverzeichnis/?formular=/labo/zentrale-einwohnerangelegenheiten/_assets/mdb-f402610-beiblatt_zur_anmeldung_blanko.pdf";
			break;
		case "consentOfCustodian":
			url =
				"https://www.berlin.de/formularverzeichnis/?formular=/buergeramt/pass-und-ausweisangelegenheiten/_assets/zustimmungserklaerung_npa_nicht_anwesender_elternteil.pdf";
			break;
		default:
			return null;
	}

	if (url === "") {
		return null;
	}

	return (
		<div className="print:hidden">
			<a
				href={url}
				className="w-fit text-berlin-blue-900 flex flex-row gap-1 md:gap-2 items-center justify-center"
			>
				<DownloadIcon />
				<span className="text font-bold origin-center p-0.5 text-base md:text-[20px] hover:underline">
					{i18n("button.download")}
				</span>
			</a>
		</div>
	);
}
