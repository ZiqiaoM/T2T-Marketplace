import React from 'react';
import PersonalHome from './PersonalHome';
import WishlistandSold from './WishlistandSold';
import {Route, Routes} from "react-router-dom";
import Searched from './Searched';
import EditMyInfo from './EditMyInfo';
import MyOrder from './MyOrder';


function Pages() {
  return (
    
      <Routes>
          <Route path="/" element={<PersonalHome />} />
          <Route path="/cuisine/:type" element={<WishlistandSold />} />
          <Route path="/myorder" element={<MyOrder />} />
          <Route path="/searched/:search" element={<Searched/>}/>
          <Route path="/editmyinfo" element={<EditMyInfo/>}/>
      </Routes>
    
    
  );
}

export default Pages