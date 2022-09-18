import React, { useEffect } from 'react';
import SecondaryNavBar from '../SecondaryNavBar';
import FooterSection from '../FooterSection';
import MarbleImg from '../../images/marble-countertop.jpeg';
import GraniteImg from '../../images/granite-countertop.jpeg';
import QuartzImg from '../../images/quartz-countertop.jpeg';
import QuartziteImg from '../../images/quartzite-countertop.jpeg';
import OutdoorImg from '../../images/outdoor-countertops.jpeg';

import AOS from 'aos';
import 'aos/dist/aos.css';

function ServicesPage() {
	useEffect(() => {
		AOS.init({ duration: 2000 });
	}, []);
	return (
		<>
			<SecondaryNavBar />
			<div
				className="service-page_header container-fluid px-0 mb-200"
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
			</div>
			<div className="container px-0 mb-100">
				<div className="row mb-5">
					<div className="service-image_container col-md-6">
						<img
							className="img-fluid"
							src={MarbleImg}
							alt="Marble"
						/>
					</div>
					<div className="col-md-6">
						<h3 className="service-title-animation lg-text reg-text w-100 mb-5 ms-5">
							MARBLE
						</h3>
						<p className="sm-text reg-text ms-5 mb-60">
							Nothing can rival the look of marble kitchen
							countertops. There’s a richness to them and a
							character to the stone that others can’t touch. But
							what usually arouses people about marble countertops
							is the veining. Marble remains cool naturally, which
							makes it a great surface for baking or other
							cooking. Marble, however, isn’t completely heat
							resistant, so don’t place hot pots and pans directly
							on marble countertops.
						</p>
						<a
							href="/services/marble-countertops"
							className="md-button ms-5">
							Learn More
						</a>
					</div>
				</div>
				<div className="row mb-5">
					<div className="service-image_container col-md-6">
						<img
							className="img-fluid"
							src={GraniteImg}
							alt="Granite"
						/>
					</div>
					<div className="col-md-6">
						<h3 className="service-title-animation lg-text reg-text w-100 mb-5 ms-5">
							GRANITE
						</h3>
						<p className="sm-text reg-text ms-5 mb-60">
							Granite countertops will not melt or blister when
							exposed to heat. They are one of the most heat
							resistant countertops on the market. Hot pans can be
							placed directly on the countertop surface from the
							oven without any harm. Experts do recommend the use
							of a trivet when using appliances that emit heat for
							long periods of time, such as Crockpots.
						</p>
						<a
							href="/services/granite-countertops"
							className="md-button ms-5">
							Learn More
						</a>
					</div>
				</div>
				<div className="row mb-5">
					<div className="service-image_container col-md-6">
						<img
							className="img-fluid"
							src={QuartzImg}
							alt="Granite"
						/>
					</div>
					<div className="col-md-6">
						<h3 className="service-title-animation lg-text reg-text w-100 mb-5 ms-5">
							QUARTZ
						</h3>
						<p className="sm-text reg-text ms-5 mb-60">
							Manufacturers make quartz countertops by grinding
							natural quartz into dust and combining it with other
							natural and synthetic materials such as polymers,
							resins, and pigments. The resins and polymers bind
							the quartz together, making it hard and durable
							while pigments are added to give the countertop
							color. In some cases, recycled glass or metal flecks
							are added to spice up the design.
						</p>
						<a
							href="/services/quartz-countertops"
							className="md-button ms-5">
							Learn More
						</a>
					</div>
				</div>
				<div className="row mb-5">
					<div className="service-image_container col-md-6">
						<img
							className="img-fluid"
							src={QuartziteImg}
							alt="Granite"
						/>
					</div>
					<div className="col-md-6">
						<h3 className="service-title-animation lg-text reg-text w-100 mb-5 ms-5">
							QUARTZITE
						</h3>
						<p className="sm-text reg-text ms-5 mb-60">
							Quartzite countertops have marble like look with
							natural strength and are comparatively harder and
							denser. It can withstand harsh handling of all
							kitchen commotion. It also requires less maintenance
							compared to all other types of kitchen material.
							Quartzite is more resistant to scratching compared
							to quartz. The dark grey patterns and its natural
							veining makes it easy to cover up scratches on the
							countertop.
						</p>
						<a
							href="/services/quartzite-countertops"
							className="md-button ms-5">
							Learn More
						</a>
					</div>
				</div>
				<div className="row mb-5">
					<div className="service-image_container col-md-6">
						<img
							className="img-fluid"
							src={OutdoorImg}
							alt="Granite"
						/>
					</div>
					<div className="col-md-6">
						<h3 className="service-title-animation lg-text reg-text w-100 mb-5 ms-5">
							OUTDOOR
						</h3>
						<p className="sm-text reg-text ms-5 mb-60">
							Ultimately, the best material for your Outdoor
							Kitchen countertops will be durable and
							long-lasting, with an abundance of colors and finish
							options. After all, you will want your countertop to
							last the lifetime of your outdoor kitchen. After
							discussing the pros and cons of each material, you
							should consider which material and color will work
							best for your outdoor kitchen.
						</p>
						<a
							href="/services/outdoor-countertops"
							className="md-button ms-5">
							Learn More
						</a>
					</div>
				</div>
			</div>
			<FooterSection />
		</>
	);
}

export default ServicesPage;
