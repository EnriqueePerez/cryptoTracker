import {useState, useEffect} from 'react';

//fetch library
import Http from '../libs/http';

export const useCoins = () => {
  const urlAPI = 'https://api.coinlore.net/api/tickers/';

  const [coins, setCoins] = useState();

  //calling api and setting on useState
  const callAPI = async () => {
    const coins = await Http.instance.get(urlAPI);

    setCoins(coins.data);
    // console.log('coins', coins);
  };
  useEffect(() => {
    callAPI();
  }, []);

  //exposing the variable and its changing value function
  return [coins, setCoins];
};
