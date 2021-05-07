require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD
    }
});

// ! IN TESTS
const mailOptions = {
    from: process.env.EMAIL_ADDRESS,
    to: 'diogomarinhobarbosa1@gmail.com, diogomarinhobarbosa1@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log('Email sent: ' + info.response);
    }
});
