import React, { useEffect } from 'react';
import SecondaryNavBar from '../SecondaryNavBar';
import FooterSection from '../FooterSection';
import ServicesMenuSection from '../ServicesMenuSection';
import AOS from 'aos';
import 'aos/dist/aos.css';
import QuartziteImg from '../../images/quartzite-countertop.jpeg';

function QuartzitePage() {
	useEffect(() => {
		AOS.init({ duration: 2000 });
	}, []);
	return (
		<div>
			<SecondaryNavBar />
			<div className="">
				<div className="row my-100">
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
								Quartzite
								<span className="bold-text"> Countertops</span>
							</h2>
							<p
								className="service-behind-text_bar-quartzite"
								data-aos="fade-left"
								data-aos-duration="2000"
								data-aos-easing="ease-in-back"></p>
							<p className="service-behind-text position-absolute">
								QUARTZITE
							</p>
						</div>
						<div className="my-60">
							<div className="row">
								<div className="col-md-6">
									<p className="sm-text light-text">
										Ouartzite looks like marble. Its unique,
										swirling grey and white designs make the
										countertops look interesting and help
										create an impressive kitchen or
										bathroom. If you like marble countertops
										but they're outside your budget,
										quartzite is your best bet to get a
										similar look at a more affordable price.
										<br />
										<br />
										Wondering what color fits your style and
										interior design? Call our team today.
									</p>
									<h2 className="md-text bold-text mt-100">
										The best things about Quartzite
									</h2>
								</div>
								<div className="col-md-6">
									<img
										className="img-fluid"
										src={QuartziteImg}
										alt="Outdoor Countertops"
									/>
								</div>
							</div>

							<p className="sm-text light-text mt-3">
								Quartzlite countertops are great because:
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
									<li>
										Ouartzite is a natural stone with
										properties similar to granite, including
										hardness and durability.
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
										Quartzite countertops are UV resistant
										so won't fade or darken when exposed to
										direct sunlight.
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
										Ouartzite has a unique colour palette
										that makes it versatile and attractive.
									</li>
								</div>
							</ul>
							<div>
								<p className="sm-text light-text mb-5">
									Quartzite is ideal for contemporary kitchens
									and bathrooms because of its stunning visual
									appeal. Its unique veining and natural
									colours make it an interesting addition.
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

export default QuartzitePage;
