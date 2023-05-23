/* eslint-disable react-native/no-inline-styles */
import {COLORS, FONTS, SIZES} from '../../constants';
import {Text, TextInput, View} from 'react-native';

import React from 'react';

const FromInput = ({
  containerStyle,
  label,
  placeholder,
  inputStyle,
  prependComponent,
  appendComponent,
  onChange,
  secureTextEntry,
  keyboardType = 'default',
  autoCompleteType = 'off',
  autoCapitalize = 'none',
  errorMsg = '',
  value,
  maxLength,
  height,
  inputContentStyle,
}: any) => {
  return (
    <View style={{...containerStyle, marginTop: 5}}>
      <Text
        style={{
          color: COLORS.gray70,
          fontWeight: '900',

          fontSize: 12,
          marginLeft: 15,
          marginBottom:-7
        }}>
        {label}
      </Text>

      <View
        style={{
          flexDirection: 'row',
          height: height ? height : 40,
          paddingHorizontal: SIZES.padding,
          marginTop: SIZES.base,
          borderRadius: SIZES.radius,
          backgroundColor: '#1239',
          ...inputContentStyle,
        }}>
        {prependComponent}

        <TextInput
          style={{
            flex: 1,
            ...inputStyle,
          }}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={COLORS.gray20}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCompleteType={autoCompleteType}
          autoCapitalize={autoCapitalize}
          maxLength={maxLength}
          onChangeText={text => onChange(text)}
        />
        {appendComponent}
      </View>
    </View>
  );
};

export default FromInput;
