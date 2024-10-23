import React from 'react';
import {Text, TouchableOpacity, StyleSheet, ScrollView, Button} from 'react-native';

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>জামিআতুল লতীফ রূপগঞ্জ</Text>
      <Text style={styles.subtitle}>একটি প্রাচীন দ্বীনি শিক্ষাপ্রতিষ্ঠান</Text>

      <Text style={styles.description}>
        জামিআতুল লতীফ একটি স্বনামধন্য মাদ্রাসা, যেখানে ছাত্রদের কুরআন, হাদিস,
        এবং ইসলামী শিক্ষার পাশাপাশি আধুনিক শিক্ষাও প্রদান করা হয়।
      </Text>
      <Text className="bg-red-500">আপনার মাদ্রাসার বার্তা এখানে</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>যোগাযোগ করুন</Text>
      </TouchableOpacity>
      <Button  title="যোগাযোগ করুন"/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f4f8',
  },
  title: {
    fontSize: 28,
    color: '#0f172a',
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'NotoSerifBengali-Regular',
  },
  subtitle: {
    fontSize: 18,
    color: '#374151',
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'NotoSerifBengali-Regular',
  },
  description: {
    fontSize: 16,
    color: '#4b5563',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 24,
    fontFamily: 'NotoSerifBengali-Regular',
  },
  button: {
    backgroundColor: '#0f172a',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    fontFamily: 'NotoSerifBengali-Regular',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'NotoSerifBengali-Regular',
  },
});

export default HomeScreen;
