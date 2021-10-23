import React, { Component } from 'react'
import "./Header.scss"

import Title from './Title';
import SubTitle from './SubTitle';


export default class Header extends Component {
    render() {
        return (
            <div className="container-header">
                <SubTitle value={this.props.subtitle} />
                <Title value={this.props.title} />
            </div>
        )
    }
}
