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
import Header from '../../components/DrawerHeader/Index';
import CustomDrawerScreen from '../CustomDrawerScreen';
import {Drawer} from 'react-native-drawer-layout';

const data = [
  {
    name: 'Monatsabo',
    option: 'Alle Ausmalbilder',
    option2: 'Alle Ausmalbilder',
    option3: 'Alle Ausmalbilder',
    id: 1,
    price: '4,90',
    backGroundColor: COLORS.primary2,
  },
  {
    name: 'Halbjahresabo',
    option: 'Alle Ausmalbilder',
    option2: 'Alle Ausmalbilder',
    option3: 'Alle Ausmalbilder',
    id: 2,
    price: '4,90',
    backGroundColor: COLORS.orange,
  },
  {
    name: 'Jaharsabo',
    option: 'Alle Ausmalbilder',
    option2: 'Alle Ausmalbilder',
    option3: 'Alle Ausmalbilder',
    id: 3,
    price: '4',
    backGroundColor: COLORS.purple,
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
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: 'bold',
                color: '#15096F',
                textAlign: 'center',
                marginTop: 15,
                marginBottom: 15,
              }}>
              Unsere Abo-Angebote
            </Text>

            <View
              style={{
                marginBottom: 90,
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
                  marginTop: -10,
                }}
                numColumns={1}
                renderItem={({item}) => (
                  <>
                    <View
                      style={{
                        width: 230,
                        height: 164,
                        borderRadius: 30,
                        marginHorizontal: 15,
                        marginTop: 20,
                        // alignItems: 'center',
                        backgroundColor: COLORS.white,
                        // justifyContent: 'center',
                      }}>
                      <View
                        style={{
                          borderTopRightRadius: 30,
                          borderTopLeftRadius: 30,
                          alignItems: 'center',
                          backgroundColor: item.backGroundColor,
                          justifyContent: 'center',
                        }}>
                        <Text
                          style={{
                            fontSize: 18,
                            fontWeight: '700',
                            color: COLORS.white,
                            marginTop: 8,
                            marginBottom: 8,
                          }}>
                          {item.name}
                        </Text>
                      </View>

                      <View>
                        <Text
                          style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: COLORS.black,
                            textAlign: 'center',
                          }}>
                          {item.price} € / Monat
                        </Text>

                        <View
                          style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            marginTop: 10,
                          }}>
                          <View
                            style={{
                              width: 15,
                              height: 3,
                              backgroundColor: COLORS.orange,
                              opacity: 0.7,
                              borderRadius: 5,
                            }}
                          />

                          <View
                            style={{
                              width: 15,
                              height: 3,
                              backgroundColor: COLORS.orange,
                              opacity: 0.7,
                              marginLeft: 10,
                              borderRadius: 5,
                            }}
                          />
                          <View
                            style={{
                              width: 15,
                              height: 3,
                              backgroundColor: COLORS.orange,
                              opacity: 0.7,
                              marginLeft: 10,
                              borderRadius: 5,
                            }}
                          />
                          <View
                            style={{
                              width: 15,
                              height: 3,
                              backgroundColor: COLORS.orange,
                              opacity: 0.7,
                              marginLeft: 10,
                              borderRadius: 5,
                            }}
                          />
                          <View
                            style={{
                              width: 15,
                              height: 3,
                              backgroundColor: COLORS.orange,
                              opacity: 0.7,
                              marginLeft: 10,
                              borderRadius: 5,
                            }}
                          />
                          <View
                            style={{
                              width: 15,
                              height: 3,
                              backgroundColor: COLORS.orange,
                              opacity: 0.7,
                              marginLeft: 10,
                              borderRadius: 5,
                            }}
                          />
                        </View>

                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginLeft: 30,
                            marginTop: 10,
                          }}>
                          <Image
                            source={icons.okay}
                            style={{
                              width: 15,
                              height: 15,
                            }}
                          />

                          <Text
                            style={{
                              fontSize: 15,
                              fontWeight: 'bold',
                              color: COLORS.gray70,
                              marginLeft: 10,
                            }}>
                            {item.option}
                          </Text>
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginLeft: 30,
                            marginTop: 2,
                          }}>
                          <Image
                            source={icons.okay}
                            style={{
                              width: 15,
                              height: 15,
                            }}
                          />

                          <Text
                            style={{
                              fontSize: 15,
                              fontWeight: 'bold',
                              color: COLORS.gray70,
                              marginLeft: 10,
                            }}>
                            {item.option}
                          </Text>
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginLeft: 30,
                            marginTop: 2,
                          }}>
                          <Image
                            source={icons.okay}
                            style={{
                              width: 15,
                              height: 15,
                            }}
                          />

                          <Text
                            style={{
                              fontSize: 15,
                              fontWeight: 'bold',
                              color: COLORS.gray70,
                              marginLeft: 10,
                            }}>
                            {item.option}
                          </Text>
                        </View>
                      </View>
                    </View>
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
