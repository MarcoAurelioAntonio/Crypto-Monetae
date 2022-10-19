import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCoinsAsync } from './cardsSlice';
import Card from './Card';
import './Cards.css';

export default function Cards() {
  const dispatch = useDispatch();

  const coinsData = useSelector((state) => state.coins);

  useEffect(() => {
    if (coinsData.length === 0) {
      dispatch(fetchCoinsAsync());
    }
  }, []);

  console.log(coinsData);

  return (
    <div className="main-section">
      {coinsData.map((coin) => (
        <Card key={coin.id} coins={coin} />
      ))}
    </div>
  );
}
