// a View component that dismiss the keyboard when pressing on it

import React, {Component} from 'react'
import {
    View,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native'

const KeyboardDismissOnPressView = props => (


    <TouchableWithoutFeedback
        onPress={() => {
            Keyboard.dismiss()
        }}
    >

        <View style={props.style}>
            {props.children}
        </View>

    </TouchableWithoutFeedback>
)


export {KeyboardDismissOnPressView}