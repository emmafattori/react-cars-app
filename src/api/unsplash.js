import axios from 'axios';

export default axios.create({
	baseUrl: 'https://api.unsplash.com/search/photos',
	headers: {
				Authorization: 
				'Client-ID d3AeOEDOZhxWdeGeC-kcEG4cNc_upCe296PlIk0kTCs'
			}
});