import React from 'react';
import {Text, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import TestComp from './components/text-comp';
import OnPress from './components/on-press';
import InputComponent from './components/input';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Grid from './components/grid';

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Navbar />
      {/* <Text style={styles.title}>জামিআতুল লতীফ রূপগঞ্জ</Text>
      <Text style={styles.subtitle}>একটি প্রাচীন দ্বীনি শিক্ষাপ্রতিষ্ঠান</Text> */}

      {/* <Text style={styles.description}>
        জামিআতুল লতীফ একটি স্বনামধন্য মাদ্রাসা, যেখানে ছাত্রদের কুরআন, হাদিস,
        এবং ইসলামী শিক্ষার পাশাপাশি আধুনিক শিক্ষাও প্রদান করা হয়।
      </Text>
      <Text style={styles.description}>
        Rashed Abdullah
      </Text>
      <Text className="bg-red-500">আপনার মাদ্রাসার বার্তা এখানে</Text>

      <InputComponent />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>যোগাযোগ করুন</Text>
      </TouchableOpacity>
      <OnPress title="Props provided" />
      <TestComp /> */}

      <Grid />
      <Footer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',

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
