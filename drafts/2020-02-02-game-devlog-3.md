---
layout: post
title: "Indie Oyun Devlog #3"
categories: [devlog]
date: 2020-02-02
comments: false
---

### **Neler Yeni ?**
Aradan yaklaşık bir hafta geçti ve aşağıdakileri oyuna ekleyebildim. Evet, ivmeli hareket etmeyi ve yeni bir animasyon eklemedim çünkü daha önemli yerlere odaklanmak istedim.

* Lazerler
* Ekran Sistemi ve UI(Kullanıcı Arayüzü)
* 3 Boyutlu Ses Efektleri

Projenin [Github sayfası](https://github.com/aeren108/kaymak).

---

**Lazerler** <br>
Yine oyunun ana mekaniklerinden biri olan lazerleri oyuna ekledim. Lazerler şöyle çalışıyor: İlk önce deaktif bir şekilde çalışmaya başlıyorlar ve 1 saniye deaktif kaldıktan sonra aktif hale geçiyorlar. Böylece oyuncunun kaçma fırsatı olmuş oluyor. Ayrıca lazerlerin boyutu sonsuz yani haritayı boydan boya gidiyorlar. Yine lazerlere çarpınca oyuncu savruluyor, tabi alev toplarına nazaran daha az. Ekran sarsılmasını biraz daha arttırdım lazer çarpmasında. Çünkü adı üstünde çarpılma yani. <br>
Lazerlerle ilgili güzel bir özellik de dash atarken lazerlerin sizi çarpmaması. Böylece dash daha bir işlevsellik kazandı.<br> 
Lazerler kısaca böyle, videoda da gözüküyorlar.<br>

**Ekran Sistemi ve UI** <br>
Nedir ekran sistemi ? Hemen açıklıyorum. Ekran sistemi oyunda farklı ekranlara geçiş yapabilmeyi mümkün kılan bir şey. Yani ana menüden ayarlara veya oyun ekranına geçebilmeniz gibi. Ana menüyü kabaca yaptım böylece. Oyun açıldığında laks diye alev topları falan fışkırmıyor artık. Sakince ana menü açılıyor ve oradan oyuna geçiyorsunuz. Şu an menü çok ilkel biliyorum, sona bırakıyorum genelde böyle işleri.<br>

**3 Boyutlu Ses Efektleri** <br>
Alev toplarından herhangi bir ses çıkmıyordu ama lazerleri ekleyince bunu yapmak farz oldu. Çünkü lazer yani, 'dızzz' diye ses çıkması lazım ondan. Demek istediğim 3 kilometre ötedeki lazerin sesini değil, sadece yakınızda olan lazerlerin sesini duymanız gerekiyor. 3 boyutlu sesler bunu çözüyor üstüne üstlük sağdan soldan gelen sesleri de sağ ve sol hoparlöre ayrı ayrı veriyorlar.<br> 
Bazı sıkıntılar var yalnız burada, dash ile lazerlerden geçerken oyuncu ses kaynağı ile aynı pozisyona geliyor ve ses şiddeti tavan yapıyor. Hoparlörler bir anlığına patlıyor. Bir sonraki devlog'a kadar bunu çözmem gerek.<br>
Bir de fark edilmiyor olabilir ama lazer seslerini Star Wars'tan aldım, ışın kılıcı sesi yani :). Alev topu çarpma sesi bulamadım ama ona da şimdilik bir şeyler uydurdum (Tom ve Jerry'deki Tom'un bağırma sesi :).

---

<br>
Deneme amaçlı tileset'in mavi bir versiyonunu da ekledim ama güzel durmadı. Kaldırırım en yakın zamanda.<br>
Şu an oyunun hali de böyle: 

<video style="margin: 0 auto; width: 100%;
  max-height: 100%;" controls>
  <source src="../../../../assets/vid/kaymakrecord3.mp4" type="video/mp4">
</video>

*Ufak dipnot: Videonun kalitesinden dolayı ana menü butonlarındaki yazılar okunamamış, tamamen video kaynaklı oyunda sıkıntı yok. Zaten font'unu değiştireceğim.* 
<br>  

### **Ne Planlıyorum ?**
Multiplayer için istemci ve sunucuyu geliştirmeye başlaycağım. Multiplayer için menüleri bitireceğim ve ESC menüsünü yapacağım. Sadece bunları yapmayı planlıyorum. Çünkü multiplayer işi yorucu olacak zaten epey.

### *Devlog Serisi*

* [*Indie Oyun Devlog #1*](https://aerenpozitif.com/devlog/post/game-devlog-1.html)
* [*Indie Oyun Devlog #2*](https://aerenpozitif.com/devlog/post/game-devlog-2.html)
* [*Indie Oyun Devlog #3*](https://aerenpozitif.com/devlog/post/game-devlog-3.html)