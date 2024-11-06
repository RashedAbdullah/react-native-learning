import {View, Text, Button, Alert} from 'react-native';
import React from 'react';

const AlertBox = () => {
  const handleAlert = () => {
    Alert.alert(
      'Success',
      'Sign in success',
      [
        {
          text: 'Cencel',
          onPress: () => console.log('Cencel'),
        },
        {
          text: 'Okay',
          onPress: () => console.log('Okay'),
        },
      ],
      {cancelable: true},
    );
  };
  return (
    <View>
      <Text>AlertBox</Text>
      <Button title="Show Alert" onPress={handleAlert}></Button>
    </View>
  );
};

export default AlertBox;
