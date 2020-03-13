export const GET_EVENT_LIST = 'GET_EVENT_LIST';
export const ERROR_GENERATED = 'ERROR_GENERATED';

export function getEventList() {
    return async dispatch => {
        try {
            const axios = require('axios');
            const response = await axios.get('../data.json');
            dispatch(onSuccess(response.json()));
        } catch(error) {
            onError(error);
        }
    }
}

const onSuccess = events => ({
    type: GET_EVENT_LIST,
    payload: events
})

const onError = error => ({
    type: ERROR_GENERATED,
    error
})