import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

export default function Card({ coins }) {
  const {
    icon, name, symbol, rank, price,
  } = coins;

  return (
    <div className="card-container">
      <div className="icon-div"><img className="icon-div rotate" src={icon} alt="crypto" /></div>
      <div>
        <p>
          Ranking N
          &#8304;
          &nbsp;
          {rank}
        </p>
        <h3>{name}</h3>
        <p>{symbol}</p>
        <p>
          Price: $
          {price.toFixed(2)}
        </p>
      </div>
    </div>
  );
}

Card.propTypes = {
  coins: PropTypes.shape({
    /* id: PropTypes.string.isRequired, */
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rank: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
