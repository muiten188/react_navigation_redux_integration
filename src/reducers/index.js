import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import nav from "./redu";

const AppReducer = combineReducers({
  nav
});

export default AppReducer;