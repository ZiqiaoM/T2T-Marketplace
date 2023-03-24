import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import Carts from '../UI/Cart/Carts';

// for cartlist
import {useSelector} from 'react-redux';

const Layout = () => {

  const showCart = useSelector(state=>state.cartUi.cartIsVisible)
  return (
    <div>
        <Header />
        {
          showCart && <Carts />
        }

        {/* <Carts /> */}

        <div className='Route_style'>
            {/*<Routes />*/}
        </div>
        <Footer />
    </div>
  );
};

export default Layout
