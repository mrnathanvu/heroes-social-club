import React from 'react';
import { View } from 'react-native';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';



const Post = ({post}) => (
    <View>
        <Header 
            imageURL={post.user.image} 
            name={post.user.name}
        />
        <Body imageURL={post.image}/>
        <Footer 
            likesCount={post.likes} 
            caption={post.caption} 
            postedAt={post.createdAt}
        />
    </View>

)

export default Post;