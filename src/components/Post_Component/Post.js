import React from 'react';
import { View } from 'react-native';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';



const Post = ({post}) => (
    <View>
        <Header 
            imageURL={post.user.imageURL} 
            name={post.user.name}
        />
        <Body imageURL={post.imgURL}/>
        <Footer 
            likesCount={post.likesCount} 
            caption={post.caption} 
            postedAt={post.postedAt}
        />
    </View>

)

export default Post;