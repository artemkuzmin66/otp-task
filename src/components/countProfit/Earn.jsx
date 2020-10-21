import React from 'react';
import './countProfit.scss';

const Earn = () => {
   return (
      <div className="earn">
         <div className="earn-title">Сколько я заработаю</div>
         <p className="earn-subtitle">к 20 февраля 2021</p>
         <div className="earn-row">
            <span className="earn-text">Доход по счёту</span>
            <span className="earn-num">9 200 ₽</span>
         </div>
         <div className="earn-row">
            <span className="earn-text">Ставка</span>
            <span className="earn-num">+ 4,2 %</span>
         </div>
         <div className="earn-row">
            <span className="earn-text">Сумма к получению</span>
            <span className="earn-num-total">309 200 ₽</span>
         </div>
         <button className="earn-btn">Открыть счёт</button>
      </div>

   );
}

export default Earn;