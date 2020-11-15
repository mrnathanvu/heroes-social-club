import React, { useEffect, useState } from 'react';
import { SafeAreaView, ImageBackground, ActivityIndicator, TouchableWithoutFeedback, Dimensions, Text, View } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';
import { API, graphqlOperation } from 'aws-amplify';

import FeatherIcon from 'react-native-vector-icons/Feather';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

import storiesData from '../assets/data/data';
import styles from './StoryScreen_Style';
import ProfilePicture from '../components/Stories_Component/ProfilePicture';
import { listStorys } from '../../graphql/queries.js';

const StoryScreen = () => {

    // const [userStories, setUserStories] = useState(null);
    const [activeStoryIndex, setActiveStoryIndex] = useState(null);
    const [stories, setStories] = useState([]);

    const route = useRoute();
    // console.log('ROUTE', route)
    // const userId = route.params.userId;
    // console.log('userId', userId);

    // const navigation = useNavigation();

    useEffect(() => {
        // console.log(`activeStoryIndex${activeStoryIndex}`)
        fetchStories();
        // const userStories = storiesData.find(storyData => storyData.user.id === userId);
        // console.log('userStories', userStories);
        // setUserStories(userStories);
        setActiveStoryIndex(0);
    },[])

    const fetchStories = async () => {
        try {
            const storiesData = await API.graphql(graphqlOperation(listStorys));
            // console.log('storiesData', storiesData);
            setStories(storiesData.data.listStorys.items);
        } catch (err) {
            console.log('ERROR', err.message);
        }
    }

    // const navigateToNextUser = () => {
    //     navigation.push('Story', { userId: (parseInt(userId) + 1).toString() });
    // }

    // const navigateToPrevUser = () => {
    //     navigation.push('Story', { userId: (parseInt(userId) - 1).toString() });
    // }

    const handleNextStory = () => {
        if (activeStoryIndex >= stories.length - 1) {
            // navigateToNextUser();
            return;
        }
        setActiveStoryIndex(activeStoryIndex + 1);
    }

    const handlePrevStory = () => {
        if (activeStoryIndex <= 0) {
            // navigateToPrevUser();
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

    if(!stories || stories.length === 0) {
        return (
            <SafeAreaView> 
                <ActivityIndicator />
            </SafeAreaView>
        )
    }
    // console.log('userStories', userStories)

    // const activeStory = userStories.stories[activeStoryIndex];
    // console.log('activeStory', activeStory)

    const activeStory = stories[activeStoryIndex];

    // console.log('RENDERING')
    return (
        <SafeAreaView style={styles.container}> 
            <TouchableWithoutFeedback onPress={handlePress}>
                <ImageBackground source={{uri: activeStory.image}} style={styles.image}>
                    <View style={styles.userInfo}>
                        <ProfilePicture uri={activeStory.user.image} size={50} />
                        <Text style={styles.userName}>{activeStory.user.name}</Text>
                        <Text style={styles.postedTime}>{activeStory.createdAt}</Text>
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