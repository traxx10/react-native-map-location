import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

class Map extends Component {
    state = {
        region: {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          },
    }

    componentDidMount() {
        // const { coords } = this.props;
        // coords ? 
        //     this.setState({ region: 
        //         {   ...this.state.region, 
        //             longitude: coords.longitude, 
        //             latitude: coords.latitude 
        //         }}) 
        //     : null
    }

    onRegionChange = (region) => {
        console.log(region)
        this.setState({ region });
    }

    render() {
        const { region } = this.state;
        console.log(this.props)
        return (
            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    region={{
                        // latitude: this.props.coords.lat,
                        // longitude: this.props.coords.long,
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    // onRegionChange={(region) => this.onRegionChange(region)}
                    >
                        <Marker
                            coordinate={{
                                latitude: 37.78825,
                                longitude: -122.4324,
                            }}
                            title=" My current location"
                            description="" >
                        </Marker>
                </MapView>
            </View>
        )
        // return (
        //         <View style={styles.container}>
        //             <MapView
        //                 provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        //                 style={styles.map}
        //                 region={this.state.region}
        //                 // onRegionChange={(region) => this.onRegionChange(region)}
        //                 >
        //                     <Marker
        //                         coordinate={{
        //                             latitude: region.latitude,
        //                             longitude: region.longitude
        //                         }}
        //                         title=" My current location"
        //                         description="" >
        //                     </Marker>
        //             </MapView>
        //         </View>
        // )
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
    },
    map: {
      ...StyleSheet.absoluteFillObject,
      flex: 1
    },
});

export default Map;