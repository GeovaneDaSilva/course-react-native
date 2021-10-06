/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';

export const BackgroundLogin = () => {
  return (
    <View
      style={{
        position: 'absolute',
        backgroundColor: '#5856D6',
        top: -250,
        height: 1200,
        width: 1000,
        bottom: 0,
        transform: [{rotate: '-70deg'}],
      }}
    />
  );
};
