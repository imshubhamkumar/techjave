const HomeSection = () => {
    return ( 
        <>
        	<section id="home" className="home">
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<div className="main-banner">
								<div className="row justify-content-between">
									<div data-aos="zoom-in-up" className="col-sm-7">
										<div className="banner-title">
												<h3 className="font-weight-medium">We Help Power
												Millions Of Businesses 
												in 100+ Countries
											</h3>
										</div>
										<p className="mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 

											<br/>
											Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
										</p>
									</div>
									<div className="mt-5 mt-lg-0 col-sm-5">
										<img src="images/devopsWeb.png" alt="marsmello" className="img-fluid devops-web" data-aos="zoom-in-up"/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
        </>
     );
}
 
export default HomeSection;