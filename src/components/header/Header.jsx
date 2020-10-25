import React from 'react';
import headerMain from '../../assets/images/header-main.png'
import logo from '../../assets/images/logo.png'
import shape from '../../assets/images/Shape.png'
import './header.scss';

const Header = () => {
   return (
      <header className="header">
         <img className="header__ico-shape" src={shape} />
         <div className="container">
            <div className="header__content">
               <img className="header__content-logo" src={logo} />
               <h1>Повышаем процент по накопительному счёту</h1>
               <p className="header__content-text">До 6,5% годовых</p>
               <p className="header__content-text">Пополнение и снятие без ограничений</p>
               <p className="header__content-text">Акция «Будь в плюсе» — возможность получить до 350 000 рублей </p>
               <button className="header__content-btn">Открыть счёт</button>
            </div>
         </div>
      </header>
   );
}

export default Header;