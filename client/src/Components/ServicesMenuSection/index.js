import React from 'react';
import { NavLink } from 'react-router-dom';

function ServicesMenuSection() {
	return (
		<div className="container service-menu_container">
			<div>
				<div className="d-flex flex-column me-5">
					<NavLink
						to="/services/granite-countertops"
						className={({ isActive }) =>
							(isActive = isActive
								? 'serviceIsActive md-text bold-text mx-5'
								: 'services-link md-text bold-text mx-5')
						}>
						Granite Countertops
					</NavLink>
					<NavLink
						to="/services/quartz-countertops"
						className={({ isActive }) =>
							(isActive = isActive
								? 'serviceIsActive md-text bold-text mx-5'
								: 'services-link md-text bold-text mx-5')
						}>
						Quartz Countertops
					</NavLink>
					<NavLink
						to="/services/marble-countertops"
						className={({ isActive }) =>
							(isActive = isActive
								? 'serviceIsActive reg-text mx-5'
								: 'services-link md-text bold-text mx-5')
						}>
						Marble Countertops
					</NavLink>
					<NavLink
						to="/services/outdoor-countertops"
						className={({ isActive }) =>
							(isActive = isActive
								? 'serviceIsActive md-text bold-text mx-5'
								: 'services-link md-text bold-text mx-5')
						}>
						Outdoor Countertops
					</NavLink>
				</div>
			</div>
		</div>
	);
}

export default ServicesMenuSection;
