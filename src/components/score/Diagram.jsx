import React from 'react';
import './score.scss';


const Diagram = () => {
   return (
      <div className="diagram">
         <div className="diagram__content">
            <div className="diagram__col">
               <div className="diagram__col-percent">+0,2 %</div>
               <div className="diagram__col-block">
                  4,2 %
               </div>
               <div className="diagram__col-num">7 000 ₽</div>
            </div>

            <div className="diagram__col">
               <div className="diagram__col-percent percent-two">+1 %</div>
               <div className="diagram__col-block block-two">
                  5 %
               </div>
               <div className="diagram__col-num num-two">15 000 ₽</div>
            </div>

            <div className="diagram__col">
               <div className="diagram__col-percent percent-three">+1,5 %</div>
               <div className="diagram__col-block block-three">
                  5,5 %
               </div>
               <div className="diagram__col-num num-three">30 000 ₽</div>
            </div>

            <div className="diagram__col">
               <div className="diagram__col-percent percent-four">+2 %</div>
               <div className="diagram__col-block block-four">
                  6 %
               </div>
               <div className="diagram__col-num num-four">50 000 ₽</div>
            </div>

            <div className="diagram__col">
               <div className="diagram__col-percent percent-five">+2,5 %</div>
               <div className="diagram__col-block block-five">
                  6,5 %
               </div>
               <div className="diagram__col-num num-five">70 000 ₽</div>
            </div>

         </div>
      </div>
   );
}

export default Diagram;