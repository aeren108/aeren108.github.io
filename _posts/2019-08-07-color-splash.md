---
layout: post
title: "Color Splash"
categories: [projeler]
date: 2019-08-07
comments: false
---

![ScreenShot](https://github.com/aeren108/color_splash/blob/master/pics/telefon_ornek.jpg?raw=true)

### **Nedir Bu Color Splash ?**
Color Splash yukarıdaki resimde gördüğünüz efekti üreten bir Windows masaüstü uygulaması. Yaptığı şey kısaca belirli bir renk skalasını vurgulayıp kalanını filtrelemek.<br>

[[Projenin Github Sayfası]](https://github.com/aeren108/color_splash)

### **Bu Proje Bana Neler Öğretti?**
C#'a hızlı bir giriş yaptım. Sözdizimine aşinaydım zaten, Java bildiğimden ötürü. O yüzden C# alışmam pek sürmedi.<br>
C# ile Windows Formları oluşturmayı öğrendim ve resim işleme bilgilerimi güçlendirdim. Aynı zamanda RGB dışında diğer renk uzayları hakkında bilgi sahibi oldum, HSV, HSL, CMYK gibi.

### *Kısa C# Hakkında*
C#, Java'ya sözdizimi bakımından çok benziyor ama C#'ı Java'ya göre daha kullanışlı ve daha pratik buldum. C#'taki delegate yapısı ile fonksiyonları parametre olarak geçmek veya bir fonksiyondan döndürmek çok daha kolay. Task Parallel Library de asenkron programlamayı çok daha pratik bir hale getiriyor. Bu gibi özelliklerden dolayı eğer Windows için bir uygulama geliştiriyorsam C# tercih edeceğim ilk dil olur.

### **Taslak Fikirler Ve Problemler**
Snackbar'ın hiç bir animasyonu yok ve ekranın altında öyle belirip yok oluyor. Herhangi bir animasyonla çok daha güzel gözükebilir.<br><br>
Son sürümde yeni filtreler ekledim ve siyah-beyaz filtre hariç diğer filtreler tam olarak doğru çalışmıyor. Bunun sebebi vurgulanması gereken renklerin çok açık ve çok koyu tonlarının da algılanması. Şu an uygulama renkleri sadece <i>hue</i> değerlerine bakarak karşılaştırıyor, bu karşılaştırmaya <i>value </i> ve <i>saturation</i>'ı eklersem düzelecektir.