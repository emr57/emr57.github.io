const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

// CORS'u etkinleştir
app.use(cors());

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// POST isteği için route
app.post('/send-mail', (req, res) => {
    const { name, email, message } = req.body;



    const mailOptions = {
        from: email,
        to: 'emirmaden2004@gmail.com',
        subject: `${name} size bir mesaj gönderdi!`,
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Mail gönderilemedi.');
        }
        res.send('Mail başarıyla gönderildi.');
    });
});

app.listen(port, () => {
    console.log(`Sunucu http://localhost:${port} adresinde çalışıyor.`);
});