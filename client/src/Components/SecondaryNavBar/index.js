import React from 'react';
import { NavLink } from 'react-router-dom';
import SecondaryNavBarImg from '../../images/secondary-navbar-bg.jpeg';
import LogoDark from '../../images/logo-dark.png';

function SecondaryNavBar() {
	return (
		<div className="secondary-navbar-container position-relative">
			<img
				className="img-fluid"
				src={SecondaryNavBarImg}
				alt="home-header-img"
			/>
			<div className="secondary-navbar d-flex align-items-center justify-content-between me-5 position-absolute ">
				<a href="/">
					<img className="img-fluid" src={LogoDark} alt="logo-dark" />
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
						to="/services/granite-countertops"
						className={({ isActive }) =>
							(isActive = isActive
								? 'isActive reg-text mx-5'
								: 'nav-link reg-text mx-5')
						}>
						Services
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
		</div>
	);
}

export default SecondaryNavBar;
