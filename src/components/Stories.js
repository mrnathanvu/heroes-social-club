import React from 'react';
import { FlatList } from 'react-native';

import Story from './Story';

const data = [
    {
        imageURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/ana/icon-portrait.png',
        name: 'Ana',
    }, {
        imageURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/moira/icon-portrait.png',
        name: 'Moira',
    }, {
        imageURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/mei/icon-portrait.png',
        name: 'Mei',
    }, {
        imageURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/junkrat/icon-portrait.png',
        name: 'Junkrat',
    }, {
        imageURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/symmetra/icon-portrait.png',
        name: 'Symmetra',
    }, {
        imageURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/zarya/icon-portrait.png',
        name: 'Zarya',
    }, {
        imageURL: 'https://d1u1mce87gyfbn.cloudfront.net/hero/reinhardt/icon-portrait.png',
        name: 'Reinhardt',
    }, 
]

const Stories = () => (
    <FlatList
    data={data}
    keyExtractor={({name}) => name}
    horizontal
    renderItem={({item}) => <Story imageURL={item.imageURL} name={item.name}/>}
    />

)

export default Stories;