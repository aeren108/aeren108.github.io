---
layout: post
title: "Python ile Otomasyon Denemeleri"
categories: [karalamalar]
date: 2020-05-17
comments: false
---

Bu yazıda Python kullanarak bilgisayar kullanırken hayatımı kolaylaştırabilecek geliştirdiğim otomasyon projeleri hakkında konuşacağım.<br>
PyAutoGUI kütüphanesini kullandım ama Selenium gibi farklı kütüphaneler de kullanılabilir. PyAutoGUI dökümantasyonu için 
[bu sayfaya](https://pyautogui.readthedocs.io/en/latest/) gidebilirsiniz.<br>

**Alt Başlıklar**
- [Otomatik Şarkı Çalma Programı](#otomatik-şarkı-çalma-programı)
- [Otomatik Sayfa Kaydırma Programı](#otomatik-sayfa-kaydırma-programı)

---

### **Otomatik Şarkı Çalma Programı**

Ders çalışırken veya bilgisayar uzağımdayken şarkı açmaya üşendiğim için böyle bir şey yapmaya karar verdim. Projeyi geliştirmeye başlamadan önce kafamdaki şeyler şunlardı:

- Sesli komut ile çalışacak
- Şarkıyı Youtube'dan aratıp ilk şarkıyı açacak

Tabi sesli komut için bir komut belirlemem lazımdı ben de mantıklı olarak '*çal*' kelimesini seçtim. Yani '*çal tarkan dudu*' dediğiniz zaman program Tarkan'dan Dudu şarkısını çalması gerekiyordu. Ses algılama kütüphanesi olarak [SpeechRecognition](https://pypi.org/project/SpeechRecognition/) kütüphanesini kullanmaya karar verdim. Çünkü bu kütüphane çeşitli şirketlerin sağladığı ses algılama servislerini kullanmanıza imkan sağlıyor (Google, Microsoft, IBM gibi). <br> 
Projeye başladığımda ilk olarak şöyle bir kod yazdım:

```python
import speech_recognition as sr
import pyautogui as auto
import webbrowser
import time

while True:
  try:
    with sr.Microphone() as source:
      ses = sr.listen(source)
      komut = sr.recognize_google(ses, language="tr-TR")

      if (komut.startswith("çal"))
        sarki = komut[4::]
        kelimeler = sarki.split(" ")

        url = "https://www.youtube.com/results?search_query="

        for kelime in kelimeler:
          url = url + kelime + "+"
          # url = "https://www.youtube.com/results?search_query=Tarkan+dudu+dinle" gibi

        webbrowser.open_new_tab(url)
        time.sleep(2.5) #tarayıcının sayfayı yüklemesini bekle
        auto.click(500, 400) #ilk şarkıya tıkla

  except sr.UnknownValueError:
    print("Anlayamadım")
```

Yaptığım şeyi açıklayayım. İlk önce sonsuz bir *while* döngüsü oluşturdum ki program sürekli bir dinleme halinde olsun. Sonra mikrofonu kullanarak sesi kaydettim ve Google servislerine sesi yazıya çevirttim ve bunu *komut* adlı bir değişkene aktardım. Eğer *komut* 'çal' kelimesi ile başlıyorsa, komut kelimesinin ilk 4 harfini çıkar ve bunu *sarki* değişkenine aktar dedim. İlk 4 harfi çıkardım çünkü şarkı ismi *çal*'dan sonra geliyor ve' `"çal "` kelimesi 4 harflik yer kaplıyor. *sarki* değişkeninini kelimelerine ayırdım ve Youtube'da aratmaya hazır hale getirdim. Sonra tarayıcıda bu URL'yi açtım ve ilk çıkan sonuca tıkladım. <br> <br>

Bu kod istenildiği gibi çalışıyordu ama sadece belli şartlar altında. Çünkü bazı şeyleri hesaba katmadığımdan kritik hatalar yaptım bu kodda. Bunlardan biri şu: Ses algılarken konuşmanızın tonlamasına göre bazı kelimeler büyük harfle başlayabiliyor bu yüzden '*çal*' kelimesi büyük harfle başladığında program herhangi bir şey yapmıyordu. Diğer ve en önemli problem ise şuydu: Diyelim ki siz normal bir şekilde konuşuyorsunuz ve konuşmanızın hemen ardından '*çal clocks coldplay*' dediniz. Örnek bir konuşma vereyim: "*Ne dinlesem ki acaba çal yellow coldplay*". Bunu yaptığınız zaman program yine çalışmayacaktır çünkü 
`komut.startswith('çal')` metodunu kullandım yani çal kelimesi başta olmadığı sürece program bunu algılamayacaktır.<br><br>

Bu sorunları çözmek ve kodu daha derli ve toplu hale getirmek için aşağıdaki kodu yazdım:

```python
import speech_recognition as sr
import pyautogui as auto
import webbrowser
import time

CAL = "çal"
HATA = "anlayamadım"

def ses():
  r = sr.Recognizer()
  with sr.Microphone() as source:
    ses = r.listen(source)
    
    try:
      return r.recognize_google(ses, language="tr-TR", key=None);
    except sr.UnknownValueError:
      print(HATA)
      return HATA

def komut_isle(komut):
  kelimeler = komut.split(" ")
  arama_metni = ""
  
  if (kelimeler.count(CAL) > 0):
    index = kelimeler.index(CAL)
    index = index + 1;

    while (index < len(kelimeler)):
      if (kelimeler[index] == CAL):
        break

      arama_metni = arama_metni + kelimeler[index] + "+"
      index = index + 1

  return arama_metni

def video_ac(url):
  webbrowser.open_new_tab(url)
  time.sleep(2.5)
  auto.click(500, 400)

while True:
  komut = ses().lower()
  arama_metni = komut_isle(komut)
  url = "https://www.youtube.com/results?search_query=" + arama_metni

  if (komut != HATA):
    print("Söylenen: " + komut)
  
  if (arama_metni != ""):
    print("URL: " + url)
    video_ac(url)
```

Böylelikle kodu fonksiyonlara bölerek daha düzenli bir hale getirdim. 'çal' komutunun başta olmadığında çalışmama sorununu nasıl çözdüğümü açıklamam için   
*komut_isle* fonksiyonuna bakmamız gerek. Yine komutu kelimelerine ayırarak başladım. Bu sefer komutun '*çal*' ile başlamasını değil komutun içinde '*çal*' kelimesi geçiyor mu diye kontrol ediyorum. Ve `kelimeler.index(CAL)` diyerek '*çal*' kelimesinin bulunduğu ilk indisi alıyorum. Ve bu indisten başlayarak sonrasını şarkı ismi olarak alıyorum ama eğer yine bir çal komutu ile karşılaşırsam orada kesiyorum döngüyü. Örnek vereyim, `Merhaba nasılsın çal sia alive` dedğiniz zaman program Sia'dan Alive' şarkısını açacaktır veya `Merhaba nasılsın çal sia the greatest çal mevsimler geçerken` dediğiniz zaman program Mevsimler Geçerken değil de Sia'dan The Greatest şarkısnı açacaktır.<br><br>

Ama yine programda hala bazı tam olarak çözemediğim ses algılama ile ilgli problemler var ki şöyle muhabbetler yaşanabiliyor:

![](../../../../assets/img/pyoto0.jpg)

---

### **Otomatik Sayfa Kaydırma Programı**

Bilgisayarda bir şey okurken sabit durduğum için ellerim üşüyordu ve ellerimi cebime sokmak istiyordum fakat okuduğum sayfayı da okudukça aşağı kaydırmam gerekiyordu. Buna çözüm bulmak için böyle bir program geliştirdim.<br>
İlk başta programın şöyle çalışmasını planlıyordum: Program kameradan beni izleyecek ve kafamı aşağıya eğdiğimde sayfa aşağı kayacak ve kafamı yukarı kaldırdığımda ise sayfa yukarı doğru kayacak ve kafam düz durduğunda ise sayfa kaymayacak. [OpenCV]() kütüphanesi bu proje için biçilmiş kaftandı, görüntü işleme, obje algılama istediğim her şeyi yapıyordu.<br><br>

İlk olarak programın yüzümü algılamasına odaklandım ama kafamın aşağıya eğik veya yukarıya doğru dönük olduğunu nasıl algılayacağım hakkında hiç bir fikrim yoktu, hala da yok o yüzden şöyle bir kestirme çözüm buldum: Sadece yüzümün algılanıp algılanmamasını kontrol etmek. Yani program eğer yüzümü görüyorsa hiç bir şey yapmayacak ama eğer yüzüm yoksa sayfayı aşağı doğru kaydıracaktı. Başka bir deyişle çözümüm sayfanın yukarıya kaymasını kaldırmak oldu. Bunun için şöyle bir kod yazdım:

``` python
import pyautogui as auto
import cv2
import numpy as np

face_cascade = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')

cap = cv2.VideoCapture(0)

while True:
  ret, img = cap.read()
  grayscaled = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
  faces = face_cascade.detectMultiScale(grayscaled, 1.3, 5)

  if (len(faces) == 0):
    auto.scroll(-50)

  for (x,y,w,h) in faces:
    cv2.rectangle(img, (x,y), (x+w, y+h), (255,0,0),2)

  #cv2.imshow('OpenCV Deneme', img)
  key = cv2.waitKey(30) & 0xff

  if (key == 27):
    break

cap.release()
cv2.destroyAllWindows()
```

Burada kullandığım [haarcascade_frontalface_default.xml](https://github.com/opencv/opencv/blob/master/data/haarcascades/haarcascade_frontalface_default.xml) dosyasına linkten ulaşabilirsiniz. Bir de buradaki `if (key == 27)` satırında 27 nin ne anlama geldiğini unuttum sanırım ESC tuşuna denk geliyordu ki programı kapatmak için kullanmışım <br>

Programda sayfayı yukarı kaydırma diye bir şey olmadığından dolayı okuduğum şeyi çok iyi okumam gerek, bir daha dönüşü olmayacak çünkü :) <br>
