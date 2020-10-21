import React, { useState } from 'react';
import './countProfit.scss';
import s from './Profit.module.scss';
import Text from './Text';

class Profit extends React.Component {


   state = {
      text: [
         { onActive: false, name: 'Всем клиентам' },
         { onActive: false, name: 'Клиентам ОТП Premium' }
      ]

   }

   handleClass = (name) => {
      const text = this.state.text.concat()

      const texts = text.find(t => t.name === name)
      texts.onActive = !texts.onActive;

      this.setState({ text })
   }

   renderText() {
      return this.state.text.map(t => {
         return (
            <Text
               texts={this.texts}
               key={t.name}
               onClass={this.handleClass.bind(this, t.name)}
            />
         )
      })
   }



   render() {

      return (
         <div className="profit">
            <div>
               <h1>Рассчитайте свой доход по накопительному счету</h1>
               <div className="profit__text-row">
                  <p className="profit__text">Пополнение и снятие без ограничений</p>
                  <p className="profit__text">Выплата процентов каждый месяц</p>
                  <p className="profit__text">Возможность открытия онлайн</p>
               </div>
            </div>
         </div >

      );
   }
}

export default Profit;