/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {COLORS, SIZES, icons, images} from '../../constants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FromInput from './FromInput';
import AppStatusBar from '../AppStatusBar';
import {RadioButton} from 'react-native-paper';
// import { ScrollView } from 'react-native-gesture-handler';
import AsysncStorage from '@react-native-community/async-storage';
import {endpointImage} from '../../../apiConstants';
import Sound from 'react-native-sound';

// import AppStatusBar from '../../AppStatusBar';

const ExamineersInformationScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [isAudioPlay, setIsAudioPlay] = useState<any>(false);

  async function onHandelChangeScreen() {
    navigation.navigate('AllQuestionScreen');
    // await AsysncStorage.removeItem('@fullName');
    // await AsysncStorage.removeItem('@phoneNumber');
    // await AsysncStorage.removeItem('@username');
    // await AsysncStorage.removeItem('@selectedOption');
    // await AsysncStorage.removeItem('@examineeNumber');
    // await AsysncStorage.setItem('@fullName', route.params.fullName);
    // await AsysncStorage.setItem('@phoneNumber', route.params.phoneNumber);
    // await AsysncStorage.setItem('@selectedOption', route.params.selectedOption);
    // await AsysncStorage.setItem(
    //   '@examineeNumber',
    //   route.params.examineeNumber.toString(),
    // );
  }

  const onHandelPlayAudio = url => {
    let sound = new Sound(url, '', (error: any, _sound: any) => {
      if (error) {
        console.log(error, 'error');
        return;
      }
      if (isAudioPlay) {
        console.log(isAudioPlay, 'oka');
        // sound.pause();
        // setIsAudioPlay(isAudioPlay => !isAudioPlay);
      } else {
        console.log(isAudioPlay, 'oka');
        sound.play(() => {
          console.log(isAudioPlay, 'odfgdfka');
          sound.release();
          setIsAudioPlay(false);
        });
        // setIsAudioPlay(isAudioPlay => !isAudioPlay);
      }
    });
  };

  return (
    <>
      <AppStatusBar />

      <View
        style={{
          flex: 1,
          // justifyContent: 'center',
          // alignItems: 'center',
          backgroundColor: COLORS.white,
        }}>
        <View
          style={{
            marginTop: StatusBar.currentHeight + 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontWeight: '700', color: COLORS.black, fontSize: 17}}>
            Correct Answer Details
          </Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{marginTop: 10, marginHorizontal: 20, marginBottom: 50}}>
            {route.params.data.map((v: any, index: any) => {
              return (
                <>
                  <View style={{width: SIZES.width,marginTop:20}}>
                    <Text
                      style={{
                        fontWeight: '900',
                        fontSize: 17,
                        color: COLORS.black,
                      }}>
                      {`${index + 1}. ${v?.question_text}`}
                    </Text>

                    <View
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      {v?.question_media ? (
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: 15,
                            // justifyContent: 'center',
                          }}>
                          {v.question_media.slice(
                            Math.max(v.question_media.length - 3, 1),
                          ) == 'jpg' ||
                          v.question_media.slice(
                            Math.max(v.question_media.length - 3, 1),
                          ) == 'png' ||
                          v.question_media.slice(
                            Math.max(v.question_media.length - 3, 1),
                          ) == 'peg' ? (
                            <Image
                              source={{
                                uri: `${endpointImage}/${v.question_media}`,
                              }}
                              resizeMode="contain"
                              style={{
                                width: 120,
                                height: 120,
                                // borderRadius: 50,
                                marginLeft: 10,
                                // tintColor: COLORS.white,
                              }}
                            />
                          ) : (
                            <TouchableOpacity
                              onPress={() => {
                                onHandelPlayAudio(
                                  `${endpointImage}/${v.question_media}`,
                                );
                              }}>
                              <Image
                                source={icons.play}
                                resizeMode="contain"
                                style={{
                                  width: 30,
                                  height: 30,
                                  // borderRadius: 50,
                                  marginLeft: 10,
                                  tintColor: COLORS.black,
                                }}
                              />
                            </TouchableOpacity>
                          )}
                        </View>
                      ) : null}
                    </View>

                    {/* ===============Option-1============================ */}

                    {v?.option_media_1 ? (
                      <TouchableOpacity
                        onPress={() => {
                          // setSentMultipleUserGift(data);
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: 15,
                            // justifyContent: 'center',
                          }}>
                          <View
                            style={{
                              width: 20,
                              height: 20,
                              borderWidth: 1,
                              borderColor:
                                v?.correct_answer == 1
                                  ? COLORS.primary
                                  : v?.selected == 1
                                  ? COLORS.primary2
                                  : COLORS.black,
                              borderRadius: 50,
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}>
                            <View
                              style={{
                                width: 13,
                                height: 13,

                                backgroundColor:
                                  v?.correct_answer == 1
                                    ? COLORS.primary
                                    : v?.selected == 1
                                    ? COLORS.primary2
                                    : COLORS.black,
                                borderRadius: 50,
                              }}
                            />
                          </View>

                          {v.option_media_1.slice(
                            Math.max(v.option_media_1.length - 3, 1),
                          ) == 'jpg' ||
                          v.option_media_1.slice(
                            Math.max(v.option_media_1.length - 3, 1),
                          ) == 'png' ||
                          v.option_media_1.slice(
                            Math.max(v.option_media_1.length - 3, 1),
                          ) == 'peg' ? (
                            <Image
                              source={{
                                uri: `${endpointImage}/${v.option_media_1}`,
                              }}
                              resizeMode="contain"
                              style={{
                                width: 120,
                                height: 120,
                                // borderRadius: 50,
                                marginLeft: 10,
                                // tintColor: COLORS.white,
                              }}
                            />
                          ) : (
                            <TouchableOpacity
                              onPress={() => {
                                onHandelPlayAudio(
                                  `${endpointImage}/${v.option_media_1}`,
                                );
                              }}>
                              <Image
                                source={icons.play}
                                resizeMode="contain"
                                style={{
                                  width: 30,
                                  height: 30,
                                  // borderRadius: 50,
                                  marginLeft: 10,
                                  tintColor: COLORS.black,
                                }}
                              />
                            </TouchableOpacity>
                          )}
                        </View>
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        onPress={() => {
                          // setSentMultipleUserGift(data);
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: 15,
                            // justifyContent: 'center',
                          }}>
                          <View
                            style={{
                              width: 20,
                              height: 20,
                              borderWidth: 1,
                              borderColor:
                                v?.correct_answer == 1
                                  ? COLORS.primary
                                  : v?.selected == 1
                                  ? COLORS.primary2
                                  : COLORS.black,
                              borderRadius: 50,
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}>
                            <View
                              style={{
                                width: 13,
                                height: 13,

                                backgroundColor:
                                  v?.correct_answer == 1
                                    ? COLORS.primary
                                    : v?.selected == 1
                                    ? COLORS.primary2
                                    : COLORS.white,
                                borderRadius: 50,
                              }}
                            />
                          </View>

                          <Text
                            style={{
                              fontWeight: '700',
                              fontSize: 14,
                              color: COLORS.black,
                              marginLeft: 10,
                            }}>
                            {v?.option_text_1}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    )}

                    {/* =========Option-2================================= */}
                    {v?.option_media_2 ? (
                      <TouchableOpacity
                        onPress={() => {
                          // setSentMultipleUserGift(data);
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: 15,
                            // justifyContent: 'center',
                          }}>
                          <View
                            style={{
                              width: 20,
                              height: 20,
                              borderWidth: 1,
                              borderColor:
                                v?.correct_answer == 2
                                  ? COLORS.primary
                                  : v?.selected == 2
                                  ? COLORS.primary2
                                  : COLORS.black,
                              borderRadius: 50,
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}>
                            <View
                              style={{
                                width: 13,
                                height: 13,

                                backgroundColor:
                                  v?.correct_answer == 4
                                    ? COLORS.primary
                                    : v?.selected == 4
                                    ? COLORS.primary2
                                    : COLORS.white,
                                borderRadius: 50,
                              }}
                            />
                          </View>

                          <Image
                            source={{
                              uri: `${endpointImage}/${v.option_media_2}`,
                            }}
                            resizeMode="contain"
                            style={{
                              width: 120,
                              height: 120,
                              // borderRadius: 50,
                              marginLeft: 10,
                              // tintColor: COLORS.white,
                            }}
                          />
                        </View>
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        onPress={() => {
                          // setSentMultipleUserGift(data);
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: 15,
                            // justifyContent: 'center',
                          }}>
                          <View
                            style={{
                              width: 20,
                              height: 20,
                              borderWidth: 1,
                              borderColor:
                              v?.correct_answer == 2
                              ? COLORS.primary
                              : v?.selected == 2
                              ? COLORS.primary2
                              : COLORS.black,
                              borderRadius: 50,
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}>
                            <View
                              style={{
                                width: 13,
                                height: 13,

                                backgroundColor:
                                  v?.correct_answer == 2
                                    ? COLORS.primary
                                    : v?.selected == 2
                                    ? COLORS.primary2
                                    : COLORS.white,
                                borderRadius: 50,
                              }}
                            />
                          </View>

                          <Text
                            style={{
                              fontWeight: '700',
                              fontSize: 14,
                              color: COLORS.black,
                              marginLeft: 10,
                            }}>
                            {v?.option_text_2}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    )}
                    {/* ============Option-3================================= */}

                    {v?.option_media_3 ? (
                      <TouchableOpacity
                        onPress={() => {
                          // setSentMultipleUserGift(data);
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: 15,
                            // justifyContent: 'center',
                          }}>
                          <View
                            style={{
                              width: 20,
                              height: 20,
                              borderWidth: 1,
                              borderColor:
                                v?.selected == 3
                                  ? COLORS.primary
                                  : COLORS.black,
                              borderRadius: 50,
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}>
                            <View
                              style={{
                                width: 13,
                                height: 13,

                                backgroundColor:
                                  v?.selected == 3
                                    ? COLORS.primary
                                    : COLORS.white,
                                borderRadius: 50,
                              }}
                            />
                          </View>

                          <Image
                            source={{
                              uri: `${endpointImage}/${v.option_media_3}`,
                            }}
                            resizeMode="contain"
                            style={{
                              width: 120,
                              height: 120,
                              // borderRadius: 50,
                              marginLeft: 10,
                              // tintColor: COLORS.white,
                            }}
                          />
                        </View>
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        onPress={() => {
                          // setSentMultipleUserGift(data);
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: 15,
                            // justifyContent: 'center',
                          }}>
                          <View
                            style={{
                              width: 20,
                              height: 20,
                              borderWidth: 1,
                              borderColor:
                              v?.correct_answer == 3
                              ? COLORS.primary
                              : v?.selected == 3
                              ? COLORS.primary2
                              : COLORS.black,
                              borderRadius: 50,
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}>
                            <View
                              style={{
                                width: 13,
                                height: 13,

                                backgroundColor:
                                  v?.correct_answer == 3
                                    ? COLORS.primary
                                    : v?.selected == 3
                                    ? COLORS.primary2
                                    : COLORS.white,
                                borderRadius: 50,
                              }}
                            />
                          </View>

                          <Text
                            style={{
                              fontWeight: '700',
                              fontSize: 14,
                              color: COLORS.black,
                              marginLeft: 10,
                            }}>
                            {v?.option_text_3}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    )}

                    {/* ============Option-4================================= */}

                    {v?.option_media_4 ? (
                      <TouchableOpacity
                        onPress={() => {
                          // setSentMultipleUserGift(data);
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: 15,
                            // justifyContent: 'center',
                          }}>
                          <View
                            style={{
                              width: 20,
                              height: 20,
                              borderWidth: 1,
                              borderColor:
                                v?.correct_answer == 4
                                  ? COLORS.primary
                                  : v?.selected == 4
                                  ? COLORS.primary2
                                  : COLORS.black,
                              borderRadius: 50,
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}>
                            <View
                              style={{
                                width: 13,
                                height: 13,

                                backgroundColor:
                                  v?.correct_answer == 4
                                    ? COLORS.primary
                                    : v?.selected == 4
                                    ? COLORS.primary2
                                    : COLORS.white,
                                borderRadius: 50,
                              }}
                            />
                          </View>

                          <Image
                            source={{
                              uri: `${endpointImage}/${v.option_media_4}`,
                            }}
                            resizeMode="contain"
                            style={{
                              width: 120,
                              height: 120,
                              // borderRadius: 50,
                              marginLeft: 10,
                              // tintColor: COLORS.white,
                            }}
                          />
                        </View>
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        onPress={() => {
                          // setSentMultipleUserGift(data);
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: 15,
                            // justifyContent: 'center',
                          }}>
                          <View
                            style={{
                              width: 20,
                              height: 20,
                              borderWidth: 1,
                              borderColor:
                                v?.correct_answer == 4
                                  ? COLORS.primary
                                  : v?.selected == 4
                                  ? COLORS.primary2
                                  : COLORS.black,
                              borderRadius: 50,
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}>
                            <View
                              style={{
                                width: 13,
                                height: 13,

                                backgroundColor:
                                  v?.correct_answer == 4
                                    ? COLORS.primary
                                    : v?.selected == 4
                                    ? COLORS.primary2
                                    : COLORS.white,
                                borderRadius: 50,
                              }}
                            />
                          </View>

                          <Text
                            style={{
                              fontWeight: '700',
                              fontSize: 14,
                              color: COLORS.black,
                              marginLeft: 10,
                            }}>
                            {v?.option_text_4}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    )}
                  </View>
                </>
              );
            })}
          </View>
        </ScrollView>

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 10,
          }}>
          <TouchableOpacity
            style={{marginTop: 30}}
            // onPress={onHandelChangeScreen1}
          >
            <View
              style={{
                backgroundColor: COLORS.primary,
                height: 35,
                width: 170,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5,
              }}>
              <Text style={{fontWeight: 'bold', color: COLORS.white}}>
                Finish
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default ExamineersInformationScreen;
