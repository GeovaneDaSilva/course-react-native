import React from 'react';
import {Text, View} from 'react-native';
import {loginStyles} from './src/themes/HeaderTheme';

export const HeaderTop = () => {
  return (
    <View>
      <Text style={loginStyles.header}> We create your APP</Text>
    </View>
  );
};
