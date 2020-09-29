---
layout: post
title: "Indie Oyun Devlog #2"
categories: [devlog]
date: 2020-01-22
comments: false
---

#### **Neler Yeni ?**
Bir önceki devlog'dan bu yana eklediklerim:
* Dash hareketi
* Alev topları
* Ekran sarsılmaları
* Ses efektleri ve müzik

Projenin [Github sayfası](https://github.com/aeren108/kaymak).

---

**Dash Hareketi** <br>
Dash kelimesini tam olarak Türkçe'ye çeviremedim. Oyundaki dash, karakterin ileriye hızlıca atılması aslında. Aşağıdaki videoda net bir şekilde anlaşılıyor.  Çok da basit işliyor, sol fare tuşuna tıklarsanız karakter fareye doğru hızlı bir şekilde atılıyor. Tabi arka arkaya dash yapamıyorsunuz, bekleme süresi ekledim. İlerde değiştirebilirim ama şimdilik 1 saniye. Bir de ses efekti ekledim, dash yaparken vuuuş diye geçiyorsunuz. Efsane oldu :)<br>

**Alev Topları** <br>
Alev topları bildiğiniz alev topları işte. Karaktere çarpınca karakteri savuruyor. O da dash hareketine benzer işliyor, karakter alev topunun geliş yönüne doğru yavaş bir dash hareketi yapıyor diyebiliriz aslında. Ama savrulma yapay gözüküyor biraz. Galiba bu sorun biraz hareketin ivmeli olmamasından kaynaklanıyor. Yani savruluyorsunuz ve savrulma bitiyor ve bir anda duruyorsunuz. Yavaşlayarak olursa bu daha iyi gözükecek diye düşünüyorum. Karaktere bir ivme vektörü ekleyerek çözebilirim bunu yüksek olasılıkla. <br>
Savrulmayla ilgili eklediğim küçük ama güzel bir detay da eğer savrulup bir duvara çarptığınız zaman zarar görmeniz. Aslında zarar görmüyorsunuz şimdilik ama ekran sarsılıyor yani. <br>

**Ekran Sarsılmaları** <br>
Karaktere bir alev topu çarptığında ekran sarsılması ekledim, vurulma hissiyatı daha iyi oldu. Oyunun ilerleyen zamanlarında bunu daha çok kullanacağımı düşünüyorum. Silah tepmesi, diğer çarpışmalar vs.

**Ses Efektleri ve Müzik** <br>
Karakterin yürüme efekti vardı zaten, yeni eklediğim şeyler için ses efektleri ekledim. Dash hareketi yaparken çıkan vuuş sesi ve alev topu çarpınca çıkan tırşş sesi gibi. Alev topu çarpma efekti tam oturmadı gibi, büyük ihtimalle ilerde değiştireceğim onu.<br>
Eğlenceli bir arkaplan müziği de ekledim, oyuna farklı bir hava kattı.

---

<video style="margin: 0 auto; width: 100%;
  max-height: 100%;" controls>
  <source src="../../../../assets/vid/kaymakrecord2.mp4" type="video/mp4">
</video>

#### **Ne Planlıyorum ?**
Savrulmayı dediğim gibi ivmeli bir hareket haline getirmem gerek. Alev topunun çarpma ses efektini değiştireceğim. Oyunun diğer bir mekaniği olan lazerleri ekleyeceğim. Bir de eğer halledebilirsem dash hareketi için animasyon ekleyeceğim. Sonraki devlog'a kadar yapmayı düşündüklerim bu kadar.

#### *Devlog Serisi*

* [*Indie Oyun Devlog #1*](https://aerenpozitif.com/devlog/post/game-devlog-1.html)
* [*Indie Oyun Devlog #2*](https://aerenpozitif.com/devlog/post/game-devlog-2.html)
* [*Indie Oyun Devlog #3*](https://aerenpozitif.com/devlog/post/game-devlog-3.html)