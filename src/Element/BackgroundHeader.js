import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Platform,Dimensions} from 'react-native';
import Svg, { Circle, Rect, Path, SvgUri,SvgCssUri } from "react-native-svg";
const width=Dimensions.get('window').width
const width10 = width - 10;
export default function BackgroundHeader() {
  return (
    <View style={[StyleSheet.absoluteFill,
        { }]}>
      <Svg height="100%" width="100%" >
        <Rect
          x="0"
          y="0"
          width={width}
          height="151"
          fill={"blue"}
        />
        <Path
          d={'M0,150 C10,170 ' + width10 + ',170 ' + width + ',150'}
          fill={"blue"}
        />
      </Svg>
    </View>
  );
}
