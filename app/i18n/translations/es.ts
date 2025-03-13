const es = {
	dir: "ltr",
	ar: "العربية",
	de: "Deutsch",
	en: "English",
	es: "Español",
	fr: "Français",
	tr: "Türkçe",
	ru: "Русский",
	"start.mobile": "Página principal",
	"start.desktop": "Página principal",
	title: "Bienvenido a la lista de control",
	yes: "Sí",
	no: "No",
	download: "Descargar",
	"language-select": "Seleccionar idioma",
	"your-appointment": "Tu cita",
	address: "Dirección",
	"plan-route": "Planificar ruta",
	print: "Imprimir página",
	"button.back": "Atrás",
	"button.next": "Siguiente",
	"button.next.tooltip": "Por favor, responde a la pregunta primero.",
	"intro.p2": "¿Aún no tienes una cita?",
	"intro.p2.link": "Reservar una cita",
	"feedback.intro":
		"Esta aplicación es un prototipo del CityLAB Berlin y actualmente se está utilizando para una prueba.",
	"feedback.question": "¿Qué te parece la aplicación?",
	"feedback.link":
		"https://citylabberlin.typeform.com/to/wkhvLJyN?product_id=checklist",
	"feedback.link.label": "Por favor, responda a algunas preguntas.",
	"first-registration.q1": "¿Es tu primera vez registrándote en Berlín?",
	"first-registration.q1.tooltip":
		"Si es así, pueden ser necesarios documentos como el certificado de nacimiento o de matrimonio.",
	"first-registration.q2": "¿Estás casado/a?",
	"first-registration.q2.tooltip":
		"Si es así, se debe presentar el certificado de matrimonio.",
	"first-registration.q3": "¿Quieres registrar también a tu cónyuge?",
	"first-registration.q3.tooltip":
		"Si es así, necesitarás un documento de identidad o pasaporte de tu cónyuge.",
	"first-registration.q4": "¿Tienes hijos menores de 18 años?",
	"first-registration.q4.tooltip":
		"Si es así, se deben presentar el certificado de nacimiento y la declaración de custodia para cada niño.",
	"first-registration.q5": "¿Se muda un niño contigo?",
	"first-registration.q5.tooltip":
		"Si es así, se deben presentar la autorización de los tutores legales y el documento de identidad, pasaporte o pasaporte infantil para cada niño.",
	"first-registration.q6": "¿Se mudan más de dos personas en total?",
	"first-registration.q6.tooltip":
		"Si es así, se debe completar un formulario de registro adicional.",
	"nationality.q1": "¿Tienes la nacionalidad alemana?",
	"nationality.q1.tooltip":
		"Si es así, se debe presentar el documento de identidad o pasaporte.",
	"nationality.q2": "¿Tienes más de 16 años?",
	"nationality.q2.tooltip":
		"Si es así, se debe presentar la autorización de los tutores legales.",
	"nationality.q3": "¿Procedes de un país de la UE?",
	"nationality.q3.tooltip":
		"Si es así, se debe presentar tu tarjeta de identidad, pasaporte o documentos de viaje sustitutorios.",
	"nationality.q4": "¿Tienes más de 16 años?",
	"nationality.q4.tooltip":
		"Si es así, se debe presentar la autorización del tutor legal.",
	"nationality.q5": "¿Eres refugiado/a?",
	"nationality.q5.tooltip":
		"Si eres refugiado/a, es posible que la oficina de ciudadanos refugiados sea responsable de tu registro.",
	"nationality.q5.hint":
		"Nota: Es posible que tu registro deba realizarse a través de la oficina de ciudadanos refugiados. Aquí puedes encontrar más información:",
	"other-residence.q1": "¿Permanecerás registrado/a en otro apartamento?",
	"other-residence.q1.tooltip":
		"Si es así, necesitarás un suplemento de registro/declaración de residencia principal.",
	"other-residence.q2": "¿Vives en el extranjero?",
	"other-residence.q2.tooltip":
		"Dependiendo de cuánto tiempo te quedes, es posible que no necesites registrarte.",
	"other-residence.q3": "¿Planeas quedarte en Berlín más de tres meses?",
	"other-residence.q3.tooltip": "Si no, no es necesario el registro.",
	"other-residence.q3.hint":
		"Nota: Si te quedas en Berlín menos de tres meses, no necesitas registrarte.",
	"other-residence.q3.hint.link.label": "Cancelar cita",
	"other-residence.q4": "¿Planeas quedarte en Berlín más de seis meses?",
	"other-residence.q4.tooltip": "Si no, no es necesario el registro.",
	"other-residence.q4.hint":
		"Nota: Si te quedas en Berlín menos de seis meses, no necesitas registrarte.",
	"other-residence.q4.hint.link.label": "Cancelar cita",
	"overview.title": "Tu Lista de Documentos",
	"overview.text":
		"Aquí tienes una lista de documentos que necesitarás para registrar tu nueva dirección. Puedes usar esta lista para prepararte para tu cita. Marca los documentos que ya tienes. Si te faltan documentos, vuelve más tarde - ¡tu progreso se guardará! Por favor, trae todos los documentos <b>completados</b>, <b>firmados</b> e <b>impresos</b> a tu cita.",
	registrationForm: "Formulario de Registro",
	"registrationForm.tooltip": "Este documento siempre es necesario.",
	movingInConfirmation: "Confirmación de Mudanza del Arrendador/Propietario",
	"movingInConfirmation.tooltip": "Este documento siempre es necesario.",
	birthCertificate: "Certificado de Nacimiento",
	"birthCertificate.tooltip":
		"Este documento es necesario porque te estás registrando por primera vez en Berlín.",
	marriageCertificate: "Certificado de Matrimonio",
	"marriageCertificate.tooltip":
		"Este documento es necesario porque estás casado/a.",
	idDocumentForSpouse: "Documento de Identidad o Pasaporte de tu Cónyuge",
	"idDocumentForSpouse.tooltip":
		"Este documento es necesario porque estás registrando también a tu cónyuge.",
	childBirthCertificate: "Certificado de Nacimiento de tu(s) Hijo(s)",
	"childBirthCertificate.tooltip":
		"Este documento es necesario porque tienes hijo(s).",
	custodyDeclaration: "Declaración de Custodia",
	"custodyDeclaration.tooltip":
		"Este documento es necesario porque tienes hijo(s).",
	idDocumentForChild:
		"Documento de Identidad, Pasaporte o Pasaporte Infantil del Niño/los Niños",
	"idDocumentForChild.tooltip":
		"Este documento es necesario porque estás registrando también a tu(s) hijo(s).",
	guardianConsent: "Consentimiento de los Tutores Legales del Niño/los Niños",
	"guardianConsent.tooltip":
		"Este documento es necesario porque estás registrando también a tu(s) hijo(s).",
	additionalRegistrationForm: "Formulario de Registro Adicional",
	"additionalRegistrationForm.tooltip":
		"Este documento es necesario porque estás registrando a más de dos personas.",
	germanIdOrPassportOrChildPassport:
		"Tu Propio Documento de Identidad, Pasaporte o Pasaporte Infantil",
	"germanIdOrPassportOrChildPassport.tooltip":
		"Este documento es necesario para identificarte.",
	germanIdOrPassport: "Tu Propio Documento de Identidad o Pasaporte",
	"germanIdOrPassport.tooltip":
		"Este documento es necesario para identificarte.",
	confirmationOfCustodian: "Consentimiento de Tus Tutores Legales",
	"confirmationOfCustodian.tooltip":
		"Este documento es necesario porque tienes menos de 16 años.",
	euIdOrPassportOrReplacement:
		"Tarjeta de Identidad Europea, Pasaporte o Documentos Sustitutivos de Pasaporte",
	"euIdOrPassportOrReplacement.tooltip":
		"Este documento es necesario para identificarte.",
	nonEuIdOrPassportOrReplacement:
		"Pasaporte o Documentos Sustitutivos de Pasaporte",
	"nonEuIdOrPassportOrReplacement.tooltip":
		"Este documento es necesario para identificarte.",
	supplement: "Suplemento de Registro/Declaración de Residencia Principal",
	"supplement.tooltip":
		"Este documento es necesario porque permanecerás registrado/a en otro apartamento.",
	"logo.t1": "Realizado por",
	"logo.t2": "Un proyecto de",
	"logo.t3": "Con el apoyo de",
	dataPrivacy: "Protección de Datos",
	imprint: "Aviso Legal",
	"imprint.link": "https://www.technologiestiftung-berlin.de/impressum",
};

export default es;
