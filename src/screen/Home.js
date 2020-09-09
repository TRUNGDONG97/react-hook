import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        style={{
          height: 30,
          width: '80%',
          backgroundColor: 'gray',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          navigation.navigate('FlatLists');
        }}>
        <Text>FlatList</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 30,
          width: '80%',
          backgroundColor: 'gray',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 30,
        }}
        onPress={() => {
          navigation.navigate('UseEffects');
        }}>
        <Text>UseEffect</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 30,
          width: '80%',
          backgroundColor: 'gray',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 30,
        }}
        onPress={() => {
          navigation.navigate('UseReducerScreen');
        }}>
        <Text>UseReducerScreen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 30,
          width: '80%',
          backgroundColor: 'gray',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 30,
        }}
        onPress={() => {
          navigation.navigate('ReRenderItemFlatList');
        }}>
        <Text>ReRenderItemInFlatList</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 30,
          width: '80%',
          backgroundColor: 'gray',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 30,
        }}
        onPress={() => {
          navigation.navigate('RNMap');
        }}>
        <Text>Map</Text>
      </TouchableOpacity>
    </View>
  );
}
