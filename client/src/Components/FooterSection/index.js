import React from 'react';
import LogoLight from '../../images/logo-light.png';

function FooterSection() {
	return (
		<div className="container-fluid footer-section">
			<div className="row">
				<div className="col-md-3">
					<img
						className="img-fluid ms-4"
						src={LogoLight}
						alt="logo-light"
					/>
				</div>
				<div className="col-md-4 mt-4">
					<h2 className="md-text reg-text text-white mb-4">
						Our Information
					</h2>
					<div className="d-flex align-items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="38"
							height="38"
							fill="white"
							class="bi bi-house-door-fill mt-3"
							viewBox="0 0 16 16">
							<path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
						</svg>
						<p className="sm-text reg-text text-white mt-3 ms-5">
							4362 West 8480 South <br /> West Jordan UT 84088
						</p>
					</div>
					<div className="d-flex align-items-center mt-5">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="38"
							height="38"
							fill="white"
							class="bi bi-envelope-open-fill"
							viewBox="0 0 16 16">
							<path d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.314l6.709 3.932L8 8.928l1.291.718L16 5.714V5.4a2 2 0 0 0-1.059-1.765l-6-3.2ZM16 6.873l-5.693 3.337L16 13.372v-6.5Zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516ZM0 13.373l5.693-3.163L0 6.873v6.5Z" />
						</svg>
						<p className="sm-text reg-text text-white mt-3 ms-5">
							bda.marble.granite@gmail.com
						</p>
					</div>
					<div className="d-flex align-items-center mt-5">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="38"
							height="38"
							fill="white"
							class="bi bi-telephone-fill"
							viewBox="0 0 16 16">
							<path
								fill-rule="evenodd"
								d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
							/>
						</svg>
						<p className="sm-text reg-text text-white mt-3 ms-5">
							(801) 513-4774
						</p>
					</div>
				</div>
				<div className="col-md-2 mt-4 ">
					<h2 className="md-text reg-text text-white mb-4">
						Site Map
					</h2>
					<div className="d-flex flex-column">
						<a
							href="/"
							className="footer-link sm-text reg-text text-white mt-3">
							Home
						</a>
						<a
							href="/about"
							className="footer-link sm-text reg-text text-white mt-3">
							About
						</a>
						<a
							href="/services/granite-countertops"
							className="footer-link sm-text reg-text text-white mt-3">
							Services
						</a>
						<a
							href="/contact"
							className="footer-link sm-text reg-text text-white mt-3">
							Contact Us
						</a>
					</div>
				</div>
				<div className="col-md-2 mt-4">
					<h2 className="md-text reg-text text-white mb-4">
						Services
					</h2>
					<div className="d-flex flex-column">
						<a
							href="/services/granite-countertops"
							className="footer-link sm-text reg-text text-white mt-3">
							Granite Countertops
						</a>
						<a
							href="/services/quartz-countertops"
							className="footer-link sm-text reg-text text-white mt-3">
							Quartz Countertops
						</a>
						<a
							href="/services/marble-countertops"
							className="footer-link sm-text reg-text text-white mt-3">
							Marble Countertops
						</a>
						<a
							href="/services/outdoor-countertops"
							className="footer-link sm-text reg-text text-white mt-3">
							Outdoor Countertops
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FooterSection;
