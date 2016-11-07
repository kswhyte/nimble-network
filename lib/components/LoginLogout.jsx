import React, { Component } from 'react'
import firebase, { signIn, signOut } from '../firebase'

export const LoginLogout = ({ user }) => {
  return (
    <section className='login-status-bar'>

      {user ?
        <section className='user-login-info'>
          <section className='logged-in-text'>
            <h3>Currently signed in as:  </h3>
            <h3 className='user-name'>{user.displayName} </h3>
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
