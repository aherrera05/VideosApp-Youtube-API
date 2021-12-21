import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { Constants } from 'expo-constants';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {MaterialIcons} from '@expo/vector-icons';
import Home from './src/components/screens/Home';
import Search from './src/components/screens/Search';
import Constant from 'expo-constants';
import VideoPlayer from './src/components/screens/VideoPlayer';
import Explore from './src/components/screens/Explore';
import { reducer } from './src/reducers/reducer';

import {Provider, useSelector} from 'react-redux';
import {createStore} from 'redux';

const store= createStore(reducer);

const Stack= createNativeStackNavigator();
const Tabs= createBottomTabNavigator();

const RootHome=()=>{
  return(
    <Tabs.Navigator 
  
    screenOptions={({ route }) => ({
      tabBarIcon: ({  color }) => {
        let iconName;
  
        if (route.name === 'Home') {
          iconName ='home';
        } else if (route.name === 'explore') {
          iconName = 'explore';
        }
        //retorna componentes
        return <MaterialIcons name={iconName} size={32} color={color} />;
      },})}
      tabBarOptions={{
      tabBarActiveTintColor: 'red',
      tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tabs.Screen name="Home" component={Home}/>
      
      <Tabs.Screen name="explore" component={Explore}/>
      
    </Tabs.Navigator>
  )
}

export default function App() {
  return (
    <Provider store={store}>

    <Navigation />
    </Provider>
    
  );
}

export function Navigation() {

  let currentTheme = useSelector(state=>{
    return state
  })
  return (
 
      <NavigationContainer >
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="rootHome" component={RootHome} />
          <Stack.Screen name="search" component={Search} />
          <Stack.Screen name="videoplayer" component={VideoPlayer} />
        </Stack.Navigator>
      </NavigationContainer>
   
  );
}


