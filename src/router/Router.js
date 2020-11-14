import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import BottomHomeNavigatorRoutes from './BottomHomeNavigatorRoutes';
import StoryScreen from '../screens/StoryScreen';

const RootStack = createStackNavigator();

const Router = () => (
   <RootStack.Navigator>
       <RootStack.Screen 
            name={'Home'} 
            component={BottomHomeNavigatorRoutes} 
            options={{
                headerShown: false
            }}
        />
        <RootStack.Screen 
            name='Story'
            component={StoryScreen}
            options={{
                headerShown: false,
            }}
        />
   </RootStack.Navigator>
)

export default Router;