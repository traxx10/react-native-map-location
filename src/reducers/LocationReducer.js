
import { LOCATION_CHANGED, UPDATE_LOCATION } from '../actions/types';

const INITIAL_STATE = {
	locationPermission: "undertermined",
    coords: { latitude: 37.78825, longitude: -122.4324 },
	locationDetails: null,
	loading: true,
}

export default (state = INITIAL_STATE,  action) => {
	switch(action.type) {

		case LOCATION_CHANGED:
			return { ...state, [action.payload.prop] : action.payload.value, loading: false };

		case UPDATE_LOCATION:
			return { 
					...state, 
					coords: { 
						longitude: action.payload.coords.longitude, 
						latitude: action.payload.coords.latitude 
					}};
			
		default:
			return state;
	}
}