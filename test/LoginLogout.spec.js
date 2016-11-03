import React from 'react'

import { shallow, mount, render } from 'enzyme'
import { assert, expect } from 'chai'

import { LoginLogout } from '../lib/components/LoginLogout'

const sinon = require('sinon')

describe('LoginLogout | Unit Test', () => {
  it('can mount with no properties', () => {
  const wrapper = shallow(<LoginLogout />)
  })
  it('should have a button with 1 prop', function(){
    const wrapper = render(<LoginLogout />)
    assert.equal(wrapper.find('.login-btn').length, 1)
  })
  it('should have the button text rendered onto the page', function(){
    const wrapper = render(<LoginLogout />)
    expect(wrapper.text()).to.contain('Sign In')
  })
  it('renders as a <section>', () => {
    const wrapper = shallow(<LoginLogout />)
    assert.equal(wrapper.type(), 'section')
  })
})
