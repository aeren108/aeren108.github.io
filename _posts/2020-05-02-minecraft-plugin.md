---
layout: post
title: "Minecraft'a Plugin Geliştirmece"
categories: [projeler, karalamalar]
date: 2020-05-02
comments: false
---

Bir süredir Java ile bir şeyler yapıyordum ve neden Minecraft için bir mod veya plugin yazmayayım dedim. Mod geliştirmek plugin yazmaya göre biraz daha meşakkatli olduğu için plugin geliştirmeye karar verdim. <br>


### Rumble
Aklıma gelen ilk fikir bir mini-oyundu. Rocket League'deki Rumble oyun modunu Minecraft'a basit bir şekilde uyarlamayı düşündüm. Rocket League'deki Rumble modu kısaca, herkese 10 saniyede bir rastgele bir özelliğin geldiği bir oyun modu. Bu özellikler; topa yapışan dikenler, topu dondurma, rakip oyuncunun motorunu bozma gibi şeyler. <br>
Evet, bu plugin'e çok yaratıcı bir şekilde Rumble ismini verdim. Mini-oyun sistemi hemen hemen Rocket League'dekiyle aynı. Oyun başlamadan önce oyuncular takım kuruyorlar. Takımlar hazır olduğunda bir kişi oyunu başlatıyor. Oyun başladığında haritanın sadece kısıtlı bir alanı kullanılabilir hale geliyor ve her 30 saniyede oyunculara rastgele özellik veya yetenekler geliyor. Oyun 10 dakika sürüyor ve sonunda en az ölüm sayısına sahip olan takım birinci oluyor. Oyundaki özellikler ve yetenekler; hızlı koşma, yakan kılıç, savuran kılıç, hızlı can yenilenmesi gibi şeyler. Bu plugin'e ve komutlarına aşağıdaki Bukkit sayfasından ulaşabilirsiniz.<br>

[[Projenin Github Sayfası]](https://github.com/aeren108/rumble)<br>
[[Bukkit Plugin Sayfası]](https://dev.bukkit.org/projects/rumble)

<video style="margin: 0 auto; width: 100%;
  max-height: 100%;" controls>
  <source src="../../../../../assets/vid/rumblerecord.mp4" type="video/mp4">
</video> 

Tek başıma oynadığım için sıkıcı gözüküyor olabilir ama çok kişiyle eğlenceli olacağanı düşünüyorum.

### Logation
Logation, aklıma gelen diğer bir plugin fikriydi ve bence Rumble'dan çok daha işlevsel ve insanların kullanmak isteyeceği bir plugindi. Logation, kısa tabirle, komut/yazı tabanlı bir waypoint plugini. Yaptığı şey, oyuncu lokasyonumu kaydet komutunu verdiği zaman oyuncunun bulunduğu konumu, oyuncunun belirledği bir isimle kaydediyor. Oyuncu daha sonra kaydettiği lokasyonların listesini isimleriyle beraber listeleyebiliyor veya belirli bir isimle kaydettiği lokasyonun koordinatlarına erişebiliyor. Bu plugin'i böyle bıraksaydım baya yavan kalacaktı bu yüzden oyuncunun son ölümlerinin koordinatlarını otomatik bir şekilde kaydeden ve oyuncunun direk lokasyon ismiyle ışınlanmasını sağlayan sistemleri de plugin'e dahil ettim.<br>
Bu plugin'in ismini de yine müthiş bir yaratıcılıkla, İngilizcede (günlüğe) kaydetmek anlamına gelen '*log*' kelimesi ile konum anlamına gelen '*location*' kelimelerini birleştirerek böyle bir isme vardım.<br>
Bu plugin'e ve komutlarına da aşağıdaki Bukkit sayfasınan ulaşabilirsiniz.<br>

[[Projenin Github Sayfası]](https://github.com/aeren108/logation)<br>
[[Bukkit Plugin Sayfası]](https://dev.bukkit.org/projects/logation)

![Loglist](../../../../../assets/img/loglist.jpg)
![Deathlog](../../../../../assets/img/deathlog.jpg)

### Bu Projeler Bana Neler Öğretti ?
İki projeyi de düşünürsek [Bukkit Plugin API](https://bukkit.gamepedia.com/Main_Page) kullanarak Minecraft için plugin geliştirmeyi öğrendim. Rumble özelinde konuşursak, yeni bir şey öğrendiğimi söyleyemem. Logation'da ise her oyuncunun kayıtlarını ve ölümlerini tutmam gereken bir veritabanına ihtiyacım vardı bundan dolayı Java ile SQLite veritabanı kullanmayı öğrendim. 