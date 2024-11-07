import {View, ImageBackground, Image} from 'react-native';
import React from 'react';

const ImageFrontAndBack = () => {
  const image = require('../images/wallpaper.jpg');
  const img = {
    url: 'https://images.pexels.com/photos/15693434/pexels-photo-15693434/free-photo-of-city-town-bangladesh-dhaka.jpeg',
  };
  return (
    <ImageBackground
      source={img}
      resizeMode="center"
      style={{height: 1920, width: 'auto'}}>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          height: 'auto',
          width: 'auto',
        }}>
        <Image
          style={{height: 100, width: 100}}
          source={image}
          resizeMode="cover"
        />
        <Image
          style={{height: 100, width: 100}}
          source={image}
          resizeMode="cover"
        />
      </View>
    </ImageBackground>
  );
};

export default ImageFrontAndBack;
