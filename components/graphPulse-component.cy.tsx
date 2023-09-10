import GraphPulseComponent from "./graphPulse-component"
/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

// Cypress Component Test
describe('<GraphPulseComponent />', () => {
  it('should render and display expected content', () => {
    // Mount the React component for the About page
    cy.mount(<GraphPulseComponent labels={[]} dataS={[]} dataT={[]} />)

    cy.get('h1').contains('Это тоже')
  })
})

// Prevent TypeScript from reading file as legacy script
export {}
