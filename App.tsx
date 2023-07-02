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
import rootReducer from './src/stores/rootReducer';
import BottomNavigator from './src/navigation/BottomNavigator';
import HomeScreen from './src/screens/HomeScreen';
// import {
//   applyPolyfills,
//   defineCustomElements,
// } from './src/pixobe-coloring-book-6.0.8/package/loader';

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
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
