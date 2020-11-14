import React, { useEffect, useState } from 'react';
import { SafeAreaView, ImageBackground, ActivityIndicator, TouchableWithoutFeedback, Dimensions, Text, View } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

import FeatherIcon from 'react-native-vector-icons/Feather';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

import storiesData from '../assets/data/data';
import styles from './StoryScreen_Style';
import ProfilePicture from '../components/Stories_Component/ProfilePicture';
import { TextInput } from 'react-native-gesture-handler';

const StoryScreen = () => {

    const [userStories, setUserStories] = useState(null);
    const [activeStoryIndex, setActiveStoryIndex] = useState(null);

    const navigation = useNavigation();

    const route = useRoute();
    // console.log('ROUTE', route)
    const userId = route.params.userId;
    // console.log('userId', userId);

    useEffect(() => {
        // console.log(`activeStoryIndex${activeStoryIndex}`)
        const userStories = storiesData.find(storyData => storyData.user.id === userId);
        // console.log('userStories', userStories);
        setUserStories(userStories);
        setActiveStoryIndex(0)
    },[])

    const navigateToNextUser = () => {
        navigation.push('Story', { userId: (parseInt(userId) + 1).toString() });
    }

    const navigateToPrevUser = () => {
        navigation.push('Story', { userId: (parseInt(userId) - 1).toString() });
    }

    const handleNextStory = () => {
        if (activeStoryIndex >= userStories.stories.length - 1) {
            navigateToNextUser();
            return;
        }
        setActiveStoryIndex(activeStoryIndex + 1);
    }

    const handlePrevStory = () => {
        if (activeStoryIndex <= 0) {
            navigateToPrevUser();
            return;
        }
        setActiveStoryIndex(activeStoryIndex - 1);
    }

    const handlePress = (e) => {
        // console.log('EVENT', e.nativeEvent);
        const x = e.nativeEvent.locationX;
        const screenWidth = Dimensions.get('window').width;

        // let isRight = true;
        // if(x < screenWidth / 2) {
        //     isRight = false;
        // }
        // console.log('isRight', isRight)
        
        if (x < screenWidth / 2) {
            handlePrevStory();
        } else {
            handleNextStory();
        }
        
    }

    if(!userStories) {
        return (
            <SafeAreaView> 
                <ActivityIndicator />
            </SafeAreaView>
        )
    }
    // console.log('userStories', userStories)

    const activeStory = userStories.stories[activeStoryIndex];
    // console.log('activeStory', activeStory)

    // console.log('RENDERING')
    return (
        <SafeAreaView style={styles.container}> 
            <TouchableWithoutFeedback onPress={handlePress}>
                <ImageBackground source={{uri: activeStory.imageURL}} style={styles.image}>
                    <View style={styles.userInfo}>
                        <ProfilePicture uri={userStories.user.imageURL} size={50} />
                        <Text style={styles.userName}>{userStories.user.name}</Text>
                        <Text style={styles.postedTime}>{activeStory.postedTime}</Text>
                    </View>
                    <View style={styles.bottomContainer}>
                        <View style={styles.cameraButton}>
                            <FeatherIcon name='camera' size={30} color={'#ffffff'} />
                        </View>
                        <View style={styles.textInputContainer}>
                            <TextInput style={styles.textInput} editable placeholder='Send a message' placeholderTextColor='white'/>
                        </View>
                        <View style={styles.messageButton}>
                            <IoniconsIcon name='paper-plane-outline' size={35} color={'#ffffff'} />
                        </View>
                    </View>
                </ImageBackground>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}

export default StoryScreen;