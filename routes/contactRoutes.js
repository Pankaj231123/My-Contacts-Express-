const express = require("express");
const router = express.Router();
const {getContact, createContact, getContacts, updateContact, deleteContact} = require("../controller/contactController");



router.route("/").get(getContact).post(createContact);
router.route("/:id").get(getContacts).put(updateContact).delete(deleteContact);



module.exports = router;