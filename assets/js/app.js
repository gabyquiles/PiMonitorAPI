import React, {Component} from 'react'
import {connect} from 'react-redux'
import BandwidthTimeline from "./components/BandwidthTimeline";
import {handleGetBandwidths} from "./actions/bandwidths";
import {isEmpty} from "./utils/helpers"
import LastBandwidth from "./components/LastBandwidth";
import {getLastBandwidth} from "./selectors/bandwidths";

class App extends Component {
    componentWillMount() {
        this.props.dispatch(handleGetBandwidths())
    }

    render() {
        const {loading, lastBandwidth} = this.props

        return (
            <div>
                {loading
                    ? null
                    :
                    (<div>
                            <BandwidthTimeline/>
                            <LastBandwidth direction="download" bandwidth={lastBandwidth.download}/>
                            <LastBandwidth direction="upload" bandwidth={lastBandwidth.upload}/>
                        </div>
                    )

                }
            </div>
        )
    }
}

function mapStateToFunction(state) {
    return {
        loading: isEmpty(state.bandwidths),
        lastBandwidth: getLastBandwidth(state)
    }
}

export default connect(mapStateToFunction)(App)

