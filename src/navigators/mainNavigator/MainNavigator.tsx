import React from 'react'
import { View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import COLORS from '../../constants/colors'
import { FONT_FAMILIES } from '../../constants/fonts'
import { NAVIGATORS } from '../../constants/navigators'
import Icon from '../../components/Icon';
import { IconType } from '../../components/Icon/Icon';

import Tab1Screen from '../../features/bottomTabs/Tab1';
import Tab2Screen from '../../features/bottomTabs/Tab2';
import Tab3Screen from '../../features/bottomTabs/Tab3';
import Tab4Screen from '../../features/bottomTabs/Tab4';
import Tab5Screen from '../../features/bottomTabs/Tab5';
import UserAvatar from '../../components/UserAvatar';

const Tab1Stack = createStackNavigator()
function Tab1StackScreen() {
    return (
        <Tab1Stack.Navigator
            screenOptions={{
                headerTitleStyle: {
                    fontFamily: FONT_FAMILIES.Regular,
                },
            }}>
            <Tab1Stack.Screen
                name={NAVIGATORS.HOME.name}
                options={{ headerShown: true }}
                component={Tab1Screen} />
        </Tab1Stack.Navigator>
    )
}

const Tab2Stack = createStackNavigator()
function Tab2StackScreen() {
    return (
        <Tab2Stack.Navigator
            screenOptions={{
                headerTitleStyle: {
                    fontFamily: FONT_FAMILIES.Regular,
                },
            }}>
            <Tab2Stack.Screen
                name={NAVIGATORS.HOME.name}
                component={Tab2Screen} />
        </Tab2Stack.Navigator>
    )
}

const Tab3Stack = createStackNavigator()
function Tab3StackScreen() {
    return (
        <Tab3Stack.Navigator
            screenOptions={{
                headerTitleStyle: {
                    fontFamily: FONT_FAMILIES.Regular,
                },
            }}>
            <Tab3Stack.Screen
                name={NAVIGATORS.HOME.name}
                component={Tab3Screen} />
        </Tab3Stack.Navigator>
    )
}

const Tab4Stack = createStackNavigator()
function Tab4StackScreen() {
    return (
        <Tab4Stack.Navigator
            screenOptions={{
                headerTitleStyle: {
                    fontFamily: FONT_FAMILIES.Regular,
                },
            }}>
            <Tab4Stack.Screen
                name={NAVIGATORS.HOME.name}
                component={Tab4Screen} />
        </Tab4Stack.Navigator>
    )
}

const Tab5Stack = createStackNavigator()
function Tab5StackScreen() {
    return (
        <Tab5Stack.Navigator
            screenOptions={{
                headerTitleStyle: {
                    fontFamily: FONT_FAMILIES.Regular,
                },
            }}>
            <Tab5Stack.Screen
                name={NAVIGATORS.HOME.name}
                component={Tab5Screen} />
        </Tab5Stack.Navigator>
    )
}

const Tab = createBottomTabNavigator()
const TabNavigator = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: COLORS.oceanGreen,
                inactiveTintColor: COLORS.silver,
                showLabel: false,
                keyboardHidesTabBar: true,
            }}>
            <Tab.Screen
                name={NAVIGATORS.HOME_STACK.name}
                component={Tab1StackScreen}
                options={({ route }) => {
                    const routeName = getFocusedRouteNameFromRoute(route)
                    const routeNamesWithTabBar = [NAVIGATORS.HOME.name]
                    return {
                        tabBarIcon: ({ color, size }) => (
                            <Icon
                                type={IconType.MaterialIcons}
                                name={'home'}
                                color={color}
                                size={size}
                            />
                        ),
                        tabBarVisible:
                            !routeName || routeNamesWithTabBar.includes(routeName),
                    }
                }}
            />
            <Tab.Screen
                name={NAVIGATORS.CHAT_STACK.name}
                component={Tab2StackScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon
                            type={IconType.MaterialIcons}
                            name={'message'}
                            color={color}
                            size={size}
                        />
                    ),
                    tabBarBadge: 2,
                }}
            />
            <Tab.Screen
                name={NAVIGATORS.NEW_POST_STACK.name}
                component={Tab3StackScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon
                            type={IconType.MaterialIcons}
                            name={'add-box'}
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={NAVIGATORS.NOTIFICATIONS_STACK.name}
                component={Tab4StackScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon
                            type={IconType.MaterialIcons}
                            name={'search'}
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={NAVIGATORS.PROFILE_STACK.name}
                component={Tab5StackScreen}
                options={({ route }) => {
                    const routeName = getFocusedRouteNameFromRoute(route)
                    const routeNamesWithTabBar = [NAVIGATORS.PROFILE.name]

                    return {
                        tabBarIcon: ({ color, size }) => (
                            <Icon
                                type={IconType.MaterialIcons}
                                name={'person'}
                                color={color}
                                size={size}
                            />
                        ),
                        tabBarVisible:
                            !routeName || routeNamesWithTabBar.includes(routeName),
                    }
                }}
            />
        </Tab.Navigator>
    )
}

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{ alignItems: 'center' }}>
        <UserAvatar
          imgSrc=''
          heightOrWidth={80} />
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

function MainNavigator(props: any) {
    return (
        <NavigationContainer independent={true} >
            <Drawer.Navigator
                initialRouteName={NAVIGATORS.MAIN.name}
                drawerPosition="right"
                drawerContentOptions={{
                    activeTintColor: COLORS.white,
                    inactiveTintColor: COLORS.black,
                    activeBackgroundColor: COLORS.oceanGreen,
                }}
                drawerContent={(localProps) => <CustomDrawerContent {...localProps} />}
            >
                <Drawer.Screen name={NAVIGATORS.HOME.name} component={TabNavigator} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default MainNavigator
