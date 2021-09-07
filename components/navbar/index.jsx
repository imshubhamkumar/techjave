const Navbar = () => {
    return ( 
        <>
        <div id="mobile-menu-overlay"></div>
		<nav className="navbar navbar-expand-lg fixed-top">
			<div className="container">
				<a className="navbar-brand" href="#">
                    {/* <img src="images/logo.svg" alt="Marshmallow" /> */}
					TechJave.
                </a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon">
                    <i className="mdi mdi-menu"> </i>
                </span>
				</button>
				<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
					<div className="d-lg-none d-flex justify-content-between px-4 py-3 align-items-center">
						<img src="images/logo-dark.svg" className="logo-mobile-menu" alt="logo"/>
						<a href="javascript:;" className="close-menu"><i className="mdi mdi-close"></i></a>
					</div>
					<ul className="navbar-nav ml-auto align-items-center">
						<li className="nav-item active">
							<a className="nav-link active" href="#home">Home <span className="sr-only">(current)</span></a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#services">Services</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#about">About</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#projects">Projects</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#testimonial">Testimonial</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#plans">Plans</a>
						</li>
						<li className="nav-item">
							<a className="nav-link btn btn-success" href="#contact">174-394-9560</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
        </>
     );
}
 
export default Navbar;