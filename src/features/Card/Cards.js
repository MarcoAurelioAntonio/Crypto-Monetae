import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCoinsAsync } from './cardsSlice';
import Card from './Card';
import './Cards.css';

export default function Cards() {
  const dispatch = useDispatch();

  const [searchcoin, setSearchcoin] = useState('');
  const onSearchItem = (e) => {
    setSearchcoin(e.target.value);
  };

  const coinsData = useSelector((state) => state.coins);

  const searchItem = coinsData.filter(
    (filteredItem) => filteredItem.name.toLowerCase().includes(searchcoin.toLowerCase())
    || filteredItem.symbol.toLowerCase().includes(searchcoin.toLowerCase()),
  );

  useEffect(() => {
    if (searchItem.length === 0) {
      dispatch(fetchCoinsAsync());
    }
  }, []);

  console.log(coinsData);

  return (
    <div className="main-section">
      <div className="input-section">
        <input
          className="search-box"
          placeholder="Enter Crypto name"
          type="text"
          value={searchcoin}
          onChange={onSearchItem}
        />
      </div>
      {searchItem.map((coin) => (
        <Card key={coin.id} coins={coin} />
      ))}
    </div>
  );
}
