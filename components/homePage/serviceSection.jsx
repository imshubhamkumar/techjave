import Image from "next/image";
import { services } from '../../data/services';

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
						{services.map((item, idx) => 
						<div key={idx} className="col-sm-4 text-center text-lg-left p-2">
							<div className="services-box shadow p-3" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
								<a href={item.url}>
								<Image src={item.icon} alt="advisory-and-solution" height="60" width="60" data-aos="zoom-in"/>
								<h6 className="text-dark mb-3 mt-4 font-weight-medium">
                                    {item.name}
								</h6>
								<p className="home-service-card-body">
									{item.overview}
								</p>
								</a>
							</div>
						</div>)}
					</div>
				</div>
			</section>
        </>
     );
}
 
export default ServiceSection;