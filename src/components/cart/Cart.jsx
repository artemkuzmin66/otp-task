import React from 'react';
import './cart.scss';
import cart from '../../assets/images/cart.png'


const Cart = () => {
   return (
      <div className="cart">
         <div className="cart__content">

            <div className="cart__content-title">
               <h1>Бесплатная карта с доставкой на дом</h1>
               <h3>Закажите карту «ОТП Покупки» онлайн и получайте повышенную ставку уже сейчас</h3>
            </div>

            <div className="cart__content-row">
               <img src={cart} />
               <div className="cart__content-col">
                  <p>Обслуживание карты при выполнении простых условий — <span>0 ₽</span></p>
                  <p>Дополнительно до <span>2,5% </span>годовых к ставке по накопительному счету</p>
                  <p>Снятие наличных в банкоматах любых банков без комиссии — до 30 000 ₽</p>
               </div>
            </div>

            <div className="cart__content-flex">
               <button>Заказать карту</button>
               <a href="#">Тарифы по карте</a>
            </div>
         </div>
      </div>
   );
}

export default Cart;