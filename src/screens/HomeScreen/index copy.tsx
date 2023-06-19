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
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FromInput from './FromInput';
import AppStatusBar from '../AppStatusBar';
import Header from '../../components/DrawerHeader/Index';
import {Drawer} from 'react-native-drawer-layout';
import CustomDrawerScreen from '../CustomDrawerScreen';
import AuthLayout from '../CustomDrawerScreen/AuthLayout';
import {loadDrawerOpenAndClose} from '../../stores/actions/productActions';
import DrawerHeader from '../../components/DrawerHeader/Index';
import WebView from 'react-native-webview';

const data = [
  {
    name: 'Ausmalbilder',
    image: images.ausmalbilder,
    bagImage: images.PbgImage1,
    id: 1,
  },
  {
    name: 'Bilder geschichten',
    image: images.bilderGeschichten,
    bagImage: images.PbgImage1,
    id: 2,
  },

  {
    name: 'Hörgeschichten',
    image: images.horgeschichten,
    bagImage: images.PbgImage1,
    id: 3,
  },
  {
    name: 'Anmelden',
    image: images.anmelden,
    bagImage: images.PbgImage1,
    id: 3,
    isPaid: true,
  },
];

const Home = () => {
  const navigation = useNavigation();
  const {userProfile, isDrawerOpenAndClose} = useSelector(
    (state: any) => state.product,
  );
  const [fullName, setFullName] = useState<any>();
  const [phoneNumber, setPhoneNumber] = useState<any>();
  const appState = useRef(AppState.currentState);
  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadDrawerOpenAndClose(false));
  }, [0]);

  console.log(isDrawerOpenAndClose, 'isDrawerOpenAndCloseZ');
  return (
    <>
      <WebView source={{uri: 'http://192.168.0.207:3000/'}} style={{flex: 1}} />

      {/* <Drawer
        drawerStyle={{
          width: SIZES.width * 0.88,
        }}
        drawerPosition={'right'}
        open={isDrawerOpenAndClose ? isDrawerOpenAndClose : false}
        onOpen={() => {
          setOpen(true);
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
            backgroundColor: COLORS.white,
          }}>
          <DrawerHeader />

          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 10,
              }}>
              <View
                style={{
                  backgroundColor: COLORS.white,
                  // marginHorizontal: 15,
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
                    “Man darf nicht verlernen, die Welt mit den Augen eines
                    Kindes zu sehen.”
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
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
                flexDirection: 'row',
                backgroundColor: COLORS.white,
                marginHorizontal: 15,
                borderRadius: 10,
                marginTop: 20,
              }}>
              <View style={{height: 15, width: 200}} />
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  flexDirection: 'row',
                }}>
                {data?.map((item: any, index: number) => (
                  <>
                    <TouchableOpacity
                      onPress={() => {
                        if (item?.isPaid) {
                          navigation.navigate('LogInScreen');
                        } else {
                          if (item?.name == 'Asusmalilder') {
                            navigation.navigate('ProductListScreen');
                          } else if (item?.name == 'Kinderbucher') {
                            navigation.navigate('ProductDetailsScreen', {
                              id: 1,
                              isAudio: true,
                            });
                          } else if (item?.name == 'horbucher') {
                            navigation.navigate('ProductDetailsScreen', {
                              id: 1,
                              isAudio: false,
                            });
                          }
                        }
                      }}>
                      <ImageBackground
                        source={images.PbgImage1}
                        style={{
                          width: SIZES.width * 0.4,
                          height: SIZES.width * 0.52,
                          borderRadius: 20,
                          marginHorizontal: 5,
                          marginTop: 10,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Image
                          source={item.image}
                          style={{
                            width: SIZES.width * 0.3,
                            height: SIZES.width * 0.3,
                            borderRadius: 20,
                          }}
                        />
                        <Text
                          style={{
                            fontSize: 14,
                            fontWeight: '600',
                            marginTop: 12,
                            color: COLORS.black,
                          }}>
                          {item.name}
                        </Text>
                      </ImageBackground>
                    </TouchableOpacity>
                  </>
                ))}
              </View>
              <View style={{height: 30, width: 200}} />
            </View>
          </ScrollView>
        </ImageBackground>
      </Drawer> */}
    </>
  );
};

export default Home;
