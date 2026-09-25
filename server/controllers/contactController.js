const { validationResult } = require("express-validator");
const Contact = require("../models/Contact");
const sendContactEmail = require("../utils/sendEmail");

const submitContact = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    const { name, email, message } = req.body;

    // Save message to MongoDB
    await Contact.create({
      name,
      email,
      message,
    });

    // Send email notification
    await sendContactEmail({
      name,
      email,
      message,
    });

    return res.status(201).json({
      success: true,
      message: "Your message has been sent successfully!",
    });
  } catch (error) {
    console.error("Contact submission error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to send your message.",
    });
  }
};

module.exports = {
  submitContact,
};
