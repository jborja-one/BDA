import React, { useEffect } from 'react';
import SecondaryNavBar from '../SecondaryNavBar';
import FooterSection from '../FooterSection';
import ContactImg from '../../images/contact-page.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../index.css';

function ContactPage() {
	useEffect(() => {
		AOS.init({ duration: 2000 });
	}, []);
	return (
		<div>
			<SecondaryNavBar />
			<div className="container ">
				<div className="row my-100">
					<div className="col-md-6">
						<div className="col-md-6 position-relative">
							<h2
								className="lg-text reg-text position-relative contact-title"
								data-aos="fade-up"
								data-aos-duration="3000"
								data-aos-easing="ease-in-back">
								We'd Love to
								<span className="bold-text">
									{' '}
									Hear From You
								</span>
							</h2>
							<p
								className="contact-behind-text_bar"
								data-aos="fade-left"
								data-aos-duration="2000"
								data-aos-easing="ease-in-back"></p>
							<p className="contact-behind-text position-absolute">
								CONTACT
							</p>
						</div>
						<p className="sm-text light-text mt-60">
							Thank you for visiting the website of BDA Marble and
							Granite. We're a countertop contractor in West
							Jordan, UT. We offer installation of high-quality
							granite, quartz and marble countertops. Please use
							the form on this page to email us. You may also call
							385-477-7867 to contact our team.
						</p>
						<h2
							className="lg-text reg-text position-relative contact-title mt-60"
							data-aos="fade-up"
							data-aos-duration="3000"
							data-aos-easing="ease-in-back">
							Contact Us
							<span className="bold-text"> Today !</span>
						</h2>
					</div>
					<div className="col-md-6">
						<img
							src={ContactImg}
							alt="Contact Us"
							className="img-fluid"
						/>
					</div>
				</div>
			</div>
			<div className="container mb-5">
				<div className="row">
					<div className="col-md-6">
						<div class="mapouter">
							<div class="gmap_canvas">
								<iframe
									title="BDA Marble and Granite"
									width="600"
									height="500"
									id="gmap_canvas"
									src="https://maps.google.com/maps?q=4362%20w%208480%20s%20&t=&z=13&ie=UTF8&iwloc=&output=embed"
									frameborder="0"
									scrolling="no"
									marginheight="0"
									marginwidth="0"></iframe>
								<a href="https://2piratebay.org">BDA Map</a>
								<br />
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<h2
							className="lg-text reg-text position-relative contact-title"
							data-aos="fade-up"
							data-aos-duration="3000"
							data-aos-easing="ease-in-back">
							How Can We
							<span className="bold-text"> Help</span>
						</h2>
						<form className="mt-60">
							<div className="form-group d-flex mb-3">
								<input
									type="text"
									className="form-control me-1"
									placeholder="Full Name"
								/>
								<input
									type="text"
									className="form-control"
									placeholder="Phone Number"
								/>
							</div>
							<div className="form-group mb-3">
								<input
									type="email"
									className="form-control"
									placeholder="Email"
								/>
							</div>
							<div className="form-group">
								<textarea
									type="textarea"
									className="form-control"
									placeholder="How can we help ..."
								/>
							</div>
							<div className="d-flex justify-content-center mt-4">
								<button className="md-button" type="button">
									SEND
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
			<FooterSection />
		</div>
	);
}

export default ContactPage;
