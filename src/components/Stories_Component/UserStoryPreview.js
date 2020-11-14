import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './UserStoryPreview_Style';
import ProfilePicture from './ProfilePicture';

const UserStoryPreview = (props) => {

    // console.log('PROPS', props)
    const {
        story: {
            user: {
                id,
                imageURL,
                name
            }
        }
    } = props;

    const navigation = useNavigation()

    const onPress = () => {
        navigation.navigate('Story', { userId: id});
    }

    return (
        <TouchableOpacity onPress={onPress}>
            <ProfilePicture uri={imageURL}/>
            <Text style={styles.name}>{name}</Text>
        </TouchableOpacity>
    )
}

export default UserStoryPreview;