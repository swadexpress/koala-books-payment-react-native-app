/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {COLORS, SIZES, icons, images} from '../../constants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  Alert,
  AppState,
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
import Header from '../../components/Header/Index';
import RNPickerSelect from 'react-native-picker-select';
import { Drawer } from 'react-native-drawer-layout';
import CustomDrawerScreen from '../CustomDrawerScreen';

const data = [
  {
    name: 'Asusmalilder',
    image: images.ProductImage1,
    id: 1,
  },
  {
    name: 'Asusmalilder',
    image: images.ProductImage2,
    id: 2,
  },

  {
    name: 'Asusmalilder',
    image: images.ProductImage3,
    id: 3,
  },

  {
    name: 'Asusmalilder',
    image: images.ProductImage4,
    id: 4,
    isPaid: true,
  },

  {
    name: 'Asusmalilder',
    image: images.ProductImage5,
    id: 5,
    isPaid: true,
  },

  {
    name: 'Asusmalilder',
    image: images.ProductImage6,
    id: 6,
    isPaid: true,
  },

  {
    name: 'Asusmalilder',
    image: images.ProductImage7,
    id: 7,
    isPaid: true,
  },

  {
    name: 'Asusmalilder',
    image: images.ProductImage8,
    id: 8,
    isPaid: true,
  },

  {
    name: 'Asusmalilder',
    image: images.ProductImage9,
    id: 9,
    isPaid: true,
  },

  {
    name: 'Asusmalilder',
    image: images.ProductImage11,
    id: 10,
    isPaid: true,
  },

  {
    name: 'Asusmalilder',
    image: images.ProductImage12,
    id: 11,
    isPaid: true,
  },

  {
    name: 'Asusmalilder',
    image: images.ProductImage13,
    id: 12,
    isPaid: true,
  },

  {
    name: 'Asusmalilder',
    image: images.ProductImage14,
    id: 13,
    isPaid: true,
  },

  {
    name: 'Asusmalilder',
    image: images.ProductImage15,
    id: 14,
    isPaid: true,
  },

  {
    name: 'Asusmalilder',
    image: images.ProductImage16,
    id: 15,
    isPaid: true,
  },

  {
    name: 'Asusmalilder',
    image: images.ProductImage17,
    id: 16,
    isPaid: true,
  },

  {
    name: 'Asusmalilder',
    image: images.ProductImage18,
    id: 17,
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
          source={images.bgImage2}
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: COLORS.white,
          }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{alignItems: 'center'}}>
              <Text
                style={{
                  color: COLORS.black,
                  fontWeight: 'bold',
                  fontSize: 22,
                  marginTop: 15,
                  marginBottom: 5,
                }}>
                Ausmalbilder
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 40,
                  width: SIZES.width * 0.9,
                  backgroundColor: COLORS.white,
                  borderRadius: 5,
                  marginTop: 10,
                  elevation: 2,
                }}>
                <View style={{marginTop: 2}}>
                  <RNPickerSelect
                    mode="dropdown"
                    placeholder={{
                      label: 'Choose gender',
                      value: null,
                      fontSize: 14,
                      fontWeight: '700',
                      color: COLORS.orange,
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
                        color: COLORS.orange,
                        fontWeight: '700',
                      },
                      placeholder: {
                        fontSize: 15,
                        fontWeight: '700',
                        color: COLORS.orange,
                        // marginTop:10
                      },
                      iconContainer: {
                        top: 7,
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
                              width: 18,
                              height: 18,
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
            </View>

            <View
              style={{
                marginBottom: 150,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <FlatList
                data={data}
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => `PopularCourses-${item.image}`}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  justifyContent: 'center',
                  flexDirection: 'column',
                  marginTop: 10,
                }}
                numColumns={2}
                renderItem={({item}, index) => (
                  <>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('ProductDetailsScreen', {
                          id: 1,
                          isAudio: item.id % 2,
                        });
                      }}>
                      <View
                        style={{
                          width: SIZES.width * 0.35,
                          height: SIZES.width * 0.35,
                          borderRadius: 30,
                          marginHorizontal: 15,
                          marginTop: 20,
                          alignItems: 'center',
                          backgroundColor: COLORS.white,
                          justifyContent: 'center',
                        }}>
                        <Image
                          source={item.image}
                          style={{
                            width: SIZES.width * 0.35,
                            height: SIZES.width * 0.35,
                            borderRadius: 30,
                            backgroundColor: COLORS.white,
                          }}
                        />
                      </View>
                    </TouchableOpacity>
                  </>
                )}
                // ItemSeparatorComponent={() => <LineDivider />}
              />
            </View>
          </ScrollView>
        </ImageBackground>
      </Drawer>
    </>
  );
};

export default Home;
