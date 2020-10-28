import React from 'react';
import './countProfit.scss';
import Earn from './Earn';
import Slider from './slider/Slider';

class Calculator extends React.Component {

   state = {
      range1: 0,
      range2: 0

   }

   change = (e) => {
      const { name, value } = e.target
      this.setState({ [name]: value })
   }

   render() {
      const { range1, range2 } = this.state

      return (
         <div className="calculator">
            <h3>Первоначальная сумма накопления</h3>
            <div className="calculator__slider">
               <output for="fader" id="volume" className="calculator__slider-num">{range1}</output>
               <span className="calculator__slider-rub">RUB</span>
            </div>
            <div className="slider">
               <input name="range1" value={range1} onChange={this.change} className="range" type="range" id="fader" min="0" max="300000" step="1" />
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
               <span className="calculator__slider-num">{range2}</span>
               <span className="calculator__slider-rub">+ 0,5% к ставке</span>
            </div>
            <div className="slider">
               <input name="range2" value={range2} onChange={this.change} className="range" type="range" id="fader" min="0" max="30000" step="1" />
            </div>
            <Earn />
         </div>

      );
   }
}

export default Calculator;