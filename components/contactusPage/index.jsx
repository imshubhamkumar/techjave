import { useState } from "react";
import axios from "axios";
import HeroSection from "../heroSection";
import { contact } from "../../data/contact";
import Head from "next/head";

const ContactUsPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitted, setSubmitted] = useState(false)
    const [submitMsg, setSubmitMsg] = useState('')
    const [isError, setError] = useState(false)
    const [isLoading, setLoading] = useState(false)

    const validateEmail = (emailId) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(emailId).toLowerCase());
    }
    const validate = () => {
        if (!name || !email || !phone || !message) {
            setSubmitMsg('Please fill all the fields.')
            setError(true);
            setLoading(false);
            setSubmitted(true);
            return false
        }else if(phone.length < 10) {
            setSubmitMsg('Please enter a valid phone number')
            setError(true);
            setLoading(false);
            setSubmitted(true);
            return false
        }else if (!validateEmail(email)) {
            setSubmitMsg('Please enter a valid Email address.')
            setError(true);
            setLoading(false);
            setSubmitted(true);
            return false
        }
        return true;
    }
   const handleSubmit = (event) => {
        event.preventDefault()
        //other stuff
        if (!validate()) {
            return false;
        }
        setLoading(true)
        sendMessage()
      }
   const sendMessage = () => {
       const body = {
           from: email,
           name,
           phone,
           mailBody: message
       }
        let formData = new FormData()
        formData.append("name", name)
        formData.append("email", email)
        formData.append("phone",phone)
        formData.append("message", message)
        axios.post('/api/contact', body)
         .then((res) => {
           setName('');
           setEmail('');
           setPhone('');
           setMessage('');
           setError(false)
           setSubmitted(true)
           setSubmitMsg('Your message has been received will get back to you soon');
           setLoading(false)
        }).catch((error) => {
            setError(true)
            setSubmitted(true)
            setSubmitMsg('There was some error occur while submiting your query. Please try again.');
            setLoading(false)
        })
      }
  return (
    <>
    <Head>
        <title>Contact Us | TechJave</title>
    </Head>
      <HeroSection imgUrl={contact.imgUrl} title="Contact Us" />
      <div className="container-contact100">
        <div className="wrap-contact100">
          <form 
          className="contact100-form validate-form" onSubmit={(e) => handleSubmit(e)}>
            <span className="contact100-form-title">Send Us A Message</span>
            {isSubmitted &&
            <div className={['alert', isError ? 'alert-danger' : 'alert-success', 'alert-dismissible fade show'].join(' ')} role="alert">
                {submitMsg}
                <button type="button" onClick={() => setSubmitted(false)} className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>}
            <div
              className="wrap-input100 validate-input"
              data-validate="Please enter your name"
            >
              <input
                className="input100"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
              />
              <span className="focus-input100"></span>
            </div>

            <div
              className="wrap-input100 validate-input"
              data-validate="Please enter your email: e@a.x"
            >
              <input
                className="input100"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail"
              />
              <span className="focus-input100"></span>
            </div>

            <div
              className="wrap-input100 validate-input"
              data-validate="Please enter your phone"
            >
              <input
                className="input100"
                type="text"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
                maxLength="10"
                placeholder="Phone"
              />
              <span className="focus-input100"></span>
            </div>

            <div
              className="wrap-input100 validate-input"
              data-validate="Please enter your message"
            >
              <textarea
                className="input100"
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message"
                value={message}
              ></textarea>
              <span className="focus-input100"></span>
            </div>

            <div className="container-contact100-form-btn">
              <button className="contact100-form-btn">
                <span>
                  <i
                    className="fa fa-paper-plane-o m-r-6"
                    aria-hidden="true"
                  ></i>
                  {isLoading ?
                 <div className="spinner-border text-light" role="status">
                    <span className="sr-only">Loading...</span> 
                </div>:<>Send</> }
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
