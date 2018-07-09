import {RECEIVE_BANDWIDTHS} from '../actions/types'

export default function bandwidths(state = {}, action) {
    switch (action.type) {
        case RECEIVE_BANDWIDTHS:
            return {
                ...state,
                ...action.bandwidths
            }
        default:
            return state
    }
}