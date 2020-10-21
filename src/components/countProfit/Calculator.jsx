import React from 'react';
import './countProfit.scss';
import Earn from './Earn';

const Calculator = () => {
   return (
      <div className="calculator">
         <h3>Первоначальная сумма накопления</h3>
         <div className="calculator__slider">
            <span className="calculator__slider-num">300 000</span>
            <span className="calculator__slider-rub">RUB</span>
         </div>
         <div className="calculator__slider-text-block">
            <span className="calculator__slider-text">от 0 ₽</span>
            <span className="calculator__slider-text">Не ограничена</span>
         </div>

         <div className="calculator__term-title">Укажите срок накопления</div>
         <div className="calculator__term-row">
            <div className="calculator__term">
               <div className="calculator__term-text">3 месяца</div>
               <div className="calculator__term-percent">4% годовых</div>
            </div>
            <div className="calculator__term">
               <div className="calculator__term-text">3 месяца</div>
               <div className="calculator__term-percent">4% годовых</div>
            </div>
            <div className="calculator__term">
               <div className="calculator__term-text">3 месяца</div>
               <div className="calculator__term-percent">4% годовых</div>
            </div>
         </div>

         <div className="calculator__term-title">Сумма покупок в месяц (необходима для повышенной ставки)</div>
         <div className="calculator__slider two">
            <span className="calculator__slider-num">15 000 ₽</span>
            <span className="calculator__slider-rub">+ 0,5% к ставке</span>
         </div>
         <Earn />
      </div>

   );
}

export default Calculator;