import React, {useEffect, useState} from 'react';
import {Pressable, View, Text, StyleSheet, Image} from 'react-native';
import Storage from '../../libs/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FavoriteButton = ({coin}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handlePress = () => {
    if (isFavorite) {
      removeFavorite();
    } else {
      addFavorite();
    }
  };

  const checkFavorite = async () => {
    try {
      const key = `favorite-${coin.id}`;
      // console.log(key);
      const checking = await Storage.instance.get(key);
      //   const checking = await Storage.instance.getAllKeys();
      //   console.log('data in the storage', checking);

      //if its in favorite, showing the star
      if (checking !== null) {
        setIsFavorite(true);
        // console.log('coin is added to favorites');
      }
    } catch (err) {
      console.log('checkFavorite err', err);
    }
  };

  const addFavorite = async () => {
    try {
      const key = `favorite-${coin.id}`;

      const stored = await Storage.instance.store(key, JSON.stringify(coin));
      //   const stored = await AsyncStorage.setItem(key, JSON.stringify(coin));

      if (stored) {
        setIsFavorite(true);
        // console.log('dato añadido a favoritos');
      }
    } catch (err) {
      console.log('addFavorite err', err);
    }
  };

  const removeFavorite = async () => {
    const key = `favorite-${coin.id}`;
    const deleted = await Storage.instance.remove(key);

    if (deleted) {
      //   console.log('dato removido de favoritos');
      setIsFavorite(false);
    }
  };

  useEffect(() => {
    checkFavorite();
  }, [isFavorite]);
  return (
    <View>
      <Pressable style={styles.button} onPress={() => handlePress()}>
        {isFavorite ? (
          <Image
            source={require('../../assets/ActiveStar.png')}
            style={styles.star}
          />
        ) : (
          <Image
            source={require('../../assets/InactiveStar.png')}
            style={styles.star}
          />
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginRight: 8,
  },
});

export default FavoriteButton;
