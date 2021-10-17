import React, { Component } from 'react'
import "./Form.scss"
import Input from "./Input"
import Button from "./Button"

// import googleIcon from  '../img/icon_Google.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import { faLock } from '@fortawesome/free-solid-svg-icons'
// import { faEye } from '@fortawesome/free-solid-svg-icons'
// import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'

export default class Form extends Component {
    render() {
        return (
          <form className="container-form">
              <Input />
              <div className="container-rememberMe">
                <div className="container-checkbox">
                  <input type="checkbox" id="rememberMe" name="rememberMe"  />
                  <label htmlFor="rememberMe">Lembre de mim</label>
                </div>
                <a href="/">Esqueceu sua senha?</a>
              </div>
              <Button />
          </form>
        )
    }
}
