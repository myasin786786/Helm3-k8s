
import { userConstants } from "../actions/types";

const initialState = {
  investmentFormLoading: false,
  isOpen:true,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case userConstants.INVEST_SUBMIT_LOADING:
      return {
        ...state,
        investmentFormLoading: action.payload
      };
      case userConstants.TOGGLE_MODAL:
        return {
          ...state,
          isOpen: action.payload
        };
    default:
      return state;
  }
}

