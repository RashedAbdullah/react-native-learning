import {View, Text, TextInput, FlatList} from 'react-native';
import React, {useState} from 'react';

const SearchComp = () => {
  const [query, setQuery] = useState('');
  const users = [
    {
      name: 'Labib',
      age: 4,
    },
    {
      name: 'Ismat',
      age: 1,
    },
    {
      name: 'Rashed Abdullah',
      age: 25,
    },
  ];

  const filterdUser = users.filter(user =>
    user.name.toLowerCase().includes(query.toLowerCase()),
  );

  console.log(filterdUser);

  const renderItem = ({item}) => (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.age}</Text>
    </View>
  );
  return (
    <View>
      <Text>Search Component</Text>
      <TextInput
        placeholder="Search..."
        placeholderTextColor="red"
        value={query}
        onChangeText={setQuery}
      />
      <FlatList
        data={filterdUser}
        keyExtractor={item => item.name}
        renderItem={renderItem}
      />
    </View>
  );
};

export default SearchComp;
