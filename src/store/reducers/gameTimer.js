export const initialState = {
  timeMilliseconds: 0,
};

export const SET_GAME_TIME = 'SET_GAME_TIME';

export default function gameTimer(stateGameTimer = initialState, action) {
  switch (action.type) {
    case SET_GAME_TIME:
      return {
        ...stateGameTimer,
        timeMilliseconds: action.payload.timeMilliseconds,
      };

    default:
      return stateGameTimer;
  }
}
