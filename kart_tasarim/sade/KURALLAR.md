# Lantern Caravan — SADE kurallar (kullanıcı onaylı, 25 Kas 2026)
Kaynak gerçek: engine.js (tüm sayılar, kartlar, kombolar, setler, güçler, savaşlar). ui.html = tarayıcı prototipinin arayüzü (referans).
Prototip: https://claude.ai/artifact/BbCbR3rU7GFJ8ng8Cb1t18

- Döngü: Savaş → 3 karttan 1'ini seç (ya da atla) → yerleştir → (isteğe bağlı sırayı değiştir) → savaş. 10 savaş, 3 can. Kaybedince 1 can gider, koşu devam eder. Her galibiyet +10 maks. can.
- Tahta 5 sıra, tek boy kart, çanta YOK. İki karta dokun = yer değiştir. Dolu yere yeni kart koy = eskisi çıkar.
- Aynı kartı tekrar seç = otomatik yükselt (Bronz/Gümüş/Altın = ×1 / ×1,6 / ×2,5).
- Renk bağı: aynı renkli komşu başına +%30. Set: tahtada aynı renkten 3 kart.
- 9 ikili kombo (yan yana). Kombolar ÖRTÜK: sadece kart açıklamasında kısa satır ("Kombo: Sadak") ve karta dokununca bilgi kutusunda. Kurulunca iki kart arasında küçük ⚡ + kısa bildirim. Üstte kombo/set rozeti YOK, "Kombo! sende var" rozeti YOK.
- Boss (3,6,9,10) yenince 3 kalıcı güçten 1'i; güçler üstte hep görünür, dokununca açıklama.
- Üstte "Güç" sayısı; yerleştirirken her yuvada "+N güç" önizleme; bildirim "Güç 8 → 14".
- Savaş sonu: kart başına toplam katkı (büyük sayı) + ×kullanım.
- Yazı: en küçük 15 px eşdeğeri (telefonda). Metin kutusu/öğretici açılır pencere yok.
- Bot simi: akıllı %48 tam koşu, rastgele %7.
