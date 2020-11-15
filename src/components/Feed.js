import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { API, graphqlOperation } from 'aws-amplify'

import UserStoriesPreview from './Stories_Component/UserStoriesPreview';
import Post from './Post_Component/Post';
import { listPosts } from '../../graphql/queries.js';

const Feed = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    },[])

    const fetchPosts = async () => {
        try {
            const postData = await API.graphql(graphqlOperation(listPosts));
            // console.log('postData', postData.data.listPosts.items);
            setPosts(postData.data.listPosts.items);
        } catch (err) {
            console.log('ERROR', err.message);
        }
    }

    return (
        <FlatList
            data={posts}
            keyExtractor={({id}) => id}
            ListHeaderComponent={UserStoriesPreview}
            renderItem={({item}) => <Post post={item} />}
        />
    )
}

export default Feed;