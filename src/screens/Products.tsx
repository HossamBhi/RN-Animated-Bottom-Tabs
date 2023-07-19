import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Products = () => {
  return (
    <View style={styles.container}>
      <Text>Products</Text>
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
export default Products;
