import React from 'react';
import Card from './Card';

export default function Cards() {
  return (
    <div>
      <Card ranking={1} coin="Bitcoin" symbol="BTC" price={1000} />
    </div>
  );
}
