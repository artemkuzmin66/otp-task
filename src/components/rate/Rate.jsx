import React from 'react';
import './rate.scss';
import icoOne from '../../assets/images/rate/ico-one.png'
import icoTwo from '../../assets/images/rate/ico-two.png'
import icoThree from '../../assets/images/rate/ico-three.png'

const Rate = () => {
   return (
      <div className="rate">
         <h1>Как получить повышенную ставку</h1>
         <div className="rate__row">

            <div className="rate__col">
               <img className="rate__col-ico" src={icoOne} />
               <span className="rate__col-num">1</span>
               <h3>Откройте накопительный счёт</h3>
               <p>и получите <span>карту «ОТП Покупки»</span>.Карту можно оформить в отделении банка или заказать доставку</p>
            </div>

            <div className="rate__col">
               <img className="rate__col-ico" src={icoTwo} />
               <span className="rate__col-num">2</span>
               <h3 className="rate__col-text">Совершайте покупки</h3>
               <p>по карте и получайте бонус: дополнительно до 2,5% годовых к ставке по накопительному счету</p>
            </div>

            <div className="rate__col">
               <img className="rate__col-ico" src={icoThree} />
               <span className="rate__col-num">3</span>
               <h3 className="rate__col-text">Получайте призы</h3>
               <p>Станьте одним из 100 обладателей денежных призов с помощью ваших обычных покупок по карте</p>
            </div>

         </div>

      </div>
   );
}

export default Rate;