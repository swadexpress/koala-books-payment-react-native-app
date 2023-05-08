import {combineReducers} from 'redux';
import authReducer from './reducer/authReducer';
import productReducer from './reducer/productReducer';
import tabReducer from './tab/tabReducer';
import themeReducer from './themeReducer';

export default combineReducers({
  product: productReducer,
  appTheme: themeReducer,
  auth: authReducer,
  tabReducer,
});
