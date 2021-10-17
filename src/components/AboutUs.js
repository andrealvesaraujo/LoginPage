import React, { Component } from 'react'
import './AboutUs.scss';

export default class AboutUs extends Component {
    render() {
        return (
            <div className="container-aboutUs">
                <img src={this.props.src} alt={this.props.alt} />
            </div>
        )
    }
}
