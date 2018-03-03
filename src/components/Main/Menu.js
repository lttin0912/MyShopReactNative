import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class Menu extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#A5A5AF' }}>
                <Text>Component Menu</Text>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Shop_Screen')}
                >
                    <Text>Shop</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Authentication_Screen')}
                >
                    <Text>Authentication</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('ChangeInfo_Screen')}
                >
                    <Text>Change Info</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('OrderHistory_Screen')}
                >
                    <Text>Order History</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Menu;
