import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class OrderHistory extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Order History Component
        </Text>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Text>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F66A69',
  }
});
