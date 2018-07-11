import {RECEIVE_IMAGES} from '../actions/types'

export default function images(state = {}, action) {
    switch (action.type) {
        case RECEIVE_IMAGES:
            return {
                ...state,
                ...action.images
            }
        default:
            return state
    }
}