import {View, Text, Platform} from 'react-native';
import React from 'react';

const PlatformComp = () => {
  return (
    <View>
      <Text>{Platform.OS === 'android' && 'Welcome Android user'}</Text>
      <Text>
        {Platform.select({
          android: 'Hello Android',
          ios: 'Hello IOS',
          macos: 'Hello Macos',
          native: 'Hello Native',
          web: 'Hello web',
          windows: 'Hello Windows',
        })}
      </Text>
    </View>
  );
};

export default PlatformComp;
