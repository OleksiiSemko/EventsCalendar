import { GET_EVENT_LIST } from '../actions/events.actions';

const initState = {
    events: [{}, {}, {}]
};

export default (state = initState, action) => {
    switch (action.type) {
        case GET_EVENT_LIST:
            return {
                ...state,
                events: action.payload
            }
        
        default:
            return state;
    }
}