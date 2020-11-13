import React from 'react';
import { FlatList } from 'react-native';

import Stories from './Stories _Component/Stories';
import Post from './Post_Component/Post';

const data = [
    {
        user: {
            imageURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/ana/icon-portrait.png',
            name: 'Ana',
        },
        imgURL: 'https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt88adc11ef82b2f88/5cef225a7b48be290a7f87dc/ana-screenshot-004.jpg',
        caption: 'Never stop fighting for what you believe in',
        likesCount: 60,
        postedAt: '6 minutes ago'
    },
    {
        user: {
            imageURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/mei/icon-portrait.png',
            name: 'Mei',
        },
        imgURL: 'https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt31c50730cef5010c/5cef22c54e4776020a334023/mei-screenshot-001.jpg',
        caption: 'Our world is worth fighting for',
        likesCount: 31,
        postedAt: '13 minutes ago'
    },
    {
        user: {
            imageURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/zarya/icon-portrait.png',
            name: 'Zarya',
        },
        imgURL: 'https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blte000920c5fccce9c/5d0285d67b48be290a7f95d5/zarya-concept.jpg',
        caption: 'Together, we are strong',
        likesCount: 28,
        postedAt: '82 minutes ago'
    },

]

const Feed = () => (
    <FlatList
        data={data}
        ListHeaderComponent={Stories}
        renderItem={({item}) => <Post post={item} />}
    />
)

export default Feed;