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
import HomeScreen from './src/screens/HomeScreen';
import rootReducer from './src/stores/rootReducer';
import LogInScreen from './src/screens/LogInScreen';
import SubscriptionScreen from './src/screens/SubscriptionScreen';
import ProductListScreen from './src/screens/ProductListScreen';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen';
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
            initialRouteName={'LogInScreen'}
            detachInactiveScreens={false}>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="LogInScreen"
              component={LogInScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="SubscriptionScreen"
              component={SubscriptionScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ProductListScreen"
              component={ProductListScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ProductDetailsScreen"
              component={ProductDetailsScreen}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
