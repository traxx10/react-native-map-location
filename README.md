## react-native-map-location
react-native-map-location is a component that returns a mapview and the location details of the user using the component

## Installation

```
    npm install react-native-map-location **OR**
    yarn add react-native-map-location
```

This library uses 
[react-native-maps](https://github.com/react-native-community/react-native-maps), 
[react-native-geolocation-service](https://github.com/Agontuk/react-native-geolocation-service) and 
[react-native-permissions](https://github.com/yonahforst/react-native-permissions) as a dependency please follow their guides to install this library successfully.

## Basic Usage

```
    import React, { Component } from 'react';
    import { RootMap } from 'react-native-map-location;
    import { View } from 'react-native;

    class Example extends Component {
        render() {
            return (
                <View style={{ flex: 1 }}>
                    <RootMap map />
                </View>
            )
        }
    }

    export default Example;
```

## getLocationDetails
This is a HOC component that returns the location details of the user;
The component returns an object;

**Example**
    *if false*

    ```
        returns {
            loading: false # or true if it has fetched the details successfully
            details: {} # loading is false
        }
    ```


    ```
        returns {
            detail: { 
                city: "City", 
                continent: "Continent", 
                country: "Country", 
                ip_address: "IP address",           
                timezone: "Timezone", 
                coordinates: { longitude: -122.406417, latitude: 37.785834 }
            },

            loading: false
        }
    ```

    ```
        import React, { Component } from 'react';
        import { getLocationDetails } from 'react-native-map-location;
        import { View } from 'react-native;

        class Example extends Component {
            render() {
                return (
                    <View style={{ flex: 1 }}>
                        { 'other components' }
                    </View>
                )
            }
        }

        export default getLocationDetails(Example);
    ```

