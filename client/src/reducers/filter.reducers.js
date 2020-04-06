import { CHANGE_FILTER } from '../actions/filter.actions';  

const initState = {
    family: false,
    concerts: false,
    arts: false
}

export default (state = initState, action) => {
    switch (action.type) {
        case CHANGE_FILTER:
            return {
                ...state,
                [action.name]: !state[action.name]
            }
        default:
            return state;
    }
}
