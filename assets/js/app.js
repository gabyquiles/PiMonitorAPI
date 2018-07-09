import React, {Component} from 'react'
import {connect} from 'react-redux'
import BandwidthTimeline from "./components/BandwidthTimeline";
import {handleGetBandwidths} from "./actions/bandwidths";
import {isEmpty} from "./utils/helpers"

class App extends Component {
    componentWillMount() {
        this.props.dispatch(handleGetBandwidths())
    }

    render() {
        const {loading} = this.props
        return (
            <div>
                {loading
                    ? null
                    : <BandwidthTimeline/>
                }
            </div>
        )
    }
}

function mapStateToFunction({bandwidths}) {
    console.log("QAAA")
    return {
        loading: isEmpty(bandwidths)
    }
}

export default connect(mapStateToFunction)(App)

