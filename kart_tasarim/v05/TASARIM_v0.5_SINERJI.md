# Kart Oyunu — Tasarım v0.5: SİNERJİ ve BUILD YOLLARI (taslak, kullanıcı onayı bekliyor)
Amaç (kullanıcının sözleriyle): "Adam her farklı şey seçtiğinde ona göre kombin yapabilsin; iyi oyuncular daha iyi kombin kursun; bu oyuncuyu oyuna çeksin."
Üç hedef: (1) ÇEŞİTLİLİK — her koşu farklı build'e gider, (2) USTALIK — iyi oyuncu kartların rolünü görüp motor kurar, (3) KEŞİF — oyun, oyuncuya hangi kartın neyle çalıştığını gösterir.
Telif: türün ortak mekanikleri; tüm isimler, metinler, değerler ve kombinasyonlar bizim. v0.4 koşu yapısı, kademe, çanta, canavar, ekonomi AYNEN kalır.

## 1. Etiket sistemi (her kartta 3 katman)
- **Boyut:** Küçük (1) · Orta (2) · Büyük (3)
- **Tür (1 adet):** SİLAH · HAYVAN · İKSİR · ALET · KUTSAL
- **Okul (0-1 adet):** RÜZGÂR (hız, ok) · ÇELİK (kılıç, kritik) · TAO (kalkan, mühür) · ATEŞ (yanma) · GÖLGE (zehir, yavaşlatma)
Panelde "KÜÇÜK · SİLAH · RÜZGÂR" çipleri. Kart/beceri metinleri bu etiketleri hedefler ("bir HAYVAN kullanınca…", "RÜZGÂR kartların…").
Eski "etiket" (Kılıç/Ok/Tılsım/Element) kaldırılır; Kılıç/Ok kartları SİLAH türüdür, okulu ÇELİK veya RÜZGÂR.

## 2. Roller (oyuncuya öğretilir; panelde küçük rol ikonu)
- **MOTOR** — başka kartları hızlandırır/şarj eder (zincirin kaynağı)
- **TETİK** — çok hızlı döner, sık tetiklenir (motoru besler)
- **TAŞIYICI** — asıl hasarı/ölçeklenmeyi yapan, build'in kazanma yolu
- **DESTEK** — kalkan, iyileşme, kontrol (dondur/yavaşlat)
- **EKONOMİ** — altın, gelir, XP

## 3. Altı build yolu (her kahramanın iki "doğal" yolu var, ama karışım serbest)
| Yol | Kahraman | Fikir | Motor | Tetik | Taşıyıcı | Anahtar beceri |
|---|---|---|---|---|---|---|
| **Rüzgâr Motoru** | Okçu | Küçük RÜZGÂR kartları birbirini hızlandırır, büyük ok yağmurunu besler | Rüzgâr Yelpazesi, Turna Yavrusu | Seken Ok, Bambu Yay | Ok Yağmuru, Gökdelen Yay | Ok Ustalığı, Rüzgârın Sesi |
| **Zehir Okları** | Okçu | GÖLGE zehri yığar, yavaşlatır, uzun savaşı kazanır | Zehir Kesesi | Zehirli Ok, Engerek | Engerek Yayı, Zehir Sisi | Zehir Ustası, Kara Lotus Öğretisi |
| **Tek Kılıç** | Kılıç Ustası | Tezgâhta TEK SİLAH; tüm ALET'ler onu besler | Bileği Taşı, Demirci Örsü | Kılıç Kını | Ejder Kılıcı / Ağır Pala | Tek Kılıç Yemini |
| **Hançer Fırtınası** | Kılıç Ustası | Çok sayıda küçük ÇELİK silah; her kullanım diğerlerini besler, kritik yağmuru | Usta Kemeri | İkiz Hançer, Paslı Kılıç | Bin Hançer, Hayalet Kılıç | Keskin Göz, Fırtına Adımı |
| **Kalkan Duvarı** | Taocu | KUTSAL kalkan yığar, sonra kalkanı hasara çevirir | Tapınak Çanı, Taş Bekçi | Kâğıt Tılsım | Dağ Mührü, Ters Taş | Demir Deri, Dağın Sabrı |
| **Beş Element** | Taocu | ATEŞ yanma + buz dondurma; İKSİR'ler motoru çalıştırır | Kızgın Kor, Kâğıt Fener | Ateş Tılsımı | Anka Tüyü, Beş Element, Yıldırım | Alev Kalbi, Buz Kalbi |
Ortak aile: **HAYVAN** kartları her build'e girebilen yardımcılar ("bir HAYVAN kullanınca…" etkileri) — karışık build'ler için yapıştırıcı.

## 4. Kartlar (45) — Bronz değerleri; kademe başına ×2 (süre +%50)
"Kalıcı" = koşu boyunca kalıcı büyüme (oyuncu her gün kartının büyüdüğünü görür).
### RÜZGÂR (Okçu)
| Kart | Boy · Tür | Bkl | Etki · Tetik | Rol |
|---|---|---|---|---|
| Bambu Yay | O · SİLAH | 3 | 8 hasar · Bir RÜZGÂR kartı hızlanınca bu kart 0,5 sn şarj | TETİK |
| Seken Ok | K · SİLAH | 3 | 4 hasar ×2 · Hızlanmışsa ×3 | TETİK |
| Rüzgâr Yelpazesi | O · ALET | 4 | 2 RÜZGÂR kartını 1 sn hızlandır | MOTOR |
| Turna Yavrusu (YENİ) | K · HAYVAN | 5 | Bir SİLAH kullanınca en yavaş RÜZGÂR kartını 0,5 sn hızlandır | MOTOR |
| Sadak | O · ALET | pasif | RÜZGÂR kartlarının beklemesi −%10 · Kalıcı: her gün −%1 daha | DESTEK |
| Ok Yağmuru | B · SİLAH | 8 | 10 hasar ×3 · Bir RÜZGÂR kartı kullanılınca 1 sn şarj | TAŞIYICI |
| Gökdelen Yay (YENİ) | B · SİLAH | 10 | 60 hasar · Bu savaşta hızlandırıldığı her saniye için +10 hasar | TAŞIYICI |
| Kartal Gözü | K · HAYVAN | pasif | SİLAH kartlarına %10 kritik · Kalıcı: kazandığın her savaşta +%1 | DESTEK |
### GÖLGE (Okçu / ortak)
| Zehirli Ok | K · SİLAH | 4 | 4 hasar + 2 zehir | TETİK |
| Engerek (YENİ) | K · HAYVAN | 3 | 1 zehir · Rakip yavaşlamışsa 2 | TETİK |
| Zehir Kesesi (YENİ) | K · ALET | pasif | Zehir uyguladığında +1 ek zehir | MOTOR |
| Zehir Sisi | O · İKSİR | 5 | 3 zehir · Rakibin 2 kartını 1 sn yavaşlat | DESTEK |
| Engerek Yayı (YENİ) | O · SİLAH | 5 | 3 zehir · Bu savaşta her kullanımda +1 zehir · Kalıcı: kazanınca +1 | TAŞIYICI |
| Buz Oku | K · SİLAH | 4 | 6 hasar · Rakibin 1 kartını 1 sn dondur | DESTEK |
### ÇELİK (Kılıç Ustası)
| Paslı Kılıç | K · SİLAH | 4 | 10 hasar · Bir ÇELİK kartı kullanılınca 0,5 sn şarj | TETİK |
| İkiz Hançer | K · SİLAH | 2 | 4 hasar · Sağındaki SİLAH'ı 0,5 sn şarj et | TETİK |
| Kan Kılıcı | O · SİLAH | 5 | 15 hasar · Verdiği hasarın %50'si iyileşme | DESTEK |
| Hayalet Kılıç | K · SİLAH | 5 | 15 hasar · Başka SİLAH kullanılınca bu savaş +3 · Kalıcı: kazanınca +2 | TAŞIYICI |
| Bin Hançer (YENİ) | B · SİLAH | 6 | 6 hasar, ×3 çoklu · Tezgâhtaki her başka ÇELİK kart için +1 çoklu | TAŞIYICI |
| Usta Kemeri (YENİ) | O · ALET | pasif | Bir SİLAH kullanınca diğer SİLAH'lar 0,2 sn şarj olur | MOTOR |
| Ağır Pala | O · SİLAH | 7 | 35 hasar · Solundaki kullanılınca 1 sn şarj | TAŞIYICI |
| Ejder Kılıcı | B · SİLAH | 9 | 80 hasar · %20 kritik · Tezgâhta başka SİLAH yoksa ×2 hasar | TAŞIYICI |
| Bileği Taşı | K · ALET | 3 | Sağındaki SİLAH bu savaş +5 hasar | MOTOR |
| Demirci Örsü (YENİ) | O · ALET | pasif | Kalıcı: her gün başında en soldaki SİLAH +5 hasar | MOTOR |
| Kılıç Kını (YENİ) | K · ALET | 4 | Sağındaki SİLAH'ı 1 sn şarj et, +%10 kritik (bu savaş) | TETİK |
### TAO (Taocu)
| Kâğıt Tılsım | K · KUTSAL | 4 | 15 kalkan | TETİK |
| Bambu Kalkan | O · KUTSAL | başta | 30 kalkan + komşuları 1 sn şarj | DESTEK |
| Su Kabağı | K · İKSİR | 6 | 20 iyileşme · Kalkan kartı kullanılınca 0,5 sn şarj | DESTEK |
| Mühür | K · KUTSAL | 7 | Rakibin en hızlı kartını 2 sn dondur | DESTEK |
| Tapınak Çanı | O · KUTSAL | 5 | Rakibin 2 kartını 1 sn yavaşlat · Bir KUTSAL kart kullanılınca 0,5 sn şarj | MOTOR |
| Taş Bekçi (YENİ) | O · HAYVAN | pasif | Kalkan kazandığında +%20 ek kalkan | MOTOR |
| Yeşim Kolye | K · KUTSAL | pasif | Savaş başı max canın %10'u kalkan · Kalıcı: her seviye +5 | DESTEK |
| Ters Taş | O · KUTSAL | 6 | Kalkanının yarısı kadar hasar | TAŞIYICI |
| Dağ Mührü (YENİ) | B · KUTSAL | 10 | Kalkanın kadar hasar; sonra kalkanın yarısını kaybedersin | TAŞIYICI |
### ATEŞ / ELEMENT (Taocu / ortak)
| Ateş Tılsımı | K · KUTSAL | 4 | 3 yanma | TETİK |
| Kâğıt Fener | K · ALET | 5 | 2 yanma · Bir ATEŞ kartı kullanılınca 0,5 sn şarj | MOTOR |
| Kızgın Kor (YENİ) | K · ALET | pasif | Yanma uyguladığında rastgele değil EN YAVAŞ ATEŞ kartını 0,5 sn şarj et | MOTOR |
| Ateş Şarabı (YENİ) | K · İKSİR | 6 | 5 yanma · Kendine 5 hasar | TETİK |
| Mürekkep Damlası | K · İKSİR | 3 | 5 hasar · Her kullanımda bu savaş +2 · Kalıcı: her gün +1 | TAŞIYICI |
| Yıldırım | O · KUTSAL | 6 | 25 hasar, kalkanı deler · Rakipte donmuş kart varsa ×2 | TAŞIYICI |
| Beş Element | B · KUTSAL | 9 | 60 hasar · Tezgâhtaki her farklı OKUL için savaş başında 1 sn şarj | TAŞIYICI |
| Anka Tüyü | K · KUTSAL | pasif | İlk kez can %50 altına düşünce 50 iyileşme + ATEŞ kartları 3 sn hızlanır | DESTEK |
### ORTAK / EKONOMİ
| Altın Abaküs | K · ALET | pasif | Her gün +2 altın (çantada da) | EKONOMİ |
| Tüccar Kesesi (YENİ) | K · ALET | pasif | Kalıcı: her gün +1 değer kazanır; satınca değeri kadar altın | EKONOMİ |
| Bilge Kaplumbağa (YENİ) | O · HAYVAN | 8 | 20 kalkan · Bir HAYVAN kullanılınca 1 sn şarj · +1 XP her gün (çantada da) | EKONOMİ/DESTEK |
Yeni çizim gereken kartlar (14): Turna Yavrusu, Gökdelen Yay, Engerek, Zehir Kesesi, Engerek Yayı, Bin Hançer, Usta Kemeri, Demirci Örsü, Kılıç Kını, Taş Bekçi, Dağ Mührü, Kızgın Kor, Ateş Şarabı, Tüccar Kesesi, Bilge Kaplumbağa (15).

## 5. Beceriler (25) — etiket hedefli; Bronz » Gümüş » Altın » Elmas
| Beceri | Etki | Build |
|---|---|---|
| Ok Ustalığı | RÜZGÂR kartı kullanınca diğer kartların 0,5 » 0,75 » 1 » 1,5 sn hızlanır | Rüzgâr |
| Rüzgârın Sesi | Hızlandırma süreleri +%25 » 40 » 60 » 100 | Rüzgâr |
| Göçmen Kuşlar | Her HAYVAN, RÜZGÂR kartlarına −%3 » 5 » 7 » 10 bekleme | Rüzgâr/Hayvan |
| Zehir Ustası | Zehir uyguladığında +1 » 2 » 3 » 4 | Gölge |
| Kara Lotus Öğretisi | Rakip yavaşlarken zehir hasarı +%25 » 50 » 75 » 100 | Gölge |
| Sinsi Başlangıç | Savaş başında rakibe 3 » 5 » 8 » 12 zehir | Gölge |
| Tek Kılıç Yemini | Tezgâhta tek SİLAH varsa o SİLAH +%30 » 50 » 75 » 100 hasar | Tek Kılıç |
| Usta Dokunuşu | ALET kullanınca en soldaki SİLAH bu savaş +3 » 5 » 8 » 12 | Tek Kılıç |
| Keskin Göz | Tüm kartlar +%5 » 8 » 12 » 20 kritik | Hançer |
| Fırtına Adımı | 5 SİLAH kullanımında bir tüm SİLAH'lar 1 » 1,5 » 2 » 3 sn hızlanır | Hançer |
| Kan Bağı | SİLAH kullanınca 2 » 3 » 5 » 8 iyileşme | Çelik |
| Demir Deri | Savaş başında 20 » 30 » 45 » 70 kalkan | Kalkan |
| Dağın Sabrı | KUTSAL kartlar +%10 » 15 » 20 » 30 kalkan ve hasar | Kalkan |
| Yansıtma | Kalkanın kırıldığı her an rakibe 10 » 15 » 25 » 40 hasar | Kalkan |
| Alev Kalbi | Yanma uyguladığında +1 » 1 » 2 » 3 | Ateş |
| Buz Kalbi | Rakip kartı dondurunca 10 » 15 » 25 » 40 kalkan | Element |
| Beş Yol | Her farklı OKUL için kartlar +%3 » 4 » 6 » 8 hasar | Element/karma |
| Hayvan Dostu | HAYVAN kullanınca SİLAH'lar bu savaş +2 » 3 » 5 » 8 | Hayvan |
| Zincir Ustası | Bir kart başka kartı şarj edince şarj edilen +3 » 5 » 8 » 12 (bu savaş) | Genel |
| Hızlı Başlangıç | Savaş başında en soldaki kart 1 » 1,5 » 2 » 3 sn şarj | Genel |
| Güçlü Bilek | Büyük kartlar %10 » 15 » 20 » 30 hızlı | Genel |
| Az Ama Öz | 4 veya daha az kartın varsa +%10 » 15 » 20 » 30 kritik | Genel |
| Kıyamet Direnci | Kıyamet hasarı −%25 » 35 » 50 » 70 | Genel |
| Toparlanma | Yenilenme 2 » 3 » 5 » 8 | Genel |
| Tüccar Dostu | Her gün ilk 1 » 2 » 3 » 4 yenileme bedava | Ekonomi |
Seviye ödülü ve Beceri Hocası, oyuncunun tezgâhındaki etiketlere göre AĞIRLIKLI beceri sunar (3 seçenekten en az 1'i mevcut build'e uyar, 1'i farklı yol açar).

## 6. Tüccarlar ve kahraman başlangıcı
- Tüccarlar okula göre: Rüzgâr Okçusu · Gölge Simyacı · Çelik Demirci · Tao Tapınağı · Ateş Ocağı · Hayvan Bakıcısı · Karma Pazar. Kapıda tüccarın okulu ikonla görünür → oyuncu build'ine göre kapı seçer.
- Kahraman başlangıcı: 1. gün 1. adımda "Başlangıç kartı seç" — kahramanın iki yolundan birer temsilci + 1 ortak kart (3'ten 1). İlk yön böyle seçilir ama sonradan değiştirilebilir.

## 7. Keşif ve gösterim (sinerjiyi GÖRÜNÜR yapmak — en önemli kısım)
1. **Bağlantı vurgusu:** Bir karta/beceriye dokununca, metninin etkilediği VE onu etkileyen tüm kartlar tezgâhta (ve tüccarda) altın kenarla parlar; aralarında ince çizgi.
2. **Tüccarda sinerji rozeti:** Tüccardaki kart, tezgâhındaki bir kartla etkileşiyorsa sağ üstünde küçük zincir ikonu ("Senin Rüzgâr Yelpazen'i besler").
3. **Anında güç gösterimi:** Beceri/kart alınınca etkilenen kartların rozet sayıları animasyonla güncellenir (3 → 5, parlama, "+2").
4. **Savaş sonu dökümü:** Büyüteç düğmesi → her kartın üstünde bu savaştaki toplamı (⚔/🛡/🔥/☠) ve kullanım sayısı (×N). Hiç kullanılmayan kart soluk. En çok katkı yapan kart taç ikonu.
5. **Build adı:** Tezgâhta bir yolun 3+ kartı varsa üst barda küçük rozet: "Rüzgâr Motoru ●●●○" (yolun önemli kartlarından kaçına sahip olduğu). Oyuncu "ne kuruyorum" sorusunun cevabını görür; usta oyuncu karışık build kurabilir.
6. **Kalıcı büyüme izi:** "Kalıcı" kartların köşesinde küçük ↑ ve toplam büyüme ("+12 bu koşuda").

## 8. Denge çerçevesi
- Bir yolun tam kurulmuş hâli (taşıyıcı Altın + 2 motor + 2 tetik + 1-2 beceri) gün 8-10'da 10 zafere yetmeli; yarım kurulmuş karma tezgâh ortalama 5-6 zafer.
- Bot, 6 yolun her birini hedefleyen "build botu" ile koşar; yol başına kazanma oranları ±%10 içinde olmalı. Hiçbir yol %25'ten fazla 10-zafer koşusu üretmemeli.
- Değerler bot sonucuna göre ÖNERİLİR; kullanıcının telefon testi karar verir.

## 9. Gün yapısı değişikliği (kullanıcı, 24 Kas)
Her gün 6 adım: Seçim → CANAVAR → Seçim → Seçim → CANAVAR → RAKİP.
- İki canavar: güvenli büyüme (kaybedince Şöhret düşmez, kazanınca ganimet). İkinci canavar daha zor seviyeden seçenekler sunar.
- Rakip: aynı gün + zafer (±1) olan BAŞKA OYUNCUNUN kayıtlı tezgâhı (asenkron). Sunucu gelene kadar: yerel anlık görüntüler + üretilmiş hayaletler. Sunucu (UGS) ve INTERNET izni kararı kullanıcıya ait; öneri: kapalı test öncesi.
- 10 rakip zaferi = koşu kazanılır (değişmedi).

## 10. Bazaar 15 günlük koşudan dersler (25 Kas, Codex koşusu: 8 galibiyet, Gümüş Zafer)
Koşunun seyri: Gün 1-5 komşu silah motoru (Bileme+Süngü+Fıçı) → Gün 6-7 Deniz/Dost zehir motoru (Kamara kopyası Altın'a birleşti) → Gün 8 büyük kırılma: Kamara bırakılıp indirimli Altın Claymore alındı (kritik biriktiren tek büyük vuruş, 2578 kritik) → Gün 12-14 Bıçaklar+Kusarigama ile hızlandırma→hasar döngüsü, Claymore Elmas → Gün 15 rakibin 41 dondurması motoru başlatmadı, kayıp.

Bize uyarlanacak 10 ders:
1. **Motor + bitirici ayrımı.** Güçlü build = sürekli tetik üreten küçük kartlar (motor) + o tetiklerden büyüyen 1 büyük kart (taşıyıcı). Bizde: Rüzgâr Motoru→Gökdelen Yay, Tek Kılıç yolu bunu taşır. Her yolda en az 1 "büyüyen taşıyıcı" olmalı.
2. **Savaş içi büyüme.** Claymore'un kritiği savaş boyunca hızlandırma sayısıyla arttı. Oyuncu bunu ekranda görünce "kurdum!" diyor. → 3-4 kartımıza "bu savaşta her X'te +Y" yazısı ve kart üstünde büyüyen sayı.
3. **Kalıcı büyüme kaynakları çeşitli:** satınca kalıcı buff (Sakız, Salgı Bezi), seviye ödülü, iksir kapısı (+42 kalıcı yenilenme), günlük artan iyileşme. → "Satınca kalıcı" 3 kart ekle (Ateş Şarabı, Tüccar Kesesi, Bilge Kaplumbağa'yı bu role çek).
4. **En zor/keyifli karar = motoru bozup daha iyisine geçmek.** Kartlar komşuluğa bağlı olduğu için tek kart değişimi sıralamayı bozar. Bu bizdeki "konum" mekaniğinin değerini kanıtlıyor; sol/sağ/en uç hedefleme kalmalı.
5. **Kopya birleşmesi nadir ama anlık zevk** (Kamara kopya → Altın animasyonu). Tüccarlarda sahip olunan karta %15 ek çıkma şansı koyalım ki birleşme gerçekten yaşansın.
6. **Karşı oyun (counterplay) şart.** Dondurma kontrolü motoru tamamen öldürdü; yanma/yavaşlatma hızlı bitirdi; ağır cançalma uzattı. Bizde: GÖLGE okulu (dondur/yavaşlat), ATEŞ (yanma), TAO (iyileş) karşı oyun üçgeni; ve her kontrolün bir panzehiri (Uçuş = donma yarıya iner gibi) olmalı.
7. **Rakibin tezgahı savaş başlayana kadar görünmüyor** → kaybı "haksız" hissettiriyor. Bizde rakip ekranında rakibin 3 ana kartı + baskın okulu gösterilsin (küçük avantaj, büyük anlaşılırlık).
8. **Savaş sonu büyüteç ekranı en öğretici yer:** her kartta toplam hasar/zehir/kalkan/iyileşme + ×kullanım. Oyuncu "Dalış 0 kullanım" görünce nedenini anlıyor. → v0.5'te zorunlu; kendi + rakip kartları.
9. **Açıklama kutusu + sol alt sözlük + etkilenen kartların parlaması** (Toksisite seçerken etkilenen eşyalar parlıyor). Beceri/kart seçerken bizde de etkilenecek kartlar parlasın; "?" sözlük kutusu sol altta sabit.
10. **Kapı seçimi = yön seçimi.** Her durakta 3 kapı (tematik tüccar / etkinlik / canavar) ve kapıda tür rozeti. Tematik tüccar (zehir öğretmeni, kritik öğretmeni) oyuncuya "bu yola git" mesajı veriyor.

Bazaar'da kafa karıştıran (bizde YAPILMAYACAK): sürükleme zor; öğretici kutular savaşı durduruyor; dışarıda x7 görünen mermi savaşta x11 oluyor; çanta doluyken satın alma uyarısı yok (2 sakız kayboldu). → Bizde: dokun-seç-dokun-yerleştir, savaşta pop-up yok, gösterilen sayı = savaştaki sayı, çanta doluysa "Satın al" düğmesi kilitli + uyarı.
