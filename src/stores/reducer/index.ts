import {combineReducers} from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import productReducer from './productReducer';
import productReduces2 from './productReduces2';

export default combineReducers({
  product: productReducer,
  product2: productReduces2,
  auth: authReducer,
  err: errorReducer,
});
