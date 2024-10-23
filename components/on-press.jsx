import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';

const OnPress = ({title = 'Props not provided'}) => {
  const [name, setName] = useState(false);
  const pressFunc = () => {
    setName(!name);
  };
  return (
    <View>
      <Text style={{color: '#343434'}}>{name ? 'OK' : 'No'}</Text>
      <Text>{title}</Text>
      <Button title="Press" color="#000" onPress={pressFunc} />
    </View>
  );
};

export default OnPress;
