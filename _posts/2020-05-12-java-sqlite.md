---
layout: post
title: "Java ile SQLite Veritabanı"
categories: [projects]
date: 2020-05-12
comments: false
---

Bu yazıda kısaca Java uygulamalarında SQLite veritabanının nasıl kullanılabileceğini, **anlayabildiğim** kadarıyla açıklamaya çalışacağım.<br>

**Alt Başlıklar**
- [JDBC](#jdbc)
- [Veritabanı Bağlantısı Oluşturma](#veritabanı-bağlantısı-oluşturma)
- [Tablo Oluşturma](#tablo-oluşturma)
- [Tabloya Veri Yerleştirme](#tabloya-veri-yerleştirme)
- [Tablodaki Verileri Çekme](tablodaki-verileri-çekme)
- [Tablodaki Veriyi Güncelleme](#tablodaki-veriyi-güncelleme)
- [Tablodan Veri Silme](#tablodan-veri-silme)

---

### **JDBC**

İlk önce Java'da herhangi bir veritabanıyla herhangi bir işlem yapabilmek için JDBC(Java Database Connectivity)'yi kullanmamız gerekiyor. JDBC, Java ile veritabanı arasındaki bağlantıyı sağlayan bir API ve JDBC, bağlanılan her farklı veritabanı için bir JDBC Driver'a ihtiyaç duyuyor. Örneğin, SQLite bir veritabınına bağlanmak için SQLite JDBC Driver'a, MySQL bir veritabanına bağlanmak için MySQL JDBC Driver'ına ihtiyacınız olacaktır. Aşağıdaki şema daha anlaşılır sanırsam.<br>

<div style="text-align: center;">
  <img src="../../../../assets/img/jdbc.gif">
</div> <br>

SQLite için JDBC Driver'ı [buradan](https://bitbucket.org/xerial/sqlite-jdbc/downloads/) indirebilirsiniz. Gradle veya Maven için de [buradan](https://mvnrepository.com/artifact/org.xerial/sqlite-jdbc) erişilebilir.<br>

### **Veritabanı Bağlantısı Oluşturma**

```java
import java.sql.*;

public class SQLiteDene {

  public Connection getConnection() {
    try {
      //Class.forName("org.sqlite.JDBC");
      return DriverManager.getConnection("jdbc:sqlite:veritabani.db");
    } catch (SQLException e) {
      e.printStackTrace();
    }
  }
}
```

Burada ne yaptık ?<br>
**Driver Manager,** sınıfı sayesinde bağlanmak istediğimiz veritabanına ait bağlantıyı elde ettik. Tabi bunu yapabilmek için SQLite JDBC Driver'ın projemize dahil edilmiş olması gerekiyor. `DriverManager.getConnection("jdbc:sqlite:veritabani.db")` diyerek *veritabani.db* adlı veritabanına ait bağlantıyı elde ettik veya öyle bir veritabanı yoksa oluşturduk. Bu kısımda sadece *veritabani.db* yazdığımız için veritabanı dosyası projemizin ana dizininde oluşturuldu ama istersek herhangi bir dizinde de oluşturabilirdik şu şekilde: `DriverManager.getConnection(jdbc:sqlite:C:/Users/Eren Colak/Documents/veritabani.db)`<br><br>

**Connection** ise veritabanına olan bağlantıyı temsil ediyor kısaca. *Connection* sayesinde veritabanında yapacağımız işlemler için ifadeler hazırlayabiliyor olacağız. İleriki örneklerde daha iyi anlaşılıyor demek istediğim.<br><br>

Bir de başka kaynaklarda gördüğüm ve yukarıda yorum halinde yazdığım `Class.forName("org.sqlite.JDBC")` ifadesini açıklamak istiyorum. Benim ilk başta kafamı karıştırmıştı bu çünkü ne işe yaradığı hakkında bir fikrim yoktu. `Class.forName("X")` methodu *X* isimli sınıfın statik metodlarını çağırıyor ve *X* isimli sınıfın ilişkili *Class* objesini döndürüyor. Bunun veritabanı bağlantısıyla ne ilgisi var derseniz, JDBC Driver'ın statik metodları çalışarak DriverManager'ın bu Driver'ı tanımasını sağlıyorlar. Böylece siz `DriverManager.getConnection()` metodunu çağırdığınızda bir *Connection* objesi elde edebiliyorsunuz. Ama araştırdığımda öğrendim ki bu sadece bazı JDBC Driver'larında gerekli oluyor. Bu yüzden SQLite veritabanı kullanırken bu koda ihtiyacımız olmayacak.<br>

---

### **Tablo Oluşturma**
```java
//SQLiteDene.java

public void createTable() {
  Connection conn = getConnection();
  Statement s;
  try {
    s = conn.createStatement();
    String tableSql = "CREATE TABLE IF NOT EXISTS kullanicilar (isim TEXT NOT NULL," +
                                                               "adres TEXT NOT NULL," +
                                                               "eposta TEXT NOT NULL)";

    s.executeUpdate(tableSql);
      
  } catch (SQLException e) {
    e.printStackTrace();
  } finally {
    if (s != null)
      s.close();
    if (conn != null)
      conn.close();
  }
}
```

Burada *kullanicilar* isimli bir tablo oluşturduk ve bu tablonun içinde de 3 tane *isim, adres, eposta* adlı 3 sütun oluşturduk. SQL sözdizimi için [buraya](https://www.w3schools.com/sql/sql_intro.asp) göz atabilirsiniz.<br>
Yukarıdaki SQL sorgusunu gerçekleştirmek için *Statement* sınıfını kullandık. **Statement** SQL sorgularını gerçekleştirmek için kullanılan bir sınıf ve 
bu sınıfın `executeUpdate(tableSql)` metodunu kullanarak bir tablo oluşturduk. `executeUpdate(String sql)`, SQL sorgusundan geriye bir şey dönmesine gerek olmadığı zaman kullan bir metod ve bu örnekte de geriye bir şey dönmesine gerek olmadığı için bu metodu kullandık.

---

### **Tabloya Veri Yerleştirme**

```java
//SQLiteDene.java

public void insertData(String isim, String adres, String eposta) {
  Connection conn = getConnection();
  Statement s;
  
  try {
    s = conn.createStatement();
    String sql = "INSERT INTO kullanicilar(isim, adres, eposta) VALUES(" + isim + "," + adres + "," + eposta +  ")"

    s.executeUpdate(sql);

  } catch (SQLException e) {
    e.printStackTrace();
  } finally {
    if (s != null)
      s.close();
    if (conn != null)
      conn.close();
  }
}
```

Burada önceki örnekten pek bir fark yok, sadece SQL farklı. Ama burada dikkat ettiyseniz SQL sorgusunda çok fazla '*+*' operatörü kullanıp, bir sürü *String*'i birleştirdik. Bu da sorguyu dağınık ve anlaşılması zor bir hale getiriyor. Bunu çözmek için de **PreparedStatement** sınıfını kullanabiliriz. Aynı örneği bir de 
*PreparedStatement* ile yazalım.

```java
//SQLiteDene.java

public void insertData(String isim, String adres, String eposta) {
  Connection conn = getConnection();
  PreparedStatement ps;
  try {
    String sql = "INSERT INTO kullanicilar(isim, adres, eposta) VALUES(?, ?, ?)"
    ps = conn.prepareStatement(sql);
    
    ps.setString(1, isim);
    ps.setString(2, adres);
    ps.setString(3, eposta);

    ps.executeUpdate(sql);
      
  } catch (SQLException e) {
    e.printStackTrace();
  } finally {
    if (s != null)
      ps.close();
    if (conn != null)
      conn.close();
  }
}
```

Soru işaretli yerlere değişkenleri yerleştirebildiğimizden dolayı kodumuz daha düzenli güzüküyor.

---

### **Tablodaki Verileri Çekme**

```java
//SQLiteDene.java

public void fetchData(String isim, String adres, String eposta) {
  Connection conn = getConnection();
  PreparedStatement ps;
  try {
    String sql = "SELECT * FROM kullanicilar"
    ps = conn.prepareStatement(sql);

    ResultSet rs = ps.executeQuery(sql);

    while (rs.next()) {
      String isim = rs.getString("isim");
      String adres = rs.getString("adres");
      String eposta = rs.getString("eposta");
    }
    
  } catch (SQLException e) {
    e.printStackTrace();
  } finally {
    if (s != null)
      s.close();
    if (conn != null)
      conn.close();
  }
}
```

Burada farklı olarak *ResultSet* sınıfını ve *executeQuery(sql)* metodunu kullandık. Üstteki örneklerde *executeUpdate(sql)* metodunu kullandık çünkü sorgudan dönmesini istediğimiz bir şey yoktu ama bu sefer kullanicilar tablosundaki verileri istiyoruz. Bu verileri de *ResultSet* tipinde bir obje tutuyor.<br><br>
**ResultSet**'in yapısını açıklamak gerekirse, *ResultSet* sorgudan gelen bütün satırları tutuyor ve üzerinde durduğumuz satırı belirtmesi içinde bir *imleç* değişkeni tutuyor, Bu imlecin ilk konumu, sorgudan gelen ilk satırdan bir öncesi yani ilk konumunda herhangi bir veri yok. `rs.next()` metodunu çağırdığımız zaman
imleç bir ileri gidiyor yani bir sonraki satıra ve burada bir veri var olup olmamasına göre bir `boolean` tipinde bir değer döndürüyor. `rs.previous()` metodunu da imleci bir önceki satıra getirmek için kullanabilirsiniz.<br><br>
`rs.getString("isim")` metodunu çağırdığımızda ise imlecin o anki bulunduğu satırda *isim* sütunundaki veriyi döndürüyor. `rs.getInt("sütun_ismi"), rs.getDate("sütun_ismi")` şeklinde de tablonuzdaki veri yapısına göre kullanabilirsiniz.

---

### **Tablodaki Veriyi Güncelleme** 

```java
//SQLDene.java

public void updateData(String isim, String adres, String eposta) {
  Connection conn = getConnection();
  PreparedStatement ps;
  try {
    String sql = "UPDATE kullanicilar SET adres = ?, SET eposta = ? WHERE isim = ?"
    ps = conn.prepareStatement(sql);
    
    ps.setString(1, adres);
    ps.setString(2, eposta);
    ps.setString(3, isim);

    ps.executeUpdate(sql);
      
  } catch (SQLException e) {
    e.printStackTrace();
  } finally {
    if (s != null)
      ps.close();
    if (conn != null)
      conn.close();
  }
}
```

---

### **Tablodan Veri Silme**

```java
//SQLDene.java

public void updateData(String isim) {
  Connection conn = getConnection();
  PreparedStatement ps;
  try {
    String sql = "DELETE FROM kullanicilar WHERE isim = ?"
    ps = conn.prepareStatement(sql);
    
    ps.setString(1, isim);

    ps.executeUpdate(sql);
      
  } catch (SQLException e) {
    e.printStackTrace();
  } finally {
    if (s != null)
      ps.close();
    if (conn != null)
      conn.close();
  }
}
```

--- 

Java'da SQLite veritabanını nasıl kullanılabileceğini bildiğim kadar açıklamaya çalıştım. Bir veritabanını bir projede nasıl kullanılacağını ve kafamdaki çoğu soruyu gideren [şu yazıyı](https://dzone.com/articles/building-simple-data-access-layer-using-jdbc) da okuyabilirsiniz.