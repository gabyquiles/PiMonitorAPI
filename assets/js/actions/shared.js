import {receiveBandwidths} from "./bandwidths";
import {receiveImages} from "./images";
import {getInitialData} from "../utils/api"

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData().then(({bandwidths, images}) => {
            dispatch(receiveBandwidths(bandwidths))
            dispatch(receiveImages(images))
        })
    }
}

