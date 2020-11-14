import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import FeatherIcon from 'react-native-vector-icons/Feather';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import logo from '../assets/images/Instagram-Logo.png';

import HomeScreen from '../screens/HomeScreen';

const HomeStack = createStackNavigator();

const HomeRoutes = () => (
    <HomeStack.Navigator>
      <HomeStack.Screen 
        name='Home' 
        component={HomeScreen} 
        options={{
          title: 'Instagram',
          headerLeftContainerStyle: {
            marginLeft: 15,
          },
          headerRightContainerStyle: {
            marginRight: 15,
          },
          headerTitle: () => (
            <Image source={logo} resizeMode='contain' style={{width: 135, height: 50}}/>
          ),
          headerLeft: () => (
            <FeatherIcon name='camera' size={25} color={'#000'} />
          ),
          headerRight: () => (
            <IoniconsIcon name='paper-plane-outline' size={25} color={'#000'} />
          ) 
        }}
      />
    </HomeStack.Navigator>
)
    
export default HomeRoutes;