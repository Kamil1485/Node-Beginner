const express = require("express");
let users = require("./model/data");
const bodyParser = require("body-parser"); //*9
const logger = require("./middlewares/logger");
console.log(users);
const app = express(); //*1
const port = 3001;
const userRoutes = require("./routes/userRoutes");
//hangi dosyaların frontend tarafında erişebilieceğini belirleyebiliriz.
app.use(express.static("public")); //public klasöründeki dosyalar frontend bölümünde erişilebilir.

//*7
app.set("view engine", "ejs");
//EJS'yi kullanacağımızı belirtir,
//Dinamik Html sayfası olusturmada ve Javascirpt kodlarını HTML içinde calıstırılmasını sağlar.
app.use(logger);
app.use(bodyParser.urlencoded({ extended: true }));
//*8
app.set("views", "ejsviews");
//Express uygulamasının görünüm dosyalarının (view files) nerede depolandığını belirlemek için kullanılır.

//listen for request
app.listen(port); //*2
//get metodu gönderilen url i dinler ve
app.get("/", (req, res) => {
  //*3
  //res.send("<p>Home Page</p>"); //  res.setHeader("Content-Type", "text/html"); // otomatik yapar
  //res.sendFile("./views/index.html", { root: __dirname }); //root klasörümüzü belirtiyoruz onun içinde arıyor index.html dosyasını
  res.render("index", {
    title: "Home Page",
    header: "Home Header",
  });
});

app.get("/about", (req, res) => {
  //*4
  // res.sendFile("./views/about.html", { root: __dirname }); //root klasörümüzü belirtiyoruz onun içinde arıyor index.html dosyasını
  res.render("about", { title: "About Page", header: "About Header" });
});

//userRoutes
app.use(userRoutes); //userRoutes daki tüm işlemleri bu satırdan itibaren ekledik.

//404 sayfası oluşturma
//eğer kod bu bölüme ulaşırsa yani kullanıcı tanımlı bir url e girmezse calısır.Eğer tanımlı url girerse res.end() işlemi yapıldığı için kodun alt bölümlerine geçilmez.
//kodun en alt bölümüne yaz yoksa  her zaman çalışacağı için hata verir.
//404 error olduğunu
//*6

//*11 hata işleme
app.use((err, req, res, next) => {
  console.error(err);
  res
    .status(err.status || 500)
    .send(`<p>Message:${err.message}</p><p>Error:${err.statusCode}</p>`);
});

/*
 Express.js middleware, bir HTTP isteği (request) ile HTTP yanıtı (response) arasındaki işlemleri gerçekleştiren işlevlerdir. 
 app.use yöntemi, middleware işlevlerini eklemek için kullanılır 
 ve bir path argümanı verilirse,middleware yalnızca belirtilen yol için çalışacaktır.
 next() fonksiyonunu çağırarak bir sonraki middleware işlevine geçiş sağlanır.
 */
