import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

const CreatePostScreen = () => (
    <SafeAreaView> 
        <View style={{backgroundColor: 'green', height: 1500}}>
            <Text style={{textAlign: 'center', fontSize: 30, color: 'white'}}>Create Post</Text>
        </View>
    </SafeAreaView>
)

export default CreatePostScreen;