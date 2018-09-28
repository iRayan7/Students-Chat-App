import React, {Component} from 'react'
import {View, Image, TouchableOpacity, KeyboardAvoidingView} from 'react-native'
import {TextWithFont, Button, KeyboardDismissOnPressView} from "../components"

import {TextField} from 'react-native-materialui-textfield'

class WelcomeToAppScreen extends Component {

    constructor(props) {
        super(props)

        this.state = {
            password: '',
            passwordConfirmation: ''
        }
    }

    render() {
        return (
            <KeyboardDismissOnPressView style={{flex: 1, backgroundColor: '#fff'}}>
                <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                    <KeyboardDismissOnPressView style={styles.row}>
                        <Image
                            style={{width: 58, height: 48, marginVertical: 10}}
                            source={require('../../assets/LogoColored.png')}
                        />
                        <TextWithFont size={14}>أهلًا بك في اسم التطبيق!</TextWithFont>
                    </KeyboardDismissOnPressView>

                    <KeyboardDismissOnPressView style={{flex: 1}}>
                        <TouchableOpacity style={styles.profilePicContainer}>
                            <Image
                                style={{
                                    width: 113,
                                    height: 80
                                }}
                                source={require('../../assets/profilePicHolder.png')}
                            />

                            <TextWithFont
                                style={{
                                    // opacity: 0.5,
                                    textAlign: "center",

                                }}
                                // color={'rgba(35,35,35,0.5)'}
                                color={'#232323'}
                            >إختيار صورة شخصية</TextWithFont>
                        </TouchableOpacity>
                    </KeyboardDismissOnPressView>

                    <KeyboardDismissOnPressView style={{flex: 1}}>

                        <TextField
                            label='كلمة المرور'
                            value={this.state.password}
                            onChangeText={(password) => this.setState({password})}
                            inputContainerStyle={{alignItems: 'flex-end'}}
                            style={{textAlign: 'right'}}
                            secureTextEntry={true}
                        />
                        <TextField
                            label='تأكيد كلمة المرور'
                            value={this.state.passwordConfirmation}
                            onChangeText={(passwordConfirmation) => this.setState({passwordConfirmation})}
                            inputContainerStyle={{alignItems: 'flex-end'}}
                            style={{textAlign: 'right'}}
                            secureTextEntry={true}
                        />
                    </KeyboardDismissOnPressView>

                    <KeyboardDismissOnPressView style={{
                        flex: 1,
                        justifyContent: 'flex-end',
                        marginBottom: 40
                    }}>
                        <Button
                            title={'إبدأ'}
                        />

                    </KeyboardDismissOnPressView>


                </KeyboardAvoidingView>
            </KeyboardDismissOnPressView>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        width: '80%',
        alignSelf: 'center',
        // flexDirection: 'row-reverse',
        justifyContent: 'center',
    },
    row: {
        flex: 1,
        // flexDirection: 'column-reverse',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    profilePicContainer: {
        width: 120,
        height: 120,
        // opacity: 0.2,
        borderRadius: 4,
        // backgroundColor: "#d8d8d8",
        backgroundColor: 'rgba(216, 216, 216,0.2)',
        alignSelf: 'flex-end',
        alignItems: 'center',
        paddingTop: 4

    }
}

export {WelcomeToAppScreen}