import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FoundationIcon from 'react-native-vector-icons/Foundation';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

import HomeStackScreen from './HomeRoutes';
import DiscoveryScreen from '../screens/DiscoveryScreen';
import CreatePostScreen from '../screens/CreatePostScreen';
import NotificationScreen from '../screens/NotificationsScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const Router = () => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home') {
              return <FoundationIcon name='home' size={size} color={color}/>
            } 
            if (route.name === 'Discovery') {
              return <FeatherIcon name='search' size={size} color={color}/>
            } 
            if (route.name === 'CreatePost') {
              return <FeatherIcon name='plus-square' size={size} color={color}/>
            }
            if (route.name === 'Notifications') {
              return <AntDesignIcon name='hearto' size={size} color={color}/>
            }  
            if (route.name === 'Profile') {
              return <IoniconsIcon name='person-outline' size={size} color={color}/>
            }  
          },
        })}
        tabBarOptions={{
          activeTintColor: '#000',
          inactiveTintColor: 'gray',
          showLabel: false
        }}
    >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Discovery" component={DiscoveryScreen} />
        <Tab.Screen name="CreatePost" component={CreatePostScreen} />
        <Tab.Screen name="Notifications" component={NotificationScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
)

export default Router;