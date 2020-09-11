import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

export function Item1() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>1</Text>
    </View>
  );
}
export function Item2() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>2</Text>
    </View>
  );
}
export function Item3() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>1</Text>
    </View>
  );
}
export default function ScrollableViewScreen() {
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
        <Text style={{color: 'white', fontSize: 20}}>ScrollableViewScreen</Text>
      </TouchableOpacity>
      <ScrollableTabView>
        <Item1 tabLabel="React" />
        <Item2 tabLabel="Flow" />
        <Item3 tabLabel="Jest" />
      </ScrollableTabView>
    </View>
  );
}
