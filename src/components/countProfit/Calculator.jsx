import React from 'react';
import './countProfit.scss';
import Earn from './Earn';
import Slider from './slider/Slider';

class Calculator extends React.Component {

   state = {
      range: 300000,
      rangeTwo: 15000

   }

   change = (e) => {
      this.setState({ range: e.target.value })
   }
   changeTwo = (e) => {
      this.setState({ rangeTwo: e.target.value })
   }
   render() {
      const { range, rangeTwo } = this.state

      return (
         <div className="calculator">
            <h3>Первоначальная сумма накопления</h3>
            <div className="calculator__slider">
               <output for="fader" id="volume" className="calculator__slider-num">{range}</output>
               <span className="calculator__slider-rub">RUB</span>
            </div>
            <div className="slider">
               <input value={range} onChange={this.change} className="range" type="range" id="fader" min="0" max="300000" step="1" />
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
               <span className="calculator__slider-num">{rangeTwo}</span>
               <span className="calculator__slider-rub">+ 0,5% к ставке</span>
            </div>
            <div className="slider">
               <input value={rangeTwo} onChange={this.changeTwo} className="range" type="range" id="fader" min="0" max="30000" step="1" />
            </div>
            <Earn />
         </div>

      );
   }
}

export default Calculator;