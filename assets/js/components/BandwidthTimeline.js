import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getSimplifiedBandwidths} from '../selectors/bandwidths'

class BandwidthTimeline extends Component {
    render() {
        const {bandwidths} = this.props
        return (
            <div>
                <ul>
                    {bandwidths.map((bandwidth) =>
                        <li key={bandwidth.id}>{bandwidth.date}: {bandwidth.download} - {bandwidth.upload}</li>
                    )}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        bandwidths: getSimplifiedBandwidths(state)
    }
}

export default connect(mapStateToProps)(BandwidthTimeline)