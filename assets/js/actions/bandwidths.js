import {RECEIVE_BANDWIDTHS} from './types'
import {getBandwidth} from "../utils/api";

export function receiveBandwidths(bandwidths) {
    return {
        type: RECEIVE_BANDWIDTHS,
        bandwidths
    }
}

export function handleGetBandwidths() {
    return (dispatch) => {
        return getBandwidth().then(bandwidths => {
            dispatch(receiveBandwidths(bandwidths))
        })
    }
}