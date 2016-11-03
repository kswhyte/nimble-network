import React from 'react'

import { shallow, mount, render } from 'enzyme'
import { assert } from 'chai'

import Application from '../lib/components/Application'

const sinon = require('sinon')

describe('Application | Unit Test', () => {
  it('can mount with no properties', () => {
    const wrapper = shallow(<Application />)
  })
  it('renders as a <section>', () => {
    const wrapper = shallow(<Application />)
    assert.equal(wrapper.type(), 'section')
  })
  it('can call componentDidMount', () => {
    sinon.spy(Application.prototype, 'componentDidMount')
    const wrapper = mount(<Application />)
    assert.equal(Application.prototype.componentDidMount.calledOnce, true)
  })
  it('should have a search bar with 1 prop', function(){
    const wrapper = render(<Application />)
    assert.equal(wrapper.find('.search-bar-header').length, 1)
  })
  it('should have a contact form and list with 1 prop', function(){
    const wrapper = render(<Application />)
    assert.equal(wrapper.find('.contact-form-and-list').length, 1)
  })
  it('should have login buttons with 1 prop', function(){
    const wrapper = render(<Application />)
    assert.equal(wrapper.find('.login-status-bar').length, 1)
  })
  it('renders xml elements', () => {
    sinon.spy(Application.prototype, 'render')
    const wrapper = mount(<Application />)
    assert.equal(Application.prototype.render.calledOnce, true)
  })
})
