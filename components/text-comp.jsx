import {FlatList, Text, View} from 'react-native';
import React from 'react';
const TestComp = () => {
  const data = [
    {
      name: 'Rashed Abdullah',
      age: 24,
    },
    {
      name: 'Altaf abour rouf',
      age: 24,
    },
    {
      name: 'Sana ullah',
      age: 27,
    },
    {
      name: 'Osman goni',
      age: 26,
    },
  ];

  const nestedItmes = [
    {
      title: 'Students',
      data: [
        {
          name: 'Tawhid',
          class: 'Ibtidaiyah',
        },
      ],
    },
  ];

  const renderItem = ({item}) => {
    return (
      <View>
        <Text>Name: {item.name}</Text>
        <Text>Age: {item.age}</Text>
      </View>
    );
  };
  return (
    <View>
      <Text>Data printing:</Text>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.name}
        contentContainerStyle={{display: 'flex', justifyContent: 'center'}}
      />
    </View>
  );
};
export default TestComp;
