const nodemailer=require('../config/nodemailer');

//exports method

exports.newComment=(comment) =>
{
    console.log("inside newComment Method",comment);

    nodemailer.transporter.sendMail({
        from:"ogguoggu@demo.com",
        to:comment.user.email,
        html:`<h1> this is demo for creating and sending mailer <h1>`

    },
    (err,info)=>{ if (err){
        console.log("error in sending mailer");
        return err;
    }
    else{
        console.log("mail sent",info);
        return;
    }

});
}