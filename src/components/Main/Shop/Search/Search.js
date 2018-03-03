import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Search extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
            Search Component
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
    backgroundColor: '#1F85FF',
  }
});
