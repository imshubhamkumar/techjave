import Image from "next/image"

const Footer = () => {
    return ( 
        <>
        <footer className="footer mt-4">
			<div className="footer-top">
				<div className="container">
					<div className="row">
						<div className="col-sm-6">
							<address>
								<p>143 castle road 517</p>
								<p className="mb-4">district, kiyev port south Canada</p>
								<div className="d-flex align-items-center">
									<p className="mr-4 mb-0">+3 123 456 789</p>
									<a href="mailto:info@yourmail.com" className="footer-link">info@yourmail.com</a>
								</div>
								<div className="d-flex align-items-center">
									<p className="mr-4 mb-0">+1 222 345 342</p>
									<a href="mailto:Marshmallow@yourmail.com" className="footer-link">Marshmallow@yourmail.com</a>
								</div>
							</address>
							<div className="social-icons">
								<h6 className="footer-title font-weight-bold">
									Social Share
								</h6>
								<div className="d-flex">
									<a href="#" className="m-2"><Image src="/images/blogger.png" alt="blogger" height="40" width="40"/></a>
									<a href="#" className="m-2"><Image src="/images/facebook.png" alt="facebook" height="40" width="40"/></a>
									<a href="#" className="m-2"><Image src="/images/twitter.png" alt="twitter" height="40" width="40"/></a>
									<a href="#" className="m-2"><Image src="/images/linkedin.png" alt="linkedin" height="40" width="40"/></a>
								</div>
							</div>
						</div>
						<div className="col-sm-6">
							<div className="row">
								<div className="col-sm-4">
									<h6 className="footer-title">Services</h6>
									<ul className="list-footer">
										<li><a href="#" className="footer-link">DevSecOps Advisory & Solutioning</a></li>
										<li><a href="#" className="footer-link">Containerization</a></li>
										<li><a href="#" className="footer-link">Cloud Computing</a></li>
										<li><a href="#" className="footer-link">Security & Networking</a></li>
										<li><a href="#" className="footer-link">NOC</a></li>
									</ul>
								</div>
								<div className="col-sm-4">
									<h6 className="footer-title">Company</h6>
									<ul className="list-footer">
										<li><a href="#" className="footer-link">Aobut TechJave</a></li>
										<li><a href="#" className="footer-link">Contact Us</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-bottom">
				<div className="container">
					<div className="d-flex justify-content-between align-items-center">
						<div className="d-flex align-items-center">
							 <p className="mb-0 text-small pt-1">© 2021 TechJave. All rights reserved.</p>
						</div>
						<div>
							<div className="d-flex">
								<a href="#" className="text-small text-white mx-2 footer-link">Privacy Policy </a>
								<a href="#" className="text-small text-white mx-2 footer-link">Careers </a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
        </>
     );
}
 
export default Footer;