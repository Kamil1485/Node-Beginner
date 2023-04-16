const express = require("express");
const app = express();
const port = 3004;
// Middleware işlevi
function logger(req, res, next) {
  console.log("Logger Istek alindi: ", req.url);
  next();
}
function logger2(req, res, next) {
    console.log("Logger2 İstek alindi: ", req.url);
    next();
  }
app.use(logger2);
app.get("/", (req, res) => {
  console.log("Home");
  res.send("Home Page");
});
// Middleware işlevi kaydı
app.use(logger); //about  sayfasında middleware calısır home da iken calısmaz  / adresine eşleşme olunca response gönderilir sonraki routelara bakılmaz. middleware okunmaz
// URL eşleştirmesi ve işlev çağrısı
app.get("/about", handleAboutPage);

// İşlev tanımı
function handleAboutPage(req, res) {
  res.send("Hakkımızda sayfası");
}

app.listen(port, () => {
  console.log(`Sunucu başlatıldı: http://localhost:${port}`);
});
