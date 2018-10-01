import React, {Component} from 'react'
import {View, TouchableOpacity} from 'react-native'
import {TextWithFont} from "../components";
import {colors} from '../config'

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
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <TextWithFont>profile</TextWithFont>
            </View>
        )
    }
}


export {ProfileScreen}