import React, { Component } from 'react'
import "./Form.scss"
import Input from "./Input"
import Button from "./Button"

import googleIcon from  '../img/icon_Google.png';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'

export default class Form extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
      return (
        <form onSubmit={this.props.handleFormLoginSubmit()} className="container-form">
            <Input 
              label="E-mail" 
              type="email" 
              id="email" 
              placeholder="example@gmail.com" 
              leftIcon = {faEnvelope}
              onChange = {this.props.handleInputEmail()}
            />
            <Input 
              label="Senha" 
              type="password" 
              id="password" 
              leftIcon = {faLock} 
              rightShowIcon = {faEye} 
              rightHiddenIcon = {faEyeSlash} 
              onChange = {this.props.handleInputPassword()}
            />
            {/* {this.props.forgotPassword && 
              (<Input 
                label="Confirmar Senha" 
                type="password" 
                id="password2" 
                leftIcon = {faLock} 
                rightShowIcon = {faEye} 
                rightHiddenIcon = {faEyeSlash} 
              />)
            } */}
            <div className="container-rememberMe">
              <div className="container-checkbox">
                <input onChange={this.props.handleCheckBox()} type="checkbox" id="rememberMe" name="rememberMe"  />
                <label htmlFor="rememberMe">Lembre de mim</label>
              </div>
              <a href="/">Esqueceu sua senha?</a>
            </div>
            <Button text="Entrar" isSubmit onClick={this.props.handlerButtonFormLogin()} />
            <Button  
              onClick={this.props.handlerGoogleButtonFormLogin()}
              addIcon={googleIcon} 
              altIcon="Icon of Google" 
              text="Ou faça login com o Google"
              extraClass = "google"
              isSubmit
            />
        </form>
      )
  }
}
