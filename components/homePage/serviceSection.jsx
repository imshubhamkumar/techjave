import Image from "next/image";

const ServiceSection = () => {
    return ( 
        <>
        			<section className="our-services" id="services">
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<h5 className="text-dark">We’re offering</h5>
							<h3 className="font-weight-medium text-dark mb-5">Our services</h3>
						</div>
					</div>
					<div className="row" data-aos="fade-up">
						<div className="col-sm-4 text-center text-lg-left p-2">
							<div className="services-box shadow p-3" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                                <Image src="/images/counselor.png" alt="advisory-and-solution" height="60" width="60" data-aos="zoom-in"/>
								<h6 className="text-dark mb-3 mt-4 font-weight-medium">
                                    DevSecOps Advisory
								</h6>
								<p>Lorem ipsum dolor sit amet, 
									pretium pretium tempor.Lorem ipsum 
								</p>
							</div>
						</div>
                        <div className="col-sm-4 text-center text-lg-left p-2">
							<div className="services-box shadow p-3" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                                <Image src="/images/solutions.png" alt="advisory-and-solution" height="60" width="60" data-aos="zoom-in"/>
								<h6 className="text-dark mb-3 mt-4 font-weight-medium">
                                    DevSecOps Solutioning
								</h6>
								<p>Lorem ipsum dolor sit amet, 
									pretium pretium tempor.Lorem ipsum 
								</p>
							</div>
						</div>
						<div className="col-sm-4 text-center text-lg-left p-2 ">
							<div className="services-box shadow p-3" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                            <Image src="/images/containers.png" alt="advisory-and-solution" height="60" width="60" data-aos="zoom-in"/>
								<h6 className="text-dark mb-3 mt-4 font-weight-medium">
                                Containerization
								</h6>
								<p>Lorem ipsum dolor sit amet, 
									pretium pretium tempor.Lorem ipsum 
								</p>
							</div>
						</div>
						<div className="col-sm-4 text-center text-lg-left p-2">
							<div className="services-box shadow p-3" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                            <Image src="/images/cloud-computing.png" alt="advisory-and-solution" height="60" width="60" data-aos="zoom-in"/>
								<h6 className="text-dark mb-3 mt-4 font-weight-medium">
                                    Cloud Computing
								</h6>
								<p>Lorem ipsum dolor sit amet, 
									pretium pretium tempor.Lorem ipsum 
								</p>
							</div>
						</div>

                        <div className="col-sm-4 text-center text-lg-left p-2">
							<div className="services-box shadow p-3" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                            <Image src="/images/network.png" alt="advisory-and-solution" height="60" width="60" data-aos="zoom-in"/>
								<h6 className="text-dark mb-3 mt-4 font-weight-medium">
                                Security & Networking
								</h6>
								<p>Lorem ipsum dolor sit amet, 
									pretium pretium tempor.Lorem ipsum 
								</p>
							</div>
						</div>

                        <div className="col-sm-4 text-center text-lg-left p-2">
							<div className="services-box shadow p-3" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                            <Image src="/images/settings.png" alt="advisory-and-solution" height="60" width="60" data-aos="zoom-in"/>
								<h6 className="text-dark mb-3 mt-4 font-weight-medium">
                                    NOC
								</h6>
								<p>Lorem ipsum dolor sit amet, 
									pretium pretium tempor.Lorem ipsum 
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
        </>
     );
}
 
export default ServiceSection;