import firebase, { reference, signIn, signOut } from '../firebase';
import React, { Component } from 'react'

export const LoginLogout = ({ user }) => {
  return(
    <section className="log-in-out-bar">
    {
      user ?
      <div className="user-welcome-bar">
        <p className="welcome-contact">Logged in as
          <span
            className="user-name-welcome">
            {user.displayName.split(' ')[0]}
          </span> ({user.email})
        </p>
        <button
          className="sign-out-button"
          onClick={() =>
            signOut()}>
            Sign Out
        </button>
      </div> :
      <button
        className="sign-in-button"
        onClick={() =>
          signIn()}>
          Sign In
      </button>
    }
    </section>
  )
}
