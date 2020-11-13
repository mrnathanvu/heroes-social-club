import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

const NotificationsScreen = () => (
    <SafeAreaView> 
        <View style={{backgroundColor: 'red', height: 1500}}>
            <Text style={{textAlign: 'center', fontSize: 30, color: 'white'}}>Notifications</Text>
        </View>
    </SafeAreaView>
)

export default NotificationsScreen;