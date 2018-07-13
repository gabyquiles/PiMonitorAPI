import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {StyledApp, StyledDownload, StyledGraph, StyledPictureFrame, StyledUpload} from "./styles/styles";
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
            <StyledApp>
                {loading
                    ? null
                    :
                    (<Fragment>
                            <StyledGraph>
                                <BandwidthTimeline/>
                            </StyledGraph>
                            <StyledDownload>
                                <LastBandwidth direction="download" bandwidth={lastBandwidth.download}/>
                            </StyledDownload>
                            <StyledUpload>
                                <LastBandwidth direction="upload" bandwidth={lastBandwidth.upload}/>
                            </StyledUpload>
                            <StyledPictureFrame>
                                <PictureFrame/>
                            </StyledPictureFrame>
                        </Fragment>
                    )

                }
            </StyledApp>
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

