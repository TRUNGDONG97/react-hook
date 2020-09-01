import React, {
  useEffect,
  useState,
  useRef,
  useLayoutEffect,
  useMemo,
  useCallback,
} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function UseEffectScreen({navigation}) {
  const [TextChange, setTextChange] = useState('hello');
  const [state, setState] = useState(2);
  const status = useRef(2);
  console.log('reRender');
  useEffect(() => {
    console.log('componentDidMount');
    setTextChange('hi');
    return () => {
      console.log('componentUnMount');
    };
  }, [status.current]);
  useLayoutEffect(() => {
    console.log('componentDidMount useLayoutEffect');
    return () => {
      console.log('componentUnMount useLayoutEffect');
    };
  }, [status.current]);
  const changeStatus = () => {
    status.current = status.current + 1;
    setState(state + 1);
    console.log(status.current, 'status.current');
    console.log(state, 'state');
  };
  const functionUseMemo = useCallback(
    type => {
      console.log('useMemo', type);
    },
    [],
  );
  return (
    <View style={{flex: 1, marginVertical: 40}}>
      {functionUseMemo("dsd")}
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
        <Text style={{color: 'white', fontSize: 20}}>UseEffectScreen</Text>
      </TouchableOpacity>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>{TextChange}</Text>
      </View>
      <TouchableOpacity
        onPress={changeStatus}
        style={{
          alignItems: 'center',
          // justifyContent: 'center',
          backgroundColor: 'blue',
          paddingVertical: 10,
        }}>
        <Text>ChangeStatus</Text>
      </TouchableOpacity>
    </View>
  );
}
