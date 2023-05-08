/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {COLORS, SIZES, icons, images} from '../../constants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FromInput from './FromInput';
import AppStatusBar from '../AppStatusBar';
import {RadioButton} from 'react-native-paper';
// import { ScrollView } from 'react-native-gesture-handler';
import AsysncStorage from '@react-native-community/async-storage';

// import AppStatusBar from '../../AppStatusBar';

const ExamineersInformationScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  async function onHandelChangeScreen() {
    navigation.navigate('AllQuestionScreen');
    await AsysncStorage.removeItem('@fullName');
    await AsysncStorage.removeItem('@phoneNumber');
    await AsysncStorage.removeItem('@username');
    await AsysncStorage.removeItem('@selectedOption');
    await AsysncStorage.removeItem('@examineeNumber');
    await AsysncStorage.setItem('@fullName', route.params.fullName);
    await AsysncStorage.setItem('@phoneNumber', route.params.phoneNumber);
    await AsysncStorage.setItem('@selectedOption', route.params.selectedOption);
    await AsysncStorage.setItem(
      '@examineeNumber',
      route.params.examineeNumber.toString(),
    );
  }
  return (
    <>
      <AppStatusBar />

      <View
        style={{
          flex: 1,
          // justifyContent: 'center',
          // alignItems: 'center',
          backgroundColor: COLORS.white,
        }}>
        <View
          style={{
            marginTop: StatusBar.currentHeight + 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontWeight: '700', color: COLORS.black, fontSize: 17}}>
            Examinee's Information
          </Text>
        </View>

        <View
          style={{
            // marginTop: 40,
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}>
          <Image
            source={images.profile}
            resizeMode="contain"
            style={{
              width: SIZES.width * 0.35,
              height: SIZES.width * 0.35,
              // marginTop: '-20%',
              // tintColor: COLORS.black,
              // opacity: 0.7,
            }}
          />

          <View
            style={{
              borderBottomColor: COLORS.gray30,
              borderBottomWidth: 0.6,
              width: SIZES.width * 0.9,
              marginTop: 30,
            }}>
            <Text
              style={{fontWeight: '700', color: COLORS.black, fontSize: 17}}>
              Examinee's number
            </Text>
            <Text
              style={{
                fontWeight: '500',
                color: COLORS.black,
                fontSize: 15,
                marginBottom: 8,
                marginTop: 2,
              }}>
              {route.params.examineeNumber}
            </Text>
          </View>
          <View
            style={{
              borderBottomColor: COLORS.gray30,
              borderBottomWidth: 0.6,
              width: SIZES.width * 0.9,
              marginTop: 20,
            }}>
            <Text
              style={{fontWeight: '700', color: COLORS.black, fontSize: 17}}>
              Name
            </Text>
            <Text
              style={{
                fontWeight: '500',
                color: COLORS.black,
                fontSize: 15,
                marginBottom: 8,
                marginTop: 2,
              }}>
              {route.params.fullName}
            </Text>
          </View>
          <View
            style={{
              borderBottomColor: COLORS.gray30,
              borderBottomWidth: 0.6,
              width: SIZES.width * 0.9,
              marginTop: 20,
            }}>
            <Text
              style={{fontWeight: '700', color: COLORS.black, fontSize: 17}}>
              Phone Number
            </Text>
            <Text
              style={{
                fontWeight: '500',
                color: COLORS.black,
                fontSize: 15,
                marginBottom: 8,
                marginTop: 2,
              }}>
              {route.params.phoneNumber}
            </Text>
          </View>

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
      </View>
    </>
  );
};

export default ExamineersInformationScreen;
