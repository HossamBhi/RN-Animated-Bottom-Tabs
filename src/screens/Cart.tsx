import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Cart = () => {
  return (
    <View style={styles.container}>
      <Text>Cart</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'cyan',
  },
});
export default Cart;
