const express = require("express");
const router = express.Router();
const {register,profile,updateUserData,showUsers,deleteUser} = require('../controller/user.control')

router.post("/register",register) 
router.get("/showusers",showUsers) 
router.get("/profile",profile) 
router.put("/:id",updateUserData) 
router.delete("/:id",deleteUser)

module.exports = router