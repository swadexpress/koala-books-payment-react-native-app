import {
  API_URI,
  AUTH_ERROR,
  AllDispatchProp,
  CLEAR_ERRORS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  LOG_LOADING,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  REG_LOADING,
  USER_LOADED,
  CHECK_IS_AUTH_LOADED,
} from './types';
import {
  endpoint,
  endpointauth,
  endpointlocahostimage,
} from '../../shopapiconstants';

import AsyncStorage from '@react-native-community/async-storage';
import AsysncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import {returnErrors} from './errorActions';

interface HomePage {
  navigation: CompositeNavigationProp<
    StackNavigationProp<ProductRoutes, 'Home'>,
    StackNavigationProp<ProductRoutes, 'ProductList'>
  >;
}

//* Register Action*//
export const register =
  ({
    username,
    email,
    password,
    password2,
  }: {
    username: string;
    email: string;
    password: string;
    password2: string;
  }) =>
  async (dispatch: AllDispatchProp) => {
    dispatch({type: REG_LOADING, payload: null});

    const data = JSON.stringify({username, email, password, password2});

    await axios({
      method: 'POST',
      url: `${endpointauth}/auth/register/`,
      data,
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(res => {
        dispatch({type: CLEAR_ERRORS, payload: null});
        dispatch({type: REGISTER_SUCCESS, payload: res.data});
      })
      .catch(err => {
      
        dispatch({type: REGISTER_FAIL, payload: null});
        dispatch(
          returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'),
        );
      });
  };


//* Handle logout *//
export const logout = () => async (dispatch: AllDispatchProp) => {
  await AsyncStorage.removeItem('@user_token');

  return dispatch({
    type: LOGOUT_SUCCESS,
    payload: null,
  });
};
