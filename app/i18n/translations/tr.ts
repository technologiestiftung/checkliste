const tr = {
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
	title: "Belge Kontrolüne hoş geldiniz",
	appTitle: "Belge Kontrolü",
	selectLanguage: "Dil seçin:",
	intro:
		"Bu uygulama, Bürgeramt randevunuza en iyi şekilde hazırlanmanıza yardımcı olur. Birkaç kısa soruyu yanıtlayın ve talebiniz için ihtiyacınız olan tüm belgeleri içeren bireysel bir kontrol listesi oluşturacağız. Böylece gereksiz beklemelerden kaçınır ve yanınızda önemli tüm belgelerin olduğundan emin olursunuz. Bilgileriniz anonim kalır ve yalnızca tarayıcınızda yerel olarak saklanır – hiçbir veri Bürgeramt veya üçüncü taraflara iletilmez.",
	context: `Bu uygulama bir prototiptir: <a class="font-bold hover:underline text-berlin-blue-500"
				href="https://citylab-berlin.org/de/start/"
				target="_blank"
				rel="noopener noreferrer"
			>CityLAB Berlin</a> ve 
			<a class="font-bold hover:underline text-berlin-blue-500"
				href="https://www.berlin.de/ba-friedrichshain-kreuzberg/politik-und-verwaltung/aemter/amt-fuer-buergerdienste/buergeramt-der-zukunft/buergeramt-der-zukunft-1461966.php"
				target="_blank"
				rel="noopener noreferrer"
			>Berlin Friedrichshain-Kreuzberg İlçe Ofisi, Vatandaş Hizmetleri Departmanı</a> iş birliğinde geliştirilmiştir. Amaç, eksik belgeler nedeniyle randevu iptallerini önlemektir. Yanıtlarınız saklanmaz ve değerlendirilmez. 
			<br/><br/>
			Uygulamayı nasıl geliştirebileceğimiz konusunda sorularınız veya faydalı önerileriniz var mı? 
			<a class="font-bold hover:underline text-berlin-blue-500"
				href="https://citylabberlin.typeform.com/to/kCdnCgvC?product_id=checklist"
				target="_blank"
				rel="noopener noreferrer"
			>O halde bize birkaç soruyu yanıtlayarak yardımcı olabilirsiniz</a>. `,

	"navigation.title": "Bir hizmet seçin",
	"navigation.description": "Hangi belgelere ihtiyacınız olduğunu öğrenin.",
	"navigation.button": "Başla",
	"navigation.id-card": "Kimlik kartı başvurusu",
	"navigation.certificate-of-conduct": "Adli sicil kaydı başvurusu",
	"navigation.residence-registration":
		"İkamet kaydı — tekil veya ana ikametgâh",
	"navigation.startpage": "Ana sayfa",
	"navigation.startpage.mobile": "Ana sayfaya dön",
	"footer.toTheTop": "Başa dön",
	"footer.button.name.expand": "Daha fazla göster",
	"footer.button.name.collapse": "Daha az göster",
	"upperFooter.checklist.title": "Belge Kontrolü",
	"upperFooter.checklist.about": "Proje hakkında",
	"upperFooter.checklist.impressum": "İmpressum",
	"upperFooter.checklist.dataprivacy": "Gizlilik Politikası",
	"upperFooter.checklist.accessibility": "Erişilebilirlik Beyanı",

	"language-select": "Dil seç",
	"logo.t2": "Bir proje",
	"logo.t3": "İş birliğiyle",
	"logo.t4": "Destekleyen",

	yes: "Evet",
	no: "Hayır",
	"button.download": "İndir",
	"button.back": "Geri",
	"button.next": "İleri",
	"button.cancel": "İptal",
	"button.fillOutAgain": "Tekrar doldur",
	"button.next.tooltip": "Lütfen önce soruyu yanıtlayın.",
	"button.print": "Listeyi yazdır",
	"button.finish": "Bitir",
	"title.residence-registration": "İkamet kaydı yap",
	"title.id-card": "Kimlik kartı başvurusu yap",
	"title.certificate-of-conduct": "Adli sicil kaydı başvurusu yap",
	"title.hint": "Not:",

	"link.cancelAppointment.label": "Randevuyu iptal et",

	/*
	Feedback
	*/
	"feedback.question": "Uygulama hakkında geri bildiriminiz var mı?",
	"feedback.link":
		"https://citylabberlin.typeform.com/to/kCdnCgvC?product_id=checklist",
	"feedback.button.fillout": "Anketi doldur",
	"feedback.button.no": "Hayır, teşekkürler",

	/*
	Flow Residence Registration
	*/
	"first-registration.q1": "Berlin'de ilk kez ikamet kaydı yapıyor musunuz?",
	"first-registration.q2": "Evli misiniz?",
	"first-registration.q3": "Eşinizi de kaydetmek istiyor musunuz?",
	"first-registration.q4": "18 yaşından küçük çocuklarınız var mı?",
	"first-registration.q5": "Yanınıza bir çocuk mu taşınıyor?",
	"first-registration.q6": "Toplamda iki kişiden fazla mı taşınıyor?",
	"nationality.q1": "Alman vatandaşlığınız var mı?",
	"nationality.q2": "16 yaşından büyük müsünüz?",
	"nationality.q3": "AB ülkesinden misiniz?",
	"nationality.q4": "16 yaşından küçük müsünüz?",
	"nationality.q5": "Mülteci statünüz var mı?",
	"nationality.q5.hint":
		"Mülteci Bürgeramt üzerinden kaydolmanız gerekebilir. Daha fazla bilgi için buraya bakın:",
	"other-residence.q1": "Başka bir adreste kayıtlı mısınız?",
	"other-residence.q2": "Yurtdışında mı yaşıyorsunuz?",
	"other-residence.q3": "Berlin'de üç aydan fazla mı kalacaksınız?",
	"other-residence.q3.hint":
		"Berlin'de üç aydan fazla kalmazsanız, kayıt yaptırmanıza gerek yoktur.",
	"other-residence.q3.hint.link.label": "Randevuyu iptal et",
	"other-residence.q4": "Berlin'de altı aydan fazla mı kalacaksınız?",
	"other-residence.q4.hint":
		"Berlin'de altı aydan fazla kalmazsanız, kayıt yaptırmanıza gerek yoktur.",
	"other-residence.q4.hint.link.label": "Randevuyu iptal et",

	/*
	Flow ID Card
	*/
	"registered-in-berlin.q1": "Berlin'de kayıtlı mısınız?",
	"registered-in-berlin.q2":
		"Şu anda Berlin'de misiniz; örneğin burada geçici olarak mı kalıyorsunuz, tatilde misiniz veya evsiz misiniz?",
	"registered-in-berlin.q2.hint.yes": `Berlin'de kimlik kartı başvurusu da yapabilirsiniz. Belgeler yalnızca Vatandaş ve Düzenleyici İşler Devlet Ofisi'nde işlenir. Daha fazla bilgi için <a class="font-bold hover:underline text-berlin-blue-500"
			href="https://service.berlin.de/dienstleistung/326550/"
			target="_blank"
			rel="noopener noreferrer"
		>buraya</a> bakın.`,
	"registered-in-berlin.q2.hint.no": `Şu anda Berlin'de kimlik kartına başvuramazsınız. <a href="https://service.berlin.de/terminvereinbarung/termin/manage/" target="_blank" class="text-blue-700 hover:underline visited:text-purple-500">Randevuyu iptal et</a>.`,
	"id-for-child.q1":
		"Reşit olmayan biri için kimlik kartı başvurusu yapıyor musunuz?",
	"id-for-child.q2":
		"Tüm yasal veliler (çoğu durumda velayet hakkına sahip ebeveynler) Bürgeramt randevusunda hazır mı?",
	"id-for-child.q3": "Yasal veliler evli mi?",
	"previous-id.q1":
		"Daha önce resmi bir kimlik belgesine (örn. kimlik kartı veya pasaport) sahip oldunuz mu?",
	"previous-id.q2": "Adınız son belge verilmesinden bu yana değişti mi?",
	"previous-id.q3":
		"Vatandaşlığa kabul edildiniz ve ilk kez Alman kimlik kartı başvurusu mu yapıyorsunuz?",

	/*
	Flow Certificate of Conduct
	*/
	"applicantDetails.q1": "En az 14 yaşında mısınız?",
	"applicantDetails.q1.hint": `Adli sicil kaydı başvurusunu yalnızca 14 yaşından itibaren yapabilirsiniz. <a href="https://service.berlin.de/terminvereinbarung/termin/manage/" target="_blank" class="text-blue-700 hover:underline visited:text-purple-500">Randevuyu iptal et</a>.`,
	"applicantDetails.q2": "Berlin'de kayıtlı mısınız?",
	"applicantDetails.q3": "Berlin'de geçici olarak mı yaşıyorsunuz?",
	"applicantDetails.q3.hint": `Adli sicil kaydı başvurunuzu lütfen çevrimiçi yapın. <a class="font-bold hover:underline text-berlin-blue-500"
			href="https://www.fuehrungszeugnis.bund.de/"
			target="_blank"
			rel="noopener noreferrer"
		>Çevrimiçi başvuru bağlantısı</a>.`,
	"certificate-of-conduct-details.q1":
		"Adli sicil kaydını kendi adınıza mı talep ediyorsunuz?",
	"certificate-of-conduct-details.q2":
		"Adli sicil kaydını yasal temsilci olarak mı talep ediyorsunuz?",
	"certificate-of-conduct-details.q2.hint": `Adli sicil kaydını yalnızca yasal temsilciyseniz talep edebilirsiniz. <a href="https://service.berlin.de/terminvereinbarung/termin/manage/" target="_blank" class="text-blue-700 hover:underline visited:text-purple-500">Randevuyu iptal et</a>.`,
	"certificate-of-conduct-details.q3":
		"Genişletilmiş adli sicil kaydı mı talep ediyorsunuz?",
	"certificate-of-conduct-details.q4":
		"Resmi adli sicil kaydı mı talep ediyorsunuz?",

	/*
	Checklist Overview
	*/
	"overview.title": "Kişisel kontrol listeniz oluşturuldu",
	"overview.text.1":
		"Randevunuz için gerekli tüm belgeleri içeren bireysel bir kontrol listesi hazırladık. Bilgileriniz tarayıcınızda yerel olarak saklanır. Listenize istediğiniz zaman, hatta daha sonra bir yer imi üzerinden de erişebilirsiniz.",
	"overview.title.2": "Belge Kontrolü Nasıl Kullanılır:",
	"overview.text.2": `
	<ul class="list-decimal pl-5 lg:pl-7 w-9/10">
		<li>Gerekli belgeleri indirme simgesini kullanarak indirin.</li>
		<li>Önceden tamamladığınız belgeleri işaretleyin.</li>
		<li>Basılı belgeleri randevunuza götürün.</li>
	</ul>`,
	"overview.feedback": "Bize birkaç soruyu yanıtlayarak yardımcı olun.",
	"overview.id-card.hint.title": "Not:",
	"overview.id-card.hint.text":
		"1 Mayıs 2025'ten itibaren biyometrik pasaport fotoğrafları yalnızca sertifikalı fotoğraf stüdyolarında veya Bürgeramt'ta dijital olarak oluşturulup iletilecektir. Her fotoğraf için 6 € ücret alınacak, ödeme sadece kartla yapılabilir.",
	"overview.forms-certificate-of-conduct.hint.title": "Not:",
	"overview.forms-certificate-of-conduct.hint.text": `Adli sicil kaydı başvurusunu ayrıca <a href=\"https://service.berlin.de/dienstleistung/120926/\" target=\"_blank\" class=\"text-blue-700 hover:underline visited:text-purple-500\">çevrimiçi</a> olarak da kolayca yapabilirsiniz.`,

	registrationForm: "Kayıt formu",
	movingInConfirmation: "Ev sahibinden taşınma onayı",
	birthCertificate: "Doğum belgesi",
	marriageCertificate: "Evlilik belgesi",
	idDocumentForSpouse: "Eşin kimlik kartı veya pasaportu",
	childBirthCertificate: "Çocuğun doğum belgesi",
	custodyDeclaration: "Vasi beyanı",
	idDocumentForChild: "Çocuğun kimlik kartı, pasaportu veya çocuk pasaportu",
	guardianConsent: "Çocuğun velilerinden onay formu",
	additionalRegistrationForm: "Ek kayıt formu",
	germanIdOrPassportOrChildPassport:
		"Kendi kimlik kartınız, pasaportunuz veya çocuk pasaportu",
	germanIdOrPassport: "Kendi kimlik kartınız veya pasaportunuz",
	confirmationOfCustodian: "Vasinizin onay formu",
	euIdOrPassportOrReplacement:
		"Avrupa kimlik kartı, pasaport veya pasaport yerine geçecek belgeler",
	nonEuIdOrPassportOrReplacement:
		"Pasaport veya pasaport yerine geçecek belgeler",
	supplement: "Kayıt / ana ikamet bildirimi ek belgesi",

	idOfParents: "Ebeveynlerin kimlik belgeleri",
	bringChild: "Çocuğu getirin",
	proofOfCustody:
		"Vasi belgesi kanıtı (örn. Jugendamt'tan alınan vasi sicili onaylı örneği)",
	consentOfCustodian: "Hazır bulunmayan vasi onay formu",
	copyOfID:
		"İmza doğrulaması için hazır bulunmayan ebeveynin kimlik kartı (veya pasaport ya da ulusal pasaport) kopyası",
	newOrOldID: "Geçerli veya eski kimlik kartı ya da pasaport",
	birthCertificateOrPartnershipCertificate:
		"Doğum belgesi, evlilik belgesi veya medeni birliktelik belgesi",
	passportOrforeignID:
		"Önceki vatandaşlık ülkenizin pasaportu veya kimlik kartı ya da Göçmenlik Eyalet Ofisi (LEA) tarafından verilen kimlik belgesi",
	naturalizationCertificate: "Vatandaşlığa kabul belgesi",

	birthCertificateOfRepresantative: "Temsil edilen kişinin doğum belgesi",
	carerId: "Bakıcı kimlik kartı (eğer vasi değilse)",
	idOfLegalRepresantative: "Yasal temsilcinin kimlik belgesi",
	idDocument: "Kimlik belgesi",
	writtenRequestAuthorized:
		"Yetkili kurumdan yazılı talep (genişletilmiş adli sicil kaydı)",
	nameAndAddressOfAuthority: "Yetkili kurumun adı ve adresi",
	fileNumber: "Dosya referans numarası",
	purposeOfApplication: "Başvuru amacı (örn. kamu hizmetinde istihdam)",
	letterOrEmailFromAuthority: "Yetkili kurumdan gelen mektup veya e-posta",

	/*
	About
	*/
	"about.title": "Belge Kontrolü projesi hakkında",
	"about.text.p1":
		"Berlin Bürgeramt'ları, randevu iptallerinin en yaygın nedeni olarak gerekli belgelerin eksik veya unutulduğunu belirtir. Kişisel durumunuza dair birkaç soruyu yanıtlayarak uygulama, hangi belgelerin gerektiğini tam olarak gösteren bireysel bir kontrol listesi oluşturur. Bu, makama ziyaretinizi daha verimli ve stressiz kılar.",
	"about.text.p2": `Belge Kontrolü ile
	<a class="font-bold hover:underline text-berlin-blue-500"
		href="https://service.berlin.de/dienstleistung/120686/"
		target="_blank"
		rel="noopener noreferrer"
	>Ana ikamet kaydını</a>, 
	<a class="font-bold hover:underline text-berlin-blue-500"
		href="https://service.berlin.de/dienstleistung/120703/"
		target="_blank"
		rel="noopener noreferrer"
	>kimlik kartı başvurusunu</a> ve 
	<a class="font-bold hover:underline text-berlin-blue-500"
		href="https://service.berlin.de/dienstleistung/120926/"
		target="_blank"
		rel="noopener noreferrer"
	>adli sicil kaydını</a> Schlesische Strasse Bürgeramt'ta hazırlayabilirsiniz.
	Uygulama, gerekli bilgileri net ve amaçlı şekilde sunmak üzere Berlin Friedrichshain-Kreuzberg İlçe Ofisi, Vatandaş Hizmetleri Departmanı ile yakın iş birliği içinde geliştirildi. Yedi dilde sunulması sayesinde kontrol listesi Berlinliler için kolayca erişilebilir ve kullanılabilir.`,
	"about.text.p3": `Sahne arkasına bakmak isterseniz, açık kaynak kodunu <a class="font-bold hover:underline text-berlin-blue-500"
		href="https://github.com/technologiestiftung/checkliste"
		target="_blank"
		rel="noopener noreferrer"
	>GitHub</a> üzerinde bulabilirsiniz.`,
	"about.text.p4": "Ziyaretinize hazırlanırken iyi şanslar!",

	/*
	Data Privacy
	*/
	"dataPrivacy.title": "“Belge Kontrolü” Prototipi için Gizlilik Politikası",
	"dataPrivacy.subtitle":
		"Bu gizlilik politikası yalnızca “Belge Kontrolü” prototipine uygulanır.",
	"dataPrivacy.title.p1": "1. Genel Bilgiler",
	"dataPrivacy.subtitle.p1.1": "1.1 Bu Gizlilik Politikasının Amacı",
	"dataPrivacy.text.p1.1": `Bu gizlilik politikası, Technologiestiftung Berlin tarafından toplanan, kullanılan ve işlenen veri türü, kapsamı ve amacı ile veri koruma ile ilgili haklarınız hakkında sizi bilgilendirmeyi amaçlamaktadır. Technologiestiftung Berlin, kişisel verilerin korunması sorumluluğunun farkındadır ve gizliliğinizi korumaya özellikle bağlıdır.   
<br/><br/>
Genel Veri Koruma Yönetmeliği (GDPR – (AB) 2016/679 sayılı Yönetmelik) anlamında kişisel veriler, bir bireyi tanımlamaya yarayan her türlü bilgi anlamına gelir. 25 Mayıs 2018'den bu yana GDPR'yi uygulama sürecinde, Technologiestiftung Berlin verilerinizin korunmasını sağlamak ve kendi menfaatlerine dayalı işlemleri en aza indirmek için çok sayıda önlem almıştır.`,

	"dataPrivacy.subtitle.p1.2": "1.2 Veri Sorumlusu",
	"dataPrivacy.text.p1.2": `GDPR, diğer AB üye devlet veri koruma yasaları ve diğer veri koruma düzenlemeleri anlamında veri sorumlusu Technologiestiftung Berlin'dir.  
<br/><br/>
Technologiestiftung Berlin<br/>
Grunewaldstraße 61–62<br/>
10825 Berlin<br/>
Almanya<br/><br/>

Tel.: 030 20 96 99 90  <br/>
E‑Posta: info(at)ts.berlin  <br/>
Web sitesi: <a class="font-bold hover:underline text-berlin-blue-500"
         href="https://www.technologiestiftung-berlin.de/de/stiftung/"
         target="_blank"
         rel="noopener noreferrer"
        >Technologiestiftung Berlin</a>  <br/><br/>

Veri koruma ile ilgili sorular ve bilgiler için 1.2 bölümünde adı geçen Veri Koruma Görevlisi'ne ulaşabilirsiniz:  <br/><br/>

Michael Scherer  <br/>
Technologiestiftung Berlin  <br/>
Grunewaldstraße 61–62  <br/>
10825 Berlin  <br/>
Almanya  <br/><br/>

Tel.: 030 20 96 99 951  <br/>
E‑Posta: <a class="font-bold hover:underline text-berlin-blue-500"
         href="mailto:datenschutz@ts.berlin"
         target="_blank"
         rel="noopener noreferrer"
        >datenschutz[at]ts.berlin</a>`,

	"dataPrivacy.subtitle.p1.3":
		"1.3 Verilerin Toplanma, İşlenme ve Kullanılma Genel Amaçları",
	"dataPrivacy.text.p1.3": `<a class="font-bold hover:underline text-berlin-blue-500"
                             href="https://www.technologiestiftung-berlin.de/de/stiftung/"
                             target="_blank"
                             rel="noopener noreferrer"
                           >Technologiestiftung Berlin</a>, sivil hukuk kapsamında tüzel kişiliğe sahip kâr amacı gütmeyen bir vakıftır. Faaliyetleri sırasında kişisel verilerin işlenmesi gerekir.  
<br/><br/>
Kişisel veriler aşağıdaki amaçlarla toplanır, işlenir ve kullanılır:  
<br/><br/>
<ul class="list-disc pl-12 w-9/10">
  <li>Technologiestiftung hakkında bilgi ve etkinlik davetleri</li>
  <li>İş ortakları ve potansiyel müşterilere destek</li>
  <li>Personel yönetimi</li>
  <li>Dahili ve harici muhasebe</li>
  <li>Kamu ve özel fonların başvurusu ve yönetimi</li>
  <li>Kendi proje finansmanının yönetimi</li>
</ul>
<br/>
Belirli durumlarda veriler, yasal gereklilikler veya meşru menfaat kapsamında işleme için üçüncü taraflarla paylaşılabilir. Bunlar şunları içerebilir:  
<br/><br/>
<ul class="list-disc pl-12 w-9/10">
  <li>GDPR Madde 29 ve Madde 6 (1)(a) ve (f) uyarınca sipariş işleme için hizmet sağlayıcıları</li>
  <li>GDPR Madde 6 (1)(a) ve (f) uyarınca görevlerini yerine getirmek için verilere ihtiyaç duyan dahili bölümler</li>
  <li>GDPR Madde 6 (1)(c) uyarınca zorunlu yasal düzenlemeler gereğince kamu otoriteleri</li>
  <li>GDPR Madde 6 (1)(b) uyarınca sözleşmelerin düzgün yürütülmesi için dış kuruluşlar</li>
</ul>`,

	"dataPrivacy.subtitle.p1.4": "1.4 Erişim, Düzeltme ve Geri Çekme",
	"dataPrivacy.text.p1.4": `Technologiestiftung Berlin tarafından kişisel verilerinizin toplanmış olabileceği bir veri sahibi olarak, tarafımızca saklanan kişisel veriler hakkında tüm kayıtlar, amaçlar ve saklama süreleri dahil tam bilgi talep etme hakkına sahipsiniz.   
<br/><br/>
Yanlış verilerin düzeltilmesini talep etme hakkınız da vardır. Veri işleme için verdiğiniz rızayı istediğiniz zaman geri çekebilirsiniz.  
<br/><br/>
Bu durumlarda, lütfen 1.2 bölümünde adı geçen Veri Koruma Görevlisi ile iletişime geçin.`,

	"dataPrivacy.subtitle.p1.5":
		"1.5 Kişisel Verilerin Silinmesi ve Engellenmesi",
	"dataPrivacy.text.p1.5": `Kişisel veriler, amaçlanan amaca yönelik olarak gerekli olduğu süre boyunca saklanır ve işlenir. Bu amaç ortadan kalktığında, veriler düzenli aralıklarla silinir.  
<br/><br/>
Kişisel verilerinizin silinmesini veya engellenmesini talep etmek için istediğiniz zaman bizimle iletişime geçebilirsiniz. Lütfen bu talepleri 1.2 bölümünde adı geçen Veri Koruma Görevlisi'ne iletin.  
<br/><br/>
Bir engelleme kararı, Technologiestiftung Berlin'in verilerinizi yalnızca açıkça belirttiğiniz amaçlar için kullanabileceği anlamına gelir; kayıt sistemlerimizde kalmaya devam eder.  
<br/><br/>
Technologiestiftung Berlin, Avrupa direktifleri, yönetmelikleri ve diğer yasal gereklilikler tarafından belirlenen saklama sürelerine uymak zorundadır. Bu durumlarda, sizi bilgilendireceğiz ve yasal saklama süresi dolduktan sonra verileri sileceğiz.`,

	"dataPrivacy.title.p2": "2. İlgili Hizmetler",
	"dataPrivacy.subtitle.p2.1": "2.1 Çerezler",
	"dataPrivacy.text.p2.1": `Çerezler, bir web sitesini ziyaret ettiğinizde cihazınıza kaydedilen ve etkileşimler sırasında belirli verileri ve ayarları saklayan verilerdir.   
<br/><br/>
Çerezleri tarayıcı ayarlarınızdan veya Ghostery ya da uBlock gibi uzantılarla devre dışı bırakabilir veya kısıtlayabilirsiniz. Detaylar için tarayıcınızın üretici belgelerine bakın.  
<br/><br/>
Teknik olarak gerekli çerezler dışında izleme veya analiz çerezleri kullanmıyoruz. YouTube'dan pazarlama çerezleri uygulanabilir; aşağıdaki 2.7 bölümüne bakın.  
<br/><br/>
Çevrimiçi hizmetlerimizi ilk kez kullandığınızda, Technologiestiftung Berlin'in teklifini iyileştirmek için çerez ayarlamasına izin verip vermeyeceğinizi seçebilirsiniz.`,

	"dataPrivacy.subtitle.p2.2": "2.2 Web Analiz Aracı Matomo",
	"dataPrivacy.text.p2.2": `Detaylı ziyaretçi istatistikleri için Innocraft (InnoCraft Ltd, 150 Willis St, 6011 Wellington, Yeni Zelanda) tarafından geliştirilen Matomo web analiz aracını (eski adıyla Piwik) kullanıyoruz.  
Yazılım, Almanya'da bir sunucuda çalışır ve verileri AB dışına iletmez.  
<br/><br/>
Matomo verileri takma ad kullanarak işler ve çerez kullanmaz. Veriler bize sunulmadan önce anonimleştirilir; bu nedenle bireysel kullanıcıları tanımlayamayız.  
<br/><br/>
Aşağıdaki bilgiler bize sunulur:  
<br/><br/>
<ul class="list-disc pl-12 w-9/10">
  <li>Sayfa görüntülemeleri, bağlantı tıklamaları, indirmeler, giriş/çıkış sayfaları ve zaman damgaları</li>
  <li>Cihaz ve ayar bilgileri: üretici/marka, model/sürüm, cihaz türü, ekran çözünürlüğü, tarayıcı dili</li>
  <li>Konum verisi: erişim yapılan ülke</li>
</ul>
<br/>
İşlemenin amacı, sitemizdeki hataları tespit etmek ve düzeltmek ve içeriği ziyaretçi ihtiyaçlarına göre optimize etmektir — GDPR Madde 6 (1)(f) kapsamındaki meşru menfaattir. Bu verilere yalnızca Technologiestiftung Berlin erişir ve üçüncü taraflarla paylaşılmaz.  
<br/><br/>
Matomo açık kaynaklıdır ve veri suistimalini önlemek için yüksek standartları korur. Daha fazla bilgi Matomo web sitesinde mevcuttur.  
<br/><br/>
Sorular için lütfen 1.2 bölümünde adı geçen Veri Koruma Görevlisi ile iletişime geçin.`,
};

export default tr;
