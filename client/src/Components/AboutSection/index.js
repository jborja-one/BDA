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
			className="container my-100"
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
					<div className="mb-60">
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
					</div>
					<a href="/about" className="md-button sm-text bold-text">
						Learn More
					</a>
				</div>
				<div className="col-md-6 position-relative">
					<img
						className="img-fluid"
						src={AboutSectionImg}
						alt="about-section"
					/>
					{/* <div
						className="counter-section d-flex justify-content-between align-items-center"
						data-aos="fade-left"
						data-aos-offset="300"
						data-aos-duration="3000"
						data-aos-easing="ease-in-sine">
						<div className="d-flex flex-column align-items-center">
							<CountUp start={0} end={15} delay={3}>
								{({ countUpRef }) => (
									<div>
										<span
											className="lg-text bold-text"
											ref={countUpRef}
										/>
									</div>
								)}
							</CountUp>
							<p className="md-text reg-text">Awards</p>
						</div>
						<div className="d-flex flex-column align-items-center">
							<CountUp start={0} end={1259} delay={3}>
								{({ countUpRef }) => (
									<div>
										<span
											className="lg-text bold-text"
											ref={countUpRef}
										/>
									</div>
								)}
							</CountUp>
							<p className="md-text reg-text">Projects</p>
						</div>
						<div className="d-flex flex-column align-items-center">
							<CountUp start={0} end={1259} delay={3}>
								{({ countUpRef }) => (
									<div>
										<span
											className="lg-text bold-text"
											ref={countUpRef}
										/>
									</div>
								)}
							</CountUp>
							<p className="md-text reg-text">Happy Clients</p>
						</div>
					</div> */}
				</div>
			</div>
		</div>
	);
}

export default AboutSection;
