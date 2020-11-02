import { MapContainer, GeoJSON } from 'react-leaflet';

import { formatNumberWithCommas } from '../utils/';

import 'leaflet/dist/leaflet.css';
import './CovidMap.css';

const CovidMap = ({ countries }) => {
	const mapStyle = {
		fillColor: 'white',
		weight: 1,
		color: 'black',
		fillOpacity: 1,
	};

	const addObjectsOnEachCountry = (country, layer) => {
		country.properties.covidData &&
			layer.bindPopup(` <b><center> ${
				country.properties.ADMIN
			} </center></b> <br>
			<span class="title">Total Confirmed Cases</span>: ${formatNumberWithCommas(
				country.properties.covidData.Confirmed
			)} <br>
			<span class="blue-text title">Active Cases</span>: ${formatNumberWithCommas(
				country.properties.covidData.Active
			)} <br>
			<span class="red-text title">Deaths</span>: ${formatNumberWithCommas(
				country.properties.covidData.Deaths
			)} <br>
			<span class="green-text title">Recovered</span>: ${formatNumberWithCommas(
				country.properties.covidData.Recovered
			)}
		`);
	};

	console.log(countries);

	return (
		<MapContainer style={{ height: '100vh' }} zoom={2} center={[20, 100]}>
			<GeoJSON
				style={mapStyle}
				data={countries}
				onEachFeature={addObjectsOnEachCountry}
			></GeoJSON>
		</MapContainer>
	);
};

export default CovidMap;
