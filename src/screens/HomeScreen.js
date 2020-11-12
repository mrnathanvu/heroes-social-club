import React from 'react';
import { Text } from 'react-native';
import ProfilePicture from '../components/ProfilePicture';

const HomeScreen = () => (
    <>
        <Text>Hello World</Text>
        <ProfilePicture pic={require('../../assets/images/profile_pic_01.jpg')}/>
        <ProfilePicture pic={require('../../assets/images/profile_pic_02.jpg')}/>
        <ProfilePicture pic={require('../../assets/images/profile_pic_03.jpg')}/>
        <ProfilePicture pic={require('../../assets/images/profile_pic_04.jpg')}/>
    </>
)

export default HomeScreen;