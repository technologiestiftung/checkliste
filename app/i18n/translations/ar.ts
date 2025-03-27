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
	title: "مرحبًا بك في قائمة التحقق",
	selectLanguage: "اختر لغتك:",
	intro:
		"يساعدك هذا التطبيق في التحضير لموعدك في مكتب المواطنين بشكل مثالي. أجب عن بعض الأسئلة وسنقوم بإنشاء قائمة بالوثائق المطلوبة.",
	context: `هذا التطبيق هو نموذج أولي من <a class="font-bold hover:underline text-berlin-blue-500"
							href="https://citylab-berlin.org/ar/start/"
							target="_blank"
							rel="noopener noreferrer"
						> CityLAB</a> برلين ويُستخدم حاليًا للاختبار.`,

	"navigation.title": "اختر خدمة",
	"navigation.description": "اكتشف الوثائق التي تحتاجها",
	"navigation.button": "ابدأ",
	"navigation.id-card": "طلب بطاقة هوية",
	"navigation.certificate-of-conduct": "طلب شهادة حسن السيرة والسلوك",
	"navigation.residence-registration": "تسجيل السكن الرئيسي أو الوحيد",
	"navigation.startpage": "الصفحة الرئيسية",
	"navigation.startpage.mobile": "إلى الصفحة الرئيسية",
	"footer.toTheTop": "العودة إلى أعلى الصفحة",
	"footer.button.name.expand": "عرض المزيد",
	"footer.button.name.collapse": "عرض أقل",
	"upperFooter.checklist.title": "قائمة التحقق",
	"upperFooter.checklist.about": "حول المشروع",
	"upperFooter.checklist.impressum": "بيان قانوني",
	"upperFooter.checklist.dataprivacy": "سياسة الخصوصية",
	"upperFooter.checklist.accessibility": "بيان إمكانية الوصول",

	"language-select": "اختر اللغة",
	"logo.t2": "مشروع من",
	"logo.t3": "بالتعاون مع",
	"logo.t4": "برعاية",

	yes: "نعم",
	no: "لا",
	"download.tooltip": "تحميل",
	"button.back": "رجوع",
	"button.next": "التالي",
	"button.cancel": "إلغاء",
	"button.next.tooltip": "يرجى الإجابة على السؤال أولاً.",
	"button.print": "تحميل القائمة",
	"button.finish": "إنهاء",
	"title.residence-registration": "تسجيل السكن",
	"title.id-card": "طلب بطاقة هوية",
	"title.certificate-of-conduct": "طلب شهادة حسن السيرة والسلوك",
	"title.hint": "ملاحظة:",

	"progress.section": "القسم",

	/*
	Feedback
	*/
	"feedback.question": "هل لديك ملاحظات حول التطبيق؟",
	"feedback.link":
		"https://citylabberlin.typeform.com/to/kCdnCgvC?product_id=checklist",
	"feedback.button.fillout": "املأ الاستبيان",
	"feedback.button.no": "لا، شكرًا",

	/*
	Flow Residence
	*/
	"first-registration.q1": "هل هذه أول مرة تسجل فيها في برلين؟",
	"first-registration.q2": "هل أنت متزوج/ة؟",
	"first-registration.q3": "هل ترغب في تسجيل زوجتك/زوجك أيضًا؟",
	"first-registration.q4": "هل لديك أطفال تحت سن 18؟",
	"first-registration.q5": "هل سينتقل طفل معك؟",
	"first-registration.q6": "هل سينتقل أكثر من شخصين في المجموع؟",
	"nationality.q1": "هل لديك الجنسية الألمانية؟",
	"nationality.q2": "هل تبلغ من العمر أكثر من 16 عامًا؟",
	"nationality.q3": "هل أتيت من إحدى دول الاتحاد الأوروبي؟",
	"nationality.q4": "هل تبلغ من العمر أقل من 16 عامًا؟",
	"nationality.q5": "هل أنت لاجئ؟",
	"nationality.q5.hint":
		"ملاحظة: قد تحتاج إلى تسجيلك في مكتب اللاجئين. يمكنك العثور على مزيد من المعلومات هنا:",
	"other-residence.q1": "هل ستظل مسجلًا في مسكن آخر؟",
	"other-residence.q2": "هل تعيش في الخارج؟",
	"other-residence.q3": "هل تخطط للبقاء في برلين لأكثر من ثلاثة أشهر؟",
	"other-residence.q3.hint":
		"ملاحظة: إذا لم تكن تنوي البقاء في برلين لأكثر من ثلاثة أشهر، فلست بحاجة إلى التسجيل.",
	"other-residence.q3.hint.link.label": "إلغاء الموعد",
	"other-residence.q4": "هل تخطط للبقاء في برلين لأكثر من ستة أشهر؟",
	"other-residence.q4.hint":
		"ملاحظة: إذا لم تكن تنوي البقاء في برلين لأكثر من ستة أشهر، فلست بحاجة إلى التسجيل.",
	"other-residence.q4.hint.link.label": "إلغاء الموعد",

	/*
	Checklist Overview
	*/
	"overview.title": "تم إنشاء قائمة التحقق الخاصة بك",
	"overview.text.1":
		"لقد أنشأنا قائمة بجميع المستندات المطلوبة لموعدك. يرجى إحضارها معبأة، موقعة ومطبوعة.",
	"overview.title.2": "ستحتاج إلى هذه المستندات:",
	"overview.text.2":
		"استخدم هذه القائمة للتحضير لموعدك. ضع علامة على المستندات التي لديك بالفعل.",
	"overview.feedback": "نرحب بإجابتك على بعض الأسئلة.",
	"overview.id-card.hint.title": "ملاحظة:",
	"overview.id-card.hint.text":
		"اعتبارًا من 1 مايو 2025، سيتم إنشاء صور جواز السفر البيومترية رقميًا فقط في استوديوهات التصوير المعتمدة أو مكاتب المواطنين. سيتم فرض رسوم قدرها 6 يورو لكل مستند، مع إمكانية الدفع بالبطاقة فقط.",

	registrationForm: "استمارة التسجيل",
	movingInConfirmation: "تأكيد الانتقال من المالك",
	birthCertificate: "شهادة الميلاد",
	marriageCertificate: "شهادة الزواج",
	idDocumentForSpouse: "بطاقة الهوية أو جواز السفر للزوج/ة",
	childBirthCertificate: "شهادة ميلاد الطفل/الأطفال",
	custodyDeclaration: "بيان الحضانة",
	idDocumentForChild: "بطاقة الهوية، جواز السفر أو جواز السفر الخاص بالطفل",
	guardianConsent: "موافقة الوصي القانوني على تسجيل الطفل",
	additionalRegistrationForm: "استمارة تسجيل إضافية",
	germanIdOrPassportOrChildPassport:
		"بطاقة الهوية أو جواز السفر أو جواز السفر الخاص بالأطفال",
	germanIdOrPassport: "بطاقة الهوية أو جواز السفر",
	confirmationOfCustodian: "موافقة الوصي القانوني",
	euIdOrPassportOrReplacement: "بطاقة هوية أوروبية أو جواز سفر أو وثيقة بديلة",
	nonEuIdOrPassportOrReplacement: "جواز السفر أو وثيقة بديلة",
	supplement: "ملحق تسجيل السكن أو البيان الرسمي للسكن الرئيسي",

	/*
	About
	*/
	"about.title": "حول مشروع قائمة التحقق",
	"about.text.p1":
		"تُفيد مكاتب خدمة المواطنين في برلين أن السبب الأكثر شيوعًا لإلغاء المواعيد هو غياب أو نسيان الوثائق المطلوبة. من خلال الإجابة على أسئلة قصيرة حول وضعك الشخصي، تُنشئ التطبيق قائمة تحقق مخصصة تعرض لك بدقة الوثائق المطلوبة. هذا يجعل زيارتك إلى الجهات الرسمية أكثر كفاءة وأقل إجهادًا.",
	"about.text.p2": `باستخدام قائمة التحقق، يمكنك الاستعداد لـ 
    <a class="font-bold hover:underline text-berlin-blue-500"
                            href="https://service.berlin.de/dienstleistung/120686/"
                            target="_blank"
                            rel="noopener noreferrer"
                        ">تسجيل محل الإقامة الرئيسي</a>, 
    <a class="font-bold hover:underline text-berlin-blue-500"
                            href="https://service.berlin.de/dienstleistung/120703/"
                            target="_blank"
                            rel="noopener noreferrer"
                        ">التقدم بطلب للحصول على بطاقة هوية</a> و 
    <a class="font-bold hover:underline text-berlin-blue-500"
                            href="https://service.berlin.de/dienstleistung/120926/"
                            target="_blank"
                            rel="noopener noreferrer"
                        ">شهادة السجل الجنائي</a> في مكتب خدمة المواطنين بشارع شليسيشي. 

    تم تطوير التطبيق بالتعاون الوثيق مع 
    <a class="font-bold hover:underline text-berlin-blue-500"
                            href="https://www.berlin.de/ba-friedrichshain-kreuzberg/politik-und-verwaltung/aemter/amt-fuer-buergerdienste/buergeramt-der-zukunft/buergeramt-der-zukunft-1461966.php"
                            target="_blank"
                            rel="noopener noreferrer"
                        ">مكتب خدمة المواطنين في المستقبل</a> لتقديم المعلومات اللازمة بطريقة واضحة ومباشرة. وبفضل توفره بسبع لغات، فإن قائمة التحقق متاحة وسهلة الاستخدام للمواطنين في برلين.`,
	"about.text.p3": `إذا كنت ترغب في الاطلاع على تفاصيل المشروع، يمكنك العثور على الكود المفتوح المصدر على 
    <a class="font-bold hover:underline text-berlin-blue-500"
                            href="https://github.com/technologiestiftung/checkliste"
                            target="_blank"
                            rel="noopener noreferrer"
                        ">GitHub</a>.`,
	"about.text.p4": "نتمنى لك التوفيق في الاستعداد لزيارتك للجهات الرسمية!",
};

export default ar;
