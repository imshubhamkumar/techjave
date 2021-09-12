import HeroSection from "../heroSection";

const ContactUsPage = () => {
  return (
    <>
      <HeroSection imgUrl="" title="Contact Us" />
      <div className="container-contact100">
        <div className="wrap-contact100">
          <form className="contact100-form validate-form">
            <span className="contact100-form-title">Send Us A Message</span>

            <div
              className="wrap-input100 validate-input"
              data-validate="Please enter your name"
            >
              <input
                className="input100"
                type="text"
                name="name"
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
                name="email"
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
                name="phone"
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
                name="message"
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
