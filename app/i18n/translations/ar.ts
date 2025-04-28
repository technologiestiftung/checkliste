const ar = {
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
	title: "مرحبًا بك في فحص المستندات",
	selectLanguage: "اختر لغتك:",
	intro:
		"تساعدك هذه التطبيق على التحضير الأمثل لموعدك في مكتب شؤون المواطنين. أجب على بعض الأسئلة القصيرة وسننشئ قائمة تدقيق فردية تحتوي على جميع المستندات التي تحتاجها لطلبك. بهذه الطريقة تتجنب أوقات الانتظار غير الضرورية وتضمن أنك أحضرت كل ما هو مهم معك. تبقى معلوماتك مجهولة وتُخزن محليًا في متصفحك فقط – لا يتم إرسال أي بيانات إلى مكتب شؤون المواطنين أو أطراف ثالثة.",
	context: `هذا التطبيق هو نموذج أولي من <a class="font-bold hover:underline text-berlin-blue-500 visited:text-purple-500"
				href="https://citylab-berlin.org/de/start/"
				target="_blank"
				rel="noopener noreferrer"
			>CityLAB Berlin</a> و
			<a class="font-bold hover:underline text-berlin-blue-500 visited:text-purple-500"
				href="https://www.berlin.de/ba-friedrichshain-kreuzberg/politik-und-verwaltung/aemter/amt-fuer-buergerdienste/buergeramt-der-zukunft/buergeramt-der-zukunft-1461966.php"
				target="_blank"
				rel="noopener noreferrer"
			>مكتب منطقة فريدريشسهاين-كرويتسبيرغ في برلين، إدارة خدمات المواطنين</a>.
			الهدف هو تجنب إلغاء المواعيد بسبب المستندات المفقودة.
			لا يتم حفظ إجاباتك أو تقييمها. 
			<br/><br/>
			هل لديك أسئلة أو نصائح حول كيفية تحسين هذا التطبيق؟ 
			<a class="font-bold hover:underline text-berlin-blue-500 visited:text-purple-500"
				href="https://citylabberlin.typeform.com/to/kCdnCgvC?product_id=checklist"
				target="_blank"
				rel="noopener noreferrer"
			>نرجو منك الإجابة على بعض الأسئلة</a>. `,

	"navigation.title": "اختر خدمة",
	"navigation.description": "اكتشف المستندات التي تحتاجها.",
	"navigation.button": "ابدأ",
	"navigation.id-card": "التقديم على بطاقة الهوية",
	"navigation.certificate-of-conduct": "التقديم على شهادة السجل العدلي",
	"navigation.residence-registration": "تسجيل الإقامة – إقامة فردية أو رئيسية",
	"navigation.startpage": "الرئيسية",
	"navigation.startpage.mobile": "العودة إلى الرئيسية",
	"footer.toTheTop": "العودة للأعلى",
	"footer.button.name.expand": "عرض المزيد",
	"footer.button.name.collapse": "عرض أقل",
	"upperFooter.checklist.title": "فحص المستندات",
	"upperFooter.checklist.about": "حول المشروع",
	"upperFooter.checklist.impressum": "البيانات القانونية",
	"upperFooter.checklist.dataprivacy": "سياسة الخصوصية",
	"upperFooter.checklist.accessibility": "إعلان سهولة الوصول",

	"language-select": "اختر اللغة",
	"logo.t2": "مشروع بواسطة",
	"logo.t3": "بالتعاون مع",
	"logo.t4": "مدعوم من",

	yes: "نعم",
	no: "لا",
	"button.download": "تنزيل",
	"button.back": "رجوع",
	"button.next": "التالي",
	"button.cancel": "إلغاء",
	"button.fillOutAgain": "أعد التعبئة",
	"button.next.tooltip": "يرجى الإجابة على السؤال أولاً.",
	"button.print": "طباعة القائمة",
	"button.finish": "إنهاء",
	"title.residence-registration": "تسجيل الإقامة",
	"title.id-card": "التقديم على بطاقة الهوية",
	"title.certificate-of-conduct": "التقديم على شهادة السجل العدلي",
	"title.hint": "ملاحظة:",

	"link.cancelAppointment.label": "إلغاء الموعد",

	/*
	Feedback
	*/
	"feedback.question": "هل لديك ملاحظات حول التطبيق؟",
	"feedback.link":
		"https://citylabberlin.typeform.com/to/kCdnCgvC?product_id=checklist",
	"feedback.button.fillout": "املأ الاستبيان",
	"feedback.button.no": "لا، شكرًا",

	/*
	Flow Residence Registration
	*/
	"first-registration.q1": "هل تسجل إقامة في برلين لأول مرة؟",
	"first-registration.q2": "هل أنت متزوج؟",
	"first-registration.q3": "هل ترغب في تسجيل زوجك/زوجتك أيضًا؟",
	"first-registration.q4": "هل لديك أطفال تحت سن 18؟",
	"first-registration.q5": "هل سينتقل طفل للعيش معك؟",
	"first-registration.q6": "هل سينتقل أكثر من شخصين إجمالاً؟",
	"nationality.q1": "هل لديك الجنسية الألمانية؟",
	"nationality.q2": "هل عمرك أكثر من 16 سنة؟",
	"nationality.q3": "هل أنت من دولة في الاتحاد الأوروبي؟",
	"nationality.q4": "هل عمرك أقل من 16 سنة؟",
	"nationality.q5": "هل لديك وضع لاجئ؟",
	"nationality.q5.hint":
		"قد تحتاج إلى التسجيل عبر مكتب شؤون مواطني اللاجئين. للمزيد من المعلومات:",
	"other-residence.q1": "هل أنت مسجل في مسكن آخر؟",
	"other-residence.q2": "هل تقيم في الخارج؟",
	"other-residence.q3": "هل ستبقى في برلين لأكثر من ثلاثة أشهر؟",
	"other-residence.q3.hint":
		"إذا بقيت في برلين لأقل من ثلاثة أشهر، فلا حاجة للتسجيل.",
	"other-residence.q3.hint.link.label": "إلغاء الموعد",
	"other-residence.q4": "هل ستبقى في برلين لأكثر من ستة أشهر؟",
	"other-residence.q4.hint":
		"إذا بقيت في برلين لأقل من ستة أشهر، فلا حاجة للتسجيل.",
	"other-residence.q4.hint.link.label": "إلغاء الموعد",

	/*
	Flow ID Card
	*/
	"registered-in-berlin.q1": "هل أنت مسجل في برلين؟",
	"registered-in-berlin.q2":
		"هل أنت حالياً في برلين، على سبيل المثال تعيش هنا مؤقتًا، في عطلة، أو بلا مأوى؟",
	"registered-in-berlin.q2.hint.yes": `يمكنك أيضًا التقديم على بطاقة الهوية في برلين. تُقدم المستندات فقط في المكتب الحكومي لشؤون المواطنين والشؤون التنظيمية. لمزيد من المعلومات <a class="font-bold hover:underline text-berlin-blue-500 visited:text-purple-500"
			href="https://service.berlin.de/dienstleistung/326550/"
			target="_blank"
			rel="noopener noreferrer"
		>اضغط هنا</a>.`,
	"registered-in-berlin.q2.hint.no": `لا يمكنك حاليًا التقديم على بطاقة الهوية في برلين. <a href="https://service.berlin.de/terminvereinbarung/termin/manage/" target="_blank" class="font-bold hover:underline text-berlin-blue-500 visited:text-purple-500">إلغاء الموعد</a>.`,
	"id-for-child.q1": "هل تقدم على بطاقة الهوية لقاصر؟",
	"id-for-child.q2":
		"هل جميع الأوصياء القانونيين (في معظم الحالات الآباء ذوو حقوق الحضانة) حاضرون في الموعد بمكتب شؤون المواطنين؟",
	"id-for-child.q3": "هل الأوصياء القانونيون متزوجون؟",
	"previous-id.q1":
		"هل كان لديك سابقًا مستند تحديد رسمي (مثل بطاقة الهوية أو جواز السفر)؟",
	"previous-id.q2": "هل تغير اسمك منذ الإصدار الأخير؟",
	"previous-id.q3": "هل تم تجنسك وهل تتقدم لأول مرة على بطاقة هوية ألمانية؟",

	/*
	Flow Certificate of Conduct
	*/
	"applicantDetails.q1": "هل عمرك لا يقل عن 14 عامًا؟",
	"applicantDetails.q1.hint": `يمكنك التقدم على شهادة السجل العدلي فقط من سن 14. <a href="https://service.berlin.de/terminvereinbarung/termin/manage/" target="_blank" class="font-bold hover:underline text-berlin-blue-500 visited:text-purple-500">إلغاء الموعد</a>.`,
	"applicantDetails.q2": "هل أنت مسجل في برلين؟",
	"applicantDetails.q3": "هل تقيم في برلين مؤقتًا؟",
	"applicantDetails.q3.hint": `يرجى التقديم على شهادة السجل العدلي عبر الإنترنت. <a class="font-bold hover:underline text-berlin-blue-500 visited:text-purple-500"
			href="https://www.fuehrungszeugnis.bund.de/"
			target="_blank"
			rel="noopener noreferrer"
		>رابط التقديم الإلكتروني</a>.`,
	"certificate-of-conduct-details.q1":
		"هل أنت تتقدم على شهادة السجل العدلي لنفسك؟",
	"certificate-of-conduct-details.q2":
		"هل تتقدم على شهادة السجل العدلي بصفة ممثل قانوني؟",
	"certificate-of-conduct-details.q2.hint": `يمكنك التقديم فقط إذا كنت الممثل القانوني. <a href="https://service.berlin.de/terminvereinbarung/termin/manage/" target="_blank" class="font-bold hover:underline text-berlin-blue-500 visited:text-purple-500">إلغاء الموعد</a>.`,
	"certificate-of-conduct-details.q3":
		"هل تتقدم للحصول على شهادة سجل عدلي موسعة؟",
	"certificate-of-conduct-details.q4":
		"هل تتقدم للحصول على شهادة سجل عدلي رسمية؟",

	/*
	Checklist Overview
	*/
	"overview.title": "تم إنشاء قائمة التحقق الشخصية الخاصة بك",
	"overview.text.1":
		"لقد أعددنا قائمة تحقق فردية بجميع المستندات التي تحتاجها لموعدك في مكتب شؤون المواطنين. تظل معلوماتك مخزنة محليًا في المتصفح. يمكنك الوصول إلى قائمتك في أي وقت، حتى لاحقًا عبر إشارة مرجعية.",
	"overview.title.2": "كيفية استخدام فحص المستندات:",
	"overview.text.2": `
	<ul class="list-decimal pl-5 lg:pl-7 w-9/10">
		<li>قم بتنزيل المستندات المطلوبة باستخدام أيقونة التنزيل.</li>
		<li>علم على المستندات التي أتممتها بالفعل.</li>
		<li>أحضر المستندات المطبوعة معك إلى موعدك.</li>
	</ul>`,
	"overview.feedback": "لا تتردد في الإجابة على بعض الأسئلة لنا.",
	"overview.id-card.hint.text":
		"اعتبارًا من 1 مايو 2025، سيتم إنشاء ونقل صور جواز السفر البيومترية رقميًا فقط في استوديوهات تصوير معتمدة أو مكاتب المواطنين. تُطبق رسوم قدرها 6 € لكل صورة، تُدفع بالبطاقة فقط.",
	"overview.forms-certificate-of-conduct.hint.text":
		'يمكنك أيضًا التقدم بطلب شهادة حسن السيرة <a href="https://service.berlin.de/dienstleistung/120926/" target="_blank" class="font-bold hover:underline text-berlin-blue-500 visited:text-purple-500">عبر الإنترنت</a>.',
	"overview.forms-residence-registration.hint.text":
		'يمكنك أيضًا إتمام تسجيل محل إقامتك <a href="https://service.berlin.de/dienstleistung/120686/" target="_blank" class="font-bold hover:underline text-berlin-blue-500 visited:text-purple-500">عبر الإنترنت</a>. إذا اخترت التسجيل عبر الإنترنت، فيرجى إلغاء موعدك <a href="https://service.berlin.de/terminvereinbarung/termin/manage/" target="_blank" class="font-bold hover:underline text-berlin-blue-500 visited:text-purple-500">من هنا</a>.',

	registrationForm: "نموذج التسجيل",
	movingInConfirmation: "تأكيد الانتقال من المالك",
	birthCertificate: "شهادة الميلاد",
	marriageCertificate: "شهادة الزواج",
	idDocumentForSpouse: "بطاقة الهوية أو جواز السفر للزوج/الزوجة",
	childBirthCertificate: "شهادة ميلاد الطفل",
	custodyDeclaration: "إقرار الحضانة",
	idDocumentForChild: "بطاقة هوية الطفل أو جواز سفر الطفل",
	guardianConsent: "نموذج موافقة الأوصياء على الطفل",
	additionalRegistrationForm: "نموذج تسجيل إضافي",
	germanIdOrPassportOrChildPassport:
		"بطاقة هويتك الخاصة أو جواز سفرك أو جواز سفر الطفل",
	germanIdOrPassport: "بطاقة هويتك الخاصة أو جواز سفرك",
	confirmationOfCustodian: "نموذج موافقة الوصي الخاص بك",
	euIdOrPassportOrReplacement:
		"بطاقة هوية أوروبية، جواز سفر، أو وثائق بديلة للجواز",
	nonEuIdOrPassportOrReplacement: "جواز سفر أو وثائق بديلة للجواز",
	supplement: "ملحق لتسجيل الإقامة / تصريح المسكن الرئيسي",

	idOfParents: "وثائق تعريف الوالدين",
	bringChild: "إحضار الطفل",
	proofOfCustody:
		"إثبات الحضانة (مثل مستخرج مصدق من سجل الحضانة من مكتب رعاية الشباب)",
	consentOfCustodian: "نموذج موافقة الوصي غير الحاضر",
	copyOfID:
		"نسخة من الهوية (أو جواز السفر أو جواز السفر الوطني) للوالد غير الحاضر للتحقق من التوقيع",
	newOrOldID: "بطاقة هوية أو جواز سفر ساري أو قديم",
	birthCertificateOrPartnershipCertificate:
		"شهادة الميلاد أو شهادة الزواج أو شهادة الشراكة المدنية",
	passportOrforeignID:
		"جواز سفر أو بطاقة هوية من دولة الجنسية السابقة أو شهادة هوية من مكتب ولايات الهجرة (LEA).",
	naturalizationCertificate: "شهادة التجنيس",

	birthCertificateOfRepresantative: "شهادة ميلاد الشخص الذي تمثّله",
	carerId: "بطاقة هوية القيم (إذا لم يكن وصيًا)",
	idOfLegalRepresantative: "وثيقة تعريف الممثل القانوني",
	idDocument: "وثيقة تعريف",
	writtenRequestAuthorized: "طلب مكتوب من جهة مخولة (شهادة سجل عدلي موسعة)",
	nameAndAddressOfAuthority: "اسم وعنوان الجهة",
	fileNumber: "رقم مرجع الملف",
	purposeOfApplication: "غرض التقديم (مثل التوظيف في القطاع العام)",
	letterOrEmailFromAuthority: "خطاب أو بريد إلكتروني من الجهة",

	/*
	About
	*/
	"about.title": "حول مشروع فحص المستندات",
	"about.text.p1":
		"تشير مكاتب شؤون المواطنين في برلين إلى أن أكثر أسباب إلغاء المواعيد شيوعًا هو فقدان أو نسيان المستندات المطلوبة. بالإجابة على بعض الأسئلة حول وضعك الشخصي، يولّد التطبيق قائمة تدقيق فردية توضح بدقة المستندات المطلوبة. هذا يجعل زيارتك للجهة أكثر كفاءة وخالية من التوتر.",
	"about.text.p2": `مع فحص المستندات، يمكنك التحضير لـ
	<a class="font-bold hover:underline text-berlin-blue-500 visited:text-purple-500"
		href="https://service.berlin.de/dienstleistung/120686/"
		target="_blank"
		rel="noopener noreferrer"
	>تسجيل الإقامة الرئيسية</a>,
	<a class="font-bold hover:underline text-berlin-blue-500 visited:text-purple-500"
		href="https://service.berlin.de/dienstleistung/120703/"
		target="_blank"
		rel="noopener noreferrer"
	>التقديم على بطاقة الهوية</a> و
	<a class="font-bold hover:underline text-berlin-blue-500 visited:text-purple-500"
		href="https://service.berlin.de/dienstleistung/120926/"
		target="_blank"
		rel="noopener noreferrer"
	>شهادة السجل العدلي</a> في مكتب شؤون المواطنين في شارع شليزيسشيه.
	تم تطوير التطبيق بالتعاون الوثيق مع
	<a class="font-bold hover:underline text-berlin-blue-500 visited:text-purple-500"
		href="https://www.berlin.de/ba-friedrichshain-kreuzberg/politik-und-verwaltung/aemter/amt-fuer-buergerdienste/buergeramt-der-zukunft/buergeramt-der-zukunft-1461966.php"
		target="_blank"
		rel="noopener noreferrer"
	>مكتب منطقة فريدريشسهاين-كرويتسبيرغ في برلين، إدارة خدمات المواطنين</a> لعرض المعلومات اللازمة بشكل واضح وهادف. وبفضل توفره بسبع لغات، فإن قائمة التدقيق سهلة الوصول والاستخدام لمواطني برلين.`,
	"about.text.p3": `إذا كنت ترغب في الاطلاع على الكود المصدري، يمكنك العثور عليه على
	<a class="font-bold hover:underline text-berlin-blue-500 visited:text-purple-500"
		href="https://github.com/technologiestiftung/checkliste"
		target="_blank"
		rel="noopener noreferrer"
	>GitHub</a>.`,
	"about.text.p4": "حظًا موفقًا في التحضير لزيارتك إلى الجهات!",

	/*
	Data Privacy
	*/
	"dataPrivacy.title": "سياسة الخصوصية لنموذج “فحص المستندات”",
	"dataPrivacy.subtitle":
		"تنطبق سياسة الخصوصية هذه حصريًا على نموذج “فحص المستندات”.",
	"dataPrivacy.title.p1": "1. معلومات عامة",
	"dataPrivacy.subtitle.p1.1": "1.1 هدف سياسة الخصوصية هذه",
	"dataPrivacy.text.p1.1": `تهدف سياسة الخصوصية هذه إلى إعلامك بنوع ونطاق وغرض البيانات التي تجمعها وتستخدمها وتعالجها مؤسسة Technologiestiftung Berlin، بالإضافة إلى حقوقك المتعلقة بحماية البيانات. تدرك Technologiestiftung Berlin مسؤوليتها عن حماية البيانات الشخصية وتلتزم بشكل خاص بالحفاظ على خصوصيتك.   
<br/><br/>
تشير البيانات الشخصية بموجب اللائحة العامة لحماية البيانات (GDPR – اللائحة (EU) 2016/679) إلى أي معلومات يمكن من خلالها تحديد هوية شخص. ومنذ تطبيق الـ GDPR اعتبارًا من 25 مايو 2018، نفذت Technologiestiftung Berlin العديد من الإجراءات لضمان حماية بياناتك وتقليل المعالجة المبنية على مصالحها الخاصة.`,

	"dataPrivacy.subtitle.p1.2": "1.2 جهة التحكم بالبيانات",
	"dataPrivacy.text.p1.2": `الجهة المسؤولة عن البيانات بموجب GDPR وقوانين حماية البيانات في دول الاتحاد الأوروبي الأعضاء والتنظيمات الأخرى هي Technologiestiftung Berlin.  
<br/><br/>
Technologiestiftung Berlin<br/>
Grunewaldstraße 61–62<br/>
10825 برلين<br/>
ألمانيا<br/><br/>
هاتف: 030 20 96 99 90  <br/>
البريد الإلكتروني: info(at)ts.berlin  <br/>
الموقع: <a class="font-bold hover:underline text-berlin-blue-500 visited:text-purple-500"
         href="https://www.technologiestiftung-berlin.de/de/stiftung/"
         target="_blank"
         rel="noopener noreferrer"
        >Technologiestiftung Berlin</a>  <br/><br/>
للاستفسارات ومعلومات حماية البيانات، يمكنك التواصل مع مسؤول حماية البيانات المذكور في القسم 1.2:  <br/><br/>
Michael Scherer  <br/>
Technologiestiftung Berlin  <br/>
Grunewaldstraße 61–62  <br/>
10825 برلين  <br/>
ألمانيا  <br/><br/>
هاتف: 030 20 96 99 951  <br/>
البريد الإلكتروني: <a class="font-bold hover:underline text-berlin-blue-500 visited:text-purple-500"
         href="mailto:datenschutz@ts.berlin"
         target="_blank"
         rel="noopener noreferrer"
        >datenschutz[at]ts.berlin</a>`,

	"dataPrivacy.subtitle.p1.3":
		"1.3 الغرض العام من جمع البيانات ومعالجتها واستخدامها",
	"dataPrivacy.text.p1.3": `مؤسسة <a class="font-bold hover:underline text-berlin-blue-500 visited:text-purple-500"
                             href="https://www.technologiestiftung-berlin.de/de/stiftung/"
                             target="_blank"
                             rel="noopener noreferrer"
                           >Technologiestiftung Berlin</a> هي مؤسسة غير ربحية ذات شخصية قانونية وفقًا للقانون المدني. وفي سياق أنشطتها، من الضروري التعامل مع البيانات الشخصية.  
<br/><br/>
يتم جمع البيانات الشخصية ومعالجتها واستخدامها للأغراض التالية:  
<br/><br/>
<ul class="list-disc pl-12 w-9/10">
  <li>معلومات حول Technologiestiftung ودعوات للحضور في فعالياتها</li>
  <li>دعم الشركاء التجاريين والعملاء المحتملين</li>
  <li>إدارة الموارد البشرية</li>
  <li>المحاسبة الداخلية والخارجية</li>
  <li>تقديم وإدارة الصناديق العامة والخاصة</li>
  <li>إدارة تمويل المشاريع الخاصة بها</li>
</ul>
<br/>
في بعض الحالات، قد تُشارك البيانات مع أطراف ثالثة للمعالجة وفقًا للمتطلبات القانونية أو المصلحة المشروعة. وتشمل هذه:  
<br/><br/>
<ul class="list-disc pl-12 w-9/10">
  <li>مزودو الخدمات لمعالجة الطلبات وفقًا للمادة 29 والمادة 6 (1)(a) و(f) من GDPR</li>
  <li>الأقسام الداخلية التي تحتاج إلى البيانات لأداء مهامها بموجب المادة 6 (1)(a) و(f) من GDPR</li>
  <li>السلطات العامة إذا كانت القوانين الملزمة تتطلب ذلك بموجب المادة 6 (1)(c) من GDPR</li>
  <li>الهيئات الخارجية لأداء العقود بالشكل الصحيح بموجب المادة 6 (1)(b) من GDPR</li>
</ul>`,

	"dataPrivacy.subtitle.p1.4": "1.4 الوصول والتصحيح وسحب الموافقة",
	"dataPrivacy.text.p1.4": `بصفتك موضوع بيانات قد تكون Technologiestiftung Berlin جمعت بياناتك الشخصية، يحق لك طلب معلومات كاملة عن البيانات الشخصية المخزنة لدينا، بما في ذلك جميع السجلات والأغراض وفترات التخزين.   
<br/><br/>
كما يحق لك طلب تصحيح البيانات غير الدقيقة. وإذا منحت موافقتك على معالجة البيانات، يمكنك سحبها في أي وقت.  
<br/><br/>
في هذه الحالات، يرجى التواصل مع مسؤول حماية البيانات المذكور في القسم 1.2.`,

	"dataPrivacy.subtitle.p1.5": "1.5 حذف البيانات الشخصية وحظرها",
	"dataPrivacy.text.p1.5": `تُخزن البيانات الشخصية وتُعالج عادةً فقط للمدة اللازمة لتحقيق الغرض المقصود. وعند توقف ذلك الغرض، يتم حذف البيانات على فترات منتظمة.  
<br/><br/>
يمكنك طلب حذف بياناتك الشخصية أو حظرها في أي وقت من خلال التواصل مع مسؤول حماية البيانات المذكور في القسم 1.2.  
<br/><br/>
يعني أمر الحظر أن Technologiestiftung Berlin يمكنها استخدام بياناتك فقط للأغراض التي حددتها صراحةً؛ وتبقى السجل في أنظمتنا.  
<br/><br/>
يرجى ملاحظة أن Technologiestiftung Berlin ملزمة بفترات التخزين المنصوص عليها في التوجيهات الأوروبية واللوائح والمتطلبات القانونية الأخرى. وفي هذه الحالات، سنعلمك ونحذف البيانات عند انتهاء فترات الاحتفاظ القانونية.`,

	"dataPrivacy.title.p2": "2. الخدمات ذات الصلة",
	"dataPrivacy.subtitle.p2.1": "2.1 الكوكيز",
	"dataPrivacy.text.p2.1": `الكوكيز هي بيانات تُخزن على جهازك عندما تزور مواقع الويب، وتحتفظ ببعض البيانات والإعدادات أثناء التفاعل مع موقعنا.   
<br/><br/>
يمكنك تعطيل أو تقييد الكوكيز عبر إعدادات متصفحك أو باستخدام إضافات مثل Ghostery أو uBlock. راجع وثائق الشركة المصنعة للمتصفح لمزيد من التفاصيل.  
<br/><br/>
باستثناء الكوكيز الضرورية فنيًا، لا نستخدم كوكيز التتبع أو التحليلات. قد تُطبق كوكيز تسويقية من YouTube؛ راجع القسم 2.7 أدناه.  
<br/><br/>
عند استخدامك لخدماتنا عبر الإنترنت لأول مرة، يمكنك اختيار السماح لـ Technologiestiftung Berlin بتعيين الكوكيز لتحسين العرض عبر الإنترنت من عدمه.`,

	"dataPrivacy.subtitle.p2.2": "2.2 أداة التحليلات الويب Matomo",
	"dataPrivacy.text.p2.2": `للحصول على إحصاءات مفصلة عن الزوار، نستخدم أداة التحليلات الويب Matomo (سابقًا Piwik)، التي طورتها Innocraft (InnoCraft Ltd, 150 Willis St, 6011 Wellington, نيوزيلندا).
يعمل البرنامج على خادم يقع داخل ألمانيا ولا ينقل البيانات خارج الاتحاد الأوروبي.  
<br/><br/>
تعالج Matomo البيانات بشكل مجهول الهوية ولا تستخدم الكوكيز. تُجهل البيانات قبل تقديمها لنا، لذا لا يمكننا التعرف على المستخدمين الأفراد.  
<br/><br/>
المعلومات المتاحة لنا تشمل:  
<br/><br/>
<ul class="list-disc pl-12 w-9/10">
  <li>مشاهدات الصفحات، نقرات الروابط، التنزيلات، صفحات الدخول والخروج، والطوابع الزمنية</li>
  <li>معلومات الجهاز والإعدادات: الشركة المصنعة/العلامة التجارية، الطراز/الإصدار، نوع الجهاز، دقة الشاشة، لغة المتصفح</li>
  <li>بيانات الموقع: البلد الذي تم الوصول منه</li>
</ul>
<br/>
الغرض من المعالجة هو اكتشاف الأخطاء في موقعنا وتصحيحها وتحسين المحتوى وفقًا لاحتياجات الزوار—مصلحة مشروعة بموجب المادة 6 (1)(f) من GDPR. لا يصل إلى هذه البيانات سوى Technologiestiftung Berlin ولا نشاركها مع أطراف ثالثة.  
<br/><br/>
Matomo مفتوحة المصدر وتحافظ على معايير عالية لمنع سوء استخدام البيانات. لمزيد من المعلومات، راجع موقع Matomo.  
<br/><br/>
للاستفسارات، يرجى التواصل مع مسؤول حماية البيانات المذكور في القسم 1.2.`,
};

export default ar;
