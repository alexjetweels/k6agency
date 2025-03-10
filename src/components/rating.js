import React from 'react';
import { Icon } from '@iconify/react';

const Rating = ({ rating }) => {
  const totalRating = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      totalRating.push(
        <li className='star' key={`rating-key${i}`}>
          <Icon icon={'mdi-light:star-outline'} />
        </li>
      );
    } else {
      totalRating.push(
        <li className='star-o' key={`rating-key${i}`}>
          <Icon icon={'mdi-light:star-outline'} />
        </li>
      );
    }
  }

  return (
    <div className='rating'>
      <ul>{totalRating}</ul>
    </div>
  );
};

export default Rating;
