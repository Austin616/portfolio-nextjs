import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { firstName, lastName, email, subject, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL,
      subject: `Message from ${firstName} ${lastName}: ${subject}`,
      text: `You have received a new message from ${firstName} ${lastName} (${email}):\n\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Error sending email", error: error.message }, { status: 500 });
  }
}
