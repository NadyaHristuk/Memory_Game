// import { combineReducer } from 'redux';
import { Type } from '../GameAction';
import generateCards from '../../utils/generateCards';

// const initialState = {
//   step: 20,
//   overturn: [],
//   cards: generateCards(),
//   id: '',
//   disabled: false,
// };

// const gameReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case Type.SHOT:
//       if (state.step === 0) {
//         alert('Game Over! Try again');
//         return { ...state, step: 30, overturn: [], disabled: false };
//       }
//       // const cardClick = state.cards.find(card => card.id);
//       // console.log(cardClick.id);
//       // let turn = cardClick.id;
//       // turn = action.payload;
//       console.log(action.payload);
//       return {
//         ...state,
//         step: state.step - 1,
//         id: state.id,
//         overturn: [...state.overturn, state.id],
//         disabled: (state.disabled = true),
//       };
//     default:
//       return state;
//   }
// };

const initialState = {
  cards: [],
  step: 20,
  wait: false,
  nick1: null,
  nick2: null,
  round: 1,
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.START_GAME:
      return {
        ...state,
        cards: [...action.cards],
      };
    case Type.OVERTURN_CARD:
      console.log(state.nick1);
      console.log(state.nick2);
      let newState = { round: state.round + 1 };
      if (state.round % 2 === 1) {
        let cardClicked = state.cards.find(card => {
          return card.id === action.id;
        });
        Object.assign(newState, {
          nick1: cardClicked.idx,
          nick2: null,
          cards: state.cards.map(card => {
            return card.id === action.id|| card.rival === true
              ? Object.assign({}, card, { overturn: true })
              : Object.assign({}, card, { overturn: false });
          }),
        });
      } else {
        let cardClicked = state.cards.find(card => {
          return card.id === action.id;
        });
        if (cardClicked.idx === state.nick1) {
          Object.assign(newState, {
            nick1: state.nick1,
            nick2: cardClicked.idx,
            cards: state.cards.map(card => {
              return card.id === action.id || card.idx === state.nick1
                ? Object.assign({}, card, { overturn: true, rival: true })
                : card;
            }),
          });
        } else {
          Object.assign(newState, {
            nick1: state.nick1,
            nick2: cardClicked.rel,
            cards: state.cards.map(card => {
              return card.id === action.id
                ? Object.assign({}, card, { overturn: true })
                : card;
            }),
          });
        }
      }
      return newState;
    //
    //
    // робочий 2 варіант
    // if (state.nick1 === null) {
    //   return {
    //     ...state,
    //     cards: [
    //       ...state.cards.map(card =>
    //         card.id === action.id ? { ...card, overturn: true } : card,
    //       ),
    //     ],
    //     nick1: action.idx,
    //   };
    // } else {
    //   if (
    //     state.nick1 === state.nick2 &&
    //     state.nick2 !== null &&
    //     state.nick1 !== null
    //   )
    //     return {
    //       ...state,
    //       ...state,
    //       cards: [
    //         ...state.cards.map(card =>
    //           card.overturn === true &&
    //           card.rival === false &&
    //           card.id !== action.id
    //             ? { ...card, rival: true }
    //             : card,
    //         ),
    //       ],
    //       step: state.step - 1,
    //       nick1: null,
    //       nick2: null,
    //     };
    // }
    // if (
    //   state.nick1 !== state.nick2 &&
    //   state.nick2 !== null &&
    //   state.nick1 !== null
    // ) {
    //   return {
    //     ...state,
    //     cards: [
    //       ...state.cards.map(card =>
    //         card.overturn === true && card.rival === false
    //           ? { ...card, overturn: false } &&
    //             (card.overturn === false &&
    //               card.rival === false &&
    //               card.id === action.id)
    //           : card,
    //       ),
    //     ],
    //     step: state.step - 1,
    //     nick1: null,
    //     nick2: null,
    //   };
    // }

    // if (
    //   state.nick1 === state.nick2 &&
    //   state.nick2 !== null &&
    //   state.nick1 !== null
    // ) {
    //   return {
    //     ...state,
    //     cards: [
    //       ...state.cards.map(card =>
    //         card.overturn === true ? { ...card, rival: true } : card,
    //       ),
    //     ],
    //     step: state.step - 1,
    //     nick1: null,
    //     nick2: null,
    //   };
    // }
    // return {
    //   ...state,
    //   cards: [
    //     ...state.cards.map(card =>
    //       card.id === action.id ? { ...card, overturn: true } : card,
    //     ),
    //   ],
    //   nick2: action.idx,
    // };

    //
    //
    //
    //
    //
    //
    // const flip = () => {

    //     state.cards.filter(
    //       card => card.overturn === true && card.rival === false,
    //     ),

    // };
    // console.log(flip);
    // if (
    //   Object.keys({
    //     ...state.cards.filter(
    //       card => card.overturn === true && card.rival === false,
    //     ),
    //   }).length >= 2
    // ) {
    //   console.log(state.cards[0].idx);
    //   if (state.cards[0].idx === state.cards[1].idx) {
    //     alert(5);
    //   }
    //   return {
    //     ...state,
    //     cards: [
    //       ...state.cards.map(card =>
    //         card.overturn === true ? { ...card, overturn: false } : card,
    //       ),
    //     ],
    //     step: state.step - 1,
    //   };
    //   // console.log(
    //   //   ...state.cards.filter(card => card.type[0] === card.type[1]),
    //   // )
    // }

    // робочий варіант
    // return {
    //   ...state,
    //   cards: [
    //     ...state.cards.map(card =>
    //       card.id === action.id ? { ...card, overturn: true } : card,
    //     ),
    //   ],
    // };

    // console.log(
    //   {
    //     // cards: [
    //     //   {
    //     //     ...state.cards.filter(card => (card.overturn = true)),
    //     //     ...state.cards,
    //     //   },
    //     // ],
    //     ...state,
    //     // cards: [
    //     //   ...state.cards.slice(0, action.id),
    //     //   { ...action.idx, overturn: true },
    //     //   ...state.cards.slice(action.id + 1),
    //     // ],
    //     cards: [
    //       ...state.cards.map(card =>
    //         card.id === action.id ? { ...card, overturn: true } : card,
    //       ),
    //     ],
    //     step: state.step - 1,
    //   },
    //   'id',
    //   action.id,
    // console.log(action.cards, state.step - 1)
    //
    //
    //

    default:
      return state;
  }
};

export default gameReducer;
