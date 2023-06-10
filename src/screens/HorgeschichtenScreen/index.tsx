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
// import Header from '../../components/Header/Index';
// import Header from '../../components/Header/Index';
import RNPickerSelect from 'react-native-picker-select';
import CustomDrawerScreen from '../CustomDrawerScreen';
import {Drawer} from 'react-native-drawer-layout';
import DrawerHeader from '../../components/DrawerHeader/Index';

const data = [
  {
    name: 'Asusmalilder',
    image: images.horgeschichtenProductImage,
    id: 1,
  },
  {
    name: 'Asusmalilder',
    image: images.horgeschichtenProductImage2,
    id: 2,
  },

  {
    name: 'Asusmalilder',
    image: images.horgeschichtenProductImage,
    id: 3,
  },

  {
    name: 'Asusmalilder',
    image: images.horgeschichtenProductImage2,
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
            backgroundColor: COLORS.white,
          }}>
          <DrawerHeader />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{alignItems: 'center'}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 40,
                  width: SIZES.width * 0.9,

                  borderRadius: 5,
                  marginTop: 20,
                  borderWidth: 1,
                  borderColor: COLORS.white,
                }}>
                <View style={{marginTop: 2}}>
                  <RNPickerSelect
                    mode="dropdown"
                    placeholder={{
                      label: 'Kategorie',
                      value: null,
                      fontSize: 14,
                      fontWeight: '500',
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
                        color: COLORS.white,
                        fontWeight: '500',
                      },
                      placeholder: {
                        fontSize: 15,
                        fontWeight: '500',
                        color: COLORS.white,
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
                              tintColor: COLORS.white,
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
                        navigation.navigate('HorgeschichtenDetailsScreen');
                      }}>
                      <View
                        style={{
                          width: SIZES.width * 0.9,
                          minHeight: 330,
                          borderRadius: 20,
                          marginHorizontal: 15,
                          marginTop: 20,
                          // alignItems: 'center',
                          backgroundColor: COLORS.white,
                          // justifyContent: 'center',
                        }}>
                        <View
                          style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          <Image
                            source={item.image}
                            style={{
                              width: SIZES.width * 0.83,
                              height: SIZES.width * 0.4,
                              borderRadius: 10,
                              backgroundColor: COLORS.white,
                              marginTop: 20,
                            }}
                          />
                        </View>

                        <Text
                          style={{
                            marginHorizontal: 20,
                            fontSize: 16,
                            marginTop: 10,
                            color: '#646E83',
                            fontWeight: '400',
                          }}>
                          Finn and his father were on their way to the woods.
                          Finn said, "Dad, I'd like to go on an adventure!"
                        </Text>

                        <View
                          style={{
                            marginTop: 15,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginHorizontal: 16,
                          }}>
                          <TouchableOpacity onPress={changeLayout}>
                            <View
                              style={{
                                width: SIZES.width * 0.35,
                                backgroundColor: COLORS.primary,
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: 45,
                                borderRadius: 8,
                                flexDirection: 'row',
                              }}>
                              <View
                                style={{
                                  width: 33,
                                  height: 33,
                                  backgroundColor: 'rgba(255, 255, 255, 0.25);',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  borderRadius: 50,
                                }}>
                                <Image
                                  source={icons.play}
                                  style={{
                                    width: 13,
                                    height: 13,
                                    // borderRadius: 20,
                                  }}
                                />
                              </View>

                              <Text
                                style={{
                                  fontSize: 15,
                                  fontWeight: '600',
                                  color: COLORS.lightYellow,
                                  marginLeft: 10,
                                }}>
                                Abspielen
                              </Text>
                            </View>
                          </TouchableOpacity>
                        </View>

                        <View
                          style={{
                            height: expanded ? null : 0,
                            overflow: 'hidden',
                            marginBottom: 5,
                          }}>
                          <Text
                            style={{
                              marginHorizontal: 20,
                              fontSize: 16,
                              marginTop: 10,
                              color: '#646E83',
                              fontWeight: '400',
                              marginBottom: 20,
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
