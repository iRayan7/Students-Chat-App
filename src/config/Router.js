// all routes comes from here

import React, {Component} from 'react'
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation'
import {
    GroupsScreen, ImportantEventsScreen, LoginScreen, ProfileScreen, RegisterScreen,
    WelcomeToAppScreen, GroupChatScreen
} from "../screens";

// icons from expo
import {Ionicons} from '@expo/vector-icons';

import {colors} from "./Styles";


class Router extends Component {

    render() {
        return (
            // <LoginStack/>

            <BottomTabNavigation/>
        )
    }
}

const LoginStack = createStackNavigator({
        LoginScreen: {
            screen: LoginScreen,
            navigationOptions: {
                header: null,
            }
        },
        RegisterScreen: {
            screen: RegisterScreen,
            navigationOptions: {
                header: null,
            }

        },
        WelcomeToAppScreen: {
            screen: WelcomeToAppScreen,
            navigationOptions: {
                header: null,
            }

        }
    },
    {
        initialRouteName: 'LoginScreen'
    }
);

const ProfileStack = createStackNavigator(
    {
        ProfileScreen: {
            screen: ProfileScreen,
            navigationOptions: {}
        }
    },
    {}
);

const ImportantEventsStack = createStackNavigator(
    {
        ImportantEventsScreen: {
            screen: ImportantEventsScreen,
            navigationOptions: {}
        }
    },
    {}
);

const GroupsStack = createStackNavigator(
    {
        GroupsScreen: {
            screen: GroupsScreen,
            navigationOptions: {}
        },
        GroupChatScreen: {
            screen:  GroupChatScreen,
            navigationOptions: {
                // header: null,
                // tabBarVisible: false,

            }
        }
    },
    {
        initialRouteName: 'GroupsScreen',

    }
);

const hiddenTabBars = ['GroupChatScreen'] //these are the RouteNames of the screens you want to hide the tab bars on
GroupsStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true
    if (
        hiddenTabBars.includes(
            navigation.state.routes[navigation.state.index].routeName,
        )
    ) {
        tabBarVisible = false
    }
    return {
        tabBarVisible,
    }
}

const BottomTabNavigation = createBottomTabNavigator(
    {


        ImportantEventsSTack: {
            screen: ImportantEventsStack,
            navigationOptions: {
                tabBarLabel: 'المواعيد الهامه',
                tabBarIcon: ({tintColor}) => (
                    <Ionicons name="ios-calendar-outline" color={tintColor} size={30}/>
                )
            }
        },
        GroupsStack: {
            screen: GroupsStack,
            navigationOptions: {
                tabBarLabel: 'المجموعات',
                tabBarIcon: ({tintColor}) => (
                    <Ionicons name="ios-chatbubbles-outline" color={tintColor} size={30}/>
                )
            }
        },
        ProfileStack: {
            screen: ProfileStack,
            navigationOptions: {
                tabBarLabel: 'الملف الشخصي',
                tabBarIcon: ({tintColor}) => (
                    <Ionicons name="ios-person-outline" color={tintColor} size={32}/>
                )
            }
        },

    },
    {
        tabBarOptions: {
            activeTintColor: colors.cornflower,
            inactiveTintColor: colors.inactiveColor,
            style: {
                backgroundColor: '#fff',
                height: 55,
                justifyContent: 'center',
                alignItems: 'center',

            },
            tabStyle: {
                justifyContent: 'center',
                alignItems: 'center',
            },
            labelStyle: {
                fontFamily: 'dubai-regular',
                fontSize: 12,
            }
        },
        initialRouteName: 'GroupsStack'
    }
);


export {Router}