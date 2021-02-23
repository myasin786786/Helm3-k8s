
import { userConstants } from "../actions/types";

const initialState = {
  courseRegisterLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case userConstants.COURSE_REGISTER_LOADING:
      return {
        ...state,
        courseRegisterLoading: action.payload
      };

    default:
      return state;
  }
}

