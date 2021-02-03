const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');


const auth = {
    auth: {
        api_key: '',
        domain: ''
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const mailOptions = {
    from: 'gimnasiointernacionalcu@gmail.com',
    to: 'giovannicapotegarcia@gmail.com',
    subject: 'Testing',
    text: 'Information'
};

transporter.sendMail(mailOptions, function(err,data){
    if(err){
        console.log('error occurs');
    } else{
        console.log('message sent !!!!');
    }
});

module.exports = router
/*const express = require('express');
var nodemailer = require('nodemailer');
const app = require('../app');
const router = Router();

router.post('/email',async (req, res)=> {

    const {Nombre,Correo,Mensaje} = req.body;

    contentHTML=`
    <h1>User Information</h1>
    <ul>
        <li>Username: ${Nombre}</li>
        <li>Email: ${Correo}</li>
    </ul>
    <p>${Mensaje}</p>
    
    `;

    const transporter = nodemailer.createTransport({
        host: 'email.secureserver.net',
        port: 80,
        secure: false,
        auth: {
            user: 'info@gimnasiointernacional.com',
            pass: 'Nuevovedado31'
        }
       
    });
    
   const info = await transporter.sendMail({
        from:"'Correo Gimnasio'<info@gimnasiointernacional.com>" ,
        to: Correo,
        subject: 'Respuesta',
        text: contentHTML
    });

    //console.log('Message sent',info);
    res.send('/views/recibido.pug');
});

module.exports = router;*/
