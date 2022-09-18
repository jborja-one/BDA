import React, { useEffect } from 'react';
import AboutSectionImg from '../../images/about-section.jpeg';
// import CountUp from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../index.css';

function AboutSection() {
	useEffect(() => {
		AOS.init({ duration: 2000 });
	}, []);

	return (
		<div
			className="about-section container my-100"
			data-aos="fade-up"
			data-aos-easing="ease-in-back">
			<div className="row">
				<div className="about-section_left col-md-6 position-relative">
					<h2
						className="lg-text reg-text position-relative"
						data-aos="fade-up"
						data-aos-duration="3000"
						data-aos-easing="ease-in-back">
						Crafted to
						<span className="bold-text"> Perfection</span>
					</h2>
					<p
						className="behind-text_bar"
						data-aos="fade-left"
						data-aos-duration="2000"
						data-aos-easing="ease-in-back"></p>
					<p className="behind-text position-absolute">CRAFTED</p>
					<div className="about-section_content mb-60">
						<p className="sm-text light-text my-5">
							We are committed to providing our customers with
							super exceptional service while offering our
							employees the best training and a working
							environment in which they can excel best of all
							places. <br /> <br />
							This company focus has been in place for more than a
							half century. We are committed to providing our
							customers with exceptional service while offering
							our employees the best training.
						</p>
						<a
							href="/about"
							className="md-button sm-text bold-text">
							Learn More
						</a>
					</div>
				</div>
				<div className="col-md-6 position-relative">
					<img
						className="img-fluid"
						src={AboutSectionImg}
						alt="about-section"
					/>
				</div>
			</div>
		</div>
	);
}

export default AboutSection;
