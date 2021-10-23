import React, { Component } from 'react'
import "./Button.scss"

export default class Button extends Component {
    render() {
        return (
            <>    

                <div className={`container-button ${this.props.extraClass}`}>
                    <button type={this.props.isSubmit && "submit"} onClick = {this.props.onClick}> 
                    {this.props.addIcon ? (<img src={this.props.addIcon} alt={this.props.altIcon} />) : ''} {this.props.text}
                    </button>
                </div>
            </>
        )
    }
}
