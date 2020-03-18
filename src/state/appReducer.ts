import { State, ActionTypes, Action } from '../types';

export const initAppState: State = {
  loading: false,
  entries: [],
  results: [],
  value: ''
};

export const appReducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionTypes.toggleLoading:
      return { ...state, loading: !state.loading };
    case ActionTypes.setEntries:
      return { ...state, entries: action.payload };
    case ActionTypes.setResults:
      return { ...state, results: action.payload };
    case ActionTypes.setValue:
      return { ...state, value: action.payload };
    default:
      return state;
  }
};
