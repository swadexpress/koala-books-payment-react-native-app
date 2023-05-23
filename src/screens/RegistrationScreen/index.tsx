/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {COLORS, SIZES, icons, images} from '../../constants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  Alert,
  AppState,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FromInput from './FromInput';
import AppStatusBar from '../AppStatusBar';
import {loadAllQuestions} from '../../stores/actions/productActions';
import Header from '../../components/Header/Index';
// import { ScrollView } from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select';
import CustomDrawerScreen from '../CustomDrawerScreen';
import {Drawer} from 'react-native-drawer-layout';

// import AppStatusBar from '../../AppStatusBar';

const Home = () => {
  const navigation = useNavigation();
  const {userProfile, isDrawerOpenAndClose} = useSelector(
    (state: any) => state.product,
  );
  const [fullName, setFullName] = useState<any>();
  const [phoneNumber, setPhoneNumber] = useState<any>();
  const appState = useRef(AppState.currentState);
  const [gender, setGender] = useState<any>(null);
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <Drawer
        drawerStyle={{
          width: SIZES.width * 0.88,
        }}
        drawerPosition={'right'}
        open={isDrawerOpenAndClose ? isDrawerOpenAndClose : false}
        onOpen={() => {
          // setOpen(true);
        }}
        onClose={() => {
          // dispatch(loadDrawerOpenAndClose(false))
        }}
        renderDrawerContent={() => {
          return (
            <>
              <CustomDrawerScreen />
            </>
          );
        }}>
        <ImageBackground
          source={images.bgImage1}
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: COLORS.white,
          }}>
          <Text
            style={{
              color: COLORS.black,
              fontWeight: 'bold',
              fontSize: 22,
              marginTop: 15,
              marginBottom: 20,
              textAlign: 'center',
            }}>
            Registrieren
          </Text>

          <ScrollView>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 150,
              }}>
              <FromInput
                // label="Email"
                keyboardType="email-address"
                autoCompleteType="email"
                placeholder="Vorname"
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
                  fontWeight: '800',
                  fontSize: 15,
                }}
                prependComponent={null}
                secureTextEntry={undefined}
                maxLength={undefined}
                height={undefined}
                inputContentStyle={{
                  backgroundColor: COLORS.white,
                  elevation: 5,
                  borderRadius: 20,
                }}
                label={undefined}
              />
              <FromInput
                // label="Email"
                keyboardType="email-address"
                autoCompleteType="email"
                placeholder="Nachname"
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
                  fontWeight: '800',
                  fontSize: 15,
                }}
                prependComponent={null}
                secureTextEntry={undefined}
                maxLength={undefined}
                height={undefined}
                inputContentStyle={{
                  backgroundColor: COLORS.white,
                  elevation: 5,
                  borderRadius: 20,
                }}
                label={undefined}
              />
              <FromInput
                // label="Email"
                keyboardType="email-address"
                autoCompleteType="email"
                placeholder="Address"
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
                  fontWeight: '800',
                  fontSize: 15,
                }}
                prependComponent={null}
                secureTextEntry={undefined}
                maxLength={undefined}
                height={undefined}
                inputContentStyle={{
                  backgroundColor: COLORS.white,
                  elevation: 5,
                  borderRadius: 20,
                }}
                label={undefined}
              />

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 45,
                  width: SIZES.width * 0.9,
                  backgroundColor: COLORS.white,
                  marginTop: 10,
                  elevation: 5,
                  borderRadius: 20,
                }}>
                <View style={{marginTop: 2}}>
                  <RNPickerSelect
                    mode="dropdown"
                    placeholder={{
                      label: 'Land',
                      value: null,
                      fontSize: 14,
                      fontWeight: '700',
                      color: COLORS.gray90,
                    }}
                    items={[
                      {label: 'Male', value: 'Male'},
                      {label: 'Female', value: 'Female'},
                      {label: 'Other', value: 'Other'},
                    ]}
                    onValueChange={value => {
                      setGender(value);
                      // console.log(value)
                    }}
                    style={{
                      inputAndroid: {
                        width: SIZES.width * 0.82,
                        color: COLORS.gray90,
                        fontWeight: '800',
                      },
                      placeholder: {
                        fontSize: 15,
                        fontWeight: '700',
                        color: COLORS.gray20,
                        // marginTop:10
                      },
                      iconContainer: {
                        top: 9,
                        right: 0,
                      },
                    }}
                    // Icon={"position": 'absolute', "right": 0 }
                    value={gender}
                    useNativeAndroidPickerStyle={false}
                    Icon={() => {
                      return (
                        <>
                          <Image
                            source={icons.dropdown}
                            style={{
                              width: 20,
                              height: 20,
                              transform: [{rotate: '60deg'}],
                              tintColor: COLORS.orange,
                            }}
                          />
                        </>
                      );
                    }}
                  />
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 45,
                  width: SIZES.width * 0.9,
                  backgroundColor: COLORS.white,
                  marginTop: 10,
                  elevation: 5,
                  borderRadius: 20,
                  marginBottom: 30,
                }}>
                <View style={{marginTop: 2}}>
                  <RNPickerSelect
                    mode="dropdown"
                    placeholder={{
                      label: 'Bundesland',
                      value: null,
                      fontSize: 14,
                      fontWeight: '700',
                      color: COLORS.gray90,
                    }}
                    items={[
                      {label: 'Male', value: 'Male'},
                      {label: 'Female', value: 'Female'},
                      {label: 'Other', value: 'Other'},
                    ]}
                    onValueChange={value => {
                      setGender(value);
                      // console.log(value)
                    }}
                    style={{
                      inputAndroid: {
                        width: SIZES.width * 0.82,
                        color: COLORS.gray90,
                        fontWeight: '800',
                      },
                      placeholder: {
                        fontSize: 15,
                        fontWeight: '700',
                        color: COLORS.gray20,
                        // marginTop:10
                      },
                      iconContainer: {
                        top: 9,
                        right: 0,
                      },
                    }}
                    // Icon={"position": 'absolute', "right": 0 }
                    value={gender}
                    useNativeAndroidPickerStyle={false}
                    Icon={() => {
                      return (
                        <>
                          <Image
                            source={icons.dropdown}
                            style={{
                              width: 20,
                              height: 20,
                              transform: [{rotate: '60deg'}],
                              tintColor: COLORS.orange,
                            }}
                          />
                        </>
                      );
                    }}
                  />
                </View>
              </View>

              {/* ================================================= */}

              <FromInput
                // label="Email"
                keyboardType="email-address"
                autoCompleteType="email"
                placeholder="Email"
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
                  fontWeight: '800',
                  fontSize: 15,
                }}
                prependComponent={null}
                secureTextEntry={undefined}
                maxLength={undefined}
                height={undefined}
                inputContentStyle={{
                  backgroundColor: COLORS.white,
                  elevation: 5,
                  borderRadius: 20,
                }}
                label={undefined}
              />
              {/* ============================================= */}
              <FromInput
                // label="Email"
                keyboardType="email-address"
                autoCompleteType="email"
                placeholder="Password"
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
                  fontWeight: '800',
                  fontSize: 15,
                }}
                prependComponent={
                  <View style={{justifyContent: 'center', marginLeft: -12}}>
                    <Image
                      source={icons.password1}
                      style={{
                        width: 25,
                        height: 25,
                        tintColor: COLORS.gray30,
                        marginRight: 5,
                      }}
                    />
                  </View>
                }
                secureTextEntry={true}
                maxLength={undefined}
                height={undefined}
                inputContentStyle={{
                  backgroundColor: COLORS.white,
                  elevation: 5,
                  borderRadius: 20,
                }}
                label={undefined}
              />
              <FromInput
                // label="Email"
                keyboardType="email-address"
                autoCompleteType="email"
                placeholder="Password"
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
                  fontWeight: '800',
                  fontSize: 15,
                }}
                prependComponent={
                  <View style={{justifyContent: 'center', marginLeft: -12}}>
                    <Image
                      source={icons.password1}
                      style={{
                        width: 25,
                        height: 25,
                        tintColor: COLORS.gray30,
                        marginRight: 5,
                      }}
                    />
                  </View>
                }
                secureTextEntry={true}
                maxLength={undefined}
                height={undefined}
                inputContentStyle={{
                  backgroundColor: COLORS.white,
                  elevation: 5,
                  borderRadius: 20,
                }}
                label={undefined}
              />
            </View>
          </ScrollView>
          <View
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 10,
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('LogInScreen');
              }}>
              <View
                style={{
                  backgroundColor: COLORS.primary2,
                  height: 43,
                  width: SIZES.width * 0.9,
                  alignItems: 'center',
                  // justifyContent: 'center',
                  borderRadius: 20,
                  flexDirection: 'row',
                }}>
                <Image
                  source={icons.profile2}
                  style={{
                    width: 27,
                    height: 27,
                    marginLeft: 20,
                  }}
                />
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: COLORS.white,
                    marginLeft: SIZES.width * 0.21,
                    fontSize: 16,
                  }}>
                  Konto erstellen
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </Drawer>
    </>
  );
};

export default Home;
