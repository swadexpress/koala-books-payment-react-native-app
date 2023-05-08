import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import {
  AllDispatchProp,
  LOADED_ALL_ROOMS_DATA,
  LOADING_ALL_ROOMS_DATA,
  LOADED_RECHARGE_AGENT,
  LOADING_RECHARGE_AGENT,
} from './types';
import {endpoint} from '../../../apiConstants';

// import {endpoint} from '../../apiConstants';

export const loadRechargeAgent = () => async (dispatch: AllDispatchProp) => {
  dispatch({type: LOADING_RECHARGE_AGENT, payload: null});
  const userId = await AsyncStorage.getItem('@myUserId');
  const data = {
    userId: userId,
  };
  axios
    .post(`${endpoint}/home/RechargeAgentView/`, data)
    .then(res => {
      // console.log(res.data,'LOADED_MY_BALANCELOADED_MY_BALANCELOADED_MY_BALANCE')
      dispatch({type: LOADED_RECHARGE_AGENT, payload: res.data.data});
    })
    .catch(err => {
      dispatch({type: LOADED_RECHARGE_AGENT, payload: err});
    });
};

// ........................... Load LoginSecurity...........................................

export const loadAllRooms = () => async (dispatch: AllDispatchProp) => {
  dispatch({type: LOADING_ALL_ROOMS_DATA, payload: null});
  const myUserId = await AsyncStorage.getItem('@myUserId');
  const data = {
    myUserId: myUserId,
  };
  axios
    .post(`${endpoint}/all-rooms-view`, data)
    .then(res => {
      // console.log(res.data,'LOADED_MY_BALANCELOADED_MY_BALANCELOADED_MY_BALANCE')
      dispatch({type: LOADED_ALL_ROOMS_DATA, payload: res.data.serverAllRooms});
    })
    .catch(err => {
      dispatch({type: LOADED_ALL_ROOMS_DATA, payload: err});
    });
};
