import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CoinsScreen from './CoinsScreen';
import CoinDetailScreen from './CoinDetailScreen';

// creating stack component
const Stack = createStackNavigator();

const CoinsStack = () => {
  return (
    //navigator component which manages the childrens
    <Stack.Navigator>
      {/* Component used for specifying route configuration */}
      <Stack.Screen name="Coins" component={CoinsScreen} />
      <Stack.Screen name="CoinDetail" component={CoinDetailScreen} />
    </Stack.Navigator>
  );
};

export default CoinsStack;
