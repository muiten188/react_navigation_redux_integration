import React from 'react';

import {
    Platform,
    AppRegistry,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    Button
} from 'react-native';
export default class MainScreen extends React.Component {
    constructor(props) {
        super(props);   
    }
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Button
                    title="Go to Jane's profile"
                    onPress={() =>
                        this.props.navigation.navigationAction.pushAction({ type: 'Profile' })
                    }
                /><Button
                    title="Go to Jane's profile2"
                    onPress={() =>
                        navigate('Profile', { name: 'Jane' })
                    }
                />
            </View>
        );
    }
}