import {combineReducers} from 'redux'
import bandwidths from './bandwidths'
import images from './images'

export default combineReducers({
    bandwidths,
    images
})