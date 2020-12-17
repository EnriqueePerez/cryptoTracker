import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const FavoriteEmptyState = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>You don´t have any favorite yet</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: 'center',
  },
});

export default FavoriteEmptyState;
