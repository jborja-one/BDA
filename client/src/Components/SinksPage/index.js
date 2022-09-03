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
										When it comes to being the most
										important part of a kitchen, the kitchen
										sink can be overlooked. The range,
										refrigerator provide essential functions
										and take up a lot of space, and
										cabinets, countertops and kitchen
										islands are most essential with the
										storage and preparation roles of a
										kitchen. However, when you realize how
										important water is to the cooking
										process, how much of a beating a sink
										must sustain and what you immediately
										see when you walk into a kitchen, the
										kitchen sink ends up being the equipment
										that ties a kitchen together. Whether
										you’re looking into building your own
										home, remodeling or fixing a broken
										sink, knowing what the best kitchen sink
										material is and the types of kitchen
										sinks materials that make for a quality
										sink is essential to getting the sink
										that will make your kitchen spectacular.
										<br />
										<br />
										When it comes to sinks, you can choose
										from all kinds of colors and designs?
										Call us to see what's available now.
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
								There are many benefits to choosing our Sinks
								your kitchen or bathroom counters. Our Sinks
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
									<li>
										Quality Sink that can last indefinitely
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
										Beautiful and sleek design and finish
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
									Stuck between two colors? Maybe you would
									prefer a thinner or thicker surface
									countertop. Either way, let us help you
									decide on a design that will complement your
									space at the best possible price. Book our
									countertop installation services today.
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
