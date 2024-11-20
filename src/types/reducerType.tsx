type actionType =
  | { type: 'GET_POKEMON'; pokemon: string }
  | { type: 'GET_USERS'; users: string[] };

type stateType = {
  pokemon: string;
  users: string[];
};

export type { actionType, stateType };
