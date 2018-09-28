import React, {Component} from 'react'
import {View, Image, TouchableOpacity, KeyboardAvoidingView} from 'react-native'
import {TextWithFont, Button, KeyboardDismissOnPressView} from "../components"

import { TextField } from 'react-native-materialui-textfield'

class RegisterScreen extends Component {

    constructor(props) {
        super(props)

        this.state = {
            studentId: '',
            name: ''
        }
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <KeyboardDismissOnPressView style={styles.row}>
                    <Image
                        style={{width: 58, height: 48, marginVertical: 10}}
                        source={require('../../assets/LogoColored.png')}
                    />
                    <TextWithFont size={14}>سجل معنا</TextWithFont>
                    <TextWithFont size={14}>رجاءً إملأ بياناتك الأساسية</TextWithFont>
                </KeyboardDismissOnPressView>

                <KeyboardDismissOnPressView style={{flex: 1}}>
                    <TextField
                        label='الاسم'
                        value={this.state.name}
                        onChangeText={ (name) => this.setState({ name }) }
                        inputContainerStyle={{ alignItems: 'flex-end' }}
                        style={{ textAlign: 'right' }}
                    />
                    <TextField
                        label='الرقم الجامعي'
                        value={this.state.studentId}
                        onChangeText={ (studentId) => this.setState({ studentId }) }
                        inputContainerStyle={{ alignItems: 'flex-end' }}
                        style={{ textAlign: 'right' }}
                        keyboardType={'number-pad'}
                        returnKeyType={'done'}
                    />

                </KeyboardDismissOnPressView>

                <KeyboardDismissOnPressView style={{
                    flex:1,
                    justifyContent: 'flex-end',
                    marginBottom: 40
                }}>
                    <Button
                        title={'تسجيل'}
                    />

                </KeyboardDismissOnPressView>



            </KeyboardAvoidingView>
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
    }
}

export {RegisterScreen}