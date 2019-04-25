import axios from 'axios'
import {GET_BEERS} from "../Constants/Api"

//Get Beers
export const BeersHostRequest = async () => {
	const response = await axios.get(GET_BEERS);
	console.log(response)
	return response;
}


