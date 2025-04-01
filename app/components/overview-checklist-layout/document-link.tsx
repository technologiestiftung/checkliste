import { i18n } from "~/i18n/i18n-utils";
import { DownloadIcon } from "~/components/icons/download-icon";
import { useState } from "react";
import { Tooltip } from "~/components/tooltip";

export function DocumentLink({ id }: { id: string }) {
	const [showTooltip, setShowTooltip] = useState(false);
	const tooltipText = i18n("download.tooltip");

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
		<div className="relative print:hidden">
			<div
				onMouseMove={() => setShowTooltip(true)}
				onMouseOut={() => setShowTooltip(false)}
				className="relative"
			>
				<a href={url} className="w-fit">
					<DownloadIcon />
				</a>
			</div>
			{showTooltip && <Tooltip content={tooltipText} className="top-9" />}
		</div>
	);
}
