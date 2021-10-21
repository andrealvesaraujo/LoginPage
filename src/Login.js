import React from "react"
import './fonts/Lato-Regular.ttf';
import './fonts/Lato-Bold.ttf';
import './fonts/Merriweather-Regular.ttf';
import './Login.scss';
import people from  './img/people.svg';
import AboutUs from './components/AboutUs';
import Title from './components/Title';
import Register from './components/Register';
import Form from './components/Form';
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

  handlerButtonFormLogin = (e) => {
    e.preventDefault()
    console.log(e)
    // Fez-se a validação
    this.setState(
      {
        ...this.state,
        title: 'Vms trabalhar juntos!!!',
        subtitle: 'Login Feito Com Sucesso',
        show: false
      }
    )
  }

  handlerGoogleButtonFormLogin = (e) => {
    e.preventDefault()
    console.log(e)
    // Fez-se a validação
    this.setState(
      {
        ...this.state,
        title: 'Google ROCKS!!!',
        subtitle: 'Login Feito Pelo Google com Sucesso',
        show: false
      }
    )
  }

  handleGoBackLogin = () => {
    // Fez-se a validação
    this.setState(
      {
        ...this.state,
        title: "Faça login na sua conta",
        subtitle: "Bem vindo de volta",
        show: true
      }
    )
  }

  // Focar em mudar o titulo a partir de click do form
  render() {
    return (
      <main className="content">
        <AboutUs src={people} alt="Wallpaper of AboutUs page" />
        <div className="container-login">
          <Title title={this.state.title} subtitle={this.state.subtitle} />
          {this.state.show ? (
            <>
            <div>
              <Form 
                handlerButtonFormLogin = {() => this.handlerButtonFormLogin} 
                handlerGoogleButtonFormLogin = {() => this.handlerGoogleButtonFormLogin}
              />
            </div>
            <Register />
            </>
          ): (
            <>
              <FontAwesomeIcon className="icon-login-sucess" icon={faSmileBeam} />
              <Button text="Voltar" onClick={this.handleGoBackLogin} />
            </>
          )}
        </div>
      </main>
    )
  }

}
