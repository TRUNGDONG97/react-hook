import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';// remove PROVIDER_GOOGLE import if not using Google Maps
export default function MapViewScreen({navigation}) {
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
        <Text style={{color: 'white', fontSize: 20}}>Map</Text>
      </TouchableOpacity>
      <View style={{flex:1}}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
