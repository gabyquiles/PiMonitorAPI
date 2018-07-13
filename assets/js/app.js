import React, {Component} from 'react'
import {connect} from 'react-redux'
import BandwidthTimeline from "./components/BandwidthTimeline";
import {isEmpty} from "./utils/helpers"
import LastBandwidth from "./components/LastBandwidth";
import {getLastBandwidth} from "./selectors/bandwidths";
import {handleInitialData} from "./actions/shared";
import PictureFrame from "./components/PictureFrame";

class App extends Component {
    componentWillMount() {
        this.props.dispatch(handleInitialData())
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
                            <PictureFrame/>
                        </div>
                    )

                }
            </div>
        )
    }
}

function mapStateToFunction(state) {
    return {
        loading: isEmpty(state.bandwidths) && isEmpty(state.images),
        lastBandwidth: getLastBandwidth(state)
    }
}

export default connect(mapStateToFunction)(App)

