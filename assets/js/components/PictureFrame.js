import React, {Component} from 'react'
import {StyledImage} from "../styles/styles"
import {connect} from 'react-redux'


class PictureFrame extends Component {

    state = {}

    changePicture = () => {
        const timeout = setTimeout(
            (() => {
                const {images} = this.props
                const numPictures = images.length
                const {pictureShown} = this.state
                this.setState({pictureShown: (pictureShown + 1) % numPictures})
                console.log("Running Timeout")
                this.changePicture()
            }),
            5000
        )
        return timeout
    }

    componentDidMount() {
        const timeout = this.changePicture()
        this.setState({
            numPictures: 0,
            pictureShown: 1,
            timeout
        })
    }

    componentWillUnmount() {
        const {timeout} = this.state
        clearTimeout(timeout)
    }

    render() {
        const {images} = this.props
        const {pictureShown} = this.state
        return (
            <div>
                {images.map((image, idx) => (
                        idx === pictureShown &&
                        <StyledImage key={image}
                                     image={image}/>
                    )
                )}
            </div>
        )
    }
}

function mapStateToProps({images}) {
    return {
        images: Object.values(images)
    }
}

export default connect(mapStateToProps)(PictureFrame)