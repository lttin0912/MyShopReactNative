import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Cart extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
            Cart Component
        </Text>
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
