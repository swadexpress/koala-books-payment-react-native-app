/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {COLORS, SIZES, icons, images} from '../../constants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  AppState,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FromInput from './FromInput';
import AppStatusBar from '../AppStatusBar';
import {loadAllQuestions} from '../../stores/actions/productActions';
// import { ScrollView } from 'react-native-gesture-handler';

// import AppStatusBar from '../../AppStatusBar';

const Home = () => {
  const navigation = useNavigation();
  const {userProfile, myRoomsData} = useSelector((state: any) => state.product);
  const [fullName, setFullName] = useState<any>();
  const [phoneNumber, setPhoneNumber] = useState<any>();
  const appState = useRef(AppState.currentState);

  const dispatch = useDispatch();
  async function onHandelChangeScreen() {
    navigation.navigate('ChooseExamScreen', {
      fullName: fullName,
      phoneNumber: phoneNumber,
    });
  }

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        console.log('App has come to the foreground!');
        dispatch(loadAllQuestions());
      }

      appState.current = nextAppState;
    });

    return () => subscription.remove();
  }, []);

  useEffect(() => {
    dispatch(loadAllQuestions());
  }, []);

  return (
    <>
      <AppStatusBar />

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: COLORS.white,
        }}>
        <Image
          source={images.profile}
          resizeMode="contain"
          style={{
            width: SIZES.width * 0.35,
            height: SIZES.width * 0.35,
            marginTop: '-20%',
            // tintColor: COLORS.black,
            // opacity: 0.7,
          }}
        />

        <FromInput
          // label="Email"
          keyboardType="email-address"
          autoCompleteType="email"
          placeholder="Full Name"
          value={fullName}
          onChange={(value: any) => {
            // utils.validateEmail(value,setEmailError)
            // console.log(value)
            setFullName(value);
          }}
          // errorMsg={emailError}
          appendComponent={null}
          containerStyle={{width: SIZES.width * 0.9}}
          inputStyle={{
            color: COLORS.gray90,
            fontWeight: '600',
          }}
          prependComponent={
            <View style={{justifyContent: 'center'}}>
              <Image
                source={icons.profile}
                style={{
                  width: 22,
                  height: 22,
                  tintColor: COLORS.primary,
                  marginRight: 10,
                }}
              />
            </View>
          }
          secureTextEntry={undefined}
          maxLength={undefined}
          height={undefined}
          inputContentStyle={{
            backgroundColor: COLORS.white,
            borderRadius: 0,
            // elevation: 5,
            borderBottomWidth: 1,
            borderColor: COLORS.gray10,
          }}
          label={undefined}
        />

        <FromInput
          // label="Email"
          keyboardType="numeric"
          autoCompleteType="email"
          placeholder="Mobile no."
          value={phoneNumber}
          onChange={(value: any) => {
            // utils.validateEmail(value,setEmailError)
            // console.log(value)
            setPhoneNumber(value);
          }}
          // errorMsg={emailError}
          appendComponent={null}
          containerStyle={{width: SIZES.width * 0.9}}
          inputStyle={{
            color: COLORS.gray90,
            fontWeight: '600',
          }}
          prependComponent={
            <View style={{justifyContent: 'center'}}>
              <Image
                source={icons.call}
                style={{
                  width: 22,
                  height: 22,
                  tintColor: COLORS.primary,
                  marginRight: 10,
                }}
              />
            </View>
          }
          secureTextEntry={undefined}
          maxLength={undefined}
          height={undefined}
          inputContentStyle={{
            backgroundColor: COLORS.white,
            borderRadius: 0,
            // elevation: 5,
            borderBottomWidth: 1,
            borderColor: COLORS.gray10,
          }}
          label={undefined}
        />

        <TouchableOpacity
          style={{marginTop: 30}}
          onPress={onHandelChangeScreen}>
          <View
            style={{
              backgroundColor: COLORS.primary,
              height: 40,
              width: SIZES.width * 0.8,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 5,
            }}>
            <Text style={{fontWeight: 'bold', color: COLORS.white}}>
              Sign In
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Home;
