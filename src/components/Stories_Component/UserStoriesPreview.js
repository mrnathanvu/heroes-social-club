import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { API, graphqlOperation } from 'aws-amplify';

import styles from './UserStoriesPreview_Style';
import UserStoryPreview from './UserStoryPreview';
import { listStorys } from '../../../graphql/queries.js';


const UserStoriesPreview = () => {

    const [stories, setStories] = useState([]);

    useEffect(() => {
        fetchStories();
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

    return (
        <FlatList
            style={styles.container}
            data={stories}
            keyExtractor={({user: {id}}) => id}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => <UserStoryPreview story={item}/>}
        />
    )
}

export default UserStoriesPreview;