import React from 'react';
import './Deploy.scss';

const Deploy = () => {
   return (
      <div name="more" className="deployStock">
         <div className="container">
            <h1>Акция «Будь в плюсе»</h1>
            <h2>Получите возможность удвоить остаток на вашем накопительном счете! </h2>
            <div className="deployStock__row">
               <div className="deployStock__col">

                  <h3>Как участвовать</h3>
                  <p>Пополните ваш накопительный счет и совершайте покупки с карты «ОТП Покупки».
                  Сто участников, которые совершат наибольший объем покупок, станут обладателями призов!</p>
                  <a className="deployStock__col-rules" href="#">Правила акции</a>
                  <a className="deployStock__col-close" href="#">Свернуть</a>
               </div>
               <div className="deployStock__col">
                  <h3>Призовой фонд</h3>
                  <p>Главный приз — удвоение остатка на вашем накопительном счете на сумму до 350 000 рублей.
                  А также денежные призы до 50 000 рублей</p>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Deploy;