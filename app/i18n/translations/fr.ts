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
	title: "Bienvenue sur la checklist",
	selectLanguage: "Choisissez votre langue :",
	intro:
		"Cette application vous aide à préparer au mieux votre rendez-vous à la mairie. Répondez à quelques questions et nous créerons une liste des documents nécessaires.",
	context: `Cette application est un prototype du <a class="font-bold hover:underline text-berlin-blue-500"
							href="https://citylab-berlin.org/fr/start/"
							target="_blank"
							rel="noopener noreferrer"
						> CityLAB</a> Berlin et est actuellement utilisée pour un test.`,

	"navigation.title": "Choisissez un service",
	"navigation.description": "Découvrez quels documents sont nécessaires",
	"navigation.button": "Commencer",
	"navigation.id-card": "Demander une carte d'identité",
	"navigation.certificate-of-conduct": "Demander un casier judiciaire",
	"navigation.residence-registration":
		"Enregistrer une résidence principale ou unique",
	"navigation.startpage": "Page d'accueil",
	"footer.toTheTop": "Retour en haut de la page",
	"footer.button.name.expand": "Afficher plus",
	"footer.button.name.collapse": "Afficher moins",
	"upperFooter.checklist.title": "Checklist",
	"upperFooter.checklist.about": "À propos du projet",
	"upperFooter.checklist.impressum": "Mentions légales",
	"upperFooter.checklist.dataprivacy": "Politique de confidentialité",
	"upperFooter.checklist.accessibility": "Déclaration d'accessibilité",

	"language-select": "Sélectionner la langue",
	"logo.t2": "Un projet de",
	"logo.t3": "En coopération avec",
	"logo.t4": "Soutenu par",

	yes: "Oui",
	no: "Non",
	"download.tooltip": "Télécharger",
	"button.back": "Retour",
	"button.next": "Suivant",
	"button.cancel": "Annuler",
	"button.next.tooltip": "Veuillez d'abord répondre à la question.",
	"button.print": "Télécharger la liste",
	"button.finish": "Terminer",
	"title.residence-registration": "Enregistrement d'une résidence",
	"title.id-card": "Demande d'une carte d'identité",
	"title.certificate-of-conduct": "Demande d'un casier judiciaire",
	"title.hint": "Remarque :",

	/*
	Feedback
	*/
	"feedback.question": "Avez-vous des commentaires sur l'application ?",
	"feedback.link":
		"https://citylabberlin.typeform.com/to/kCdnCgvC?product_id=checklist",
	"feedback.button.fillout": "Remplir le sondage",
	"feedback.button.no": "Non, merci",

	/*
	Flow Residence
	*/
	"first-registration.q1": "Est-ce votre première inscription à Berlin ?",
	"first-registration.q2": "Êtes-vous marié(e) ?",
	"first-registration.q3":
		"Souhaitez-vous également inscrire votre conjoint(e) ?",
	"first-registration.q4": "Avez-vous des enfants de moins de 18 ans ?",
	"first-registration.q5": "Un enfant emménage-t-il avec vous ?",
	"first-registration.q6":
		"Y a-t-il plus de deux personnes qui emménagent ensemble ?",
	"nationality.q1": "Avez-vous la nationalité allemande ?",
	"nationality.q2": "Avez-vous plus de 16 ans ?",
	"nationality.q3": "Venez-vous d'un pays de l'UE ?",
	"nationality.q4": "Avez-vous moins de 16 ans ?",
	"nationality.q5": "Êtes-vous réfugié(e) ?",
	"nationality.q5.hint":
		"Remarque : Votre inscription pourrait devoir être effectuée au Bureau des réfugiés. Vous trouverez plus d'informations ici :",
	"other-residence.q1": "Restez-vous inscrit(e) dans une autre résidence ?",
	"other-residence.q2": "Habitez-vous à l'étranger ?",
	"other-residence.q3":
		"Prévoyez-vous de rester à Berlin pendant plus de trois mois ?",
	"other-residence.q3.hint":
		"Remarque : Si vous restez à Berlin pendant moins de trois mois, vous n'avez pas besoin de vous inscrire.",
	"other-residence.q3.hint.link.label": "Annuler le rendez-vous",
	"other-residence.q4":
		"Prévoyez-vous de rester à Berlin pendant plus de six mois ?",
	"other-residence.q4.hint":
		"Remarque : Si vous restez à Berlin pendant moins de six mois, vous n'avez pas besoin de vous inscrire.",
	"other-residence.q4.hint.link.label": "Annuler le rendez-vous",

	/*
	Checklist Overview
	*/
	"overview.title": "Votre checklist personnelle a été créée",
	"overview.text.1":
		"Nous avons créé une checklist de tous les documents nécessaires pour votre rendez-vous. Veuillez les apporter remplis, signés et imprimés.",
	"overview.title.2": "Vous avez besoin de ces documents :",
	"overview.text.2":
		"Utilisez cette liste pour préparer votre rendez-vous. Cochez les documents que vous possédez déjà.",
	"overview.feedback":
		"N’hésitez pas à répondre à quelques questions pour nous.",
	"overview.id-card.hint.title": "Remarque :",
	"overview.id-card.hint.text":
		"À partir du 1er mai 2025, les photos biométriques de passeport ne pourront être prises et transmises que dans des studios photo certifiés ou des bureaux municipaux. Des frais de 6 € par document s'appliquent, payables uniquement par carte.",

	registrationForm: "Formulaire d'inscription",
	movingInConfirmation: "Confirmation d'emménagement du propriétaire",
	birthCertificate: "Certificat de naissance",
	marriageCertificate: "Certificat de mariage",
	idDocumentForSpouse: "Carte d'identité ou passeport de votre conjoint(e)",
	childBirthCertificate: "Certificat de naissance de votre (vos) enfant(s)",
	custodyDeclaration: "Déclaration de garde",
	idDocumentForChild:
		"Carte d'identité, passeport ou passeport enfant de votre (vos) enfant(s)",
	guardianConsent: "Consentement des tuteurs légaux de votre (vos) enfant(s)",
	additionalRegistrationForm: "Formulaire d'inscription supplémentaire",
	germanIdOrPassportOrChildPassport:
		"Votre propre carte d'identité, passeport ou passeport enfant",
	germanIdOrPassport: "Votre propre carte d'identité ou passeport",
	confirmationOfCustodian: "Consentement de votre tuteur légal",
	euIdOrPassportOrReplacement:
		"Carte d'identité européenne, passeport ou document de remplacement",
	nonEuIdOrPassportOrReplacement: "Passeport ou document de remplacement",
	supplement: "Annexe à la déclaration d'inscription/résidence principale",
};

export default fr;
