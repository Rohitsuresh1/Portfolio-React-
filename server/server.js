//index.js for express server 

const express = require('express'); 
const cors = require('cors');
const twilio = require('twilio'); 
require ('dotenv').config();


const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;


const client = new twilio(accountSid, authToken);

const app = express(); 
app.use(cors()); 


app.get('/api/send-sms', (req, res) => {
    res.send('Hello to the Twilio Server');
    
    const {  number, msg } = req.query;
    client.messages.create({
        body: msg,
        to: number,  
        from: '+13253997261'
    });
})
app.listen(4000, () => console.log("Running on Port 4000"));

