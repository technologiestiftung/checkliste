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
	title: "Bienvenido al Control de Documentos",
	appTitle: "Control de Documentos",
	selectLanguage: "Seleccione su idioma:",
	intro:
		"Esta aplicación le ayuda a preparar de forma óptima su cita en la oficina de registro de residentes. Responda unas breves preguntas y crearemos una lista de verificación individualizada con todos los documentos que necesita para su trámite. Así evitará esperas innecesarias y se asegurará de llevar todo lo importante. Sus respuestas permanecen anónimas y se almacenan únicamente en su navegador: no se envían datos a la oficina de registro ni a terceros.",
	context: `Esta aplicación es un prototipo de <a class="font-bold hover:underline text-berlin-blue-500 visited:text-purple-500"
						href="https://citylab-berlin.org/de/start/"
						target="_blank"
						rel="noopener noreferrer"
					  >CityLAB Berlin</a> y del 
					  <a class="font-bold hover:underline text-berlin-blue-500 visited:text-purple-500"
						href="https://www.berlin.de/ba-friedrichshain-kreuzberg/politik-und-verwaltung/aemter/amt-fuer-buergerdienste/buergeramt-der-zukunft/buergeramt-der-zukunft-1461966.php"
						target="_blank"
						rel="noopener noreferrer"
					  >Ayuntamiento de Friedrichshain-Kreuzberg de Berlín, Oficina de Servicios al Ciudadano</a> y de la 
					  <a class="font-bold hover:underline text-berlin-blue-500 visited:text-purple-500"
						href="https://www.berlin.de/moderne-verwaltung/buergerservice/"
						target="_blank"
						rel="noopener noreferrer"
					  >Cancillería del Senado de Berlín</a>.
					  El objetivo es evitar cancelaciones de citas por falta de documentos.
					  Sus respuestas no se guardan ni se evalúan.
					  <br/><br/>
					  ¿Tiene preguntas o consejos útiles sobre cómo podemos mejorar esta aplicación?
					  <a class="font-bold hover:underline text-berlin-blue-500 visited:text-purple-500"
						href="https://citylabberlin.typeform.com/to/kCdnCgvC?product_id=checklist"
						target="_blank"
						rel="noopener noreferrer"
					  >Contéstenos algunas preguntas</a>.`,

	"navigation.title": "Seleccione un servicio",
	"navigation.description": "Descubra qué documentos necesita.",
	"navigation.button": "Iniciar",
	"navigation.id-card": "Solicitar DNI",
	"navigation.certificate-of-conduct": "Solicitar certificado de antecedentes",
	"navigation.residence-registration":
		"Registro de residencia – Registrar vivienda única o principal",
	"navigation.startpage": "Página de inicio",
	"navigation.startpage.mobile": "A la página de inicio",
	"footer.toTheTop": "Volver arriba",
	"footer.button.name.expand": "Mostrar más",
	"footer.button.name.collapse": "Mostrar menos",
	"upperFooter.checklist.title": "Control de Documentos",
	"upperFooter.checklist.about": "Sobre el proyecto",
	"upperFooter.checklist.impressum": "Impresión",
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
	"button.next.tooltip": "Por favor responda primero la pregunta.",
	"button.print": "Imprimir lista",
	"button.finish": "Finalizar",
	"title.residence-registration": "Registro de una vivienda",
	"title.id-card": "Solicitud de DNI",
	"title.certificate-of-conduct": "Solicitud de certificado de antecedentes",
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
	Flow Wohnsitz
	*/
	"first-registration.q1": "¿Es la primera vez que se registra en Berlín?",
	"first-registration.q2": "¿Está casado/a?",
	"first-registration.q3": "¿Desea registrar también a su cónyuge?",
	"first-registration.q4": "¿Tiene hijos menores de 18 años?",
	"first-registration.q5": "¿Se traslada algún hijo con usted?",
	"first-registration.q6": "¿Se mudan en total más de dos personas?",
	"nationality.q1": "¿Tiene la nacionalidad alemana?",
	"nationality.q2": "¿Tiene más de 16 años?",
	"nationality.q3": "¿Proviene de un país de la UE?",
	"nationality.q4": "¿Tiene menos de 16 años?",
	"nationality.q5": "¿Tiene el estatus de persona refugiada?",
	"nationality.q5.hint":
		"Es posible que deba registrar su residencia a través de la Oficina de Ciudadanos Refugiados. Aquí encontrará más información:",
	"other-residence.q1": "¿Permanece registrado/a en otra vivienda?",
	"other-residence.q2": "¿Vive en el extranjero?",
	"other-residence.q3": "¿Desea quedarse en Berlín por más de tres meses?",
	"other-residence.q3.hint":
		"Si no va a permanecer más de tres meses en Berlín, no necesita registrarse.",
	"other-residence.q3.hint.link.label": "Cancelar cita",
	"other-residence.q4": "¿Desea quedarse en Berlín por más de seis meses?",
	"other-residence.q4.hint":
		"Si no va a permanecer más de seis meses en Berlín, no necesita registrarse.",
	"other-residence.q4.hint.link.label": "Cancelar cita",

	/* 
	Flow ID Card
	*/
	"registered-in-berlin.q1": "¿Está registrado/a en Berlín?",
	"registered-in-berlin.q2":
		"¿Se encuentra actualmente en Berlín, por ejemplo porque vive temporalmente, está de vacaciones o está sin techo?",
	"registered-in-berlin.q2.hint.yes": `También puede solicitar un DNI en Berlín.
	  Los documentos solo se pueden tramitar en la Oficina Estatal de Asuntos Ciudadanos y de Orden Público.
	  Más información <a class="font-bold hover:underline text-berlin-blue-500 visited:text-purple-500"
						  href="https://service.berlin.de/dienstleistung/326550/"
						  target="_blank"
						  rel="noopener noreferrer"
					   >aquí</a>.`,
	"registered-in-berlin.q2.hint.no": `Actualmente no puede solicitar un DNI en Berlín. <a href="https://service.berlin.de/terminvereinbarung/termin/manage/" target="_blank" class="font-bold hover:underline text-berlin-blue-500 visited:text-purple-500">Cancelar cita</a>.`,
	"id-for-child.q1": "¿Solicita el DNI para una persona menor de 16 años?",
	"id-for-child.q2":
		"¿Están presentes en la cita en la oficina de registro todos los representantes legales (por lo general, los padres con custodia)?",
	"id-for-child.q3": "¿Están casados los representantes legales?",
	"previous-id.q1":
		"¿Ha tenido ya un documento oficial de identidad (por ejemplo, DNI o pasaporte)?",
	"previous-id.q2": "¿Ha cambiado su nombre desde la última emisión?",
	"previous-id.q3":
		"¿Ha sido nacionalizado/a y solicita por primera vez un DNI alemán?",

	/*
	Flow Certificate of Conduct
	*/
	"applicantDetails.q1": "¿Tiene al menos 14 años?",
	"applicantDetails.q1.hint": `Solo puede solicitar un certificado de antecedentes a partir de los 14 años. <a href="https://service.berlin.de/terminvereinbarung/termin/manage/" target="_blank" class="font-bold hover:underline text-berlin-blue-500 visited:text-purple-500">Cancelar cita</a>.`,
	"applicantDetails.q2": "¿Está registrado/a en Berlín?",
	"applicantDetails.q3": "¿Vive temporalmente en Berlín?",
	"applicantDetails.q3.hint": `Solicite su certificado de antecedentes en línea. <a class="font-bold hover:underline text-berlin-blue-500 visited:text-purple-500"
						  href="https://www.fuehrungszeugnis.bund.de/"
						  target="_blank"
						  rel="noopener noreferrer"
					   >Enlace al formulario en línea</a>.`,
	"certificate-of-conduct-details.q1":
		"¿Solicita el certificado de antecedentes para usted mismo?",
	"certificate-of-conduct-details.q2":
		"¿Solicita el certificado de antecedentes en representación legal?",
	"certificate-of-conduct-details.q2.hint": `Solo puede solicitar el certificado de antecedentes si es el representante legal. <a href="https://service.berlin.de/terminvereinbarung/termin/manage/" target="_blank" class="font-bold hover:underline text-berlin-blue-500 visited:text-purple-500">Cancelar cita</a>.`,
	"certificate-of-conduct-details.q3":
		"¿Solicita un certificado de antecedentes ampliado?",
	"certificate-of-conduct-details.q4":
		"¿Solicita un certificado de antecedentes para presentar ante una autoridad?",

	/*
	Checklist Overview
	*/
	"overview.title": "Su lista de verificación personalizada ha sido creada",
	"overview.text.1":
		"Hemos preparado una lista de verificación individualizada con todos los documentos necesarios para su cita en la oficina de registro. Sus datos permanecen guardados localmente en el navegador. Puede consultar su lista en cualquier momento, también más tarde mediante un marcador.",
	"overview.title.2": "Cómo usar el Control de Documentos:",
	"overview.text.2": `
	<ul class="list-decimal pl-5 lg:pl-7 w-9/10">
	  <li>Descargue los documentos necesarios haciendo clic en el icono de la flecha.</li>
	  <li>Marque los documentos que ya tenga preparados.</li>
	  <li>Lleve los documentos impresos a su cita.</li>
	</ul>`,
	"overview.feedback": "Contéstenos algunas preguntas.",
	"overview.id-card.hint.text":
		"A partir del 01.05.2025, las fotografías biométricas solo se podrán tomar digitalmente en las autoridades (oficinas de registro de residentes) o en estudios fotográficos certificados y transmitirse de forma segura electrónicamente.",
	"overview.forms-certificate-of-conduct.hint.text": `También puede solicitar el certificado de antecedentes cómodamente <a href="https://service.berlin.de/dienstleistung/120926/?wt_mc=dokucheck" target="_blank" class="font-bold hover:underline text-berlin-blue-500 visited:text-purple-500">en línea</a>.`,
	"overview.forms-residence-registration.hint.text": `También puede registrar su residencia <a href="https://service.berlin.de/dienstleistung/120686/?wt_mc=dokucheck" target="_blank" class="font-bold hover:underline text-berlin-blue-500 visited:text-purple-500">en línea</a>.
	Si opta por el registro en línea, <a href="https://service.berlin.de/terminvereinbarung/termin/manage/" target="_blank" class="font-bold hover:underline text-berlin-blue-500 visited:text-purple-500">cancele su cita</a>.`,

	registrationForm: "Formulario de registro",
	movingInConfirmation: "Confirmación de mudanza del arrendador",
	birthCertificate: "Certificado de nacimiento original",
	marriageCertificate: "Certificado de matrimonio",
	idDocumentForSpouse: "DNI o pasaporte del cónyuge",
	childBirthCertificate:
		"Certificado de nacimiento del/de los niño(s) original",
	custodyDeclaration: "Declaración de custodia",
	idDocumentForChild: "DNI, pasaporte o pasaporte infantil del/de los niño(s)",
	guardianConsent: "Consentimiento de los tutores legales del/de los niño(s)",
	additionalRegistrationForm: "Formulario de registro adicional",
	germanIdOrPassportOrChildPassport:
		"Su propio DNI, pasaporte o pasaporte infantil",
	germanIdOrPassport: "Su propio DNI o pasaporte",
	confirmationOfCustodian: "Consentimiento de sus tutores legales",
	euIdOrPassportOrReplacement:
		"DNI europeo, pasaporte o documento de sustitución",
	nonEuIdOrPassportOrReplacement: "Pasaporte o documento de sustitución",
	supplement: "Anexo para registro/declaración de vivienda principal",

	idOfParents: "Documentos de identidad de los padres",
	bringChild: "Traer al niño",
	proofOfCustody:
		"Prueba de custodia, p. ej. copia certificada del registro de custodia del Registro de Menores (Jugendamt) en original",
	consentOfCustodian: "Consentimiento del tutor no presente",
	copyOfID:
		"Copia del DNI (o pasaporte o pasaporte nacional) del tutor ausente para comprobación de firma",
	newOrOldID: "DNI o pasaporte válido o antiguo",
	birthCertificateOrPartnershipCertificate:
		"Certificado de nacimiento, matrimonio o unión de hecho original",
	passportOrforeignID:
		"Pasaporte o DNI del país de nacionalidad anterior o certificado de identidad de la Oficina Regional de Inmigración (LEA)",
	naturalizationCertificate: "Certificado de naturalización",

	birthCertificateOfRepresantative:
		"Certificado de nacimiento de la persona representada original",
	carerId: "Carné de cuidador (si no es tutor legal)",
	idOfLegalRepresantative: "Documento de identidad del representante legal",
	idDocument: "Documento de identidad",
	writtenRequestAuthorized:
		"Solicitud escrita de una autoridad competente (certificado ampliado)",
	nameAndAddressOfAuthority: "Nombre y dirección de la autoridad",
	fileNumber: "Número de expediente",
	purposeOfApplication:
		"Finalidad del trámite, p. ej. empleo en el servicio público",
	letterOrEmailFromAuthority: "Carta o correo electrónico de la autoridad",
	bankOrCreditCard: "Tarjeta bancaria o de crédito",

	/*
	About
	*/
	"about.title": "Sobre el proyecto Control de Documentos",
	"about.text.p1":
		"Las oficinas de registro de residentes de Berlín identifican como motivo principal de cancelación de citas la falta o el olvido de los documentos necesarios. Mediante breves preguntas sobre su situación personal, la aplicación genera una lista de verificación individualizada que le indica con precisión qué documentos necesita. Así su trámite administrativo será más eficiente y menos estresante.",
	"about.text.p2": `Con el Control de Documentos puede preparar
	  la <a class="font-bold hover:underline text-berlin-blue-500 visited:text-purple-500"
							href="https://service.berlin.de/dienstleistung/120686/?wt_mc=dokucheck"
							target="_blank"
							rel="noopener noreferrer"
						  >registración de una vivienda principal</a>,
	  <a class="font-bold hover:underline text-berlin-blue-500 visited:text-purple-500"
							href="https://service.berlin.de/dienstleistung/120703/"
							target="_blank"
							rel="noopener noreferrer"
						  >solicitud de DNI</a> y
	  <a class="font-bold hover:underline text-berlin-blue-500 visited:text-purple-500"
							href="https://service.berlin.de/dienstleistung/120926/?wt_mc=dokucheck"
							target="_blank"
							rel="noopener noreferrer"
						  >certificado de antecedentes</a> en la Oficina de Registro de Formación Schlesische Straße.`,
	"about.text.p3": `La aplicación se desarrolló en estrecha colaboración con el
	  <a class="font-bold hover:underline text-berlin-blue-500 visited:text-purple-500"
							href="https://www.berlin.de/ba-friedrichshain-kreuzberg/politik-und-verwaltung/aemter/amt-fuer-buergerdienste/buergeramt-der-zukunft/buergeramt-der-zukunft-1461966.php"
							target="_blank"
							rel="noopener noreferrer"
						  >Ayuntamiento de Friedrichshain-Kreuzberg de Berlín, Oficina de Servicios al Ciudadano</a>
	  para presentar la información necesaria de forma clara y dirigida. Gracias a su disponibilidad en siete idiomas, la lista de verificación es fácilmente accesible para los residentes de Berlín.`,
	"about.text.p4": "¡Le deseamos mucho éxito en la preparación de su trámite!",

	/*
	 Data Privacy
	*/
	"dataPrivacy.title":
		"Declaración de privacidad para el prototipo «Control de Documentos»",
	"dataPrivacy.subtitle":
		"Esta declaración de privacidad se aplica exclusivamente al prototipo «Control de Documentos».",
	"dataPrivacy.title.p1": "1. Información general",
	"dataPrivacy.subtitle.p1.1": "1.1 Finalidad de la declaración de privacidad",
	"dataPrivacy.text.p1.1": `La declaración de privacidad tiene por objetivo informarle sobre el tipo, alcance y finalidad de los datos que recoge, utiliza y procesa Technologiestiftung Berlin, así como sus derechos en materia de protección de datos. Technologiestiftung Berlin es consciente de su responsabilidad en la protección de los datos personales y se esfuerza especialmente en garantizar su privacidad.  
  <br/><br/>
  Los datos personales, según el Reglamento General de Protección de Datos (RGPD – Reglamento (UE) 2016/679), son toda información que permite identificar inequívocamente a una persona. Con la aplicación del RGPD desde el 25 de mayo de 2018, Technologiestiftung Berlin ha implementado numerosas medidas para garantizar la seguridad de sus datos y minimizar su uso tras ponderar los intereses en juego.`,

	"dataPrivacy.subtitle.p1.2": "1.2 Responsable",
	"dataPrivacy.text.p1.2": `El responsable, en el sentido del RGPD, de otras normativas de protección de datos vigentes en los Estados miembros de la UE y de otras disposiciones de carácter proteccionista, es Technologiestiftung Berlin.  
  <br/><br/>
  Technologiestiftung Berlin<br/>
  Grunewaldstraße 61-62<br/>
  10825 Berlín<br/>
  Alemania<br/><br/>
  Tel.: 030 20 96 99 90<br/>
  Correo electrónico: info(at)ts.berlin<br/>
  Sitio web: <a class="font-bold hover:underline text-berlin-blue-500 visited:text-purple-500"
				  href="https://www.technologiestiftung-berlin.de/de/stiftung/"
				  target="_blank"
				  rel="noopener noreferrer"
			   >Technologiestiftung Berlin</a><br/><br/>
  Para consultas e información sobre protección de datos, puede contactar con nuestro Delegado de Protección de Datos en:<br/><br/>
  Michael Scherer<br/>
  Technologiestiftung Berlin<br/>
  Grunewaldstraße 61-62<br/>
  10825 Berlín<br/>
  Alemania<br/><br/>
  Tel.: 030 20 96 99 951<br/>
  Correo electrónico: <a class="font-bold hover:underline text-berlin-blue-500 visited:text-purple-500"
						 href="mailto:datenschutz@ts.berlin"
						 target="_blank"
						 rel="noopener noreferrer"
					  >datenschutz[at]ts.berlin</a>`,

	"dataPrivacy.subtitle.p1.3":
		"1.3 Finalidad general de la recogida, el procesamiento y el uso de datos",
	"dataPrivacy.text.p1.3": `La <a class="font-bold hover:underline text-berlin-blue-500 visited:text-purple-500"
									 href="https://www.technologiestiftung-berlin.de/de/stiftung/"
									 target="_blank"
									 rel="noopener noreferrer"
								  >Technologiestiftung Berlin</a> es una fundación sin ánimo de lucro de derecho civil con personalidad jurídica. En el marco de sus actividades, resulta necesario manejar datos personales.  
  <br/><br/>
  Los datos personales se recogen, procesan y utilizan para los siguientes fines:  
  <br/><br/>
  <ul class="list-disc pl-12 w-9/10">
	<li>Información sobre la Technologiestiftung e invitaciones a sus actividades</li>
	<li>Atención a socios comerciales e interesados</li>
	<li>Gestión de personal</li>
	<li>Contabilidad interna y externa</li>
	<li>Solicitud y gestión de fondos públicos y privados</li>
	<li>Gestión de subvenciones de proyectos propios</li>
  </ul>
  <br/>
  En el marco de las disposiciones legales, los datos pueden comunicarse a terceros para su procesamiento, cuando exista un interés legítimo o una obligación. Estos terceros pueden ser:  
  <br/><br/>
  <ul class="list-disc pl-12 w-9/10">
	<li>Prestadores de servicios para el tratamiento por encargo conforme al art. 29 y art. 6 1 a y f RGPD</li>
	<li>Órganos internos que necesiten los datos para el cumplimiento de sus funciones según art. 6 1 a y f RGPD</li>
	<li>Autoridades públicas cuando disposiciones legales primarias lo exijan según art. 6 1 c RGPD</li>
	<li>Partes externas para el cumplimiento adecuado de contratos según art. 6 1 b RGPD</li>
  </ul>`,

	"dataPrivacy.subtitle.p1.4": "1.4 Información, rectificación y revocación",
	"dataPrivacy.text.p1.4": `Como persona interesada cuyos datos personales pudieran haber sido recabados por Technologiestiftung Berlin, tiene derecho a solicitar y obtener gratuitamente información completa sobre los datos que conservamos, incluidos los conjuntos de datos personales, su origen, finalidad y plazos de conservación.  
  <br/><br/>
  Asimismo, puede solicitar la corrección de sus datos personales. Si ha prestado su consentimiento para el uso de sus datos, puede revocarlo en cualquier momento.  
  <br/><br/>
  Para ello, póngase en contacto con el Delegado de Protección de Datos mencionado en el apartado 1.2 de Technologiestiftung Berlin.`,

	"dataPrivacy.subtitle.p1.5": "1.5 Supresión y bloqueo de datos personales",
	"dataPrivacy.text.p1.5": `Los datos personales recabados se conservan y procesan únicamente durante el período necesario para su finalidad. Cuando esta deja de existir, los datos se eliminan periódicamente.  
  <br/><br/>
  Puede solicitar en cualquier momento la supresión o el bloqueo de sus datos personales. Para ello, contacte con el Delegado de Protección de Datos indicado en el apartado 1.2 de Technologiestiftung Berlin.  
  <br/><br/>
  Una notificación de bloqueo significa que Technologiestiftung Berlin sólo podrá utilizar sus datos para los fines que usted haya determinado. El conjunto de datos no se eliminará.  
  <br/><br/>
  Tenga en cuenta que Technologiestiftung Berlin está sujeta a los plazos de conservación establecidos por la normativa europea y otras disposiciones legales. En este caso, le informaremos y procederemos a la eliminación tras el vencimiento del plazo.`,

	"dataPrivacy.title.p2": "2. Servicios relevantes",
	"dataPrivacy.subtitle.p2.1": "2.1 Cookies",
	"dataPrivacy.text.p2.1": `Las cookies son datos que se almacenan en su dispositivo al visitar sitios web y que registran información y configuraciones en relación con nuestra página.  
  <br/><br/>
  Puede oponerse al uso de cookies mediante la configuración de su navegador o con extensiones como Ghostery o uBlock. En los sitios web de los proveedores encontrará información sobre las extensiones disponibles.  
  <br/><br/>
  Además de las cookies estrictamente necesarias, no utilizamos cookies de seguimiento o análisis. No obstante, es posible que se empleen cookies de marketing de YouTube, véase el punto 2.7 más abajo.  
  <br/><br/>
  Al usar nuestros servicios en línea por primera vez, podrá decidir si autoriza a Technologiestiftung Berlin a establecer cookies para mejorar la oferta en línea.`,

	"dataPrivacy.subtitle.p2.2": "2.2 Herramienta de análisis web Matomo",
	"dataPrivacy.text.p2.2": `Para un análisis detallado de las estadísticas de visitantes, utilizamos la herramienta Matomo (antes Piwik), de Innocraft (InnoCraft Ltd, 150 Willis St, 6011 Wellington, Nueva Zelanda).  
  El software está instalado en un servidor propio en Alemania y no transmite datos fuera de la UE.  
  <br/><br/>
  Matomo procesa los datos de forma seudonimizada y prescinde de cookies. Los datos se anonimizan antes de mostrarse, por lo que no podemos obtener conclusiones sobre la identidad de los usuarios.  
  <br/><br/>
  Podemos analizar la siguiente información:  
  <br/><br/>
  <ul class="list-disc pl-12 w-9/10">
	<li>Visitas a páginas, clics en enlaces, descargas, páginas de entrada y salida, y hora de la acción</li>
	<li>Información sobre el dispositivo y su configuración: fabricante, modelo, tipo de dispositivo, resolución de pantalla, idioma del navegador</li>
	<li>Información sobre la ubicación: país de acceso</li>
  </ul>
  <br/>
  La finalidad es detectar y solucionar errores en nuestra web y optimizar el contenido según las necesidades de los visitantes, intereses legítimos según art. 6 1 f RGPD. Solo Technologiestiftung Berlin accede a estos datos y no los comparte.  
  <br/><br/>
  Matomo es software libre y aplica altos estándares para evitar el mal uso de datos. Más información aquí.  
  <br/><br/>
  Para consultas, contacte con el Delegado de Protección de Datos indicado en el apartado 1.2 de Technologiestiftung Berlin.`,
};
export default es;
