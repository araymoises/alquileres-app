import {combineReducers} from 'redux';
import superheroesReducer from './superheroesReducer';
import tabBarReducer from './tabBarReducer';

export default combineReducers({
  superheroes: superheroesReducer,
  tabId: tabBarReducer
});
