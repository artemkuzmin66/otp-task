import React from 'react';
import './question.scss';


const Question = () => {
   return (
      <div className="question">
         <div className="question__content">
            <h1>Вопросы и ответы</h1>
            <div className="question__content-col">
               <p>У меня уже есть карта ОТП Банка, могу я принять участие в акции?</p>
               <p>В какой срок начисляются проценты по накопительному счету?</p>
               <p>На какой счет зачисляются проценты по накопительному счету?</p>
               <p>На какую сумму остатка на накопительном счете выплачивается повышенная ставка?</p>
            </div>
         </div>
      </div>
   );
}

export default Question;