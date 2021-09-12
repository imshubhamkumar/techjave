import HeroSection from '../heroSection';
import { aboutusData } from '../../data/aboutus';
const AboutUsPage = () => {
    return ( 
        <>
        <HeroSection imgUrl="" title="About Us"/>
        <section className="container">
<div className="wrapper row2">
  <div id="container" className="clear">
    <div id="about-us" className="clear">
      <section id="about-intro" className="clear">
        <div className="two_third first">
          <blockquote>
            <p><span>&ldquo;</span> In odio. Mauris feugiat. Nunc posuere, felis sit amet faucibus convallis, tortor enim viverra quam, hendrerit interdum dui quam ut lacus. Vivamus accumsan. Donec molestie pede vel urna curabitur eget sem ornare felis.</p>
          </blockquote>
          <p>In sed neque id libero pretium luctus. Vivamus faucibus. Ut vitae elit. In hac habitasse platea dictumst. Proin et nisl ac orci tempus luctus. Aenean lacinia justo at nisi. Vestibulum sed eros sit amet nisl lobortis commodo. Suspendisse nulla.</p>
          <p>Vivamus ac lorem. Aliquam pulvinar purus at felis. Quisque convallis nulla id ipsum. Praesent vitae urna. Fusce blandit nunc nec mi. Praesent vestibulum hendrerit ante.</p>
        </div>
        <div className="one_third"><img src="images/demo/300x300.gif" alt=""/></div>
      </section>
      <section id="team">
        <h2>Our Team</h2>
        <div className="team row">
                <div className="card col-md-4 col-sm-6 col-12 border-0 mt-2 mb-2">
                    <div className="card-body shadow rounded">
                        <div className="avatar-container">
                            <img src="/images/team-member.gif" className="avatar border-0"/>
                        </div>
                        <p className="team_name">Name Goes Here</p>
                        <p className="team_title">Job Title Here</p>
                    </div>
                </div>
                <div className="card col-md-4 col-sm-6 col-12 border-0 mt-2 mb-2">
                    <div className="card-body shadow rounded">
                        <div className="avatar-container">
                            <img src="/images/team-member.gif" className="avatar border-0"/>
                        </div>
                        <p className="team_name">Name Goes Here</p>
                        <p className="team_title">Job Title Here</p>
                    </div>
                </div>
                <div className="card col-md-4 col-sm-6 col-12 border-0 mt-2 mb-2">
                    <div className="card-body shadow rounded">
                        <div className="avatar-container">
                            <img src="/images/team-member.gif" className="avatar border-0"/>
                        </div>
                        <p className="team_name">Name Goes Here</p>
                        <p className="team_title">Job Title Here</p>
                    </div>
                </div>
                <div className="card col-md-4 col-sm-6 col-12 border-0 mt-2 mb-2">
                    <div className="card-body shadow rounded">
                        <div className="avatar-container">
                            <img src="/images/team-member.gif" className="avatar border-0"/>
                        </div>
                        <p className="team_name">Name Goes Here</p>
                        <p className="team_title">Job Title Here</p>
                    </div>
                </div>
            </div>
      </section>
    </div>
  </div>
</div>


        </section>
        </>
     );
}
 
export default AboutUsPage;