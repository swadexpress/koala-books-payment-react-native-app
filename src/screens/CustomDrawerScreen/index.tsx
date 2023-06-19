/* eslint-disable prettier/prettier */
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
  LayoutAnimation,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FromInput from './FromInput';
import AppStatusBar from '../AppStatusBar';
import Header from '../../components/DrawerHeader/Index';
import {Drawer} from 'react-native-drawer-layout';
import CustomDrawerScreen from '../CustomDrawerScreen';
import SubscriptionScreen from '../SubscriptionScreen';
import {loadDrawerOpenAndClose} from '../../stores/actions/productActions';
import {BlurView} from '@react-native-community/blur';
// import FromInput from '../LogInScreen/FromInput';

const data = [
  {
    name: 'Startseite',
    image: icons.home,
    screen: 'HomeScreen',
    id: 1,
  },
  {
    name: 'Einstellungen',
    image: icons.setting,
    screen: '',
    id: 2,
  },

  {
    name: 'Abo verwalten',
    image: icons.setting,
    screen: 'UnsereAboAngeboteScreen',
    id: 3,
  },
  {
    name: 'Bewerten',
    image: icons.star,
    screen: '',
    id: 3,
    isPaid: true,
  },
  {
    name: 'Feedback',
    image: icons.home,
    screen: '',
    id: 3,
    isPaid: true,
  },
  {
    name: 'Teilen',
    image: icons.home,
    screen: '',
    id: 3,
    isPaid: true,
  },
  {
    name: 'Abmelden',
    image: icons.home,
    screen: '',
    id: 3,
    isPaid: true,
  },
  {
    name: 'Impressum',
    image: icons.home,
    screen: 'Impressum',
    id: 3,
    isPaid: true,
  },
  {
    name: 'AGB & DSVGO',
    image: icons.home,
    screen: '',
    id: 3,

    isPaid: true,
  },
];

const Home = () => {
  const navigation = useNavigation();
  const {userProfile, myRoomsData} = useSelector((state: any) => state.product);
  const [fullName, setFullName] = useState<any>();
  const [phoneNumber, setPhoneNumber] = useState<any>();
  const appState = useRef(AppState.currentState);
  const [open, setOpen] = React.useState(false);
  const [expanded, setExpanded] = useState<any>(false);
  const dispatch = useDispatch();
  const changeLayout = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };
  return (
    <>
      {/* ==============Cross button =================== */}

      <BlurView
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
        blurType="light"
        blurAmount={8}
        reducedTransparencyFallbackColor="white"
      />
    <Text
            style={{
              fontSize: SIZES.width * 0.05,
              fontWeight: '700',
              color: COLORS.black,
              marginTop: 10,
            }}>
            Dolly Buster
          </Text>


      
    </>
  );
};

export default Home;
