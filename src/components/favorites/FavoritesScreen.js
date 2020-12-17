import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../res/colors';
import FavoriteEmptyState from './FavoriteEmptyState';

const FavoritesScreen = () => {
  return (
    <View style={styles.container}>
      <FavoriteEmptyState />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.charade,
    flex: 1,
  },
});

export default FavoritesScreen;
