import {View, Text, TextInput} from 'react-native';

import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Like local storage on web

const AsyncStorageComp = () => {
  const [name, setName] = useState('Rashed Abdullah');

  // const setUserName = async () => {
  //   await AsyncStorage.setItem('username', name);
  // };

  // setUserName();

  const getUserName = async () => {
    const name = await AsyncStorage.getItem('username');
    console.log(name);
  };
  getUserName();
  return (
    <View>
      <Text>Async Storage</Text>
      <TextInput
        placeholder="Name..."
        defaultValue={name}
        onChangeText={setName}
      />
    </View>
  );
};

export default AsyncStorageComp;
