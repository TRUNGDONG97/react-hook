import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function RNMap({navigation}) {
  return (
    <View style={{flex: 1, marginTop: 40}}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{
          alignItems: 'center',
          // justifyContent: 'center',
          backgroundColor: 'blue',
          paddingVertical: 10,
        }}>
        <Text style={{color: 'white', fontSize: 20}}>Map</Text>
      </TouchableOpacity>
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
            navigation.navigate('MapView');
          }}>
          <Text>MapView</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
