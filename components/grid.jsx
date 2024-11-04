import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';

const data = [
  {id: 1, title: 'Apple'},
  {id: 2, title: 'Banana'},
  {id: 3, title: 'Cherry'},
  {id: 4, title: 'Date'},
  {id: 5, title: 'Elderberry'},
  {id: 6, title: 'Fig'},
  {id: 7, title: 'Grape'},
  {id: 8, title: 'Honeydew'},
  {id: 9, title: 'Indian Fig'},
  {id: 10, title: 'Jackfruit'},
  {id: 11, title: 'Kiwi'},
  {id: 12, title: 'Lemon'},
  {id: 13, title: 'Mango'},
  {id: 14, title: 'Nectarine'},
  {id: 15, title: 'Orange'},
  {id: 16, title: 'Papaya'},
  {id: 17, title: 'Quince'},
  {id: 18, title: 'Raspberry'},
  {id: 19, title: 'Strawberry'},
  {id: 20, title: 'Tangerine'},
  {id: 21, title: 'Ugli Fruit'},
  {id: 22, title: 'Vanilla Bean'},
  {id: 23, title: 'Watermelon'},
  {id: 24, title: 'Xigua'},
  {id: 25, title: 'Yellow Passion Fruit'},
  {id: 26, title: 'Zucchini'},
  {id: 27, title: 'Avocado'},
  {id: 28, title: 'Blackberry'},
  {id: 29, title: 'Cantaloupe'},
  {id: 30, title: 'Dragon Fruit'},
  {id: 31, title: 'Eggplant'},
  {id: 32, title: 'Gooseberry'},
  {id: 33, title: 'Huckleberry'},
  {id: 34, title: 'Ita Palm'},
  {id: 35, title: 'Jujube'},
  {id: 36, title: 'Kumquat'},
  {id: 37, title: 'Lychee'},
  {id: 38, title: 'Mulberry'},
  {id: 39, title: 'Nance'},
  {id: 40, title: 'Olive'},
  {id: 41, title: 'Pineapple'},
  {id: 42, title: 'Rambutan'},
  {id: 43, title: 'Salak'},
  {id: 44, title: 'Tamarind'},
  {id: 45, title: 'Uva'},
  {id: 46, title: 'Voavanga'},
  {id: 47, title: 'Wolfberry'},
  {id: 48, title: 'Ximenia'},
  {id: 49, title: 'Yamamomo'},
  {id: 50, title: 'Ziziphus'},
];

const Grid = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {data.map(item => (
          <View key={item.id}>
            <Text style={styles.text}>{item.title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    padding: 10,
  },
  text: {
    color: 'white',
    marginBottom: 10,
  },
});

export default Grid;
