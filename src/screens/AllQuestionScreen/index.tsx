/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {COLORS, SIZES} from '../../constants';
import {
  FlatList,
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AppStatusBar from '../AppStatusBar';
// import { ScrollView } from 'react-native-gesture-handler';

// import AppStatusBar from '../../AppStatusBar';

const Home = () => {
  const navigation = useNavigation();
  const {userProfile, myRoomsData} = useSelector((state: any) => state.product);
  const [fullName, setFullName] = useState<any>();
  const [phoneNumber, setPhoneNumber] = useState<any>();

  async function onHandelChangeScreen() {
    navigation.navigate();
  }

  const data = [
    {exam_name: 'Ehwa UBT 21_00', price: 243, status: '-', id: 1},
    {exam_name: 'Ehwa UBT 21_01', price: 243, status: '-', id: 2},
    {exam_name: 'Ehwa UBT 21_02', price: 243, status: '-', id: 3},
  ];

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
            Remaining Question Set (0)
          </Text>
          <View
            style={{
              marginHorizontal: 10,
              width: SIZES.width * 0.95,
              // marginTop: 5,
              // marginBottom: 5,
              // elevation: 3,
              backgroundColor: COLORS.white,
              // borderRadius: 5,
            }}>
            <View
              style={{
                height: 50,
                justifyContent: 'space-between',
                alignItems: 'center',
                marginLeft: 10,
                flexDirection: 'row',
                marginHorizontal: 20,
              }}>
              <View style={{width: '55%', alignItems: 'center'}}>
                <Text
                  style={{
                    fontWeight: '900',
                    fontSize: 15,
                    color: COLORS.primary,
                    marginLeft: 10,
                  }}>
                  Exam Name
                </Text>
              </View>

              <View style={{width: '25%', alignItems: 'center'}}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '800',
                    color: COLORS.primary,
                  }}>
                  Price
                </Text>
              </View>
              <View style={{width: '25%', alignItems: 'center'}}>
                <Text
                  style={{
                    fontWeight: '800',
                    fontSize: 15,
                    color: COLORS.primary,
                    marginLeft: 10,
                  }}>
                  Status
                </Text>
              </View>
            </View>
          </View>
        </View>

        <FlatList
          style={{marginTop: 0}}
          data={data}
          scrollEnabled={true}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => `PopularCourses-${item.id}`}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  console.log(item.id, '');

                  navigation.navigate('QuestionDetailsScreen', {
                    id: item.id,
                  });
                }}>
                <View
                  style={{
                    marginHorizontal: 10,
                    width: SIZES.width * 0.95,
                    marginTop: 5,
                    marginBottom: 5,
                    elevation: 3,
                    backgroundColor: COLORS.white,
                    borderRadius: 5,
                  }}>
                  <View
                    style={{
                      height: 70,
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginLeft: 10,
                      flexDirection: 'row',
                      marginHorizontal: 20,
                    }}>
                    <View style={{width: '55%', alignItems: 'center'}}>
                      <Text
                        style={{
                          fontWeight: '700',
                          fontSize: 15,
                          color: COLORS.black,
                          marginLeft: 10,
                        }}>
                        {`${item.exam_name} `}
                      </Text>
                    </View>

                    <View style={{width: '25%', alignItems: 'center'}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '600',
                          color: COLORS.primary,
                        }}>
                        {`৳ ${item.price}`}
                      </Text>
                    </View>
                    <View style={{width: '25%', alignItems: 'center'}}>
                      <Text
                        style={{
                          fontWeight: '700',
                          fontSize: 15,
                          color: COLORS.black,
                          marginLeft: 10,
                        }}>
                        {`${item.status} `}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </>
  );
};

export default Home;
