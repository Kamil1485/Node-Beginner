const express = require("express");
//let users = require("../data");
const userControllers=require("../controllers/userController");
const router = express.Router();
//*5
router.get("/contact", userControllers.contact_get);
//*10
router.post("/contact",userControllers.contact_post );

router.delete("/users/:id", userControllers.user_delete);

//console.log(users);

//*5
router.get("/users",userControllers.users_get);
//*6
router.get("/users/:id",userControllers.user_details);
module.exports = router;
