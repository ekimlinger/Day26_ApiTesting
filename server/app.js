var myPassword = "";

var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');


var client = require('../client_secret.json');
var CLIENT_ID = "MYCLIENTID";
var CLIENT_SECRET = require('../client_secret.json');
var REDIRECT_URL = "";
var google = require('googleapis');
var OAuth2 = google.auth.OAuth2;
var oauth2Client = new OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);




var mailer = require("nodemailer");

    // Use Smtp Protocol to send Email
    var smtpTransport = mailer.createTransport("SMTP",{
        service: "Gmail",
        auth: {
            user: "MYEMAIL@gmail.com",
            pass: myPassword
        }
    });

    var mail = {
        from: "YOUR NAME<MYEMAIL@gmail.com>",
        to: "SOMEONEELSE@gmail.com",
        subject: "Send Email Using Node.js",
        text: "I GOT THIS TO WORK!!!!"
    }

    smtpTransport.sendMail(mail, function(error, response){
        if(error){
            console.log(error);
        }else{
            console.log("Message sent: " + response.message);
        }

        smtpTransport.close();
    });



// var gmail = google.gmail({ version: 'v1', auth: oauth2Client });
// // var google = require('googleapis');
// // var gmail = google.gmail("v1.js");
// //
// // var OAuth2 = google.auth.OAuth2;
// // var oauth2Client = new OAuth2(client.client_id, client_secret, redirect_url);
// // google.options({ auth: oauth2Client });
// //
// //






//var routes = require('./routes/index.js');
var greeting = "Hey this email works and you should update your parent journal!";


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

function sendEmail(message){
  "https://www.googleapis.com/upload/gmail/v1/users/userId/drafts/send"
}

app.get("/*", function(req,res){
  var file = req.params[0] || "/views/index.html";
  res.sendFile(path.join(__dirname,"/public/", file));
});

app.set("port",(process.env.PORT || 3000));

app.listen(app.get("port"),function(){
  console.log("Listening on port: ", app.get("port"));
});

module.exports = app;
