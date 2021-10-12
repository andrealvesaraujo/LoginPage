import React from "react"
import './fonts/Lato-Regular.ttf';
import './fonts/Lato-Bold.ttf';
import './fonts/Merriweather-Regular.ttf';
import './Login.scss';
import people from  './img/people.svg';
import googleIcon from  './img/icon_Google.png';
export default class Login extends React.Component {

  render() {
    return (
      <main className="content">
        <div className="container-aboutUs">
          <img src={people} alt="Wallpaper of AboutUs page" />
        </div>
        <div>
          <div className="container-title">
              <h3>Bem vindo de volta</h3>
              <h1>Faça login na sua conta</h1>
          </div>
          <div>
            <form className="container-form">
                <label for="email">E-mail</label>
                <input type="email" id="email" name="email" placeholder="example@gmail.com"/>
                <label for="password">Senha</label>
                <input type="password" id="password" name="password"/>
                <div className="container-rememberMe">
                  <input type="checkbox" id="rememberMe" name="rememberMe"  />
                  <label for="rememberMe">Lembre de mim</label>
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
