import React from 'react';

import {
  Platform,
  ScrollView,
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Button
} from 'react-native';
export default class ProfileScreen extends React.Component {
  constructor(props) {
        super(props);
    }
  static navigationOptions = ({navigation}) => ({
    title: "2"//navigation.state.params.name,""
  });
  render() {
    const { goBack } = this.props.navigation;
    return (
      <Button
        title="Go back"
        onPress={() => this.props.navigation.navigationAction.popAction({ type: 'Main' })}
      />
    );
  }
}