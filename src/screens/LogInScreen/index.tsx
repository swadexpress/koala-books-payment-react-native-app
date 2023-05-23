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
import CustomDrawerScreen from '../CustomDrawerScreen';
import {Drawer} from 'react-native-drawer-layout';
// import { ScrollView } from 'react-native-gesture-handler';

// import AppStatusBar from '../../AppStatusBar';

const Home = () => {
  const navigation = useNavigation();
  const {userProfile, isDrawerOpenAndClose} = useSelector((state: any) => state.product);
  const [fullName, setFullName] = useState<any>();
  const [phoneNumber, setPhoneNumber] = useState<any>();
  const appState = useRef(AppState.currentState);

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
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: COLORS.orange,
                marginTop: 5,
                borderBottomRightRadius: 50,
                borderBottomLeftRadius: 50,
                marginBottom: 15,
              }}>
              <Image
                source={images.image2}
                resizeMode="contain"
                style={{
                  width: SIZES.width,
                  height: SIZES.width * 0.6,
                  borderBottomRightRadius: 50,
                  borderBottomLeftRadius: 50,
                  // marginTop:7

                  // tintColor: COLORS.black,
                  // opacity: 0.7,
                }}
              />
              <View
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  top: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: COLORS.gray20,
                    fontSize: 14,
                    fontWeight: '600',
                    marginHorizontal: 20,
                  }}>
                  Man darf nicht verlenen, die Welt mit den Auggen eines Kindes
                  zu sehen.
                </Text>
                <Text
                  style={{
                    color: COLORS.gray20,
                    fontSize: 14,

                    fontWeight: '600',
                  }}>
                  - Henry Matisse
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: '#FEFAF3',
                  marginTop: 7,
                  marginBottom: 14,
                  textAlign: 'center',
                }}>
                Anmelden
              </Text>
            </View>

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
              prependComponent={
                <View style={{justifyContent: 'center', marginLeft: -12}}>
                  <Image
                    source={icons.profile1}
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: COLORS.gray30,
                      marginRight: 5,
                    }}
                  />
                </View>
              }
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

            <View style={{alignItems: 'flex-start', width: '100%'}}>
              <Text
                style={{
                  color: '#FEFAF3',
                  fontWeight: '600',
                  fontSize: 17,
                  marginTop: 12,
                  marginHorizontal: 25,
                }}>
                Passwort vergessen?
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
            }}>
            <View
              style={{marginBottom: 20, width: '100%', alignItems: 'center'}}>
              <Text
                style={{
                  color: '#FEFAF3',
                  fontWeight: '600',
                  fontSize: 15,
                  marginHorizontal: 22,
                }}>
                Erstellen Sie aln Account und genileBen sil die Borteile elnes
                Comlloten fur dle Fantasie. ?
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('HomeScreen');
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
