const es = {
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
	title: "Bienvenido a la Verificación de Documentos",
	selectLanguage: "Seleccione su idioma:",
	intro:
		"Esta aplicación le ayuda a preparar de forma óptima su cita en la oficina de atención al ciudadano. Responda unas breves preguntas y crearemos una lista de verificación individual con todos los documentos que necesita para su solicitud. Así evitará tiempos de espera innecesarios y se asegurará de llevar todo lo importante. Su información permanece anónima y se almacena exclusivamente localmente en su navegador – no se envía ningún dato a la oficina de atención al ciudadano ni a terceros.",
	context: `Esta aplicación es un prototipo de <a class="font-bold hover:underline text-berlin-blue-500 visited:text-purple-500"
					href="https://citylab-berlin.org/de/start/"
					target="_blank"
					rel="noopener noreferrer"
				> CityLAB Berlin</a> y la 
			<a class="font-bold hover:underline text-berlin-blue-500 visited:text-purple-500"
				href="https://www.berlin.de/ba-friedrichshain-kreuzberg/politik-und-verwaltung/aemter/amt-fuer-buergerdienste/buergeramt-der-zukunft/buergeramt-der-zukunft-1461966.php"
				target="_blank"
				rel="noopener noreferrer"
			>Oficina de Distrito Friedrichshain-Kreuzberg de Berlín, Departamento de Servicios al Ciudadano</a>.
			El objetivo es evitar cancelaciones de citas debido a documentos faltantes.
			Sus respuestas no se almacenan ni se evalúan.
			<br/><br/>
			¿Tiene preguntas o sugerencias útiles sobre cómo podemos mejorar esta aplicación? 
			<a class="font-bold hover:underline text-berlin-blue-500 visited:text-purple-500"
				href="https://citylabberlin.typeform.com/to/kCdnCgvC?product_id=checklist"
				target="_blank"
				rel="noopener noreferrer"
			>Entonces no dude en responder algunas preguntas para nosotros</a>. `,

	"navigation.title": "Elija un servicio",
	"navigation.description": "Descubra qué documentos necesita.",
	"navigation.button": "Comenzar",
	"navigation.id-card": "Solicitar documento de identidad",
	"navigation.certificate-of-conduct": "Solicitar certificado de conducta",
	"navigation.residence-registration":
		"Registrar residencia – vivienda única o principal",
	"navigation.startpage": "Inicio",
	"navigation.startpage.mobile": "Volver al inicio",
	"footer.toTheTop": "Volver arriba",
	"footer.button.name.expand": "Mostrar más",
	"footer.button.name.collapse": "Mostrar menos",
	"upperFooter.checklist.title": "Comprobación de documentos",
	"upperFooter.checklist.about": "Acerca del proyecto",
	"upperFooter.checklist.impressum": "Aviso legal",
	"upperFooter.checklist.dataprivacy": "Política de privacidad",
	"upperFooter.checklist.accessibility": "Declaración de accesibilidad",

	"language-select": "Seleccionar idioma",
	"logo.t2": "Un proyecto de",
	"logo.t3": "En cooperación con",
	"logo.t4": "Financiado por",

	yes: "Sí",
	no: "No",
	"button.download": "Descargar",
	"button.back": "Atrás",
	"button.next": "Siguiente",
	"button.cancel": "Cancelar",
	"button.fillOutAgain": "Rellenar de nuevo",
	"button.next.tooltip": "Por favor responda primero a la pregunta.",
	"button.print": "Imprimir lista",
	"button.finish": "Finalizar",
	"title.residence-registration": "Registrar una residencia",
	"title.id-card": "Solicitar documento de identidad",
	"title.certificate-of-conduct": "Solicitar certificado de conducta",
	"title.hint": "Nota:",

	"link.cancelAppointment.label": "Cancelar cita",

	/*
	Feedback
	*/
	"feedback.question": "¿Tiene comentarios sobre la aplicación?",
	"feedback.link":
		"https://citylabberlin.typeform.com/to/kCdnCgvC?product_id=checklist",
	"feedback.button.fillout": "Rellenar encuesta",
	"feedback.button.no": "No, gracias",

	/*
	Flow Residence Registration
	*/
	"first-registration.q1": "¿Se está registrando por primera vez en Berlín?",
	"first-registration.q2": "¿Está casado?",
	"first-registration.q3": "¿Desea registrar también a su cónyuge?",
	"first-registration.q4": "¿Tiene hijos menores de 18 años?",
	"first-registration.q5": "¿Se mudará un niño a su domicilio?",
	"first-registration.q6": "¿Se mudarán más de dos personas en total?",
	"nationality.q1": "¿Tiene la nacionalidad alemana?",
	"nationality.q2": "¿Tiene más de 16 años?",
	"nationality.q3": "¿Es de un país de la UE?",
	"nationality.q4": "¿Es menor de 16 años?",
	"nationality.q5": "¿Tiene estatus de refugiado?",
	"nationality.q5.hint":
		"Es posible que necesite registrarse a través de la Oficina de Ciudadanos para Refugiados. Encuentre más información aquí:",
	"other-residence.q1": "¿Está registrado en otra residencia?",
	"other-residence.q2": "¿Vive en el extranjero?",
	"other-residence.q3": "¿Se quedará en Berlín por más de tres meses?",
	"other-residence.q3.hint":
		"Si permanece en Berlín durante no más de tres meses, no necesita registrarse.",
	"other-residence.q3.hint.link.label": "Cancelar cita",
	"other-residence.q4": "¿Se quedará en Berlín por más de seis meses?",
	"other-residence.q4.hint":
		"Si permanece en Berlín durante no más de seis meses, no necesita registrarse.",
	"other-residence.q4.hint.link.label": "Cancelar cita",

	/*
	Flow ID Card
	*/
	"registered-in-berlin.q1": "¿Está registrado en Berlín?",
	"registered-in-berlin.q2":
		"¿Se encuentra actualmente en Berlín, por ejemplo porque vive aquí temporalmente, está de vacaciones o está sin hogar?",
	"registered-in-berlin.q2.hint.yes": `También es posible solicitar un documento de identidad en Berlín. Los documentos solo pueden tramitarse en la Oficina Estatal de Asuntos Ciudadanos y Reglamentarios. Más información <a class="font-bold hover:underline text-berlin-blue-500 visited:text-purple-500"
				href="https://service.berlin.de/dienstleistung/326550/"
				target="_blank"
				rel="noopener noreferrer"
			>aqu&iacute;</a>.`,
	"registered-in-berlin.q2.hint.no": `Actualmente no puede solicitar un documento de identidad en Berlín. <a href="https://service.berlin.de/terminvereinbarung/termin/manage/" target="_blank" class="font-bold hover:underline text-berlin-blue-500 visited:text-purple-500">Cancelar cita</a>.`,
	"id-for-child.q1":
		"¿Está solicitando el documento de identidad para un menor?",
	"id-for-child.q2":
		"¿Están todos los tutores legales (en la mayoría de los casos los padres con derechos de custodia) presentes en la cita en la oficina de atención al ciudadano?",
	"id-for-child.q3": "¿Están casados los tutores legales?",
	"previous-id.q1":
		"¿Ha tenido anteriormente un documento oficial de identificación (por ejemplo, DNI o pasaporte)?",
	"previous-id.q2": "¿Ha cambiado su nombre desde la última emisión?",
	"previous-id.q3":
		"¿Se ha naturalizado y esta es la primera vez que solicita un DNI alemán?",

	/*
	Flow Certificate of Conduct
	*/
	"applicantDetails.q1": "¿Tienes al menos 14 años?",
	"applicantDetails.q1.hint": `Solo puedes solicitar un certificado de antecedentes a partir de los 14 años. <a href="https://service.berlin.de/terminvereinbarung/termin/manage/" target="_blank" class="font-bold hover:underline text-berlin-blue-500 visited:text-purple-500">Cancelar cita</a>.`,
	"applicantDetails.q2": "¿Estás registrado en Berlín?",
	"applicantDetails.q3": "¿Vives en Berlín de forma temporal?",
	"applicantDetails.q3.hint": `Por favor, solicita tu certificado de antecedentes en línea. <a class="font-bold hover:underline text-berlin-blue-500 visited:text-purple-500"
			href="https://www.fuehrungszeugnis.bund.de/"
			target="_blank"
			rel="noopener noreferrer"
		>Enlace a la solicitud en línea</a>.`,
	"certificate-of-conduct-details.q1":
		"¿Solicitas el certificado de antecedentes para ti mismo?",
	"certificate-of-conduct-details.q2":
		"¿Solicitas el certificado de antecedentes como representante legal?",
	"certificate-of-conduct-details.q2.hint": `Solo puedes solicitar el certificado de antecedentes si eres el representante legal. <a href="https://service.berlin.de/terminvereinbarung/termin/manage/" target="_blank" class="font-bold hover:underline text-berlin-blue-500 visited:text-purple-500">Cancelar cita</a>.`,
	"certificate-of-conduct-details.q3":
		"¿Solicitas un certificado de antecedentes extendido?",
	"certificate-of-conduct-details.q4":
		"¿Solicitas un certificado de antecedentes oficial?",

	/*
	Checklist Overview
	*/
	"overview.title": "Tu lista de verificación personalizada ha sido creada",
	"overview.text.1":
		"Hemos compilado una lista de verificación individual de todos los documentos que necesitas para tu cita en la oficina de atención al ciudadano. Tu información permanece almacenada localmente en el navegador. Puedes acceder a tu lista en cualquier momento, incluso más tarde mediante un marcador.",
	"overview.title.2": "Cómo usar la comprobación de documentos:",
	"overview.text.2": `
	<ul class="list-decimal pl-5 lg:pl-7 w-9/10">
		<li>Descarga los documentos requeridos usando el icono de descarga.</li>
		<li>Marca los documentos que ya hayas completado.</li>
		<li>Lleva los documentos impresos contigo a tu cita.</li>
	</ul>`,
	"overview.feedback": "No dudes en respondernos algunas preguntas.",
	"overview.id-card.hint.text":
		"A partir del 1 de mayo de 2025, las fotografías biométricas para pasaporte se crearán y transmitirán digitalmente únicamente en estudios fotográficos certificados o en las oficinas de atención ciudadana. Se aplicará una tasa de 6 € por foto, pagadera únicamente con tarjeta.",
	"overview.forms-certificate-of-conduct.hint.text":
		'También puede solicitar el certificado de conducta cómodamente <a href="https://service.berlin.de/dienstleistung/120926/" target="_blank" class="font-bold hover:underline text-berlin-blue-500 visited:text-purple-500">en línea</a>.',
	"overview.forms-residence-registration.hint.text":
		'También puede realizar su registro de residencia <a href="https://service.berlin.de/dienstleistung/120686/" target="_blank" class="font-bold hover:underline text-berlin-blue-500 visited:text-purple-500">en línea</a>. Si elige registrarse en línea, por favor cancele su cita <a href="https://service.berlin.de/terminvereinbarung/termin/manage/" target="_blank" class="font-bold hover:underline text-berlin-blue-500 visited:text-purple-500">aquí</a>.',
	registrationForm: "Formulario de registro",
	movingInConfirmation: "Confirmación de mudanza del arrendador",
	birthCertificate: "Certificado de nacimiento",
	marriageCertificate: "Certificado de matrimonio",
	idDocumentForSpouse: "Documento de identidad o pasaporte del cónyuge",
	childBirthCertificate: "Certificado de nacimiento del hijo",
	custodyDeclaration: "Declaración de custodia",
	idDocumentForChild: "DNI, pasaporte o pasaporte infantil del hijo",
	guardianConsent: "Formulario de consentimiento de los tutores del niño",
	additionalRegistrationForm: "Formulario de registro adicional",
	germanIdOrPassportOrChildPassport:
		"Tu propio DNI, pasaporte o pasaporte infantil",
	germanIdOrPassport: "Tu propio DNI o pasaporte",
	confirmationOfCustodian: "Formulario de consentimiento de tu tutor",
	euIdOrPassportOrReplacement:
		"DNI europeo, pasaporte o documentos de reemplazo de pasaporte",
	nonEuIdOrPassportOrReplacement:
		"Pasaporte o documentos de reemplazo de pasaporte",
	supplement:
		"Suplemento para la declaración de registro / domicilio principal",

	idOfParents: "Documentos de identificación de los padres",
	bringChild: "Llevar al niño",
	proofOfCustody:
		"Prueba de custodia (p.ej., extracto certificado del registro de custodia de la Oficina de Bienestar Juvenil)",
	consentOfCustodian: "Formulario de consentimiento del tutor ausente",
	copyOfID:
		"Copia del DNI (o pasaporte o pasaporte nacional) del progenitor ausente para verificación de firma",
	newOrOldID: "DNI válido o antiguo o pasaporte",
	birthCertificateOrPartnershipCertificate:
		"Certificado de nacimiento, certificado de matrimonio o certificado de pareja de hecho",
	passportOrforeignID:
		"Pasaporte o documento de identidad del país de la nacionalidad anterior o un certificado de identidad de la Oficina Estatal de Inmigración (LEA).",
	naturalizationCertificate: "Certificado de naturalización",

	birthCertificateOfRepresantative:
		"Certificado de nacimiento de la persona representada",
	carerId: "DNI de cuidador (si no es tutor)",
	idOfLegalRepresantative:
		"Documento de identificación del representante legal",
	idDocument: "Documento de identificación",
	writtenRequestAuthorized:
		"Solicitud por escrito de una agencia autorizada (certificado de antecedentes extendido)",
	nameAndAddressOfAuthority: "Nombre y dirección de la autoridad",
	fileNumber: "Número de referencia del archivo",
	purposeOfApplication:
		"Finalidad de la solicitud (p.ej., empleo en el servicio público)",
	letterOrEmailFromAuthority: "Carta o correo electrónico de la autoridad",

	/*
	About
	*/
	"about.title": "Acerca del proyecto Comprobación de Documentos",
	"about.text.p1":
		"Las oficinas de atención al ciudadano de Berlín mencionan la falta o olvido de documentos requeridos como la razón más común de cancelación de citas. Al responder unas pocas preguntas sobre tu situación personal, la aplicación genera una lista de verificación individual que muestra con precisión qué documentos se necesitan. Esto hace que tu visita a la autoridad sea más eficiente y sin estrés.",
	"about.text.p2": `Con la Comprobación de Documentos, puedes preparar la
	<a class="font-bold hover:underline text-berlin-blue-500 visited:text-purple-500"
		href="https://service.berlin.de/dienstleistung/120686/"
		target="_blank"
		rel="noopener noreferrer"
	>inscripción de residencia principal</a>,
	<a class="font-bold hover:underline text-berlin-blue-500 visited:text-purple-500"
		href="https://service.berlin.de/dienstleistung/120703/"
		target="_blank"
		rel="noopener noreferrer"
	>solicitud de DNI</a> y un
	<a class="font-bold hover:underline text-berlin-blue-500 visited:text-purple-500"
		href="https://service.berlin.de/dienstleistung/120926/"
		target="_blank"
		rel="noopener noreferrer"
	>certificado de antecedentes</a> en la oficina de atención al ciudadano de Schlesische Strasse.
	La aplicación se desarrolló en estrecha colaboración con la
	<a class="font-bold hover:underline text-berlin-blue-500 visited:text-purple-500"
		href="https://www.berlin.de/ba-friedrichshain-kreuzberg/politik-und-verwaltung/aemter/amt-fuer-buergerdienste/buergeramt-der-zukunft/buergeramt-der-zukunft-1461966.php"
		target="_blank"
		rel="noopener noreferrer"
	>Oficina del Distrito de Friedrichshain-Kreuzberg de Berlín, Departamento de Servicios al Ciudadano</a> para presentar la información necesaria de manera clara y concisa. Gracias a su disponibilidad en siete idiomas, la lista de verificación es fácilmente accesible y utilizable para los ciudadanos de Berlín.`,
	"about.text.p3": `Si quieres echar un vistazo detrás de escena, puedes encontrar el código abierto en
	<a class="font-bold hover:underline text-berlin-blue-500 visited:text-purple-500"
		href="https://github.com/technologiestiftung/checkliste"
		target="_blank"
		rel="noopener noreferrer"
	>GitHub</a>.`,
	"about.text.p4": "¡Buena suerte preparando tu visita a las autoridades!",

	/*
	Data Privacy
	*/
	"dataPrivacy.title":
		"Política de privacidad para el prototipo “Comprobación de Documentos”",
	"dataPrivacy.subtitle":
		"Esta política de privacidad se aplica exclusivamente al prototipo “Comprobación de Documentos”.",
	"dataPrivacy.title.p1": "1. Información general",
	"dataPrivacy.subtitle.p1.1": "1.1 Finalidad de esta política de privacidad",
	"dataPrivacy.text.p1.1": `Esta política de privacidad tiene como objetivo informarte sobre el tipo, alcance y finalidad de los datos recopilados, utilizados y procesados por la Technologiestiftung Berlin, así como tus derechos en materia de protección de datos. Technologiestiftung Berlin es consciente de su responsabilidad de proteger los datos personales y está especialmente comprometida con salvaguardar tu privacidad.   
<br/><br/>
Los datos personales, en sentido del Reglamento General de Protección de Datos (RGPD – Reglamento (UE) 2016/679), se refieren a cualquier información que permita identificar a una persona. En el proceso de aplicación del RGPD desde el 25 de mayo de 2018, Technologiestiftung Berlin ha implementado numerosas medidas para garantizar la protección de tus datos y minimizar el procesamiento basado en sus propios intereses.`,

	"dataPrivacy.subtitle.p1.2": "1.2 Responsable del tratamiento",
	"dataPrivacy.text.p1.2": `El responsable del tratamiento, según el RGPD, otras leyes de protección de datos de los Estados miembros de la UE y demás normativas de protección de datos, es Technologiestiftung Berlin.  
<br/><br/>
Technologiestiftung Berlin<br/>
Grunewaldstraße 61–62<br/>
10825 Berlín<br/>
Alemania<br/><br/>
Tel.: 030 20 96 99 90 <br/>
E‑Mail: info(at)ts.berlin <br/>
Sitio web: <a class="font-bold hover:underline text-berlin-blue-500 visited:text-purple-500"
         href="https://www.technologiestiftung-berlin.de/de/stiftung/"
         target="_blank"
         rel="noopener noreferrer"
        >Technologiestiftung Berlin</a> <br/><br/>
Para preguntas e información sobre protección de datos, puedes contactar a nuestro Delegado de Protección de Datos en: <br/><br/>
Michael Scherer <br/>
Technologiestiftung Berlin <br/>
Grunewaldstraße 61–62 <br/>
10825 Berlín <br/>
Alemania <br/><br/>
Tel.: 030 20 96 99 951 <br/>
E‑Mail: <a class="font-bold hover:underline text-berlin-blue-500 visited:text-purple-500"
         href="mailto:datenschutz@ts.berlin"
         target="_blank"
         rel="noopener noreferrer"
        >datenschutz[at]ts.berlin</a>`,

	"dataPrivacy.subtitle.p1.3":
		"1.3 Finalidad general de la recopilación, procesamiento y uso de datos",
	"dataPrivacy.text.p1.3": `El <a class="font-bold hover:underline text-berlin-blue-500 visited:text-purple-500"
                             href="https://www.technologiestiftung-berlin.de/de/stiftung/"
                             target="_blank"
                             rel="noopener noreferrer"
                           >Technologiestiftung Berlin</a> es una fundación sin ánimo de lucro con personalidad jurídica de derecho civil. En el curso de sus actividades, es necesario gestionar datos personales.  
<br/><br/>
Los datos personales se recopilan, procesan y utilizan para los siguientes fines:  
<br/><br/>
<ul class="list-disc pl-12 w-9/10">
  <li>Información sobre Technologiestiftung e invitaciones a sus actividades</li>
  <li>Apoyo a socios comerciales y prospectos</li>
  <li>Gestión de personal</li>
  <li>Contabilidad interna y externa</li>
  <li>Solicitud y administración de fondos públicos y privados</li>
  <li>Gestión de la propia financiación de proyectos</li>
</ul>
<br/>
En ciertos casos, los datos pueden transmitirse a terceros para su procesamiento conforme a requisitos legales o interés legítimo. Estos pueden incluir:  
<br/><br/>
<ul class="list-disc pl-12 w-9/10">
  <li>Proveedores de servicios para el procesamiento de pedidos conforme a los artículos 29 y 6 (1)(a) y (f) del RGPD</li>
  <li>Departamentos internos, en la medida en que necesiten datos para cumplir con sus funciones conforme a los artículos 6 (1)(a) y (f) del RGPD</li>
  <li>Autoridades públicas, si la normativa legal obligatoria lo exige conforme al artículo 6 (1)(c) del RGPD</li>
  <li>Organismos externos para la correcta ejecución de contratos conforme al artículo 6 (1)(b) del RGPD</li>
</ul>`,

	"dataPrivacy.subtitle.p1.4": "1.4 Acceso, rectificación y retirada",
	"dataPrivacy.text.p1.4": `Como interesado cuyos datos personales hayan sido recopilados por Technologiestiftung Berlin, tienes derecho a solicitar información completa sobre los datos personales que almacenamos, incluidos todos los registros, finalidades y períodos de almacenamiento.   
<br/><br/>
También tienes derecho a que se corrijan los datos inexactos. Si has dado tu consentimiento para el procesamiento de datos, puedes retirarlo en cualquier momento.  
<br/><br/>
En tales casos, por favor contacta al Delegado de Protección de Datos mencionado en la sección 1.2.`,

	"dataPrivacy.subtitle.p1.5": "1.5 Supresión y bloqueo de datos personales",
	"dataPrivacy.text.p1.5": `Los datos personales se almacenan y procesan, por lo general, solo durante el tiempo necesario para el propósito previsto. Una vez que ese propósito deja de aplicarse, los datos se eliminan a intervalos regulares.  
<br/><br/>
Puedes contactarnos en cualquier momento para solicitar la supresión o el bloqueo de tus datos personales. Por favor, dirige dichas solicitudes al Delegado de Protección de Datos mencionado en la sección 1.2.  
<br/><br/>
Una orden de bloqueo significa que Technologiestiftung Berlin solo podrá usar tus datos para los fines que hayas especificado explícitamente; el registro en sí permanece en nuestros sistemas.  
<br/><br/>
Ten en cuenta que Technologiestiftung Berlin está sujeta a períodos de almacenamiento exigidos por directivas europeas, reglamentos y otros requisitos legales. En tales casos, te informaremos y eliminaremos los datos una vez que hayan expirado los plazos de conservación legales.`,

	"dataPrivacy.title.p2": "2. Servicios relevantes",
	"dataPrivacy.subtitle.p2.1": "2.1 Cookies",
	"dataPrivacy.text.p2.1": `Las cookies son datos almacenados en tu dispositivo cuando visitas sitios web, y guardan cierta información y configuraciones durante la interacción con nuestro sitio.   
<br/><br/>
Puedes desactivar o restringir las cookies a través de la configuración de tu navegador o con extensiones como Ghostery o uBlock. Consulta la documentación del fabricante de tu navegador para más detalles.  
<br/><br/>
Aparte de las cookies técnicamente necesarias, no utilizamos cookies de seguimiento o analíticas. Pueden aplicarse cookies de marketing de YouTube, consulta la sección 2.7 a continuación.  
<br/><br/>
Al usar por primera vez nuestros servicios en línea, puedes elegir si permites que Technologiestiftung Berlin configure cookies para mejorar la oferta en línea o no.`,

	"dataPrivacy.subtitle.p2.2": "2.2 Herramienta de analítica web Matomo",
	"dataPrivacy.text.p2.2": `Para estadísticas detalladas de visitantes, utilizamos la herramienta de analítica web Matomo (anteriormente Piwik), desarrollada por Innocraft (InnoCraft Ltd, 150 Willis St, 6011 Wellington, Nueva Zelanda).  
El software se ejecuta en un servidor ubicado en Alemania y no transmite datos fuera de la UE.  
<br/><br/>
Matomo procesa los datos de forma seudónima y no utiliza cookies. Los datos se anonimizan antes de presentárnoslos, por lo que no podemos identificar a usuarios individuales.  
<br/><br/>
La siguiente información está disponible para nosotros:  
<br/><br/>
<ul class="list-disc pl-12 w-9/10">
  <li>Vistas de página, clics en enlaces, descargas, páginas de entrada y salida, y marcas de tiempo</li>
  <li>Información del dispositivo y configuración: fabricante/marca, modelo/versión, tipo de dispositivo, resolución de pantalla, idioma del navegador</li>
  <li>Datos de ubicación: país de acceso</li>
</ul>
<br/>
El propósito del procesamiento es detectar y corregir errores en nuestro sitio y optimizar el contenido según las necesidades de los visitantes—intereses legítimos según el art. 6 (1)(f) del RGPD. Solo Technologiestiftung Berlin tiene acceso a estos datos y no los compartimos con terceros.  
<br/><br/>
Matomo es de código abierto y mantiene altos estándares para prevenir el uso indebido de datos. Puedes encontrar más información en el sitio web de Matomo.  
<br/><br/>
Para preguntas, contacta al Delegado de Protección de Datos mencionado en la sección 1.2.`,
};

export default es;
