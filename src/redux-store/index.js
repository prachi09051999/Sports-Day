import { createStore } from "redux";
import { SportsActionTypes } from "./actions";
import initialState from "./initial-state";

const SportsDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SportsActionTypes.START_LOADER:
      return {
        ...state,
        isLoading: true,
      };
    case SportsActionTypes.END_LOADER:
      return {
        ...state,
        isLoading: false,
      };
    case SportsActionTypes.FETCH_SPORTS_DATA:
      return {
        ...state,
        data: [...state.data, ...action.element],
      };
    case SportsActionTypes.UPDATE_SPORTS_DISABLE_STATE: {
      const updatedState = state.data;
      updatedState.map((sport) => {
        if (sport.id === action.element) sport.isEnabled = false;
        return sport;
      });
      return {
        ...state,
        data: updatedState,
      };
    }
    case SportsActionTypes.UPDATE_SPORTS_ENABLE_STATE: {
      const updatedState = state.data;
      updatedState.map((sport) => {
        if (sport.id === action.element) sport.isEnabled = true;
        return sport;
      });
      return {
        ...state,
        data: updatedState,
      };
    }
    default:
      return state;
  }
};

export const store = createStore(
  SportsDataReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
