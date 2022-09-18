import React, { useEffect } from 'react';
import '../../index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ServicesSection() {
	useEffect(() => {
		AOS.init({ duration: 2000 });
	}, []);

	return (
		<div
			className="container-fluid px-0"
			data-aos="fade-up"
			data-aos-duration="3000"
			data-aos-easing="ease-in-back">
			<div className="about-section_left col-md-6 position-relative mb-5">
				<h2
					className="lg-text reg-text position-relative ms-5"
					data-aos="fade-up"
					data-aos-duration="3000"
					data-aos-easing="ease-in-back">
					Our
					<span className="bold-text"> Services</span>
				</h2>
				<p
					className="services-behind-text_bar"
					data-aos="fade-left"
					data-aos-duration="2000"
					data-aos-easing="ease-in-back"></p>
				<p className="services-behind-text position-absolute">
					SERVICES
				</p>
			</div>
			<div className="service-section_container d-flex justify-content-center mb-5">
				<a
					className="each-service service-item-1 col-md-4 me-2 px-0"
					href="/services/granite-countertops">
					<h3 className="services-title lg-text reg-text ms-4">
						Granite Countertops
					</h3>
				</a>
				<a
					className="each-service service-item-2 col-md-4 me-2 px-0"
					href="/services/quartz-countertops">
					<h3 className="services-title lg-text reg-text ms-4">
						Quartz Countertops
					</h3>
				</a>
				<a
					className="each-service service-item-5 col-md-4 me-2 px-0"
					href="/services/quartzite-countertops">
					<h3 className="services-title lg-text reg-text ms-4">
						Quartzite Countertops
					</h3>
				</a>
				<a
					className="each-service service-item-3 col-md-4 me-2 px-0"
					href="/services/marble-countertops">
					<h3 className="services-title lg-text reg-text ms-4">
						Marble Countertops
					</h3>
				</a>
				<a
					className="each-service service-item-4 col-md-4 px-0"
					href="/services/outdoor-countertops">
					<h3 className="services-title lg-text reg-text ms-4">
						Outdoor Countertops
					</h3>
				</a>
			</div>
			<div className="d-flex justify-content-center mb-5"></div>
		</div>
	);
}

export default ServicesSection;
