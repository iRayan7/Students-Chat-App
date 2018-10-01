import React, {Component} from 'react'
import {View, TouchableOpacity, FlatList} from 'react-native'
import {TextWithFont, GroupsFlatListItem} from "../components";
import {colors} from "../config";

// icons from expo
import {Entypo, Ionicons, Feather} from '@expo/vector-icons';

class GroupsScreen extends Component {

    static navigationOptions = ({navigation}) => {
        // const {id, region} = navigation.state.params;
        return {
            headerTitle: 'المجموعات',
            headerTitleStyle: {
                fontSize: 14,
                color: colors.greyishBrown
            },
            headerRight: (
                <TouchableOpacity
                    style={{marginRight: 25, flexDirection: 'row', alignItems: 'center'}}
                    // onPress={() => Linking.openURL('http://maps.google.com/maps?q=' + region.latitude + ',' + region.longitude)}
                    hitSlop={{top: 20, left: 50, bottom: 20, right: 50}}
                >
                    <Feather name={'plus'} size={24} color={colors.greyishBrown}/>
                </TouchableOpacity>
            ),


        }


    };

    render() {

        const groups = [
            {
                title: 'عنوان',
                lastMessage: {
                    sender: 'محمد',
                    message: 'كيف حال الشباب؟',
                },
                key: '1'
            },
            {
                title: 'عنوان',
                lastMessage: {
                    sender: 'محمد',
                    message: 'كيف حال الشباب؟',
                },
                key: '2'
            },

        ]

        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff'}}>
                <FlatList
                    data={groups}
                    renderItem={
                        ({item}) =>
                            <GroupsFlatListItem
                                title={item.title}
                                lastMessage={item.lastMessage}
                            />

                    }
                />
            </View>
        )
    }
}


export {GroupsScreen}