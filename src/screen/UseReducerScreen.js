import React, {useRef, useReducer} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function UseReducerScreen({navigation}) {
 
  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return {count: state.count + 1};
      case 'decrement':
        return {count: state.count - 1};
      case 'reset':
        return init(action.payload);
      default:
        throw new Error();
    }
  }
  const [state, dispatch] = useReducer(reducer, {count:0});
  return (
    <View style={{flex: 1, marginVertical: 40}}>
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
        <Text style={{color: 'white', fontSize: 20}}>UseReducerScreen</Text>
      </TouchableOpacity>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>{state.count}</Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{backgroundColor: 'blue', margin: 10}}
            onPress={() => {
              dispatch({type: "increment"});
            }}>
            <Text style={{margin: 10, color: 'white'}}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{backgroundColor: 'green', margin: 10}}
            onPress={() => {
              dispatch({type: "decrement"});
            }}>
            <Text style={{margin: 10, color: 'white'}}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
