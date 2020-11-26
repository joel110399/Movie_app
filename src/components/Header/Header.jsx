import React from "react";
import "../Header/header.css"
import UserLogo from "../../assets/user-icon.png"
import Logo from "../../assets/play_logo.png"


const Header = () => {
    return(
        <header className="header">
          <img className="header__img" src={Logo} alt="logo"/>
          <div className="header__menu">
            <div className="header__menu--profile">
              <img src={UserLogo} alt=""/>
              <p>Perfil</p>
            </div>
            <ul>
              <li><a href="/">Cuenta</a></li>
              <li><a href="/">Cerrar Sesión</a></li>
            </ul>
          </div>
        </header>
    );
};

export default Header;