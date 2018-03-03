import React, { Component } from 'react';
import { View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Cart from './Cart/Cart';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import Search from './Search/Search';
import Header from './Header';


export default class Shop extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header navigation={this.props.navigation} />
        <Tabs />
      </View>
    );
  }
}

const Tabs = TabNavigator({
    Home_Tab: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'HOME'
      }
    },
    Cart_Tab: {
      screen: Cart,
      navigationOptions: {
        tabBarLabel: 'Cart'
      }
    },
    Search_Tab: {
      screen: Search,
      navigationOptions: {
        tabBarLabel: 'Search'
      }
    },
    Contact_Tab: {
      screen: Contact,
      navigationOptions: {
        tabBarLabel: 'Contact'
      }
    }
  },
  {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      style: {
        backgroundColor: '#ddd'
      },
      activeTintColor: 'red',
      inactiveTintColor: 'green'
    },
    swipeEnabled: true
  });

