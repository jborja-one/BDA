import React, { useEffect } from 'react';
import SecondaryNavBar from '../SecondaryNavBar';
import FooterSection from '../FooterSection';
import ServicesMenuSection from '../ServicesMenuSection';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MarbleImg from '../../images/marble-countertop.jpeg';

function SinksPage() {
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
								Our
								<span className="bold-text"> Sinks</span>
							</h2>
							<p
								className="service-behind-text_bar-sinks"
								data-aos="fade-left"
								data-aos-duration="2000"
								data-aos-easing="ease-in-back"></p>
							<p className="service-behind-text position-absolute">
								SINKS
							</p>
						</div>
						<div className="my-60">
							<div className="row">
								<div className="col-md-6">
									<p className="sm-text light-text">
										Searching for marble countertops to
										enhance your wet bar, kitchen, or
										bathroom? Start by consulting the local
										countertop contractors at BDA Marble and
										Granite. We provide marble countertop
										installation services in Salt Lake City,
										UT, and all surrounding counties. We'll
										have your custom counters installed in
										no time at all.
										<br />
										<br />
										When it comes to marble countertops, you
										can choose from all kinds of colors and
										designs? Call us to see what's available
										now.
									</p>
									<h2 className="md-text bold-text mt-100">
										3 Advantages of Marble Countertops
									</h2>
								</div>
								<div className="col-md-6">
									<img
										className="img-fluid"
										src={MarbleImg}
										alt="Outdoor Countertops"
									/>
								</div>
							</div>

							<p className="sm-text light-text mt-3">
								There are many benefits to choosing marble for
								your kitchen or bathroom counters. Marble
								countertops are:
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
									<li>Beautiful, sleek look</li>
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
										Softer than granite, which makes them
										more customizable
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
										Unique, with a look that isn't easy to
										imitate
									</li>
								</div>
							</ul>
							<div>
								<p className="sm-text light-text mb-5">
									Stuck between two colors of marble? Maybe
									you would prefer a thinner or thicker marble
									countertop. Either way, let us help you
									decide on a design that will complement your
									space at the best possible price. Book
									marble countertop installation services
									today.
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

export default SinksPage;
