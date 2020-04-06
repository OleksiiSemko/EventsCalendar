import { GET_EVENT_LIST } from '../actions/events.actions';
import { FILTER_EVENTS } from '../actions/events.actions';

const initState = {
    events: [
        {categories: ['family']}, 
        {categories: ['concerts']}, 
        {categories: ['arts']}, 
        {categories: ['concerts', 'arts']}
    ],
    filteredEvents: [
        {categories: ['family']}, 
        {categories: ['concerts']}, 
        {categories: ['arts']}, 
        {categories: ['concerts', 'arts']}
    ]
};

export default (state = initState, action) => {
    switch (action.type) {
        case GET_EVENT_LIST:
            return {
                ...state,
                events: action.payload,
                filteredEvents: action.payload
            }
        case FILTER_EVENTS:
            return {
                ...state,
                filteredEvents: action.filteredEvents
            }
        default:
            return state;
    }
}