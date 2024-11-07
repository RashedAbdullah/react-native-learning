import {View, Text, Button} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './navigations/home';
import AboutPage from './navigations/about';
import ProjectsPage from './navigations/projects';
import SigninPage from './navigations/signin';
import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <>
      {/* <View>
        <Text>Rashed Abdullah</Text>
        <Button title="Test" onPress={() => console.log('Hello Rotues')} />
      </View> */}
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={HomePage} />
          <Drawer.Screen name="About" component={AboutPage} />
          <Drawer.Screen name="Projects" component={ProjectsPage} />
        </Drawer.Navigator>

        {/* <Stack.Navigator
          screenOptions={{
            headerTintColor: 'red',
            headerStyle: {
              backgroundColor: 'aqua',
            },
            contentStyle: {
              backgroundColor: 'red',
            },

            title: '',
            headerTitle: () => <Button title="Home" onPress={() => ''} />,
            // headerRight: () => <Button title="Home" onPress={() => ''} />,
          }}>
          <Stack.Screen
            name="Signin"
            component={SigninPage}
            // options={{
            //   title: 'Sign in Page',
            //   headerTintColor: 'red',
            //   headerStyle: {
            //     backgroundColor: 'aqua',
            //   },
            // }}
          />
          <Stack.Screen
            name="Home"
            component={HomePage}
            // options={{headerShown: false}}
          />
          <Stack.Screen name="Projects" component={ProjectsPage} />
          <Stack.Screen name="About" component={AboutPage} />
        </Stack.Navigator> */}
      </NavigationContainer>
    </>
  );
};

export default App;
