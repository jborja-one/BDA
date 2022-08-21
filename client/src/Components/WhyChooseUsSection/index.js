import React, { useEffect } from 'react';
import GraniteImg from '../../images/granite-countertop.jpeg';
import QuartzImg from '../../images/quartz-countertop.jpeg';
import MarbleImg from '../../images/marble-countertop.jpeg';
import OutdoorImg from '../../images/outdoor-countertops.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../index.css';

function WhyChooseUsSection() {
	useEffect(() => {
		AOS.init({ duration: 2000 });
	}, []);
	return (
		<div className="container mt-100">
			<div className="row">
				<div className="col-md-6 position-relative">
					<h2
						className="lg-text reg-text position-relative"
						data-aos="fade-up"
						data-aos-duration="3000"
						data-aos-easing="ease-in-back">
						Why
						<span className="bold-text"> Choose Us</span>
					</h2>
					<p
						className="choose-us-behind-text_bar"
						data-aos="fade-left"
						data-aos-duration="2000"
						data-aos-easing="ease-in-back"></p>
					<p className="choose-us-behind-text position-absolute">
						CHOOSE
					</p>
					<div className="mb-60">
						<p className="sm-text light-text my-5">
							With over two decades of experience, the countertop
							contractors at BDA Marble and Granite can help you
							find countertops you'll love. Most often, we install
							new countertops for clients during their bathroom or
							kitchen remodeling projects. But we're happy to
							serve clients in and around West Jordan, UT for any
							kind of home improvement project. <br /> <br />
							Our trusted team of countertop contractors is small,
							but effective. You can count on us for friendly,
							personalized service that will make the countertop
							upgrade process a breeze. We have extensive
							experience with all kinds of kitchen designs and
							will make sure you end up with an amazing design.
						</p>
					</div>
				</div>
				<div className="col-md-6 position-relative">
					<img
						className="img-fluid choose-us_images choose-us_img-1"
						src={GraniteImg}
						alt="granite"
					/>
					<img
						className="img-fluid choose-us_images choose-us_img-2"
						src={QuartzImg}
						alt="quartz"
					/>
					<img
						className="img-fluid choose-us_images choose-us_img-3"
						src={MarbleImg}
						alt="marble"
					/>
					<img
						className="img-fluid choose-us_images choose-us_img-4"
						src={OutdoorImg}
						alt="outdoor"
					/>
				</div>
			</div>
		</div>
	);
}

export default WhyChooseUsSection;
