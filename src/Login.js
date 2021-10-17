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


export default class Login extends React.Component {

  render() {
    return (
      <main className="content">
        <AboutUs src={people} alt="Wallpaper of AboutUs page" />
        <div className="container-login">
          <Title title="Faça login na sua conta" subtitle="Bem vindo de volta" />
          <div>
            <Form/>
          </div>
          <Register />
        </div>
      </main>
    )
  }

}
