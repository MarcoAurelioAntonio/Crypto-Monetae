import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import './Details.css';

export default function Details() {
  const { id } = useParams();

  const coinsData = useSelector((state) => state.coins);

  return (
    <div className="detail-container">
      <Link className="back" to="/">
        <h2>❮ Go Back</h2>
      </Link>
      <div className="table">
        {coinsData.map((coin) => {
          if (coin.id === id) {
            const allDetails = [
              { data: 'Coin Name', value: `${coin.name}` },
              { data: 'Coin Symbol', value: `${coin.symbol}` },
              { data: 'Ranking', value: `${coin.rank}` },
              { data: 'Coin Price', value: `${coin.price.toFixed(3)}` },
              { data: 'Operation Volume', value: `${coin.volume.toFixed(3)}` },
              { data: 'Market Cap', value: `${coin.marketCap}` },
              { data: 'Price Change 1 Hour', value: `${coin.priceChange1h}` },
              { data: 'Price Change 1 Day', value: `${coin.priceChange1d}` },
              { data: 'Price Change 1 Week', value: `${coin.priceChange1w}` },
              { data: 'Website link', value: `${coin.websiteUrl}` },
              { data: 'Twitter link', value: `${coin.twitterUrl}` },
            ];
            return (
              allDetails.map((detail) => (
                <tr className="row" key={detail.id}>
                  <th className="data">{detail.data}</th>
                  <th className="value">{detail.value}</th>
                </tr>
              ))
            );
          }
          return null;
        })}

      </div>
    </div>
  );
}
