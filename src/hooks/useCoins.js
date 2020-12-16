import {useState, useEffect} from 'react';

//fetch library
import Http from '../libs/http';

export const useCoins = () => {
  const urlAPI = 'https://api.coinlore.net/api/tickers/';

  const [coins, setCoins] = useState();
  const [allCoins, setAllCoins] = useState();

  //calling api and setting on useState
  const callAPI = async () => {
    let fetch = await Http.instance.get(urlAPI);

    setCoins(fetch.data);
    setAllCoins(fetch.data);
    // console.log('coins', coins);
  };
  useEffect(() => {
    callAPI();
  }, []);

  //exposing the variable and its changing value function
  return [coins, allCoins, setCoins];
};
