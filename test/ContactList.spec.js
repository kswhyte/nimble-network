// import React from 'react'
//
// import { shallow, mount, render } from 'enzyme'
// import { assert } from 'chai'
//
// import ContactForm from '../lib/components/ContactForm'
// import Application from '../lib/components/Application'
// import ContactList from '../lib/components/ContactList'
//
// const sinon = require('sinon')
//
// describe('ContactList | Unit Test', () => {
//   it('can mount with no properties', () => {
//     const wrapper = shallow(<ContactList />)
//   })
//   it('renders a "contact-list" ', () => {
//     const wrapper = mount(<ContactList />)
//     assert(wrapper.find('.contact-list'))
//   })
//   it('renders list "single-contacts" ', () => {
//     const wrapper = shallow(<ContactList />)
//     assert(wrapper.find('.single-contact'))
//   })
//   it('renders as a <ul>', () => {
//     const wrapper = shallow(<ContactList />)
//     assert.equal(wrapper.type(), 'ul')
//   })
//   it('renders xml elements', () => {
//     sinon.spy(ContactList.prototype, 'render')
//     const wrapper = mount(<ContactList />)
//     assert.equal(ContactList.prototype.render.calledOnce, true)
//   })
// })
//
// describe('ContactList | Feature Test', () => {
//   it('should change the "hideDisplay" state with true/false', () => {
//     const wrapper = mount(<ContactList />)
//     const messageInput = wrapper.find('.contact-form-and-list')
//
//     messageInput.simulate('change', {target: {value: 'true'} })
//     setTimeout(() => {
//       assert.equal(wrapper.state('hideDisplay'), ('true'))
//     }, 5000)
//   })
// })
