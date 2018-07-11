import {RECEIVE_IMAGES} from "./types"
import {getImages} from "../utils/api";

export function receiveImages(images) {
    return {
        type: RECEIVE_IMAGES,
        images
    }
}

export function handleGetImages() {
    return (dispatch) => {
        return getImages().then(images => {
            dispatch(receiveImages(images))
        })
    }
}