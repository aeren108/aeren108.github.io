---
layout: post
title: "Tetromino Döndürme Algoritması"
categories: [algorithms]
date: 2020-02-06
comments: false
---

Bu yazıda Tetris'in bir kopyasını yaparken tetrominoları çevirmek için kullandığım algoritmayı açıklamaya çalışacağım.

---

İlk baş tetrominoları tanımlamamız gerekiyor. Bunun için her tetrominoyu 4x4'lük bir düzlemde göstereceğim.<br>
Örnek olarak `[(1,0), (1,1), (1,2), (0,1)]` noktaları aşağıdaki tetrominoyu temsil ediyor olacak:

![TetrominoSS](../../../../assets/img/tetro-t.jpg)

---

Ve bu düzlemde sol üstten ve 0'dan başlayarak her kareye bir numara atayacağım. Tetrominoları çevirmek için de tüm düzlemi 90, 180 ve 270 derece döndüreceğim. Haliyle verdiğimiz numaraların da yeri değişecek. Yani şöyle gözükecek:

![SS](../../../../assets/img/tetromino4x4.jpg)

**'i(x,y)'** nedir derseniz: i(x, y), bize (x,y) koordinatındaki kareye önceden atadığımız numarayı veren bir fonksiyon diyebiliriz. **'w'** ise sütun sayısı ki bu durumda 4 oluyor.Bir örnek vermek gerekirse hiç döndürülmemiş sistemde yani 0 derecede (2, 3) noktasındaki kare `i(x,y) = x + y * 4` formülünden i(2, 3) = 2 + 3 * 4 = 14. kare olarak buluruz.Düzlemi döndürdüğümüzde i fonksiyonu değişir. Örneğin resimde yazdığı gibi 90 derece için i(x,y) fonksiyonu `i(x,y) = 12 + y - (x * 4)` oluyor.
<br> <br>
Bu ne işe yarayacak, hemen açıklıyorum. Yine yukarıdaki tetrominoyu ele alalım, koordinatları `[(1,0), (1,1), (1,2), (0,1)]` bunlardı. Bu tetrominoyu 90 derece döndürmek istersem tetrominonun her koordinatını 90 derecenin i(x,y) fonksiyonuna sokarım. Çıkan değerlere baktığımız zaman `[8, 9, 10, 13]` sayılarını görürüz. Bu sayılara hiç döndürülmemiş düzlemde baktığınızda, saat yönünün tersine 90 derece çevrilmiş nur topu gibi bir tetromino elde edersiniz.

![](../../../../assets/img/transtetro.jpg)

Tamam, elimizde bu sayılar var ama bana 90 derece döndürülmüş koordinatlar lazım diyorsanız, şöyle yapıyoruz: Elimizde karenin kaçıncı kare olduğunun bilgisi var.
Bu sayıya *'n'* diyelim, yani n'inci kareye bakıyoruz. n'in 4'ten kalanı, yani sütun sayısından kalanı, bize *'x'* koordinatını verir. Ve n'i 4'e böldüğümüzde bölümün tam kısmı bize *'y'* koordinatını verir, çünkü her satır 4'ün katları ile başlıyor. <br>
Örnek vereyim hemen: 7. kareyi ele alalım, 4'ten kalanı **3**, 4'e bölümünden elde edilen sayının tam kısmı **1**. Bu da bize **(3, 1)** koordinatını verir.

--- 

Kısaca işin mantığı bu. 180 veya 270 derece döndürmek için de diğer fonksiyonları kullanıyoruz. Aşağıya tetrominoyu çeviren örnek bir fonksiyon bırakıyorum.

```csharp
delegate int Fonksiyon(int x, int y);

public Vector2[] Cevir(int r, Vector2[] tetromino) {
  //Burada r döndürme açısını ifade ediyor.
  //tetromino ise  bir vektör dizisi ve tetrominonun koordinatlarını tutuyor.
  //(Vector2, XNA framework'ü içinde yer alan bir sınıf)

  Vector2[] t = new Vector2[tetromino.Length];
  //Döndürülmüş koordinatları tutacağımız vektör dizisi
  Fonksiyon i;
  //i(x,y) fonksiyonu için bir temsilci;

  switch (r) {
    case 0:
      i = delegate(int x, int y) { return x + (y * 4); };
      break;
        
    case 90:
      i = delegate(int x, int y) { return 12 + y - (x * 4); }; 
      break;
        
    case 180:
      i = delegate(int x, int y) { return 15 - x - (y * 4); }; 
      break;
        
    case 270:
      i = delegate(int x, int y) { return 3 - y + (x * 4); };
      break;
  }
  
  for (int j = 0; j < tetromino.Length; j++) {
    Vector2 koordinat = tetromino[j];
    int indis = i((int) koordinat.X, (int) koordinat.Y); //i(x, y) fonksiyonu
    
    int x = indis % 4; // indis'in 4'ten kalanı
    int y = indis / 4; // (indis / 4)'ün tam kısmı
    
    t[i] = koordinat;
  }

  return t;
}
```

---

Anlatmaya çalıştım ama galiba karıştırdım biraz. En fazla bu kadar oldu.<br><br>
Tetrominoları ekrana nasıl çizdirdiğimi, oyun mantığının nasıl işlediğini merak ediyorsanız daha önceden yaptığım Tetris klonunun kodlarını [buradan](https://github.com/aeren108/tetris) inceleyebilirsiniz.

