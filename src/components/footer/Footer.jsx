import React from 'react';
import './footer.scss';
import facebook from '../../assets/images/footer/facebook.png'
import youtube from '../../assets/images/footer/youtube.png'
import instagram from '../../assets/images/footer/instagram.png'
import odnoklassniki from '../../assets/images/footer/odnoklassniki.png'
import vk from '../../assets/images/footer/vk.png'
import apple from '../../assets/images/footer/apple.png'
import google from '../../assets/images/footer/google.png'
import logo from '../../assets/images/footer/logo.png'



const Footer = () => {
   return (
      <footer className="footer">
         <div className="footer__content">
            <div className="footer__content-row-link">
               <a href="#">Офисы</a>
               <a href="#">Банкоматы</a>
               <a href="#">О банке</a>
               <a href="#">Интернет-банк</a>
            </div>
            <div className="footer__content-contact">
               <a href="#">Свяжитесь с нами</a>
               <a className="footer__content-contact-tel" href="tel:+7(495)7754775">+7 (495) 775 47 75</a>
               <a className="footer__content-contact-tel" href="tel:88002007004">8 800 200 70 04</a>
               <div className="footer__content-row-ico">
                  <img src={facebook} />
                  <img src={youtube} />
                  <img src={instagram} />
                  <img src={odnoklassniki} />
                  <img src={vk} />
               </div>
            </div>
            <div className="footer__content-mobile">
               <a href="#">Мобильный банк</a>
               <div className="footer__content-row-mobile">
                  <img src={apple} />
                  <img src={google} />
               </div>
            </div>
         </div>
         <div className="footer__two">
            <div className="footer__two-content">
               <img src={logo} />
               <p>Генеральная лицензия Банка России №2766 от 27.11.2014 г.</p>
               <p>© 2020 АО «ОТП Банк»</p>
            </div>
         </div>
      </footer>
   );
}

export default Footer;