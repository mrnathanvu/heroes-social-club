import React from 'react';
import { Image, View } from 'react-native';
import styles from './ProfilePicture_Style';

const ProfilePicture = ({ pic }) => (
    <View style={styles.container}>
        <Image 
            source={pic} 
            style={styles.image}
            />
    </View>
)

export default ProfilePicture;
