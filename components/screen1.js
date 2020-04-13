import React  from 'react';
import {  Text, Input}from "galio-framework";
import {View, ImageBackground,Dimensions} from 'react-native';
import theme from './Theme';
const {width,height} = Dimensions.get("screen");
export default class screen1 extends React.Component {

  render() {
    return (
        <ImageBackground source={require('../assets/images/bg.jpg')} style={{width, height,zIndex:1}}>
      <View>
        <Text> Sign Up With </Text>
        <Input placeholder="theme" color={theme.COLORS.THEME} style={{ borderColor: theme.COLORS.THEME }} placeholderTextColor={theme.COLORS.THEME} />
      </View>
      </ImageBackground>
    );
  }
}
