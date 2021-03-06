import React, { PropTypes, Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  PickerIOS
} from 'react-native';
import THEME from '../styles/variables';

export default function(props){
  return <View style={[styles.itemContainer,props.containerStyle]}>
    <TouchableOpacity onPress={props.onPress}>
      <Text style={[styles.itemText,props.textStyle]}>{props.children}</Text>
    </TouchableOpacity>
  </View>;
}
let styles =  StyleSheet.create({
  itemContainer:{
    padding:20,
    alignItems:'center',
    borderBottomWidth:1,
    borderBottomColor: THEME.contentBorderColor
  },
  itemText:{
    fontSize:17,
    fontWeight:'600',
    color:THEME.mainHighlightColor
  }
});
