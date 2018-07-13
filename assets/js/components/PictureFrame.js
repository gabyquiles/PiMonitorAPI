import React, {Component} from 'react'
import {StyledImage} from "../styles/styles"
import {connect} from 'react-redux'


class PictureFrame extends Component {
    render() {
        const {images} = this.props
        console.log(images)
        return (
            <div>
                {images.map((image) => (
                    <StyledImage key={image} image={image}/>
                ))}
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