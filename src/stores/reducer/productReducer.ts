import {
  ADD_TO_CART,
  CHECK_OUT,
  DELETE_PRODUCT,
  LOADED_PRODUCTS,
  LOADING_PRODUCTS,
  SENDING_PRODUCT,
  SENT_PRODUCT,
  LOADING_CAROUSERL,
  LOADED_CAROUSERL,
  LOADED_CARTPRODUCT,
  LOADING_CARTPRODUCT,
  LOADING_ShippingAddress,
  LOADED_ShippingAddress,
  ShippingAddress_FAIL,
  LOADING_Profile,
  LOADED_Profile,
  Profile_FAIL,
  LOADING_Accounts,
  LOADED_Accounts,
  Accounts_FAIL,
  LOADING_AllOrderProducts,
  LOADED_AllOrderProducts,
  AllOrderProduct_FAIL,
  LOADING_CancelledProductList,
  LOADED_CancelledProductList,
  CancelledProductList_FAIL,
  LOADING_CompleteOrders,
  LOADED_CompleteOrders,
  CompleteOrders_FAIL,
  LOADING_NewOrders,
  LOADED_NewOrders,
  NewOrders_FAIL,
  LOADING_ReturnsProductList,
  LOADED_ReturnsProductList,
  NewOrders_ReturnsProductList,
  LOADING_YourProfile,
  LOADED_YourProfile,
  YourProfile_FAIL,
  LOADING_Orders,
  LOADED_Orders,
  Orders_FAIL,
  LOADING_LoginSecurity,
  LOADED_LoginSecurity,
  LoginSecurity_FAIL,
  CHECK_IS_AUTH_LOADED,
  LOADED_USER_PROFILE,
  LOADING_USER_PROFILE,
  LOADED_IS_AUTH,
  LOADING_IS_AUTH,
  LOADED_OWN_ALL_POST,
  LOADED_ALL_POST,
  LOADED_OTHER_USER_DATA,
  LOADED_OTHER_USER_POST_DATA,
  LOADED_P2P_MESSAGE_ALL_USERS,
  LOADED_MY_ROOMS,
  LOADED_MY_BALANCE,
  LOADED_MY_ALL_FRIEND_LIST,
  LOADED_ALL_ROOMS_DATA,
  LOADED_RECHARGE_AGENT,
} from '../actions/types';

const intialState = {
  sending: false,
  loading: true,
  products: [],
  product: null,
  shippingAddress: null,
  profileData: null,
  allOrderProducts: null,
  yourProfile: null,
  checkIsAuth: null,
  cartProducts: [],
  userProfile: [],
  isAuth: null,
  ownAllPost: [],
  allPost: [],
  otherUserLoadData: [],
  otherUserLoadPostData: [],
  P2PMessageAllUsersData: [],
  myRoomsData: [],
  myBalance: [],
  myAllFriendList: [],
  allRoomsData: [],
  rechargeAgentData: null,
};

export default (state = intialState, {payload, type}: any) => {
  switch (type) {
    case SENDING_PRODUCT:
      return {
        ...state,
        sending: true,
      };

    case LOADED_RECHARGE_AGENT:
      return {
        ...state,
        rechargeAgentData: payload,
        loading: false,
      };


    default:
      return state;
  }
};
