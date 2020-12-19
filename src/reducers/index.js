import gamesReducer from './gamesReducer';
import { combineReducers } from 'redux';
import detailReducer from './detailReducer';


const rootReducer = combineReducers({
    games: gamesReducer,
    detail: detailReducer

})

export default rootReducer;