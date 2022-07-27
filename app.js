//index.js for express server 

const express = require('express'); 
const cors = require('cors');
const twilio = require('twilio'); 
require ('dotenv').config();
const path= require('path');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;


const client = new twilio(accountSid, authToken);

const app = express(); 
app.use(cors()); 

const port=process.env.PORT||4000;

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'build')));
    console.log(process.env.NODE_ENV);
  }

app.get('/api/send-sms', (req, res) => {
    res.send('Hello to the Twilio Server');
    
    const {  number, msg } = req.query;
    client.messages.create({
        body: msg,
        to: number,  
        from: '+13253997261'
    });
})

app.listen(port,(err)=>{
    if(err) console.log(err);
    console.log(`Running on Port ${port}`);
})


