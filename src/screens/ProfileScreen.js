import React, {Component} from 'react'
import {View, TouchableOpacity} from 'react-native'
import {TextWithFont} from "../components";
import {colors} from '../config'

import {LinearGradient} from 'expo'

// icons from expo
import {Entypo, Ionicons, Feather} from '@expo/vector-icons';

class ProfileScreen extends Component {


    static navigationOptions = ({navigation}) => {
        // const {id, region} = navigation.state.params;
        return {
            headerTitle: 'الملف الشخصي',
            headerTitleStyle: {
                fontSize: 14,
                color: colors.greyishBrown
            },
            // headerRight: (
            //     <TouchableOpacity
            //         style={{marginRight: 25, flexDirection: 'row', alignItems: 'center'}}
            //         // onPress={() => Linking.openURL('http://maps.google.com/maps?q=' + region.latitude + ',' + region.longitude)}
            //         hitSlop={{top: 20, left: 50, bottom: 20, right: 50}}
            //     >
            //         <Feather name={'plus'} size={24} color={'#9E2992'}/>
            //     </TouchableOpacity>
            // ),


        }


    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.picAndNameContainer}>
                    <LinearGradient
                        colors={['#6a60ee', '#56edff']}
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: 250,
                        }}
                        start={[0.3, 0.3]}
                        // locations={[0, 1]}
                    >

                        <View style={styles.picHolder}>

                        </View>

                        <TextWithFont
                            isBold
                            size={20}
                            color={'#fff'}
                            style={{marginVertical: 5}}
                        >
                            خالد المحمد
                        </TextWithFont>

                        <TextWithFont size={20} color={'#fff'} style={{opacity: 0.7}}>
                            435194389
                        </TextWithFont>

                    </LinearGradient>
                </View>
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#fff'
    },
    picAndNameContainer: {
        width: '100%',
        height: 250
    },
    picHolder: {
        width: 125,
        height: 125,
        backgroundColor: '#ddd',

        borderRadius: 5,

        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowRadius: 10,
        shadowOpacity: 1,

    }
}
export {ProfileScreen}