---
layout: post
title: "Indie Oyun Devlog #1"
categories: [devlog]
date: 2020-01-18
comments: false
---

![Screenshot](../../../../assets/img/kaymakss1.jpg)

#### **Bu Ne ?**

En basit tanımıyla, ismine karar veremediğim üstten bakışlı (top-down),  2 boyutlu oyun projesi. <br><br> 
XNA / Monogame'i seçtim oyunu geliştirmek için. Herhangi bir oyun motoru kullanabilirdim ama hiç ısınamadım oyun motorlarına başından beri. Evet Unity, Unreal ile şu anki aşamaya geldiğim zamanda çok daha fazla ilerleyebilirdim belki ama sevmiyorum işte. XNA veya libGDX gibi frameworkleri kullanmayı seviyorum ve eğleniyorum bunları kullanırken. Daha fazla da öğreniyorum aslında böyle. Oyun motorlarında hali hazırda bulunan çoğu şeyi sıfırdan kendim yapıyorum, animasyonları, oyun kamerasını vs. Yani çoğu şeyin nasıl çalıştığını anlıyorum. <br><br> 
Aslında programlamayı belki sırf bunun için öğrendim ama hiç oyun geliştirmedim daha önce. Birkaç kez kalkıştım ama belki zor geldi, belki hevesim kaçtı ve devamı hiç gelmedi. Belki de devamlarının gelmeme sebeblerinden biri de aklımda tam olarak bir şey olmamasıydı. Şu an aklımda net bir fikir var ve bu sefer devamı gelecek gibi. <br> 

Projenin [Github sayfası](https://github.com/aeren108/kaymak).<br>

---

#### **Ne Planlıyorum ?**

Asıl amaç şu, haritada her yerden lazer, alev topu fışkırırken onlardan kaçınmak ve eğer tek kişilikse çıkış noktasına ulaşmak. Eğer multiplayer ise en uzun süre hayatta kalmak. Tabi bu kadar yavan olmayacak. Multiplayer'a eklemek istediğim birkaç güzel şeyler var. Ağırlık multiplayerda olacağından singleplayer biraz yavan kalacak. Ama ona da uydururuz bir şeyler. Kısacası dodge skill'leri iyi olan oynar bu oyunu.<br>

---

Oyunun şu anki hali bu şekilde:
<video style="margin: 0 auto; width: 100%;
  max-height: 100%;" controls>
  <source src="../../../../assets/vid/kaymakrecord.mp4" type="video/mp4">
</video>

#### **Ne Yaptım ?**
Şu ana kadar oyunun temellerini oturttum. Şunlar bitti:

* **Tile tabanlı harita**

   Oyun tile tabanlı. Yani haritadaki her şey küçük 32x32'lik karelerden oluşuyor (bkz. [Tile Set](https://pbs.twimg.com/media/Dwl4FnLWoAAPoa3.jpg)) 

* **Animasyonlar**
* **Çarpışma algılama** (collision detection)

   Karakterin bir sonraki konumu hesaplandıktan sonra o konumdaki tile'ın bloklu olup olmadığına bakıyorum (mesela duvar tile'ı) eğer blokluysa karakter sonraki konumuna geçmiyor.

* **Ses efektleri**

   Karakter yürürken adım atma efekti çalınıyor.

* **Animasyonlu Tile**

   Yani deniz tile'ı gibi. Dalgaların animasyonu mesela. Daha hiç denemedim ama teorik olarak çalışıyor.


#### *Devlog Serisi*

* [*Indie Oyun Devlog #1*](https://aerenpozitif.com/devlog/post/game-devlog-1.html)
* [*Indie Oyun Devlog #2*](https://aerenpozitif.com/devlog/post/game-devlog-2.html)
* [*Indie Oyun Devlog #3*](https://aerenpozitif.com/devlog/post/game-devlog-3.html)




