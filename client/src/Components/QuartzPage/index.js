import React, { useEffect } from 'react';
import SecondaryNavBar from '../SecondaryNavBar';
import FooterSection from '../FooterSection';
import ServicesMenuSection from '../ServicesMenuSection';
import AOS from 'aos';
import 'aos/dist/aos.css';
import QuartzImg from '../../images/quartz-countertop.jpeg';

function QuartzPage() {
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
								Quartz
								<span className="bold-text"> Countertops</span>
							</h2>
							<p
								className="service-behind-text_bar-quartz"
								data-aos="fade-left"
								data-aos-duration="2000"
								data-aos-easing="ease-in-back"></p>
							<p className="service-behind-text position-absolute">
								QUARTZ
							</p>
						</div>
						<div className="my-60">
							<div className="row">
								<div className="col-md-6">
									<p className="sm-text light-text">
										Are you looking for an antibacterial,
										durable and easy-to-clean countertop?
										Choose quartz. BDA Marble and Granite
										offers quartz countertop installation
										services for homeowners in the West
										Jordan, UT area. We can help you decide
										which quartz countertop works best for
										you and install it quickly in your home.
										<br />
										<br />
										Wondering what color fits your style and
										interior design? Call our team today.
									</p>
									<h2 className="sub-title md-text bold-text mt-100">
										You can count on Quartz
									</h2>
								</div>
								<div className="col-md-6">
									<img
										className="img-fluid"
										src={QuartzImg}
										alt="Outdoor Countertops"
									/>
								</div>
							</div>

							<p className="sm-text light-text mt-3">
								Quartz countertops are advantageous because:
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
										They have a more uniform appearance and
										can give your home a consistent look
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
										They come in all kinds of colors to
										match your home
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
										They're more eco-friendly since they can
										be created from recycled materials
									</li>
								</div>
							</ul>
							<div>
								<p className="sm-text light-text mb-5">
									We have plenty of quartz countertop options
									for you to choose from. Simply choose the
									color you want and rest assured that your
									countertops will make your home beautiful
									for years to come. Contact us today to
									schedule quartz countertop installation
									services.
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

export default QuartzPage;
