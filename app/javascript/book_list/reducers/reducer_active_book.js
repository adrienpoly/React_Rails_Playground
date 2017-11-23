// import {ACTION} from '../actions/index';

// const initialState = initialState

export default function(state = null, action) {
    switch (action.type){
        case "BOOK_SELECTED":
            return action.payload
    }
    return state;
}
