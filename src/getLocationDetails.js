import React, { Component } from 'react';
import store from 'react-native-map-location/src/store';

const getLocationDetails = () => {
    let detail;

    function select(state) {
        return state
    }
      
    let currentValue;

    function handleChange() {
        let previousValue = currentValue
        currentValue = select(store.getState());
        
        if (previousValue !== currentValue) {
            const { locationDetails, coords } = currentValue.LocationReducer
            if(locationDetails) {
                const locationDetail = {
                    city: locationDetails.geoplugin_city,
                    continent: locationDetails.geoplugin_continentName,
                    country: locationDetails.geoplugin_countryName,
                    ip_address: locationDetails.geoplugin_request,
                    timezone: locationDetails.geoplugin_timezone,
                    coordinates: coords
                }
                detail = locationDetail;
                return detail;

            } else {
                detail = null;
            }
        }
    }
      
    const unsubscribe = store.subscribe(handleChange)
    //   unsubscribe();
    return detail;

    
}

// export default getLocationDetails;

const HOC = (WrappedComponent) => {
    return class extends Component {
        state = {
            loading: true,
            detail: {},
        }

        getLocationDetails = () => {

            function select(state) {
                return state
            }
              
            let currentValue;
        
            function handleChange() {
                let previousValue = currentValue
                currentValue = select(store.getState());
                
                if (previousValue !== currentValue) {
                    const { locationDetails, coords } = currentValue.LocationReducer
                    if(locationDetails) {
                        const locationDetail = {
                            city: locationDetails.geoplugin_city,
                            continent: locationDetails.geoplugin_continentName,
                            country: locationDetails.geoplugin_countryName,
                            ip_address: locationDetails.geoplugin_request,
                            timezone: locationDetails.geoplugin_timezone,
                            coordinates: coords
                        }
                        
                        this.setState({ loading: false, detail: locationDetail })
        
                    } else {

                    }
                }
            }
              
            const unsubscribe = store.subscribe(handleChange.bind(this))
            //unsubscribe();
        
            
        }

        componentWillMount() {
            this.getLocationDetails()
        }

        render() {
            return <WrappedComponent {...this.state} />
        }
    }
}

export default HOC;