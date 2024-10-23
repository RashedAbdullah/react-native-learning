import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';

const InputComponent = () => {
  const [name, setName] = useState('');
  return (
    <View>
      <Text>Your name is: {name}</Text>
      <TextInput
        onChangeText={data => setName(data)}
        placeholder="Enter your name..."
        value={name}
        style={{
          color: '#009999',
          borderColor: 'green',
          borderWidth: 1,
          padding: 5,
          margin: 5,
        }}
      />
      <Button title="Clear" onPress={() => setName('')} />
    </View>
  );
};

export default InputComponent;
