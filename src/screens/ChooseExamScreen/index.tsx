/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {COLORS, SIZES, icons, images} from '../../constants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import FromInput from './FromInput';
import AppStatusBar from '../AppStatusBar';
import {RadioButton} from 'react-native-paper';
// import { ScrollView } from 'react-native-gesture-handler';

// import AppStatusBar from '../../AppStatusBar';

const ChooseExamScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const {userProfile, myRoomsData} = useSelector((state: any) => state.product);
  const [fullName, setFullName] = useState<any>();
  const [phoneNumber, setPhoneNumber] = useState<any>();
  const [selectedOption, setSelectedOption] = useState<any>('UBT');

  async function onHandelChangeScreen() {
    var  examineeNumber =
      Math.round(Math.random() * 10000000000) +
      Math.round(Math.random() * 10000000000) +
      Math.round(Math.random() * 10000000000);
    navigation.navigate('ExamineersInformationScreen', {
      fullName: route.params.fullName,
      phoneNumber: route.params.phoneNumber,
      selectedOption: selectedOption,
      examineeNumber: examineeNumber,
    });
  }
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

        <View
          style={{
            alignItems: 'center',
            backgroundColor: COLORS.white,
            marginTop: 20,
          }}>
          <RadioButton.Group
            onValueChange={newValue => setSelectedOption(newValue)}
            value={selectedOption}>
            <View style={{flexDirection: 'row'}}>
              <RadioButton value="UBT" />
              <Text
                style={{
                  marginTop: 8,
                  color: COLORS.black,
                  fontWeight: 'bold',
                  marginLeft: 4,
                }}>
                UBT
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <RadioButton value="CBT" />
              <Text
                style={{
                  marginTop: 9,
                  color: COLORS.black,
                  fontWeight: 'bold',
                  marginLeft: 4,
                }}>
                CBT
              </Text>
            </View>
          </RadioButton.Group>
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
    </>
  );
};

export default ChooseExamScreen;
