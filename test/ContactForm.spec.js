import React from 'react'

import { shallow, mount, render } from 'enzyme'
import { assert } from 'chai'

import ContactForm from '../lib/components/ContactForm'
import Application from '../lib/components/Application'
import ContactList from '../lib/components/ContactList'

const sinon = require('sinon')

describe('ContactForm | Unit Test', () => {
  it('can mount with no properties', () => {
    const wrapper = shallow(<ContactForm />)
  })
  xit('renders a "contact-form-and-list" ', () => {
    const wrapper = mount(<ContactForm />)
    assert(wrapper.find('.contact-form-and-list'))
  })
  it('renders "input-fields" ', () => {
    const wrapper = shallow(<ContactForm />)
    assert(wrapper.find('.input-form-field'))
  })
  it('renders as a <section>', () => {
    const wrapper = shallow(<ContactForm />)
    assert.equal(wrapper.type(), 'section')
  })
})

describe('ContactForm | Feature Test', () => {
  xit('should change the "fullName" state with new contact info', () => {
    const wrapper = mount(<ContactForm />)
    const messageInput = wrapper.find('.contact-form-and-list')

    messageInput.simulate('change', {target: {value: 'First Last Name'} })
    setTimeout(() => {
      assert.equal(wrapper.state('fullName'), ('First Last Name'))
    }, 5000)
  })
  xit('can render a new contact when "Save Contact" button is clicked"', () => {
    const wrapper = mount(<Application />)
    const messageInput = wrapper.find('.contact-form')

    messageInput.simulate('change', {target: {value: 'goodmorning'} })
    wrapper.find('.save-contact-button').simulate('click')
    setTimeout(() => {
      assert.equal(wrapper.text(), ('goodmorning'))
    }, 5000)
  })
})
