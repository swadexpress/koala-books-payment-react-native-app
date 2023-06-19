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
import DrawerHeader from '../../components/DrawerHeader/Index';
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
          <DrawerHeader />

          <View
            style={{
              // justifyContent: 'center',
              // alignItems: 'center',
              backgroundColor: COLORS.white,
              flex: 1,
              marginTop: 20,
              borderTopRightRadius: 30,
              borderTopLeftRadius: 30,
            }}>
            <View
              style={{
                marginHorizontal: 20,
              }}>
              <Text
                style={{
                  color: COLORS.black,
                  fontWeight: '800',
                  fontSize: 20,
                  marginTop: 30,
                }}>
                Silvio Hartleb
              </Text>

              <View style={{flexDirection: 'row', marginTop: 15}}>
                <Image
                  source={icons.aboAngeboteR}
                  style={{
                    width: 22,
                    height: 22,
                  }}
                />
                <Text
                  style={{
                    color: COLORS.primary5,
                    fontWeight: '500',
                    fontSize: 14,
                    marginLeft: 10,
                  }}>
                  Toskaweg 2/2/245 1110 Wien Österreich
                </Text>
              </View>
              <View style={{flexDirection: 'row', marginTop: 15}}>
                <Image
                  source={icons.aboAngeboteR}
                  style={{
                    width: 22,
                    height: 22,
                  }}
                />
                <Text
                  style={{
                    color: COLORS.primary5,
                    fontWeight: '500',
                    fontSize: 14,
                    marginLeft: 10,
                  }}>
                  06602910032
                </Text>
              </View>

              <View style={{flexDirection: 'row', marginTop: 15}}>
                <Image
                  source={icons.aboAngeboteR}
                  style={{
                    width: 22,
                    height: 22,
                  }}
                />
                <Text
                  style={{
                    color: COLORS.primary5,
                    fontWeight: '500',
                    fontSize: 14,
                    marginLeft: 10,
                  }}>
                  office@demo-info.at
                </Text>
              </View>

              <Text
                style={{
                  color: COLORS.primary5,
                  fontWeight: '500',
                  fontSize: 14,
                  marginTop: 20,
                }}>
                UID Nummer:
                <Text
                  style={{
                    color: COLORS.black,
                    fontWeight: '500',
                    fontSize: 15,
                    marginLeft: 10,
                  }}>
                  {' '}
                  ATU77580226
                </Text>
              </Text>
              <Text
                style={{
                  color: COLORS.primary5,
                  fontWeight: '500',
                  fontSize: 14,
                  marginTop: 15,
                }}>
                Plattform der EU-Kommission zur Online-Streitbeilegung:
                <Text
                  style={{
                    color: COLORS.primary,
                    fontWeight: '500',
                    fontSize: 14,
                  }}>
                  {' '}
                  https://ec.europa.eu/odr
                </Text>
              </Text>
              <Text
                style={{
                  color: COLORS.primary5,
                  fontWeight: '500',
                  fontSize: 14,
                  marginTop: 25,
                }}>
                Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor
                einer Verbraucherschlichtungsstelle weder verpflichtet noch
                bereit.
              </Text>
            </View>

            <View style={{position: 'absolute', bottom: 20, left: 20}}>
              <Text
                style={{
                  color: COLORS.black,
                  fontWeight: '900',
                  fontSize: 16,
                  marginTop: 15,
                }}>
                it-recht kanzlei müchen
              </Text>
              <Text
                style={{
                  color: COLORS.primary5,
                  fontWeight: '400',
                  fontSize: 14,
                  marginTop: 5,
                }}>
                Vertreten durch
              </Text>
            </View>
          </View>
        </ImageBackground>
      </Drawer>
    </>
  );
};

export default Home;
