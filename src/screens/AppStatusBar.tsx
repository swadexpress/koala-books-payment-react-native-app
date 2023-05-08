/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import {StyleSheet, StatusBar, View} from 'react-native';
import {COLORS} from '../constants';
// import { COLORS } from '../../../../constants';
// import {COLORS} from '../../../constants';

const AppStatusBar = () => {
  return (
    <View style={{backgroundColor: COLORS.white}}>
      <StatusBar
        animated={true}
        barStyle={'dark-content'}
        translucent
        backgroundColor="transparent"
      />
    </View>
  );
};

const BAR_HEIGHT = StatusBar.currentHeight;

const styles = StyleSheet.create({
  statusBar: {
    height: BAR_HEIGHT,
  },
});

export default AppStatusBar;
