import React from 'react'

const Helmet = (props) => {

    document.title = 'T2T|An Online Campus Thrift Store -' + props.title; 
  return (
    <div className='w-100'>{props.children}</div>
  );
}

export default Helmet