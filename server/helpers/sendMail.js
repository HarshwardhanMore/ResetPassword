const nodemailer = require("nodemailer");

const config = require("../config")


const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.USER_EMAIL_ID,
      pass: process.env.USER_PASSWORD,
    },
  });

exports.resetPassword = async (email)=>{

    const mailOptions = {
        from: {
            name: "Harshwardhan More",
            address: process.env.USER_EMAIL_ID
        },
        to: [email],
        subject: "Hello ✔",
        text: "Hello world? blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah",
        html: "<b>Hello world?</b>",
    }
    
    try {
        await transporter.sendMail(mailOptions);
        console.log("Email Sent!");
    } catch (error) {
        console.log(error);
    }
}
