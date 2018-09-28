import React, {Component} from 'react'
import {View, Image, TouchableOpacity, KeyboardAvoidingView} from 'react-native'
import {TextWithFont, Button, KeyboardDismissOnPressView} from "../components"

import {TextField} from 'react-native-materialui-textfield'
import {RegisterScreen} from "./index";

class LoginScreen extends Component {

    constructor(props) {
        super(props)

        this.state = {
            studentId: '',
            password: ''
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
                    <TextWithFont size={14}>أهلًا وسهلًا</TextWithFont>
                    <TextWithFont size={14}>الرجاء تسجيل الدخول للمتابعة...</TextWithFont>
                </KeyboardDismissOnPressView>

                <KeyboardDismissOnPressView style={{flex: 1}}>
                    <TextField
                        label='الرقم الجامعي'
                        value={this.state.studentId}
                        onChangeText={(studentId) => this.setState({studentId})}
                        inputContainerStyle={{alignItems: 'flex-end'}}
                        style={{textAlign: 'right'}}
                        keyboardType={'number-pad'}

                    />
                    <TextField
                        label='كلمة المرور'
                        value={this.state.password}
                        onChangeText={(password) => this.setState({password})}
                        inputContainerStyle={{alignItems: 'flex-end'}}
                        style={{textAlign: 'right'}}
                        secureTextEntry={true}
                    />
                    <TouchableOpacity
                        style={{
                            alignSelf: 'flex-start'
                        }}
                    >
                        <TextWithFont
                            style={{
                                fontSize: 12,
                                opacity: 0.6,
                                paddingTop: 5,
                            }}
                        >
                            نسيت كملة المرور؟
                        </TextWithFont>
                    </TouchableOpacity>
                </KeyboardDismissOnPressView>

                <KeyboardDismissOnPressView style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    marginBottom: 40
                }}>
                    <Button
                        title={'دخول'}
                    />

                    <View style={{
                        flexDirection: 'row-reverse',
                        justifyContent: 'center',
                        paddingTop: 10
                    }}>
                        <TextWithFont>لا يوجد لديك حساب بعد؟</TextWithFont>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('RegisterScreen')}
                        >
                            <TextWithFont
                                color={'#6968ef'}
                                style={{paddingEnd: 5}}>
                                سجل من هنا
                            </TextWithFont>
                        </TouchableOpacity>
                    </View>
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

export {LoginScreen}