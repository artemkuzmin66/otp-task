import React from 'react';
import './stock.scss';

const Stock = () => {
   return (
      <div className="stock">
         <div className="stock__content">
            <h1>Акция «Будь в плюсе»</h1>
            <p>Получите возможность удвоить остаток на вашем накопительном счете! </p>
            <a href="#">Подробнее</a>
         </div>
      </div>
   );
}

export default Stock;