import data from '../../data';
import { GET_ITEMS } from "../actions/actions";

const initialState = {
    coffee: data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state
            }    
        default:
            return state
    }
}