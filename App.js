import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextWithFont} from "./src/components";

import {Router} from "./src/config";

import {Font} from 'expo'


export default class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            fontLoaded: false
        }
    }

    async componentDidMount() {
        await Font.loadAsync({
            'dubai-regular': require('./assets/fonts/Dubai-Regular.otf'),
            'dubai-bold': require('./assets/fonts/Dubai-Bold.otf')
        });
        this.setState({fontLoaded: true});
    }

    render() {
        if (this.state.fontLoaded)
            return (
                <Router/>
            );
        return null;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
