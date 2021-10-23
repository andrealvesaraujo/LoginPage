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
import { faSmileBeam } from '@fortawesome/free-solid-svg-icons'


export default class Login extends React.Component {

  constructor(props) {
      super(props)
      this.state = {
        title: "Faça login na sua conta",
        subtitle: "Bem vindo de volta",
        show: true
      }
  }

  handleCheckBox = (e) => {
    this.setState({
      ...this.state,
      isRemembered : e.target.checked
    });
  }

  handleInputEmail = (e) => {
    this.setState({
      ...this.state,
      valueEmail : e.target.value
    });
  }

  handleInputPassword = (e) => {
    this.setState({
      ...this.state,
      valuePassword : e.target.value
    });
  }

  handleFormLoginSubmit = (e) => {
    e.preventDefault()

    if(this.state.valueEmail && this.state.valuePassword){
      if(this.state.isGoogleButton) {
        this.setState(
          {
            ...this.state,
            title: 'Google ROCKS!!!',
            subtitle: 'Login Feito Pelo Google com Sucesso',
            show: false
          }
        )
      }
  
      if(this.state.isNormalButton) {
        this.setState(
          {
            ...this.state,
            title: 'Vms trabalhar juntos!!!',
            subtitle: 'Login Feito Com Sucesso',
            show: false
          }
        )
      }
    } else {
      alert("Erro: Preenche todos os campos")
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

  handlerGoogleButtonFormLogin = (e) => {
    this.setState(
      {
        ...this.state,
        isNormalButton: false,
        isGoogleButton: true,
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
        valueEmail : "",
        isRemembered : false
      }
    )
  }

  render() {
    return (
      <main className="content">
        <AboutUs src={people} alt="Wallpaper of AboutUs page" />
        <div className="container-login">
          <Header title={this.state.title} subtitle={this.state.subtitle} />
          {this.state.show ? (
            <>
            <div>
              <Form handleFormLoginSubmit = {() => this.handleFormLoginSubmit}
                handleInputEmail = {()=>this.handleInputEmail}
                handleInputPassword = {()=>this.handleInputPassword}
                handleCheckBox = {()=>this.handleCheckBox}
                handlerButtonFormLogin = {() => this.handlerButtonFormLogin} 
                handlerGoogleButtonFormLogin = {() => this.handlerGoogleButtonFormLogin}
              />
            </div>
            <Footer />
            </>
          ): (
            <>
              <FontAwesomeIcon className="icon-login-sucess" icon={faSmileBeam} />
              <Button text="Voltar" onClick={this.handleGoBackLogin} />
              { this.state.isRemembered && (<SubTitle centered value={"Lembrei-me de vc"} />)}
            </>
          )}
        </div>
      </main>
    )
  }

}
