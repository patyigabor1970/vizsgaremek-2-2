import React from 'react'
import Training from './Training'

describe('<Training />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Training />)
  })
})