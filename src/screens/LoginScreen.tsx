/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {BackgroundLogin} from '../components/Background';
import {WhiteLogo} from '../components/WhiteLogo';
import {loginStyles} from '../themes/HeaderTheme';

export const LoginScreen = () => {
  return (
    <>
      <BackgroundLogin />
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={loginStyles.formContainer}>
          <WhiteLogo />
          <Text style={loginStyles.title}>Login</Text>
          <Text style={loginStyles.label}>Email:</Text>
          <TextInput
            placeholder="Ingrese su email:"
            placeholderTextColor="rgba(255,255,255,0.4)"
            keyboardType="email-address"
            underlineColorAndroid="white"
            style={loginStyles.inputFild}
            selectionColor="white"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <Text style={loginStyles.label}>Password:</Text>
          <TextInput
            placeholder="*******"
            placeholderTextColor="rgba(255,255,255,0.4)"
            underlineColorAndroid="white"
            style={loginStyles.inputFild}
            selectionColor="white"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <View style={loginStyles.buttonContainer}>
            <TouchableOpacity activeOpacity={0.8} style={loginStyles.button}>
              <Text style={loginStyles.titleButton}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={loginStyles.newContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => console.log('press')}>
              <Text style={loginStyles.titleButton}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};
