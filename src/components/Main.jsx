import { useState, useEffect } from 'react';
import Map from './Map';
import mapService from '../services/mapService';


const Main = () => {

	const [countries, setCountries] = useState([]);

	useEffect(() => {
		const data = mapService.getCountries();
		console.log(data);
		setCountries(data);
	}, []);

	return (
		<div>
			<Map></Map>
		</div>
	);
};

export default Main;
