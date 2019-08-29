import React from 'react';
import PropTypes from 'prop-types';

import Card from '../card/Card';

function Board({ cards, step, handleClick, idx, overturn }) {
  return (
    <div>
      <h3>You have {step} shots</h3>
      {cards.map(card => (
        <Card
          key={card.index}
          id={card.id}
          width={100}
          height={100}
          idx={card.idx}
          // disabled={disabled}
          // handleClick={() => (disabled ? null : handleClick((cards.id = id)))}
          overturn={card.overturn}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
}

Board.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  // disabled: PropTypes.bool.isRequired,
};

export default Board;
