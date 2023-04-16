import express from "express";
import path from "path";

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

const app = express();

// EJS view engine kullanımı
app.set('views', './views');
app.set('view engine', 'ejs');

// public klasörünü statik dosya olarak kullanma
app.use(express.static("public"));
app.set("views",''); // views klasörü doğru şekilde belirtiliyor

// Ana sayfa
app.get("/", function (req, res) {
  res.render("index", {
    user: "Kamil",
    title: "ejs",
    message: "Hoşgeldiniz!!!",
  });
});

// Sunucuyu başlat
app.listen(3000, function () {
  console.log("Sunucu 3000 portunda başlatıldı!");
});
