import React, { Component } from 'react'
import "./SubTitle.scss"

export default class SubTitle extends Component {
    render() {
        return (
            <h3 className={this.props.centered ? "centered" : ""}>{this.props.value}</h3>
        )
    }
}
