import React, { Component } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { locationChanged,updateCoords } from './actions';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

import Permissions from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';
import axios from 'axios';
import Spinner from 'react-native-map-location/src/Spinner';

class Location extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { locationChanged } = this.props;

    Permissions.check('location', { type: 'whenInUse' }).then(response => {
        locationChanged({ prop: 'locationPermission', value: response });
        if(response === "authorized") {
            this.getLocation();
        } else {
            this._requestPermission();
        }
    })
  }

  // Request permission to access photos
  _requestPermission = () => {
    const { locationChanged } = this.props;
    Permissions.request('location', { type: 'whenInUse' }).then(response => {
        locationChanged({ prop: 'locationPermission', value: response });
    })
  }

  getLocation = () => {
    Geolocation.getCurrentPosition(
        (position) => {
            this.props.updateCoords(position);
            this.getLocationDetails();
        },
        (error) => {
            // See error code charts below.
            console.error(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }

  getLocationDetails = () => {
    const { locationChanged } = this.props; 
    axios.get('http://www.geoplugin.net/json.gp')
    .then(response => {
        locationChanged({ prop: 'locationDetails', value: response.data });
    })
    .catch(error => {
      console.error(error)
    })
  }

  renderComponent = () => {
    const { loading, coords } = this.props;
    if(loading) {
      return <Spinner />
    } else {
      return (
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            region={{
                latitude: coords.latitude,
                longitude: coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
            // onRegionChange={(region) => this.onRegionChange(region)}
            >
                <Marker
                    coordinate={{
                      latitude: coords.latitude,
                      longitude: coords.longitude,
                    }}
                    title=" My current location"
                    description="" >
                </Marker>
        </MapView>
      )
    }
  }

  render() {
    return (
        <SafeAreaView style={styles.container}>
            {this.renderComponent()}
        </SafeAreaView>
    )
  }
}

const mapStateToProps = state => {
    return {
        locationPermission: state.LocationReducer.locationPermission,
        coords: state.LocationReducer.coords,
        locationDetails: state.LocationReducer.locationDetails,
        loading: state.LocationReducer.loading,
    }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: null,
    width: null,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    flex: 1
  },
});

export default connect(mapStateToProps, { locationChanged, updateCoords })(Location);