// component for using font with text

import React, { Component} from 'react'
import {Text} from 'react-native'

const TextWithFont = props => {
    return (
        <Text style={[props.style,
            {
                fontFamily: props.isBold? 'dubai-bold' : 'dubai-regular',
                // it only works on iphone
                writingDirection: 'rtl',
                color: props.color? props.color : '#12213f',
                fontSize: props.size? props.size : 12,
            }
        ]}>
            {props.children}
        </Text>
    )
}



export {TextWithFont}