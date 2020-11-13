import React from 'react';
import { Text, View } from 'react-native';

import styles from './Footer_Style';

const Footer = ({likesCount, caption, postedAt}) => (
    <View style={styles.container}>
        <Text style={styles.likesCount}>{likesCount} likes</Text>
        <Text style={styles.caption}>{caption}</Text>
        <Text style={styles.postedAt}>{postedAt}</Text>
    </View>
)

export default Footer;