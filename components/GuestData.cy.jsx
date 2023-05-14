import React from 'react'
import GuestData from './GuestData'

describe('<GuestData />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<GuestData />)
  })
})