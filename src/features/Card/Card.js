import React from 'react';
import PropTypes from 'prop-types';

export default function Card({
  id, logo, coin, symbol, price,
}) {
  return (
    <div className="card-container">
      <img src={logo} alt="crypto" />
      <div>
        <p>{id}</p>
        <h3>{coin}</h3>
        <p>{symbol}</p>
        <p>{price}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  logo: PropTypes.string.isRequired,
  coin: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  symbol: PropTypes.string.isRequired,
};
