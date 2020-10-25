import React from 'react';
import Diagram from './Diagram';
import './score.scss';
import diagram from '../../assets/images/diagram.png'


const Score = () => {
   return (
      <div className="score">
         <div className="container">
            <div className="score__row">
               <div className="score__content">
                  <h1>Как работает накопительный счёт</h1>
                  <h3>Ставки растут в зависимости от суммы ежемесячных трат по карте «ОТП Покупки»</h3>
                  <p>Процент надбавки </p>
                  <p>Ставка с учетом надбавки</p>
                  <p>Сумма трат по карте </p>
                  <span>
                     <h2 className="score__content-text">Повышенная ставка начисляется на среднемесячный остаток по счёту,
            не превышающий 350 000 рублей. Далее – начисление по базовой ставке 4%</h2>
                     <a href="#">Правила по накопительному счету</a>
                  </span>

               </div>
               <img src={diagram} />
            </div>
         </div>
      </div>
   );
}

export default Score;