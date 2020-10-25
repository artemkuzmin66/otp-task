import React from 'react';
import Deploy from './Deploy';
import './stock.scss';

class Stock extends React.Component {

   state = {
      isOpen: false,
   }

   handleDeploy = () => {
      this.state.isOpen = !this.state.isOpen;
      this.setState({})
   }

   render() {
      const { isOpen } = this.state

      return (
         <div>
            <div className="stock">
               <div className="container">
                  <div className="stock__content">
                     <h1 className="stock__content-h1">Акция «Будь в плюсе»</h1>
                     <p className="stock__content-p">Получите возможность удвоить остаток на вашем накопительном счете! </p>
                     <a onClick={this.handleDeploy} className="stock__content-a" href="#more">Подробнее</a>
                  </div>
               </div>
            </div>
            { isOpen &&
               <Deploy />
            }

         </div>
      );
   }
}

export default Stock;