// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const sendMail = require('sendmail')();
  const { from, mailBody, phone, name } = req.body;
  console.log(from);
  sendMail({
    from: `${name} <${from}>`,
    to: 'imbittuk0@gmail.com',
    subject: 'An enquery from website contact form.',
    text: mailBody
}, (err) => {
    if(err) {
       res.status(200).json({status: false, message: "Error while sending message. Please try again latter."})
    } else {
       res.status(200).json({status: true, message: "Your message recived. We'll contact you soon."})
    }
})
  // res.status(200).json({ name: name, from: from, mailBody, number: phone})
}
