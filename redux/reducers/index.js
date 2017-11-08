import {combineReducers} from 'redux';
import superheroesReducer from './superheroesReducer';

export default combineReducers({
  superheroes: superheroesReducer
});
