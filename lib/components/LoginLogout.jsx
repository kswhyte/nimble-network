import React, { Component } from 'react'
import firebase, { signIn, signOut } from '../firebase'

export const LoginLogout = ({ user }) => {
  return (
    <section className='login-status-bar'>

      {user ?
        <section className='user-login-info'>
          <section className='logged-in-text'>
            Logged in as

            <h3 className='user-name'> {user.displayName} </h3>

            <h4 className='user-email'> {user.email} </h4>
          </section>

          <button
            className='logout-btn'
            onClick={() => signOut()}>
            Sign Out
          </button>

        </section> :

        <button
          className='login-btn'
          onClick={() => signIn()}>
          Sign In
        </button>
      }

    </section>
  )
}
