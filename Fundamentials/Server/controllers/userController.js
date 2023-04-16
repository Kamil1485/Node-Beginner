const express = require("express");
let users = require("../model/data");
const router = express.Router();

//*5
const contact_get = (req, res) => {
  // /contact adresine istek geldiğinde contact.html dosyası gösterilir.
  res.render("contact", { title: "Contact Page", header: "Contact Header" });
};
//*10
let nextUserId = 1; // Her yeni kullanıcı için bir öncekinden daha büyük bir değer atanacak

const contact_post = (req, res, next) => {
  const { username, email, message } = req.body;

  // Yeni kullanıcıyı oluşturun ve 'id' değerini atayın
  const newuser = {
    id: nextUserId++,
    username: username,
    email: email,
    message: message,
  };

  if (username && message) {
    // Kullanıcıları 'users' dizisine ekleyin
    users.push(newuser);
    res.redirect("/users");
  } else {
    next({
      message: !username ? "Username alanı eksik!" : "Message alanı eksik!",
      statusCode: 404,
    });
  }
};

const user_delete = (req, res, next) => {
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
};

console.log(users);

//*5
const users_get = (req, res) => {
  res.render("users", {
    title: "Users Page",
    header: "Users Header",
    users: users,
  }); //users a istek geldiğinde,render metoduyla users.ejs dosyası görüntülenir.
};
//*6
const user_details = (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);
  res.render("userinfo", {
    title: "Userinfo Page",
    header: "Userinfo Header",
    user: user,
  });
};

module.exports = {
  contact_get,
  contact_post,
  user_delete,
  users_get,
  user_details,
};
