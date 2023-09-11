import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const PendataanScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.bigOrange}>PendataanScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigOrange: {
    color: 'orange',
    fontWeight: 'bold',
    fontSize: 30,
  },
});

export default PendataanScreen;
