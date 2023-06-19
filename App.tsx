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
import DrawerNav1 from './src/screens/drawer/drawer1/DrawerNav1';
import RegistrationScreen from './src/screens/RegistrationScreen';
import SketchCanvasScreen from './src/screens/SketchCanvasScreen';
import BottomNavigator from './src/navigation/BottomNavigator';
import HorgeschichtenDetailsScreen from './src/screens/HorgeschichtenDetailsScreen';
import FillYourProfileScreen from './src/screens/FillYourProfileScreen';
import UnsereAboAngeboteScreen from './src/screens/UnsereAboAngeboteScreen';
import Impressum from './src/screens/Impressum';
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
            initialRouteName={'Impressum'}
            detachInactiveScreens={false}>
              
            <Stack.Screen
              name="HomeScreen"
              component={BottomNavigator}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="UnsereAboAngeboteScreen"
              component={UnsereAboAngeboteScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Impressum"
              component={Impressum}
              options={{headerShown: false}}
            />

            <Stack.Screen
              name="HorgeschichtenDetailsScreen"
              component={HorgeschichtenDetailsScreen}
              options={{headerShown: false}}
            />

            <Stack.Screen
              name="FillYourProfileScreen"
              component={FillYourProfileScreen}
              options={{headerShown: false}}
            />


            <Stack.Screen
              name="SketchCanvasScreen"
              component={SketchCanvasScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="RegistrationScreen"
              component={RegistrationScreen}
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
     
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
