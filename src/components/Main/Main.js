import React, { Component } from 'react';
import { View } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import Menu from './Menu';
import Shop from './Shop/Shop';
import Authentication from '../Authentication/Authentication';
import ChangeInfo from '../ChangeInfo/ChangeInfo';
import OrderHistory from '../OrderHistory/OrderHistory';

class Main extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <SideMenu />
            </View>
        );
    }
}
const SideMenu = DrawerNavigator({
  Shop_Screen: {
    screen: Shop
  },
  Authentication_Screen: { screen: Authentication, navigationOptions: { header: null } },
  ChangeInfo_Screen: { screen: ChangeInfo, navigationOptions: { header: null } },
  OrderHistory_Screen: { screen: OrderHistory, navigationOptions: { header: null } },
}, {
  drawerWidth: 300,
  drawerPosition: 'left',
  contentComponent: props => <Menu {...props} />
});

export default Main;
