import React from 'react';
import logoNav from '../assets/images/logoNav.png';
import s from './Nav.module.css';
import { NavLink } from 'react-router-dom';

const HeaderNav = () => {
   return (
      <header className={s.nav}>
         <div className="container">
            <div className={s.content}>
               <img className={s.img} src={logoNav} />
               <nav>
                  <div className={s.item}>
                     <NavLink to='/profile' activeClassName={s.active}>Рассчитать доход</NavLink>
                  </div>
                  <div className={s.item}>
                     <NavLink to='/user' activeClassName={s.active}>Вопросы и ответы</NavLink>
                  </div>
                  <button className={s.item}>
                     <NavLink to='/grow' activeClassName={s.active}>Открыть счёт</NavLink>
                  </button>
               </nav>
            </div>
         </div>
      </header>
   );
}

export default HeaderNav;