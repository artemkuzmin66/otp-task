import React from 'react';
import './mobileApp.scss';
import bg from '../../assets/images/mobileApp/bg.png'
import logo from '../../assets/images/mobileApp/logo.png'
import QR from '../../assets/images/mobileApp/QR.png'
import apple from '../../assets/images/mobileApp/apple.png'
import google from '../../assets/images/mobileApp/google.png'


const Mobile = () => {
   return (
      <div className="mobile">
         <img className="mobile-img" src={bg} />
         <div className="mobile__content">
            <img className="mobile__content-logo" src={logo} />
            <h1>Мобильное приложение ОТП Банк</h1>
            <p>Открывайте вклады и накопительные счета прямо в приложении</p>
            <p>Оплачивайте телефон, ЖКХ и другие услуги</p>
            <p>Бесплатно пополняйте счёт с карт других банков</p>
            <div className="mobile__content-row">
               <img src={QR} />
               <div className="mobile__content-col">
                  <img src={apple} />
                  <img className="mobile__content-google" src={google} />
               </div>
            </div>
         </div>
      </div>
   );
}

export default Mobile;