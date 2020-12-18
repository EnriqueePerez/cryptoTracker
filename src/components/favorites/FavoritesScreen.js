import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Storage from '../../libs/storage';
import Colors from '../../res/colors';
import CoinsItem from '../coins/CoinsItem';
import FavoriteEmptyState from './FavoriteEmptyState';

const FavoritesScreen = ({navigation}) => {
  const [favorites, setFavorites] = useState([]);

  const getFavorites = async () => {
    try {
      //getting all favorite keys
      const allKeys = await Storage.instance.getAllKeys();
      const keys = allKeys.filter((key) => key.includes('favorite-'));

      console.log('keys', keys);

      //getting all the data of favorites coins
      const favs = await Storage.instance.multiGet(keys);
      const favorites = favs.map((fav) => JSON.parse(fav[1]));

      console.log('favoriteData', favorites);

      setFavorites(favorites);
    } catch (err) {
      console.log('getFavorites err', err);
    }
  };

  const handlePress = (coin) => {
    navigation.navigate('CoinDetail', {coin});
  };

  useEffect(() => {
    //add event listener when component is mounted
    navigation.addListener('focus', () => {
      getFavorites();
    });
    //when component is unmounted, remove event listener
    return () => {
      navigation.removeListener('focus', () => {
        getFavorites();
      });
    };
  }, []);

  return (
    <View style={styles.container}>
      {favorites.length === 0 ? (
        <FavoriteEmptyState />
      ) : (
        <FlatList
          data={favorites}
          // keyExtractor={({item}) => item.id}
          renderItem={({item}) => (
            <CoinsItem item={item} onPress={() => handlePress(item)} />
          )}
        />
      )}
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
