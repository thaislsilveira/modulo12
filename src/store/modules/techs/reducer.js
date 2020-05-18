import produce from 'immer';

export const INNITIAL_STATE = [];

export default function techs(state = INNITIAL_STATE, action) {
  return produce(state, draft =>  {
    switch(action.type) {
    case 'ADD_TECH':
    draft.push(action.payload.tech);
    break;
    default:
    }
  });
}