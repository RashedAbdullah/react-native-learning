import {View, Text, StatusBar} from 'react-native';
import React from 'react';

const StatusBarComp = () => {
  return (
    <View>
      <Text>StatusBar</Text>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'red'}
        hidden
        // translucent={true}
      />
    </View>
  );
};

export default StatusBarComp;
