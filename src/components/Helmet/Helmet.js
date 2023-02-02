import React from 'react'
import Head from 'next/head'

const Helmet = (props) => {

  return (
    <>
      <Head>
        <title>{'T2T|An Online Campus Thrift Store -' + props.title}</title>
      </Head>
    <div className='w-100'>{props.children}</div>
    </>
  );
}

export default Helmet
