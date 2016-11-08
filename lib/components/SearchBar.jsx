import React from 'react'

export const SearchBar = ({ updateSearch }) => {
  return(
    <section className='search-bar-header'>

      <p
        className='application-title'>
        <span className='nimble'>Nimble</span>
        <span className='network'>Network</span>
      </p>

      <input
        className='search-bar'
        aria-label='search contact list'
        onChange={updateSearch}
        placeholder='Search Contacts...'
      />

    </section>
  )
}
