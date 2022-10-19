const API_URL = 'https://api.coinstats.app/public/v1/coins';

const fetchCoins = async () => {
  const res = await fetch(API_URL);
  const data = await res.json();
  return data.coins;
};

export default fetchCoins;
