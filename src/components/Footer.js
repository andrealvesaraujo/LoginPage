import React, { Component } from 'react'
import "./Footer.scss"

export default class Footer extends Component {
    render() {
        return (
            <div className="container-footer">
                { this.props.isLogin 
                ? 
                    (<span>  Não tem uma conta? <a href="/" onClick={this.props.handlerClickLink()}>Cadastre-se</a> </span>)
                :
                    ( 
                        this.props.forgotPassword 
                        ? 
                            <span>  Lembrou dela? <a href="/" onClick={this.props.handlerClickLink()}>Então realize seu login</a> </span>
                        : 
                        (
                            <span>  Possui uma conta? <a href="/" onClick={this.props.handlerClickLink()}>Realize seu login</a> </span>
                        )
                    )    
                }
            </div>
        )
    }
}
