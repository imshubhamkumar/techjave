/* eslint-disable import/no-anonymous-default-export */
export default (req, res) => {
    const sendMail = require('sendmail')();
    const { from, mailBody, number, name } = req.body;
    console.log('logcheck: ' + JSON.stringify(req));
    sendMail({
        from: `${name} <${from}>`,
        to: 'imbittuk0@gmail.com',
        subject: 'An enquery from website contact form.',
        text: mailBody
    }, (err) => {
        if(err) {
           return res.status(200).json({status: false, message: "Error while sending message. Please try again latter."})
        } else {
           return res.status(200).json({status: true, message: "Your message recived. We'll contact you soon."})
        }
    })
    
}