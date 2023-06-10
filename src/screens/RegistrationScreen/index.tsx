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
// import FromInput from './FromInput';
import CustomDrawerScreen from '../CustomDrawerScreen';
import {Drawer} from 'react-native-drawer-layout';
import FromInput from '../LogInScreen/FromInput';
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
              marginTop: StatusBar.currentHeight + 15,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '800',
                color: COLORS.white,
              }}>
              Registrieren
            </Text>
          </View>

          <View
            style={{
              backgroundColor: COLORS.white,
              flex: 1,
              marginTop: 20,
              borderTopRightRadius: 30,
              borderTopLeftRadius: 30,
            }}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text
                  style={{
                    color: COLORS.black,
                    fontWeight: '800',
                    fontSize: 20,
                    marginTop: 20,
                    marginHorizontal: 25,
                  }}>
                  Anmelden
                </Text>
              </View>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'space-between',

                    flexDirection: 'row',
                    width: SIZES.width * 0.95,
                  }}>
                  <FromInput
                    label="Vorname"
                    keyboardType="email-address"
                    autoCompleteType="email"
                    placeholder="Vorname"
                    value={fullName}
                    onChange={(value: any) => {
                      setFullName(value);
                    }}
                    // errorMsg={emailError}
                    appendComponent={null}
                    containerStyle={{width: SIZES.width * 0.45}}
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
                    label="Nachname"
                    keyboardType="email-address"
                    autoCompleteType="email"
                    placeholder="Nachname"
                    value={fullName}
                    onChange={(value: any) => {
                      setFullName(value);
                    }}
                    // errorMsg={emailError}
                    appendComponent={null}
                    containerStyle={{width: SIZES.width * 0.45}}
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
                </View>
              </View>
              {/* =====================================Adresse==================== */}

              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <FromInput
                  label="Adresse"
                  keyboardType="email-address"
                  autoCompleteType="email"
                  placeholder="Adresse"
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
                  containerStyle={{width: SIZES.width * 0.95}}
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
              </View>
              {/* ========================================================= */}

              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'space-between',

                    flexDirection: 'row',
                    width: SIZES.width * 0.95,
                  }}>
                  <FromInput
                    label="Plz"
                    keyboardType="email-address"
                    autoCompleteType="email"
                    placeholder="Plz"
                    value={fullName}
                    onChange={(value: any) => {
                      setFullName(value);
                    }}
                    // errorMsg={emailError}
                    appendComponent={null}
                    containerStyle={{width: SIZES.width * 0.45}}
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
                    label="Land"
                    keyboardType="email-address"
                    autoCompleteType="email"
                    placeholder="Land"
                    value={fullName}
                    onChange={(value: any) => {
                      setFullName(value);
                    }}
                    // errorMsg={emailError}
                    appendComponent={null}
                    containerStyle={{width: SIZES.width * 0.45}}
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
                </View>
              </View>

              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {/* ========================================================= */}

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
                  containerStyle={{width: SIZES.width * 0.95}}
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

                {/* ============================================================ */}

                <FromInput
                  label="Passwort"
                  keyboardType="email-address"
                  autoCompleteType="email"
                  placeholder="******"
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
                  containerStyle={{width: SIZES.width * 0.95}}
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
                {/* ============================================================ */}

                <FromInput
                  label="Passwort wiederholen"
                  keyboardType="email-address"
                  autoCompleteType="email"
                  placeholder="******"
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
                  containerStyle={{width: SIZES.width * 0.95}}
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
                  // alignItems: 'center',
                  marginTop: 15,
                  marginHorizontal: 10,
                  marginBottom: 50,
                }}>
                <View
                  style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      alignItems: 'center',

                      justifyContent: 'center',
                      borderWidth: 1,
                      borderColor: '#C9C1DB',
                      height: 22,
                      width: 22,
                      borderRadius: 5,
                    }}>
                    <Image
                      source={icons.checked}
                      style={{
                        width: 15,
                        height: 15,
                        tintColor: COLORS.white,
                      }}
                    />
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        fontSize: 13,
                        fontWeight: '600',
                        color: '#8793AB',
                        marginLeft: 10,
                      }}>
                      Ich stimme den
                    </Text>

                    <Text
                      style={{
                        fontSize: 13,
                        fontWeight: '600',
                        color: COLORS.black,
                        marginLeft: 3,
                      }}>
                      AGB
                    </Text>
                    <Text
                      style={{
                        fontSize: 13,
                        fontWeight: '600',
                        color: '#8793AB',
                        marginLeft: 3,
                      }}>
                      &
                    </Text>
                    <Text
                      style={{
                        fontSize: 13,
                        fontWeight: '600',
                        color: COLORS.black,
                        marginLeft: 3,
                      }}>
                      DSGVO
                    </Text>
                    <Text
                      style={{
                        fontSize: 13,
                        fontWeight: '600',
                        color: '#8793AB',
                        marginLeft: 3,
                      }}>
                      zu
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginTop: 10,
                    marginBottom: 20,
                  }}>
                  <View
                    style={{
                      alignItems: 'center',

                      justifyContent: 'center',
                      borderWidth: 1,
                      borderColor: '#C9C1DB',
                      height: 22,
                      width: 22,
                      borderRadius: 5,
                    }}>
                    <Image
                      source={icons.checked}
                      style={{
                        width: 15,
                        height: 15,
                        tintColor: COLORS.white,
                      }}
                    />
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        fontSize: 13,
                        fontWeight: '600',
                        color: '#8793AB',
                        marginLeft: 10,
                      }}>
                      Updates und Info per Email
                    </Text>
                  </View>
                </View>

                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('FillYourProfileScreen');
                  }}>
                  <View
                    style={{
                      backgroundColor: COLORS.primary,
                      height: 43,

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
                      Konto Erstellen
                    </Text>
                  </View>
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
