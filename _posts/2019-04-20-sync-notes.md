---
layout: post
title: "Sync Notes"
categories: [projects]
date: 2019-05-20
comments: false
---

![ScreenShot](https://github.com/aeren108/sync_notes/blob/master/screenshots/sync-notes-05.png?raw=true)

#### **Nedir Bu Sync Notes ?**
Sync Notes android ve bilgisayardaki notlarınısı senkronize edebildiğiniz not alma uygulamasıdır. Başka bir deyişle basit portatif yapışkan notlar uygulaması. Google Keep ve Microsoft Sticky Notes'u basitçe harmanlamaya çalıştım.<br><br>

[[Projenin Github Sayfası]](https://github.com/aeren108/sync_notes)


#### **Bu Proje Bana Neler Öğretti ?**
JavaFX ile kullanıcı arayüzü oluşturmayı ve projelerimde MySQL veritabanı ile çalışmayı öğrendim.
HTML Editor oluşturabilmek için HTML ve CSS hakkında daha fazla şey öğrendim. <br>
Android uygulamadan MySQL veritabanına erişmek için bir REST API'ye ihtiyacım olduğunu öğrendim ve Python ve Flask ile REST API geliştirmeyi öğrenmeye başladım.

#### **Taslak Fikirler ve Problemler**
Not pencerelerinin tasarımlarını sıfırdan yaptığım için hazır gelen pencere kontrollerini kullanmıyorum. Bunun için [BorderlessScene][bscene] adında bir JavaFX kütüphanesi buldum ve pencere kontrollerini bu kütüphane sağlıyor (yeniden boyutlandırma, sürükleme vb.). Ama arada not pencereleri piskopata bağlayıp çıldırabiliyor. Bunu çözmek için kendi sınıflarımı yazabilirim veya daha pürüzsüz çalışan bir kütüphane bulabilirim.

[bscene]: https://github.com/NicolasSenetLarson/BorderlessScene