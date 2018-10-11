import React, {Component} from 'react'
import {TouchableOpacity, View,} from 'react-native'
import {colors} from "../config";

// icons from expo
import {Entypo, Ionicons, Feather} from '@expo/vector-icons';


class GroupChatScreen extends Component {

    // constructor(props) {
    //     super(props)
    //
    //     const {groupId, groupTitle} = navigation.state.params;
    //
    //
    //     this.state = {
    //         groupId: groupId,
    //         groupTitle: groupTitle
    //     }
    // }

    static navigationOptions = ({navigation}) => {
        const {groupId, groupTitle} = navigation.state.params;
        console.log(groupTitle)
        return {
            headerTitle: groupTitle,
            headerTitleStyle: {
                fontSize: 14,
                color: colors.greyishBrown
            },
            headerRight: (
                <TouchableOpacity
                    style={{marginRight: 25, flexDirection: 'row', alignItems: 'center'}}
                    // onPress={() => Linking.openURL('http://maps.google.com/maps?q=' + region.latitude + ',' + region.longitude)}
                    hitSlop={{top: 20, left: 50, bottom: 20, right: 50}}
                    onPress={
                        () => navigation.navigate(
                            'GroupDetailsScreen',
                            {
                                // groupId: this.state.groupId,
                                // groupTitle: this.state.groupTitle,
                                groupId: groupId,
                                groupTitle: groupTitle,

                            }
                        )
                    }
                >
                    <Feather name={'info'} size={24} color={colors.greyishBrown}/>
                </TouchableOpacity>
            ),
        }
    };

    render() {
        return (
            <View></View>
        )
    }
}


export {GroupChatScreen}