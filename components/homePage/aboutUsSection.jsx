const AboutUsSection = () => {
    return ( 
        <>
        	<section className="our-process" id="about">
				<div className="container">
					<div className="row">
						<div className="col-sm-6" data-aos="fade-up">
							<h5 className="text-dark">We are!</h5>
							<h3 className="font-weight-medium text-dark">Discover New Idea With Us!</h3>
							<h5 className="text-dark mb-3">Imagination will take us everywhere</h5>
							<p className="font-weight-medium mb-4">Lorem ipsum dolor sit amet, <br/> 
								pretium pretium tempor.Lorem ipsum dolor sit amet, consectetur
                               
							</p>
							<div className="d-flex justify-content-start mb-3">
								<p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
							</div>
						</div>
						<div className="col-sm-6 text-right" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
							<img src="images/devops.png" alt="idea" className="img-fluid"/>
						</div>
					</div>
				</div>
			</section>
        </>
     );
}
 
export default AboutUsSection;