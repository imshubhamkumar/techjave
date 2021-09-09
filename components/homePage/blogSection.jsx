import dynamic from 'next/dynamic'
const OwlCarousel = dynamic(import('react-owl-carousel'), {
    ssr: false,
})
const BlogSection = () => {
    const options = {
        loop: true,
        stagePadding: 80,
        margin: 20,
        nav: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                margin: 5
            },
            600: {
                items: 3,
                margin: 8
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
								<h3 className="font-weight-medium text-dark ">Let&apos;s See Our Latest Project</h3>
								<div><a href="#" className="btn btn-outline-primary">View more</a></div>
							</div>
						</div>
					</div>
				</div>
				<div className="mb-5" data-aos="fade-up">
					<OwlCarousel className="slider-items owl-carousel-projects owl-carousel custom-navigation" {...options}>
						<div className="item shadow p-3 mb-5 bg-white rounded">
							<div className="card border-0">
                                <div className="card-body blog-card">
                                    <span className="card-subtitle mb-2 text-muted blog-date-card">Card subtitle</span>
                                    <h5 className="blog-title-card card-title">Card title</h5>
                                    <p className="card-text">
                                    In everyone’s career path, this particular situation always comes when...
                                    </p>
                                    <a href="/" className="card-link">Read Article</a>
                                </div>
                            </div>
						</div>
                        <div className="item shadow p-3 mb-5 bg-white rounded">
							<div className="card border-0">
                                <div className="card-body blog-card">
                                    <span className="card-subtitle mb-2 text-muted blog-date-card">Card subtitle</span>
                                    <h5 className="blog-title-card card-title">Card title</h5>
                                    <p className="card-text">
                                    In everyone’s career path, this particular situation always comes when...
                                    </p>
                                    <a href="/" className="card-link">Read Article</a>
                                </div>
                            </div>
						</div>
                        <div className="item shadow p-3 mb-5 bg-white rounded">
							<div className="card border-0">
                                <div className="card-body blog-card">
                                    <span className="card-subtitle mb-2 text-muted blog-date-card">Card subtitle</span>
                                    <h5 className="blog-title-card card-title">Card title</h5>
                                    <p className="card-text">
                                    In everyone’s career path, this particular situation always comes when...
                                    </p>
                                    <a href="/" className="card-link">Read Article</a>
                                </div>
                            </div>
						</div>
                        <div className="item shadow p-3 mb-5 bg-white rounded">
							<div className="card border-0">
                                <div className="card-body blog-card">
                                    <span className="card-subtitle mb-2 text-muted blog-date-card">Card subtitle</span>
                                    <h5 className="blog-title-card card-title">Card title</h5>
                                    <p className="card-text">
                                    In everyone’s career path, this particular situation always comes when...
                                    </p>
                                    <a href="/" className="card-link">Read Article</a>
                                </div>
                            </div>
						</div>
                        <div className="item shadow p-3 mb-5 bg-white rounded">
							<div className="card border-0">
                                <div className="card-body blog-card">
                                    <span className="card-subtitle mb-2 text-muted blog-date-card">Card subtitle</span>
                                    <h5 className="blog-title-card card-title">Card title</h5>
                                    <p className="card-text">
                                    In everyone’s career path, this particular situation always comes when...
                                    </p>
                                    <a href="/" className="card-link">Read Article</a>
                                </div>
                            </div>
						</div>
                        <div className="item shadow p-3 mb-5 bg-white rounded">
							<div className="card border-0">
                                <div className="card-body blog-card">
                                    <span className="card-subtitle mb-2 text-muted blog-date-card">Card subtitle</span>
                                    <h5 className="blog-title-card card-title">Card title</h5>
                                    <p className="card-text">
                                    In everyone’s career path, this particular situation always comes when...
                                    </p>
                                    <a href="/" className="card-link">Read Article</a>
                                </div>
                            </div>
						</div>
                        <div className="item shadow p-3 mb-5 bg-white rounded">
							<div className="card border-0">
                                <div className="card-body blog-card">
                                    <span className="card-subtitle mb-2 text-muted blog-date-card">Card subtitle</span>
                                    <h5 className="blog-title-card card-title">Card title</h5>
                                    <p className="card-text">
                                    In everyone’s career path, this particular situation always comes when...
                                    </p>
                                    <a href="/" className="card-link">Read Article</a>
                                </div>
                            </div>
						</div>
					</OwlCarousel>
				</div>
			</section>
        </>
     );
}
 
export default BlogSection;