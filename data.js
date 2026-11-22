// =========================================================
// KOLAY DÜZENLENEBİLİR AYARLAR
// =========================================================
// 1. Birliktelik başlangıç tarihinizi buradan değiştirebilirsin (YYYY-AA-GGTSaat):
const RELATIONSHIP_START_DATE = "2023-11-22T00:00:00";

// 2. Testteki 6. sorunun ("En sevdiğim kış ayı hangisi?") doğru cevabını
// daha sonra belirlediğinde aşağıdaki null yerine şıklardan birini yazabilirsin
// (Örn: "Aralık", "Ocak", "Şubat" veya "Hepsi"):
const QUIZ_Q6_CORRECT_ANSWER = null;

// =========================================================
// GÜNÜN ROMANTİK MESAJLARI (Ana Menüde Her Gün Değişir)
// =========================================================
const DAILY_MESSAGES = [
  "Üç yıl geçti ama seni sevmek hâlâ en sevdiğim alışkanlık, bitanem. ❤️",
  "Sesini duyduğum an günün bütün ağırlığı üzerimden kalkıyor, bebişim. 💗",
  "Gülüşün hâlâ ilk günkü kadar içimi ısıtıyor, nihoşum. ✨",
  "Hayatın koşturmacasında en sakin limanım sensin, bebişim. 💜",
  "İyi ki yollarımız kesişmiş, iyi ki benimlesin, nihat. ❤️",
  "Gözlerinin içi güldüğünde dünyadaki her şey yerli yerine oturuyor, nihoşum. 💖",
  "Üçüncü yılımızda bile seninle yeni şeyler keşfetmek heyecan veriyor, bebişim. 🧡"
];

// =========================================================
// TÜM BÖLÜMLERİN LİSTESİ VE İÇERİKLERİ
// =========================================================
const SITE_SECTIONS = [
  // ---------------------------------------------------------
  // YENİ SÜRPRİZ BÖLÜMLER (Madde 6 - 12)
  // ---------------------------------------------------------
  {
    id: "tesekkur",
    group: "new",
    type: "hearts-grid",
    theme: "theme-tesekkur",
    icon: "❤️",
    cardGradient: "linear-gradient(135deg, #6b0f2b, #d91e48)",
    title: "SANA TEŞEKKÜR ETMEK İSTEDİĞİM ❤️",
    shortDesc: "Sana olan minnetimi anlatan özel teşekkür kalpleri.",
    subCategories: [
      {
        title: "Sana Teşekkür Etmek İstediğim Her Şey ❤️",
        items: [
          "Hayatıma girdiğin için teşekkür ederim.",
          "Beni olduğum gibi kabul ettiğin için teşekkür ederim.",
          "En kötü günlerimde bile yanımda olduğun için teşekkür ederim.",
          "Beni güldürmeyi başardığın için teşekkür ederim.",
          "Sesinle içimi huzurla doldurduğun için teşekkür ederim.",
          "Bazen tek bir sözünle bütün günümü güzelleştirdiğin için teşekkür ederim.",
          "Bana kendimi özel hissettirdiğin için teşekkür ederim.",
          "Beni dinlediğin için teşekkür ederim.",
          "Anlatamadığım şeyleri bile anlamaya çalıştığın için teşekkür ederim.",
          "Birlikte geçirdiğimiz güzel anılar için teşekkür ederim.",
          "En saçma hâllerime bile eşlik ettiğin için teşekkür ederim.",
          "Benimle çocuk gibi eğlenebildiğin için teşekkür ederim.",
          "Beni özlediğini hissettirdiğin için teşekkür ederim.",
          "Varlığınla uzakları yakın yaptığın için teşekkür ederim.",
          "Bana sevginin güzel taraflarını gösterdiğin için teşekkür ederim.",
          "Birlikte hayal kurduğun için teşekkür ederim.",
          "Bazen hiçbir şey yapmadan bile mutlu edebildiğin için teşekkür ederim.",
          "Gülüşümü çoğalttığın için teşekkür ederim.",
          "Bana güven verdiğin için teşekkür ederim.",
          "Beni merak ettiğin için teşekkür ederim.",
          "Küçük ayrıntıları hatırladığın için teşekkür ederim."
        ]
      }
    ]
  },
  {
    id: "tanima-testi",
    group: "new",
    type: "quiz",
    theme: "theme-test",
    icon: "💗",
    cardGradient: "linear-gradient(135deg, #ff7b00, #ff3e7f)",
    title: "BENİ NE KADAR TANIYORSUN? – 20 SORULUK TEST 💗",
    shortDesc: "Bakalım beni ne kadar iyi tanıyorsun nihoşum? 20 soruluk eğlenceli test!",
    questions: [
      {
        q: "En sevdiğim içecek hangisi?",
        options: ["Limonata", "Türk Kahvesi", "Soğuk Çay", "Portakal Suyu"],
        answer: "Limonata"
      },
      {
        q: "En sevdiğim roman hangisi?",
        options: ["Aşk-ı Memnu", "Dudaktan Kalbe", "Çalıkuşu", "Kürk Mantolu Madonna"],
        answer: "Dudaktan Kalbe"
      },
      {
        q: "En sevdiğim renklerden biri hangisi?",
        options: ["Yeşil", "Sarı", "Turuncu", "Gri"],
        answer: "Turuncu"
      },
      {
        q: "En sevdiğim renk üçlüsü hangisi?",
        options: [
          "Mavi, beyaz, siyah",
          "Turuncu, kırmızı, kahverengi",
          "Mor, pembe, lila",
          "Sarı, yeşil, lacivert"
        ],
        answer: "Turuncu, kırmızı, kahverengi"
      },
      {
        q: "Günün hangi vaktini daha çok severim?",
        options: ["Gece", "Sabahın ilk ışıkları", "Gündüz", "Gece yarısı"],
        answer: "Gündüz"
      },
      {
        q: "En sevdiğim kış ayı hangisi?",
        options: ["Aralık", "Ocak", "Şubat", "Hepsi"],
        answer: QUIZ_Q6_CORRECT_ANSWER // Daha sonra belirlenecek
      },
      {
        q: "En sevdiğim yemek türü hangisi?",
        options: ["Sebze yemekleri", "Hamur işleri", "Et yemekleri", "Deniz ürünleri"],
        answer: "Et yemekleri"
      },
      {
        q: "En sevdiğim dizi hangisi?",
        options: ["True Beauty", "Goblin", "Friends", "Vincenzo"],
        answer: "True Beauty"
      },
      {
        q: "En sevdiğim saç rengi hangisi?",
        options: ["Sarı", "Bakır", "Platin", "Küllü Kumral"],
        answer: "Bakır"
      },
      {
        q: "Beni en çok kızdıran şey nedir?",
        options: ["Geç kalınması", "Haksızlık", "Gürültü", "Soğuk hava"],
        answer: "Haksızlık"
      },
      {
        q: "Beni en çok üzen şey nedir?",
        options: ["Ayrımcılık", "Yağmur yağması", "Telefonun şarjının bitmesi", "Trafik"],
        answer: "Ayrımcılık"
      },
      {
        q: "Birinden nefret etmeme neden olabilecek özellik nedir?",
        options: ["Çok konuşması", "Egolu olması", "Utangaç olması", "Sessiz olması"],
        answer: "Egolu olması"
      },
      {
        q: "Kendimi ne kadar güzel buluyorum?",
        options: ["%50", "%75", "%90", "%100"],
        answer: "%100"
      },
      {
        q: "Bana bir içecek ısmarlayacak olsan hangisini seçmelisin?",
        options: ["Limonata", "Kola", "Ayran", "Soda"],
        answer: "Limonata"
      },
      {
        q: "Sevdiğim roman hangisiydi?",
        options: ["Eylül", "Dudaktan Kalbe", "Mai ve Siyah", "İntibah"],
        answer: "Dudaktan Kalbe"
      },
      {
        q: "Sevdiğim renklerden oluşan bir hediye hangi tonlarda olmalı?",
        options: ["Mavi ve beyaz", "Turuncu ve kırmızı", "Yeşil ve gri", "Siyah ve lacivert"],
        answer: "Turuncu ve kırmızı"
      },
      {
        q: "Beni en çok kızdıran davranış nedir?",
        options: ["Şaka yapmak", "Haksızlık yapmak", "Soru sormak", "Yavaş yürümek"],
        answer: "Haksızlık yapmak"
      },
      {
        q: "En sevdiğim saç rengi hangisi?",
        options: ["Kızıl-Siyah", "Bakır", "Mavi", "Altın Sarısı"],
        answer: "Bakır"
      },
      {
        q: "Kendimi ne kadar güzel buluyorum?",
        options: ["%60", "%80", "%95", "%100"],
        answer: "%100"
      },
      {
        q: "Beni gerçekten tanıyan biri en sevdiğim içeceğin ne olduğunu bilir mi?",
        options: ["Limonata", "Çay", "Kahve", "Su"],
        answer: "Limonata"
      }
    ]
  },
  {
    id: "gelecek-mesajlari",
    group: "new",
    type: "locks",
    theme: "theme-gelecek",
    icon: "🔐",
    cardGradient: "linear-gradient(135deg, #0f172a, #2563eb)",
    title: "BİR SONRAKİ SÜRPRİZ – KİLİTLİ GELECEK MESAJLARI 🔐",
    shortDesc: "Geleceğe bıraktığım kilitli notlar. Her kilidi tek tek aç!",
    locks: [
      "Gelecekte bu satırı okuyorsan, bil ki bugün de seni çok seviyorum.",
      "Belki çok şey değişti ama kalbimdeki yerin değişmesin istiyorum.",
      "Bir gün bu mesajı okurken yanımda olmanı diliyorum.",
      "Gelecekteki Nihat'a: Kendine iyi bak, çünkü benim için çok değerlisin.",
      "Birlikte kurduğumuz hayallerin bir gün gerçeğe dönüşmesini istiyorum.",
      "Belki şu an gülümsüyorsundur. Gülüşünü hiç kaybetme.",
      "Zaman geçse de sana ilk günkü heyecanımla bakabilmek istiyorum.",
      "Birlikte daha nice yıl dönümlerimiz olsun.",
      "Gelecekte de en sevdiğim insanlardan biri olmanı diliyorum.",
      "Bir gün bu sayfayı tekrar açıp ne kadar yol aldığımızı hatırlayalım.",
      "Hayat bazen zorlaşsa da güzel günleri birlikte çoğaltalım.",
      "Seninle daha çok anı biriktirmek istiyorum.",
      "Birlikte yaşlanacağımız günleri hayal etmek bile güzel.",
      "Umarım bugün hayallerinden birine daha yaklaşmışsındır.",
      "Bu sayfanın son mesajı ama sana sevgimin sonu değil. İyi ki sen. ❤️"
    ]
  },
  {
    id: "gizli-kapi",
    group: "new",
    type: "secret-door",
    theme: "theme-gizli",
    icon: "💜",
    cardGradient: "linear-gradient(135deg, #3c096c, #9d4edd)",
    title: "GİZLİ KAPI – ŞİFREYLE AÇILAN ÖZEL SAYFA 💜",
    shortDesc: "Sadece benim nihoşumun açabileceği şifreli sürpriz kapı!"
  },
  {
    id: "duygu-mesajlari",
    group: "new",
    type: "mood-messages",
    theme: "theme-duygu",
    icon: "🫂",
    cardGradient: "linear-gradient(135deg, #db2777, #9333ea)",
    title: "DUYGULARINA GÖRE AÇABİLECEĞİ MESAJLAR 🫂",
    shortDesc: "Şu an nasıl hissediyorsan o kapıyı seç, sana özel mesajın açılsın.",
    categories: [
      {
        id: "kirildiginda",
        name: "Kırıldığında",
        icon: "💔",
        messages: [
          "Şu an canın yanıyor olabilir ama lütfen kendini suçlama.",
          "Senin kalbin güzel şeyleri hak ediyor.",
          "Her şeyi içine atmak zorunda değilsin.",
          "Birinin seni anlamaması, anlaşılmaya değer olmadığın anlamına gelmez.",
          "Senin iyi niyetin bir zayıflık değil.",
          "Bir hata yaptıysan bu seni kötü biri yapmaz.",
          "Bazen susmak yerine içindekileri anlatmak iyi gelir.",
          "Yaşadığın şeyler senin bütün hayatın değil.",
          "Bugün kötü geçti diye yarın da kötü geçecek değil.",
          "Kendine başkalarına gösterdiğin şefkati göster.",
          "Senin değerini birinin davranışı belirleyemez.",
          "Kalbini yoran şeylerden biraz uzaklaşabilirsin.",
          "Her zaman herkesi memnun etmek zorunda değilsin.",
          "Ben senin sadece mutlu hâlini değil, kırgın hâlini de önemsiyorum.",
          "Unutma, sen benim için çok değerlisin. ❤️"
        ]
      },
      {
        id: "mutlu",
        name: "Mutlu Olduğunda",
        icon: "🥰",
        messages: [
          "İşte benim en sevdiğim hâlin: Gülümseyen hâlin!",
          "Umarım bu gülüşün hiç eksilmez.",
          "Mutluluğunu görmek benim de içimi güzelleştiriyor.",
          "Bugün güzel şeyler olduysa tadını sonuna kadar çıkar.",
          "Gülmeye devam et benim güzel nihoşum. 💗"
        ]
      },
      {
        id: "yorgun",
        name: "Yorgun Olduğunda",
        icon: "😮‍💨",
        messages: [
          "Bugün her şeyi başarmak zorunda değilsin.",
          "Biraz dinlenmek de ilerlemenin bir parçası.",
          "Verdiğin emeklerin karşılığını alacağın günler gelecek.",
          "Kendini fazla zorlama, sen bir makine değilsin.",
          "Bugün yapabildiğin kadarı yeterli.",
          "Küçük adımlar da seni hayallerine yaklaştırır.",
          "Yorulman vazgeçmen gerektiği anlamına gelmez.",
          "Biraz nefes al, sonra yeniden devam edersin.",
          "Senin çabanı görüyorum ve takdir ediyorum.",
          "Her gün aynı enerjide olmak zorunda değilsin.",
          "Bugün kendine iyi davranmayı unutma.",
          "Bir mola vermek hayallerinden vazgeçmek değildir.",
          "Senin için güzel şeyler olsun istiyorum.",
          "Emek verdiğin hiçbir şeyin boşa gitmemesini diliyorum"
        ]
      },
      {
        id: "hayaller",
        name: "Hayalleri İçin Motivasyon",
        icon: "🚀",
        messages: [
          "Bir gün istediğin işe kavuştuğunda bugün verdiğin emekleri hatırlayacaksın.",
          "Kendi evinin kapısını açtığın günü birlikte kutlamayı hayal ediyorum.",
          "Hayalindeki arabaya bindiğinde yüzündeki mutluluğu görmek istiyorum.",
          "Bugün attığın küçük adımlar yarının büyük başarılarına dönüşebilir.",
          "Kendine inan, çünkü başarabileceklerin sandığından daha fazla.",
          "İstediğin hayat bir günde kurulmaz ama her gün biraz daha yaklaşabilirsin.",
          "Bir gün kendi kazancınla hayallerini gerçekleştireceksin.",
          "Başarısızlıklar yolun sonu değil, öğrenmenin bir parçası.",
          "Bir iş görüşmesinin sonucu senin bütün yeteneğini belirlemez.",
          "Kendini geliştirmek için harcadığın zaman geleceğine yaptığın yatırımdır.",
          "Hayalindeki eve ulaşmak için bugün küçük birikimler bile anlamlı olabilir.",
          "Bir gün anahtarlarını elinde tutup “Başardım!” diyeceksin.",
          "Hedeflerin büyük olabilir, yeter ki adımlarını sabırla at.",
          "Kimsenin seni küçümsemesine izin verme"
        ]
      },
      {
        id: "degersiz",
        name: "Kendini Değersiz Hissettiğinde",
        icon: "🫂",
        messages: [
          "Senin varlığın bile sevilmeye değer.",
          "Kendini eksik gördüğün yerler seni sevilmez yapmaz.",
          "Herkesin hayatında ilerleme hızı farklıdır.",
          "Senin de güzel şeyleri hak ettiğini unutma.",
          "Bir günün kötü geçmesi, kötü biri olduğun anlamına gelmez.",
          "Kendine haksızlık etme, elinden geleni yapıyorsun.",
          "Başkalarının sözleri senin kim olduğunu belirleyemez.",
          "Senin fikirlerin, hayallerin ve duyguların önemli.",
          "Sadece var olduğun için bile değerlisin.",
          "Kendini kanıtlamak için herkese yetişmek zorunda değilsin.",
          "Seninle gurur duyulacak çok şey var.",
          "Eksiklerin olabilir ama bu seni değersiz yapmaz.",
          "Kendine biraz daha sevgiyle bakmanı istiyorum.",
          "Ben seni sadece başardıkların için değil, sen olduğun için seviyorum.",
          "Bunu sakın unutma: Sen benim gözümde çok değerlisin. 💗"
        ]
      }
    ]
  },
  {
    id: "sonsuz-kalpler",
    group: "new",
    type: "infinite-hearts",
    theme: "theme-sonsuz",
    icon: "💖",
    cardGradient: "linear-gradient(135deg, #ff3e7f, #ff7b00, #7b2cbf)",
    title: "SONSUZ KALPLER ❤️",
    shortDesc: "Ortadaki büyük kalbe her dokunduğunda rengârenk kalpler patlasın!"
  },
  {
    id: "sans-carki",
    group: "new",
    type: "wheel",
    theme: "theme-cark",
    icon: "🎡",
    cardGradient: "linear-gradient(135deg, #d91e48, #ff7b00, #2563eb)",
    title: "ŞANS ÇARKI – RASTGELE ROMANTİK GÖREVLER 🎡",
    shortDesc: "Çarkı çevir, şansımıza çıkan romantik görevi birlikte yapalım!",
    tasks: [
      "Ona şu an ne kadar sevdiğini anlatan bir mesaj gönder.",
      "Birbirinize en sevdiğiniz anınızı anlatın.",
      "Bugün birbirinize üç iltifat edin.",
      "Birbirinize komik bir lakap bulun.",
      "İlk konuştuğunuz günü hatırlayın.",
      "Birlikte gitmek istediğiniz bir yeri seçin.",
      "Birbirinize en sevdiğiniz şarkıyı gönderin.",
      "Birbirinize gelecekte yapmak istediğiniz bir şeyi anlatın.",
      "Beş dakika boyunca sadece güzel şeylerden konuşun.",
      "Birbirinize en komik anınızı anlatın.",
      "Bugün birbirinize küçük bir sürpriz yapın.",
      "Birbirinize üç tane “iyi ki” cümlesi söyleyin.",
      "Birbirinize bir sonraki buluşmanız için plan yapın."
    ]
  },

  // ---------------------------------------------------------
  // MEVCUT BÖLÜMLER (HİÇBİR CÜMLE DEĞİŞTİRİLMEDEN KORUNDU)
  // ---------------------------------------------------------
  {
    id: "bolum-1",
    group: "existing",
    type: "hearts-grid",
    theme: "theme-bolum-1",
    icon: "💌",
    cardGradient: "linear-gradient(135deg, #800f2f, #ff4d6d)",
    title: "BÖLÜM 1: KISA SEVGİ & MİNNET NOTLARI",
    shortDesc: "Sana duyduğum sevgi ve minneti anlatan 19 özel not.",
    subCategories: [
      {
        title: "Kısa Sevgi & Minnet Notları (19 Not)",
        items: [
          "Sesini duyduğum an günün bütün ağırlığı üzerimden kalkıyor, bebişim.",
          "Gülüşün hâlâ ilk günkü kadar içimi ısıtıyor, nihoşum.",
          "Yanımda olduğun sürece en karışık gün bile kolaylaşıyor, bitanem.",
          "Bana verdiğin güven için sana her gün yeniden teşekkür ediyorum, nihatım.",
          "Bazen tek bir bakışın, bin tane kelimeden daha fazla şey anlatıyor, nihat.",
          "Üç yıl geçti ama seni sevmek hâlâ en sevdiğim alışkanlık, bitanem.",
          "Küçük bir mesajınla bile bütün ruh halimi değiştirebiliyorsun, nihoşum.",
          "Hayatın koşturmacasında en sakin limanım sensin, bebişim.",
          "Seninle susmak bile hiç sıkıcı değil, aksine çok huzurlu, nihatım.",
          "Bana gösterdiğin sabır ve şefkat için minnettarım, bitanem.",
          "İyi ki yollarımız kesişmiş, iyi ki benimlesin, nihat.",
          "En sıradan anları bile seninle özel bir hatıraya çevirebiliyoruz, bebişim.",
          "Gözlerinin içi güldüğünde dünyadaki her şey yerli yerine oturuyor, nihoşum.",
          "Zor zamanlarımda elimi bırakmadığın için çok şanslıyım, bitanem.",
          "Seninle kurduğumuz her küçük şaka günümü aydınlatıyor, nihatım.",
          "Bana kendimi olduğum gibi değerli hissettiriyorsun, nihat.",
          "Üçüncü yılımızda bile seninle yeni şeyler keşfetmek heyecan veriyor, bebişim.",
          "İkimizin arasında kurduğumuz o özel dil çok kıymetli, nihoşum.",
          "Kırgınlıkları bile sevgiyle çözebilmemiz ne güzel bir şey, bitanem."
        ]
      }
    ]
  },
  {
    id: "bolum-2",
    group: "existing",
    type: "hearts-grid",
    theme: "theme-bolum-2",
    icon: "🫙",
    cardGradient: "linear-gradient(135deg, #b91c1c, #f59e0b)",
    title: "BÖLÜM 2: BANA BİR ŞEY ÇIKAR – ŞANS KAVANOZU",
    shortDesc: "Şans kavanozundan senin için çıkan 20 sürpriz not ve hak.",
    subCategories: [
      {
        title: "Şans Kavanozu Notları (20 Not)",
        items: [
          "Kavanozdan çıkan bu notla birlikte bugün benden kocaman bir sarılma kazanıyorsun, nihoşum.",
          "Bugün aramızdaki en komik anıyı baştan sona anlatma sırası sende, bebişim.",
          "Kavanoz sana bugün tatlı bir şeyler ısmarlama şansı verdi, bitanem.",
          "İçimden geçen gizli not: Üç yılda en çok sevdiğim şey, birlikte olgunlaşmamız, nihatım.",
          "Bugünkü meydan okuma: Hiç gülmeden otuz saniye göz göze bakalım nihat, ilk gülen kaybeder.",
          "Bugün birlikte en sevdiğimiz şarkılardan üç tanesini arka arkaya dinleyelim, bebişim.",
          "Kavanozdan çıkan sürpriz: Bugün istediğin bir konuda \"evet\" deme hakkın var, nihoşum.",
          "Gizli sevgi notu: Bazen en çok seni özlediğimi fark ettiğimde sadece gülümsüyorum, bitanem.",
          "Bugün birbirimize içimizden gelen en samimi iltifatı söyleyelim, nihatım.",
          "Kavanoz sana bugünün film veya dizi seçim yetkisini verdi, nihat.",
          "Bugünkü görev: Bana hiç söylemediğin küçük bir hayalini paylaş, bebişim.",
          "Kavanozdan çıkan not: Seninle geçen her gün bana yeni bir şey öğretiyor, nihoşum.",
          "Bugün birlikte hiç bilmediğimiz yeni bir kelime veya ifade uyduralım, bitanem.",
          "Kavanoz sana uzun ve sımsıkı bir sarılma hakkı tanımladı, nihatım.",
          "Gizli not: İlk zamanlardaki o tatlı heyecanımızdan hiçbir şey kaybetmedik, nihat.",
          "Bugünkü meydan okuma: Bana üç farklı komik taklit ya da ses tonu dene, bebişim.",
          "Bugün birlikte gelecekte yapacağımız bir tatilin hayalini kurup not alalım, nihoşum.",
          "keyifli bir hedef belirleyelim, nihoşum.",
          "Kavanoz sana bugün istediğin zaman kullanabileceğin bir iltifat hakkı verdi, bitanem.",
          "Gizli not: Seninle kurduğumuz sessizlikler bile çok anlamlı ve huzurlu, nihatım."
        ]
      }
    ]
  },
  {
    id: "bolum-3",
    group: "existing",
    type: "hearts-grid",
    theme: "theme-bolum-3",
    icon: "🚪",
    cardGradient: "linear-gradient(135deg, #6d28d9, #db2777)",
    title: "BÖLÜM 3: RUH HALİ KAPISI",
    shortDesc: "Gülmek İstiyorum, Duygusalım, Motivasyon Lazım ve Şımartılmak İstiyorum kapıları.",
    subCategories: [
      {
        title: "Gülmek İstiyorum",
        items: [
          "İkimizin de en saçma esprilere bile güldüğü o anları hatırlayıp gülümse bebişim.",
          "Ciddiyetini bir kenara bırakıp bugün tamamen neşeli bir modda takılalım, nihoşum.",
          "En sıradan olayı bile komik bir hikayeye çevirme yeteneğimizle bugün gülelim, bitanem.",
          "Kendimize uydurduğumuz o komik lakapları düşündükçe neşen hemen gelsin, nihatım.",
          "Bugün mantık aramadan, sadece gülümseten küçük şeylere odaklanalım, nihat.",
          "İkimizin de en sakar ya da dalgın anlarını hatırlayıp gülümseyelim, bebişim.",
          "Kahkahalarımızla en durgun havayı bile dağıtabilme gücümüzü hissedelim, nihoşum.",
          "Bugün küçük takılmalara, tatlı atışmalara ve bolca neşeye yer açalım, bitanem.",
          "En basit yanlış anlaşılmayı bile şakaya çevirebildiğimiz o günler ne güzeldi, nihatım.",
          "Bugün yüzündeki o içten gülüşün hiç eksilmeyeceği neşeli bir an olsun, nihat.",
          "Komik bir senaryo uydurup ikimizin de gülmekten konuşamadığı anları yaşayalım, bebişim.",
          "Bugün hayatı biraz daha hafif alıp birlikte bol bol gülelim, nihoşum.",
          "Küçük bir şakayla bile enerjini yükseltebilecek o sıcak neşe şimdi seninle.",
          "Bugün en neşeli halinle etrafına ışık saçmaya devam et.",
          "Gülüşün, bugün duyabileceğim en güzel ses ve en iyi moral."
        ]
      },
      {
        title: "Duygusalım",
        items: [
          "İçinden geçen duyguların ağırlığını saklamak zorunda değilsin, bitanem.",
          "Üç yılın biriktirdiği o derin duygular bazen tek cümleyle gözleri doldurabiliyor, nihatım.",
          "Duygusal anlar, birbirimize ne kadar değer verdiğimizi hatırlatıyor, nihat.",
          "Bugün kalbindeki o hassas yere nazikçe dokunan bir sıcaklıkla yanındayım, bebişim.",
          "Bazen kelimeler azalır, duygular taşar; o anlarda sadece yanında olmak yeter, nihoşum.",
          "Geçmişten bugüne taşıdığımız o samimi bağ, duygusal anlarda daha görünür oluyor, bitanem.",
          "İçindeki yumuşaklığı ve derinliği görmek beni sana her zaman yakın kılıyor, nihatım.",
          "Bugün duygularını bastırmadan, olduğu gibi hissetmene alan açalım, nihat.",
          "Sevgi ve özlem birleştiğinde ortaya çıkan o ince duygu, ilişkimizin en derin rengi.",
          "Kalbinde biriken her hissi paylaşabileceğin güvenli bir alan her zaman var.",
          "Üç yıllık yolculuğumuzun duygusal izleri, bugün ne kadar büyüdüğümüzü gösteriyor.",
          "Hassas olduğun anlarda yanında olmak, sana duyduğum şefkati daha da artırıyor.",
          "Bugün kalbinin en içten köşesindeki o samimi cümlelere kulak verelim.",
          "Duygularımızın derinliği, birbirimizi gerçekten önemsediğimizin en güzel kanıtı.",
          "İster hüzünlü ister sevgi dolu olsun, bugün her duygunla yanındayım."
        ]
      },
      {
        title: "Motivasyon Lazım",
        items: [
          "Bugün biraz zorlanıyor olabilirsin ama aştığın bütün adımlar gücünü gösteriyor, bebişim.",
          "Küçük bir adım bile seni hedefine bir adım daha yaklaştırır, nihoşum.",
          "Yeteneklerin, sabrın ve güçlü duruşunun üstesinden gelemeyeceği şey azdır, bitanem.",
          "Bugün her şeyi mükemmel yapmak zorunda değilsin, nihatım.",
          "Yorulduğunda kısa bir mola ver, nefes al ve kaldığın yerden devam et, nihat.",
          "İnandığın şeylerin peşinden giderken yanında seni destekleyen biri var, bebişim.",
          "Zor görünen anlar, ileride güzel hikayelere dönüşecek, nihoşum.",
          "Bugün kendine biraz daha nazik davran ve kendi gücünü hafife alma, bitanem.",
          "Her yeni gün, önceki günden daha güçlü ve daha deneyimli başlamak için bir fırsat.",
          "Odaklanman dağıldığında derin bir nefes al ve tek bir küçük adıma yoğunlaş.",
          "Emek verdiğin hiçbir şey boşa gitmez; sabrın meyvesini mutlaka verecek."
        ]
      },
      {
        title: "Şımartılmak İstiyorum",
        items: [
          "Bugün bütün ilgi, özen ve tatlı sürprizler sadece senin için ayrıldı, nihatım.",
          "Hiçbir şey düşünmeden, sadece sevildiğini hissetmenin tadını çıkar, nihat.",
          "Bugün sana kocaman bir sarılma, bolca iltifat ve tatlı bir özen var, bebişim.",
          "Kendini tamamen rahat bırak; bugün seni mutlu etmek önceliğim, nihoşum.",
          "En sevdiğin tatlıyı, en güzel sözü ve en sıcak ilgiyi hak ediyorsun, bitanem.",
          "Bugün sorumlulukları bir kenara bırakıp şımartılmanın keyfine var, nihatım.",
          "Sana duyduğum sevgiyi bugün her zamankinden daha tatlı kılıyorum, nihat.",
          "Küçük bir nazınla bile kalbimi eritebildiğini biliyorsun, bebişim.",
          "Bugün senin günün gibi hissettirmek için buradayım, her detayıyla yanındayım.",
          "Gözlerinin içi gülsün diye bugün sana ekstra özenli ve sevgi dolu yaklaşıyorum.",
          "Hiçbir çaba harcamadan sadece sevilmenin o rahatlığını yaşayabilirsin.",
          "Bugün sana gönderilen her satır, seni ne kadar çok önemsediğimi fısıldıyor.",
          "Tatlı isteklerin ve küçük kaprislerin bugün başımın üstünde yeri var.",
          "Bugün kendini dünyanın en özel ve en şanslı insanı gibi hissetmeni istiyorum.",
          "Tüm kalbimle yanındayım; bugün sadece gülümse ve şımartılmanın tadını çıkar."
        ]
      }
    ]
  },
  {
    id: "bolum-5",
    group: "existing",
    type: "hearts-grid",
    theme: "theme-bolum-5",
    icon: "✨",
    cardGradient: "linear-gradient(135deg, #1d4ed8, #9333ea)",
    title: "BÖLÜM 5: GELECEK HAYALİ & ORTAK YAPILACAKLAR",
    shortDesc: "Birlikte gerçekleştireceğimiz 25 gelecek hayali ve yapılacaklar listesi.",
    subCategories: [
      {
        title: "Gelecek Hayali & Ortak Yapılacaklar (25 Hayal)",
        items: [
          "Sabah kahvelerimizi deniz kenarında, dalga sesini dinleyerek içelim, nihoşum.",
          "Hiç plan yapmadan arabaya atlayıp haritada parmağımızın durduğu yere gidelim, bitanem.",
          "Kışın kar yağarken sıcak bir battaniye altında film maratonu yapalım, nihatım.",
          "İkimizin de daha önce hiç denemediği bir mutfaktan yemek yapmayı öğrenelim, nihat.",
          "Gün batımını izleyebileceğimiz yüksek ve sakin bir tepede vakit geçirelim, bebişim.",
          "Kendi küçük kitaplığımızı kurup yan yana kitap okuyacağımız akşamlar biriktirelim, nihoşum.",
          "Birlikte seramik ya da resim atölyesine gidip komik eserlere gülelim, bitanem.",
          "Yıldızların en net göründüğü bir yerde gece gökyüzünü izleyelim, nihatım.",
          "İleride kendi evimizin balkonunu rengarenk çiçeklerle donatalım, nihat.",
          "Birlikte uzun bir tren yolculuğuna çıkıp cam kenarından manzarayı izleyelim, bebişim.",
          "Lunaparkta en heyecanlı oyuncaklara binip birlikte çığlık atalım, nihoşum.",
          "Birlikte fotoğraf albümü hazırlayıp eski notlarımızı yanına ekleyelim, bitanem.",
          "Yaz gecesinde sahilde yürüyüp sabaha karşı eve dönelim, nihatım.",
          "İkimizin de sevdiği bir şehri turist gibi karış karış gezelim, nihat.",
          "Yağmurlu bir pazar günü evde pancake yapıp müzik dinleyelim, bebişim.",
          "Birlikte dans etmeyi öğrenip adımlara basınca kahkahalara boğulalım, nihoşum.",
          "Kamp kurup gece ateş başında uzun uzun hayaller kuralım, bitanem.",
          "Birbirimize yıllar sonra açmak üzere küçük mektuplar yazalım, nihatım.",
          "Botanik bahçesinde ya da büyük bir ormanda saatlerce yürüyüş yapalım, nihat.",
          "Açık hava sinemasında battaniyelere sarınıp film izleyelim, bebişim.",
          "Yeni bir dil öğrenmeye başlayıp birbirimizle pratik yapalım, nihoşum.",
          "Sabahın erken saatlerinde sokaklar boşken kahvaltıya çıkalım, bitanem.",
          "Birlikte bisiklet kiralayıp sahil boyunca pedallayalım, nihatım.",
          "Plak çalar ya da güzel bir ses sistemiyle evde dans gecesi yapalım, nihat.",
          "Doğum günlerimizi ve yıl dönümlerimizi kendi geleneklerimizle kutlayalım, bebişim."
        ]
      }
    ]
  },
  {
    id: "bolum-6",
    group: "existing",
    type: "hearts-grid",
    theme: "theme-bolum-6",
    icon: "🎲",
    cardGradient: "linear-gradient(135deg, #be185d, #ea580c)",
    title: "BÖLÜM 6: MİNİ TEST, İKİLİ SEÇİM & ÖZEL SÜRPRİZ",
    shortDesc: "İkili seçimler, birbirimizi tanıma notları ve kademeli gizli itiraf.",
    subCategories: [
      {
        title: "Mini Test, İkili Seçim & Özel Sürpriz (23 Kart)",
        items: [
          "İkili seçim: Yağmurlu bir günde evde battaniye altında film mi, yoksa şemsiyeyle sokaklarda gezmek mi? — İkisi de seninle olunca ayrı güzel; biri huzur, diğeri tatlı bir macera.",
          "İkili seçim: Sabah erken saatte sakin bir kahvaltı mı, yoksa gece geç saatte derin bir sohbet mi? — Sabahın dinginliği de güzel ama gece sohbetlerinin tadı bambaşka.",
          "İkili seçim: Tamamen plansız bir gün mü, yoksa her detayı önceden düşünülmüş bir program mı? — Plansızlık sürpriz getirir, plan ise güven; ikisinin dengesi en iyisi.",
          "İkili seçim: Deniz kenarında gün batımı mı, yoksa yıldızların altında gece yürüyüşü mü? — Hangisi olursa olsun, yanındaki el aynı olduğu sürece manzara tamamlanır.",
          "İkili seçim: Evde birlikte yemek yapmak mı, yoksa dışarıda yeni bir mekan keşfetmek mi? — Mutfakta birlikte dağıttığımız anlar bile kahkahaya dönüşüyor.",
          "İkili seçim: Uzun bir yol macerası mı, yoksa sakin bir hafta sonu kaçamağı mı? — Yol uzadıkça sohbetimiz de uzuyor, kısa kaçamaklar ise nefes aldırıyor.",
          "İkili seçim: Komedi filmiyle kahkahaya boğulmak mı, yoksa duygusal bir hikayede içlenmek mi? — Bazen birlikte gülmek, bazen de birlikte hissetmek iyi geliyor.",
          "İkili seçim: Sürpriz bir hediye mi, yoksa uzun ve içten bir mektup mu? — Kelimelerin kalıcı izi mektupta, anlık heyecanı sürprizde saklı.",
          "İkili seçim: Sessizce yan yana uzanmak mı, yoksa durmaksızın sohbet etmek mi? — İkisi de aramızdaki rahatlığı ve uyumu gösteriyor.",
          "İkili seçim: Yaz sıcağında akşam gezmesi mi, yoksa kış soğuğunda sıcak içecek keyfi mi? — Mevsim değişse de aramızdaki sıcaklık hiç değişmiyor.",
          "Birbirimizi tanıma testi: Sence beni en çabuk mutlu eden şey nedir? — Samimi bir gülüşün ve küçük bir ilginin etkisini hiçbir şey tutamaz.",
          "Birbirimizi tanıma testi: Moralim bozuk olduğunda bana en iyi ne gelir? — Yanımda olduğunu hissetmek ve tatlı bir anlayışla dinlenmek.",
          "Birbirimizi tanıma testi: İlişkimizde en değer verdiğim şey sence ne? — Güven, dürüstlük ve birbirimize olan içten bağlılık.",
          "Birbirimizi tanıma testi: Sence birlikte yapmaktan en çok keyif aldığım şey ne? — Seninle gülmek, konuşmak ve yeni anılar biriktirmek.",
          "Birbirimizi tanıma testi: Sence en tatlı huyum hangisi? — Sana olan düşkünlüğüm ve küçük şeylere bile sevinmem.",
          "Birbirimizi tanıma testi: Sence en komik halim ne zaman ortaya çıkıyor? — Heyecanlandığımda, acele ettiğimde ya da şakalaşırken.",
          "Birbirimizi tanıma testi: Sence gelecekte en çok neyi hayal ediyorum? — Birlikte kuracağımız huzurlu ve mutlu bir yaşamı.",
          "Birbirimizi tanıma testi: Sence beni en iyi anlatan kelime ne olabilir? — İçten, bağlı ve seni önemseyen biri.",
          "Birbirimizi tanıma testi: Sence aramızdaki en güçlü bağ ne? — Zamanla büyüyen güven ve birbirimizi anlama çabamız.",
          "Birbirimizi tanıma testi: Sence üç yılın en özel kazanımı ne? — Birbirimizi gerçekten tanımış ve sevmiş olmamız.",
          "Kademeli gizli not (1. Adım): Sana hiç söylemediğim küçük bir sır var... Merak ettiysen devam et.",
          "Kademeli gizli not (2. Adım): Bazen sana bakarken aklımdan geçen o en sessiz düşünce, ne kadar şanslı olduğum.",
          "Kademeli gizli not (3. Adım): Asıl itiraf: Seni ilk tanıdığım günden beri kalbimde açtığın yer hiç kapanmadı, aksine büyüdü."
        ]
      }
    ]
  },
  {
    id: "bolum-7",
    group: "existing",
    type: "hearts-grid",
    theme: "theme-bolum-7",
    icon: "📖",
    cardGradient: "linear-gradient(135deg, #701a75, #be185d)",
    title: "BÖLÜM 7: MİNİ HİKÂYE & SENARYO KARTLARI",
    shortDesc: "Yağmurlu günlerden sıcak sohbetlere 18 küçük hikâye ve senaryo.",
    subCategories: [
      {
        title: "Mini Hikâye & Senaryo Kartları (18 Kart)",
        items: [
          "Şemsiyesiz yakalandığımız o sağanakta saçak altında durup gülmüştük, nihoşum.",
          "Akşamüstü sırf hava almak için çıkıp otobüste saatlerce konuşmuştuk, bitanem.",
          "Yaz yağmurunun sıcak asfalta düşerken çıkardığı kokuda yürümüştük, nihatım.",
          "Planladığımız yer kapalı çıkınca yol üstündeki ilk lezzetçide durmuştuk, nihat.",
          "Vapurla karşıya geçerken birden başlayan çisentide dışarıda kalmıştık, bebişim.",
          "Cumartesi öğleden sonra hiçbir şey yapmayalım deyip sahile inmiştik, nihoşum.",
          "Aniden bastıran dolu yüzünden bir apartman girişine sığınmıştık, bitanem.",
          "Akşam karanlığında yönümüzü şaşırıp hiç bilmediğimiz yokuşa tırmanmıştık, nihatım.",
          "Sabah erken saatte alarm kurmadan uyanıp kahvaltıya geçmiştik, nihat.",
          "Yağmur camlara vururken oturduğumuz pencere kenarı çok sıcaktı, bebişim.",
          "Uzun ve yorucu bir haftanın ardından yan yana sessizce oturmuştuk, nihoşum.",
          "İkimizin de aklından binlerce şey geçerken el ele tutuşmuştuk, bitanem.",
          "Zor bir günün sonunda sesindeki o hafif yorgunluğu duymuştum, nihatım.",
          "Gece geç saatte ışıklar kapalıyken derin bir bakış paylaşmıştık, nihat.",
          "Üzgün olduğun o anlarda yüzündeki ifadeyi hemen yakalıyorum, bebişim.",
          "Birlikte geçirdiğimiz sakin bir akşamüstü çayında, geçmişteki zor günleri geride bırakmış olmanın rahatlığını hissetmiştik. Artık fırtınalardan korkmak yerine, birlikte nasıl ayakta kaldığımızı hatırlıyoruz.",
          "Kalabalık bir ortamın ortasında göz göze gelip sadece ikimizin anladığı o hafif gülümsemeyle anlaştığımız anlar büyüleyici. Etraf ne kadar gürültülü olursa olsun, o an sadece ikimiz varmışız gibi geliyor.",
          "İçini dökmekte zorlandığın o akşam sabırla beklediğimde, bana açtığın her kapı için içimde büyük bir minnet oluşmuştu. Güveninin bu kadar kıymetli olduğunu her seferinde yeniden anlıyorum."
        ]
      }
    ]
  },
  {
    id: "bolum-8",
    group: "existing",
    type: "staged-hearts",
    theme: "theme-bolum-8",
    icon: "💝",
    cardGradient: "linear-gradient(135deg, #6b21a8, #e11d48)",
    title: "BÖLÜM 8: ÇOK AŞAMALI İTİRAF & KATMANLI KART",
    shortDesc: "Her kutucukta 3 aşamalı açılan 13 derin itiraf kartı.",
    cards: [
      [
        "Aşama 1: Sana hiç söylemediğim küçük bir detay var, nihoşum...",
        "Aşama 2: Bazen senden uzakta olduğumda en sıradan şeylerde bile seni hatırlıyorum.",
        "Aşama 3: Asıl itiraf: Hayatımdaki birçok güzel anın arka planında mutlaka sen varsın, bitanem."
      ],
      [
        "Aşama 1: İlk zamanlarda içimde tuttuğum tatlı bir düşünceyi şimdi açıyorum...",
        "Aşama 2: Seni daha yakından tanıdıkça ne kadar samimi ve özel olduğunu fark etmiştim.",
        "Aşama 3: Asıl itiraf: Seni ilk tanıdığım günden beri kalbimdeki yerin büyüdü, nihatım."
      ],
      [
        "Aşama 1: Bazen en güçlü göründüğüm anların bile arkasında bir sebep saklı...",
        "Aşama 2: Kendimi kararsız hissettiğimde senin varlığın bana denge veriyor, nihat.",
        "Aşama 3: Asıl itiraf: Bana verdiğin o sessiz güç düşündüğünden çok daha büyük."
      ],
      [
        "Aşama 1: Küçük bir gülüşünün bende yarattığı o ani etkiyi hiç anlatmamıştım...",
        "Aşama 2: Günün en yoğun anında bile yüzün aklıma gelince yumuşuyorum, bebişim.",
        "Aşama 3: Asıl itiraf: Gülüşün benim için en hızlı ve en tatlı moral kaynağı."
      ],
      [
        "Aşama 1: İlişkimizde beni en çok etkileyen o ince noktayı paylaşmak istiyorum...",
        "Aşama 2: Zor anlarda bile birbirimizi koparmadan sevgiyle kalabilmemiz kıymetli, nihoşum.",
        "Aşama 3: Asıl itiraf: Bu olgunluk ve bağ beni sana her geçen gün daha çok bağlıyor."
      ],
      [
        "Aşama 1: Bazen kendi kendime gülümsediğim gizli bir an var...",
        "Aşama 2: Eskiden söylediğimiz tatlı sözler aklıma düştüğünde gülümsüyorum, bitanem.",
        "Aşama 3: Asıl itiraf: İkimizin kurduğu o küçük dünyayı her şeyden çok seviyorum."
      ],
      [
        "Aşama 1: Sana karşı hiç eksilmeyen o merak duygusunun sırrı ne biliyor musun?",
        "Aşama 2: Üç yıl geçmesine rağmen her gün yeni bir düşünceni görmek güzel, nihatım.",
        "Aşama 3: Asıl itiraf: Seni tanımak benim için hiç bitmeyen keyifli bir keşif."
      ],
      [
        "Aşama 1: Zor zamanlarda içimden geçen ama her zaman dile getirmediğim bir şey var...",
        "Aşama 2: Bazen kelimeleri bulmakta zorlansam da yanında durmanın en doğru şey olduğunu biliyorum.",
        "Aşama 3: Asıl itiraf: Senin yanında olmak her zaman en içten arzum, nihat."
      ],
      [
        "Aşama 1: Gece uykuya dalmadan önce aklımdan geçen o son cümlelerden biri...",
        "Aşama 2: Günün nasıl geçtiğinden bağımsız olarak varlığın içimi rahatlatıyor, bebişim.",
        "Aşama 3: Asıl itiraf: İyi ki hayatımdasın diye fısıldayarak günü kapatıyorum."
      ],
      [
        "Aşama 1: Bazen en küçük detayları bile neden bu kadar önemsediğimi merak edebilirsin...",
        "Aşama 2: Çünkü sevginin en gerçek hali, o küçücük özen ve hatırlamalarda gizli.",
        "Aşama 3: Asıl itiraf: Sana dair her ayrıntı benim için ayrı bir değer taşıyor, nihoşum."
      ],
      [
        "Aşama 1: Geleceğe dair kurduğum hayallerin içindeki en net sahneyi anlatayım...",
        "Aşama 2: Büyük sahnelerden çok, yan yana oturup huzurla sohbet ettiğimiz anlar geliyor aklıma.",
        "Aşama 3: Asıl itiraf: Gelecekteki en büyük mutluluğum, seninle geçen o sakin günler, bitanem."
      ],
      [
        "Aşama 1: Kırgınlıklarımızın ardından içimde kalan o asıl duyguyu hiç saklamayayım...",
        "Aşama 2: Kızgınlıklar gelip geçiyor ama sana duyduğum sevgi ağır basıyor, nihatım.",
        "Aşama 3: Asıl itiraf: Seni sevmek, her türlü kırgınlığın çok üzerinde duruyor."
      ],
      [
        "Aşama 1: Bu katmanlı yolculuğun son notuna hazır mısın?",
        "Aşama 2: Üç yıl geçti ama kalbimdeki sevgi ve heyecan hâlâ çok taze.",
        "Aşama 3: Asıl itiraf: İyi ki varsın, iyi ki benimlesin ve üçüncü yılımız kutlu olsun."
      ]
    ]
  },
  {
    id: "bolum-9",
    group: "existing",
    type: "hearts-grid",
    theme: "theme-bolum-9",
    icon: "⚖️",
    cardGradient: "linear-gradient(135deg, #c2410c, #db2777)",
    title: "BÖLÜM 9: İLİŞKİ & UYUM TESTİ / SEÇİM DÜELLOSU",
    shortDesc: "Üçüncü yıl karnemiz ve aramızdaki uyumu anlatan 20 düello kartı.",
    subCategories: [
      {
        title: "İlişki & Uyum Testi / Seçim Düellosu (20 Kart)",
        items: [
          "Hangisi daha çok biz: Gülerken ciddiyetini kaybeden ikili mi, yoksa derin sohbetlere dalan ikili mi? — İkisi de tam biz; kahkahayla derinliği aynı anda yaşayabiliyoruz.",
          "Birlikte hangisini seçerdik: Hiç plan yapmadan yola çıkmak mı, yoksa en sevdiğimiz yere gitmek mi? — Günün ruhuna göre ikisi de bize çok yakışıyor.",
          "Beni en iyi anlatan kelime hangisi: İçtenlik mi, bağlılık mı, neşe mi, yoksa anlayış mı? — Hepsinden biraz taşıyorum ama en çok seni önemseyen tarafımla varım.",
          "Üçüncü yıl karnesi: İletişim notumuz nasıl? — Birbirimizi dinlemeye ve anlamaya çalışan samimi bir iletişimimiz var.",
          "İlişki tercihi: Sürpriz planlar mı, yoksa huzurlu rutinler mi? — İkisinin birleşimi bize en güzel uyumu veriyor.",
          "Eğlenceli ikili seçim: Komik taklitler mi, yoksa tatlı şakalar mı? — İkisi de yüzümüzde aynı anda gülümseme açıyor.",
          "Hangisi daha çok biz: Sessizce yan yana durmak mı, yoksa hiç susmadan konuşmak mı? — İkisinde de hiç sıkılmadan aynı huzuru paylaşıyoruz.",
          "Birlikte hangisini seçerdik: Sabah erken kahve mi, yoksa gece geç sohbet mi? — Gece sohbetlerinin samimiyeti de sabahın sakinliği de ayrı güzel.",
          "Beni en iyi anlatan kelime hangisi: Sabır mı, şefkat mi, heyecan mı, yoksa güven mi? — Sana karşı duyduğum sevgi hepsini içinde barındırıyor.",
          "Üçüncü yıl karnesi: Uyum ve anlayış notumuz nasıl? — Zamanla birbirimizi daha iyi okuyup daha iyi anlayabiliyoruz.",
          "İlişki tercihi: Uzun bir yolculuk mu, yoksa sıcak bir ev akşamı mı? — İkisinde de yan yana olmak en büyük artımız.",
          "Eğlenceli ikili seçim: En saçma şakaya gülmek mi, yoksa tatlı inatlaşmalar mı? — İkisi de ilişkimizin neşeli yüzünü oluşturuyor.",
          "Hangisi daha çok biz: Hayaller kuran ikili mi, yoksa anın tadını çıkaran ikili mi? — Hem bugünü yaşıyor hem de geleceği birlikte kurguluyoruz.",
          "Birlikte hangisini seçerdik: Yağmurda ıslanmak mı, yoksa cam kenarında yağmuru izlemek mi? — Sıcak bir köşeden izlemek rahat, aniden ıslanmak ise eğlenceli.",
          "Beni en iyi anlatan kelime hangisi: Samimiyet mi, özen mi, sadakat mi, yoksa neşe mi? — En çok içtenliğim ve sana olan bağlılığım öne çıkıyor.",
          "Üçüncü yıl karnesi: Eğlence ve neşe notumuz nasıl? — Birlikte gülebildiğimiz sürece neşemiz hiç eksik olmuyor.",
          "Birlikte hangisini seçerdik: Güneşli bir pazar gezisi mi, yoksa yağmurlu bir pazar dinlenmesi mi? — İkisi de seninle huzurlu bir pazar demek.",
          "Beni en iyi anlatan kelime hangisi: Koruyucu mu, anlayışlı mı, içten mi, yoksa hayalperest mi? — Seni koruyan, anlayan ve içtenlikle seven bir yanım hep var.",
          "Üçüncü yıl karnesi: Genel üçüncü yıl puanımız ne olsun? — Üç yılın emeği, sevgisi ve hatıralarıyla tam kalpten bir başarı.",
          "İlişki tercihi: Bugünkü sevgimiz mi, yoksa yarın büyüyecek sevgimiz mi? — Bugün çok güzel ama yarın daha da derinleşecek."
        ]
      }
    ]
  },
  {
    id: "bolum-10",
    group: "existing",
    type: "hearts-grid",
    theme: "theme-bolum-10",
    icon: "💊",
    cardGradient: "linear-gradient(135deg, #312e81, #9d174d)",
    title: "BÖLÜM 10: ÖZEL GÜN, SAAT & RUH HALİ KAPSÜLÜ",
    shortDesc: "Uyumadan önce, yorgunken ve çok mutluyken açılacak 30 kapsül mesaj.",
    subCategories: [
      {
        title: "Uyumadan Önce Okunacak Sakin & Romantik Metinler",
        items: [
          "Günün bütün gürültüsü geride kaldı; şimdi huzurla uyuyabilirsin, nihatım.",
          "Bugün ne yaşandıysa bitti, şimdi sadece dinlenme zamanı, nihat.",
          "Uyumadan önce aklımdan geçen en güzel şey huzurlu bir gecen, bebişim.",
          "Gece sessizliğinde kalbinin dinlenmesine izin ver, nihoşum.",
          "Gözlerin kapanırken içindeki gerginlik huzura bıraksın kendini, bitanem.",
          "Bugün de elimi bırakmadığın için teşekkür ederek uyuyorum, nihatım.",
          "Gece boyunca en tatlı rüyaların seninle olmasını diliyorum, nihat.",
          "Günün telaşını kapının dışında bırakıp sıcak bir uykuya geç, bebişim.",
          "Uykuya dalmadan önce bilmeni isterim ki bugün seninle çok güzeldi, nihoşum.",
          "İyi geceler sevgilim, yarın yeni bir günde yeniden buluşalım, bitanem."
        ]
      },
      {
        title: "Morali Bozukken veya Yorgunken Açılacak Destekleyici Mesajlar",
        items: [
          "Şu an yorgun ya da moralsiz hissetmen çok normal, nihatım.",
          "Bugün her şeyi çözmek zorunda değilsin, biraz nefes al, nihat.",
          "Zor bir gün geçiriyor olabilirsin ama bu hal geçici, bebişim.",
          "İçinde biriken ağırlığı tek başına taşımak zorunda değilsin, nihoşum.",
          "Yorgunluğun belli olsa da değerin ve gücün hiç eksilmiyor, bitanem.",
          "Bugün kendine biraz daha nazik davran, nihatım.",
          "Moralin bozukken bile seni olduğun gibi seviyorum, nihat.",
          "Küçük bir mola, derin bir nefes ve biraz şefkat şu an en güzel başlangıç olabilir.",
          "Bu zor gün de geçecek ve yerini yeniden gülümseyebileceğin güzel anlara bırakacak.",
          "Yanındayım; ne hissettiğin ne olursa olsun seni anlayan ve destekleyen biri var."
        ]
      },
      {
        title: "Çok Mutluyken Paylaşabileceği Coşkulu Mesajlar",
        items: [
          "Bugün içindeki o parıltı ve mutluluk harika, bebişim!",
          "Mutlu olduğun anları görmek benim de içimi kıpır kıpır yapıyor, nihoşum!",
          "Bugünün enerjisini doyasıya yaşa, bu neşe sana çok yakışıyor, bitanem!",
          "İçindeki sevinci ve coşkuyu paylaşmak bile başlı başına bulaşıcı bir mutluluk!",
          "Bugün yüzündeki o içten gülümsemenin hiç solmamasını ve gününün harika geçmesini diliyorum!",
          "Mutluluğun büyüdükçe benim de sevincim büyüyor; güzel anların hep çoğalsın!",
          "Bugün kendinle gurur duyabileceğin, neşeli ve keyifli bir günün tadını çıkar!",
          "Gözlerinin içi güldüğünde dünyadaki en güzel manzaralardan biri ortaya çıkıyor!",
          "Bu coşkulu halinle bugün her şeyin daha kolay ve daha keyifli akmasını diliyorum!",
          "Mutluluğun daim olsun; yanında olup o gülümsemeye eşlik etmek bana her zaman büyük keyif veriyor!"
        ]
      }
    ]
  },
  {
    id: "bolum-11",
    group: "existing",
    type: "hearts-grid",
    theme: "theme-bolum-11",
    icon: "📜",
    cardGradient: "linear-gradient(135deg, #86198f, #b91c1c)",
    title: "BÖLÜM 11: SÖZLER, SÖZLEŞMELER & TATLI KURALLAR",
    shortDesc: "Üçüncü yıl sözlerimiz, asla vazgeçmeyeceklerim ve 10 Joker Kart hakkın!",
    subCategories: [
      {
        title: "Üçüncü Yıl Özel İlişki Maddeleri",
        items: [
          "Üçüncü yılımızda da birbirimizi dinlemeye söz veriyorum, nihatım.",
          "Yoğun günlerin ortasında bile birbirimize zaman ayıracağım, nihat.",
          "Yeni şeyler öğrenirken birbirimizin gelişimini destekleyeceğim, bebişim.",
          "Küçük sürprizlerle ve tatlı sözlerle neşeyi canlı tutacağım, nihoşum.",
          "Zor zamanlarda birbirimize sırt çevirmek yerine el ele kalacağım, bitanem.",
          "Üç yıllık emeğimizi ve güvenimizi her şeyin üzerinde tutacağım, nihatım.",
          "İletişimde dürüstlüğü ve nazik dili önceliklendireceğim, nihat.",
          "Birlikte kurduğumuz hayalleri adım adım gerçeğe yaklaştıracağım, bebişim.",
          "Aramızdaki tatlı takılmaların ve şakaların sevgi sınırları içinde hep sürmesini sağlayacağım.",
          "Üçüncü yılımızda da birbirimizi ilk günkü kadar önemsemeye ve değer vermeye söz veriyorum."
        ]
      },
      {
        title: "Senden Asla Vazgeçmeyeceğim Şeyler Listesi (11–20)",
        items: [
          "Seni her koşulda dinlemekten asla vazgeçmeyeceğim, nihoşum.",
          "Aramızdaki o samimi bağ ve güveni korumaktan vazgeçmeyeceğim, bitanem.",
          "Seni güldürmeye ve moralini yükseltmeye çalışmaktan vazgeçmeyeceğim, nihatım.",
          "Gelecekte birlikte kuracağımız hayalleri düşünmekten vazgeçmeyeceğim, nihat.",
          "Hatalar ve kırgınlıklar olsa bile sevgiyle konuşmaktan vazgeçmeyeceğim, bebişim.",
          "Sana karşı nazik, anlayışlı ve düşünceli olmaktan asla vazgeçmeyeceğim.",
          "Birlikte yeni anılar ve güzel hikayeler biriktirmekten asla vazgeçmeyeceğim.",
          "Seni olduğun gibi kabul edip değer vermekten asla vazgeçmeyeceğim.",
          "En sıradan anlarda bile seninle olmanın kıymetini bilmekten asla vazgeçmeyeceğim.",
          "Seni sevmekten ve hayatımda olduğun için şükretmekten asla vazgeçmeyeceğim."
        ]
      },
      {
        title: "İstenildiği Zaman Kullanılabilecek Joker Kartlar",
        items: [
          "Joker Kart – Tartışmayı Erteleme Hakkı: Yorgun ya da gergin olduğunda hassas bir konuşmayı sakin bir zamana erteleme hakkın var.",
          "Joker Kart – Uzun Sarılma Hakkı: İstediğin anda uzun, sımsıkı ve içten bir sarılma talep edebilirsin.",
          "Joker Kart – Tatlı Ismarlatma Hakkı: Bu jokerle benden tatlı bir ikram veya sevdiğin bir şeyi ısmarlamamı isteyebilirsin.",
          "Joker Kart – İltifat İsteme Hakkı: Canın istediği anda benden içten ve özel bir iltifat cümlesi alabilirsin.",
          "Joker Kart – Birlikte Film Seçme Hakkı: Film ya da dizi seçiminde son sözü bugün tamamen sana bırakıyorum.",
          "Joker Kart – Sürpriz Küçük Jest Hakkı: Bugün benden ufak ama tatlı bir sürpriz jest isteme hakkın aktif.",
          "Joker Kart – Rahatlama ve Mola Hakkı: Hiçbir şey yapmak istemediğin anlarda sadece dinlenme ve mola hakkını kullanabilirsin.",
          "Joker Kart – İlk Söz Hakkı: Bir konuda konuşmaya ilk başlayan ve konuyu yönlendiren taraf sen olabilirsin.",
          "Joker Kart – Tatlı Takılma Muafiyeti: Bugün şaka ve takılmalara ara verip tamamen yumuşak ve sakin bir ilgi isteyebilirsin.",
          "Joker Kart – Özel Gün Planı Hakkı: Birlikte yapacağımız küçük bir keyif planının detaylarını dilediğin zaman belirleyebilirsin."
        ]
      }
    ]
  },
  {
    id: "bolum-12",
    group: "existing",
    type: "hearts-grid",
    theme: "theme-bolum-12",
    icon: "🪞",
    cardGradient: "linear-gradient(135deg, #4c1d95, #9f1239)",
    title: "BÖLÜM 12: DERİN ANALİZ & ÜÇ YILIN AYNASI KARTI",
    shortDesc: "Üç yıllık yolculuğumuzun derin yansımalarını anlatan 17 özel kart.",
    subCategories: [
      {
        title: "Derin Analiz & Üç Yılın Aynası Kartı (17 Kart)",
        items: [
          "Üç yıl boyunca ilişkimiz birbirimizi daha derin anlamayı öğrendiğimiz bir alan oldu, nihoşum.",
          "İlk günlerin heyecanı yerini daha derin bir yakınlığa bıraktı, bitanem.",
          "İlişkimizin büyümesi birlikte kurduğumuz sessiz anlayışla şekillendi, nihatım.",
          "Birbirimize kattığımız en önemli şeylerden biri, farklılıklarımızı bir engel değil, ilişkimizi zenginleştiren bir renk olarak görebilmek oldu.",
          "Zaman içinde ikimiz de farklı deneyimlerden geçtik ama birbirimizin yanında değişime ve büyümeye alan açabildik.",
          "Aştığımız her zorluk, aramızdaki bağın sadece mutlu günlerde değil, gerilim ve yorgunluk anlarında da ayakta kalabildiğini gösterdi.",
          "Güven, üç yılın sonunda en belirgin kazanımlarımızdan biri; birbirimizin niyetine ve sevgisine inanabilmek ilişkiyi çok güçlendiriyor.",
          "Sevginin zamanla olgunlaşması, tutku ve neşeyi eksiltmek yerine daha sakin, daha kalıcı ve daha derin bir sıcaklığa dönüştürdü.",
          "Birbirimize gösterdiğimiz sabır, aceleci tepkiler yerine anlayışı seçebildiğimiz noktada ilişkimizi koruyan en sağlam kalkan oldu.",
          "Üç yıllık aynaya baktığımızda, birbirimizi yıpratmak yerine birlikte nasıl daha iyi insan ve yol arkadaşı olabileceğimizi aradığımızı görüyoruz.",
          "İlişkimizde iletişim, bazen uzun cümlelerden çok, birbirimizin sessizliğini ve ruh halini fark edebilme inceliğiyle anlam kazandı.",
          "Geçmişte yaşadığımız küçük kırgınlıklar ve anlaşmazlıklar, birbirimizin hassas noktalarını öğrenmemize ve daha özenli olmamıza yaradı.",
          "Üç yılın sonunda birbirimize olan bağlılığımız, dış koşullardan bağımsız olarak içimizde kurduğumuz ortak dünyaya dayanıyor.",
          "Birlikte gülebilme kapasitemiz, en ciddi veya en yorucu dönemlerde bile ilişkimizin nefes almasını sağladı.",
          "Zamanla birbirimize verdiğimiz değer, sözlerden çok günlük davranışlardaki tutarlılık ve içtenlikle görünür hale geldi.",
          "İlişkimizin gelişiminde, birbirimize alan tanımakla yakın kalmak arasındaki o hassas dengeyi kurmaya çalışmamız büyük rol oynadı.",
          "Üç yıl boyunca biriktirdiğimiz anılar, bugün geleceğe bakarken elimizde tuttuğumuz en gerçek ve en sıcak dayanaklar."
        ]
      }
    ]
  }
];