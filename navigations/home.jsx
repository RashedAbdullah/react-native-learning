import {View, Text, Button} from 'react-native';
import React from 'react';

const HomePage = ({navigation, route}) => {
  console.log(route);
  return (
    <View>
      <Text>Home Page</Text>
      <View>
        <Button title="About" onPress={() => navigation.navigate('About')} />
        <Button title="Projects" onPress={() => console.log('Hello')} />
      </View>
    </View>
  );
};

export default HomePage;
