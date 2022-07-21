import React from 'react';
import './Showpage.css';
import Product from './Product';
import sofa from './sofa.jpg';
import mattress from './mattress.jpg';
import cosmetic from './cosmetic.jpg';
import fridge from './fridge.jpg';

function Showpage() {
  return (
    <div className='Showpage'>
        <div className='show_container'>
            <div className='show_row'>
                <Product image={sofa} title='Sofa' price={30} location='Rams' />
                <Product image={mattress} title='Mattress' price={50} location='Bell' />
                <Product image={cosmetic} title='Cosmetic' price={40} location='Davis Library'/>
            </div>
            <div className='show_row'>
                <Product image={fridge} title='fridge' price={30} location='GT'/>
                <Product image={sofa} title='Sofa' price={30} location='Rams'/>
                <Product image={sofa} title='Sofa' price={30} location='Rams'/>
            </div>

        </div>
    </div>
    
  )
}

export default Showpage