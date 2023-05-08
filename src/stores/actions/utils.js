import axios from 'axios';
import { endpoint } from "./constants";
import AsyncStorage from '@react-native-community/async-storage';

export const authAxios =  axios.create({
  baseURL: `http://orbitplug.com.swadexpress.com/shop`,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('@user_token')}`
  }
});