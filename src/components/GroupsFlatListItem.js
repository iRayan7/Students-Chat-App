import React, {Component} from 'react'
import {View, Image, TouchableHighlight, TouchableOpacity} from 'react-native'
import {SCREEN_WIDTH} from "../config";
import {TextWithFont} from "./TextWithFont";

const GroupsFlatListItem = (props) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity
                // onPress={props.onPress}
                onPress={
                    () => props.navigation.navigate(
                        'GroupChatScreen',
                        {
                            groupId: props.groupId,
                            groupTitle: props.groupTitle,

                        }
                    )
                }
                style={styles.viewContainer}>

                {props.image ?
                    <Image
                        style={styles.image}
                        source={require('../../assets/profilePicHolder.png')}
                    />
                    :
                    <View style={styles.imageHolder}>

                    </View>
                }

                <View style={styles.textsContainer}>
                    <TextWithFont size={16} isBold>{props.groupTitle}</TextWithFont>
                    {props.lastMessage
                        ?
                        <View style={{flexDirection: 'row-reverse'}}>

                            <TextWithFont
                                style={{marginLeft: 4}}
                                isBold>
                                {props.lastMessage.sender}:
                            </TextWithFont>

                            <TextWithFont>
                                {props.lastMessage.message}
                            </TextWithFont>
                        </View>
                        :
                        null
                    }
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = {
    container: {
        height: 70,
        width: SCREEN_WIDTH,

        borderBottomWidth: 0.5,
        borderBottomColor: '#00000033',

        flexDirection: 'row-reverse',
        alignItems: 'center',
        // justifyContent: 'flex-start',

        paddingHorizontal: 15,
        flex: 1,

    },
    viewContainer: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        flex: 1
    },
    image: {
        width: 55,
        height: 55,

    },
    imageHolder: {
        width: 55,
        height: 55,
        backgroundColor: '#ddd',

        borderRadius: 5,

        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowRadius: 10,
        shadowOpacity: 1,


    },
    textsContainer: {
        marginRight: 10
    }

}

export {GroupsFlatListItem}