/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import 'react-native-gesture-handler';
import {COLORS} from './src/constants';
import Home from './src/screens/HomeScreen';
import HomeScreen from './src/screens/HomeScreen';
import rootReducer from './src/stores/rootReducer';
import AllQuestionScreen from './src/screens/AllQuestionScreen';
import ChooseExamScreen from './src/screens/ChooseExamScreen';
import ExamineersInformationScreen from './src/screens/ExamineersInformationScreen';
import QuestionDetailsScreen from './src/screens/QuestionDetailsScreen';
import QuestionDetailScreen from './src/screens/QuestionDetailsScreen';
import ExamDoneScreen from './src/screens/ExamDoneScreen';
const Stack = createSharedElementStackNavigator();

// const store = createStore(themeReducer, applyMiddleware(thunk));
const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  const [appLoading, setPppLoading] = useState<string>(0);
  const [isAuth, setIsAuth] = useState<string>('');
  const [timer, setTimer] = React.useState(2);

  return (
    <>
      <Provider store={store}>
        <NavigationContainer
          // linking={linking}
          // ref={navigationRef}
          fallback={
            <View
              style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
              <ActivityIndicator color={COLORS.primary} size="large" />
            </View>
          }>
          <Stack.Navigator
            screenOptions={{
              //   // useNativeDriver: true,
              headerShown: false,
            }}
            initialRouteName={'HomeScreen'}
            detachInactiveScreens={false}>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{headerShown: false}}
            />

            <Stack.Screen
              name="AllQuestionScreen"
              component={AllQuestionScreen}
              options={{headerShown: false}}
            />

            <Stack.Screen
              name="ChooseExamScreen"
              component={ChooseExamScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ExamineersInformationScreen"
              component={ExamineersInformationScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="QuestionDetailsScreen"
              component={QuestionDetailsScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ExamDoneScreen"
              component={ExamDoneScreen}
              options={{headerShown: false}}
            />
      
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
