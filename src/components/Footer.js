import React, { Component } from 'react'
import "./Footer.scss"

export default class Footer extends Component {
    render() {
        return (
            <div className="container-footer">
                <span>  Não tem uma conta? <a href="/">Cadastre-se</a> </span>
            </div>
        )
    }
}
