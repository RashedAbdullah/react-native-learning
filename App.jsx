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
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AsyncStorate from './components/async-storage';
import ImageFrontAndBack from './components/image';

const App = () => {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  const Tab = createBottomTabNavigator();
  const TopTab = createMaterialTopTabNavigator();

  const getTabBarIcon = (routeName, focused, color, size) => {
    let icon;
    if (routeName === 'Home') {
      icon = focused ? 'home' : 'home-outline';
    } else if (routeName === 'About') {
      icon = focused ? 'person' : 'person-outline';
    } else if (routeName === 'Projects') {
      icon = focused ? 'tv' : 'tv-outline';
    }
    return <Icon name={icon} size={size} />;
  };
  return (
    <>
      {/* <View>
        <Text>Rashed Abdullah</Text>
        <Button title="Test" onPress={() => console.log('Hello Rotues')} />
      </View> */}
      {/* <NavigationContainer> */}
      {/* <Drawer.Navigator>
          <Drawer.Screen name="Home" component={HomePage} />
          <Drawer.Screen name="About" component={AboutPage} />
          <Drawer.Screen name="Projects" component={ProjectsPage} />
        </Drawer.Navigator> */}

      {/* <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) =>
              getTabBarIcon(route.name, focused, color, size),
          })}>
          <Tab.Screen name="Home" component={HomePage} />
          <Tab.Screen name="Projects" component={ProjectsPage} />
          <Tab.Screen name="About" component={AboutPage} />
        </Tab.Navigator> */}

      {/* <TopTab.Navigator>
          <TopTab.Screen name="SIGNIN" component={SigninPage} />
          <TopTab.Screen name="HOME" component={HomePage} />
          <TopTab.Screen name="PROJECTS" component={ProjectsPage} />
          <TopTab.Screen name="ABOUT" component={AboutPage} />
        </TopTab.Navigator> */}

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
      {/* </NavigationContainer> */}

      <View>
        {/* <AsyncStorate /> */}
        {/* <ImageFrontAndBack /> */}
      </View>
    </>
  );
};

export default App;
