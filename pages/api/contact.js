export default function handler(req, res) {
    const sendMail = require('sendmail')();
    const { from, mailBody, number, name } = req.body;
    sendMail({
        from: `${name} <${from}>`,
        to: 'imbittuk0@gmail.com',
        subject: 'An enquery from website contact form.',
        text: mailBody
    }, (err, data) => {
        if(err) {
           return res.status(200).json({status: false, message: "Error while sending message. Please try again latter."})
        } else {
           return res.status(200).json({status: true, message: "Your message recived. We'll contact you soon."})
        }
    })
    
}