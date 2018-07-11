import React, {Component} from 'react'
import {connect} from 'react-redux'

class PictureFrame extends Component {
    render() {
        const {images} = this.props
        console.log(images)
        return (
            <div>
                <ul>
                    {images.map((image) => (
                        <li key={image}>
                            <img src={image}/>
                        </li>
                    ))}
                </ul>
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