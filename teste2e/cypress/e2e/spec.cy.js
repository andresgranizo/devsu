describe('E2E Testing', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it('Adds first product to the cart', () => {
    cy.addProductToCart(1);
  });

  it('Adds second product to the cart', () => {
    cy.addProductToCart(2);
  });

  it('Views the cart and verifies products', () => {
    cy.verifyCartProductCount(0);
  });

  it('Fills the Place Order form and Purchase products', () => {
    const orderDetails = {
      name: 'Test User',
      country: 'Ecuador',
      city: 'Latacunga',
      card: '1234 5678 9012 3456',
      month: '12',
      year: '2025',
    };
    cy.placeOrder(orderDetails);
  });
});
