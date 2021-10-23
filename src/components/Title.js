import React, { Component } from 'react'
import "./Title.scss"

export default class Title extends Component {
    render() {
        return (
            <h1>{this.props.value}</h1>
        )
    }
}
