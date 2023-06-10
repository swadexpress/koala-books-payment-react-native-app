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
// import FromInput from '../LogInScreen/FromInput';

const data = [
  {
    name: 'Startseite',
    image: icons.home,
    id: 1,
  },
  {
    name: 'Einstellungen',
    image: icons.setting,
    id: 2,
  },

  {
    name: 'Abo wechsel / Upgrade',
    image: icons.setting,
    id: 3,
  },
  {
    name: 'Bewerten',
    image: icons.star,
    id: 3,
    isPaid: true,
  },
  {
    name: 'Feedback',
    image: icons.home,
    id: 3,
    isPaid: true,
  },
  {
    name: 'Teilen',
    image: icons.home,
    id: 3,
    isPaid: true,
  },
  {
    name: 'Abmelden',
    image: icons.home,
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
      <ImageBackground
        source={images.slidemeu}
        style={{
          width: '100%',
          height: '110%',
          backgroundColor: COLORS.white,
          marginTop: -100,
        }}>
        {/* ==============Cross button =================== */}

        <View
          style={{
            alignItems: 'flex-end',
            marginTop: 115,
            marginRight: 15,
          }}>
          {!expanded ? (
            <TouchableOpacity
              onPress={() => {
                setExpanded(false);
                dispatch(loadDrawerOpenAndClose(false));
              }}>
              <Image
                source={icons.cross}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: COLORS.white,
                }}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                setExpanded(!expanded);
              }}>
              <Image
                source={icons.cross}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: COLORS.primary,
                }}
              />
            </TouchableOpacity>
          )}
        </View>

        {/* ==============user details =================== */}

        {/* ==============user details =================== */}

        <View
          style={{
            height: expanded ? 0 : null,
            overflow: 'hidden',
            marginBottom: 15,
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              left: 0,
              right: 0,
            }}>
            <Image
              source={images.profile}
              resizeMode="contain"
              style={{
                width: SIZES.width * 0.25,
                height: SIZES.width * 0.25,
                borderRadius: 50,
              }}
            />
            <Text
              style={{
                fontSize: SIZES.width * 0.05,
                fontWeight: '700',
                color: COLORS.white,
                marginTop: 10,
              }}>
              Dolly Buster
            </Text>
            <Text
              style={{
                fontSize: 10,
                fontWeight: '500',
                color: COLORS.white,
                marginTop: 3,
              }}>
              Abonament: Premium bis 5/3045
            </Text>
          </View>

          <View
            style={{
              // alignItems: 'center',
              // justifyContent: 'center',
              marginTop: SIZES.height * 0.21 + StatusBar.currentHeight,
              marginLeft: SIZES.width * 0.18,
            }}>
            {data?.map((item: any, index: number) => {
              return (
                <>
                  <TouchableOpacity
                    onPress={() => {
                      if (item.name == 'Einstellungen') {
                        changeLayout();
                      } else if (item.name == 'Abo wechsel / Upgrade') {
                        setExpanded(false);
                        dispatch(loadDrawerOpenAndClose(false));

                        navigation.navigate('SubscriptionScreen');
                      } else if (item.name == 'Startseite') {
                        setExpanded(false);
                        dispatch(loadDrawerOpenAndClose(false));
                        navigation.navigate('HomeScreen');
                      }
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: 10,
                        alignItems: 'center',
                      }}>
                      <Image
                        source={item.image}
                        resizeMode="contain"
                        style={{
                          width: 22,
                          height: 22,
                          tintColor: COLORS.white,
                        }}
                      />
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: '500',
                          color: COLORS.lightGray,
                          marginLeft: 8,
                        }}>
                        {item.name}
                      </Text>
                    </View>
                  </TouchableOpacity>

                  {item.name == 'Abo wechsel / Upgrade' ? (
                    <View
                      style={{
                        height: 4,
                        width: SIZES.width * 0.6,
                        backgroundColor: COLORS.orange,
                        borderRadius: 10,
                        marginTop: 15,
                        marginLeft: 3,
                      }}
                    />
                  ) : null}
                </>
              );
            })}
          </View>
        </View>

        {/* ==============================Profile Update========================= */}
        <View
          style={{
            height: expanded ? null : 0,
            overflow: 'hidden',
            marginBottom: 15,
            flex: expanded ? 1 : 0,
          }}>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image
              source={images.profile}
              resizeMode="contain"
              style={{
                width: SIZES.width * 0.25,
                height: SIZES.width * 0.25,
                borderRadius: 50,
              }}
            />
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                color: COLORS.white,
                marginTop: 10,
              }}>
              Dolly Buster
            </Text>
            <Text
              style={{
                fontSize: 10,
                fontWeight: '500',
                color: COLORS.white,
                marginTop: 3,
              }}>
              Abonament: Premium bis 5/3045
            </Text>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                marginLeft: SIZES.width * 0.17,
                marginTop: 20,
                marginBottom: 100,
              }}>
              <FromInput
                label="Vorname"
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
                containerStyle={{width: '90%'}}
                inputStyle={{
                  color: COLORS.gray90,
                  fontWeight: '800',
                  fontSize: 14,
                }}
                prependComponent={null}
                secureTextEntry={undefined}
                maxLength={undefined}
                height={undefined}
                inputContentStyle={{
                  backgroundColor: COLORS.white,
                  // elevation: 5,
                  borderRadius: 18,
                }}
              />
              <FromInput
                label="Vorname"
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
                containerStyle={{width: '90%'}}
                inputStyle={{
                  color: COLORS.gray90,
                  fontWeight: '800',
                  fontSize: 14,
                }}
                prependComponent={null}
                secureTextEntry={undefined}
                maxLength={undefined}
                height={undefined}
                inputContentStyle={{
                  backgroundColor: COLORS.white,
                  // elevation: 5,
                  borderRadius: 18,
                }}
              />

              <FromInput
                label="Nachname"
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
                containerStyle={{width: '90%'}}
                inputStyle={{
                  color: COLORS.gray90,
                  fontWeight: '800',
                  fontSize: 14,
                }}
                prependComponent={null}
                secureTextEntry={undefined}
                maxLength={undefined}
                height={undefined}
                inputContentStyle={{
                  backgroundColor: COLORS.white,
                  // elevation: 5,
                  borderRadius: 18,
                }}
              />

              <FromInput
                label="Addresse"
                keyboardType="email-address"
                autoCompleteType="email"
                placeholder="Addresse"
                value={fullName}
                onChange={(value: any) => {
                  // utils.validateEmail(value,setEmailError)
                  // console.log(value)
                  setFullName(value);
                }}
                // errorMsg={emailError}
                appendComponent={null}
                containerStyle={{width: '90%'}}
                inputStyle={{
                  color: COLORS.gray90,
                  fontWeight: '800',
                  fontSize: 14,
                }}
                prependComponent={null}
                secureTextEntry={undefined}
                maxLength={undefined}
                height={undefined}
                inputContentStyle={{
                  backgroundColor: COLORS.white,
                  // elevation: 5,
                  borderRadius: 18,
                }}
              />

              <FromInput
                label="Land"
                keyboardType="email-address"
                autoCompleteType="email"
                placeholder="Land"
                value={fullName}
                onChange={(value: any) => {
                  // utils.validateEmail(value,setEmailError)
                  // console.log(value)
                  setFullName(value);
                }}
                // errorMsg={emailError}
                appendComponent={null}
                containerStyle={{width: '90%'}}
                inputStyle={{
                  color: COLORS.gray90,
                  fontWeight: '800',
                  fontSize: 14,
                }}
                prependComponent={null}
                secureTextEntry={undefined}
                maxLength={undefined}
                height={undefined}
                inputContentStyle={{
                  backgroundColor: COLORS.white,
                  // elevation: 5,
                  borderRadius: 18,
                }}
              />

              <FromInput
                label="Bundesland"
                keyboardType="email-address"
                autoCompleteType="email"
                placeholder="Bundesland"
                value={fullName}
                onChange={(value: any) => {
                  // utils.validateEmail(value,setEmailError)
                  // console.log(value)
                  setFullName(value);
                }}
                // errorMsg={emailError}
                appendComponent={null}
                containerStyle={{width: '90%'}}
                inputStyle={{
                  color: COLORS.gray90,
                  fontWeight: '800',
                  fontSize: 14,
                }}
                prependComponent={null}
                secureTextEntry={undefined}
                maxLength={undefined}
                height={undefined}
                inputContentStyle={{
                  backgroundColor: COLORS.white,
                  // elevation: 5,
                  borderRadius: 18,
                }}
              />

              <FromInput
                label="Email"
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
                containerStyle={{width: '90%'}}
                inputStyle={{
                  color: COLORS.gray90,
                  fontWeight: '800',
                  fontSize: 14,
                }}
                prependComponent={null}
                secureTextEntry={undefined}
                maxLength={undefined}
                height={undefined}
                inputContentStyle={{
                  backgroundColor: COLORS.white,
                  // elevation: 5,
                  borderRadius: 18,
                }}
              />

              <FromInput
                label="Password"
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
                containerStyle={{width: '90%'}}
                inputStyle={{
                  color: COLORS.gray90,
                  fontWeight: '800',
                  fontSize: 14,
                }}
                prependComponent={null}
                secureTextEntry={undefined}
                maxLength={undefined}
                height={undefined}
                inputContentStyle={{
                  backgroundColor: COLORS.white,
                  // elevation: 5,
                  borderRadius: 18,
                }}
              />
            </View>
          </ScrollView>
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: -20,
            left: 0,
            right: 0,
            alignItems: 'center',
            justifyContent: 'center',
            display: expanded ? 'flex' : 'none',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('HomeScreen');
            }}>
            <View
              style={{
                backgroundColor: COLORS.primary2,
                height: 35,
                width: SIZES.width * 0.7,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: COLORS.white,

                  fontSize: 16,
                }}>
                Update Infos
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </>
  );
};

export default Home;
