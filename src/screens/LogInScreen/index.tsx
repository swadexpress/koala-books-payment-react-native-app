/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {COLORS, SIZES, icons, images} from '../../constants';
import {
  AppState,
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FromInput from './FromInput';
import CustomDrawerScreen from '../CustomDrawerScreen';
import {Drawer} from 'react-native-drawer-layout';
// import { ScrollView } from 'react-native-gesture-handler';

// import AppStatusBar from '../../AppStatusBar';

const Home = () => {
  const navigation = useNavigation();
  const {userProfile, isDrawerOpenAndClose} = useSelector(
    (state: any) => state.product,
  );
  const [fullName, setFullName] = useState<any>();
  const [phoneNumber, setPhoneNumber] = useState<any>();
  const appState = useRef(AppState.currentState);

  const dispatch = useDispatch();

  return (
    <>
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
          source={images.bgImage}
          style={{
            width: '100%',
            height: '100%',
            // backgroundColor: COLORS.white,
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: StatusBar.currentHeight + 40,
            }}>
            <View
              style={{
                backgroundColor: COLORS.white,
                borderRadius: 15,
                flexDirection: 'row',
                width: SIZES.width * 0.9,
              }}>
              <Image
                source={images.top_banner_image}
                style={{
                  width: SIZES.width * 0.3,
                  height: SIZES.width * 0.3,
                  borderRadius: 20,
                  marginTop: 10,
                  marginBottom: 10,
                  marginLeft: 10,
                }}
              />
              <View
                style={{
                  marginHorizontal: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    width: SIZES.width * 0.5,
                    fontSize: 16,
                    fontWeight: '800',
                    color: COLORS.black,
                  }}>
                  “Man darf nicht verlernen, die Welt mit den Augen eines Kindes
                  zu sehen.”
                </Text>
                <Text
                  style={{
                    width: SIZES.width * 0.5,
                    fontSize: 14,
                    fontWeight: '800',
                    color: COLORS.primary,
                    marginTop: 10,
                  }}>
                  Henry Matisse
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              // justifyContent: 'center',
              // alignItems: 'center',
              backgroundColor: COLORS.white,
              flex: 1,
              marginTop: 30,
              borderTopRightRadius: 30,
              borderTopLeftRadius: 30,
            }}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text
                  style={{
                    color: COLORS.black,
                    fontWeight: '800',
                    fontSize: 24,
                    marginTop: 30,
                    marginHorizontal: 25,
                  }}>
                  Anmelden
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 20,
                }}>
                <FromInput
                  label="Email"
                  keyboardType="email-address"
                  autoCompleteType="email"
                  placeholder="Email"
                  value={fullName}
                  onChange={(value: any) => {
                    setFullName(value);
                  }}
                  // errorMsg={emailError}
                  appendComponent={
                    <View
                      style={{
                        justifyContent: 'center',
                      }}>
                      <Image
                        source={icons.checked}
                        style={{
                          width: 15,
                          height: 15,
                          tintColor: COLORS.primary,
                        }}
                      />
                    </View>
                  }
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
                    borderRadius: 10,
                    borderWidth: 0.8,
                    borderColor: '#EEE7DF',
                  }}
                />
                <FromInput
                  label="Passwort"
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
                  appendComponent={
                    <View
                      style={{
                        justifyContent: 'center',
                      }}>
                      <Image
                        source={icons.eye}
                        style={{
                          width: 20,
                          height: 20,
                          tintColor: COLORS.primary,
                        }}
                      />
                    </View>
                  }
                  containerStyle={{width: SIZES.width * 0.9}}
                  inputStyle={{
                    color: COLORS.gray90,
                    fontWeight: '800',
                    fontSize: 15,
                  }}
                  prependComponent={null}
                  secureTextEntry={true}
                  maxLength={undefined}
                  height={undefined}
                  inputContentStyle={{
                    backgroundColor: COLORS.white,
                    borderRadius: 10,
                    borderWidth: 0.8,
                    borderColor: '#EEE7DF',
                  }}
                />
              </View>

              <View
                style={{
                  alignItems: 'center',
                  marginTop: SIZES.height * 0.15,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('HomeScreen');
                  }}>
                  <View
                    style={{
                      backgroundColor: COLORS.primary,
                      height: 43,
                      width: SIZES.width * 0.9,
                      alignItems: 'center',
                      borderRadius: 10,
                      flexDirection: 'row',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        color: COLORS.white,
                        fontSize: 16,
                      }}>
                      Anmelden
                    </Text>
                  </View>
                </TouchableOpacity>

                <Text
                  style={{
                    fontWeight: '400',
                    color: COLORS.gray80,
                    fontSize: 14,
                    marginTop: 20,
                  }}>
                  Noch kein Koalabooks User?
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('RegistrationScreen');
                  }}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: COLORS.primary,
                      fontSize: 14,
                      marginTop: 20,
                    }}>
                    Jetzt neu registrieren
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </ImageBackground>
      </Drawer>
    </>
  );
};

export default Home;
