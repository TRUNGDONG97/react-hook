import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {dataFla} from '../Mockup/dataFlatList';
import FlatListItem from '../Element/FlatListItem';
export default function ReRenderItemFlatList({navigation}) {
  const [indexItem, setIndexItem] = useState(0);
  const clickItem = index => {
    setIndexItem(index+1)
  };
  const renderItem = ({item, index}) => {
    return (
      <FlatListItem
        item={item}
        index={index}
        indexOpen={indexItem}
        clickItem={clickItem}
      />
    );
  };
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
        <Text style={{color: 'white', fontSize: 20}}>ReRenderItemFlatList</Text>
      </TouchableOpacity>
      <FlatList
        data={dataFla}
        renderItem={renderItem}
        keyExtractor={item => item.id + ''}
      />
    </View>
  );
}
