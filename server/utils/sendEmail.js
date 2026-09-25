const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendContactEmail = async ({
  name,
  email,
  message,
}) => {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: `New Portfolio Message from ${name}`,

    text: `
New message from your portfolio.

Name: ${name}
Email: ${email}

Message:
${message}
    `,

    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>New Portfolio Message</h2>

        <p>
          <strong>Name:</strong> ${name}
        </p>

        <p>
          <strong>Email:</strong> ${email}
        </p>

        <h3>Message</h3>

        <p>
          ${message.replace(/\n/g, "<br />")}
        </p>
      </div>
    `,
  });
};

module.exports = sendContactEmail;
