import React, { Component } from 'react'
import './Input.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Input extends Component {

    constructor(props) {
        super(props)
        this.state = {
           type : this.props.type
        }
    }

    handlerPasswordIcon() {
        if(this.state.canSee){
            this.setState({
                ...this.state,
                canSee: false,
                type:'password'
            })
    
        } else {
    
            this.setState({
                ...this.state,
                canSee: true,
                type:'text'
            })
        }
      }

    render() {
        return (
            <>
                <div className={`container-${this.props.type}`}>
                    <label htmlFor={this.props.id}>{this.props.label}</label>
                    <input onChange={this.props.onChange} type={this.state.type} id={this.props.id} name={this.props.type} placeholder={this.props.placeholder}/>
                    {this.props.leftIcon && (<FontAwesomeIcon className="icon-left" icon={this.props.leftIcon} />)}
                    {this.props.rightShowIcon && this.props.rightHiddenIcon && (<FontAwesomeIcon className="icon-right" icon={this.state.canSee ? this.props.rightHiddenIcon : this.props.rightShowIcon} onClick={() => this.handlerPasswordIcon()} />)}
                </div>

            </>
        )
    }
}
