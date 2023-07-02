/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {COLORS, SIZES, icons, images} from '../../constants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  Alert,
  AppState,
  Button,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FromInput from './FromInput';
import AppStatusBar from '../AppStatusBar';
import Header from '../../components/DrawerHeader/Index';
import {Drawer} from 'react-native-drawer-layout';
import CustomDrawerScreen from '../CustomDrawerScreen';
import AuthLayout from '../CustomDrawerScreen/AuthLayout';
import {loadDrawerOpenAndClose} from '../../stores/actions/productActions';
import DrawerHeader from '../../components/DrawerHeader/Index';

const data = [
  {
    name: 'Ausmalbilder',
    image: images.ausmalbilder,
    bagImage: images.PbgImage1,
    id: 1,
  },
  {
    name: 'Bilder geschichten',
    image: images.bilderGeschichten,
    bagImage: images.PbgImage1,
    id: 2,
  },

  {
    name: 'Hörgeschichten',
    image: images.horgeschichten,
    bagImage: images.PbgImage1,
    id: 3,
  },
  {
    name: 'Anmelden',
    image: images.anmelden,
    bagImage: images.PbgImage1,
    id: 3,
    isPaid: true,
  },
];

const Home = () => {
  const navigation = useNavigation();
  const {userProfile, isDrawerOpenAndClose} = useSelector(
    (state: any) => state.product,
  );
  const [fullName, setFullName] = useState<any>();
  const [phoneNumber, setPhoneNumber] = useState<any>();
  const appState = useRef(AppState.currentState);
  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadDrawerOpenAndClose(false));
  }, [0]);

  return (
    <>
      <pixobe-coloring-book />

    </>
  );
};

export default Home;
