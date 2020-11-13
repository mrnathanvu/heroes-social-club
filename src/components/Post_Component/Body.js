import React from 'react';
import { Image } from 'react-native';

import styles from './Body_Style';

const Body = ({imageURL}) => (
    <Image source={{uri: imageURL}} style={styles.image}/>
)

export default Body