import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import { Link } from 'react-router-dom';

export default function Card({ coins }) {
  const {
    id, icon, name, symbol, rank, price,
  } = coins;

  return (
    <div key={id} className="card-container">
      <Link to={id}>
        <div className="icon-div"><img className="icon-div rotate" src={icon} alt="crypto" /></div>
      </Link>
      <div>
        <p>
          Ranking N
          &#8304;
          &nbsp;
          {rank}
        </p>
        <h2><strong>{name}</strong></h2>
        <p>{symbol}</p>
        <p>
          Price: US
          <strong>$</strong>
          {price.toFixed(3)}
        </p>
      </div>
    </div>
  );
}

Card.propTypes = {
  coins: PropTypes.shape({
    id: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rank: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
