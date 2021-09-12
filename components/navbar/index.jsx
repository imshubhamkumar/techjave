import Image from "next/image";
import { useState } from "react";
import { services } from '../../data/services';

const Navbar = () => {
	const [serviceDropDown, setServiceDropDown] = useState(false);
    return ( 
        <>
        <div id="mobile-menu-overlay"></div>
		<nav className="navbar navbar-expand-lg fixed-top">
			<div className="container">
				<a className="navbar-brand" href="/">
                    <img src="/logo/logo-07.png" alt="TechJave." />
                </a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon">
                    <i className="mdi mdi-menu"> </i>
                </span>
				</button>
				<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
					<div className="d-lg-none d-flex justify-content-between px-4 py-3 align-items-center">
						<img src="/images/logo-dark.svg" className="logo-mobile-menu" alt="logo"/>
						<a href="javascript:;" className="close-menu"><i className="mdi mdi-close"></i></a>
					</div>
					<ul className="navbar-nav ml-auto align-items-center">
						<li className="nav-item active">
							<a className="nav-link active" href="#home">Home <span className="sr-only">(current)</span></a>
						</li>
						<li className="nav-item dropdown" onMouseEnter={() => setServiceDropDown(true)} onMouseLeave={() => setServiceDropDown(false)}>
							<a className={['nav-link', serviceDropDown ? 'show': ''].join(' ')} href="#services">Services</a>
							<ul className={['dropdown-menu uparrow p-2', serviceDropDown ? 'show': ''].join(' ')}>
								{services.map((item, idx) => 
								<li key={idx} className="p-2">
									<a className="dropdown-item" href={`/services/${item.url}`}>
										<Image src={item.icon} alt="advisory-and-solution" height="20" width="20" data-aos="zoom-in"/>
										<span className="ml-3"> {item.name} </span>
									</a>
								</li>
								)}
							</ul>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/about-us">About Us</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/career">Careers</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/contact-us"> Contact Us</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" target="_blank" href="/blogs">Blogs</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
        </>
     );
}
 
export default Navbar;