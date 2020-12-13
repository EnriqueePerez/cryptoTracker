import React, {useEffect, useState} from 'react';
import {View, Image, Text, SectionList, StyleSheet} from 'react-native';
import Colors from '../../res/colors';

const CoinDetailScreen = ({route, navigation}) => {
  const [coin, setCoin] = useState(route.params.coin);

  //func to get icon symbol from another api depending on the name
  const getSymbolIcon = (nameid) => {
    if (nameid) {
      const symbol = nameid.toLowerCase().replace(' ', '-');

      return `https://c1.coinlore.com/img/25x25/${symbol}.png`;
    }
  };

  const getSections = (coin) => {
    const sections = [
      {
        title: 'Market Cap',
        data: [coin.market_cap_usd],
      },
      {
        title: 'Volume 24h',
        data: [coin.volume24],
      },
      {
        title: 'Change 24h',
        data: [coin.percent_change_24h],
      },
    ];
    return sections;
  };

  useEffect(() => {
    navigation.setOptions({title: coin.symbol}); //setting title with coin name
    // console.log('coin', props.route.params);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.subHeader}>
        <Image
          style={styles.iconImg}
          source={{uri: getSymbolIcon(coin.nameid)}}
        />
        <Text style={styles.titleText}>{coin.name}</Text>
      </View>
      <SectionList
        sections={getSections(coin)}
        keyExtractor={({item}) => item}
        renderItem={({item}) => (
          <View style={styles.sectionItem}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({section}) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionText}>{section.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.charade,
  },
  subHeader: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 8,
    textAlignVertical: 'center',
  },
  iconImg: {
    width: 25,
    height: 25,
  },
  sectionHeader: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    padding: 8,
  },
  sectionItem: {
    padding: 8,
  },
  itemText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
  sectionText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default CoinDetailScreen;
