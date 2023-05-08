//** Amazon Auth Types */

export const LOADING_OWN_ALL_POST = '  LOADING_OWN_ALL_POST';
export const LOADED_OWN_ALL_POST = 'LOADED_OWN_ALL_POST';

export const LOADING_P2P_MESSAGE_ALL_USERS = 'LOADING_P2P_MESSAGE_ALL_USERS';
export const LOADED_P2P_MESSAGE_ALL_USERS = 'LOADED_P2P_MESSAGE_ALL_USERS';

export const LOADING_RECHARGE_AGENT = 'LOADING_RECHARGE_AGENT';
export const LOADED_RECHARGE_AGENT = 'LOADED_RECHARGE_AGENT';
export const LOADED_IS_AUTH = 'LOADED_IS_AUTH';
export const LOADING_IS_AUTH = 'LOADING_IS_AUTH';

export const LOADED_ALL_ROOMS_DATA = 'LOADED_ALL_ROOMS_DATA';
export const LOADING_ALL_ROOMS_DATA = 'LOADING_ALL_ROOMS_DATA';

export const LOADED_MY_BALANCE = 'LOADED_MY_BALANCE';
export const LOADING_MY_BALANCE = 'LOADING_MY_BALANCE';

export const LOADED_MY_ALL_FRIEND_LIST = 'LOADED_MY_ALL_FRIEND_LIST';
export const LOADING_MY_ALL_FRIEND_LIST = 'LOADING_MY_ALL_FRIEND_LIST';

export const USER_LOADING = 'USER_LOADING';
export const USER_LOADED = 'USER_LOADED';

export const CHECK_IS_AUTH_LOADING = 'CHECK_IS_AUTH_LOADING';
export const CHECK_IS_AUTH_LOADED = 'CHECK_IS_AUTH_LOADED';
export const LOADED_USER_PROFILE = 'LOADED_USER_PROFILE';
export const LOADING_USER_PROFILE = 'LOADING_USER_PROFILE';

export const LOADING_ALL_POST = '  LOADING_ALL_POST';
export const LOADED_ALL_POST = 'LOADED_ALL_POST';
export const LOADING_OTHER_USER_DATA = 'LOADING_OTHER_USER_DATA';
export const LOADED_OTHER_USER_DATA = 'LOADED_OTHER_USER_DATA';
export const LOADED_OTHER_USER_POST_DATA = 'LOADED_OTHER_USER_POST_DATA';

export const AUTH_ERROR = 'AUTH_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const REG_LOADING = 'REG_LOADING';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const LOG_LOADING = 'LOG_LOADING';

//** Amazon Product Types */
export const SENDING_PRODUCT = 'SENDING_PRODUCT';
export const LOADING_PRODUCTS = 'LOADING_PROUDCTS';
export const SENT_PRODUCT = 'SENT_PRODUCT';
export const LOADED_PRODUCTS = 'LOADED_PRODUCTS';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const LOADING_CAROUSERL = 'LOADING_CAROUSERL';
export const LOADED_CAROUSERL = 'LOADED_CAROUSERL';

//** Amazon Address Types */

export const LOADING_ShippingAddress = 'LOADING_ShippingAddress';
export const LOADED_ShippingAddress = 'LOADED_ShippingAddress';
export const ShippingAddress_FAIL = 'ShippingAddress_FAIL';
export const LOADING_Profile = 'LOADING_Profile';
export const LOADED_Profile = 'LOADED_Profile';
export const Profile_FAIL = 'Profile_FAIL';
export const LOADING_Accounts = 'LOADING_Accounts';
export const LOADED_Accounts = 'LOADED_Accounts';
export const Accounts_FAIL = 'Accounts_FAIL';
export const LOADING_CARTPRODUCT = 'LOADING_CARTPRODUCT';
export const LOADED_CARTPRODUCT = 'LOADED_CARTPRODUCT';

export const LOADING_AllOrderProducts = 'LOADING_AllOrderProducts';
export const LOADED_AllOrderProducts = 'LOADED_AllOrderProducts';
export const AllOrderProduct_FAIL = 'AllOrderProduct_FAIL';

export const LOADING_CancelledProductList = 'LOADING_CancelledProductList';
export const LOADED_CancelledProductList = 'LOADED_CancelledProductList';
export const CancelledProductList_FAIL = 'CancelledProductList_FAIL';

export const LOADING_CompleteOrders = 'LOADING_CompleteOrders';
export const LOADED_CompleteOrders = 'LOADED_CompleteOrders';
export const CompleteOrders_FAIL = 'CompleteOrders_FAIL';

export const LOADING_NewOrders = 'LOADING_NewOrders';
export const LOADED_NewOrders = 'LOADED_NewOrders';
export const NewOrders_FAIL = 'NewOrders_FAIL';

export const LOADING_ReturnsProductList = 'LOADING_ReturnsProductList';
export const LOADED_ReturnsProductList = 'LOADED_ReturnsProductList';
export const NewOrders_ReturnsProductList = 'NewOrders_ReturnsProductList';

export const LOADING_YourProfile = 'LOADING_YourProfile';
export const LOADED_YourProfile = 'LOADED_YourProfile';
export const YourProfile_FAIL = 'YourProfile_FAIL';

export const LOADING_Orders = 'LOADING_Orders';
export const LOADED_Orders = 'LOADED_Orders';

export const LOADING_MY_ROOMS = 'LOADING_MY_ROOMS';
export const LOADED_MY_ROOMS = 'LOADED_MY_ROOMS';

export const Orders_FAIL = 'Orders_FAIL';

export const LOADING_LoginSecurity = 'LOADING_LoginSecurity';
export const LOADED_LoginSecurity = 'LOADED_LoginSecurity';
export const LoginSecurity_FAIL = 'LoginSecurity_FAIL';

//** Amazon Cart Types */
export const ADD_TO_CART = 'ADD_TO_CART';
export const CHECK_OUT = 'CHECK_OUT';

//** Amazon Error Types */
export const GET_ERRORS = 'GET_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

//** Amazon Dispatch Props */
export type AllDispatchProp = (arg0: {
  type: string;
  payload: any | void;
}) => void;

//** Amazon Action Props */
export type ActionProps = {
  type: any;
  payload: any | void;
};

//** Amazon URI */
export const API_URI = `http://orbitplug.com.swadexpress.com/shop/`;
