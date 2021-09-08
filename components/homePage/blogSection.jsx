import dynamic from 'next/dynamic'
const OwlCarousel = dynamic(import('react-owl-carousel'), {
    ssr: false,
})
const BlogSection = () => {
    const options = {
        loop: true,
        stagePadding: 100,
        margin: 20,
        nav: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    }
    return ( 
        <>
        <section className="our-projects" id="projects">
				<div className="container">
					<div className="row mb-5">
						<div className="col-sm-12">
							<div className="d-sm-flex justify-content-between align-items-center mb-2">
								<h3 className="font-weight-medium text-dark ">Let's See Our Latest Project</h3>
								<div><a href="#" className="btn btn-outline-primary">View more</a></div>
							</div>
						</div>
					</div>
				</div>
				<div className="mb-5" data-aos="fade-up">
					<OwlCarousel className="slider-items owl-carousel-projects owl-carousel custom-navigation" {...options}>
						<div className="item">
							
						</div>
						<div className="item">
							<img src="images/carousel/slider2.jpg" alt="slider"/>
						</div>
						<div className="item">
							<img src="images/carousel/slider3.jpg" alt="slider"/>
						</div>
						<div className="item">
							<img src="images/carousel/slider4.jpg" alt="slider"/>
						</div>
						<div className="item">
							<img src="images/carousel/slider5.jpg" alt="slider"/>
						</div>
						<div className="item">
							<img src="images/carousel/slider1.jpg" alt="slider"/>
						</div>
						<div className="item">
							<img src="images/carousel/slider2.jpg" alt="slider"/>
						</div>
						<div className="item">
							<img src="images/carousel/slider3.jpg" alt="slider"/>
						</div>
						<div className="item">
							<img src="images/carousel/slider4.jpg" alt="slider"/>
						</div>
						<div className="item">
							<img src="images/carousel/slider5.jpg" alt="slider"/>
						</div>
						<div className="item">
							<img src="images/carousel/slider1.jpg" alt="slider"/>
						</div>
						<div className="item">
							<img src="images/carousel/slider2.jpg" alt="slider"/>
						</div>
						<div className="item">
							<img src="images/carousel/slider3.jpg" alt="slider"/>
						</div>
						<div className="item">
							<img src="images/carousel/slider4.jpg" alt="slider"/>
						</div>
						<div className="item">
							<img src="images/carousel/slider5.jpg" alt="slider"/>
						</div>
					</OwlCarousel>
				</div>
			</section>
        </>
     );
}
 
export default BlogSection;