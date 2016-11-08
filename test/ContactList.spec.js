import React from 'react'

import { shallow, mount, render } from 'enzyme'
import { assert, expect } from 'chai'

import ContactForm from '../lib/components/ContactForm'
import Application from '../lib/components/Application'
import ContactList from '../lib/components/ContactList'
import contactList from './helpers/contactList'
import contact from './helpers/contact'

const sinon = require('sinon')

describe('ContactList | Unit Tests', () => {
  it.skip('can mount with no properties', () => {
    const wrapper = shallow(<ContactList contactList={contactList} contact={contact} />)
  })
  it.skip('renders a "contact-list" ', () => {
    const wrapper = shallow(<ContactList contactList={contactList} />)
    assert(wrapper.find('.contact-list'))
  })
  it.skip('renders list "single-contacts" ', () => {
    const wrapper = mount(<ContactList contactList={contactList} />)
    assert(wrapper.find('.single-contact'))
  })
  it.skip('renders as a <section>', () => {
    const wrapper = shallow(<ContactList contactList={contactList} />)
    assert.equal(wrapper.type(), 'section')
  })
  it.skip('renders xml elements', () => {
    sinon.spy(ContactList.prototype, 'render')
    const wrapper = mount(<ContactList contactList={contactList} />)
    assert.equal(ContactList.prototype.render.calledOnce, true)
  })
})

describe('ContactList | Feature Test', () => {
  it.skip('should change the "hideDisplay" state with true/false', () => {
    const wrapper = mount(<ContactList />)
    const searchBar = wrapper.find('.')

    messageInput.simulate('change', {target: {value: 'true'} })
      assert.equal(wrapper.state('hideDisplay'), ('true'))
  })
})
