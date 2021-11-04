require('dotenv').config()
const express = require("express");
const app = express();
const nodemailer = require('nodemailer')


app.use('/', express.static(__dirname + '/public'))
app.use(express.json())

app.post('/api', (req, res)=>{

     let transporter = nodemailer.createTransport({
        service:'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });
    
    let mailOptions = {
        from: `"${req.body.name}" ${req.body.email}`,
        to: 'joaopedrotestenodemailer@gmail.com',
        subject: `${req.body.name}/${req.body.email}`,
        text: `${req.body.mesage}`
    };
    
    transporter.sendMail(mailOptions, function(err, data){
        if (err){
            console.log('error sending mail', err);
        }else{
            console.log('email sent successfuly');
        }
    });      
});

const PORT = process.env.PORT || 3000 ;

app.listen(PORT,()=>console.log(`server na porta ${PORT}`))