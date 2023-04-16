const express = require("express");
let users = require("./data");
const bodyParser = require("body-parser"); //*9
const logger = require("./middlewares/logger");
console.log(users);
const app = express(); //*1
const port = 3001;

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
//*5
app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact Page", header: "Contact Header" });
});
//*10
app.post("/contact", (req, res, next) => {
  let id = users.length + 1;
  console.log("He*********************ey");
  const { username, email } = req.body;
  let newuser = { id: id, username: username, email: email };
  id++;
  if (username) {
    users.push(newuser);
    res.redirect("/users");
  } else {
    next({
      message: "Username alanı eksik!",
      statusCode: 404,
    });
  }
});

app.delete("/users/:id", (req, res, next) => {
  const id = parseInt(req.params.id);
  const deleted = users.find((user) => user.id === id);
  if (deleted) {
    users = users.filter((user) => user.id !== id);
    res.send("Kullanıcı Silindi");
  } else {
    next({
      message: "Silme işlemi başarısız",
      statusCode: 404,
    });
  }
});

console.log(users);

//*5
app.get("/users", (req, res) => {
  res.render("users", {
    title: "Users Page",
    header: "Users Header",
    users: users,
  }); //users a istek geldiğinde users.ejs dosyası görüntülenir.
});
//*6
app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);
  res.render("userinfo", {
    title: "Userinfo Page",
    header: "Userinfo Header",
    user: user,
  });
});

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
