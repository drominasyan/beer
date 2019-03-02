import axios from 'axios'


//Get Beers
export const BeersHostRequest = (url) => {
	return axios.get(url)
}


