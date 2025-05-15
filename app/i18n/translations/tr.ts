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
	Başlangıç Sayfası ve genel öğeler
	*/
	title: "Belge Kontrolüne Hoş Geldiniz",
	appTitle: "Belge Kontrolü",
	selectLanguage: "Dil seçin:",
	intro:
		"Bu uygulama, Bürgeramt randevunuzu en iyi şekilde hazırlamanıza yardımcı olur. Birkaç kısa soruyu cevaplayın ve sizin için gereken tüm belgelerle birlikte kişisel bir kontrol listesi oluşturacağız. Böylece gereksiz bekleme sürelerinden kaçınabilir ve önemli her şeyi yanınızda bulundurmanızı sağlarız. Verileriniz anonim olarak saklanacak ve yalnızca yerel olarak tarayıcınızda depolanacaktır – hiçbir veri Bürgeramt'a veya üçüncü şahıslara iletilmeyecektir.",
	context: `Bu uygulama, <a class='font-bold hover:underline text-berlin-blue-500 visited:text-purple-500' href='https://citylab-berlin.org/de/start/' target='_blank' rel='noopener noreferrer'>CityLAB Berlin</a> ve <a class='font-bold hover:underline text-berlin-blue-500 visited:text-purple-500' href='https://www.berlin.de/ba-friedrichshain-kreuzberg/politik-und-verwaltung/aemter/amt-fuer-buergerdienste/buergeramt-der-zukunft/buergeramt-der-zukunft-1461966.php' target='_blank' rel='noopener noreferrer'>Friedrichshain-Kreuzberg Belediyesi, Vatandaş Hizmetleri Dairesi</a> ile <a class='font-bold hover:underline text-berlin-blue-500 visited:text-purple-500' href='https://www.berlin.de/moderne-verwaltung/buergerservice/' target='_blank' rel='noopener noreferrer'>Berlin Senato Sekreterliği</a> tarafından geliştirilmiştir. Amaç, eksik belgeler nedeniyle randevu iptallerini engellemektir. Yanıtlarınız kaydedilmeyecek ve analiz edilmeyecektir. <br/><br/> Sizin sorularınız veya bu uygulamayı nasıl geliştirebileceğimize dair önerileriniz varsa, <a class='font-bold hover:underline text-berlin-blue-500 visited:text-purple-500' href='https://citylabberlin.typeform.com/to/kCdnCgvC?product_id=checklist' target='_blank' rel='noopener noreferrer'>Bize birkaç soru yanıtlayarak yardımcı olun</a>.`,
	"navigation.title": "Bir hizmet seçin",
	"navigation.description": "İhtiyacınız olan belgeleri öğrenin.",
	"navigation.button": "Başlat",
	"navigation.id-card": "Kimlik kartı başvurusu",
	"navigation.certificate-of-conduct": "Adli sicil kaydı başvurusu",
	"navigation.residence-registration":
		"İkamet – Tek başına ikametgah veya ana ikamet kaydı",
	"navigation.startpage": "Ana Sayfa",
	"navigation.startpage.mobile": "Ana Sayfaya Git",
	"footer.toTheTop": "Sayfa başına dön",
	"footer.button.name.expand": "Daha fazla göster",
	"footer.button.name.collapse": "Daha az göster",
	"upperFooter.checklist.title": "Belge Kontrolü",
	"upperFooter.checklist.about": "Proje Hakkında",
	"upperFooter.checklist.impressum": "Yasal Uyarı",
	"upperFooter.checklist.dataprivacy": "Veri Gizliliği Bildirimi",
	"upperFooter.checklist.accessibility": "Erişilebilirlik Bildirimi",

	"language-select": "Dil seçin",
	"logo.t2": "Bir proje tarafından",
	"logo.t3": "İşbirliği ile",
	"logo.t4": "Destekleyen",

	yes: "Evet",
	no: "Hayır",
	"button.download": "İndir",
	"button.back": "Geri",
	"button.next": "İleri",
	"button.cancel": "İptal",
	"button.fillOutAgain": "Tekrar doldurun",
	"button.next.tooltip": "Lütfen önce soruyu cevaplayın.",
	"button.print": "Listeyi yazdır",
	"button.finish": "Tamamla",
	"title.residence-registration": "Bir Konut Kaydı",
	"title.id-card": "Kimlik Kartı Başvurusu",
	"title.certificate-of-conduct": "Adli Sicil Kaydı Başvurusu",
	"title.hint": "Not:",

	"link.cancelAppointment.label": "Randevuyu iptal et",

	/*
	Geri Bildirim
	*/
	"feedback.question": "Uygulama hakkında geri bildiriminiz var mı?",
	"feedback.link":
		"https://citylabberlin.typeform.com/to/kCdnCgvC?product_id=checklist",
	"feedback.button.fillout": "Anketi doldurun",
	"feedback.button.no": "Hayır, teşekkürler",

	/*
	İkamet Akışı
	*/
	"first-registration.q1": "Berlin'e ilk kez kaydoluyor musunuz?",
	"first-registration.q2": "Evlendiniz mi?",
	"first-registration.q3": "Eşinizi de kaydettirmek istiyor musunuz?",
	"first-registration.q4": "18 yaşından küçük çocuklarınız var mı?",
	"first-registration.q5": "Bir çocuk sizinle mi taşınıyor?",
	"first-registration.q6": "Toplamda iki kişiden fazla mı taşınıyor?",
	"nationality.q1": "Alman vatandaşlığınız var mı?",
	"nationality.q2": "16 yaşından büyük müsünüz?",
	"nationality.q3": "Bir AB ülkesinden misiniz?",
	"nationality.q4": "16 yaşından küçük müsünüz?",
	"nationality.q5": "Bir mülteci statüsüne sahip misiniz?",
	"nationality.q5.hint":
		"Kaydınızın Mülteci Vatandaşlık Dairesi üzerinden yapılması gerekebilir. Daha fazla bilgi için buraya bakın:",
	"other-residence.q1": "Başka bir konutta kaydınız var mı?",
	"other-residence.q2": "Yurt dışında mı yaşıyorsunuz?",
	"other-residence.q3": "Berlin'de üç aydan fazla kalmak ister misiniz?",
	"other-residence.q3.hint":
		"Üç aydan fazla kalmıyorsanız kaydolmanız gerekmez.",
	"other-residence.q3.hint.link.label": "Randevuyu iptal et",
	"other-residence.q4": "Berlin'de altı aydan fazla kalmak ister misiniz?",
	"other-residence.q4.hint":
		"Altı aydan fazla kalmıyorsanız kaydolmanız gerekmez.",
	"other-residence.q4.hint.link.label": "Randevuyu iptal et",

	/* 
	ID Kartı Akışı
	*/
	"registered-in-berlin.q1": "Berlin'de kayıtlı mısınız?",
	"registered-in-berlin.q2":
		"Şu an Berlin'de misiniz, örneğin geçici olarak burada mı yaşıyor, tatil yapıyor ya da evsiz misiniz?",
	"registered-in-berlin.q2.hint.yes":
		"Ayrıca Berlin'de bir kimlik kartı başvurusunda bulunabilirsiniz. Belgeler yalnızca Berlin Eyalet Vatandaşlık ve Düzenleme Dairesi'nde başvurulabilir. Daha fazla bilgi için <a class='font-bold hover:underline text-berlin-blue-500 visited:text-purple-500' href='https://service.berlin.de/dienstleistung/326550/' target='_blank' rel='noopener noreferrer'>buraya</a> tıklayın.",
	"registered-in-berlin.q2.hint.no":
		"Şu an Berlin'de kimlik kartı başvurusu yapamazsınız. <a href='https://service.berlin.de/terminvereinbarung/termin/manage/' target='_blank' class='font-bold hover:underline text-berlin-blue-500 visited:text-purple-500'>Randevuyu iptal edin</a>.",
	"id-for-child.q1":
		"16 yaş altı bir çocuk için kimlik kartı başvurusu yapacak mısınız?",
	"id-for-child.q2":
		"Yasal temsilciler (çoğu durumda veli olan ebeveynler) randevuda hazır mı?",
	"id-for-child.q3": "Yasal temsilciler evli mi?",
	"previous-id.q1":
		"Daha önce resmi bir kimlik belgesi (örneğin kimlik kartı veya pasaport) aldınız mı?",
	"previous-id.q2": "Adınız son başvurudan sonra değişti mi?",
	"previous-id.q3":
		"Vatandaşlık aldınız mı ve ilk kez bir Alman kimlik kartı başvurusu yapıyor musunuz?",

	/*
	Adli Sicil Kaydı Akışı
	*/
	"applicantDetails.q1": "En az 14 yaşında mısınız?",
	"applicantDetails.q1.hint":
		"Adli sicil kaydını yalnızca 14 yaşından itibaren başvurabilirsiniz. <a href='https://service.berlin.de/terminvereinbarung/termin/manage/' target='_blank' class='font-bold hover:underline text-berlin-blue-500 visited:text-purple-500'>Randevuyu iptal edin</a>.",
	"applicantDetails.q2": "Berlin'de kayıtlı mısınız?",
	"applicantDetails.q3": "Geçici olarak Berlin'de yaşıyor musunuz?",
	"applicantDetails.q3.hint":
		"Lütfen adli sicil kaydınızı çevrimiçi başvurun. <a class='font-bold hover:underline text-berlin-blue-500 visited:text-purple-500' href='https://www.fuehrungszeugnis.bund.de/' target='_blank' rel='noopener noreferrer'>Çevrimiçi başvuru bağlantısı</a>.",
	"certificate-of-conduct-details.q1":
		"Adli sicil kaydını kendiniz için mi başvuruyorsunuz?",
	"certificate-of-conduct-details.q2":
		"Adli sicil kaydını yasal temsilci olarak mı başvuruyorsunuz?",
	"certificate-of-conduct-details.q2.hint":
		"Adli sicil kaydını yalnızca yasal temsilci olarak başvurabilirsiniz. <a href='https://service.berlin.de/terminvereinbarung/termin/manage/' target='_blank' class='font-bold hover:underline text-berlin-blue-500 visited:text-purple-500'>Randevuyu iptal edin</a>.",
	"certificate-of-conduct-details.q3":
		"Genel adli sicil kaydını mı başvuruyorsunuz?",
	"certificate-of-conduct-details.q4":
		"Adli sicil kaydını bir devlet dairesine sunmak için mi başvuruyorsunuz?",

	/*
	Kontrol Listesi Genel Bakış
	*/
	"overview.title": "Kişisel kontrol listeniz oluşturuldu",
	"overview.text.1":
		"Sizin için Bürgeramt randevunuz için gereken tüm belgeleri içeren kişisel bir kontrol listesi oluşturduk. Verileriniz yalnızca yerel olarak tarayıcınızda saklanacaktır. Listenizi istediğiniz zaman tekrar görüntüleyebilirsiniz, daha sonra bir yer imi aracılığıyla da erişebilirsiniz.",
	"overview.title.2": "Belge Kontrolünü nasıl kullanırsınız:",
	"overview.text.2": `<ul class="list-decimal pl-5 lg:pl-7 w-9/10">
		<li>Gerekli belgeleri ok simgesiyle indirin.</li>
		<li>Halihazırda doldurduğunuz belgeleri işaretleyin.</li>
		<li>Yazdırdığınız belgeleri randevunuza götürün.</li>
	</ul>`,
	"overview.feedback": "Bize birkaç soru yanıtlayarak yardımcı olun.",
	"overview.id-card.hint.text":
		"01.05.2025'ten itibaren biyometrik pasaport fotoğrafları yalnızca yetkili resmi dairelerde (Bürgeramtlar) veya sertifikalı fotoğraf stüdyolarında dijital olarak çekilebilir ve güvenli elektronik yollarla gönderilebilir.",
	"overview.forms-certificate-of-conduct.hint.text":
		"Adli sicil kaydını çevrimiçi başvurabilirsiniz. <a href='https://service.berlin.de/dienstleistung/120926/?wt_mc=dokucheck' target='_blank' class='font-bold hover:underline text-berlin-blue-500 visited:text-purple-500'>Buraya</a> tıklayın.",
	"overview.forms-residence-registration.hint.text":
		"İkamet kaydınızı çevrimiçi yapabilirsiniz. <a href='https://service.berlin.de/dienstleistung/120686/?wt_mc=dokucheck' target='_blank' class='font-bold hover:underline text-berlin-blue-500 visited:text-purple-500'>Buraya</a> tıklayın. Eğer çevrimiçi kaydolmayı tercih ederseniz, <a href='https://service.berlin.de/terminvereinbarung/termin/manage/' target='_blank' class='font-bold hover:underline text-berlin-blue-500 visited:text-purple-500'>randevunuzu iptal edin</a>.",

	registrationForm: "Başvuru Formu",
	movingInConfirmation: "Konut sahibinden/ kiralayandan taşınma onayı",
	birthCertificate: "Doğum Belgesi Aslı",
	marriageCertificate: "Evlilik Cüzdanı",
	idDocumentForSpouse: "Eşin kimlik kartı veya pasaportu",
	childBirthCertificate: "Çocuk/ çocukların doğum belgesi aslı",
	custodyDeclaration: "Vesayet Bildirgesi",
	idDocumentForChild:
		"Çocuk/ çocukların kimlik kartı, pasaport veya çocuk pasaportu",
	guardianConsent: "Çocuğun/ çocukların velisinin onayı",
	additionalRegistrationForm: "Diğer başvuru formu",
	germanIdOrPassportOrChildPassport:
		"Kendi kimlik kartınız, pasaportunuz veya çocuk pasaportunuz",
	germanIdOrPassport: "Kendi kimlik kartınız veya pasaportunuz",
	confirmationOfCustodian: "Veli onayı",
	euIdOrPassportOrReplacement:
		"Avrupa kimlik kartı, pasaport veya pasaport yerine geçebilecek belgeler",
	nonEuIdOrPassportOrReplacement:
		"Pasaport veya pasaport yerine geçebilecek belgeler",
	supplement: "Kayıt/ Ana ikamet bildirimi ek belgesi",

	idOfParents: "Ebeveynlerin kimlik belgeleri",
	bringChild: "Çocuğunuzu getirin",
	proofOfCustody:
		"Vesayet belgesi örneği, örneğin, çocuk koruma kaydından resmi onaylı örnek",
	consentOfCustodian: "Veli olmayanın onayı",
	copyOfID: "Veli olmayan ebeveynin kimlik fotokopisi",
	newOrOldID: "Geçerli veya eski kimlik kartı veya pasaport",
	birthCertificateOrPartnershipCertificate:
		"Doğum belgesi, evlilik belgesi veya ortaklık belgesi",
	passportOrforeignID: "Pasaport veya önceki vatandaşlığın kimlik belgesi",
	naturalizationCertificate: "Vatandaşlık belgesi",

	birthCertificateOfRepresantative: "Temsilci kişinin doğum belgesi",
	carerId: "Bakıcı kimlik kartı",
	idOfLegalRepresantative: "Yasal temsilcinin kimlik belgesi",
	idDocument: "Kimlik belgesi",
	writtenRequestAuthorized:
		"Yetkili bir kuruluştan yazılı talep (genişletilmiş adli sicil kaydı)",
	nameAndAddressOfAuthority: "Yetkili makam adı ve adresi",
	fileNumber: "Dosya numarası",
	purposeOfApplication: "Başvuru amacı, örneğin, kamu hizmetine alınma",
	letterOrEmailFromAuthority: "Makamdan yazı veya e-posta",
	bankOrCreditCard: "Banka kartı veya kredi kartı",

	/*
	Proje Hakkında
	*/
	"about.title": "Belge Kontrolü Projesi Hakkında",
	"about.text.p1":
		"Berlin Bürgerämter, randevu iptallerinin en yaygın sebebinin gerekli belgelerin eksik veya unutulmuş olmasından kaynaklandığını rapor etmektedir. Kişisel durumunuzla ilgili kısa sorularla uygulama, hangi belgelerin gerektiğini net bir şekilde gösteren kişisel bir kontrol listesi oluşturur. Bu, bürokratik sürecinizi daha verimli ve stressiz hale getirir.",
	"about.text.p2":
		"Belge Kontrolü ile başvurabilirsiniz: <a class='font-bold hover:underline text-berlin-blue-500 visited:text-purple-500' href='https://service.berlin.de/dienstleistung/120686/?wt_mc=dokucheck' target='_blank' rel='noopener noreferrer'>Ana ikamet kaydı</a>, <a class='font-bold hover:underline text-berlin-blue-500 visited:text-purple-500' href='https://service.berlin.de/dienstleistung/120703/' target='_blank' rel='noopener noreferrer'>Kimlik kartı başvurusu</a> ve <a class='font-bold hover:underline text-berlin-blue-500 visited:text-purple-500' href='https://service.berlin.de/dienstleistung/120926/?wt_mc=dokucheck' target='_blank' rel='noopener noreferrer'>Adli sicil kaydı</a> başvurusu. Uygulama, <a class='font-bold hover:underline text-berlin-blue-500 visited:text-purple-500' href='https://www.berlin.de/ba-friedrichshain-kreuzberg/politik-und-verwaltung/aemter/amt-fuer-buergerdienste/buergeramt-der-zukunft/buergeramt-der-zukunft-1461966.php' target='_blank' rel='noopener noreferrer'>Friedrichshain-Kreuzberg Belediyesi</a> ile işbirliği içinde geliştirilmiştir.",
	"about.text.p3":
		"Geliştirme sürecine dair daha fazla bilgi için kodu <a class='font-bold hover:underline text-berlin-blue-500 visited:text-purple-500' href='https://github.com/technologiestiftung/checkliste' target='_blank' rel='noopener noreferrer'>Github</a>'da bulabilirsiniz.",
	"about.text.p4": "Başvurunuz için başarılar dileriz!",

	/*
	Data Privacy
	*/
	"dataPrivacy.title":
		"“Belge Kontrolü” Prototipi için Veri Gizliliği Bildirimi",
	"dataPrivacy.subtitle":
		"Bu veri gizliliği bildirimi yalnızca “Belge Kontrolü” prototipi için geçerlidir.",
	"dataPrivacy.title.p1": "1. Genel Bilgiler",
	"dataPrivacy.subtitle.p1.1": "1.1 Veri Gizliliği Bildiriminin Amacı",
	"dataPrivacy.text.p1.1": `Bu veri gizliliği bildirimi, Technologiestiftung Berlin tarafından toplanan, kullanılan ve işlenen verilerin türü, kapsamı ve amacı ile kişisel verilerinizi koruma haklarınız hakkında sizi bilgilendirmeyi amaçlamaktadır. Technologiestiftung Berlin, kişisel verilerin korunmasına olan sorumluluğunun farkındadır ve özellikle gizliliğinizin korunması için çaba sarf etmektedir.   
<br/><br/>
Kişisel veriler, Veri Koruma Yönetmeliği (DSGVO - Yönetmelik (EU) 2016/679) anlamında, bir kişiyi doğrudan veya dolaylı olarak tanımlanabilir kılan her türlü bilgidir. 25 Mayıs 2018'den itibaren DSGVO'nun uygulanmasıyla birlikte, Technologiestiftung Berlin, verilerinizin korunmasını sağlamak ve kendi çıkarlarını göz önünde bulundurarak kullanımı sınırlamak için bir dizi önlem almıştır.`,
	"dataPrivacy.subtitle.p1.2": "1.2 Sorumlu Kişi",
	"dataPrivacy.text.p1.2": `Veri Koruma Yönetmeliği (DSGVO), Avrupa Birliği'nde geçerli olan diğer veri koruma yasaları ve veri koruma niteliğindeki diğer düzenlemelere göre sorumlu kişi Technologiestiftung Berlin'dir.  
<br/><br/>
Technologiestiftung Berlin <br/>
Grunewaldstraße 61-62 <br/> 
10825 Berlin <br/>  
Almanya <br/><br/>

Tel.: 030 20 96 99 90  <br/>
E-posta: info(at)ts.berlin  <br/>
Web sitesi: <a class="font-bold hover:underline text-berlin-blue-500 visited:text-purple-500"
							href="https://www.technologiestiftung-berlin.de/de/stiftung/"
							target="_blank"
							rel="noopener noreferrer"
						>Technologiestiftung Berlin</a> <br/><br/>

Veri koruma ile ilgili her türlü soru ve bilgi talebiniz için, veri koruma görevlisine şu adresten ulaşabilirsiniz:  <br/><br/>

Michael Scherer  <br/>
Technologiestiftung Berlin  <br/>
Grunewaldstraße 61-62  <br/>
10825 Berlin  <br/>
Almanya  <br/><br/>

Tel.: 030 20 96 99 951  <br/>
E-posta: <a class="font-bold hover:underline text-berlin-blue-500 visited:text-purple-500"
							href="mailto:datenschutz@ts.berlin"
							target="_blank"
							rel="noopener noreferrer"
						>datenschutz[at]ts.berlin</a>`,

	"dataPrivacy.subtitle.p1.3": "1.3 Veri Toplama, İşleme ve Kullanma Amaçları",
	"dataPrivacy.text.p1.3": `<a class='font-bold hover:underline text-berlin-blue-500 visited:text-purple-500' href='https://www.technologiestiftung-berlin.de/de/stiftung/' target='_blank' rel='noopener noreferrer'>Technologiestiftung Berlin</a>, hukuki kişiliğe sahip kar amacı gütmeyen bir sivil hukuk vakfıdır. Vakfın faaliyetleri kapsamında kişisel verilerin işlenmesi gerekmektedir.  
<br/><br/>
Kişisel veriler, şu amaçlarla toplanmakta, işlenmekte ve kullanılmaktadır: 
<br/><br/>
<ul class="list-disc pl-12 w-9/10">
	<li>Technologiestiftung hakkında bilgi verme ve Technologiestiftung faaliyetlerine davetler</li>
	<li>İş ortakları ve ilgililerle ilişki yönetimi</li>
	<li>İnsan kaynakları yönetimi</li>
	<li>İç ve dış muhasebe işlemleri </li>
	<li>Kamusal ve özel fonların başvurusu ve yönetimi</li>
	<li>Kendi proje desteklerinin yönetimi </li> 
</ul>
<br/>
Veriler, yasal gereklilikler çerçevesinde üçüncü taraflara işlenmek üzere aktarılabilir, çünkü meşru bir çıkar veya yükümlülük bulunmaktadır. Bu üçüncü taraflar şunlar olabilir: 
<br/><br/>
<ul class="list-disc pl-12 w-9/10">
	<li>Veri işleme hizmet sağlayıcıları (DSGVO Madde 29 ve Madde 6 (1) a ve f'ye göre)</li>
	<li>İç birimler, verilerin görevlerini yerine getirebilmesi için gerekli olduğu durumlarda (DSGVO Madde 6 (1) a ve f)</li>
	<li>Kamusal makamlar, öncelikli yasal düzenlemeler gerektirdiği takdirde (DSGVO Madde 6 (1) c)</li>
	<li>Dışsal birimler, sözleşmelerin yerine getirilmesi için (DSGVO Madde 6 (1) b)</li>
</ul>`,
	"dataPrivacy.subtitle.p1.4": "1.4 Bilgi Talebi, Düzeltme ve İptal",
	"dataPrivacy.text.p1.4": `Eğer Technologiestiftung Berlin tarafından kişisel verileriniz toplanmışsa, size kayıtlı olan veriler hakkında tam bilgi alma hakkınız vardır. Bu, kişisel verilerinizin tüm kayıtlarını, toplama amaçlarını ve saklama sürelerini içerir.   
<br/><br/>
Ayrıca, verilerinizi düzeltme veya düzeltme talep etme hakkınız vardır. Eğer verilerinizi kullanmak için onay verdiyseniz, bu onayı her zaman geri alabilirsiniz.  
<br/><br/>
Böyle bir durumda, 1.2'de belirtilen veri koruma görevlisi ile iletişime geçebilirsiniz.`,

	"dataPrivacy.subtitle.p1.5":
		"1.5 Kişisel Verilerin Silinmesi ve Engellenmesi",
	"dataPrivacy.text.p1.5": `Toplanan kişisel veriler, yalnızca amacına hizmet ettiği süre boyunca saklanır ve işlenir. Bu amaç sona erdiğinde, veriler düzenli aralıklarla silinir.  
<br/><br/>
Verilerinizi silinmesini veya engellenmesini her zaman talep edebilirsiniz. Bunun için 1.2'de belirtilen veri koruma görevlisi ile iletişime geçebilirsiniz.  
<br/><br/>
Bir engelleme bildirimi, Technologiestiftung Berlin'in veri setinizi yalnızca sizin belirlediğiniz amaçlar doğrultusunda kullanabileceği anlamına gelir. Veri seti silinmez.  
<br/><br/>
Lütfen, Technologiestiftung Berlin'in Avrupa Birliği düzenlemeleri ve diğer yasal mevzuatlar doğrultusunda belirli saklama sürelerine tabi olduğunu unutmayın. Bu durumda, sizi bilgilendirerek verileri saklama süresinin sonunda sileceğiz.`,
	"dataPrivacy.title.p2": "2. İlgili Hizmetler",
	"dataPrivacy.subtitle.p2.1": "2.1 Çerezler",
	"dataPrivacy.text.p2.1": `Çerezler, web sitelerini ziyaret ederken veri depolayan ve web sitemizle belirli verileri ve ayarları paylaşan verilerdir.   
<br/><br/>
Çerezlerin kullanılmasına, tarayıcı ayarlarınızla veya Ghostery ya da uBlock gibi ek araçlarla genel olarak karşı çıkabilir veya sınırlayabilirsiniz. Hangi uzantıların internet tarayıcınızla uyumlu olduğunu üretici sayfalarından öğrenebilirsiniz.  
<br/><br/>
Teknik olarak gerekli çerezler dışında, başka izleme veya analiz çerezleri kullanılmamaktadır. Ancak, YouTube'dan pazarlama çerezleri uygulanabilir, aşağıdaki 2.7 maddesine bakınız.  
<br/><br/>
İlk kez çevrimiçi hizmetlerimizi kullanırken, Technologiestiftung Berlin'in çevrimiçi hizmetleri iyileştirmek için çerez yerleştirmesine izin verip vermemek konusunda bir karar verebilirsiniz.`,
	"dataPrivacy.subtitle.p2.2": "2.2 Web Analiz Aracı Matomo",
	"dataPrivacy.text.p2.2": `Ziyaretçi istatistiklerini daha ayrıntılı analiz etmek için Matomo web analiz aracını kullanıyoruz, eski adıyla Piwik. Bu yazılım Innocraft şirketine aittir (InnoCraft Ltd, 150 Willis St, 6011 Wellington, Yeni Zelanda).  
Yazılım, Almanya içinde kendi sunucularımıza kurulmuştur ve verileri AB dışına iletmez.  
<br/><br/>
Matomo, verileri takma adla işler ve çerez kullanmaz. Veriler anonimleştirilir, bize gösterilmeden önce. Bu nedenle, kullanıcıların kimlikleri hakkında hiçbir sonuç çıkarmamız mümkün değildir.  
<br/><br/>
Aşağıdaki bilgiler bizim için analiz edilebilir: 
<br/><br/>
<ul class="list-disc pl-12 w-9/10">
  <li>Sayfa ziyaretleri, link tıklamaları, indirmeler, giriş ve çıkış sayfası ile işlemin gerçekleştiği zaman</li>
  <li>Kullanıcı cihazları ve ayarları hakkında bilgiler: Üretici/marka, model/cihaz sürümü, cihaz türü, ekran çözünürlüğü, tarayıcı dil ayarı</li>
  <li>Konum hakkında bilgiler: Erişim yapılan ülke</li>
</ul>
<br/>
Toplama amacı, web sitesinde olası hataları tespit etmek ve düzeltmek, içeriği ziyaretçilerimizin ihtiyaçlarına göre uyarlamak ve optimize etmektir. Bu çıkarlar, DSGVO Madde 6, Madde 1 S.1. lit f'ye uygun olarak meşrudur. Bu verilere yalnızca Technologiestiftung Berlin erişebilir. Üçüncü şahıslara aktarım yapılmaz.  
<br/><br/>
Matomo, açık kaynaklı bir yazılımdır ve veri suistimallerini önlemek için yüksek standartlar uygular. Daha fazla bilgi için buraya bakabilirsiniz.   
<br/><br/>
Sorularınız için 1.2'de belirtilen veri koruma görevlisi ile iletişime geçebilirsiniz.`,
};

export default tr;
