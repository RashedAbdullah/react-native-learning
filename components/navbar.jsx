import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.navbarTitle}>জামিআতুল লতীফ রূপগঞ্জ</Text>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  navbar: {
    backgroundColor: '#0f172a',
    paddingVertical: 15,
    alignItems: 'center',
  },
  navbarTitle: {
    color: '#fff',
    fontSize: 20,
    paddingLeft: 30,
    fontFamily: 'NotoSerifBengali-Regular',
  },
});
