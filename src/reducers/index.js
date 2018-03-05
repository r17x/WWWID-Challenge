import { combineReducers } from 'redux';
import FetchReducer from './FetchReducer';

export default combineReducers({
    hasilFetch: () => FetchReducer
});