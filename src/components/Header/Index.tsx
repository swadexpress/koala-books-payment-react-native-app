/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {COLORS, SIZES, icons, images} from '../../constants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  Alert,
  AppState,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FromInput from './FromInput';
import AppStatusBar from '../../screens/AppStatusBar';
import { loadDrawerOpenAndClose } from '../../stores/actions/productActions';
// import AppStatusBar from '../AppStatusBar';

const data = [
  {
    name: 'Asusmalilder',
    image: images.Pimage,
    id: 1,
  },
  {
    name: 'Asusmalilder',
    image: images.Pimage2,
    id: 2,
  },

  {
    name: 'Asusmalilder',
    image: images.Pimage3,
    id: 3,
  },
  {
    name: 'Asusmalilder',
    image: icons.profile2,
    id: 3,
    isPaid: true,
  },
];

const Header = () => {
  const navigation = useNavigation();
  const {userProfile, myRoomsData} = useSelector((state: any) => state.product);
  const [fullName, setFullName] = useState<any>();
  const [phoneNumber, setPhoneNumber] = useState<any>();
  const appState = useRef(AppState.currentState);

  const dispatch = useDispatch();

  return (
    <>
      <AppStatusBar />

      <View
        style={{
          height: 55,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: COLORS.white,
        }}>
        <TouchableOpacity
          onPress={() => dispatch(loadDrawerOpenAndClose(true))}>
          <Image
            source={icons.menu}
            style={{
              width: 35,
              height: 35,
              tintColor: COLORS.primary,
              marginRight: 10,
              marginLeft: 10,
              marginBottom: 5,
            }}
          />
        </TouchableOpacity>

        <Image
          source={icons.logo}
          style={{
            width: SIZES.width * 0.75,
            height: 35,
            marginRight: 15,
            marginBottom: 5,
          }}
        />
      </View>
    </>
  );
};

export default Header;
