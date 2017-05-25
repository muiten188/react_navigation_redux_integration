import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';

import { BasicApp } from '../container/App';

const mainAction = BasicApp.router.getActionForPathAndParams('Main');
const tempNavState = BasicApp.router.getStateForAction(mainAction);
const secondAction = BasicApp.router.getActionForPathAndParams('Profile');
const initialNavState = BasicApp.router.getStateForAction(
  mainAction,
  tempNavState
);

function todo(state = initialNavState, action = {}) {
    // Simply return the original `state` if `nextState` is null or undefined.
    let nextState;
    switch (action.type) {        
        case 'Push':
        debugger;
            nextState = BasicApp.router.getStateForAction(
                NavigationActions.navigate({ routeName: action.route.type }),
                state
            );
            break;
        case 'Pop':
            nextState = BasicApp.router.getStateForAction(
                NavigationActions.back(),
                state
            );
            break;
        default:
            nextState = BasicApp.router.getStateForAction(action, state);
            break;
    }
    return nextState;
}
export default todo