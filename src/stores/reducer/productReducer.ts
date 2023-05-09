import {LOADED_ALL_QUESTION} from '../actions/types';

const intialState = {
  sending: false,
  loading: true,
  rechargeAgentData: null,
  allQuestionData: null,
};

export default (state = intialState, {payload, type}: any) => {
  switch (type) {
    case LOADED_ALL_QUESTION:
      return {
        ...state,
        allQuestionData: payload,
      };

    default:
      return state;
  }
};
