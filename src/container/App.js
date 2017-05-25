import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import {
  AppRegistry,
  Button,
  Text
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  addNavigationHelpers,
  StackNavigator,
} from 'react-navigation';
import MainScreen from '../component/MainScreen';
import ProfileScreen from '../component/ProfileScreen';
import * as navigationAction from '../actions/action';

export const BasicApp = StackNavigator({
  Main: { screen: MainScreen },
  Profile: { screen: ProfileScreen },
}, stackNavigatorConfiguration)
const AppWithNavigationState = ({ navigationAction, nav }) => (
  <BasicApp navigation={addNavigationHelpers({ navigationAction, state: nav })} />
);
// AppWithNavigationState.propTypes = {
//   navigationAction: PropTypes.object.isRequired,
//   nav: PropTypes.object.isRequired,
// };

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
