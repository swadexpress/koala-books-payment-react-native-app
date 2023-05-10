/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
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
  const [fullName, setFullName] = useState<any>();
  const [phoneNumber, setPhoneNumber] = useState<any>();
  const [selectedOption, setSelectedOption] = useState<any>();
  const [examineeNumber, setExamineeNumber] = useState<any>();
  const [correctAns, setCorrectAns] = useState<any>([]);
  const [wrongAns, setWrongAns] = useState<any>([]);

  async function onHandelChangeScreen() {
    navigation.navigate('AnswerSheetScreen', {
      data: route?.params?.data,
    });
  }
  async function onHandelFinish() {
    navigation.replace('AllQuestionScreen');
  }

  async function loadingData() {
    let fullNameLoad = await AsysncStorage.getItem('@fullName');
    let phoneNumberLoad = await AsysncStorage.getItem('@phoneNumber');
    let selectedOptionLoad = await AsysncStorage.getItem('@selectedOption');
    let examineeNumberLoad = await AsysncStorage.getItem('@examineeNumber');
    setFullName(fullNameLoad);
    setPhoneNumber(phoneNumberLoad);
    setSelectedOption(selectedOptionLoad);
    setExamineeNumber(examineeNumberLoad);
    let correctAnsUpdate = [];
    let wrongAnsUpdate = [];

    if (route?.params?.data) {
      for (let i = 0; i < route?.params?.data?.length; i++) {
        if (
          route.params.data[i]?.selected == route.params.data[i]?.correct_answer
        ) {
          let v = route.params.data[i].id;
          correctAnsUpdate.push(v);
        } else {
          let v = route.params.data[i].id;
          wrongAnsUpdate.push(v);
        }
      }

      setWrongAns(wrongAnsUpdate);
      setCorrectAns(correctAnsUpdate);
    }
  }

  useEffect(() => {
    loadingData();
  }, []);

  // console.log(correctAns,'correctAns')

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
            Results
          </Text>
        </View>

        <View
          style={{
            // marginTop: 40,
            justifyContent: 'center',
            // alignItems: 'center',
            flex: 1,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 20,
            }}>
            <View
              style={{
                // width: SIZES.width * 0.4,
                // height: 50,
                // borderWidth: 1,
                // borderColor: COLORS.gray30,
                alignItems: 'center',
                justifyContent: 'center',
                // borderRadius:5
              }}>
              <Text
                style={{fontWeight: '700', fontSize: 17, color: COLORS.black}}>
                {correctAns?.length}
              </Text>
              <Text
                style={{fontWeight: '700', fontSize: 13, color: COLORS.black}}>
                Correct Answer
              </Text>
            </View>

            <View
              style={{
                // width: SIZES.width * 0.4,
                // height: 50,
                // borderWidth: 1,
                // borderColor: COLORS.gray30,
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 50,
                // borderRadius:5
              }}>
              <Text
                style={{
                  fontWeight: '700',
                  fontSize: 17,
                  color: COLORS.primary2,
                }}>
                {wrongAns?.length}
              </Text>
              <Text
                style={{
                  fontWeight: '700',
                  fontSize: 13,
                  color: COLORS.primary2,
                }}>
                Wrong Answer
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 20,
            }}>
            <View
              style={{
                width: SIZES.width * 0.4,
                // height: 50,
                borderWidth: 1,
                borderColor: COLORS.gray80,
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 50,
                // borderRadius:5
                flexDirection: 'row',
                marginTop: 30,
                borderRadius: 5,
              }}>
              <Text
                style={{
                  fontWeight: '700',
                  fontSize: 22,
                  color: COLORS.black,
                  marginTop: 10,
                  marginBottom: 10,
                }}>
                {correctAns?.length}
              </Text>
              <Text
                style={{
                  fontWeight: '700',
                  fontSize: 25,
                  color: COLORS.black,
                }}>
                /
              </Text>
              <Text
                style={{
                  fontWeight: '700',
                  fontSize: 22,
                  color: COLORS.black,
                }}>
                {route.params.data?.length}
              </Text>
            </View>
          </View>

          <View
            style={{
              alignItems: 'center',
            }}>
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
                {examineeNumber}
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
                {fullName}
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
                {phoneNumber}
              </Text>
            </View>
          </View>

          <View
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 10,
              alignItems: 'center',
              justifyContent: 'space-around',
              flexDirection: 'row',
            }}>
            <TouchableOpacity onPress={onHandelChangeScreen}>
              <View
                style={{
                  backgroundColor: COLORS.primary,
                  height: 40,
                  width: SIZES.width * 0.4,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 5,
                }}>
                <Text style={{fontWeight: 'bold', color: COLORS.white}}>
                  Answer Sheet
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={onHandelFinish}>
              <View
                style={{
                  backgroundColor: COLORS.primary,
                  height: 40,
                  width: SIZES.width * 0.4,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 5,
                }}>
                <Text style={{fontWeight: 'bold', color: COLORS.white}}>
                  Finish
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default ExamineersInformationScreen;
