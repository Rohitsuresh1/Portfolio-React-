// const nodemailer = require('nodemailer');
// const { google } = require('googleapis');
// require('dotenv').config();

// const oAuth2Client = new google.auth.OAuth2(
//   process.env.CLIENT_ID,
//   process.env.CLEINT_SECRET,
//   process.env.REDIRECT_URI
// );
// oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

// const name='Rohith';

// async function sendMail() {
//   try {
//     const accessToken = await oAuth2Client.getAccessToken();

//     const transport = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         type: 'OAuth2',
//         user: 'project3team2@gmail.com',
//         clientId: process.env.CLIENT_ID,
//         clientSecret: process.env.CLEINT_SECRET,
//         refreshToken: process.env.REFRESH_TOKEN,
//         accessToken: accessToken,
//       },
//     });

//     const mailOptions = {
//       from: 'ClubQ 📧 <project3team2@gmail.com>',
//       to: 'rohitsuresh1@hotmail.com',
//       subject: `It's your turn!`,
//       text: `Hello ${name}, It's your turn now, please arrive back to the site and show this email to the security guard. 
//       Please arrive in 15 mins, failiure to arrive in the set time could result in you loosing your spot in line.
      
//       Hope to see you soon,
//       ClubQ team`,
//       html: `<h3>Hello ${name},</h3><br><h4>It's your turn now, please arrive back to the site and show this email to the security guard.</h4>
//       <h3>Please arrive in 15 mins, failiure to arrive in the set time could result in you loosing your spot in line.</h3><br>
//       <h4>Hope to see you soon,</h4><h4>ClubQ team 🇶</h4>
//       `,
//     };

//     const result = await transport.sendMail(mailOptions);
//     return result;
//   } catch (error) {
//     return error;
//   }
// }

// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const client = require('twilio')(accountSid, authToken);


// const number='+16479398874';

// async function sendText() {
//   client.messages
//       .create({body: 'Hi there', from: '+13253997261', to: `${number}`})
//       .then(message => console.log(message.sid));
// };


// // sendMail()
// //   .then((result) => console.log('Email sent...', result))
// //   .catch((error) => console.log(error.message));

// module.exports={ sendText, sendMail} ;