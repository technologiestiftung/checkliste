const en = {
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
	title: "Welcome to the Document Check",
	appTitle: "Document-Check",
	selectLanguage: "Select your language:",
	intro:
		"This application helps you optimally prepare your appointment at the citizens' office. Answer a few short questions and we'll create an individual checklist with all the documents you need for your request. This way you avoid unnecessary waiting times and ensure you have everything important with you. Your information remains anonymous and is stored exclusively locally in your browser – no data is forwarded to the citizens' office or third parties.",
	context: `This application is a prototype from <a class="font-bold hover:underline text-berlin-blue-500"
				href="https://citylab-berlin.org/de/start/"
				target="_blank"
				rel="noopener noreferrer"
			> CityLAB Berlin</a> and the 
			<a class="font-bold hover:underline text-berlin-blue-500"
				href="https://www.berlin.de/ba-friedrichshain-kreuzberg/politik-und-verwaltung/aemter/amt-fuer-buergerdienste/buergeramt-der-zukunft/buergeramt-der-zukunft-1461966.php"
				target="_blank"
				rel="noopener noreferrer"
			>Friedrichshain-Kreuzberg District Office of Berlin, Department of Citizen Services</a>.
			The goal is to avoid appointment cancellations due to missing documents.
			Your answers are not stored or evaluated. 
			<br/><br/>
			Do you have questions or helpful tips on how we can improve this application? 
			<a class="font-bold hover:underline text-berlin-blue-500"
				href="https://citylabberlin.typeform.com/to/kCdnCgvC?product_id=checklist"
				target="_blank"
				rel="noopener noreferrer"
			>Then feel free to answer a few questions for us</a>. `,

	"navigation.title": "Choose a service",
	"navigation.description": "Find out which documents you need.",
	"navigation.button": "Start",
	"navigation.id-card": "Apply for ID card",
	"navigation.certificate-of-conduct": "Apply for certificate of conduct",
	"navigation.residence-registration":
		"Register residence – sole or main dwelling",
	"navigation.startpage": "Home",
	"navigation.startpage.mobile": "Back to home",
	"footer.toTheTop": "Back to top",
	"footer.button.name.expand": "Show more",
	"footer.button.name.collapse": "Show less",
	"upperFooter.checklist.title": "Document-Check",
	"upperFooter.checklist.about": "About the project",
	"upperFooter.checklist.impressum": "Imprint",
	"upperFooter.checklist.dataprivacy": "Privacy policy",
	"upperFooter.checklist.accessibility": "Accessibility statement",

	"language-select": "Select language",
	"logo.t2": "A project by",
	"logo.t3": "In cooperation with",
	"logo.t4": "Funded by",

	yes: "Yes",
	no: "No",
	"button.download": "Download",
	"button.back": "Back",
	"button.next": "Next",
	"button.cancel": "Cancel",
	"button.fillOutAgain": "Fill out again",
	"button.next.tooltip": "Please answer the question first.",
	"button.print": "Print list",
	"button.finish": "Finish",
	"title.residence-registration": "Register a residence",
	"title.id-card": "Apply for an ID card",
	"title.certificate-of-conduct": "Apply for a certificate of conduct",
	"title.hint": "Note:",

	"link.cancelAppointment.label": "Cancel appointment",

	/*
	Feedback
	*/
	"feedback.question": "Do you have feedback on the application?",
	"feedback.link":
		"https://citylabberlin.typeform.com/to/kCdnCgvC?product_id=checklist",
	"feedback.button.fillout": "Fill out survey",
	"feedback.button.no": "No, thanks",

	/*
	Flow Residence Registration
	*/
	"first-registration.q1": "Are you registering in Berlin for the first time?",
	"first-registration.q2": "Are you married?",
	"first-registration.q3": "Do you want to register your spouse as well?",
	"first-registration.q4": "Do you have children under 18 years old?",
	"first-registration.q5": "Is a child moving in with you?",
	"first-registration.q6": "Are more than two people moving in total?",
	"nationality.q1": "Do you have German citizenship?",
	"nationality.q2": "Are you over 16 years old?",
	"nationality.q3": "Are you from an EU country?",
	"nationality.q4": "Are you under 16 years old?",
	"nationality.q5": "Do you have refugee status?",
	"nationality.q5.hint":
		"You may need to register via the Refugee Citizens' Office. Find more information here:",
	"other-residence.q1": "Are you registered at another residence?",
	"other-residence.q2": "Do you live abroad?",
	"other-residence.q3": "Will you stay in Berlin for more than three months?",
	"other-residence.q3.hint":
		"If you stay for no longer than three months in Berlin, you do not need to register.",
	"other-residence.q3.hint.link.label": "Cancel appointment",
	"other-residence.q4": "Will you stay in Berlin for more than six months?",
	"other-residence.q4.hint":
		"If you stay for no longer than six months in Berlin, you do not need to register.",
	"other-residence.q4.hint.link.label": "Cancel appointment",

	/*
	Flow ID Card
	*/
	"registered-in-berlin.q1": "Are you registered in Berlin?",
	"registered-in-berlin.q2":
		"Are you currently in Berlin, for example because you live here temporarily, are on vacation, or are homeless?",
	"registered-in-berlin.q2.hint.yes": `It is also possible to apply for an ID card in Berlin. The documents can only be applied for at the State Office for Citizen and Regulatory Affairs. More information can be found <a class="font-bold hover:underline text-berlin-blue-500"
			href="https://service.berlin.de/dienstleistung/326550/"
			target="_blank"
			rel="noopener noreferrer"
		>here</a>.`,
	"registered-in-berlin.q2.hint.no": `You cannot currently apply for an ID card in Berlin. <a href="https://service.berlin.de/terminvereinbarung/termin/manage/" target="_blank" class="text-blue-700 hover:underline visited:text-purple-500">Cancel appointment</a>.`,
	"id-for-child.q1": "Are you applying for the ID card for a minor?",
	"id-for-child.q2":
		"Are all legal guardians (in most cases parents with custody rights) present at the appointment at the citizens' office?",
	"id-for-child.q3": "Are the legal guardians married?",
	"previous-id.q1":
		"Have you previously held an official identification document (e.g., ID card or passport)?",
	"previous-id.q2": "Has your name changed since the last issue?",
	"previous-id.q3":
		"Have you been naturalized and are you applying for a German ID card for the first time?",

	/*
	Flow Certificate of Conduct
	*/
	"applicantDetails.q1": "Are you at least 14 years old?",
	"applicantDetails.q1.hint": `You can only apply for a certificate of conduct from the age of 14. <a href="https://service.berlin.de/terminvereinbarung/termin/manage/" target="_blank" class="text-blue-700 hover:underline visited:text-purple-500">Cancel appointment</a>.`,
	"applicantDetails.q2": "Are you registered in Berlin?",
	"applicantDetails.q3": "Do you live in Berlin temporarily?",
	"applicantDetails.q3.hint": `Please apply for your certificate of conduct online. <a class="font-bold hover:underline text-berlin-blue-500"
			href="https://www.fuehrungszeugnis.bund.de/"
			target="_blank"
			rel="noopener noreferrer"
		>Link to the online application</a>.`,
	"certificate-of-conduct-details.q1":
		"Are you applying for the certificate of conduct for yourself?",
	"certificate-of-conduct-details.q2":
		"Are you applying for the certificate of conduct as a legal representative?",
	"certificate-of-conduct-details.q2.hint": `You can only apply for the certificate of conduct if you are the legal representative. <a href="https://service.berlin.de/terminvereinbarung/termin/manage/" target="_blank" class="text-blue-700 hover:underline visited:text-purple-500">Cancel appointment</a>.`,
	"certificate-of-conduct-details.q3":
		"Are you applying for an extended certificate of conduct?",
	"certificate-of-conduct-details.q4":
		"Are you applying for an official certificate of conduct?",

	/*
	Checklist Overview
	*/
	"overview.title": "Your personal checklist has been created",
	"overview.text.1":
		"We have compiled an individual checklist of all the documents you need for your appointment at the citizens' office. Your information remains stored locally in the browser. You can access your list again at any time, even later via a bookmark.",
	"overview.title.2": "How to use the Document Check:",
	"overview.text.2": `
	<ul class="list-decimal pl-5 lg:pl-7 w-9/10">
		<li>Download the required documents using the download icon.</li>
		<li>Check off the documents you have already completed.</li>
		<li>Bring the printed documents with you to your appointment.</li>
	</ul>`,
	"overview.feedback": "Feel free to answer us a few questions.",
	"overview.id-card.hint.title": "Note:",
	"overview.id-card.hint.text":
		"From May 1, 2025, biometric passport photos will only be created and submitted digitally in certified photo studios or citizens' offices. A fee of €6 per image applies, payable exclusively by card.",
	"overview.forms-certificate-of-conduct.hint.title": "Note:",
	"overview.forms-certificate-of-conduct.hint.text": `You can also conveniently apply for the certificate of conduct <a href=\"https://service.berlin.de/dienstleistung/120926/\" target=\"_blank\" class=\"text-blue-700 hover:underline visited:text-purple-500\">online</a>.`,

	registrationForm: "Registration form",
	movingInConfirmation: "Confirmation of move-in from the landlord",
	birthCertificate: "Birth certificate",
	marriageCertificate: "Marriage certificate",
	idDocumentForSpouse: "ID card or passport of the spouse",
	childBirthCertificate: "Child's birth certificate",
	custodyDeclaration: "Custody declaration",
	idDocumentForChild: "Child's ID card, passport, or child's passport",
	guardianConsent: "Consent form from the child's guardians",
	additionalRegistrationForm: "Additional registration form",
	germanIdOrPassportOrChildPassport:
		"Your own ID card, passport, or child's passport",
	germanIdOrPassport: "Your own ID card or passport",
	confirmationOfCustodian: "Consent form from your guardian",
	euIdOrPassportOrReplacement:
		"European ID card, passport, or passport replacement documents",
	nonEuIdOrPassportOrReplacement: "Passport or passport replacement documents",
	supplement: "Supplement for registration / main dwelling declaration",

	idOfParents: "Parents' identification documents",
	bringChild: "Bring child",
	proofOfCustody:
		"Proof of custody (e.g., certified extract from the custody register from the Youth Welfare Office)",
	consentOfCustodian: "Consent form from the non-present guardian",
	copyOfID:
		"Copy of ID (or passport or national passport) of the non-present parent for signature verification",
	newOrOldID: "Valid or old ID card or passport",
	birthCertificateOrPartnershipCertificate:
		"Birth certificate, marriage certificate, or civil partnership certificate",
	passportOrforeignID:
		"Passport or ID card of the state of previous nationality or an identity certificate from the State Office for Immigration (LEA).",
	naturalizationCertificate: "Naturalization certificate",

	birthCertificateOfRepresantative:
		"Birth certificate of the person represented",
	carerId: "Carer ID (if not a custodian)",
	idOfLegalRepresantative: "Identification document of legal representative",
	idDocument: "Identification document",
	writtenRequestAuthorized:
		"Written request from an authorized agency (extended certificate of conduct)",
	nameAndAddressOfAuthority: "Name and address of the authority",
	fileNumber: "File reference number",
	purposeOfApplication:
		"Purpose of application (e.g., employment in the public service)",
	letterOrEmailFromAuthority: "Letter or email from the authority",

	/*
	About
	*/
	"about.title": "About the Document Check project",
	"about.text.p1":
		"Berlin citizens' offices cite missing or forgotten required documents as the most common reason for appointment cancellations. By answering a few questions about your personal situation, the application generates an individual checklist that precisely shows which documents are needed. This makes your visit to the authority more efficient and stress-free.",
	"about.text.p2": `With the Document Check, you can prepare the 
	<a class="font-bold hover:underline text-berlin-blue-500"
		href="https://service.berlin.de/dienstleistung/120686/"
		target="_blank"
		rel="noopener noreferrer"
	>registration of a main residence</a>, 
	<a class="font-bold hover:underline text-berlin-blue-500"
		href="https://service.berlin.de/dienstleistung/120703/"
		target="_blank"
		rel="noopener noreferrer"
	>application for an ID card</a> and a 
	<a class="font-bold hover:underline text-berlin-blue-500"
		href="https://service.berlin.de/dienstleistung/120926/"
		target="_blank"
		rel="noopener noreferrer"
	>certificate of conduct</a> at the Schlesische Strasse citizens' office.
	The application was developed in close cooperation with the 
	<a class="font-bold hover:underline text-berlin-blue-500"
		href="https://www.berlin.de/ba-friedrichshain-kreuzberg/politik-und-verwaltung/aemter/amt-fuer-buergerdienste/buergeramt-der-zukunft/buergeramt-der-zukunft-1461966.php"
		target="_blank"
		rel="noopener noreferrer"
	>Friedrichshain-Kreuzberg District Office of Berlin, Department of Citizen Services</a> to present the necessary information clearly and purposefully. Thanks to availability in seven languages, the checklist is easily accessible and usable for Berlin citizens.`,
	"about.text.p3": `If you want a look behind the scenes, you can find the open source code on 
	<a class="font-bold hover:underline text-berlin-blue-500"
		href="https://github.com/technologiestiftung/checkliste"
		target="_blank"
		rel="noopener noreferrer"
	>GitHub</a>.`,
	"about.text.p4": "Good luck preparing for your visit to the authorities!",

	/*
	Data Privacy
	*/
	"dataPrivacy.title": "Privacy Policy for the “Document Check” Prototype",
	"dataPrivacy.subtitle":
		"This privacy policy applies exclusively to the “Document Check” prototype.",
	"dataPrivacy.title.p1": "1. General Information",
	"dataPrivacy.subtitle.p1.1": "1.1 Purpose of this Privacy Policy",
	"dataPrivacy.text.p1.1": `This privacy policy is intended to inform you about the type, scope, and purpose of the data collected, used, and processed by the Technologiestiftung Berlin, as well as your rights in relation to data protection. Technologiestiftung Berlin is aware of its responsibility to protect personal data and is especially committed to safeguarding your privacy.   
<br/><br/>
Personal data within the meaning of the General Data Protection Regulation (GDPR – Regulation (EU) 2016/679) refers to any information by which an individual can be identified. In the course of applying the GDPR since May 25, 2018, Technologiestiftung Berlin has implemented numerous measures to ensure the protection of your data and to minimize processing based on its own interests.`,

	"dataPrivacy.subtitle.p1.2": "1.2 Controller",
	"dataPrivacy.text.p1.2": `The controller within the meaning of the GDPR, other EU member‑state data protection laws, and other data‑protection regulations is Technologiestiftung Berlin.  
<br/><br/>
Technologiestiftung Berlin<br/>
Grunewaldstraße 61–62<br/>
10825 Berlin<br/>
Germany<br/><br/>

Tel.: 030 20 96 99 90  <br/>
E‑Mail: info(at)ts.berlin  <br/>
Website: <a class="font-bold hover:underline text-berlin-blue-500"
         href="https://www.technologiestiftung-berlin.de/de/stiftung/"
         target="_blank"
         rel="noopener noreferrer"
        >Technologiestiftung Berlin</a>  <br/><br/>

For questions and information on data protection you can reach our Data Protection Officer at:  <br/><br/>

Michael Scherer  <br/>
Technologiestiftung Berlin  <br/>
Grunewaldstraße 61–62  <br/>
10825 Berlin  <br/>
Germany  <br/><br/>

Tel.: 030 20 96 99 951  <br/>
E‑Mail: <a class="font-bold hover:underline text-berlin-blue-500"
         href="mailto:datenschutz@ts.berlin"
         target="_blank"
         rel="noopener noreferrer"
        >datenschutz[at]ts.berlin</a>`,

	"dataPrivacy.subtitle.p1.3":
		"1.3 General Purpose of Data Collection, Processing, and Use",
	"dataPrivacy.text.p1.3": `The <a class="font-bold hover:underline text-berlin-blue-500"
                             href="https://www.technologiestiftung-berlin.de/de/stiftung/"
                             target="_blank"
                             rel="noopener noreferrer"
                           >Technologiestiftung Berlin</a> is a legally‑competent non‑profit foundation under civil law. In the course of its activities, it is necessary to handle personal data.  
<br/><br/>
Personal data is collected, processed, and used for the following purposes:  
<br/><br/>
<ul class="list-disc pl-12 w-9/10">
  <li>Information about Technologiestiftung and invitations to its activities</li>
  <li>Support for business partners and prospects</li>
  <li>Personnel management</li>
  <li>Internal and external accounting</li>
  <li>Application and administration of public and private funds</li>
  <li>Management of its own project funding</li>
</ul>
<br/>
In certain cases, data may be passed on to third parties for processing under legal requirements or legitimate interest. These may include:  
<br/><br/>
<ul class="list-disc pl-12 w-9/10">
  <li>Service providers for order processing under Art. 29 and Art. 6 (1)(a) and (f) GDPR</li>
  <li>Internal departments, insofar as they require data to fulfil their duties under Art. 6 (1)(a) and (f) GDPR</li>
  <li>Public authorities, if mandatory legal regulations require it under Art. 6 (1)(c) GDPR</li>
  <li>External bodies to properly perform contracts under Art. 6 (1)(b) GDPR</li>
</ul>`,

	"dataPrivacy.subtitle.p1.4": "1.4 Access, Correction and Withdrawal",
	"dataPrivacy.text.p1.4": `As a data subject whose personal data may have been collected by Technologiestiftung Berlin, you have the right to request full information about the personal data stored by us, including all records, purposes, and storage periods.   
<br/><br/>
You also have the right to have inaccurate data corrected. If you have given consent for data processing, you may withdraw it at any time.  
<br/><br/>
In such cases, please contact the Data Protection Officer named in section 1.2.`,

	"dataPrivacy.subtitle.p1.5": "1.5 Deletion and Blocking of Personal Data",
	"dataPrivacy.text.p1.5": `Personal data is generally stored and processed only for as long as necessary for its intended purpose. Once that purpose ceases to apply, data is deleted at regular intervals.  
<br/><br/>
You may contact us at any time to request deletion or blocking of your personal data. Please address such requests to the Data Protection Officer named in section 1.2.  
<br/><br/>
A blocking order means that Technologiestiftung Berlin may only use your data for purposes you have explicitly specified; the record itself remains in our systems.  
<br/><br/>
Please note that Technologiestiftung Berlin is bound by storage periods mandated by European directives, regulations, and other legal requirements. In such cases, we will inform you and delete the data once statutory retention periods have expired.`,

	"dataPrivacy.title.p2": "2. Relevant Services",
	"dataPrivacy.subtitle.p2.1": "2.1 Cookies",
	"dataPrivacy.text.p2.1": `Cookies are data stored on your device when you visit websites, and they save certain data and settings during interactions with our site.   
<br/><br/>
You may disable or restrict cookies via your browser settings or with extensions like Ghostery or uBlock. Check your browser’s manufacturer documentation for details.  
<br/><br/>
Aside from technically necessary cookies, we do not use tracking or analytics cookies. Marketing cookies from YouTube may apply, see section 2.7 below.  
<br/><br/>
On first use of our online services, you may choose whether to allow Technologiestiftung Berlin to set cookies to improve the online offering or not.`,
	"dataPrivacy.subtitle.p2.2": "2.2 Web Analytics Tool Matomo",
	"dataPrivacy.text.p2.2": `For detailed visitor statistics, we use the Matomo web analytics tool (formerly Piwik), developed by Innocraft (InnoCraft Ltd, 150 Willis St, 6011 Wellington, New Zealand).  
The software runs on a server located within Germany and does not transmit data outside the EU.  
<br/><br/>
Matomo processes data pseudonymously and does not use cookies. Data is anonymized before being presented to us, so we cannot identify individual users.  
<br/><br/>
The following information is available to us:  
<br/><br/>
<ul class="list-disc pl-12 w-9/10">
  <li>Page views, link clicks, downloads, entry and exit pages, and timestamps</li>
  <li>Device and settings information: manufacturer/brand, model/version, device type, screen resolution, browser language</li>
  <li>Location data: country of access</li>
</ul>
<br/>
The purpose of processing is to detect and fix errors on our site and to optimize content based on visitor needs—legitimate interests under Art. 6 (1)(f) GDPR. Only Technologiestiftung Berlin has access to this data, and we do not share it with third parties.  
<br/><br/>
Matomo is open‑source and upholds high standards to prevent data misuse. More information can be found on the Matomo website.  
<br/><br/>
For questions, contact the Data Protection Officer named in section 1.2.`,
};

export default en;
