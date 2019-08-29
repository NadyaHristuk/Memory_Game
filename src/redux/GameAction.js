import generateCards from '../utils/generateCards';

export const Type = {
  START_GAME: 'SART_GAME',
  OVERTURN_CARD: 'OVERTURN_CARD',
  CHECK_CARDS: 'CHECK_CARDS',

  // SHOT: 'SHOT',
  // CARDS: 'CARDS',
  // RESTART_GAME: 'RESTART_GAME',
};

// export const shot = id => ({
//   type: Type.SHOT,
//   payload: id,
// });

// export const getGard = () => ({
//   type: Type.CARDS,
// });

export const startGame = () => {
  const cards = generateCards();
  return {
    type: Type.START_GAME,
    cards,
  };
};
export const overturnCard = (idx, id) => {
  return {
    type: Type.OVERTURN_CARD,
    idx,
    id,
  };
};
export const checkCard = overturnCards => {
  return {
    type: Type.CHECK_CARDS,
    overturnCards,
  };
};
