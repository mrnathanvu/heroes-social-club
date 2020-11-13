import React from 'react';
import { Text, View } from 'react-native';

import ProfilePicture from './ProfilePicture';
import styles from './Story_Style';

const Story = ({ imageURL, name }) => (
    <View>
        <ProfilePicture uri={imageURL}/>
        <Text style={styles.name}>{name}</Text>
    </View>
)

export default Story;