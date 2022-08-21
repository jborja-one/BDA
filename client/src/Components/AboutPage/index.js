import React, { useEffect } from 'react';
import SecondaryNavBar from '../SecondaryNavBar';
import FooterSection from '../FooterSection';
import WhyChooseUsSection from '../WhyChooseUsSection';
import ReviewsSection from '../ReviewsSection';
import TeamImg from '../../images/about-team.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function AboutPage() {
	useEffect(() => {
		AOS.init({ duration: 2000 });
	}, []);
	return (
		<>
			<SecondaryNavBar />
			<div className="container ">
				<div className="row my-100">
					<div className="col-md-6">
						<div className="col-md-6 position-relative">
							<h2
								className="lg-text reg-text position-relative about-title"
								data-aos="fade-up"
								data-aos-duration="3000"
								data-aos-easing="ease-in-back">
								A Bit
								<span className="bold-text"> About Us</span>
							</h2>
							<p
								className="about-behind-text_bar"
								data-aos="fade-left"
								data-aos-duration="2000"
								data-aos-easing="ease-in-back"></p>
							<p className="about-behind-text position-absolute">
								ABOUT US
							</p>
						</div>
						<div className="mt-100">
							<p
								className="light-text sm-text"
								data-aos="fade-up"
								data-aos-duration="3000"
								data-aos-easing="ease-in-back">
								We Are Flooring the simply dummy text of the
								printing and typesetting industry. Lorem Ipsum
								has been the industry’s standard dummy text ever
								since the 1500s, when an unknown printer took a
								galley of type and scrambled it to make. <br />{' '}
								<br /> Sed ut perspiciatis unde omnis iste natus
								error sit voluptatem accusantium doloremque
								laudantium,We Are solar the simply dummy text of
								the printing and typesetting industry.Lorem
								Ipsum has been the industry’s standard.
							</p>
						</div>
					</div>
					<div
						className="col-md-6"
						data-aos="fade-up"
						data-aos-duration="3000"
						data-aos-easing="ease-in-back">
						<img className="img-fluid" src={TeamImg} alt="team" />
					</div>
				</div>
			</div>
			<ReviewsSection />
			<WhyChooseUsSection />
			<FooterSection />
		</>
	);
}

export default AboutPage;
