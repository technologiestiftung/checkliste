const fr = {
	/*
	Language
	*/
	dir: "ltr",
	ar: "العربية",
	de: "Deutsch",
	en: "English",
	es: "Español",
	fr: "Français",
	tr: "Türkçe",
	ru: "Русский",

	/*
	Start Page and general elements
	*/
	title: "Bienvenue dans le Vérificateur de Documents",
	selectLanguage: "Sélectionnez votre langue :",
	intro:
		"Cette application vous aide à préparer de manière optimale votre rendez-vous au bureau des citoyens. Répondez à quelques questions courtes et nous créerons une liste de contrôle personnalisée avec tous les documents dont vous avez besoin pour votre demande. Vous évitez ainsi des temps d'attente inutiles et vous vous assurez d'avoir tout ce qui est important avec vous. Vos informations restent anonymes et sont stockées exclusivement localement dans votre navigateur – aucune donnée n'est transmise au bureau des citoyens ni à des tiers.",
	context: `Cette application est un prototype de <a class="font-bold hover:underline text-berlin-blue-500"
				href="https://citylab-berlin.org/de/start/"
				target="_blank"
				rel="noopener noreferrer"
			>CityLAB Berlin</a> et du
			<a class="font-bold hover:underline text-berlin-blue-500"
				href="https://www.berlin.de/ba-friedrichshain-kreuzberg/politik-und-verwaltung/aemter/amt-fuer-buergerdienste/buergeramt-der-zukunft/buergeramt-der-zukunft-1461966.php"
				target="_blank"
				rel="noopener noreferrer"
			>Bureau de district Friedrichshain-Kreuzberg de Berlin, Département des services aux citoyens</a>.
			L'objectif est d'éviter les annulations de rendez-vous dues à des documents manquants.
			Vos réponses ne sont ni stockées ni évaluées.
			<br/><br/>
			Vous avez des questions ou des conseils utiles pour nous aider à améliorer cette application ?
			<a class="font-bold hover:underline text-berlin-blue-500"
				href="https://citylabberlin.typeform.com/to/kCdnCgvC?product_id=checklist"
				target="_blank"
				rel="noopener noreferrer"
			>Alors n'hésitez pas à répondre à quelques questions pour nous</a>. `,

	"navigation.title": "Choisissez un service",
	"navigation.description": "Découvrez les documents dont vous avez besoin.",
	"navigation.button": "Démarrer",
	"navigation.id-card": "Demander une carte d'identité",
	"navigation.certificate-of-conduct": "Demander un casier judiciaire",
	"navigation.residence-registration":
		"Enregistrer une résidence – principale ou unique",
	"navigation.startpage": "Accueil",
	"navigation.startpage.mobile": "Retour à l'accueil",
	"footer.toTheTop": "Retour en haut",
	"footer.button.name.expand": "Afficher plus",
	"footer.button.name.collapse": "Afficher moins",
	"upperFooter.checklist.title": "Vérificateur de Documents",
	"upperFooter.checklist.about": "À propos du projet",
	"upperFooter.checklist.impressum": "Mentions légales",
	"upperFooter.checklist.dataprivacy": "Politique de confidentialité",
	"upperFooter.checklist.accessibility": "Déclaration d'accessibilité",

	"language-select": "Sélectionner la langue",
	"logo.t2": "Un projet de",
	"logo.t3": "En coopération avec",
	"logo.t4": "Financé par",

	yes: "Oui",
	no: "Non",
	"button.download": "Télécharger",
	"button.back": "Retour",
	"button.next": "Suivant",
	"button.cancel": "Annuler",
	"button.fillOutAgain": "Renseigner à nouveau",
	"button.next.tooltip": "Veuillez d'abord répondre à la question.",
	"button.print": "Imprimer la liste",
	"button.finish": "Terminer",
	"title.residence-registration": "Enregistrer une résidence",
	"title.id-card": "Demander une carte d'identité",
	"title.certificate-of-conduct": "Demander un casier judiciaire",
	"title.hint": "Remarque :",

	"link.cancelAppointment.label": "Annuler le rendez-vous",

	/*
	Feedback
	*/
	"feedback.question": "Avez-vous des retours sur l'application ?",
	"feedback.link":
		"https://citylabberlin.typeform.com/to/kCdnCgvC?product_id=checklist",
	"feedback.button.fillout": "Remplir le sondage",
	"feedback.button.no": "Non, merci",

	/*
	Flow Residence Registration
	*/
	"first-registration.q1":
		"Vous enregistrez-vous à Berlin pour la première fois ?",
	"first-registration.q2": "Êtes-vous marié ?",
	"first-registration.q3":
		"Souhaitez-vous enregistrer également votre conjoint ?",
	"first-registration.q4": "Avez-vous des enfants de moins de 18 ans ?",
	"first-registration.q5": "Un enfant emménage-t-il avec vous ?",
	"first-registration.q6": "Plus de deux personnes emménagent-elles au total ?",
	"nationality.q1": "Avez-vous la nationalité allemande ?",
	"nationality.q2": "Avez-vous plus de 16 ans ?",
	"nationality.q3": "Venez-vous d'un pays de l'UE ?",
	"nationality.q4": "Avez-vous moins de 16 ans ?",
	"nationality.q5": "Avez-vous le statut de réfugié ?",
	"nationality.q5.hint":
		"Vous devrez peut-être vous enregistrer via le Bureau des citoyens réfugiés. Plus d'informations ici :",
	"other-residence.q1": "Êtes-vous enregistré à une autre résidence ?",
	"other-residence.q2": "Vivez-vous à l'étranger ?",
	"other-residence.q3": "Resterez-vous à Berlin plus de trois mois ?",
	"other-residence.q3.hint":
		"Si vous restez à Berlin moins de trois mois, vous n'avez pas besoin de vous enregistrer.",
	"other-residence.q3.hint.link.label": "Annuler le rendez-vous",
	"other-residence.q4": "Resterez-vous à Berlin plus de six mois ?",
	"other-residence.q4.hint":
		"Si vous restez à Berlin moins de six mois, vous n'avez pas besoin de vous enregistrer.",
	"other-residence.q4.hint.link.label": "Annuler le rendez-vous",

	/*
	Flow ID Card
	*/
	"registered-in-berlin.q1": "Êtes-vous enregistré à Berlin ?",
	"registered-in-berlin.q2":
		"Vous trouvez-vous actuellement à Berlin, par exemple parce que vous y vivez temporairement, êtes en vacances ou êtes sans-abri ?",
	"registered-in-berlin.q2.hint.yes": `Il est également possible de demander une carte d'identité à Berlin. Les documents ne peuvent être déposés qu'au Bureau d'État pour les affaires citoyennes et réglementaires. Plus d'informations <a class="font-bold hover:underline text-berlin-blue-500"
				href="https://service.berlin.de/dienstleistung/326550/"
				target="_blank"
				rel="noopener noreferrer"
			>ici</a>.`,
	"registered-in-berlin.q2.hint.no": `Vous ne pouvez pas actuellement demander de carte d'identité à Berlin. <a href="https://service.berlin.de/terminvereinbarung/termin/manage/" target="_blank" class="text-blue-700 hover:underline visited:text-purple-500">Annuler le rendez-vous</a>.`,
	"id-for-child.q1": "Demandez-vous la carte d'identité pour un mineur ?",
	"id-for-child.q2":
		"Tous les représentants légaux (dans la plupart des cas les parents titulaires de l'autorité parentale) sont-ils présents lors du rendez-vous au bureau des citoyens ?",
	"id-for-child.q3": "Les représentants légaux sont-ils mariés ?",
	"previous-id.q1":
		"Avez-vous déjà eu un document d'identification officiel (par ex., carte d'identité ou passeport) ?",
	"previous-id.q2": "Votre nom a-t-il changé depuis la dernière délivrance ?",
	"previous-id.q3":
		"Avez-vous été naturalisé et demandez-vous une carte d'identité allemande pour la première fois ?",

	/*
	Flow Certificate of Conduct
	*/
	"applicantDetails.q1": "Avez-vous au moins 14 ans ?",
	"applicantDetails.q1.hint": `Vous pouvez demander un casier judiciaire à partir de 14 ans. <a href="https://service.berlin.de/terminvereinbarung/termin/manage/" target="_blank" class="text-blue-700 hover:underline visited:text-purple-500">Annuler le rendez-vous</a>.`,
	"applicantDetails.q2": "Êtes-vous enregistré à Berlin ?",
	"applicantDetails.q3": "Vivez-vous temporairement à Berlin ?",
	"applicantDetails.q3.hint": `Veuillez faire votre demande de casier judiciaire en ligne. <a class="font-bold hover:underline text-berlin-blue-500"
			href="https://www.fuehrungszeugnis.bund.de/"
			target="_blank"
			rel="noopener noreferrer"
			>Lien vers la demande en ligne</a>.`,
	"certificate-of-conduct-details.q1":
		"Demandez-vous le casier judiciaire pour vous-même ?",
	"certificate-of-conduct-details.q2":
		"Demandez-vous le casier judiciaire en tant que représentant légal ?",
	"certificate-ofconduct-details.q2.hint": `Vous ne pouvez demander le casier judiciaire que si vous êtes le représentant légal. <a href="https://service.berlin.de/terminvereinbarung/termin/manage/" target="_blank" class="text-blue-700 hover:underline visited:text-purple-500">Annuler le rendez-vous</a>.`,
	"certificate-of-conduct-details.q3":
		"Demandez-vous un casier judiciaire étendu ?",
	"certificate-of-conduct-details.q4":
		"Demandez-vous un casier judiciaire officiel ?",

	/*
	Checklist Overview
	*/
	"overview.title": "Votre liste de contrôle personnalisée a été créée",
	"overview.text.1":
		"Nous avons compilé une liste de contrôle individuelle de tous les documents dontVous avez besoin pour votre rendez-vous au bureau des citoyens. Vos informations restent stockées localement dans le navigateur. Vous pouvez accéder à votre liste à tout moment, même plus tard via un favori.",
	"overview.title.2": "Comment utiliser le Vérificateur de Documents :",
	"overview.text.2": `
	<ul class="list-decimal pl-5 lg:pl-7 w-9/10">
		<li>Téléchargez les documents requis en utilisant l'icône de téléchargement.</li>
		<li>Cochez les documents que vous avez déjà préparés.</li>
		<li>Apportez les documents imprimés avec vous lors de votre rendez-vous.</li>
	</ul>`,
	"overview.feedback": "N'hésitez pas à nous faire part de vos retours.",
	"overview.id-card.hint.title": "Remarque :",
	"overview.id-card.hint.text":
		"À partir du 1er mai 2025, les photos d'identité biométriques ne seront créées et soumises que numériquement dans les studios photo agréés ou aux bureaux des citoyens. Des frais de 6 € par image s'appliquent, payables exclusivement par carte.",
	"overview.forms-certificate-of-conduct.hint.title": "Remarque :",
	"overview.forms-certificate-of-conduct.hint.text": `Vous pouvez également demander le casier judiciaire facilement en ligne <a href=\"https://service.berlin.de/dienstleistung/120926/\" target=\"_blank\" class=\"text-blue-700 hover:underline visited:text-purple-500\">ici</a>.`,

	registrationForm: "Formulaire d'enregistrement",
	movingInConfirmation: "Attestation de déménagement du propriétaire",
	birthCertificate: "Acte de naissance",
	marriageCertificate: "Acte de mariage",
	idDocumentForSpouse: "Carte d'identité ou passeport du conjoint",
	childBirthCertificate: "Acte de naissance de l'enfant",
	custodyDeclaration: "Déclaration de garde",
	idDocumentForChild: "Carte d'identité, passeport ou passeport pour enfant",
	guardianConsent: "Formulaire de consentement des tuteurs",
	additionalRegistrationForm: "Formulaire d'enregistrement supplémentaire",
	germanIdOrPassportOrChildPassport:
		"Votre propre carte d'identité, passeport ou passeport pour enfant",
	germanIdOrPassport: "Votre propre carte d'identité ou passeport",
	confirmationOfCustodian: "Formulaire de consentement de votre tuteur",
	euIdOrPassportOrReplacement:
		"Carte d'identité européenne, passeport ou documents de remplacement",
	nonEuIdOrPassportOrReplacement: "Passeport ou documents de remplacement",
	supplement: "Supplément pour déclaration de résidence principale",

	idOfParents: "Documents d'identification des parents",
	bringChild: "Amener l'enfant",
	proofOfCustody:
		"Justificatif de garde (par ex., extrait certifié du registre de garde du service d'aide à l'enfance)",
	consentOfCustodian: "Formulaire de consentement du tuteur non présent",
	copyOfID:
		"Copie de la pièce d'identité (ou du passeport) du parent non présent pour vérification de signature",
	newOrOldID: "Carte d'identité ou passeport valide ou ancien",
	birthCertificateOrPartnershipCertificate:
		"Acte de naissance, acte de mariage ou certificat de partenariat civil",
	passportOrforeignID:
		"Passeport ou carte d'identité de l'ancien pays de nationalité ou certificat d'identité du Bureau d'État pour l'immigration (LEA).",
	naturalizationCertificate: "Certificat de naturalisation",

	birthCertificateOfRepresentative:
		"Acte de naissance de la personne représentée",
	carerId: "Carte d'identité du soignant (si non tuteur)",
	idOfLegalRepresentative: "Document d'identification du représentant légal",
	idDocument: "Document d'identification",
	writtenRequestAuthorized:
		"Demande écrite d'une autorité habilitée (casier judiciaire étendu)",
	nameAndAddressOfAuthority: "Nom et adresse de l'autorité",
	fileNumber: "Numéro de dossier",
	purposeOfApplication:
		"Objet de la demande (par ex., emploi dans la fonction publique)",
	letterOrEmailFromAuthority: "Lettre ou e-mail de l'autorité",

	"about.title": "À propos du projet Vérificateur de Documents",
	"about.text.p1":
		"Les bureaux des citoyens de Berlin citent les documents manquants ou oubliés comme raison la plus courante d’annulation de rendez‑vous. En répondant à quelques questions sur votre situation personnelle, l’application génère une liste de contrôle individuelle qui indique précisément les documents nécessaires. Votre visite à l’administration devient ainsi plus efficace et sans stress.",
	"about.text.p2": `Avec le Vérificateur de Documents, vous pouvez préparer la 
  <a class="font-bold hover:underline text-berlin-blue-500"
     href="https://service.berlin.de/dienstleistung/120686/"
     target="_blank"
     rel="noopener noreferrer"
  >déclaration de résidence principale</a>, 
  <a class="font-bold hover:underline text-berlin-blue-500"
     href="https://service.berlin.de/dienstleistung/120703/"
     target="_blank"
     rel="noopener noreferrer"
  >demande de carte d’identité</a> et un 
  <a class="font-bold hover:underline text-berlin-blue-500"
     href="https://service.berlin.de/dienstleistung/120926/"
     target="_blank"
     rel="noopener noreferrer"
  >casier judiciaire</a> au bureau des citoyens de la Schlesische Strasse.
  L’application a été développée en étroite coopération avec le 
  <a class="font-bold hover:underline text-berlin-blue-500"
     href="https://www.berlin.de/ba-friedrichshain-kreuzberg/politik-und-verwaltung/aemter/amt-fuer-buergerdienste/buergeramt-der-zukunft/buergeramt-der-zukunft-1461966.php"
     target="_blank"
     rel="noopener noreferrer"
  >Bureau de district Friedrichshain‑Kreuzberg de Berlin, Département des services aux citoyens</a>, 
  afin de présenter les informations nécessaires de façon claire et ciblée. Grâce à sa disponibilité en sept langues, la liste de contrôle est facilement accessible et utilisable par les citoyen·ne·s berlinois·es.`,
	"about.text.p3": `Si vous souhaitez jeter un œil dans les coulisses, vous pouvez retrouver le code source ouvert sur 
  <a class="font-bold hover:underline text-berlin-blue-500"
     href="https://github.com/technologiestiftung/checkliste"
     target="_blank"
     rel="noopener noreferrer"
  >GitHub</a>.`,
	"about.text.p4": "Bonne préparation pour votre visite aux autorités !",

	"dataPrivacy.title":
		"Politique de confidentialité du prototype “Vérificateur de Documents”",
	"dataPrivacy.subtitle":
		"Cette politique de confidentialité s'applique exclusivement au prototype “Vérificateur de Documents”.",
	"dataPrivacy.title.p1": "1. Informations générales",
	"dataPrivacy.subtitle.p1.1":
		"1.1 Objet de cette politique de confidentialité",
	"dataPrivacy.text.p1.1": `Cette politique de confidentialité a pour but de vous informer du type, de l’étendue et de la finalité des données collectées, utilisées et traitées par la Technologiestiftung Berlin, ainsi que de vos droits en matière de protection des données. La Technologiestiftung Berlin est consciente de sa responsabilité de protéger les données personnelles et s’engage tout particulièrement à garantir votre vie privée.  

Les données personnelles au sens du Règlement général sur la protection des données (RGPD – Règlement (UE) 2016/679) désignent toute information permettant d’identifier directement ou indirectement une personne. Depuis l’application du RGPD le 25 mai 2018, la Technologiestiftung Berlin a mis en œuvre de nombreuses mesures pour assurer la protection de vos données et minimiser les traitements fondés sur ses seuls intérêts.`,
	"dataPrivacy.subtitle.p1.2": "1.2 Responsable du traitement",
	"dataPrivacy.text.p1.2": `Le responsable du traitement au sens du RGPD, des législations de protection des données des autres États membres de l’UE et des autres réglementations en la matière est la Technologiestiftung Berlin.  

Technologiestiftung Berlin  
Grunewaldstraße 61–62  
10825 Berlin  
Allemagne  

Tél. : 030 20 96 99 90  
E‑mail : info(at)ts.berlin  
Site : <a class="font-bold hover:underline text-berlin-blue-500"
            href="https://www.technologiestiftung-berlin.de/de/stiftung/"
            target="_blank"
            rel="noopener noreferrer"
         >Technologiestiftung Berlin</a>  

Pour toute question ou information sur la protection des données, vous pouvez contacter notre Délégué à la protection des données :  

Michael Scherer  
Technologiestiftung Berlin  
Grunewaldstraße 61–62  
10825 Berlin  
Allemagne  

Tél. : 030 20 96 99 951  
E‑mail : <a class="font-bold hover:underline text-berlin-blue-500"
             href="mailto:datenschutz@ts.berlin"
             target="_blank"
             rel="noopener noreferrer"
          >datenschutz[at]ts.berlin</a>`,
	"dataPrivacy.subtitle.p1.3":
		"1.3 Finalité générale de la collecte, du traitement et de l’utilisation des données",
	"dataPrivacy.text.p1.3": `La <a class="font-bold hover:underline text-berlin-blue-500"
        href="https://www.technologiestiftung-berlin.de/de/stiftung/"
        target="_blank"
        rel="noopener noreferrer"
       >Technologiestiftung Berlin</a> est une fondation à but non lucratif dotée de la personnalité juridique. Dans le cadre de ses activités, il est nécessaire de traiter des données personnelles.  

Les données personnelles sont collectées, traitées et utilisées aux fins suivantes :  
<ul class="list-disc pl-12 w-9/10">
  <li>Information sur la Technologiestiftung et invitations à ses activités</li>
  <li>Support aux partenaires commerciaux et prospects</li>
  <li>Gestion du personnel</li>
  <li>Comptabilité interne et externe</li>
  <li>Demande et gestion de financements publics et privés</li>
  <li>Gestion de ses propres projets de financement</li>
</ul>
Dans certains cas, les données peuvent être transmises à des tiers pour traitement en vertu d’obligations légales ou d’intérêts légitimes, notamment :  
<ul class="list-disc pl-12 w-9/10">
  <li>Prestataires de services pour le traitement de commandes (Art. 29 et Art. 6 1 a et f RGPD)</li>
  <li>Départements internes ayant besoin de ces données (Art. 6 1 a et f RGPD)</li>
  <li>Autorités publiques lorsque la loi l’exige (Art. 6 1 c RGPD)</li>
  <li>Organismes externes pour l’exécution de contrats (Art. 6 1 b RGPD)</li>
</ul>`,
	"dataPrivacy.subtitle.p1.4": "1.4 Accès, rectification et retrait",
	"dataPrivacy.text.p1.4": `En tant que personne concernée dont les données personnelles ont pu être collectées par la Technologiestiftung Berlin, vous avez le droit d’obtenir confirmation quant à l’existence de données vous concernant, ainsi que des informations détaillées sur leur traitement (finalités, catégories de données, durées de conservation, etc.).  

Vous avez également le droit de demander la rectification des données inexactes et, si vous avez consenti au traitement, de retirer votre consentement à tout moment. Pour exercer ces droits, veuillez contacter le Délégué à la protection des données mentionné en section 1.2.`,
	"dataPrivacy.subtitle.p1.5":
		"1.5 Suppression et blocage des données personnelles",
	"dataPrivacy.text.p1.5": `Les données personnelles sont généralement conservées et traitées uniquement aussi longtemps que nécessaire par rapport aux finalités pour lesquelles elles ont été collectées. Une fois ces finalités atteintes, les données sont supprimées régulièrement.  

Vous pouvez demander à tout moment la suppression ou le blocage de vos données personnelles en contactant le Délégué à la protection des données mentionné en section 1.2.  

Un blocage signifie que la Technologiestiftung Berlin ne peut utiliser vos données que pour les finalités que vous avez expressément spécifiées, et le fichier de données reste conservé dans nos systèmes.  

Veuillez noter que la Technologiestiftung Berlin est soumise à des délais de conservation légaux imposés par des directives ou réglements européens ; dans ce cas, nous vous en informerons et supprimerons les données dès l’expiration des délais légaux.`,
	"dataPrivacy.title.p2": "2. Services concernés",
	"dataPrivacy.subtitle.p2.1": "2.1 Cookies",
	"dataPrivacy.text.p2.1": `Les cookies sont des données stockées sur votre appareil lorsque vous visitez des sites Web ; ils conservent certains réglages et informations lors de vos interactions.  

Vous pouvez désactiver ou limiter l’utilisation des cookies via les paramètres de votre navigateur ou grâce à des extensions comme Ghostery ou uBlock. Reportez‑vous à la documentation de votre navigateur pour plus de détails.  

Hors les cookies strictement nécessaires, nous n’utilisons pas de cookies de suivi ou d’analyse. Des cookies marketing de YouTube peuvent s’appliquer, voir section 2.7 ci‑dessous.  

Lors de votre première utilisation de nos services en ligne, vous pouvez choisir d’autoriser ou non la Technologiestiftung Berlin à déposer des cookies pour améliorer l’offre en ligne.`,
	"dataPrivacy.subtitle.p2.2": "2.2 Outil d’analyse Web Matomo",
	"dataPrivacy.text.p2.2": `Pour obtenir des statistiques détaillées de fréquentation, nous utilisons l’outil d’analyse web Matomo (anciennement Piwik), développé par Innocraft (InnoCraft Ltd, Willis St 150, 6011 Wellington, Nouvelle‑Zélande).  
Le logiciel fonctionne sur un serveur situé en Allemagne et n’envoie pas de données hors de l’UE.  

Matomo traite les données de façon pseudonymisée et n’utilise pas de cookies. Les données sont anonymisées avant de nous être présentées, nous ne pouvons donc pas identifier les visiteurs individuellement.  

Nous avons accès aux informations suivantes :  
<ul class="list-disc pl-12 w-9/10">
  <li>Pages visitées, clics sur les liens, téléchargements, pages d’entrée et de sortie, horodatages</li>
  <li>Informations sur l’appareil et les réglages : fabricant, modèle/version, type d’appareil, résolution d’écran, langue du navigateur</li>
  <li>Données de localisation : pays d’accès</li>
</ul>
Le traitement a pour but de détecter et corriger les erreurs de notre site et d’optimiser le contenu en fonction des besoins des visiteurs – intérêts légitimes au sens de l’Art. 6 1 f RGPD. Seule la Technologiestiftung Berlin a accès à ces données et nous ne les partageons pas avec des tiers.  

Matomo est open source et respecte des standards élevés pour prévenir tout usage abusif des données. Pour plus d’informations, consultez le site officiel de Matomo.  

Pour toute question, contactez le Délégué à la protection des données mentionné en section 1.2.`,
};

export default fr;
