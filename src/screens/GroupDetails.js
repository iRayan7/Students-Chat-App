import React, {Component} from 'react'
import {View, TouchableOpacity, FlatList} from 'react-native'
import {GroupsFlatListItem, HorizontalLine, TextWithFont} from "../components";
import {colors} from '../config'

import {LinearGradient} from 'expo'

// icons from expo
import {Entypo, Ionicons, Feather} from '@expo/vector-icons';

class GroupDetails extends Component {

    static navigationOptions = ({navigation}) => {
        // const {id, region} = navigation.state.params;
        return {
            headerTitle: 'تفاصيل المجموعة',
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

    constructor(props) {
        super(props)

        const {groupId, groupTitle} = props.navigation.state.params;

        this.state = {
            groupId: groupId,
            groupTitle: groupTitle,
            groupBio: 'مقرر قرأ 100',
            sectionNumber: 32477,
            media: [{}, {}, {}, {}],
            members: [
                {name: 'خالد المحمد', key: '23'},
                {name: 'محمد الخالد', key: '24'},
                {name: 'فتحي المحمدي', key: '25'},

            ]
        }
    }

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
                        // end={[0.3, 0.3]}
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
                            {this.state.groupTitle}
                        </TextWithFont>

                        <TextWithFont size={20} color={'#fff'} style={{opacity: 0.7}}>
                            رقم شعبة {this.state.sectionNumber}
                        </TextWithFont>

                    </LinearGradient>
                </View>

                <View style={styles.detailsContainer}>
                    <TextWithFont isBold size={16} color={colors.softBlue}>الوصف</TextWithFont>
                    <TextWithFont size={16}>{this.state.groupBio}</TextWithFont>

                    <HorizontalLine style={{
                        marginVertical: 5
                    }}/>

                    <TouchableOpacity style={{
                        flexDirection: 'row-reverse',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <TextWithFont isBold size={16} color={colors.robinSEgg}>ملفات الميديا</TextWithFont>
                        <View style={{flex: 1}}/>
                        <TextWithFont size={16} style={{opacity: 0.5}}>{this.state.media.length} ></TextWithFont>
                    </TouchableOpacity>

                    <HorizontalLine style={{
                        marginVertical: 5
                    }}/>

                    <View style={{
                        flexDirection: 'row-reverse',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>

                        <TextWithFont isBold size={16} color={colors.robinSEgg}>الأعضاء</TextWithFont>
                        <View style={{flex: 1}}/>
                        <TextWithFont size={16} style={{opacity: 0.5}}>{this.state.members.length} عضو</TextWithFont>


                    </View>

                    <HorizontalLine style={{paddingVertical: 5, opacity: 0.3}}/>
                    <FlatList
                        data={this.state.members}
                        style={{marginVertical: 7,}}
                        renderItem={
                            ({item}) =>
                                <View style={{
                                    height: 50,
                                    alignItems: 'center',
                                    flexDirection: 'row-reverse',
                                }}>
                                    <View style={{
                                        height: 44,
                                        width: 44,
                                        borderRadius: 5,
                                        backgroundColor: '#ddd',

                                        shadowColor: "rgba(0, 0, 0, 0.1)",
                                        shadowOffset: {
                                            width: 0,
                                            height: 1
                                        },
                                        shadowRadius: 4,
                                        shadowOpacity: 1,
                                    }}/>

                                    <TextWithFont size={16} style={{marginRight: 15}}>{item.name}</TextWithFont>
                                </View>

                        }
                    />
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

    },
    detailsContainer: {
        width: '90%',
        alignSelf: 'center',
        flex:1
    }
}

export {GroupDetails}