/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screen/Home';
import FlatListScreen from './src/screen/FlatLists';
import UseEffectScreen from './src/screen/UseEffectScreen';
import UseReducerScreen from './src/screen/UseReducerScreen';
import ReRenderItemFlatList from './src/screen/ReRenderItemFlatList';
import RNMap from './src/screen/RNMap';
import MapViewScreen from './src/screen/MapViewScreen'
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="FlatLists" component={FlatListScreen} />
        <Stack.Screen name="UseEffects" component={UseEffectScreen} />
        <Stack.Screen name="UseReducerScreen" component={UseReducerScreen} />
        <Stack.Screen
          name="ReRenderItemFlatList"
          component={ReRenderItemFlatList}
        />
        <Stack.Screen name="RNMap" component={RNMap} />
        <Stack.Screen name="MapView" component={MapViewScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
