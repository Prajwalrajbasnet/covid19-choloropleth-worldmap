import { features } from '../data/countries.json';
import papa from 'papaparse';

import legendItems from '../entities/LegendItems';
class CovidCountryService {
	casesSourceURL =
		'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/web-data/data/cases_country.csv';

	countriesList = features;

	setCountryState = () => {};

	configureCountries(callback) {
		this.setCountryState = callback;
		papa.parse(this.casesSourceURL, {
			download: true,
			header: true,
			complete: (output) => this.modifyCountriesList(output.data),
		});
	}

	modifyCountriesList(covidData) {
		this.countriesList = this.countriesList.map((country) => {
			const covidDataOfCountry = covidData.find(
				(caseEntry) => caseEntry.ISO3 === country.properties.ISO_A3
			);
			country.properties.covidData = {};
			if (covidDataOfCountry != null) {
				country.properties.covidData = covidDataOfCountry;
			}

			this.findSuitableColor(country);
			return country;
		});

		this.setCountryState(this.countriesList);
		// console.log('here: ', this.countriesList);
	}

	findSuitableColor(country) {
		const matchingLegendItem = legendItems.find((legendItem) =>
			legendItem.doesMatch(country.properties.covidData.Active)
		);
		// console.log(matchingLegendItem.color);

		if (matchingLegendItem) {
			country.properties.color = matchingLegendItem.color;
		} else if (
			!country.properties.covidData.Active ||
			country.properties.covidData.Active === 0
		) {
			country.properties.color = 'white';
		}
	}
}

export default new CovidCountryService();
