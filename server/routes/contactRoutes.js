const express = require("express");
const { body } = require("express-validator");
const {
  submitContact,
} = require("../controllers/contactController");

const router = express.Router();

router.post(
  "/",
  [
    body("name")
      .trim()
      .notEmpty()
      .withMessage("Name is required"),

    body("email")
      .trim()
      .isEmail()
      .withMessage("Please enter a valid email"),

    body("message")
      .trim()
      .isLength({ min: 10 })
      .withMessage("Message must be at least 10 characters"),
  ],
  submitContact
);

module.exports = router;
