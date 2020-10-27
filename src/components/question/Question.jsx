import React from 'react';
import './question.scss';


class Question extends React.Component {

   state = {

      isOpen1: false, name1: 'Для получения повышенного бонуса выпускается специальная бесплатная карта тарифа «ОТП Покупки (к накопительному счету)». Покупки по другим картам банка не учитываются.',
      isOpen2: false, name2: 'Проценты по базовой ставке выплачиваются ежемесячно в последний календарный день месяца. Бонус к ставке (за совершение покупок по карте) выплачивается ежемесячно, до 20 числа месяца, следующего за расчетным.',
      isOpen3: false, name3: 'Проценты по базовой ставке начисляются на накопительный счет, бонус по ставке начисляется на счет карты «ОТП Покупки».',
      isOpen4: false, name4: 'Повышенная ставка начисляется на сумму остатка, не превышающую 350 000 рублей. Количество накопительных счетов при этом не ограничено.'

   }


   handleDeploy1 = () => {
      this.state.isOpen1 = !this.state.isOpen1;
      this.setState({})
   }
   handleDeploy2 = () => {
      this.state.isOpen2 = !this.state.isOpen2;
      this.setState({})
   }
   handleDeploy3 = () => {
      this.state.isOpen3 = !this.state.isOpen3;
      this.setState({})
   }
   handleDeploy4 = () => {
      this.state.isOpen4 = !this.state.isOpen4;
      this.setState({})
   }



   render() {
      const { name1, name2, name3, name4, isOpen1, isOpen2, isOpen3, isOpen4 } = this.state
      return (
         <div>
            <div className="question">
               <div className="container">
                  <div className="question__content">
                     <h1>Вопросы и ответы</h1>
                     <div className="question__content-col">
                        <p onClick={this.handleDeploy1}>У меня уже есть карта ОТП Банка, могу я принять участие в акции?</p>

                        {isOpen1 &&
                           <div className="deployQuestion__text">{name2}</div>
                        }

                        <p onClick={this.handleDeploy2}>В какой срок начисляются проценты по накопительному счету?</p>
                        {isOpen2 &&
                           <div className="deployQuestion__text">{name2}</div>
                        }
                        <p onClick={this.handleDeploy3}>На какой счет зачисляются проценты по накопительному счету?</p>
                        {isOpen3 &&
                           <div className="deployQuestion__text">{name3}</div>
                        }
                        <p onClick={this.handleDeploy4}>На какую сумму остатка на накопительном счете выплачивается повышенная ставка?</p>
                        {isOpen4 &&
                           <div className="deployQuestion__text">{name4}</div>
                        }
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default Question;