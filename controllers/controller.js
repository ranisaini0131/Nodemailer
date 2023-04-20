const nodemailer = require("nodemailer");
const { EMAIL, PASSWORD } = require('nodemailer');

//send mail from testing account
const signup = async (req, res) => {

    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass, // generated ethereal password
        },
    });

    let message = {
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Successfully Register with us.", // plain text body
        html: "Successfully Register with us.", // html body
    }

    transporter.sendMail(message).then((info) => {
        return res.status(201).json({
            msg: "you should receive an mail",
            info: info.messageId,
            preview: nodemailer.getTestMessageUrl(info)
        })
    }).catch(error => {
        return res.status(500).json({ error })
    });



    // res.status(201).json("SignUp Successfully....!");

}


//send mail from real gmail account
const getBill = (req, res) => {
    let config = {
        service: 'gmail',
        auth: {
            user: EMAIL,
            pass: PASSWORD
        }
    }

    let transporter = nodemon.createTransport(config);

    res.status(201).json("getBill Successfully");
}


module.exports = {
    signup,
    getBill,
};