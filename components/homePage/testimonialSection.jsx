import { useEffect } from "react";

const TestimonialSection = () => {
    useEffect(() => {
        window.jQuery = require('../../public/js/jQuery-latest.min.js');
        window.flipster = require('../../styles/vendors/jquery-flipster/js/jquery.flipster.min.js');
        window.jQuery("#testimonial-flipster").flipster({
			style: 'coverflow',
			spacing: -.9,
			nav: false,
			loop: true,
			buttons: false,
		});

		window.jQuery('.flipster-custom-nav-link').click(function() {
			var navlinkSelected = parseInt(this.title);
			window.jQuery('.flipster-custom-nav-link').removeClass("active");
			window.jQuery(this).addClass("active");
			window.jQuery("#testimonial-flipster").flipster('jump', navlinkSelected);
		});

    }, [])
    return ( 
        <>
        <section className="testimonial mt-4" id="testimonial">
				<div className="container">
					<div className="row  mt-md-0 mt-lg-4">
						<div className="col-sm-6 text-white" data-aos="fade-up">
							<p className="font-weight-bold mb-3">Testimonials</p>
							<h3 className="font-weight-medium">Our customers are our <br/>biggest fans</h3>
							<ul className="flipster-custom-nav">
								<li className="flipster-custom-nav-item">
									<a href="javascript:;" className="flipster-custom-nav-link" title="0"></a>
								</li>
								<li className="flipster-custom-nav-item">
									<a href="javascript:;" className="flipster-custom-nav-link"  title="1"></a>
								</li>
								<li className="flipster-custom-nav-item">
									<a href="javascript:;" className="flipster-custom-nav-link active" title="2"></a>
								</li>
								<li className="flipster-custom-nav-item">
									<a href="javascript:;" className="flipster-custom-nav-link"  title="3"></a>
								</li>
							</ul>
						</div>
						<div className="col-sm-6" data-aos="fade-up">
							<div id="testimonial-flipster">
								<ul>
									<li>
										<div className="testimonial-item">
											<img src="images/testimonial/testimonial1.jpg" alt="icon" className="testimonial-icons"/>
											<p>Lorem ipsum dolor sit amet, consectetur
												pretium pretium tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium
											</p>
											<h6 className="testimonial-author">Mark Spenser</h6>
											<p className="testimonial-destination">Accounts</p>
										</div>
									</li>
									<li>
										<div className="testimonial-item">
											<img src="images/testimonial/testimonial2.jpg" alt="icon" className="testimonial-icons"/>
											<p>Lorem ipsum dolor sit amet, consectetur
												pretium pretium tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium
											</p>
											<h6 className="testimonial-author">Tua Manuera</h6>
											<p className="testimonial-destination">Director,Dj market</p>
										</div>
									</li>
									<li>
										<div className="testimonial-item">
											<img src="images/testimonial/testimonial3.jpg" alt="icon" className="testimonial-icons"/>
											<p>Lorem ipsum dolor sit amet, consectetur
												pretium pretium tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium
											</p>
											<h6 className="testimonial-author">Sarah Philip</h6>
											<p className="testimonial-destination">Chief Accountant</p>
										</div>
									</li>
									<li>
										<div className="testimonial-item">
											<img src="images/testimonial/testimonial4.jpg" alt="icon" className="testimonial-icons"/>
											<p>Lorem ipsum dolor sit amet, consectetur
												pretium pretium tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium
											</p>
											<h6 className="testimonial-author">Mark Spenser</h6>
											<p className="testimonial-destination">Director,Dj market</p>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
        </>
     );
}
 
export default TestimonialSection;