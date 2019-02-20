import { LOCATION_CHANGED, UPDATE_LOCATION } from './types';

export const locationChanged = ({ prop, value }) => {
    return (dispatch) => {
        dispatch({
            type: LOCATION_CHANGED,
            payload: { prop, value }
        })
    }
}

export const updateCoords = (coords) => {
    return (dispatch) => {
        dispatch({
            type: UPDATE_LOCATION,
            payload: coords
        })
    }
}