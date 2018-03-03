import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Contact extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
            Contact Component
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
