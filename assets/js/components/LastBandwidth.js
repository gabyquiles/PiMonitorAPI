import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {DownloadIcon, StyledBandwidth, UploadIcon} from "../styles/styles"


class LastBandwidth extends Component {
    render() {
        const {bandwidth, direction} = this.props
        // const calcBandwidth = Math.round(bandwidth / 10000) / 100
        return (<StyledBandwidth>
            {bandwidth} Mbps {direction === "download"
            ? (<DownloadIcon/>)
            : (<UploadIcon/>)}
        </StyledBandwidth>)
    }
}

LastBandwidth.ProptTypes = {
    bandwidth: PropTypes.number.isRequired,
    direction: PropTypes.oneOf(['download', 'upload'])
}

export default LastBandwidth