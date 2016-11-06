import React, { Component } from 'react'
import firebase, { signIn, signOut } from '../firebase'

export const LoginLogout = ({ user }) => {
  return (
    <section className='login-status-bar'>

      {user ?
        <section className='user-login-info'>
          <p
            className='logged-in-text'>
            Logged in as
            <span className='user-name'> {user.displayName}</span>
            <span className='user-email'> ({user.email})</span>
          </p>

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
