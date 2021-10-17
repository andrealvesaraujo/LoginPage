import React, { Component } from 'react'
import './Input.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'

export default class Input extends Component {
    render() {
        return (
            <>
                <div className="container-email">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" name="email" placeholder="example@gmail.com"/>
                    <FontAwesomeIcon className="icon-email" icon={faEnvelope} />
                </div>
                <div className="container-password">
                    <label htmlFor="password">Senha</label>
                    <input type="password" id="password" name="password"/>
                    <FontAwesomeIcon className="icon-lock" icon={faLock} />
                    <FontAwesomeIcon className="icon-show" icon={faEye} />
                    {/* <FontAwesomeIcon className="icon-hidden" icon={faEyeSlash} /> */}
                </div>
            </>
        )
    }
}
