import React from "react"
import './fonts/Lato-Regular.ttf';
import './fonts/Lato-Bold.ttf';
import './fonts/Merriweather-Regular.ttf';
import './Login.scss';
import people from  './img/people.svg';
import googleIcon from  './img/icon_Google.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'


export default class Login extends React.Component {

  render() {
    return (
      <main className="content">
        <div className="container-aboutUs">
          <img src={people} alt="Wallpaper of AboutUs page" />
        </div>
        <div className="container-login">
          <div className="container-title">
              <h3>Bem vindo de volta</h3>
              <h1>Faça login na sua conta</h1>
          </div>
          <div>
            <form className="container-form">
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
                <div className="container-rememberMe">
                  <div className="container-checkbox">
                    <input type="checkbox" id="rememberMe" name="rememberMe"  />
                    <label htmlFor="rememberMe">Lembre de mim</label>
                  </div>
                  <a href="#">Esqueceu sua senha?</a>
                </div>
                <div className="container-button">
                  <button type="submit">Entrar</button>
                </div>
                <div className="container-button-google">
                  <button> <img src={googleIcon} alt="Icon of Google" /> Ou faça login com o Google </button>
                </div>
            </form>
          </div>
          <div className="container-register">
            <span>  Não tem uma conta? <a href="#">Cadastre-se</a> </span>
          </div>
        </div>
      </main>
    )
  }

}
