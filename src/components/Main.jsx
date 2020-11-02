import { useState, useEffect } from 'react';
import CovidMap from './CovidMap';
import covidCountryService from '../services/covidCountryService';

import LoaderGif from '../assets/loader.gif';

const Main = () => {
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		covidCountryService.configureCountries((countries) =>
			setCountries(countries)
		);
	}, []);

	const loaderStyles = {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100vh',
	};

	return (
		<>
			{countries.length <= 0 ? (
				<div style={loaderStyles}>
					<img src={LoaderGif} alt="loading...." />
				</div>
			) : (
				<CovidMap countries={countries}></CovidMap>
			)}
		</>
	);
};

export default Main;
