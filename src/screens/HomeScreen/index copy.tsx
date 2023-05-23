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

const data = [
  {
    name: 'Asusmalilder',
    image: images.Pimage,
    id: 1,
  },
  {
    name: 'Asusmalilder',
    image: images.Pimage2,
    id: 2,
  },

  {
    name: 'Asusmalilder',
    image: images.Pimage3,
    id: 3,
  },
  {
    name: 'Asusmalilder',
    image: icons.profile2,
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

  const dispatch = useDispatch();

  return (
    <>
      <Header />

      <ImageBackground
        source={images.bgImage1}
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: COLORS.white,
        }}>
        <ScrollView showsVerticalScrollIndicator={false}>
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
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: COLORS.gray10,
                  marginTop: 5,
                  marginBottom: 14,
                  textAlign: 'center',
                  marginHorizontal: 15,
                }}>
                wir wunschen euch vaiel SpaB beim lesen, geschinchten horen und
                Malen
              </Text>
            </View>
          </View>

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
              numColumns={2}
              renderItem={({item}) => (
                <>
                  <TouchableOpacity
                    onPress={() => {
                      if (item?.isPaid) {
                        navigation.navigate('SubscriptionScreen');
                      } else {
                        navigation.navigate('ProductListScreen');
                      }
                    }}>
                    <View
                      style={{
                        width: SIZES.width * 0.35,
                        height: SIZES.width * 0.35,
                        borderRadius: 20,
                        marginHorizontal: 15,
                        marginTop: 20,
                        alignItems: 'center',
                        backgroundColor: COLORS.gray30,
                        justifyContent: 'center',
                      }}>
                      <Image
                        source={item.image}
                        style={{
                          width: item?.isPaid
                            ? SIZES.width * 0.25
                            : SIZES.width * 0.35,
                          height: item?.isPaid
                            ? SIZES.width * 0.25
                            : SIZES.width * 0.35,
                          borderRadius: 20,
                        }}
                      />
                      <View
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          backgroundColor: COLORS.gray30,
                          left: 0,
                          right: 0,
                          alignItems: 'center',
                          borderBottomRightRadius: 20,
                          borderBottomLeftRadius: 20,
                        }}>
                        <Text
                          style={{
                            fontSize: 13,
                            fontWeight: '700',
                            color: COLORS.white,
                            marginTop: 2,
                            marginBottom: 3,
                          }}>
                          {item.name}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </>
              )}
              // ItemSeparatorComponent={() => <LineDivider />}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </>
  );
};

export default Home;
