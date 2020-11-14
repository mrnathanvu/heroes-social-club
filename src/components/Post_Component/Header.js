import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import ProfilePicture from '../Stories_Component/ProfilePicture';
import styles from './Header_Style';


const Header = ({imageURL, name}) => (
    <View style={styles.container}>
        <View style={styles.left}>
            <ProfilePicture uri={imageURL} size={40} />
            <Text style={styles.name}>{name}</Text>
        </View>
        <View style={styles.right}>
            <Icon name='dots-three-vertical' size={16}/>
        </View>
    </View>
)

export default Header;