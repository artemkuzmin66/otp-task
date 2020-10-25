import React from 'react';
import './rate.scss';
import icoOne from '../../assets/images/rate/ico-one.png';
import icoTwo from '../../assets/images/rate/ico-two.png';
import icoThree from '../../assets/images/rate/ico-three.png';
import one from '../../assets/images/1.png';
import two from '../../assets/images/2.png';
import three from '../../assets/images/3.png';

const Rate = () => {
   return (
      <div className="rate">
         <div className="container">
            <h1>Как получить повышенную ставку</h1>
            <div className="rate__row">

               <div className="rate__col">
                  <img className="rate__col-ico" src={icoOne} />
                  <img className="rate__col-img" src={one} />
                  <h3>Откройте накопительный счёт</h3>
                  <p>и получите <span>карту «ОТП Покупки»</span>.Карту можно оформить в отделении банка или заказать доставку</p>
               </div>

               <div className="rate__col">
                  <img className="rate__col-ico" src={icoTwo} />
                  <img className="rate__col-img" src={two} />
                  <h3 className="rate__col-text">Совершайте покупки</h3>
                  <p>по карте и получайте бонус: дополнительно до 2,5% годовых к ставке по накопительному счету</p>
               </div>

               <div className="rate__col">
                  <img className="rate__col-ico" src={icoThree} />
                  <img className="rate__col-img" src={three} />
                  <h3 className="rate__col-text">Получайте призы</h3>
                  <p>Станьте одним из 100 обладателей денежных призов с помощью ваших обычных покупок по карте</p>
               </div>

            </div>
         </div>
      </div>
   );
}

export default Rate;