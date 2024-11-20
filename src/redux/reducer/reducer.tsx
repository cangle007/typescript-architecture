import { actionType, stateType } from '../../types/reducerType';

export default function reducer(
  currentState = {
    pokemon: 'pikachu',
    users: [],
  },
  action: actionType
): stateType {
  switch (action.type) {
    case 'GET_POKEMON':
      return { ...currentState, pokemon: action.pokemon };

    case 'GET_USERS':
      return { ...currentState, users: action.users };

    default:
      return currentState;
  }
}
