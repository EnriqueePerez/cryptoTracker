import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {useCoins} from 'crytoTracker/src/hooks/useCoins.js';
import CoinsItem from './CoinsItem';

const CoinsScreen = (props) => {
  const [coins, setCoins] = useCoins();

  const handlePress = () => {
    // console.log('go to detail', props);
    props.navigation.navigate('CoinDetail');
    // navigation.navigate('Component' {SomeValue: 1}); is also posible is destructuring props
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Coins Screen</Text>
      <Pressable style={styles.btn} onPress={handlePress}>
        <Text style={styles.btnText}>Ir a detail</Text>
      </Pressable>
      {coins !== undefined ? (
        <FlatList
          data={coins}
          renderItem={({item}) => <CoinsItem item={item} />}
        />
      ) : (
        <ActivityIndicator style={styles.loader} color="#000" size="large" />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleText: {
    color: 'white',
    textAlign: 'center',
  },
  btn: {
    padding: 8,
    backgroundColor: 'blue',
    borderRadius: 8,
    margin: 16,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
  },
  loader: {
    marginTop: 60,
  },
});
export default CoinsScreen;