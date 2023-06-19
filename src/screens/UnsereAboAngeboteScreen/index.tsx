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
    name: 'Unsere Abo-Angebote',
    price: '4,90',
    dis1: 'Zugriff auf gesamten Inhalt',
    dis2: 'Günstigster Preis für 12 Monate',
    dis3: 'Danach monatlich kündbar',
    dis4: '7 Tage kostenlos testen',
    id: 2,
  },
  {
    name: 'Unsere Abo-Angebote',
    price: '5,90',
    dis1: 'Zugriff auf gesamten Inhalt',
    dis2: 'Günstigster Preis für 12 Monate',
    dis3: 'Danach monatlich kündbar',
    dis4: '7 Tage kostenlos testen',
    id: 3,
  },
  {
    name: 'Unsere Abo-Angebote',
    price: '4,90',
    dis1: 'Zugriff auf gesamten Inhalt',
    dis2: 'Günstigster Preis für 12 Monate',
    dis3: 'Danach monatlich kündbar',
    dis4: '7 Tage kostenlos testen',
    id: 4,
  },
  {
    name: 'Unsere Abo-Angebote',
    price: '4,90',
    dis1: 'Zugriff auf gesamten Inhalt',
    dis2: 'Günstigster Preis für 12 Monate',
    dis3: 'Danach monatlich kündbar',
    dis4: '7 Tage kostenlos testen',
    id: 5,
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
            <View
              style={{
                marginBottom: 15,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {data?.map((v: any, index: number) => (
                <>
                  <TouchableOpacity
                    onPress={() => {
                      // navigation.navigate('SubscriptionScreen');
                    }}>
                    <View
                      style={{
                        width: SIZES.width * 0.9,
                        minHeight: 290,
                        borderRadius: 20,
                        marginHorizontal: 15,
                        marginTop: 20,
                        // alignItems: 'center',
                        backgroundColor: COLORS.white,
                        // justifyContent: 'center',
                      }}>
                      <View style={{marginHorizontal: 20}}>
                        <View
                          style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor:
                              index % 2 === 0 ? '#FFF7EC' : '#FFEDF1',
                            marginTop: 20,

                            borderRadius: 10,
                            height: 100,
                          }}>
                          <View
                            style={{
                              // flexDirection: 'row',
                              alignItems: 'center',
                              // justifyContent: 'space-between',
                              width: '100%',
                            }}>
                            <Text
                              style={{
                                fontSize: 15,
                                fontWeight: '500',
                                color: COLORS.black,
                              }}>
                              {v.name}
                            </Text>

                            <View
                              style={{
                                // backgroundColor: COLORS.primary,
                                width: 20,
                                height: 20,
                                borderRadius: 100,
                                borderColor:
                                  index % 2 === 0 ? COLORS.primary : '#EA5372',
                                borderWidth: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'absolute',
                                right: 10,
                              }}>
                              <View
                                style={{
                                  backgroundColor:
                                    index % 2 === 0
                                      ? COLORS.primary
                                      : '#EA5372',
                                  width: 8,
                                  height: 8,
                                  borderRadius: 100,
                                }}
                              />
                            </View>
                          </View>

                          <Text
                            style={{
                              fontSize: 13,
                              fontWeight: '500',
                              color: COLORS.black,
                              marginTop: 3,
                            }}>
                            Jahresabo
                          </Text>
                          <Text
                            style={{
                              fontSize: 18,
                              fontWeight: '800',
                              color:
                                index % 2 === 0 ? COLORS.primary : '#EA5372',
                              marginTop: 10,
                            }}>
                            {`${v.price} €/Monat`}
                          </Text>
                        </View>

                        <View style={{flexDirection: 'row', marginTop: 20}}>
                          <Image
                            source={
                              index % 2 === 0
                                ? icons.aboAngeboteY
                                : icons.aboAngeboteR
                            }
                            style={{
                              width: 20,
                              height: 20,
                            }}
                          />
                          <Text
                            style={{
                              fontSize: 13,
                              fontWeight: '600',
                              color: COLORS.black,
                              marginLeft: 10,
                            }}>
                            {v.dis1}
                          </Text>
                        </View>
                        <View style={{flexDirection: 'row', marginTop: 15}}>
                          <Image
                            source={
                              index % 2 === 0
                                ? icons.aboAngeboteY
                                : icons.aboAngeboteR
                            }
                            style={{
                              width: 20,
                              height: 20,
                            }}
                          />
                          <Text
                            style={{
                              fontSize: 13,
                              fontWeight: '600',
                              color: COLORS.black,
                              marginLeft: 10,
                            }}>
                            {v.dis2}
                          </Text>
                        </View>
                        <View style={{flexDirection: 'row', marginTop: 15}}>
                          <Image
                            source={
                              index % 2 === 0
                                ? icons.aboAngeboteY
                                : icons.aboAngeboteR
                            }
                            style={{
                              width: 20,
                              height: 20,
                            }}
                          />
                          <Text
                            style={{
                              fontSize: 13,
                              fontWeight: '600',
                              color: COLORS.black,
                              marginLeft: 10,
                            }}>
                            {v.dis3}
                          </Text>
                        </View>
                        <View style={{flexDirection: 'row', marginTop: 15}}>
                          <Image
                            source={
                              index % 2 === 0
                                ? icons.aboAngeboteY
                                : icons.aboAngeboteR
                            }
                            style={{
                              width: 20,
                              height: 20,
                            }}
                          />
                          <Text
                            style={{
                              fontSize: 13,
                              fontWeight: '600',
                              color: COLORS.black,
                              marginLeft: 10,
                            }}>
                            {v.dis4}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                </>
              ))}

              <TouchableOpacity
                onPress={() => {
                  // navigation.navigate('HomeScreen');
                }}>
                <View
                  style={{
                    backgroundColor: COLORS.white,
                    height: 43,
                    width: SIZES.width * 0.9,
                    alignItems: 'center',
                    borderRadius: 10,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginTop:30
                  }}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: COLORS.primary,
                      fontSize: 16,
                    }}>
                    Abo Stornieren
                  </Text>
                </View>
              </TouchableOpacity>
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
