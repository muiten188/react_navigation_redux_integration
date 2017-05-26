# react_navigation_redux_integration
To install and use
npm install
react-native run-android

I just test on my android(I don't have iphone or Mac :D)
I make project to test react_navigation with redux integration so code clean yet. but you can easy to understand. I use StackNavigator in react-navigation
to make example.
# navigation(App) presented below:
```javascript
export const BasicApp = StackNavigator({
  Main: { screen: MainScreen },
  Profile: { screen: ProfileScreen },
}, stackNavigatorConfiguration)

const AppWithNavigationState = ({ navigationAction, nav }) => (
  <BasicApp navigation={addNavigationHelpers({ navigationAction, state: nav })} />
);
function mapStateToProps(state, props) {
  return { nav: state.nav || { a: 1 } }
};
const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRouteName: 'TabOneScreenOne'
}
function mapToDispatch(dispatch) {
  return {
    navigationAction: bindActionCreators(navigationAction, dispatch),
  }
}

export default connect(mapStateToProps, mapToDispatch)(AppWithNavigationState);
```
  
  ---------------
# Action navigation
// router action
```javascript
export function pushAction(route) {
    debugger;
  return {
    type:"Push",
    route
  }
}
export function popAction() {
  return {
    type:"Pop"
  }
}
```
----------------------
# reducers
```javascript
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
```
