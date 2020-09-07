import React, {useCallback, useRef} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function FlatListItem({item, index, indexOpen, clickItem}) {
  return (
    <View>
      <TouchableOpacity
        onPress={() => clickItem(index)}
        style={{
          backgroundColor: 'green',
          marginHorizontal: 20,
          marginTop: 20,
          padding: 10,
          borderRadius: 5,
        }}>
        <Text style={{color: 'white'}}>{item.title}</Text>
      </TouchableOpacity>
      <Text>{indexOpen}</Text>
      {index + 1 === indexOpen &&
        item.children.map((item, i) => (
          <View
            key={`${i}`}
            style={{
              backgroundColor: 'gray',
              marginHorizontal: 30,
              padding: 10,
              borderRadius: 5,
              marginTop: 5,
            }}>
            <Text>{item.name}</Text>
          </View>
        ))}
    </View>
  );
}
