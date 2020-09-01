import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

export default function FlatLists({navigation}) {
  console.log('reRender');
  // const [isLoadingRefresh, setStateIsLoadingRefresh] = useState(false);
  const [data, setData] = useState([]);
  const page = useRef(1);
  const size = useRef(8);
  const isLoadingRefresh = useRef(false);
  useEffect(() => {
    onDidMount();
    return () => {};
  }, []);

  const onDidMount = async () => {
    try {
      const res = await fetchApi();
      console.log(res);
      setData(res);
      console.log('res', res);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchApi = async () => {
    var api = `https://jsonplaceholder.typicode.com/posts?_limit=${
      size.current
    }&&_page=${page.current}`;
    const res = await fetch(api);
    const response = await res.json();
    return response;
  };
  const onRefresh = async () => {
    page.current = 1;
    // setStateLoading(true);
    const reData = await fetchApi();
    console.log('reData', reData);
    setData(reData);
  };
  const renderFooter = () => {
    return <ActivityIndicator style={{marginTop: 10}} />;
  };
  const onLoadMore = async () => {
    page.current = page.current + 1;
    const newData = await fetchApi();
    console.log('newDAta', newData);
    setData([...data, ...newData]);
  };
  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          marginHorizontal: 20,
          padding: 5,
          borderWidth: 1,
          marginTop: 10,
        }}>
        <Text style={{fontWeight: 'bold'}}>{item.title}</Text>
        <Text>{item.body}</Text>
      </View>
    );
  };
  return (
    <View style={{flex: 1, marginVertical: 40}}>
      <TouchableOpacity
      onPress={()=>{
        navigation.goBack()
      }}
        style={{
          alignItems: 'center',
          // justifyContent: 'center',
          backgroundColor: 'blue',
          paddingVertical: 10,
        }}>
        <Text style={{color: 'white',fontSize:20}}>FlatList</Text>
      </TouchableOpacity>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        refreshing={isLoadingRefresh.current}
        onRefresh={onRefresh}
        onEndReachedThreshold={0.2}
        onEndReached={onLoadMore}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
}
