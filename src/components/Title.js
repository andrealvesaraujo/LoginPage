import React, { Component } from 'react'
import "./Title.scss"

export default class Title extends Component {
    render() {
        return (
            <div className="container-title">
                <h3>{this.props.subtitle}</h3>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}
