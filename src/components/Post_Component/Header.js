import React from 'react';
import { Text, View } from 'react-native';

import ProfilePicture from '../Stories _Component/ProfilePicture';
import styles from './Header_Style';


const Header = ({imageURL, name}) => (
    <View style={styles.container}>
        <ProfilePicture uri={imageURL} size={40} />
        <Text style={styles.name}>{name}</Text>
    </View>
)

export default Header;