import Location from './Location';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import getLocationDetails from './getLocationDetails';

class RootMap extends Component {
    render() {
        return (
            <Provider store={store}>
                <Location map={this.props.map}/>
            </Provider>
        )
    }
}

export {
    RootMap,
    getLocationDetails
}