import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts'
import {getSimplifiedBandwidths} from '../selectors/bandwidths'
import moment from 'moment'

class BandwidthTimeline extends Component {
    formatDates = (date) => {
        return moment(date).format("HH:mm")
    }

    render() {
        const {bandwidths} = this.props
        return (
            <ResponsiveContainer
                width="100%"
                height={500}>
                <LineChart
                    data={bandwidths}
                    margin={{top: 5, right: 20, left: 10, bottom: 5}}>
                    <Legend verticalAlign="top" height={36}/>
                    <XAxis
                        dataKey="date"
                        tickFormatter={this.formatDates}/>
                    <YAxis/>
                    <Tooltip/>
                    <Line type="monotone" dataKey="download" stroke="red" yAxisId={0}/>
                    <Line type="monotone" dataKey="upload" stroke="blue" yAxisId={0}/>
                </LineChart>
            </ResponsiveContainer>
        )
    }
}

function mapStateToProps(state) {
    return {
        bandwidths: getSimplifiedBandwidths(state)
    }
}

export default connect(mapStateToProps)(BandwidthTimeline)