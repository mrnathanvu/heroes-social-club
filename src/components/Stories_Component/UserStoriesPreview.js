import React from 'react';
import { FlatList } from 'react-native';

import styles from './UserStoriesPreview_Style';
import data from '../../assets/data/data'
import UserStoryPreview from './UserStoryPreview';


const UserStoriesPreview = () => (
    <FlatList
        style={styles.container}
        data={data}
        keyExtractor={({user: {id}}) => id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <UserStoryPreview story={item}/>}
    />

)

export default UserStoriesPreview;