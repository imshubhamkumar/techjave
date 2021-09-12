import Head from "next/head";
import HeroSection from "../heroSection";
import { aboutusData } from "../../data/aboutus";
const AboutUsPage = () => {
  return (
    <>
      <Head>
        <title>About Us | TechJave.</title>
      </Head>
      <HeroSection imgUrl={aboutusData.bgImg} title={aboutusData.title} />
      <section className="container">
        <div className="wrapper row2">
          <div id="container" className="clear">
            <div id="about-us" className="clear">
              <section id="about-intro" className="clear">
                <div className="two_third first">
                  <blockquote>
                    <p>
                      <span>&ldquo;</span>
                      {aboutusData.quoteContent}
                    </p>
                  </blockquote>
                  <p>{aboutusData.content}</p>
                </div>
              </section>
              <section id="team">
                <h2>Our Team</h2>
                <div className="team row">
                  {aboutusData.team.map((item, idx) => (
                    <div
                      key={idx}
                      className={[
                        "card",
                        aboutusData.team.length > 2 ? "col-md-4" : "",
                        "col-sm-6 col-12 border-0 mt-2 mb-2 aos-init aos-animate",
                      ].join(" ")}
                      data-aos="zoom-in"
                      data-aos-delay="250"
                    >
                      <div className="card-body shadow rounded">
                        <div className="avatar-container">
                          <img
                            src={
                              !item.imgUrl
                                ? "/images/no-image.jpg"
                                : item.imgUrl
                            }
                            className="avatar border-0"
                          />
                        </div>
                        <a
                          href={item.linkedin}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <p className="team_name">{item.name}</p>
                          <p className="team_title">{item.jobProfile}</p>
                          <span className="about-team">LinkedIn</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsPage;
