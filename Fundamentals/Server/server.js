const http = require("http"); //1
const fs = require("fs");
const port = 5058;

//callback fonksiyonu request ve resposne objesi alır
const server = http.createServer((req, res) => {
  //callback her request de calısır.
  //request object
  console.log(req.url, req.method); // / ve  GET
  //response object
  // res.setHeader() Sunucunun döndürdüğü verilerin nasıl işleneceği konusunda istemciye bilgi verilebilir.
  res.setHeader("Content-Type", "text/html"); //Content-Type header'ı, sunucunun döndürdüğü içeriğin türünü belirtir
  /*
 res.write("<p>Hello</p>") 
 res.write("<p>Hello Again</p>") 
*/

  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200; //ağ bölümünde girilen sayfa özelliklerinde response kodu yazar
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/aboutme": //redirect
      res.statusCode = 301; //yönlendirme yapma kodu
      res.setHeader("Location", "/about");
      res.end();
      break;
    default: //tum erisilen sayfalara  200 kodu girilir.
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, (err, data) => {
    // ilgili html dosyasından veriyi okuyup ekrana yazar
    if (err) {
      console.log(err);
      res.end();
    } else {
      // res.write(data); //gerek yok
      res.end(data);
    }
  });
});
server.listen(port, "localhost", () => {
  //localhost domain name gibidir.localhost:port
  console.log(`listening  for request on ${port}`);
});

/*
let readData = "";
fs.readFile("./views/index.html", (err, data) => {
  if (err) {
    console.log(err)
  } else {
    readData = data.toString();
    console.log(readData);
  }
});
*/
