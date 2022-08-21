import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage/index.js';
import AboutPage from './Components/AboutPage/index.js';
import GranitePage from './Components/GranitePage/index.js';
import ContactPage from './Components/ContactPage/index.js';
import QuartzPage from './Components/QuartzPage/index.js';
import MarblePage from './Components/MarblePage/index.js';
import OutdoorPage from './Components/OutdoorPage/index.js';
import ReviewPage from './Components/ReviewPage/index.js';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route
					path="/services/granite-countertops"
					element={<GranitePage />}
				/>
				<Route
					path="/services/quartz-countertops"
					element={<QuartzPage />}
				/>
				<Route
					path="/services/marble-countertops"
					element={<MarblePage />}
				/>
				<Route
					path="/services/outdoor-countertops"
					element={<OutdoorPage />}
				/>
				<Route path="/contact" element={<ContactPage />} />
				<Route path="/reviews" element={<ReviewPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
