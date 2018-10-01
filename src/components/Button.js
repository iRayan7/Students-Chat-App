// a Button component with gradient

import React, {Component} from 'react'
import {View, TouchableOpacity, KeyboardAvoidingView} from 'react-native'

import {LinearGradient} from 'expo';
import {TextWithFont} from "./TextWithFont";

const Button = (props) => {


    return (
        <View style={styles.container} >
            <LinearGradient
                colors={['#56edff', '#6a60ee']}
                style={{alignItems: 'center'}}
                start={[1, 1]}
                locations={[0, 1]}

                // end={[1, 1]}

            >
                <TouchableOpacity
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        // flex: 1
                        width: '100%',
                        height: '100%'
                    }}>
                    <TextWithFont
                        style={{
                            paddingVertical: 10,
                        }}
                        color={'#fff'}
                        size={20}
                        isBold
                    >
                        {props.title}
                    </TextWithFont>

                </TouchableOpacity>
            </LinearGradient>
        </View>
    )

}

const styles = {
    container: {
        width: '100%',
        height: 50,
        shadowColor: "rgba(0, 0, 0, 0.2)",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 15,
        shadowOpacity: 1
    }
}


export {Button}

