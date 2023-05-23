import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import {
  AllDispatchProp,
  LOADED_ALL_ROOMS_DATA,
  LOADING_ALL_ROOMS_DATA,
  LOADED_ALL_QUESTION,
  LOADING_ALL_QUESTION,
  LOADED_DRAWER_OPEN_AND_CLOSE,
} from './types';
import {endpoint} from '../../../apiConstants';

export const loadAllQuestions = () => async (dispatch: AllDispatchProp) => {
  dispatch({type: LOADING_ALL_QUESTION, payload: null});
  axios
    .get(`${endpoint}/home/AllQuestionsListView/`)
    .then(res => {
      dispatch({type: LOADED_ALL_QUESTION, payload: res.data.data});
    })
    .catch(err => {
      dispatch({type: LOADED_ALL_QUESTION, payload: err});
    });
};

export const loadDrawerOpenAndClose= (data) => async (dispatch: AllDispatchProp) => {
  dispatch({type: LOADED_DRAWER_OPEN_AND_CLOSE, payload: data});

};
