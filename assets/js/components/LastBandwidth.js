import React, {Component} from 'react'
import PropTypes from 'prop-types'

class LastBandwidth extends Component {
    render() {
        const {bandwidth, direction} = this.props
        const calcBandwidth = Math.round(bandwidth / 10000) / 100
        return (<div>
            {calcBandwidth} Mbps <span
            className={direction}>{direction === "download" ? "D" : "U"}</span>
        </div>)
    }
}

LastBandwidth.ProptTypes = {
    bandwidth: PropTypes.number.isRequired,
    direction: PropTypes.oneOf(['download', 'upload'])
}

export default LastBandwidth