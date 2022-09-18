import React from 'react';
import { NavLink } from 'react-router-dom';
import HomeHeader from '../../images/home-header-img.jpeg';
import LogoLight from '../../images/logo-light.png';
import AboutSection from '../../Components/AboutSection/index.js';
import ServicesSection from '../../Components/ServicesSection/index.js';
import FooterSection from '../../Components/FooterSection/index.js';
import WhyChooseUsSection from '../../Components/WhyChooseUsSection/index.js';
import ReviewsSection from '../../Components/ReviewsSection/index.js';
import '../../index.css';

function HomePage() {
	return (
		<>
			<div className="home-header-container position-relative">
				<img
					className="img-fluid"
					src={HomeHeader}
					alt="home-header-img"
				/>
				<div className="navbar-container position-absolute d-flex justify-content-between">
					<a href="/">
						<img
							className="img-fluid"
							src={LogoLight}
							alt="logo-light"
						/>
					</a>
					<div className="d-flex align-items-center justify-content-end me-5">
						<NavLink
							to="/"
							className={({ isActive }) =>
								(isActive = isActive
									? 'isActive reg-text mx-5'
									: 'nav-link reg-text mx-5')
							}>
							Home
						</NavLink>
						<NavLink
							to="/about"
							className={({ isActive }) =>
								(isActive = isActive
									? 'isActive reg-text mx-5'
									: 'nav-link reg-text mx-5')
							}>
							About
						</NavLink>
						<NavLink
							to="/services"
							className={({ isActive }) =>
								(isActive = isActive
									? 'isActive reg-text mx-5'
									: 'nav-link reg-text mx-5')
							}>
							Services
						</NavLink>
						<NavLink
							to="/projects"
							className={({ isActive }) =>
								(isActive = isActive
									? 'isActive reg-text mx-5'
									: 'nav-link reg-text mx-5')
							}>
							Projects
						</NavLink>
						<NavLink
							to="/contact"
							className={({ isActive }) =>
								(isActive = isActive
									? 'isActive reg-text mx-5'
									: 'nav-link reg-text mx-5')
							}>
							Contact
						</NavLink>
					</div>
				</div>
				<div className="home-header-content position-absolute ms-5">
					<h1 className="md-text reg-text text-white">
						Welcome to DBA Marble & Granite
					</h1>
					<h2 className="xl-text bold-text text-white my-5">
						Beautifully Crafted,
						<br />
						Designed to Last{' '}
					</h2>
					<h3 className="md-text reg-text text-white">
						Our Result, Our Commitment
					</h3>
					<div className="header-btn_container mt-100">
						<a
							href="/services/granite-countertops"
							className="md-button sm-text bold-text">
							Learn More
						</a>
					</div>
				</div>
				<div className="position-absolute header-arrow ">
					<i class="fa-solid fa-chevron-down"></i>
				</div>
			</div>
			<AboutSection />
			<ServicesSection />
			<WhyChooseUsSection />
			<ReviewsSection />
			<FooterSection />
		</>
	);
}

export default HomePage;
