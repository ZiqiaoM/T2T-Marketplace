import React from 'react';
import { withIronSessionSsr } from 'iron-session/next'
import { sessionOptions } from '../lib/session'
import { User } from './api/user'

import { InferGetServerSidePropsType } from 'next'

export default function PrivatePage({user}){

      return (
        <div>
            <h1>Hello {user.username}</h1>
            <h1>Hello {user.email}</h1>
            <h1>Hello {user.id}</h1>
            <p>Secret Content</p>
        </div>
      )
}


export const getServerSideProps = withIronSessionSsr(async function ({
  req,
  res,
}) {
  const user = req.session.user
  console.log(user)
  if (user === undefined) {
    res.setHeader('location', '/login')
    res.statusCode = 302
    res.end()
    return {
      props: {
        user: { isLoggedIn: false, login: '', avatarUrl: '' },
      },
    }
  }

  return {
    props: { user: req.session.user },
  }
},
sessionOptions)