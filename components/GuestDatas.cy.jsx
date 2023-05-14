import React from 'react'
import GuestDatas from './GuestDatas'

describe('<GuestDatas />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<GuestDatas />)
  })
})