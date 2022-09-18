import React, { useEffect } from 'react';
import SecondaryNavBar from '../SecondaryNavBar';
import FooterSection from '../FooterSection';
import ServicesMenuSection from '../ServicesMenuSection';
import AOS from 'aos';
import 'aos/dist/aos.css';
import OutdoorImg from '../../images/outdoor-countertops.jpeg';

function OutdoorPage() {
	useEffect(() => {
		AOS.init({ duration: 2000 });
	}, []);
	return (
		<div>
			<SecondaryNavBar />
			<div className="">
				<div className="services row my-100">
					<div className="col-md-4">
						<ServicesMenuSection />
					</div>
					<div className="col-md-8 service-container">
						<div className="position-relative">
							<h2
								className="lg-text reg-text position-relative service-title"
								data-aos="fade-up"
								data-aos-duration="3000"
								data-aos-easing="ease-in-back">
								Outdoor
								<span className="bold-text"> Countertops</span>
							</h2>
							<p
								className="service-behind-text_bar-outdoor"
								data-aos="fade-left"
								data-aos-duration="2000"
								data-aos-easing="ease-in-back"></p>
							<p className="service-behind-text position-absolute">
								OUTDOOR
							</p>
						</div>
						<div className="my-60">
							<div className="row">
								<div className="col-md-6">
									<p className="sm-text light-text">
										Tired of searching for a trivet to place
										hot pots and pans on while cooking in
										your kitchen? Say goodbye to damaged
										countertops and hello to heat-resistant
										granite countertops. BDA Marble and
										Granite has many different options to
										choose from and can help you get a look
										you love. We'll even deliver and provide
										quick granite countertop installation
										services.
									</p>
									<h2 className="sub-title md-text bold-text mt-100">
										Discover the Benefits of Granite
										Countertops
									</h2>
								</div>
								<div className="col-md-6">
									<img
										className="img-fluid"
										src={OutdoorImg}
										alt="Outdoor Countertops"
									/>
								</div>
							</div>

							<p className="sm-text light-text mt-3">
								There are several benefits of having granite
								countertops installed in your kitchen or
								bathroom. Granite is:
							</p>
							<ul className="sm-text light-text mt-3">
								<div className="d-flex align-items-center my-2">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										fill="#e0cc81"
										class="bi bi-arrow-right-circle-fill me-3"
										viewBox="0 0 16 16">
										<path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
									</svg>
									<li>Very durable and heat-resistant</li>
								</div>
								<div className="d-flex align-items-center my-2">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										fill="#e0cc81"
										class="bi bi-arrow-right-circle-fill me-3"
										viewBox="0 0 16 16">
										<path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
									</svg>
									<li>
										Easy to clean with everyday supplies
									</li>
								</div>
								<div className="d-flex align-items-center my-2">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										fill="#e0cc81"
										class="bi bi-arrow-right-circle-fill me-3"
										viewBox="0 0 16 16">
										<path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
									</svg>
									<li>
										Beautiful, stylish and made from natural
										materials
									</li>
								</div>
							</ul>
							<div>
								<p className="sm-text light-text mb-5">
									Are you an aspiring chef? Maybe you just
									love cooking. If you've ever cooked in a
									kitchen with granite countertops, then
									you'll understand why they're a must-have
									for both style and convenience. Check out
									your options when you contact us today.
								</p>
								<a
									className="md-button md-text"
									href="/contact">
									Contact Us
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<FooterSection />
		</div>
	);
}

export default OutdoorPage;
