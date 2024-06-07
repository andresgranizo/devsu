
describe('E2E Testing', () => {
  before(() => {
    // Clear cookies and local storage before starting the tests
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it('Adds first product to the cart', () => {
    cy.visit('https://www.demoblaze.com/prod.html?idp_=1');
    cy.get('.btn-success').contains('Add to cart').click();
    cy.on('window:alert', (text) => {
      expect(text).to.contains('Product added');
    });
  });

  it('Adds second product to the cart', () => {
    cy.visit('https://www.demoblaze.com/prod.html?idp_=2');
    cy.get('.btn-success').contains('Add to cart').click();
    cy.on('window:alert', (text) => {
      expect(text).to.contains('Product added');
    });
  });

  it('Views the cart and verifies products', () => {
    cy.visit('https://www.demoblaze.com/cart.html#');
    cy.wait(2000); // Ensure the cart is fully loaded

    // Verify that at least one product exists in the cart
    cy.get('tbody', { timeout: 10000 }).find('tr.success').should('have.length.greaterThan', 0);

    cy.get('tbody').find('tr.success').then(($rows) => {
      cy.log(`Number of products in cart: ${$rows.length}`);
    });
  });

  it('Fills the Place Order form and Purchase products', () => {
    cy.visit('https://www.demoblaze.com/cart.html#');
    cy.wait(2000);

    cy.get('.btn-success').contains('Place Order').click();
    cy.wait(1000); // Wait for the form to be visible

    cy.get('#name').type('Test User');
    cy.get('#country').type('Ecuador');
    cy.get('#city').type('Latacunga');
    cy.get('#card').type('1234 5678 9012 3456');
    cy.get('#month').type('12');
    cy.get('#year').type('2025');

    cy.contains('Purchase').click();

    cy.get('.sweet-alert').should('be.visible');
    cy.get('.sweet-alert').contains('Thank you for your purchase!');
  });
});
