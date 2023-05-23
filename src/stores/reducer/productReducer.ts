import {
  LOADED_ALL_QUESTION,
  LOADED_DRAWER_OPEN_AND_CLOSE,
} from '../actions/types';

const intialState = {
  sending: false,
  loading: true,
  isDrawerOpenAndClose: false,
  rechargeAgentData: null,
  allQuestionData: null,
};

export default (state = intialState, {payload, type}: any) => {
  switch (type) {
    case LOADED_DRAWER_OPEN_AND_CLOSE:
      return {
        ...state,
        isDrawerOpenAndClose: payload,
      };

    case LOADED_ALL_QUESTION:
      return {
        ...state,
        allQuestionData: payload,
      };

    default:
      return state;
  }
};
