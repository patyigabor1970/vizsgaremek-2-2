import React from 'react'
import Price from './Price'

describe('<Price />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Price />)
  })
})