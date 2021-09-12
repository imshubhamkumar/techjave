import { useState } from "react";
import axios from "axios";
import HeroSection from "../heroSection";
import { contact } from "../../data/contact";

const ContactUsPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
   const handleSubmit = (event) => {
        event.preventDefault()
        //other stuff
        sendMessage()
      }
   const sendMessage = () => {
        const formData = new FormData()
        formData.append(contact.GOOGLE_FORM_NAME_ID, name)
        formData.append(contact.GOOGLE_FORM_EMAIL_ID, email)
        formData.append(contact.GOOGLE_FORM_PHONE_ID, phone)
        formData.append(contact.GOOGLE_FORM_MESSAGE_ID, message)
        axios.post(contact.GOOGLE_FORM_ACTION_URL, formData)
         .then((res) => {
           console.log(res);
        }).catch((error) => {
           console.log(error);
        })
      }
  return (
    <>
      <HeroSection imgUrl="" title="Contact Us" />
      <div className="container-contact100">
        <div className="wrap-contact100">
          <form 
          className="contact100-form validate-form" onSubmit={(e) => handleSubmit(e)}>
            <span className="contact100-form-title">Send Us A Message</span>

            <div
              className="wrap-input100 validate-input"
              data-validate="Please enter your name"
            >
              <input
                className="input100"
                type="text"
                onChange={(e) => setName(e.target.value)}
                name="entry.2005620554"
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
                onChange={(e) => setEmail(e.target.value)}
                name="entry.1045781291"
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
                name="entry.1166974658"
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
                name="entry.839337160"
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message"
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
                  Send
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
