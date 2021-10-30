import React from "react"
import './fonts/Lato-Regular.ttf';
import './fonts/Lato-Bold.ttf';
import './fonts/Merriweather-Regular.ttf';
import './Login.scss';
import people from  './img/people.svg';
import AboutUs from './components/AboutUs';
import Header from './components/Header';
import SubTitle from './components/SubTitle';
import Form from './components/Form';
import Footer from './components/Footer';
import Button from "./components/Button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faSmileBeam, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import Fade from 'react-reveal/Fade';


export default class Login extends React.Component {

  constructor(props) {
      super(props)
      this.state = {
        title: "Faça login na sua conta",
        subtitle: "Bem vindo de volta",
        show: true,
        isLogin: true,
        forgotPassword: false,
        valuePassword : "",
        valueConfirmPassword: "",
        valueEmail : "",
        showErrorMsg: false,
      }
  }

  handleCheckBox = (e) => {
    this.setState({
      ...this.state,
      isRemembered : e.target.checked
    });
  }

  handleInputEmail = (e) => {
    let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(regex.test(e.target.value)) {
      this.setState({
        ...this.state,
        valueEmail : e.target.value,
        showErrorMsg: false,
        errorInput: ""
      });
    } else if(e.target.value === "") {
      this.setState(
        {
          ...this.state,
          showErrorMsg: true,
          valueEmail : e.target.value,
          errorInput: "Ops, preencha todos os campos",
        }
      )
    } else {
      this.setState(
        {
          ...this.state,
          valueEmail : e.target.value,
          showErrorMsg: true,
          errorInput: "Ops, preencheu um email inválido"
        }
      )
    }
  }

  handleInputPassword = (e) => {

    if(e.target.value !== "") {
      this.setState({
        ...this.state,
        valuePassword : e.target.value,
        showErrorMsg: false,
        errorMsg: ""
      });
    } else {
      this.setState(
        {
          ...this.state,
          showErrorMsg: true,
          valuePassword : "",
          errorInput: "Ops, preencha todos os campos"
        }
      )
    }
    
  }

  handleInputConfirmPassword = (e) => {

    if(e.target.value !== "") {
      this.setState({
        ...this.state,
        valueConfirmPassword : e.target.value,
        showErrorMsg: false,
        errorMsg: ""
      });
    } else {
      this.setState(
        {
          ...this.state,
          showErrorMsg: true,
          valueConfirmPassword : "",
          errorInput: "Ops, preencha todos os campos"
        }
      )
    }
    
  }

  handleFormLoginSubmit = (e) => {
    e.preventDefault()

    if(this.state.isLogin) {
      
      if(this.state.valueEmail && this.state.valuePassword){
        if(this.state.isGoogleButton) {
          this.setState(
            {
              ...this.state,
              title: 'Google ROCKS!!!',
              subtitle: 'Login Feito Pelo Google com Sucesso',
              valuePassword : "",
              valueEmail : "",
              show: false,
            }
          )
        }
    
        if(this.state.isNormalButton) {
          this.setState(
            {
              ...this.state,
              title: 'Vms trabalhar juntos!!!',
              subtitle: 'Login Feito Com Sucesso',
              valuePassword : "",
              valueEmail : "",
              show: false,
            }
          )
        }
      } else {
        this.setState(
          {
            ...this.state,
            showErrorMsg: true,
            errorMsg: this.state.errorInput || "Ops, preencha todos os campos"
          }
        )
      }

    } else {

      if(this.state.forgotPassword){

        if(this.state.valuePassword && this.state.valueConfirmPassword){

          if(this.state.valuePassword === this.state.valueConfirmPassword){

            this.setState(
              {
                ...this.state,
                title: 'Agora vc não esquece mais',
                subtitle: 'Lembrança de Senha Feita com Sucesso',
                valuePassword : "",
                valueConfirmPassword: "",
                show: false,
              }
              )

          } else {

            this.setState(
              {
                ...this.state,
                showErrorMsg: true,
                errorMsg: "Ops, as senhas precisam ser iguais",
              }
            )

          }
        } else {

          this.setState(
            {
              ...this.state,
              showErrorMsg: true,
              errorMsg: this.state.errorInput || "Ops, preencha todos os campos"
            }
          )

        }

      } else {
        
        if(this.state.valueEmail && this.state.valuePassword && this.state.valueConfirmPassword){

          if(this.state.valuePassword === this.state.valueConfirmPassword){

            this.setState(
              {
                ...this.state,
                title: 'Vc é um dos nossos',
                subtitle: 'Cadastro Feito com Sucesso',
                valuePassword : "",
                valueConfirmPassword: "",
                valueEmail : "",
                show: false,
              }
              )

          }else {

            this.setState(
              {
                ...this.state,
                showErrorMsg: true,
                errorMsg: "Ops, as senhas precisam ser iguais",
              }
            )

          }
        } else {

          this.setState(
            {
              ...this.state,
              showErrorMsg: true,
              errorMsg: this.state.errorInput || "Ops, preencha todos os campos"
            }
          )

        }
      }

    }

  }

  handlerButtonFormLogin = (e) => {
    this.setState(
      {
        ...this.state,
        isNormalButton: true,
        isGoogleButton: false,
      }
    )
  }

  handlerButtonFormRegistration = (e) => {
    this.setState(
      {
        ...this.state,
      }
    )
  }

  handlerGoogleButtonFormLogin = (e) => {
    this.setState(
      {
        ...this.state,
        isNormalButton: false,
        isGoogleButton: true,
      }
    )
  }

  handlerRegistration = (e) => {
    e.preventDefault()
    const newTitle = !this.state.isLogin ? "Faça login na sua conta" : "Realize seu cadastro"
    const newSubtitle = !this.state.isLogin ? "Bem vindo de volta" : "Seja bem vindo"
    this.setState(
      {
        ...this.state,
        isLogin: !this.state.isLogin,
        title: newTitle,
        subtitle: newSubtitle,
        forgotPassword: false,        
        errorMsg: "",
        errorInput: "",
        valuePassword : "",
        valueConfirmPassword: "",
        valueEmail : "",
      }
    )
  }

  handlerForgotPassword = (e) => {
    e.preventDefault()
    
    this.setState(
      {
        ...this.state,
        isLogin: false,
        forgotPassword: true,
        title: "Preencha a nova senha",
        subtitle: "Esqueceu né?",
        valuePassword : "",
        valueConfirmPassword: "",
        valueEmail : "",
        errorMsg: "",
        errorInput: "",
      }
    )
  }

  handleGoBackLogin = () => {
    this.setState(
      {
        ...this.state,
        title: "Faça login na sua conta",
        subtitle: "Bem vindo de volta",
        show: true,
        isNormalButton: false,
        isGoogleButton: false,
        valuePassword : "",
        valueConfirmPassword: "",
        valueEmail : "",
        isRemembered : false,
        showErrorMsg: false,
        errorMsg: "",
        errorInput: "",
        isLogin: true,
        forgotPassword: false,
      }
    )
  }

  render() {
    return (
      <Fade>
        <main className="content">
          <AboutUs src={people} alt="Wallpaper of AboutUs page" />
          <div className="container-login">
            <Header title={this.state.title} subtitle={this.state.subtitle} />
            {this.state.show ? (
              <>
                <div>
                  <Form
                    isLogin = {this.state.isLogin}
                    forgotPassword = {this.state.forgotPassword}
                    valueEmail = {this.state.valueEmail}
                    valuePassword = {this.state.valuePassword}
                    valueConfirmPassword = {this.state.valueConfirmPassword}
                    handleFormLoginSubmit = {() => this.handleFormLoginSubmit}
                    handleInputEmail = {()=>this.handleInputEmail}
                    handleInputPassword = {()=>this.handleInputPassword}
                    handleInputConfirmPassword = {()=>this.handleInputConfirmPassword}
                    handleCheckBox = {()=>this.handleCheckBox}
                    handlerButtonFormLogin = {() => this.handlerButtonFormLogin} 
                    handlerButtonFormRegistration = {() => this.handlerButtonFormRegistration} 
                    handlerGoogleButtonFormLogin = {() => this.handlerGoogleButtonFormLogin}
                    handlerForgotPassword = {() => this.handlerForgotPassword}
                  />
                </div>
                {this.state.showErrorMsg && (
                  <Fade>
                    <div className="error-msg">
                      <span>{this.state.errorMsg}</span>
                    </div>
                  </Fade>                    
                )}
                <Footer forgotPassword = {this.state.forgotPassword}  isLogin = {this.state.isLogin} handlerClickLink = {()=>this.handlerRegistration}/>
              </>
            ): (
              <>
                <FontAwesomeIcon className={this.state.isLogin ? "icon-login-sucess" : (this.state.forgotPassword ? "icon-forgot-sucess" : ("icon-register-sucess"))} icon={this.state.isLogin ? faSmileBeam : (this.state.forgotPassword ? faCheck : faThumbsUp)} />
                <Button text="Voltar" onClick={this.handleGoBackLogin} />
                { this.state.isRemembered && (<SubTitle centered value={"Lembrei-me de vc"} />)}
              </>
            )}
          </div>
        </main>
      </Fade>
      
    )
  }

}
