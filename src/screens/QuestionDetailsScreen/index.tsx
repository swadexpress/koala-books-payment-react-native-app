/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-sparse-arrays */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Platform,
  StatusBar,
  Image,
} from 'react-native';
import {cardPerSlide} from './config';
import {COLORS, SIZES, icons} from '../../constants';
import {useNavigation, useRoute} from '@react-navigation/native';
import AsysncStorage from '@react-native-community/async-storage';
// import Sound from 'react-native-sound';
var Sound = require('react-native-sound');
const {width: screenWidth} = Dimensions.get('window');
Sound.setCategory('Playback');

const data1 = [
  {
    qsnNumber: 1,
    qsn: 'What is the size of Bangladesh national flag?',
    option1: '10:6',
    option2: '10:5',
    option3: '10:7',
    option4: '10:4',
  },
  {
    qsnNumber: 2,
    qsn: 'What is the size of Bangladesh national flag?',
    option1: '10:6',
    option2: '10:5',
    option3: '10:7',
    option4: '10:4',
  },
  {
    qsnNumber: 3,
    qsn: 'What is the size of Bangladesh national flag?',
    option1: '10:6',
    option2: '10:5',
    option3: '10:7',
    option4: '10:4',
  },
  {
    qsnNumber: 4,
    qsn: 'What is the size of Bangladesh national flag?',
    option1: '10:6',
    option2: '10:5',
    option3: '10:7',
    option4: '10:4',
  },
  {
    qsnNumber: 5,
    qsn: 'What is the size of Bangladesh national flag?',
    option1: '10:6',
    option2: '10:5',
    option3: '10:7',
    option4: '10:4',
  },

  {
    qsnNumber: 6,
    qsn: 'What is the size of Bangladesh national flag?',
    option1: '10:6',
    option2: '10:5',
    option3: '10:7',
    option4: '10:4',
  },
  {
    qsnNumber: 7,
    qsn: 'What is the size of Bangladesh national flag?',
    option1: '10:6',
    option2: '10:5',
    option3: '10:7',
    option4: '10:4',
  },
  {
    qsnNumber: 8,
    qsn: 'What is the size of Bangladesh national flag?',
    option1: '10:6',
    option2: '10:5',
    option3: '10:7',
    option4: '10:4',
  },
  {
    qsnNumber: 9,
    qsn: 'What is the size of Bangladesh national flag?',
    option1: '10:6',
    option2: '10:5',
    option3: '10:7',
    option4: '10:4',
  },
  {
    qsnNumber: 10,
    qsn: 'What is the size of Bangladesh national flag?',
    option1: '10:6',
    option2: '10:5',
    option3: '10:7',
    option4: '10:4',
  },
  // {qsnNumber: 11},
  // {qsnNumber: 12},
  // {qsnNumber: 13},
  // {qsnNumber: 14},
  // {qsnNumber: 15},
  // {qsnNumber: 16},
  // {qsnNumber: 17},
  // {qsnNumber: 18},
  // {qsnNumber: 19},
  // {qsnNumber: 20},
  // {qsnNumber: 21},
  // {qsnNumber: 22},
  // {qsnNumber: 23},
  // {qsnNumber: 24},
  // {qsnNumber: 25},
  // {qsnNumber: 26},
  // {qsnNumber: 27},
  // {qsnNumber: 28},
  // {qsnNumber: 29},
  // {qsnNumber: 30},
  // {qsnNumber: 31},
  // {qsnNumber: 32},
  // {qsnNumber: 33},
  // {qsnNumber: 34},
  // {qsnNumber: 35},
  // {qsnNumber: 36},
  // {qsnNumber: 37},
  // {qsnNumber: 38},
  // {qsnNumber: 39},
  // {qsnNumber: 40},
];

function MovieHome() {
  const navigation = useNavigation();

  const [data, setData] = useState<any>(data1);
  const [totalSlide, setTotalSlide] = useState<any>(0);
  const [currentSlide, setCurrentSlide] = useState<any>(1);
  const [showCurrentQsn, setShowCurrentQsn] = useState<any>(0);
  const [isNext, setIsNext] = useState<any>(false);
  const [fullName, setFullName] = useState<any>();
  const [examineeNumberLoad, setExamineeNumberLoad] = useState<any>();
  const [isPrev, setIsPrev] = useState<any>(false);
  const [isAudioPlay, setIsAudioPlay] = useState<any>(false);

  const [remainingQSN, setRemainingQSN] = useState<any>([]);
  const [showQuestionDetail, setShowQuestionDetail] = useState<any>(false);
  const stepCarousel = useRef();
  const [qsnTime, setQsnTime] = useState<any>(0);

  // function will find out total no of slide and set to state
  const setTotalSlides = (contentWidth: number) => {
    // const {totalSlide, currentSlide} = this.state;
    // contentWidth received from onContentSizeChange
    if (contentWidth !== 0) {
      const approxSlide = contentWidth / screenWidth;
      if (totalSlide !== parseInt(approxSlide)) {
        // this.setState({
        //   totalSlide: parseInt(Math.ceil(approxSlide.toFixed(2))),
        // });
        setTotalSlide(parseInt(Math.ceil(approxSlide.toFixed(2))));
        calculateNextPrev(parseInt(approxSlide), currentSlide);
      }
    }
  };

  const onHandelSetCurrentSlide = (currentSlide: number) => {
    // this.setState({
    //   currentSlide,
    // });
    setCurrentSlide(currentSlide);
  };

  // function will identify current slide visible on screen
  // Also maintaining current slide on carousel swipe.
  const handleScrollEnd = (e: any) => {
    if (!e) {
      return;
    }
    const {nativeEvent} = e;
    // const {totalSlide} = this.state;
    if (nativeEvent && nativeEvent.contentOffset) {
      let currentSlide = 1;
      if (nativeEvent.contentOffset.x === 0) {
        // this.setCurrentSlide(currentSlide);
        onHandelSetCurrentSlide(currentSlide);
      } else {
        const approxCurrentSlide = nativeEvent.contentOffset.x / screenWidth;
        currentSlide = parseInt(Math.ceil(approxCurrentSlide.toFixed(2)) + 1);
        onHandelSetCurrentSlide(currentSlide);
      }
      calculateNextPrev(totalSlide, currentSlide);
    }
  };

  const goToNext = () => {
    // const {currentSlide} = this.state;
    if (stepCarousel) {
      const scrollPoint = currentSlide * screenWidth;

      stepCarousel.current.scrollTo({x: scrollPoint, y: 0, animated: true});
      // following condition is for android only because in android onMomentumScrollEnd doesn't
      // call when we scrollContent with scroll view reference.
      if (Platform.OS === 'android') {
        handleScrollEnd({
          nativeEvent: {contentOffset: {y: 0, x: scrollPoint}},
        });
      }
    }
  };

  const goToPrev = () => {
    if (stepCarousel) {
      const pageToGo = currentSlide - 2;
      const scrollPoint = pageToGo * screenWidth;
      stepCarousel.current.scrollTo({x: scrollPoint, y: 0, animated: true});
      // following condition is for android only because in android onMomentumScrollEnd doesn't
      // call when we scrollContent with scrollview reference.
      if (Platform.OS === 'android') {
        handleScrollEnd({
          nativeEvent: {contentOffset: {y: 0, x: scrollPoint}},
        });
      }
    }
  };

  const setNext = (status: boolean) => {
    // const {isNext} = this.state;
    if (status !== isNext) {
      setIsNext(status);
      // this.setState({
      //   isNext: status,
      // });
    }
  };

  const setPrev = (status: boolean) => {
    if (status !== isPrev) {
      setIsPrev(status);
      // this.setState({
      //   isPrev: status,
      // });
    }
  };

  const calculateNextPrev = (totalPage: number, currentPage: number) => {
    if (totalPage > currentPage) {
      setNext(true);
    }
    if (currentPage === 1) {
      setPrev(false);
    }
    if (currentPage === totalPage) {
      setNext(false);
    }
    if (currentPage > 1) {
      setPrev(true);
    }
  };

  useEffect(() => {
    if (stepCarousel.current) {
      const pageToGo = showCurrentQsn - 1;
      const scrollPoint = pageToGo * screenWidth;

      stepCarousel.current.scrollTo({x: scrollPoint, y: 0, animated: false});
      if (Platform.OS === 'android') {
        handleScrollEnd({
          nativeEvent: {contentOffset: {y: 0, x: scrollPoint}},
        });
      }
    }
  }, [showCurrentQsn]);

  const noOfSlides = Math.ceil(data.length / cardPerSlide);

  function startTimer(duration: any) {
    var timer = duration,
      minutes,
      seconds;
    let interval = setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;
      setQsnTime(minutes + ':' + seconds);
      // console.log(minutes + ':' + seconds);
      // display.textContent = minutes + ":" + seconds;

      if (timer > 0) {
        timer = --duration;
      } else {
        // setIsWinShow(true);
        // setTimeout(() => {
        //   setPKvsPKData('');
        //   setIsWinShow(false);
        // }, 4000);

        return clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }

  async function onHandelChangeScreen() {
    setShowQuestionDetail(!showQuestionDetail);

    var fiveMinutes = 60 * 40;
    if (!qsnTime) {
      startTimer(fiveMinutes);
    }
  }
  async function onHandelChangeQuestionScreen() {
    navigation.navigate('ExamDoneScreen');
  }

  async function handleLoadingData() {
    const fullNameLoad = await AsysncStorage.getItem('@fullName');
    const examineeNumberLoad = await AsysncStorage.getItem('@examineeNumber');
    setFullName(fullNameLoad);
    setExamineeNumberLoad(examineeNumberLoad);
  }
  useEffect(() => {
    handleLoadingData();
  }, []);

  const onHandelChangeScreen1 = () => {
    let sound = new Sound(
      'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/advertising.mp3',
      '',
      (error: any, _sound: any) => {
        if (error) {
          return;
        }

        if (isAudioPlay) {
          sound.pause();
          setIsAudioPlay(isAudioPlay => !isAudioPlay);

        } else {
          sound.play(() => {
            // sound.release();
            setIsAudioPlay(false);
          });
          setIsAudioPlay(isAudioPlay => !isAudioPlay);
        }
      },








    );



    if (isAudioPlay) {
      sound.pause();
      setIsAudioPlay(isAudioPlay => !isAudioPlay);

    } else {
      // sound.play(() => {
      //   // sound.release();
      //   setIsAudioPlay(false);
      // });
      // setIsAudioPlay(isAudioPlay => !isAudioPlay);
    }






  };

  return (
    <>
      {showQuestionDetail ? (
        <View style={{flex: 1, backgroundColor: COLORS.white}}>
          <View
            style={{
              marginTop: StatusBar.currentHeight + 10,
              // marginHorizontal:10
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                // marginHorizontal: 10,
                borderBottomColor: COLORS.gray50,
                borderBottomWidth: 1,
                borderTopColor: COLORS.gray50,
                borderTopWidth: 1,
                height: 40,
                flexWrap: 'wrap',
                // alignItems: 'center',
              }}>
              <View
                style={{
                  width: SIZES.width * 0.4,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '600',
                    color: COLORS.black,
                  }}>
                  Whole QN: {totalSlide}
                </Text>
              </View>
              <View
                style={{
                  width: SIZES.width * 0.4,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderLeftColor: COLORS.gray50,
                  borderLeftWidth: 1,
                  height: 40,
                  borderRightColor: COLORS.gray50,
                  borderRightWidth: 1,
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '600',
                    color: COLORS.black,
                  }}>
                  Remaining QN: {remainingQSN?.length}
                </Text>
              </View>

              <View
                style={{
                  width: SIZES.width * 0.2,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: '800',
                    color: COLORS.black,
                  }}>
                  {qsnTime}
                </Text>
              </View>
            </View>
          </View>
          <ScrollView>
            <View style={{marginBottom: 50}}>
              <ScrollView
                ref={stepCarousel}
                contentContainerStyle={{
                  marginTop: 15,
                  marginHorizontal: 10,
                }}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                decelerationRate={0}
                scrollEnabled={false}
                snapToAlignment={'center'}
                onContentSizeChange={setTotalSlides}
                onMomentumScrollEnd={handleScrollEnd}>
                {[...Array(noOfSlides)].map((e, i) => {
                  const startIndex = i;
                  const startPosition = startIndex;
                  const endPosition = startIndex + 1;
                  return (
                    <>
                      {data.slice(startPosition, endPosition).map(
                        (
                          v: {
                            qsnNumber: any;
                            qsn: any;
                            selected: number;
                            option1:
                              | string
                              | number
                              | boolean
                              | React.ReactElement<
                                  any,
                                  string | React.JSXElementConstructor<any>
                                >
                              | React.ReactFragment
                              | React.ReactPortal
                              | null
                              | undefined;
                            option2:
                              | string
                              | number
                              | boolean
                              | React.ReactElement<
                                  any,
                                  string | React.JSXElementConstructor<any>
                                >
                              | React.ReactFragment
                              | React.ReactPortal
                              | null
                              | undefined;
                            option3:
                              | string
                              | number
                              | boolean
                              | React.ReactElement<
                                  any,
                                  string | React.JSXElementConstructor<any>
                                >
                              | React.ReactFragment
                              | React.ReactPortal
                              | null
                              | undefined;
                            option4:
                              | string
                              | number
                              | boolean
                              | React.ReactElement<
                                  any,
                                  string | React.JSXElementConstructor<any>
                                >
                              | React.ReactFragment
                              | React.ReactPortal
                              | null
                              | undefined;
                          },
                          index: any,
                        ) => {
                          return (
                            <>
                              <View style={{width: SIZES.width}}>
                                <Text
                                  style={{
                                    fontWeight: '700',
                                    fontSize: 14,
                                    color: COLORS.black,
                                  }}>
                                  {`${v?.qsnNumber}. ${v?.qsn}`}
                                </Text>

                                <TouchableOpacity
                                  onPress={() => {
                                    data[i].selected = 1;
                                    data[i].ans = true;

                                    setData([...data]);
                                    let addQsn = v?.qsnNumber;
                                    if (!remainingQSN?.includes(addQsn)) {
                                      setRemainingQSN([
                                        ...remainingQSN,
                                        addQsn,
                                      ]);
                                    }

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
                                          v?.selected == 1
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
                                            v?.selected == 1
                                              ? COLORS.primary
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
                                      {v?.option1}
                                    </Text>
                                  </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                  onPress={() => {
                                    data[i].selected = 2;
                                    data[i].ans = true;
                                    setData([...data]);
                                    let addQsn = v?.qsnNumber;
                                    if (!remainingQSN?.includes(addQsn)) {
                                      setRemainingQSN([
                                        ...remainingQSN,
                                        addQsn,
                                      ]);
                                    }
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
                                          v?.selected == 2
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
                                            v?.selected == 2
                                              ? COLORS.primary
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
                                      {v?.option2}
                                    </Text>
                                  </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                  onPress={() => {
                                    data[i].selected = 3;
                                    data[i].ans = true;
                                    setData([...data]);
                                    let addQsn = v?.qsnNumber;
                                    if (!remainingQSN?.includes(addQsn)) {
                                      setRemainingQSN([
                                        ...remainingQSN,
                                        addQsn,
                                      ]);
                                    }
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

                                    <Text
                                      style={{
                                        fontWeight: '700',
                                        fontSize: 14,
                                        color: COLORS.black,
                                        marginLeft: 10,
                                      }}>
                                      {v?.option3}
                                    </Text>
                                  </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                  onPress={() => {
                                    data[i].selected = 4;
                                    data[i].ans = true;
                                    setData([...data]);
                                    let addQsn = v?.qsnNumber;
                                    if (!remainingQSN?.includes(addQsn)) {
                                      setRemainingQSN([
                                        ...remainingQSN,
                                        addQsn,
                                      ]);
                                    }
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
                                          v?.selected == 4
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
                                            v?.selected == 4
                                              ? COLORS.primary
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
                                      {v?.option4}
                                    </Text>
                                  </View>
                                </TouchableOpacity>
                              </View>
                            </>
                          );
                        },
                      )}
                    </>
                  );
                })}
              </ScrollView>
            </View>
          </ScrollView>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              borderTopColor: COLORS.gray30,
              borderTopWidth: 1,
              height: 40,
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                width: SIZES.width * 0.25,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
              }}
              onPress={goToPrev}
              disabled={!isPrev}>
              <Image
                source={icons.right_arrow}
                resizeMode="contain"
                style={{
                  width: 15,
                  height: 15,
                  marginRight: 10,
                  // borderRadius: 50,
                  tintColor: COLORS.black,
                  transform: [{rotate: '180deg'}],
                }}
              />
              <Text
                style={{fontSize: 15, fontWeight: '800', color: COLORS.black}}>
                Prev
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={onHandelChangeScreen}
              style={{
                borderLeftColor: COLORS.gray30,
                borderLeftWidth: 1,
                borderRightColor: COLORS.gray30,
                borderRightWidth: 1,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                width: SIZES.width * 0.5,
              }}>
              <Text
                style={{fontSize: 15, fontWeight: '800', color: COLORS.black}}>
                Total Questions
              </Text>
            </TouchableOpacity>

            {remainingQSN?.length == 10 ? (
              <TouchableOpacity
                style={{
                  width: SIZES.width * 0.25,
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                }}
                onPress={onHandelChangeQuestionScreen}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: '800',
                    color: COLORS.black,
                  }}>
                  Result
                </Text>

                <Image
                  source={icons.right_arrow}
                  resizeMode="contain"
                  style={{
                    width: 15,
                    height: 15,
                    marginLeft: 10,
                    // borderRadius: 50,
                    tintColor: COLORS.black,
                  }}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={{
                  width: SIZES.width * 0.25,
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                }}
                onPress={goToNext}
                disabled={!isNext}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: '800',
                    color: COLORS.black,
                  }}>
                  Next
                </Text>

                <Image
                  source={icons.right_arrow}
                  resizeMode="contain"
                  style={{
                    width: 15,
                    height: 15,
                    marginLeft: 10,
                    // borderRadius: 50,
                    tintColor: COLORS.black,
                  }}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            // justifyContent: 'center',
            // alignItems: 'center',
            // backgroundColor: COLORS.white,
          }}>
          <View
            style={{
              marginTop: StatusBar.currentHeight + 10,
              // justifyContent: 'center',
              // alignItems: 'center',
              marginHorizontal: 20,
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{fontWeight: '700', color: COLORS.black, fontSize: 17}}>
                {fullName}
              </Text>
              <Text
                style={{fontWeight: '700', color: COLORS.black, fontSize: 17}}>
                {examineeNumberLoad}
              </Text>
            </View>
          </View>

          <View
            style={{
              // marginHorizontal: 10,
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 20,
              marginRight: 10,
            }}>
            {data?.map((item: any, index: number) => (
              <>
                <TouchableOpacity
                  onPress={() => {
                    setShowCurrentQsn(item.qsnNumber);
                    onHandelChangeScreen();
                  }}>
                  <View
                    style={{
                      width: 65,
                      height: 35,
                      borderWidth: 0.6,
                      borderColor: COLORS.primary,
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: item?.selected
                        ? COLORS.primary
                        : COLORS.white,
                      borderRadius: 5,
                      marginLeft: 10,
                      marginTop: 15,
                    }}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 15,
                        color: item?.selected ? COLORS.white : COLORS.primary,
                      }}>
                      {item?.qsnNumber}
                    </Text>
                  </View>
                </TouchableOpacity>
              </>
            ))}
          </View>
          <View
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              alignItems: 'center',
              bottom: 20,
            }}>
            {remainingQSN?.length == 10 ? (
              <TouchableOpacity
                style={{marginTop: 30}}
                onPress={onHandelChangeQuestionScreen}>
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
                    Result
                  </Text>
                </View>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={{marginTop: 30}}
                onPress={onHandelChangeScreen}>
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
                    Submit Answer
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          </View>

          <TouchableOpacity
            style={{marginTop: 30}}
            onPress={onHandelChangeScreen1}>
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
                Submit Answer
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}

export default MovieHome;
