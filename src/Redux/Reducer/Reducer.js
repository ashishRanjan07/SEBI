import {CHANGE_LANGUAGE, LOGIN, SAVEDATA, THEME_CHANGE} from '../Action/Action';

const initialState = {
  language: 'en',
  mode: 'light',
  isLoggedIn: 'No',
  saveData:'null',
};

// Reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    case THEME_CHANGE:
      return {
        ...state,
        mode: action.payload,
      };
    case LOGIN:
      return {
        ...state,
        isLoggedIn: action.payload,
      };
      case SAVEDATA: 
      return {
        ...state,
        saveData:action.payload
      }
    default:
      return state;
  }
};

export default rootReducer;
