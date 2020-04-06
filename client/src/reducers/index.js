import {combineReducers} from 'redux';
import events from './events.reducer';
import categories from './filter.reducers';

export default combineReducers({
    events,
    categories,
})