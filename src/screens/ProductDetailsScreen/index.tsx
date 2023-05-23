/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {COLORS, SIZES, icons, images} from '../../constants';
import {
  AppState,
  FlatList,
  Image,
  ImageBackground,
  LayoutAnimation,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  UIManager,
  View,
} from 'react-native';
import Header from '../../components/Header/Index';
import RNPickerSelect from 'react-native-picker-select';
import CustomDrawerScreen from '../CustomDrawerScreen';
import {Drawer} from 'react-native-drawer-layout';

const data = [
  {
    name: 'Asusmalilder',
    image: images.image1,
    id: 1,
  },
  {
    name: 'Asusmalilder',
    image: images.image1,
    id: 2,
  },

  {
    name: 'Asusmalilder',
    image: images.image1,
    id: 3,
  },

  {
    name: 'Asusmalilder',
    image: images.image1,
    id: 4,
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
  const [expanded, setExpanded] = useState<any>(false);
  const route = useRoute();

  const dispatch = useDispatch();

  const changeLayout = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };
  useEffect(() => {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }, []);

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
          source={route?.params?.isAudio ? images.bgImage3 : images.bgImage2}
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
                Kinderbucher
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
                keyExtractor={item => `PopularCourses-${item.id}`}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  justifyContent: 'center',
                  flexDirection: 'column',
                  marginTop: 10,
                }}
                numColumns={1}
                renderItem={({item}) => (
                  <>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('SubscriptionScreen');
                      }}>
                      <View
                        style={{
                          width: SIZES.width * 0.9,
                          minHeight: SIZES.width * 0.91,
                          borderRadius: 30,
                          marginHorizontal: 15,
                          marginTop: 30,
                          // alignItems: 'center',
                          backgroundColor: COLORS.white,
                          // justifyContent: 'center',
                        }}>
                        <Image
                          source={item.image}
                          style={{
                            width: SIZES.width * 0.9,
                            height: SIZES.width * 0.6,
                            borderRadius: 30,
                            backgroundColor: COLORS.white,
                          }}
                        />
                        <View
                          style={{
                            marginTop: 10,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginHorizontal: 15,
                          }}>
                          <TouchableOpacity onPress={changeLayout}>
                            <View
                              style={{
                                width: SIZES.width * 0.35,
                                backgroundColor: COLORS.orange,
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: 30,
                                borderRadius: 3,
                              }}>
                              <Text
                                style={{
                                  fontSize: 14,
                                  fontWeight: '600',
                                  color: COLORS.lightYellow,
                                }}>
                                LESEN
                              </Text>
                            </View>
                          </TouchableOpacity>
                          <View
                            style={{
                              width: SIZES.width * 0.35,
                              backgroundColor: COLORS.orange,
                              alignItems: 'center',
                              justifyContent: 'center',
                              height: 30,
                              borderRadius: 3,
                              flexDirection: 'row',
                            }}>
                            <Image
                              source={icons.play}
                              style={{
                                width: 15,
                                height: 15,
                                // borderRadius: 20,
                              }}
                            />

                            <Text
                              style={{
                                fontSize: 14,
                                fontWeight: '600',
                                color: COLORS.lightYellow,
                                marginLeft: 10,
                              }}>
                              ABSPIELEN
                            </Text>
                          </View>
                        </View>

                        <Text
                          style={{
                            marginHorizontal: 20,
                            fontSize: 14,
                            marginTop: 10,
                            color: COLORS.orange,
                          }}>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                        </Text>
                        <View
                          style={{
                            height: expanded ? null : 0,
                            overflow: 'hidden',
                            marginBottom: 15,
                          }}>
                          <Text
                            style={{
                              marginHorizontal: 20,
                              fontSize: 14,
                              marginTop: 10,
                              color: COLORS.orange,
                            }}>
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>

                    {/* ========================================================== */}
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 20,
                      }}>
                      <View
                        style={{
                          width: 10,
                          height: 1,
                          backgroundColor: COLORS.white,
                          borderRadius: 10,
                          marginLeft: 10,
                        }}
                      />

                      <View
                        style={{
                          width: 10,
                          height: 1,
                          backgroundColor: COLORS.white,
                          borderRadius: 10,
                          marginLeft: 10,
                        }}
                      />

                      <View
                        style={{
                          width: 10,
                          height: 1,
                          backgroundColor: COLORS.white,
                          borderRadius: 10,
                          marginLeft: 10,
                        }}
                      />

                      <View
                        style={{
                          width: 10,
                          height: 1,
                          backgroundColor: COLORS.white,
                          borderRadius: 10,
                          marginLeft: 10,
                        }}
                      />

                      <View
                        style={{
                          width: 10,
                          height: 1,
                          backgroundColor: COLORS.white,
                          borderRadius: 10,
                          marginLeft: 10,
                        }}
                      />

                      <View
                        style={{
                          width: 10,
                          height: 1,
                          backgroundColor: COLORS.white,
                          borderRadius: 10,
                          marginLeft: 10,
                        }}
                      />

                      <View
                        style={{
                          width: 10,
                          height: 1,
                          backgroundColor: COLORS.white,
                          borderRadius: 10,
                          marginLeft: 10,
                        }}
                      />

                      <View
                        style={{
                          width: 10,
                          height: 1,
                          backgroundColor: COLORS.white,
                          borderRadius: 10,
                          marginLeft: 10,
                        }}
                      />

                      <View
                        style={{
                          width: 10,
                          height: 1,
                          backgroundColor: COLORS.white,
                          borderRadius: 10,
                          marginLeft: 10,
                        }}
                      />

                      <View
                        style={{
                          width: 10,
                          height: 1,
                          backgroundColor: COLORS.white,
                          borderRadius: 10,
                          marginLeft: 10,
                        }}
                      />

                      <View
                        style={{
                          width: 10,
                          height: 1,
                          backgroundColor: COLORS.white,
                          borderRadius: 10,
                          marginLeft: 10,
                        }}
                      />

                      <View
                        style={{
                          width: 10,
                          height: 1,
                          backgroundColor: COLORS.white,
                          borderRadius: 10,
                          marginLeft: 10,
                        }}
                      />

                      <View
                        style={{
                          width: 10,
                          height: 1,
                          backgroundColor: COLORS.white,
                          borderRadius: 10,
                          marginLeft: 10,
                        }}
                      />

                      <View
                        style={{
                          width: 10,
                          height: 1,
                          backgroundColor: COLORS.white,
                          borderRadius: 10,
                          marginLeft: 10,
                        }}
                      />

                      <View
                        style={{
                          width: 10,
                          height: 1,
                          backgroundColor: COLORS.white,
                          borderRadius: 10,
                          marginLeft: 10,
                        }}
                      />

                      <View
                        style={{
                          width: 10,
                          height: 1,
                          backgroundColor: COLORS.white,
                          borderRadius: 10,
                          marginLeft: 10,
                        }}
                      />

                      <View
                        style={{
                          width: 10,
                          height: 1,
                          backgroundColor: COLORS.white,
                          borderRadius: 10,
                          marginLeft: 10,
                        }}
                      />
                    </View>
                  </>
                )}
              />
            </View>
          </ScrollView>
        </ImageBackground>
      </Drawer>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
  text: {
    fontSize: 17,
    color: 'black',
    padding: 10,
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },
  btnTextHolder: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.5)',
  },
  Btn: {
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});
export default Home;
