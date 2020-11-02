import { features } from '../data/countries.json';

class MapService {
	getCountries() {
		return features;
	}
}

export default new MapService();
