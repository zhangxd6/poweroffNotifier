var Mailgun = require('mailgun-js');

var api_key = process.env.MAILGUNKEY;

//Your domain, from the Mailgun Control Panel
var domain = process.env.MAILGUNDOMAIN;

//Your sending email address
var from_who = process.env.MAILGUNFROM;

var mailgun = new Mailgun({apiKey: api_key, domain: domain});

    var data = {
    //Specify email data
      from: from_who,
    //The email to contact
      to: 'zhangxd1@gmail.com',
    //Subject and text data  
      subject: 'Hello from Mailgun',
      html: 'Hello, This is not a plain-text email, I wanted to test some spicy Mailgun sauce in NodeJS! '
    }

    //Invokes the method to send emails given the above data with the helper library
    mailgun.messages().send(data, function (err, body) {
        //If there is an error, render the error page
        if (err) {
            console.log("got an error: ", err);
        }
        //Else we can greet    and leave
        else {
            //Here "submitted.jade" is the view file for this landing page 
            //We pass the variable "email" from the url parameter in an object rendered by Jade
            console.log(body);
        }
    });