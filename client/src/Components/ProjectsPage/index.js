import React, { useEffect } from 'react';
import SecondaryNavBar from '../SecondaryNavBar';
import FooterSection from '../FooterSection';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ViscountImg1 from '../../images/projects/granite-viscount/granite-viscount-1.JPG';
import ViscountImg2 from '../../images/projects/granite-viscount/granite-viscount-2.JPG';
import ViscountImg3 from '../../images/projects/granite-viscount/granite-viscount-3.JPG';
import CristalloImg1 from '../../images/projects/quartzite-cristallo/quartzite-cristallo-1.JPG';
import CristalloImg2 from '../../images/projects/quartzite-cristallo/quartzite-cristallo-2.JPG';
import CalacattaImg1 from '../../images/projects/quartz-calacatta/quartz-calacatta-1.jpeg';
import MontblancImg1 from '../../images/projects/quartz-montblanc/quartz-montblanc-1.JPEG';
import MontblancImg2 from '../../images/projects/quartz-montblanc/quartz-montblanc-2.JPEG';
import Sink1 from '../../images/projects/sinks/sink-1.JPG';
import Sink2 from '../../images/projects/sinks/sink-2.JPG';
import Sink3 from '../../images/projects/sinks/sink-3.JPG';
import Sink4 from '../../images/projects/sinks/sink-4.JPG';
import Sink5 from '../../images/projects/sinks/sink-5.JPG';
import Sink6 from '../../images/projects/sinks/sink-6.JPG';
import Sink7 from '../../images/projects/sinks/sink-7.JPG';
import Sink8 from '../../images/projects/sinks/sink-8.JPG';

function ProjectsPage() {
	useEffect(() => {
		AOS.init({ duration: 2000 });
	}, []);
	return (
		<div>
			<SecondaryNavBar />
			<div
				className="container-fluid px-0"
				data-aos="fade-up"
				data-aos-duration="3000"
				data-aos-easing="ease-in-back">
				<div className="my-100 position-relative">
					<h2
						className="lg-text reg-text position-relative ms-5"
						data-aos="fade-up"
						data-aos-duration="3000"
						data-aos-easing="ease-in-back">
						Our
						<span className="bold-text"> Projects</span>
					</h2>
					<p
						className="services-behind-text_bar"
						data-aos="fade-left"
						data-aos-duration="2000"
						data-aos-easing="ease-in-back"></p>
					<p className="services-behind-text position-absolute">
						PROJECTS
					</p>
					<div className="container">
						<h2 className="md-text bold-text mt-100 mb-4">
							Granite Viscount White
						</h2>
						<p>
							Polished 2 cm, 1 5/8" Miter, 4" Backspalsh, Window
							sill
						</p>
						<div className="row my-5">
							<div className="col-md-4">
								<img
									className="img-fluid"
									src={ViscountImg1}
									alt="granite viscount-img"
								/>
							</div>
							<div className="col-md-4">
								<img
									className="img-fluid"
									src={ViscountImg2}
									alt="granite viscount-img"
								/>
							</div>
							<div className="col-md-4">
								<img
									className="img-fluid"
									src={ViscountImg3}
									alt="granite viscount-img"
								/>
							</div>
						</div>
					</div>
					<div className="container">
						<h2 className="md-text bold-text mt-100 mb-4">
							Quartzite Cristallo
						</h2>
						<p>Citrine 2cm Polished</p>
						<div className="row my-5">
							<div className="col-md-4">
								<img
									className="img-fluid"
									src={CristalloImg1}
									alt="quartz cristallo-img"
								/>
							</div>
							<div className="col-md-4">
								<img
									className="img-fluid"
									src={CristalloImg2}
									alt="quartz cristallo-img"
								/>
							</div>
							<div className="col-md-4"></div>
						</div>
					</div>
					<div className="container">
						<h2 className="md-text bold-text mt-100 mb-4">
							Quartz Calacatta Betogli
						</h2>
						<p>Polished 2cm</p>
						<div className="row my-5">
							<div className="col-md-4">
								<img
									className="img-fluid"
									src={CalacattaImg1}
									alt="quartz calacatta-img"
								/>
							</div>
							<div className="col-md-4"></div>
							<div className="col-md-4"></div>
						</div>
					</div>
					<div className="container">
						<h2 className="md-text bold-text mt-100 mb-4">
							Quartz Mont Blanc
						</h2>
						<p>3 cm, 3" Miter</p>
						<div className="row my-5">
							<div className="col-md-4">
								<img
									className="img-fluid"
									src={MontblancImg1}
									alt="quartz mont blanc-img"
								/>
							</div>
							<div className="col-md-4">
								<img
									className="img-fluid"
									src={MontblancImg2}
									alt="quartz mont blanc-img"
								/>
							</div>
							<div className="col-md-4"></div>
						</div>
					</div>
					<div className="container">
						<h2 className="md-text bold-text mt-100 mb-4">Sinks</h2>
						{/* <p>3 cm, 3" Miter</p> */}
						<div className="row my-5">
							<div className="col-md-4">
								<img
									className="img-fluid"
									src={Sink1}
									alt="quartz mont blanc-img"
								/>
							</div>
							<div className="col-md-4">
								<img
									className="img-fluid"
									src={Sink2}
									alt="quartz mont blanc-img"
								/>
							</div>
							<div className="col-md-4">
								<img
									className="img-fluid"
									src={Sink3}
									alt="quartz mont blanc-img"
								/>
							</div>
						</div>
						<div className="row my-5">
							<div className="col-md-4">
								<img
									className="img-fluid"
									src={Sink4}
									alt="quartz mont blanc-img"
								/>
							</div>
							<div className="col-md-4">
								<img
									className="img-fluid"
									src={Sink5}
									alt="quartz mont blanc-img"
								/>
							</div>
							<div className="col-md-4">
								<img
									className="img-fluid"
									src={Sink6}
									alt="quartz mont blanc-img"
								/>
							</div>
						</div>
						<div className="row my-5">
							<div className="col-md-4">
								<img
									className="img-fluid"
									src={Sink7}
									alt="quartz mont blanc-img"
								/>
							</div>
							<div className="col-md-4">
								<img
									className="img-fluid"
									src={Sink8}
									alt="quartz mont blanc-img"
								/>
							</div>
							<div className="col-md-4"></div>
						</div>
					</div>
				</div>
			</div>
			<FooterSection />
		</div>
	);
}

export default ProjectsPage;
