# Berkco App Studio: indirme bağlantıları

Reklam videoları ve sosyal medya için kısa indirme adresleri. Her uygulamanın bir klasörü var; sayfa telefona göre
doğru mağazaya yönlendirir (iPhone/iPad: App Store, Android: Google Play), bilgisayarda iki rozeti gösterir.

* Gloopath: https://berkcoo.github.io/get/gloopath/
  * Kaynak etiketi (yalnız Google Play kurulumlarını Play Console'da ayırır): `?s=instagram`, `?s=tiktok`, `?s=youtube`.
    Yalnız harf, rakam, `-` ve `_` kabul edilir.
  * Yönlendirmeyi kapatıp sayfayı görmek için: `?stay`.
* Test: `node test/route.test.js` (cihaz seçimi + etiket temizleme).
* Yeni uygulama: `gloopath/` klasörünü kopyala, mağaza adreslerini, adı ve görselleri değiştir.
* Resmî rozetler değiştirilmeden kullanılır (Apple: App Store rozeti svg; Google: yalnız saydam kenar boşluğu kırpıldı).
* Gizlilik/destek sayfaları her uygulamanın kendi `<app>-privacy` sitesinde kalır.
