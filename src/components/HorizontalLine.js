import React, {Component} from 'react'
import {View} from 'react-native'

const HorizontalLine = (props) => {


    return (
        <View style={[{
            borderBottomWidth: 0.5,
            borderBottomColor: '#00000033',
            height: 1
        },props.style]}/>)

}

export {HorizontalLine}

