import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import Main from './Main/Main';
import OrderHistory from './OrderHistory/OrderHistory';

StatusBar.setHidden(true);

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <RootStack />
      </View>
    );
  }
}

const RootStack = StackNavigator({
  Main_Screen: { screen: Main, navigationOptions: { header: null } },  
  Authentication_Screen: { screen: Authentication, navigationOptions: { header: null } },
  ChangeInfo_Screen: { screen: ChangeInfo, navigationOptions: { header: null } },
  OrderHistory_Screen: { screen: OrderHistory, navigationOptions: { header: null } },
},
{
  initialRouteName: 'Main_Screen',
});
