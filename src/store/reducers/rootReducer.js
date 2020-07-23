import { combineReducers } from 'redux';

import playerMoney from './playerMoney';
import businesses from './businesses';
import gameTimer from './gameTimer';
import upgrades from './upgrades';
import managers from './managers';

export default combineReducers({
  playerMoney,
  businesses,
  gameTimer,
  upgrades,
  managers,
});
