/* eslint-disable react-native/no-inline-styles */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useEffect, useRef, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import * as Animatable from 'react-native-animatable';
import {COLORS, icons} from '../constants';
import Menu from '../screens/LiveStream/Screen/LiveStreamHomeScreen/Menu';
// import { AllRooms } from '../screens/LiveStream/Screen/GoLibeScreen/AllRooms';
import {useDispatch, useSelector} from 'react-redux';
import {handelGoBackHome} from '../../stores/actions/productActions';
import {useNavigation} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import HorgeschichtenScreen from '../screens/HorgeschichtenScreen';
import BilderGeschichtenScreen from '../screens/BilderGeschichtenScreen';

const TabArr = [
  {
    route: 'AusmalbilderScreen',
    label: 'AusmalbilderScreen',
    type: 'Icons.Ionicons',
    activeIcon: icons.home,
    inActiveIcon: icons.home,
    component: HomeScreen,
  },
  {
    route: 'BilderGeschichtenScreen',
    label: 'Like',
    type: 'Icons.MaterialCommunityIcons',
    activeIcon: icons.bildergeschichten,
    inActiveIcon: icons.bildergeschichten,
    component: BilderGeschichtenScreen,
  },

  {
    route: 'HorgeschichtenScreen',
    label: 'Search',
    activeIcon: icons.horgeschichten,
    inActiveIcon: icons.horgeschichten,
    component: HorgeschichtenScreen,
  },
];

const Tab = createBottomTabNavigator();

const TabButton = props => {
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (focused) {
      viewRef.current.animate({
        0: {scale: 0.9, rotate: '0deg'},
        1: {scale: 1.2, rotate: '360deg'},
      });
    } else {
      viewRef.current.animate({
        0: {scale: 1.2, rotate: '360deg'},
        1: {scale: 1, rotate: '0deg'},
      });
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}
      activeOpacity={1}
      style={styles.container}>
      {item.route == 'Go Live' ? (
        <View
          style={{
            backgroundColor: COLORS.white,
            width: 60,
            height: 30,
            position: 'absolute',
            top: -20,
            borderTopRightRadius: 100,
            borderTopLeftRadius: 100,
          }}
        />
      ) : null}

      <Animatable.View ref={viewRef} duration={1000} style={styles.container}>
        <Image
          source={item.activeIcon}
          style={{
            width: 20,
            height: 20,
            borderRadius: 10,
            tintColor: focused ? COLORS.primary : COLORS.gray30,
          }}
        />
      </Animatable.View>
    </TouchableOpacity>
  );
};

export default function BottomNavigator() {
  const onMenuItemSelected = item => {};
  const {goBackHome, openAndCloseSideBarMenu} = useSelector(
    (state: any) => state.product,
  );
  const navigation = useNavigation();

  // console.log(openAndCloseSideBarMenu,'openAndCloseSideBarMenu')
  const dispatch = useDispatch();

  const [tabArr, setTabArr] = useState<any>();

  // useEffect(() => {
  //   // setTabArr(null);
  //   setTabArr(TabArr);
  // }, [goBackHome]);

  console.log(goBackHome);

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 60,
            position: 'absolute',
            bottom: 0,
            right: 0,
            left: 0,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
          },
        }}>
        {TabArr &&
          TabArr.map((item, index) => {
            return (
              <Tab.Screen
                key={index}
                name={item.route}
                component={item.component}
                options={{
                  tabBarShowLabel: false,
                  tabBarButton: props => <TabButton {...props} item={item} />,
                }}
              />
            );
          })}
      </Tab.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
