import axios from 'axios'


//Get Beers
export const BeersHostRequest = async (url) => {
	const response = await axios.get(url);
	console.log(response)
	return response;
}


