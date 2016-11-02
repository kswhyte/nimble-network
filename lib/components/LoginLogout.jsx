import React, { Component } from 'react'
import firebase, { signIn, signOut } from '../firebase';

export const LoginLogout = ({user}) => {
  return (
    <section className="login-status">
      {
        user ?
        <section className="user-welcome">
          <p>Logged in as
            <span
              className ='user-display'> {user.displayName}
            </span> ({user.email})
          </p>
          <button
            className='login-btn'
            onClick={() =>
              signOut()}>Sign Out
          </button>
        </section> :
        <button
          className='login-btn'
          onClick={() =>
            signIn()}>Sign In
        </button>
      }
    </section>
  );
}
