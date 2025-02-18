const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  console.log("Received a request at the root!");
  res.send("Server is up and running");
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

app.post("/send-email", (req, res) => {
  const { firstName, lastName, email, subject, message } = req.body;
  console.log("Received form data:", req.body);

  const mailOptions = {
    from: email,
    to: process.env.EMAIL,
    subject: `Message from ${firstName} ${lastName}: ${subject}`,
    text: `You have received a new message from ${firstName} ${lastName} (${email}):\n\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ message: "Error sending email", error });
    }
    console.log("Email sent successfully:", info);
    res.status(200).json({ message: "Email sent successfully", info });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
