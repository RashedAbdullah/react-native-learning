import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>
        © ২০২৪ জামিআতুল লতীফ রূপগঞ্জ, সব অধিকার সংরক্ষিত।
      </Text>
      <Text style={styles.footerContact}>
        যোগাযোগ করুন: info@jamiatul-latif.com
      </Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#374151',
    paddingVertical: 15,
    alignItems: 'center',
  },
  footerText: {
    color: '#9ca3af',
    fontSize: 14,
  },
  footerContact: {
    color: '#d1d5db',
    marginTop: 5,
  },
});
