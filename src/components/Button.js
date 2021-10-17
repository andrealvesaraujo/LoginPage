import React, { Component } from 'react'
import "./Button.scss"
import googleIcon from  '../img/icon_Google.png';

export default class Button extends Component {
    render() {
        return (
            <>    
                <div className="container-button">
                    <button type="submit">Entrar</button>
                </div>
                    <div className="container-button-google">
                    <button> <img src={googleIcon} alt="Icon of Google" /> Ou faça login com o Google </button>
                </div>
            </>
        )
    }
}
